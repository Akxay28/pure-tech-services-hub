import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("java-developers");

export const Route = createFileRoute("/hire/java-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": `Hire ${role.roleTitle}`,
              "description": role.lede,
              "provider": {
                "@type": "Organization",
                "name": "Pure Technology",
                "url": "https://puretechnology.in"
              },
              "areaServed": ["India", "Worldwide"],
              "serviceType": "IT Staffing & Staff Augmentation"
            },
            {
              "@type": "FAQPage",
              "mainEntity": role.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", text: faq.a }
              }))
            }
          ]
        }
      }
    ],
  }),
  component: function HireJavaDevelopersPage() {
    return ( 
      <>
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Core Java & Spring",
                    cards: [
                      { role: "Core Java Engineers",       level: "L5", category: "Language & VM",      tech: ["Java 17/21", "JVM Tuning", "Concurrency"] },
                      { role: "Spring Boot Developers",    level: "L5", category: "Frameworks",         tech: ["Spring Boot", "Spring MVC", "Spring Data"] },
                      { role: "Spring Security Eng.",     level: "L5", category: "Security",           tech: ["Spring Security", "OAuth2", "JWT"] },
                      { role: "JPA / Hibernate Specialists",level: "L6", category: "Data Access",        tech: ["Hibernate ORM", "JPA", "Query Optimisation"] },
                    ],
                  },
                  {
                    label: "Architecture & Microservices",
                    cards: [
                      { role: "Microservices Architects", level: "L6", category: "Distributed Systems",tech: ["Spring Cloud", "gRPC", "Service Mesh"] },
                      { role: "API Engineers",            level: "L5", category: "Integration",        tech: ["REST APIs", "GraphQL", "Swagger/OpenAPI"] },
                      { role: "Message Queue Specialists", level: "L5", category: "Event-Driven",       tech: ["Apache Kafka", "RabbitMQ", "ActiveMQ"] },
                      { role: "Reactive Java Developers", level: "L6", category: "Async Systems",      tech: ["Project Reactor", "RxJava", "Spring WebFlux"] },
                    ],
                  },
                  {
                    label: "Database & Cloud",
                    cards: [
                      { role: "RDBMS Developers",         level: "L4", category: "Databases",          tech: ["PostgreSQL", "Oracle DB", "MySQL"] },
                      { role: "Cloud Java Engineers",      level: "L5", category: "Cloud Integration",  tech: ["AWS SDK for Java", "GCP", "Docker"] },
                      { role: "Java DevOps Engineers",     level: "L5", category: "CI/CD",              tech: ["Maven", "Gradle", "Jenkins/GitHub Actions"] },
                      { role: "Testing Specialists",       level: "L4", category: "QA",                  tech: ["JUnit 5", "Mockito", "Testcontainers"] },
                    ],
                  },
                ]}
              />
          } />
      </>
    )
  },
});
