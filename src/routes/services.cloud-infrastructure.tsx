import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { subServices } from "@/lib/sub-services";

const entry = subServices["cloud-infrastructure"];

export const Route = createFileRoute("/services/cloud-infrastructure")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: CloudInfrastructure,
});

function CloudInfrastructure() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-blue)"
  tabs={[
    {
      label: "AWS",
      cards: [
        { role: "AWS Architects",     level: "L6", category: "Solutions Architecture", tech: ["EC2", "EKS", "Lambda"] },
        { role: "AWS Data Engineers", level: "L5", category: "Data & Analytics",       tech: ["Redshift", "Glue", "Athena"] },
        { role: "AWS DevOps Eng.",    level: "L5", category: "CI/CD",                  tech: ["CodePipeline", "CDK", "ECR"] },
        { role: "AWS Security Eng.",  level: "L6", category: "Cloud Security",         tech: ["IAM", "GuardDuty", "KMS"] },
      ],
    },
    {
      label: "Azure",
      cards: [
        { role: "Azure Architects",   level: "L6", category: "Solutions Architecture", tech: ["AKS", "Azure AD", "ARM"] },
        { role: "Azure Data Eng.",    level: "L5", category: "Data & Analytics",       tech: ["Synapse", "Data Factory", "Databricks"] },
        { role: "Azure DevOps Eng.",  level: "L5", category: "CI/CD",                  tech: ["Azure DevOps", "Bicep", "ACR"] },
        { role: "Azure Security Eng.",level: "L6", category: "Cloud Security",         tech: ["Defender", "Sentinel", "Key Vault"] },
      ],
    },
    {
      label: "GCP",
      cards: [
        { role: "GCP Architects",    level: "L6", category: "Solutions Architecture", tech: ["GKE", "BigQuery", "Cloud Run"] },
        { role: "GCP Data Eng.",     level: "L5", category: "Data & Analytics",       tech: ["Dataflow", "Pub/Sub", "Looker"] },
        { role: "GCP DevOps Eng.",   level: "L5", category: "CI/CD",                  tech: ["Cloud Build", "Artifact Registry", "Terraform"] },
      ],
    },
    {
      label: "DevOps & IaC",
      cards: [
        { role: "Terraform Engineers", level: "L5", category: "Infrastructure as Code", tech: ["Terraform", "Pulumi", "Crossplane"] },
        { role: "K8s Engineers",       level: "L6", category: "Container Orchestration",tech: ["Kubernetes", "Helm", "Istio"] },
        { role: "GitOps Engineers",    level: "L5", category: "GitOps",                 tech: ["ArgoCD", "Flux", "GitHub Actions"] },
        { role: "FinOps Analysts",     level: "L4", category: "Cloud Cost",             tech: ["CloudHealth", "Infracost", "Spot.io"] },
      ],
    },
    {
      label: "Observability",
      cards: [
        { role: "SRE Engineers",       level: "L6", category: "Reliability",     tech: ["Prometheus", "Grafana", "PagerDuty"] },
        { role: "Observability Eng.",  level: "L5", category: "Tracing & Logs",  tech: ["OpenTelemetry", "Datadog", "Jaeger"] },
        { role: "Chaos Engineers",     level: "L6", category: "Resilience Eng.", tech: ["Chaos Monkey", "Gremlin", "Litmus"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
