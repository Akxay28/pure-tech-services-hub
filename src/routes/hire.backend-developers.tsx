import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("backend-developers");

export const Route = createFileRoute("/hire/backend-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireBackendDevelopersPage() {
 return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Languages & Frameworks",
                    cards: [
                      { role: "Node.js Engineers",        level: "L5", category: "JavaScript Backend", tech: ["Node.js", "Hono", "Fastify"] },
                      { role: "Python Engineers",         level: "L5", category: "Python Backend",     tech: ["FastAPI", "Django", "SQLAlchemy"] },
                      { role: "Go Engineers",             level: "L5", category: "Go Backend",         tech: ["Go", "Chi", "SQLC"] },
                      { role: "Rust Engineers",           level: "L6", category: "Systems Backend",    tech: ["Rust", "Axum", "Tokio"] },
                    ],
                  },
                  {
                    label: "Data & Messaging",
                    cards: [
                      { role: "Database Engineers",       level: "L5", category: "Data Layer",         tech: ["PostgreSQL", "Redis", "MongoDB"] },
                      { role: "Queue Engineers",          level: "L5", category: "Async Systems",      tech: ["Kafka", "RabbitMQ", "BullMQ"] },
                      { role: "Search Engineers",         level: "L5", category: "Search",             tech: ["Elasticsearch", "Typesense", "Algolia"] },
                      { role: "Caching Engineers",        level: "L4", category: "Performance",        tech: ["Redis", "Memcached", "CDN Edge Cache"] },
                    ],
                  },
                  {
                    label: "API & Security",
                    cards: [
                      { role: "API Architects",           level: "L6", category: "API Design",         tech: ["GraphQL", "REST", "gRPC"] },
                      { role: "Auth Specialists",         level: "L5", category: "Authentication",     tech: ["JWT", "OAuth2", "Auth0"] },
                      { role: "Backend Security Eng.",    level: "L5", category: "Security",           tech: ["OWASP", "Snyk", "Rate Limiting"] },
                      { role: "Webhook Engineers",        level: "L4", category: "Event-Driven",       tech: ["Svix", "Inngest", "Temporal"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)  },
});
