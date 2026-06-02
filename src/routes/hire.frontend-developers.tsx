import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("frontend-developers");

export const Route = createFileRoute("/hire/frontend-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireFrontendDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Frameworks",
                    cards: [
                      { role: "Next.js Engineers",        level: "L5", category: "React / Next.js",    tech: ["Next.js 15", "React 19", "App Router"] },
                      { role: "Nuxt Engineers",           level: "L5", category: "Vue / Nuxt",         tech: ["Nuxt 3", "Vue 3", "Nitro"] },
                      { role: "Astro Engineers",          level: "L4", category: "Content-first",      tech: ["Astro", "MDX", "View Transitions"] },
                      { role: "SvelteKit Engineers",      level: "L5", category: "Svelte",             tech: ["SvelteKit", "Svelte 5", "Runes"] },
                    ],
                  },
                  {
                    label: "UI & Design Systems",
                    cards: [
                      { role: "Design System Eng.",       level: "L5", category: "Component Libraries",tech: ["shadcn/ui", "Storybook", "Radix UI"] },
                      { role: "Animation Engineers",      level: "L5", category: "Motion & Animation", tech: ["Framer Motion", "GSAP", "Motion One"] },
                      { role: "CSS Architects",           level: "L5", category: "Styling",            tech: ["Tailwind CSS", "CSS Modules", "vanilla-extract"] },
                      { role: "Accessibility Eng.",       level: "L4", category: "a11y",               tech: ["WCAG 2.2", "axe-core", "ARIA"] },
                    ],
                  },
                  {
                    label: "Performance & DX",
                    cards: [
                      { role: "Web Performance Eng.",     level: "L5", category: "Core Web Vitals",    tech: ["Lighthouse", "Partytown", "Bundle Analysis"] },
                      { role: "Build Engineers",          level: "L5", category: "Toolchain",          tech: ["Vite", "Turbopack", "Rspack"] },
                      { role: "Testing Engineers",        level: "L4", category: "Frontend Testing",   tech: ["Vitest", "Playwright", "Testing Library"] },
                      { role: "Micro-frontend Eng.",      level: "L6", category: "Architecture",       tech: ["Module Federation", "Nx", "Turborepo"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)   },
});
