import { ReplitConnectors } from "@replit/connectors-sdk";

type ApplicationEmail = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
};

/**
 * Vercel uses a private Resend API key; Replit keeps its managed connection.
 * Never pass this key to a frontend or expose it through a VITE_* variable.
 */
export async function sendApplicationEmail(
  email: ApplicationEmail,
): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;
  const body = JSON.stringify(email);

  if (apiKey) {
    return fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body,
      signal: AbortSignal.timeout(15_000),
    });
  }

  if (process.env.VERCEL) {
    throw new Error("RESEND_API_KEY must be configured in Vercel.");
  }

  const connectors = new ReplitConnectors();
  return connectors.proxy("resend", "/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
}
