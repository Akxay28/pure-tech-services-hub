import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("software-development");

export const Route = createFileRoute("/services/software-development")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: SoftwareDevelopment,
});

function SoftwareDevelopment() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <TechnologyExpertiseSection
        accent="var(--brand-blue)"
        tabs={[
          {
            label: "Frontend",
            cards: [
              { role: "React Developers",  level: "L5", category: "Frontend Engineering", tech: ["React", "Next.js", "TypeScript"] },
              { role: "Vue Specialists",   level: "L4", category: "Frontend Engineering", tech: ["Vue 3", "Nuxt", "Tailwind"] },
              { role: "Angular Engineers", level: "L6", category: "Enterprise Frontend",  tech: ["Angular", "RxJS", "NgRx"] },
              { role: "UI/UX Engineers",   level: "L5", category: "Design Systems",       tech: ["Figma", "Framer", "Storybook"] },
            ],
          },
          {
            label: "Backend",
            cards: [
              { role: "Node.js Engineers", level: "L5", category: "Backend Engineering", tech: ["Node.js", "NestJS", "PostgreSQL"] },
              { role: "Python Engineers",  level: "L5", category: "Backend Engineering", tech: ["Python", "FastAPI", "Celery"] },
              { role: "Java Developers",   level: "L6", category: "Enterprise Backend",  tech: ["Java", "Spring Boot", "Hibernate"] },
              { role: ".NET Engineers",    level: "L5", category: "Microsoft Stack",     tech: [".NET 8", "C#", "Entity Framework"] },
            ],
          },
          {
            label: "Databases",
            cards: [
              { role: "PostgreSQL DBAs",   level: "L5", category: "Relational",          tech: ["PostgreSQL", "pgvector", "Citus"] },
              { role: "NoSQL Engineers",   level: "L5", category: "Document & KV Store", tech: ["MongoDB", "Redis", "DynamoDB"] },
              { role: "Search Engineers",  level: "L5", category: "Search & Index",      tech: ["Elasticsearch", "Typesense", "Algolia"] },
              { role: "Graph DB Eng.",     level: "L6", category: "Graph Databases",     tech: ["Neo4j", "Amazon Neptune", "Dgraph"] },
            ],
          },
          {
            label: "QA & Testing",
            cards: [
              { role: "QA Engineers",       level: "L4", category: "Test Automation",  tech: ["Playwright", "Cypress", "Jest"] },
              { role: "Perf. Engineers",    level: "L5", category: "Load & Perf.",     tech: ["k6", "Gatling", "Locust"] },
              { role: "Security Analysts",  level: "L6", category: "AppSec & Pentest", tech: ["Burp Suite", "OWASP ZAP", "Snyk"] },
              { role: "QA Architects",      level: "L6", category: "Quality Strategy", tech: ["TestRail", "Allure", "Selenium"] },
            ],
          },
        ]}
      />
      }
    />
  );
}
