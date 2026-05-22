import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("generative-ai-developers");

export const Route = createFileRoute("/hire/generative-ai-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireGenerativeAiDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Generative Models",
                    cards: [
                      { role: "GenAI Architects",    level: "L6", category: "Architecture",       tech: ["Transformers", "Diffusion Models", "VAEs"] },
                      { role: "Image Gen Eng.",      level: "L5", category: "Image Generation",   tech: ["Stable Diffusion", "DALL-E 3", "Midjourney API"] },
                      { role: "Video Gen Eng.",      level: "L5", category: "Video Generation",   tech: ["Sora", "Runway ML", "Pika"] },
                      { role: "Audio Gen Eng.",      level: "L5", category: "Audio Generation",   tech: ["ElevenLabs", "Suno", "AudioCraft"] },
                    ],
                  },
                  {
                    label: "LLM Engineering",
                    cards: [
                      { role: "LLM Engineers",       level: "L6", category: "Language Models",    tech: ["LangChain", "LlamaIndex", "Haystack"] },
                      { role: "RAG Architects",      level: "L6", category: "Retrieval-Augmented",tech: ["pgvector", "Weaviate", "Chroma"] },
                      { role: "Fine-tune Eng.",      level: "L6", category: "Model Adaptation",   tech: ["LoRA", "QLoRA", "Axolotl"] },
                      { role: "Evals Engineers",     level: "L5", category: "Benchmarking",       tech: ["RAGAS", "Braintrust", "Promptfoo"] },
                    ],
                  },
                  {
                    label: "GenAI Ops",
                    cards: [
                      { role: "MLOps Engineers",     level: "L5", category: "ML Infrastructure",  tech: ["MLflow", "Weights & Biases", "DVC"] },
                      { role: "Vector DB Eng.",      level: "L5", category: "Vector Stores",      tech: ["Pinecone", "Qdrant", "Milvus"] },
                      { role: "Serving Engineers",   level: "L6", category: "Model Serving",      tech: ["vLLM", "TGI", "Triton Inference"] },
                      { role: "GPU Engineers",       level: "L6", category: "Compute",            tech: ["CUDA", "ROCm", "AWS Trainium"] },
                    ],
                  },
                ]}
                
              />
          } />
      
      </>)
      },
});
