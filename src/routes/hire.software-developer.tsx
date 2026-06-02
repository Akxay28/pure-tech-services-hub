import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("software-developer");

export const Route = createFileRoute("/hire/software-developer")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireSoftwareDeveloperPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Engineering",
                    cards: [
                      { role: "Full-Stack Engineers",     level: "L5", category: "Full-Stack",         tech: ["React", "Node.js", "PostgreSQL"] },
                      { role: "Backend Engineers",        level: "L5", category: "Backend",            tech: ["Go", "Python", "Rust"] },
                      { role: "Frontend Engineers",       level: "L5", category: "Frontend",           tech: ["Next.js", "TypeScript", "Tailwind CSS"] },
                      { role: "API Architects",           level: "L6", category: "API Design",         tech: ["GraphQL", "REST", "gRPC"] },
                    ],
                  },
                  {
                    label: "Infrastructure",
                    cards: [
                      { role: "DevOps Engineers",         level: "L5", category: "CI/CD",              tech: ["GitHub Actions", "Docker", "Kubernetes"] },
                      { role: "Cloud Engineers",          level: "L6", category: "Cloud",              tech: ["AWS", "GCP", "Azure"] },
                      { role: "Database Engineers",       level: "L5", category: "Data Layer",         tech: ["PostgreSQL", "Redis", "MongoDB"] },
                      { role: "Platform Engineers",       level: "L6", category: "Platform Eng.",      tech: ["Terraform", "Helm", "ArgoCD"] },
                    ],
                  },
                  {
                    label: "Quality",
                    cards: [
                      { role: "QA Engineers",             level: "L4", category: "Testing",            tech: ["Playwright", "Cypress", "Jest"] },
                      { role: "Security Engineers",       level: "L5", category: "AppSec",             tech: ["Snyk", "OWASP", "Semgrep"] },
                      { role: "Performance Engineers",    level: "L5", category: "Optimisation",       tech: ["k6", "Lighthouse", "Grafana"] },
                      { role: "Tech Leads",               level: "L7", category: "Leadership",         tech: ["Architecture Review", "RFC Process", "ADRs"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)  },
});
