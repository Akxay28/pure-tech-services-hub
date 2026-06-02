import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("lovable-ai-developers");

export const Route = createFileRoute("/hire/lovable-ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireLovableAiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Lovable Stack",
                    cards: [
                      { role: "Lovable Developers",  level: "L4", category: "AI-first Dev",       tech: ["Lovable.dev", "Supabase", "Tailwind CSS"] },
                      { role: "Supabase Eng.",       level: "L5", category: "Backend",            tech: ["Supabase Auth", "Edge Functions", "RLS Policies"] },
                      { role: "UI Prompt Eng.",      level: "L4", category: "Prompt-to-UI",       tech: ["shadcn/ui", "Radix UI", "Framer Motion"] },
                      { role: "Full-Stack Eng.",     level: "L5", category: "Integration",        tech: ["React", "TypeScript", "Vite"] },
                    ],
                  },
                  {
                    label: "From Prototype to Prod",
                    cards: [
                      { role: "Migration Eng.",      level: "L5", category: "Code Export",        tech: ["React", "Next.js", "Supabase Self-host"] },
                      { role: "Auth Specialists",    level: "L5", category: "Authentication",     tech: ["Supabase Auth", "Auth0", "Clerk"] },
                      { role: "Payments Eng.",       level: "L4", category: "Monetisation",       tech: ["Stripe", "Lemon Squeezy", "Paddle"] },
                      { role: "DevOps Engineers",    level: "L5", category: "Deployment",         tech: ["Vercel", "Fly.io", "Railway"] },
                    ],
                  },
                  {
                    label: "Quality",
                    cards: [
                      { role: "QA Engineers",        level: "L4", category: "Testing",            tech: ["Playwright", "Vitest", "Testing Library"] },
                      { role: "Performance Eng.",    level: "L5", category: "Optimisation",       tech: ["Lighthouse", "Web Vitals", "Bundle Analysis"] },
                      { role: "Security Reviewers",  level: "L5", category: "Code Audit",         tech: ["Snyk", "OWASP", "Supabase RLS Audit"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
  },
});
