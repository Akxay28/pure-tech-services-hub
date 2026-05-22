import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("gemini-developers");

export const Route = createFileRoute("/hire/gemini-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireGeminiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Gemini API",
                    cards: [
                      { role: "Gemini API Eng.",     level: "L5", category: "API Integration",    tech: ["Gemini 2.5 Pro", "Google AI SDK", "Vertex AI"] },
                      { role: "Multimodal Eng.",     level: "L5", category: "Multimodal",         tech: ["Gemini Vision", "Audio Understanding", "PDF Parsing"] },
                      { role: "Grounding Eng.",      level: "L5", category: "Google Search RAG",  tech: ["Grounding with Search", "Vertex Search", "BigQuery"] },
                      { role: "Gemini Agent Eng.",   level: "L6", category: "Agentic Systems",    tech: ["Function Calling", "Code Execution", "MCP"] },
                    ],
                  },
                  {
                    label: "Google Cloud AI",
                    cards: [
                      { role: "Vertex AI Eng.",      level: "L6", category: "Vertex AI Platform", tech: ["Vertex AI Studio", "Model Garden", "Pipelines"] },
                      { role: "GCP ML Engineers",    level: "L5", category: "GCP Infrastructure", tech: ["Cloud Run", "GKE", "Pub/Sub"] },
                      { role: "BigQuery ML Eng.",    level: "L5", category: "Data & Analytics",   tech: ["BigQuery ML", "Looker", "Dataflow"] },
                    ],
                  },
                  {
                    label: "Workspace AI",
                    cards: [
                      { role: "Workspace AI Eng.",   level: "L4", category: "Google Workspace",   tech: ["Apps Script", "Duet AI", "Gemini in Sheets"] },
                      { role: "NotebookLM Eng.",     level: "L4", category: "Knowledge Apps",     tech: ["NotebookLM API", "Docs AI", "Drive AI"] },
                      { role: "Firebase AI Eng.",    level: "L5", category: "Mobile & Web AI",    tech: ["Firebase Genkit", "Firestore", "App Hosting"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
  },
});
