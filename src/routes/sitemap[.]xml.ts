import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { HIRE_ROLE_SLUGS } from "@/lib/hire-roles";
import { subServiceSlugs } from "@/lib/sub-services";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/awards-achievements", changefreq: "monthly", priority: "0.6" },
  { path: "/careers", changefreq: "weekly", priority: "0.8" },
  { path: "/careers/life-at-pure-technology", changefreq: "monthly", priority: "0.7" },
  { path: "/careers/benefits-perks", changefreq: "monthly", priority: "0.7" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/gallery", changefreq: "monthly", priority: "0.6" },
  { path: "/mission-vision", changefreq: "monthly", priority: "0.7" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/team", changefreq: "monthly", priority: "0.7" },
];

const mainServiceEntries: SitemapEntry[] = [
  { path: "/services/ai-agents-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/ai-chatbot-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/ai-integration", changefreq: "monthly", priority: "0.8" },
  { path: "/services/ai-solutions", changefreq: "monthly", priority: "0.9" },
  { path: "/services/cloud-computing", changefreq: "monthly", priority: "0.8" },
  { path: "/services/cloud-infrastructure", changefreq: "monthly", priority: "0.8" },
  { path: "/services/custom-ai-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/cybersecurity", changefreq: "monthly", priority: "0.8" },
  { path: "/services/data-engineering", changefreq: "monthly", priority: "0.8" },
  { path: "/services/front-end-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/generative-ai-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/global-capability-center", changefreq: "monthly", priority: "0.8" },
  { path: "/services/it-outsourcing", changefreq: "monthly", priority: "0.8" },
  { path: "/services/it-staffing", changefreq: "monthly", priority: "0.9" },
  { path: "/services/mobile-app-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/offshore-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/product-engineering", changefreq: "monthly", priority: "0.9" },
  { path: "/services/software-development", changefreq: "monthly", priority: "0.8" },
  { path: "/services/web-application-development", changefreq: "monthly", priority: "0.8" },
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildAbsoluteUrl(origin: string, path: string) {
  return `${origin}${path === "/" ? "/" : path}`;
}

function uniqueEntries(entries: SitemapEntry[]) {
  return Array.from(new Map(entries.map((entry) => [entry.path, entry])).values());
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const entries = uniqueEntries([
          ...staticEntries,
          ...mainServiceEntries,
          ...subServiceSlugs.map((slug) => ({
            path: `/services/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...HIRE_ROLE_SLUGS.map((slug) => ({
            path: `/hire/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ]);

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${escapeXml(buildAbsoluteUrl(origin, e.path))}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
