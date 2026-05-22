import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("web-application-development");

export const Route = createFileRoute("/services/web-application-development")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: WebApplicationDevelopment,
});

function WebApplicationDevelopment() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <TechnologyExpertiseSection
          accent="var(--brand-blue)"
          tabs={[
            {
              label: "Frontend",
              cards: [
                {
                  role: "React Developers",
                  level: "L5",
                  category: "SPA & SSR",
                  tech: ["React", "Next.js", "Zustand"],
                },
                {
                  role: "Vue Specialists",
                  level: "L4",
                  category: "SPA & SSR",
                  tech: ["Vue 3", "Nuxt 3", "Pinia"],
                },
                {
                  role: "Performance Eng.",
                  level: "L5",
                  category: "Web Performance",
                  tech: ["Core Web Vitals", "Lighthouse", "Partytown"],
                },
                {
                  role: "Accessibility Eng.",
                  level: "L5",
                  category: "A11y",
                  tech: ["WCAG 2.2", "axe-core", "ARIA"],
                },
              ],
            },
            {
              label: "Backend & API",
              cards: [
                {
                  role: "API Architects",
                  level: "L6",
                  category: "API Design",
                  tech: ["REST", "GraphQL", "tRPC"],
                },
                {
                  role: "Node.js Engineers",
                  level: "L5",
                  category: "Server & Runtime",
                  tech: ["Node.js", "Bun", "Hono"],
                },
                {
                  role: "Auth Specialists",
                  level: "L5",
                  category: "Auth & Identity",
                  tech: ["Auth0", "Clerk", "OAuth2"],
                },
                {
                  role: "Realtime Engineers",
                  level: "L5",
                  category: "Realtime & WS",
                  tech: ["WebSockets", "Socket.io", "SSE"],
                },
              ],
            },
            {
              label: "CMS & E-commerce",
              cards: [
                {
                  role: "CMS Engineers",
                  level: "L4",
                  category: "Headless CMS",
                  tech: ["Sanity", "Contentful", "Strapi"],
                },
                {
                  role: "E-commerce Eng.",
                  level: "L5",
                  category: "Commerce",
                  tech: ["Shopify", "Medusa", "Commerce.js"],
                },
                {
                  role: "Payments Engineers",
                  level: "L5",
                  category: "Payments",
                  tech: ["Stripe", "Razorpay", "Braintree"],
                },
              ],
            },
            {
              label: "DevOps & Deploy",
              cards: [
                {
                  role: "Platform Engineers",
                  level: "L5",
                  category: "Hosting & Edge",
                  tech: ["Vercel", "Cloudflare", "AWS"],
                },
                {
                  role: "CI/CD Engineers",
                  level: "L5",
                  category: "Pipelines",
                  tech: ["GitHub Actions", "Docker", "Nx"],
                },
                {
                  role: "Monitoring Eng.",
                  level: "L4",
                  category: "Observability",
                  tech: ["Sentry", "Datadog", "PostHog"],
                },
              ],
            },
          ]}
        />
      }
    />
  );
}
