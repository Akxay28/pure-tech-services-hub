import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("google-antigravity-developers");

export const Route = createFileRoute("/hire/google-antigravity-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireGoogleAntigravityDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Agentspace",
                    cards: [
                      { role: "Agentspace Eng.",          level: "L6", category: "Enterprise AI",      tech: ["Google Agentspace", "Vertex AI Agents", "ADK"] },
                      { role: "Agent Builder Eng.",       level: "L5", category: "Agent Development",  tech: ["Agent Development Kit", "A2A Protocol", "MCP"] },
                      { role: "Connector Engineers",      level: "L5", category: "Enterprise Integrations", tech: ["Salesforce", "ServiceNow", "Jira Connectors"] },
                      { role: "Search AI Engineers",      level: "L5", category: "Enterprise Search",  tech: ["Vertex AI Search", "FHIR Search", "BigQuery"] },
                    ],
                  },
                  {
                    label: "Google Cloud AI",
                    cards: [
                      { role: "Vertex AI Eng.",           level: "L6", category: "Vertex Platform",    tech: ["Vertex AI Studio", "Model Garden", "Pipelines"] },
                      { role: "Gemini API Eng.",          level: "L5", category: "Gemini Models",      tech: ["Gemini 2.5 Pro", "Grounding", "Function Calling"] },
                      { role: "GCP Data Engineers",       level: "L5", category: "Data Layer",         tech: ["BigQuery", "Dataflow", "Pub/Sub"] },
                      { role: "IAM & Security Eng.",      level: "L5", category: "Access Control",     tech: ["Google IAM", "VPC-SC", "CMEK"] },
                    ],
                  },
                  {
                    label: "Workspace AI",
                    cards: [
                      { role: "Workspace AI Eng.",        level: "L4", category: "Google Workspace",   tech: ["Gemini in Workspace", "Apps Script", "AppSheet"] },
                      { role: "AppSheet Developers",      level: "L4", category: "No-code Apps",       tech: ["AppSheet", "Duet AI", "Google Sheets"] },
                      { role: "Firebase AI Eng.",         level: "L5", category: "Mobile & Web AI",    tech: ["Firebase Genkit", "App Hosting", "Firestore"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)
  },
});
