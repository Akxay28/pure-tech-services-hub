import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("cursor-ai-developers");

export const Route = createFileRoute("/hire/cursor-ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireCursorAiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Cursor Workflows",
                    cards: [
                      { role: "Cursor Power Users",  level: "L5", category: "AI-assisted Dev",    tech: ["Cursor", "Claude 3.5", "GPT-4o"] },
                      { role: "Rules Architects",    level: "L5", category: ".cursorrules",       tech: [".cursorrules", "MDC Rules", "Context Files"] },
                      { role: "MCP Integrators",     level: "L5", category: "Tool Integration",   tech: ["MCP Servers", "Cursor Tools", "Context7"] },
                      { role: "Full-Stack Eng.",     level: "L6", category: "Engineering",        tech: ["TypeScript", "React", "Node.js"] },
                    ],
                  },
                  {
                    label: "Languages & Frameworks",
                    cards: [
                      { role: "Frontend Engineers",  level: "L5", category: "Frontend",           tech: ["Next.js", "React", "Vue"] },
                      { role: "Backend Engineers",   level: "L5", category: "Backend",            tech: ["Go", "Python", "Rust"] },
                      { role: "Mobile Engineers",    level: "L5", category: "Mobile",             tech: ["React Native", "Swift", "Kotlin"] },
                      { role: "AI/ML Engineers",     level: "L6", category: "AI Integration",     tech: ["LangChain", "Pydantic AI", "FastAPI"] },
                    ],
                  },
                  {
                    label: "Code Quality",
                    cards: [
                      { role: "Refactor Engineers",  level: "L5", category: "Code Quality",       tech: ["TypeScript", "Biome", "Ruff"] },
                      { role: "Testing Engineers",   level: "L4", category: "Test Coverage",      tech: ["Vitest", "Pytest", "Playwright"] },
                      { role: "Code Review Eng.",    level: "L5", category: "Review Process",     tech: ["GitHub", "Linear", "Conventional Commits"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
  },
});
