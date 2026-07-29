import "./lib/error-capture";
import { setGlobalEnv } from "./lib/env";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const CONTACT_RECIPIENTS = [
  {
    email: "anuj@puretechnology.in",
    apiKeyEnv: "RESEND_API_KEY",
    fromEnv: "RESEND_FROM_EMAIL_ANUJ",
  },
];
const DEFAULT_RESEND_FROM = "Pure Technology <anuj@puretechnology.in>";
const MCP_PROTOCOL_VERSION = "2025-06-18";
const MCP_SERVER_PATH = "/mcp";
const MCP_CARD_PATH = "/.well-known/mcp/server-card.json";
const API_CATALOG_PATH = "/.well-known/api-catalog";

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
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

function publicOrigin(request: Request) {
  const url = new URL(request.url);
  // Use the request origin locally, but publish the canonical public host in production.
  return url.hostname === "localhost" || url.hostname === "127.0.0.1"
    ? url.origin
    : "https://puretechnology.in";
}

function machineReadableHeaders(contentType: string, extra: HeadersInit = {}) {
  return {
    "content-type": contentType,
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, HEAD, OPTIONS",
    "access-control-allow-headers": "content-type, mcp-protocol-version, mcp-session-id",
    "cache-control": "public, max-age=3600",
    ...extra,
  };
}

function mcpCard(origin: string) {
  return {
    $schema: "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
    version: "1.0",
    protocolVersion: MCP_PROTOCOL_VERSION,
    serverInfo: {
      name: "pure-technology",
      title: "Pure Technology",
      version: "1.0.0",
    },
    description:
      "Read-only public information about Pure Technology's services, capabilities, and contact options.",
    iconUrl: `${origin}/favicon-32x32.png`,
    documentationUrl: `${origin}/skills.md`,
    transport: { type: "streamable-http", endpoint: MCP_SERVER_PATH },
    capabilities: { tools: { listChanged: false } },
    authentication: { required: false },
    instructions:
      "Use this server only for public company information. It cannot submit forms, access private data, or make changes.",
  };
}

const mcpTools = [
  {
    name: "get_company_profile",
    description:
      "Get a concise public profile of Pure Technology, including its focus and locations.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_services",
    description: "Get Pure Technology's public service categories and service-page URLs.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_contact_options",
    description: "Get the public sales contact details and enquiry page URL for Pure Technology.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
];

function mcpResult(id: unknown, result: unknown) {
  return jsonResponse(
    { jsonrpc: "2.0", id: id ?? null, result },
    { headers: machineReadableHeaders("application/json") },
  );
}

function mcpError(id: unknown, code: number, message: string) {
  return jsonResponse(
    { jsonrpc: "2.0", id: id ?? null, error: { code, message } },
    { status: 400, headers: machineReadableHeaders("application/json") },
  );
}

async function handleMcpRequest(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: machineReadableHeaders("text/plain") });
  }
  if (request.method !== "POST") {
    return new Response("MCP requests must use POST.", {
      status: 405,
      headers: machineReadableHeaders("text/plain", { allow: "POST, OPTIONS" }),
    });
  }

  let body: { id?: unknown; method?: string; params?: { name?: string } };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return mcpError(null, -32700, "Invalid JSON-RPC request.");
  }

  if (!body || typeof body.method !== "string")
    return mcpError(body?.id, -32600, "Invalid request.");
  const origin = publicOrigin(request);
  if (body.method === "initialize") {
    return mcpResult(body.id, {
      protocolVersion: MCP_PROTOCOL_VERSION,
      capabilities: { tools: { listChanged: false } },
      serverInfo: mcpCard(origin).serverInfo,
      instructions: mcpCard(origin).instructions,
    });
  }
  if (body.method === "notifications/initialized") return new Response(null, { status: 202 });
  if (body.method === "tools/list") return mcpResult(body.id, { tools: mcpTools });
  if (body.method === "tools/call") {
    const name = body.params?.name;
    const data =
      name === "get_company_profile"
        ? {
            name: "Pure Technology Pvt. Ltd.",
            website: origin,
            description:
              "AI product development, product engineering, IT staffing, and GCC setup partner.",
            founded: 2012,
            headquarters: "Pune, Maharashtra, India",
          }
        : name === "get_services"
          ? {
              services: [
                { name: "AI solutions", url: `${origin}/services/ai-solutions` },
                { name: "Product engineering", url: `${origin}/services/product-engineering` },
                { name: "IT staffing", url: `${origin}/services/it-staffing` },
                {
                  name: "Global Capability Center",
                  url: `${origin}/services/global-capability-center`,
                },
                { name: "All services", url: `${origin}/services` },
              ],
            }
          : name === "get_contact_options"
            ? {
                email: "contact@puretechnology.in",
                phone: "+91 99701 11283",
                enquiryPage: `${origin}/contact`,
              }
            : undefined;
    if (!data) return mcpError(body.id, -32602, "Unknown tool.");
    return mcpResult(body.id, {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    });
  }
  return mcpError(body.id, -32601, "Method not found.");
}

