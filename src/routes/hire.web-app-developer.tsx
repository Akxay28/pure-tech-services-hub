import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("web-app-developer");

export const Route = createFileRoute("/hire/web-app-developer")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireWebAppDeveloperPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Frontend",
                    cards: [
                      { role: "React Engineers",          level: "L5", category: "React Ecosystem",    tech: ["React", "Next.js", "TypeScript"] },
                      { role: "Vue Engineers",            level: "L5", category: "Vue Ecosystem",      tech: ["Vue 3", "Nuxt", "Pinia"] },
                      { role: "Svelte Engineers",         level: "L5", category: "Svelte Ecosystem",   tech: ["SvelteKit", "Svelte 5", "Vite"] },
                      { role: "UI Engineers",             level: "L4", category: "Component Systems",  tech: ["shadcn/ui", "Radix UI", "Framer Motion"] },
                    ],
                  },
                  {
                    label: "Backend & API",
                    cards: [
                      { role: "Node.js Engineers",        level: "L5", category: "Backend",            tech: ["Node.js", "Hono", "tRPC"] },
                      { role: "Edge Engineers",           level: "L5", category: "Edge Computing",     tech: ["Cloudflare Workers", "Deno Deploy", "Vercel Edge"] },
                      { role: "Auth Specialists",         level: "L5", category: "Authentication",     tech: ["Clerk", "Auth0", "Supabase Auth"] },
                      { role: "Payments Engineers",       level: "L4", category: "Monetisation",       tech: ["Stripe", "Lemon Squeezy", "Paddle"] },
                    ],
                  },
                  {
                    label: "Performance & Quality",
                    cards: [
                      { role: "Web Performance Eng.",     level: "L5", category: "Core Web Vitals",    tech: ["Lighthouse", "WebPageTest", "Partytown"] },
                      { role: "Accessibility Eng.",       level: "L4", category: "a11y",               tech: ["axe-core", "WCAG 2.2", "ARIA"] },
                      { role: "Testing Engineers",        level: "L4", category: "Test Coverage",      tech: ["Playwright", "Vitest", "Testing Library"] },
                      { role: "SEO Engineers",            level: "L4", category: "Search & Discovery", tech: ["Schema.org", "Core Web Vitals", "next-seo"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)   },
});
