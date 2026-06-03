import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const CONTACT_RECIPIENTS = [
  { email: "design@puretechnology.in", apiKeyEnv: "RESEND_API_KEY" },
  { email: "shravan.shinde@puretechnology.in", apiKeyEnv: "RESEND_API_KEY_SHRAVAN" },
];
const DEFAULT_RESEND_FROM = "Pure Technology <onboarding@resend.dev>";

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

type ContactPayload = Record<string, unknown>;

function jsonResponse(body: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

let localDevVarsPromise: Promise<Record<string, string>> | undefined;

async function localDevVars(): Promise<Record<string, string>> {
  if (!localDevVarsPromise) {
    localDevVarsPromise = (async () => {
      try {
        const fs = await import("node:fs/promises");
        const path = await import("node:path");
        const file = await fs.readFile(path.join(process.cwd(), ".dev.vars"), "utf-8");
        return Object.fromEntries(
          file
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter((line) => line && !line.startsWith("#"))
            .map((line) => {
              const [key, ...valueParts] = line.split("=");
              return [key.trim(), valueParts.join("=").trim()];
            }),
        );
      } catch {
        return {};
      }
    })();
  }

  return localDevVarsPromise;
}

async function envValue(env: unknown, key: string): Promise<string | undefined> {
  if (env && typeof env === "object" && key in env) {
    const value = (env as Record<string, unknown>)[key];
    if (typeof value === "string" && value.trim()) return value;
  }

  if (typeof process !== "undefined") {
    const value = process.env[key];
    if (value?.trim()) return value;
  }

  const devVars = await localDevVars();
  if (devVars[key]) return devVars[key];

  return undefined;
}

function textField(payload: ContactPayload, key: string): string {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatField(label: string, value: string): string {
  return value ? `${label}: ${value}` : "";
}

function buildContactEmail(payload: ContactPayload) {
  const formSource = textField(payload, "formSource") || "Website contact form";
  const name =
    textField(payload, "name") ||
    textField(payload, "visitor-name") ||
    "Website visitor";
  const email = textField(payload, "email") || textField(payload, "visitor-email");
  const phone = textField(payload, "phone") || textField(payload, "visitor-phone");
  const company = textField(payload, "company") || textField(payload, "visitor-company");
  const role = textField(payload, "role");
  const interest = textField(payload, "interest") || textField(payload, "service");
  const message =
    textField(payload, "message") ||
    textField(payload, "requirements") ||
    textField(payload, "description");

  const lines = [
    `New enquiry from ${formSource}`,
    "",
    formatField("Name", name),
    formatField("Email", email),
    formatField("Phone", phone),
    formatField("Company", company),
    formatField("Role", role),
    formatField("Interest / Service", interest),
    "",
    "Project requirements:",
    message || "Not provided",
  ].filter(Boolean);

  const htmlRows = [
    ["Form source", formSource],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Company", company],
    ["Role", role],
    ["Interest / Service", interest],
    ["Project requirements", message || "Not provided"],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const subjectSource = formSource.replace(/\s+/g, " ").trim();

  return {
    name,
    email,
    message,
    subject: `${subjectSource} - Pure Technology enquiry`,
    text: lines.join("\n"),
    html: `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.5;color:#111827;">
        <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #e5e7eb;">
          ${htmlRows}
        </table>
      </div>`,
  };
}

async function handleContactRequest(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse({ message: "Method not allowed" }, { status: 405 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ message: "Invalid contact form payload." }, { status: 400 });
  }

  const email = buildContactEmail(payload);
  if (!email.email || !email.message) {
    return jsonResponse(
      { message: "Please provide an email address and project requirements." },
      { status: 400 },
    );
  }

  const primaryApiKey = await envValue(env, "RESEND_API_KEY");
  if (!primaryApiKey) {
    console.error("Missing RESEND_API_KEY");
    return jsonResponse(
      { message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const from = (await envValue(env, "RESEND_FROM_EMAIL")) ?? DEFAULT_RESEND_FROM;

  for (const recipient of CONTACT_RECIPIENTS) {
    const apiKey = (await envValue(env, recipient.apiKeyEnv)) ?? primaryApiKey;
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient.email],
        subject: email.subject,
        text: email.text,
        html: email.html,
        reply_to: email.email,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error(
        `Resend send failed for ${recipient.email}: ${resendResponse.status} ${errorBody}`,
      );
      return jsonResponse(
        { message: "Could not send your enquiry. Please try again." },
        { status: 502 },
      );
    }
  }

  return jsonResponse({ ok: true });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
/** YouTube embeds need Referer sent cross-origin; Cloudflare often defaults to same-origin. */
function withEmbedFriendlyHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  if (!headers.has("Referrer-Policy")) {
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/contact") {
        return await handleContactRequest(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withEmbedFriendlyHeaders(await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
