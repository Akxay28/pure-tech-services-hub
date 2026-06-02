import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("openai-developers");

export const Route = createFileRoute("/hire/openai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireOpenaiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "API & Agents",
                    cards: [
                      { role: "OpenAI API Eng.",     level: "L5", category: "API Integration",    tech: ["GPT-4o", "Assistants API", "Responses API"] },
                      { role: "Agent Architects",    level: "L6", category: "Agentic Systems",    tech: ["OpenAI Agents SDK", "Tool Calling", "MCP"] },
                      { role: "Fine-tune Eng.",      level: "L6", category: "Model Fine-tuning",  tech: ["OpenAI Fine-tuning", "PEFT", "LoRA"] },
                      { role: "Evals Engineers",     level: "L5", category: "Model Evaluation",   tech: ["OpenAI Evals", "Braintrust", "LangSmith"] },
                    ],
                  },
                  {
                    label: "Multimodal",
                    cards: [
                      { role: "Vision Engineers",    level: "L5", category: "Vision & Images",    tech: ["GPT-4o Vision", "DALL-E 3", "CLIP"] },
                      { role: "Audio Engineers",     level: "L5", category: "Speech & Audio",     tech: ["Whisper", "TTS API", "Realtime API"] },
                      { role: "Embedding Eng.",      level: "L4", category: "Embeddings",         tech: ["text-embedding-3", "Pinecone", "pgvector"] },
                    ],
                  },
                  {
                    label: "Production",
                    cards: [
                      { role: "LLMOps Engineers",    level: "L6", category: "LLM Operations",     tech: ["LangSmith", "Helicone", "Datadog LLM"] },
                      { role: "Prompt Engineers",    level: "L5", category: "Prompt Systems",     tech: ["PromptLayer", "LangChain", "DSPy"] },
                      { role: "Cost Eng.",           level: "L4", category: "Token Optimisation", tech: ["Caching", "Batching", "Model Routing"] },
                      { role: "Safety Engineers",    level: "L5", category: "AI Safety",          tech: ["Guardrails AI", "NeMo Guardrails", "Llama Guard"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)
  },
});
