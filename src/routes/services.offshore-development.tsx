import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { subServices } from "@/lib/sub-services";

const entry = subServices["offshore-development"];

export const Route = createFileRoute("/services/offshore-development")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: OffshoreDevelopment,
});

function OffshoreDevelopment() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <TechnologyExpertiseSection
          accent={entry.accent}
          tabs={[
          {
            label: "Frontend",
            cards: [
              { role: "React Developers",  level: "L5", category: "Frontend Engineering", tech: ["React", "Next.js", "TypeScript"] },
              { role: "Vue Specialists",   level: "L4", category: "Frontend Engineering", tech: ["Vue 3", "Nuxt", "Pinia"] },
              { role: "Angular Engineers", level: "L6", category: "Enterprise Frontend",  tech: ["Angular", "RxJS", "NgRx"] },
              { role: "UI Engineers",      level: "L5", category: "Design Systems",       tech: ["Figma", "Storybook", "Tailwind"] },
            ],
          },
          {
            label: "Backend",
            cards: [
              { role: "Node.js Engineers",  level: "L5", category: "Backend Engineering", tech: ["Node.js", "Express", "PostgreSQL"] },
              { role: "Python Engineers",   level: "L5", category: "Backend Engineering", tech: ["Python", "FastAPI", "Django"] },
              { role: "Java Developers",    level: "L6", category: "Enterprise Backend",  tech: ["Java", "Spring Boot", "Kafka"] },
              { role: "Go Engineers",       level: "L5", category: "Backend Engineering", tech: ["Go", "gRPC", "Redis"] },
            ],
          },
          {
            label: "Cloud & DevOps",
            cards: [
              { role: "Cloud Engineers",   level: "L6", category: "Cloud & Infra",    tech: ["AWS", "Azure", "Terraform"] },
              { role: "DevOps Engineers",  level: "L5", category: "CI/CD & Pipelines",tech: ["GitHub Actions", "Jenkins", "ArgoCD"] },
              { role: "SRE Engineers",     level: "L6", category: "Reliability",      tech: ["Prometheus", "Grafana", "K8s"] },
              { role: "Security Engineers",level: "L5", category: "AppSec",           tech: ["Snyk", "Vault", "OWASP"] },
            ],
          },
          {
            label: "Mobile",
            cards: [
              { role: "iOS Developers",     level: "L5", category: "Native iOS",       tech: ["Swift", "SwiftUI", "Xcode"] },
              { role: "Android Developers", level: "L5", category: "Native Android",   tech: ["Kotlin", "Jetpack", "Compose"] },
              { role: "Cross-Platform Eng.",level: "L4", category: "React Native",     tech: ["React Native", "Expo", "Firebase"] },
              { role: "Flutter Engineers",  level: "L4", category: "Flutter",          tech: ["Flutter", "Dart", "Riverpod"] },
            ],
          },
          {
            label: "Data & AI",
            cards: [
              { role: "Data Engineers",    level: "L5", category: "Data Pipelines", tech: ["Spark", "Airflow", "dbt"] },
              { role: "ML Engineers",      level: "L5", category: "ML & Modelling", tech: ["PyTorch", "Scikit-learn", "MLflow"] },
              { role: "AI/LLM Engineers",  level: "L6", category: "GenAI",          tech: ["LangChain", "OpenAI", "Pinecone"] },
            ],
          },
        ]}
      />
      }
    />
  );
}