function handleApiCatalog(request: Request): Response {
  const origin = publicOrigin(request);
  const body = {
    linkset: [
      {
        anchor: `${origin}${API_CATALOG_PATH}`,
        item: [
          {
            href: `${origin}${MCP_SERVER_PATH}`,
            type: "application/json",
            title: "Pure Technology public information MCP server",
          },
        ],
      },
    ],
  };
  return new Response(request.method === "HEAD" ? null : JSON.stringify(body, null, 2), {
    headers: machineReadableHeaders(
      'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
      { link: `<${API_CATALOG_PATH}>; rel="api-catalog"` },
    ),
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
    textField(payload, "name") || textField(payload, "visitor-name") || "Website visitor";
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

  const fallbackApiKey = await envValue(env, "RESEND_API_KEY");

  const defaultFrom = (await envValue(env, "RESEND_FROM_EMAIL")) ?? DEFAULT_RESEND_FROM;
  let sentCount = 0;
  const failedRecipients: string[] = [];

  for (const recipient of CONTACT_RECIPIENTS) {
    const apiKey = (await envValue(env, recipient.apiKeyEnv)) ?? fallbackApiKey;
    if (!apiKey) {
      console.error(`Missing ${recipient.apiKeyEnv}`);
      failedRecipients.push(recipient.email);
      continue;
    }
    const from = (await envValue(env, recipient.fromEnv)) ?? defaultFrom;

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
      failedRecipients.push(recipient.email);
      continue;
    }

    sentCount += 1;
  }

  if (sentCount === 0) {
    console.error(`Resend send failed for all recipients: ${failedRecipients.join(", ")}`);
    return jsonResponse(
      { message: "Could not send your enquiry. Please try again." },
      { status: 502 },
    );
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

let isDbSeeded = false;

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    setGlobalEnv(env);
    if (!isDbSeeded) {
      isDbSeeded = true;
      import("./lib/db-seed")
        .then((m) => m.seedDatabase())
        .catch((err) => console.error("Auto seeding failed:", err));
    }
    try {
      const url = new URL(request.url);
      if (url.pathname === MCP_SERVER_PATH) {
        return await handleMcpRequest(request);
      }
      if (url.pathname === MCP_CARD_PATH) {
        if (request.method === "OPTIONS") {
          return new Response(null, { status: 204, headers: machineReadableHeaders("text/plain") });
        }
        if (request.method !== "GET" && request.method !== "HEAD") {
          return new Response("Method not allowed", {
            status: 405,
            headers: { allow: "GET, HEAD, OPTIONS" },
          });
        }
        return new Response(
          request.method === "HEAD"
            ? null
            : JSON.stringify(mcpCard(publicOrigin(request)), null, 2),
          {
            headers: machineReadableHeaders("application/json"),
          },
        );
      }
      if (url.pathname === API_CATALOG_PATH) {
        if (request.method !== "GET" && request.method !== "HEAD") {
          return new Response("Method not allowed", {
            status: 405,
            headers: { allow: "GET, HEAD" },
          });
        }
        return handleApiCatalog(request);
      }
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
