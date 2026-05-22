import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("fullstack-developers");

export const Route = createFileRoute("/hire/fullstack-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireFullstackDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Product Stack",
                    cards: [
                      { role: "Full-Stack Eng.",          level: "L5", category: "Product Engineering",tech: ["Next.js", "tRPC", "Prisma"] },
                      { role: "T3 Stack Engineers",       level: "L5", category: "T3 Ecosystem",       tech: ["Next.js", "Tailwind", "TypeScript"] },
                      { role: "API Architects",           level: "L6", category: "API Design",         tech: ["GraphQL", "REST", "OpenAPI"] },
                      { role: "Auth Specialists",         level: "L5", category: "Security",           tech: ["Auth0", "Clerk", "Supabase Auth"] },
                    ],
                  },
                  {
                    label: "Infrastructure",
                    cards: [
                      { role: "Platform Engineers",       level: "L6", category: "Deployment",         tech: ["Vercel", "Railway", "Fly.io"] },
                      { role: "Database Engineers",       level: "L5", category: "Data Layer",         tech: ["PostgreSQL", "Neon", "PlanetScale"] },
                      { role: "Edge Engineers",           level: "L5", category: "Edge & CDN",         tech: ["Cloudflare Workers", "Deno Deploy", "Fastly"] },
                      { role: "Payments Engineers",       level: "L4", category: "Fintech",            tech: ["Stripe", "Lemon Squeezy", "Razorpay"] },
                    ],
                  },
                  {
                    label: "Quality",
                    cards: [
                      { role: "Testing Engineers",        level: "L4", category: "End-to-End",         tech: ["Playwright", "Vitest", "MSW"] },
                      { role: "Performance Engineers",    level: "L5", category: "Optimisation",       tech: ["Lighthouse", "Web Vitals", "k6"] },
                      { role: "Security Engineers",       level: "L5", category: "AppSec",             tech: ["Snyk", "OWASP", "Semgrep"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)   },
});
