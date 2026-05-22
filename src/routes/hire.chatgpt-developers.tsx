import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("chatgpt-developers");

export const Route = createFileRoute("/hire/chatgpt-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireChatgptDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "ChatGPT & API",
                    cards: [
                      { role: "ChatGPT Integration Eng.", level: "L5", category: "API Integration",    tech: ["ChatGPT API", "GPT-4o", "Assistants API"] },
                      { role: "Plugin Developers",        level: "L5", category: "GPT Plugins",        tech: ["OpenAPI Spec", "OAuth2", "REST"] },
                      { role: "Custom GPT Builders",      level: "L4", category: "GPT Builder",        tech: ["GPT Builder", "Actions", "Knowledge Files"] },
                      { role: "Agent Architects",         level: "L6", category: "Agentic Systems",    tech: ["Responses API", "Tool Calling", "MCP"] },
                    ],
                  },
                  {
                    label: "Multimodal",
                    cards: [
                      { role: "Vision Engineers",         level: "L5", category: "Image Understanding",tech: ["GPT-4o Vision", "DALL-E 3", "CLIP"] },
                      { role: "Voice Engineers",          level: "L5", category: "Speech & Audio",     tech: ["Whisper", "TTS API", "Realtime API"] },
                      { role: "Document AI Eng.",         level: "L5", category: "Document Processing",tech: ["PDF Parsing", "File Search", "Embeddings"] },
                      { role: "Code Gen Engineers",       level: "L5", category: "Code Generation",    tech: ["Code Interpreter", "Codex", "GitHub Copilot"] },
                    ],
                  },
                  {
                    label: "Production",
                    cards: [
                      { role: "LLMOps Engineers",         level: "L6", category: "Observability",      tech: ["LangSmith", "Helicone", "Braintrust"] },
                      { role: "Prompt Engineers",         level: "L5", category: "Prompt Systems",     tech: ["DSPy", "PromptLayer", "LangChain"] },
                      { role: "Cost Optimisation Eng.",   level: "L4", category: "Token Efficiency",   tech: ["Caching", "Batching", "Model Routing"] },
                      { role: "Safety Engineers",         level: "L5", category: "Content Safety",     tech: ["Moderation API", "Guardrails AI", "Llama Guard"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)  },
});
