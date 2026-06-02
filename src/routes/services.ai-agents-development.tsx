import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";
 
const props = getSubServicePageProps("ai-agents-development");

export const Route = createFileRoute("/services/ai-agents-development")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: AiAgentsDevelopment,
});

function AiAgentsDevelopment() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <>
          <TechnologyExpertiseSection
            accent="var(--brand-blue)"
            tabs={[
              {
                label: "Agent Frameworks",
                cards: [
                  {
                    role: "LangGraph Engineers",
                    level: "L6",
                    category: "Graph-based Agents",
                    tech: ["LangGraph", "LangChain", "LangSmith"],
                  },
                  {
                    role: "AutoGen Engineers",
                    level: "L5",
                    category: "Multi-Agent",
                    tech: ["AutoGen", "CrewAI", "AgentScope"],
                  },
                  {
                    role: "Custom Agent Eng.",
                    level: "L6",
                    category: "Bespoke Agents",
                    tech: ["OpenAI Assistants", "Anthropic", "Gemini"],
                  },
                  {
                    role: "Tool-use Engineers",
                    level: "L5",
                    category: "Tool & Function Call",
                    tech: ["MCP", "OpenAPI", "JSON Schema"],
                  },
                ],
              },
              {
                label: "Memory & State",
                cards: [
                  {
                    role: "Memory Engineers",
                    level: "L5",
                    category: "Agent Memory",
                    tech: ["Mem0", "Zep", "pgvector"],
                  },
                  {
                    role: "State Machine Eng.",
                    level: "L6",
                    category: "State & Orchestration",
                    tech: ["LangGraph", "Temporal", "XState"],
                  },
                  {
                    role: "Context Engineers",
                    level: "L5",
                    category: "Context Management",
                    tech: ["RAG", "Summarisation", "Sliding Window"],
                  },
                ],
              },
              {
                label: "Tools & Integrations",
                cards: [
                  {
                    role: "Browser Agents Eng.",
                    level: "L5",
                    category: "Web Automation",
                    tech: ["Playwright", "Browserbase", "Stagehand"],
                  },
                  {
                    role: "Code Agent Engineers",
                    level: "L6",
                    category: "Code Generation",
                    tech: ["SWE-agent", "Aider", "Devin API"],
                  },
                  {
                    role: "API Agent Engineers",
                    level: "L5",
                    category: "API & Data Agents",
                    tech: ["REST", "GraphQL", "OpenAPI"],
                  },
                  {
                    role: "RPA + AI Engineers",
                    level: "L5",
                    category: "RPA Hybrid",
                    tech: ["UiPath", "Automation Anywhere", "Python"],
                  },
                ],
              },
              {
                label: "Safety & Evals",
                cards: [
                  {
                    role: "Agent Eval Engineers",
                    level: "L6",
                    category: "Evals & Benchmarks",
                    tech: ["AgentBench", "GAIA", "ToolBench"],
                  },
                  {
                    role: "HITL Engineers",
                    level: "L5",
                    category: "Human-in-the-Loop",
                    tech: ["Checkpoints", "Approval Flows", "Audit Logs"],
                  },
                  {
                    role: "Safety Engineers",
                    level: "L6",
                    category: "Agent Guardrails",
                    tech: ["NeMo Guardrails", "Rebuff", "Presidio"],
                  },
                ],
              },
            ]}
          />
          
        </>
      }
    />
  );
}
