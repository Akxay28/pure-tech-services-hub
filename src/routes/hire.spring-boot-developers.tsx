import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("spring-boot-developers");

export const Route = createFileRoute("/hire/spring-boot-developers")({
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
  component: function HireSpringBootDevelopersPage() {
    return ( 
      <>
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Spring Boot Ecosystem",
                    cards: [
                      { role: "Spring Boot Eng.",        level: "L5", category: "Core Framework",     tech: ["Spring Boot 3.x", "Starters", "Auto-config"] },
                      { role: "Spring Security Eng.",     level: "L5", category: "Security",           tech: ["Spring Security", "OAuth2", "OIDC"] },
                      { role: "Data Access Specialists",  level: "L5", category: "Persistence",        tech: ["Spring Data JPA", "Hibernate", "Liquibase"] },
                      { role: "Reactive Developers",      level: "L6", category: "Async",              tech: ["Spring WebFlux", "R2DBC", "Project Reactor"] },
                    ],
                  },
                  {
                    label: "Integration & Cloud",
                    cards: [
                      { role: "Microservices Dev.",       level: "L5", category: "Cloud-Native",       tech: ["Spring Cloud", "Eureka", "Gateway"] },
                      { role: "API Designers",            level: "L5", category: "APIs",               tech: ["Spring REST Docs", "OpenAPI/Swagger", "gRPC"] },
                      { role: "Messaging Engineers",      level: "L5", category: "Eventing",           tech: ["Spring Kafka", "Spring RabbitMQ", "JMS"] },
                      { role: "Cloud Engineers",          level: "L5", category: "Cloud Ops",          tech: ["Docker", "Kubernetes", "AWS/GCP"] },
                    ],
                  },
                ]}
              />
          } />
      </>
    )
  },
});
