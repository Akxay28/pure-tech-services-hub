import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("replit-ai-developers");

export const Route = createFileRoute("/hire/replit-ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireReplitAiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Replit Stack",
                    cards: [
                      { role: "Replit AI Developers",level: "L4", category: "AI-assisted Dev",    tech: ["Replit Agent", "Ghostwriter", "Replit DB"] },
                      { role: "Python Engineers",    level: "L5", category: "Backend",            tech: ["Python", "FastAPI", "Flask"] },
                      { role: "Node.js Engineers",   level: "L5", category: "Backend",            tech: ["Node.js", "Express", "Hono"] },
                      { role: "Full-Stack Eng.",     level: "L5", category: "Full-Stack",         tech: ["React", "TypeScript", "PostgreSQL"] },
                    ],
                  },
                  {
                    label: "Migration",
                    cards: [
                      { role: "Cloud Migration Eng.",level: "L5", category: "Platform Migration", tech: ["AWS", "GCP", "DigitalOcean"] },
                      { role: "DevOps Engineers",    level: "L5", category: "CI/CD",              tech: ["GitHub Actions", "Docker", "Terraform"] },
                      { role: "Database Eng.",       level: "L5", category: "Data Layer",         tech: ["PostgreSQL", "Neon", "PlanetScale"] },
                    ],
                  },
                  {
                    label: "Quality",
                    cards: [
                      { role: "Code Review Eng.",    level: "L5", category: "Code Quality",       tech: ["ESLint", "Ruff", "SonarQube"] },
                      { role: "Testing Engineers",   level: "L4", category: "Test Coverage",      tech: ["Pytest", "Jest", "Playwright"] },
                      { role: "Security Reviewers",  level: "L5", category: "Code Audit",         tech: ["Bandit", "Semgrep", "Snyk"] },
                      { role: "Performance Eng.",    level: "L5", category: "Optimisation",       tech: ["Profiling", "Caching", "CDN Setup"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
        },
});
