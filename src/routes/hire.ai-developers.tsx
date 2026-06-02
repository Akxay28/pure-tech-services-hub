import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("ai-developers");

export const Route = createFileRoute("/hire/ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireAiDevelopersPage() {
    return (
      <>
        <HireRolePage {...role} extraSection={
              <TechnologyExpertiseSection
              accent="var(--brand-blue)"
              tabs={[
                {
                  label: "LLM Engineering",
                  cards: [
                    { role: "LLM Engineers",            level: "L6", category: "Language Models",    tech: ["LangChain", "LlamaIndex", "Haystack"] },
                    { role: "RAG Architects",           level: "L6", category: "Retrieval-Augmented",tech: ["pgvector", "Weaviate", "Chroma"] },
                    { role: "Fine-tune Engineers",      level: "L6", category: "Model Adaptation",   tech: ["LoRA", "QLoRA", "Axolotl"] },
                    { role: "Prompt Engineers",         level: "L5", category: "Prompt Systems",     tech: ["DSPy", "PromptLayer", "Guidance"] },
                  ],
                },
                {
                  label: "Agents & Automation",
                  cards: [
                    { role: "Agent Architects",         level: "L6", category: "Agentic Systems",    tech: ["OpenAI Agents SDK", "LangGraph", "CrewAI"] },
                    { role: "Tool & MCP Engineers",     level: "L5", category: "Tool Integration",   tech: ["MCP Servers", "Function Calling", "Zapier AI"] },
                    { role: "Workflow Eng.",            level: "L5", category: "AI Automation",      tech: ["n8n", "Inngest", "Temporal"] },
                    { role: "Computer Use Eng.",        level: "L6", category: "UI Automation",      tech: ["Playwright", "Stagehand", "Browser Use"] },
                  ],
                },
                {
                  label: "MLOps & Infra",
                  cards: [
                    { role: "MLOps Engineers",          level: "L5", category: "ML Infrastructure",  tech: ["MLflow", "Weights & Biases", "DVC"] },
                    { role: "Vector DB Engineers",      level: "L5", category: "Vector Stores",      tech: ["Pinecone", "Qdrant", "Milvus"] },
                    { role: "Model Serving Eng.",       level: "L6", category: "Inference",          tech: ["vLLM", "TGI", "Triton"] },
                    { role: "Evals Engineers",          level: "L5", category: "Evaluation",         tech: ["Braintrust", "RAGAS", "Promptfoo"] },
                  ],
                },
              ]}
            />
        } />
         
      </>
    )
    },
});
