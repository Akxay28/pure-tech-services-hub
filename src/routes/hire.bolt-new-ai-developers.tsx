import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("bolt-new-ai-developers");

export const Route = createFileRoute("/hire/bolt-new-ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireBoltNewAiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Bolt Stack",
                    cards: [
                      { role: "Bolt.new Developers", level: "L4", category: "AI-first Dev",       tech: ["Bolt.new", "StackBlitz", "WebContainers"] },
                      { role: "React Engineers",     level: "L5", category: "Frontend",           tech: ["React", "TypeScript", "Vite"] },
                      { role: "Tailwind Engineers",  level: "L4", category: "Styling",            tech: ["Tailwind CSS", "shadcn/ui", "Radix UI"] },
                      { role: "Full-Stack Eng.",     level: "L5", category: "Integration",        tech: ["Node.js", "Supabase", "Firebase"] },
                    ],
                  },
                  {
                    label: "From Bolt to Prod",
                    cards: [
                      { role: "Refactor Engineers",  level: "L5", category: "Code Quality",       tech: ["TypeScript", "ESLint", "Vitest"] },
                      { role: "Backend Eng.",        level: "L5", category: "API Layer",          tech: ["Hono", "tRPC", "REST"] },
                      { role: "Auth Specialists",    level: "L5", category: "Authentication",     tech: ["Clerk", "Auth0", "Supabase Auth"] },
                      { role: "DevOps Engineers",    level: "L5", category: "Deployment",         tech: ["Vercel", "Netlify", "Cloudflare Pages"] },
                    ],
                  },
                  {
                    label: "Scaling Up",
                    cards: [
                      { role: "Database Eng.",       level: "L5", category: "Data Layer",         tech: ["PostgreSQL", "Drizzle ORM", "Prisma"] },
                      { role: "Performance Eng.",    level: "L5", category: "Optimisation",       tech: ["Web Vitals", "Bundle Analysis", "CDN"] },
                      { role: "Testing Engineers",   level: "L4", category: "Test Coverage",      tech: ["Playwright", "Vitest", "MSW"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
        },
});
