import { Router, type IRouter, type Request } from "express";
import { sendApplicationEmail } from "../lib/application-email";
import {
  SubmitApplicationBody,
  SubmitApplicationResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const recipient = "info@ajbroker.eu";
const defaultSender = "AJ Broker website <info@ajbroker.eu>";
const rateLimitWindowMs = 60_000;
const maxSubmissionsPerWindow = 5;
const maxRateLimitEntries = 10_000;
const submissionRateLimits = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatField(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isSubmissionRateLimited(req: Request): boolean {
  const now = Date.now();
  const key = req.ip || "unknown";
  const entry = submissionRateLimits.get(key);

  if (!entry || entry.resetAt <= now) {
    submissionRateLimits.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (entry.count >= maxSubmissionsPerWindow) {
    return true;
  }

  entry.count += 1;

  if (submissionRateLimits.size > maxRateLimitEntries) {
    for (const [ip, limit] of submissionRateLimits) {
      if (limit.resetAt <= now) {
        submissionRateLimits.delete(ip);
      }
    }
  }

  return false;
}

router.post("/applications", async (req, res): Promise<void> => {
  const parsed = SubmitApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.flatten().fieldErrors }, "Invalid application submission");
    res.status(400).json({ error: "Please check the submitted application details." });
    return;
  }

  const application = parsed.data;
  if (
    !application.name.trim() ||
    !application.phone.trim() ||
    !application.company.trim()
  ) {
    res.status(400).json({ error: "Please complete all required fields." });
    return;
  }

  if (application.email && !isValidEmail(application.email)) {
    req.log.warn("Invalid application email address");
    res.status(400).json({ error: "Please provide a valid email address." });
    return;
  }

  if (isSubmissionRateLimited(req)) {
    req.log.warn({ ip: req.ip }, "Application submission rate limited");
    res
      .set("Retry-After", String(rateLimitWindowMs / 1000))
      .status(429)
      .json({ error: "Too many submissions. Please try again shortly." });
    return;
  }

  // Hidden form fields are frequently populated by automated submitters.
  // A successful-looking response avoids giving those clients a useful signal,
  // while keeping the inbox free of bot submissions.
  if (application.website?.trim()) {
    res.json(
      SubmitApplicationResponse.parse({
        message: "Application received",
      }),
    );
    return;
  }

  const isDetailed = application.formType === "detailed";
  const subject = isDetailed
    ? `New factoring application — ${application.company}`
    : `New consultation request — ${application.company}`;
  const html = [
    `<h2>${escapeHtml(subject)}</h2>`,
    formatField("Form", isDetailed ? "Detailed application" : "Quick consultation"),
    formatField("Name", application.name),
    formatField("Phone", application.phone),
    formatField("Company", application.company),
    formatField("Email", application.email),
    formatField("Requested amount", application.amount),
    formatField("Description", application.description),
  ].join("");

  try {
    const response = await sendApplicationEmail({
      from: process.env.RESEND_FROM_EMAIL ?? defaultSender,
      to: [recipient],
      subject,
      html,
      ...(application.email ? { reply_to: application.email } : {}),
    });

    if (!response.ok) {
      const providerError = await response.text();
      req.log.error(
        { status: response.status, providerError },
        "Resend rejected application email",
      );
      res.status(502).json({ error: "Application email could not be delivered." });
      return;
    }

    res.json(
      SubmitApplicationResponse.parse({
        message: "Application received",
      }),
    );
  } catch (error) {
    req.log.error({ err: error }, "Application email delivery failed");
    res.status(502).json({ error: "Application email could not be delivered." });
  }
});

export default router;