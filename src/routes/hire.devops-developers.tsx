import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("devops-developers");

export const Route = createFileRoute("/hire/devops-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireDevopsDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "CI/CD & Automation",
                    cards: [
                      { role: "CI/CD Engineers",          level: "L5", category: "Pipelines",          tech: ["GitHub Actions", "GitLab CI", "CircleCI"] },
                      { role: "IaC Engineers",            level: "L5", category: "Infrastructure as Code", tech: ["Terraform", "Pulumi", "CDK"] },
                      { role: "GitOps Engineers",         level: "L5", category: "GitOps",             tech: ["ArgoCD", "Flux", "Helm"] },
                      { role: "Release Engineers",        level: "L5", category: "Release Management", tech: ["Spinnaker", "Changesets", "Semantic Release"] },
                    ],
                  },
                  {
                    label: "Cloud & Containers",
                    cards: [
                      { role: "AWS Engineers",            level: "L6", category: "Amazon Web Services",tech: ["EKS", "Lambda", "RDS"] },
                      { role: "GCP Engineers",            level: "L6", category: "Google Cloud",       tech: ["GKE", "Cloud Run", "BigQuery"] },
                      { role: "Azure Engineers",          level: "L6", category: "Microsoft Azure",    tech: ["AKS", "Azure Functions", "Cosmos DB"] },
                      { role: "Kubernetes Engineers",     level: "L6", category: "Container Orchestration", tech: ["Kubernetes", "Istio", "Karpenter"] },
                    ],
                  },
                  {
                    label: "Observability & Security",
                    cards: [
                      { role: "Observability Eng.",       level: "L5", category: "Monitoring",         tech: ["Datadog", "Grafana", "OpenTelemetry"] },
                      { role: "SRE Engineers",            level: "L6", category: "Reliability",        tech: ["SLOs", "Error Budgets", "PagerDuty"] },
                      { role: "Platform Security Eng.",   level: "L5", category: "Cloud Security",     tech: ["Wiz", "Prisma Cloud", "AWS Security Hub"] },
                      { role: "FinOps Engineers",         level: "L5", category: "Cost Management",    tech: ["AWS Cost Explorer", "Infracost", "Kubecost"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>) 
  },
});
