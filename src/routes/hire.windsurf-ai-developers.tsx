import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("windsurf-ai-developers");

export const Route = createFileRoute("/hire/windsurf-ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireWindsurfAiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Windsurf Workflows",
                    cards: [
                      { role: "Windsurf Developers", level: "L5", category: "AI-assisted Dev",    tech: ["Windsurf IDE", "Cascade", "Codeium"] },
                      { role: "Cascade Architects",  level: "L6", category: "Agentic Coding",     tech: ["Cascade Flows", "MCP Tools", "Deep Context"] },
                      { role: "Rules Engineers",     level: "L5", category: "Workspace Rules",    tech: ["Windsurf Rules", "Context Files", ".windsurfrules"] },
                      { role: "Full-Stack Eng.",     level: "L6", category: "Engineering",        tech: ["TypeScript", "Python", "Go"] },
                    ],
                  },
                  {
                    label: "Languages & Stacks",
                    cards: [
                      { role: "Frontend Engineers",  level: "L5", category: "Frontend",           tech: ["Next.js", "SvelteKit", "Astro"] },
                      { role: "Backend Engineers",   level: "L5", category: "Backend",            tech: ["FastAPI", "NestJS", "Hono"] },
                      { role: "Data Engineers",      level: "L5", category: "Data",               tech: ["dbt", "Polars", "DuckDB"] },
                      { role: "AI/ML Engineers",     level: "L6", category: "AI Integration",     tech: ["LangGraph", "Pydantic AI", "CrewAI"] },
                    ],
                  },
                  {
                    label: "Code Quality",
                    cards: [
                      { role: "Refactor Engineers",  level: "L5", category: "Codebase Cleanup",   tech: ["TypeScript", "Ruff", "Biome"] },
                      { role: "Testing Engineers",   level: "L4", category: "Test Coverage",      tech: ["Vitest", "Pytest", "Cypress"] },
                      { role: "Code Review Eng.",    level: "L5", category: "Review Process",     tech: ["GitHub Actions", "Linear", "Changesets"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
  },
});
