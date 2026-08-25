import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import {
  SubmitApplicationBody,
  SubmitApplicationResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const recipient = "info@ajbroker.eu";
const defaultSender = "AJ Broker website <info@ajbroker.eu>";

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

router.post("/applications", async (req, res): Promise<void> => {
  const parsed = SubmitApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.flatten().fieldErrors }, "Invalid application submission");
    res.status(400).json({ error: "Please check the submitted application details." });
    return;
  }

  const application = parsed.data;
  if (application.email && !isValidEmail(application.email)) {
    req.log.warn("Invalid application email address");
    res.status(400).json({ error: "Please provide a valid email address." });
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
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? defaultSender,
        to: [recipient],
        subject,
        html,
        ...(application.email ? { reply_to: application.email } : {}),
      }),
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