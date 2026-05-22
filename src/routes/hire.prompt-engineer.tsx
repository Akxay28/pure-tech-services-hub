import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("prompt-engineer");

export const Route = createFileRoute("/hire/prompt-engineer")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HirePromptEngineerPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Prompt Systems",
                    cards: [
                      { role: "Prompt Architects",   level: "L6", category: "System Prompting",   tech: ["Chain-of-Thought", "Few-shot", "DSPy"] },
                      { role: "RAG Prompt Eng.",     level: "L5", category: "Retrieval Prompts",  tech: ["LangChain", "LlamaIndex", "PromptLayer"] },
                      { role: "Agent Prompt Eng.",   level: "L6", category: "Agentic Prompting",  tech: ["ReAct", "Tool Calling", "OpenAI Agents SDK"] },
                      { role: "Prompt Ops Eng.",     level: "L4", category: "Prompt Management",  tech: ["PromptLayer", "LangSmith", "Helicone"] },
                    ],
                  },
                  {
                    label: "Evaluation",
                    cards: [
                      { role: "Evals Engineers",     level: "L5", category: "LLM Evaluation",     tech: ["Promptfoo", "RAGAS", "Braintrust"] },
                      { role: "Red Team Engineers",  level: "L6", category: "Adversarial Testing",tech: ["Garak", "PyRIT", "Llama Guard"] },
                      { role: "Benchmark Eng.",      level: "L5", category: "Benchmarking",       tech: ["HELM", "lm-evaluation-harness", "BIG-Bench"] },
                    ],
                  },
                  {
                    label: "Specialisations",
                    cards: [
                      { role: "Multimodal Prompt Eng.",level: "L5", category: "Vision Prompting", tech: ["GPT-4o Vision", "Gemini Vision", "Claude 3.5"] },
                      { role: "Code Prompt Eng.",    level: "L5", category: "Code Generation",    tech: ["GitHub Copilot API", "Codestral", "DeepSeek Coder"] },
                      { role: "Structured Output Eng.",level: "L4",category: "JSON & Schemas",    tech: ["Instructor", "Outlines", "Guidance"] },
                      { role: "Voice Prompt Eng.",   level: "L4", category: "Speech & Voice",     tech: ["Whisper", "Realtime API", "ElevenLabs"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
      },
});
