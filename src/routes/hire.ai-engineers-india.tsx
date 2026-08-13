import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("ai-engineers-india");

export const Route = createFileRoute("/hire/ai-engineers-india")({
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
  component: function HireAiEngineersIndiaPage() {
    return ( 
      <>
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "LLM & GenAI",
                    cards: [
                      { role: "LLM Engineers",            level: "L6", category: "Language Models",    tech: ["LangChain", "LlamaIndex", "LangGraph"] },
                      { role: "RAG Architects",           level: "L6", category: "Retrieval",          tech: ["pgvector", "Weaviate", "Pinecone"] },
                      { role: "Fine-tuning Specialists",  level: "L6", category: "Model tuning",       tech: ["LoRA", "QLoRA", "Unsloth"] },
                      { role: "Prompt Engineers",         level: "L5", category: "Prompt Systems",     tech: ["DSPy", "Promptfoo", "Guidance"] },
                    ],
                  },
                  {
                    label: "MLOps & Frameworks",
                    cards: [
                      { role: "MLOps Engineers",          level: "L5", category: "ML Infrastructure",  tech: ["MLflow", "Weights & Biases", "DVC"] },
                      { role: "Serving Engineers",        level: "L6", category: "Inference",          tech: ["vLLM", "Triton", "Ollama"] },
                      { role: "ML Engineers",             level: "L5", category: "Traditional ML",     tech: ["PyTorch", "scikit-learn", "Pandas"] },
                    ],
                  },
                ]}
              />
          } />
      </>
    )
  },
});
