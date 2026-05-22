import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { subServices } from "@/lib/sub-services";

const entry = subServices["custom-ai-development"];

export const Route = createFileRoute("/services/custom-ai-development")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: CustomAiDevelopment,
});

function CustomAiDevelopment() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-blue)"
  tabs={[
    {
      label: "LLM Engineering",
      cards: [
        { role: "LLM Engineers",       level: "L6", category: "Foundation Models",   tech: ["OpenAI", "Anthropic", "Gemini"] },
        { role: "Prompt Engineers",    level: "L5", category: "Prompt Design",       tech: ["DSPy", "LangChain", "Guidance"] },
        { role: "RAG Engineers",       level: "L5", category: "Retrieval Systems",   tech: ["LlamaIndex", "Pinecone", "pgvector"] },
        { role: "Fine-tune Engineers", level: "L6", category: "Fine-tuning",         tech: ["LoRA", "QLoRA", "Axolotl"] },
      ],
    },
    {
      label: "ML Platform",
      cards: [
        { role: "ML Engineers",        level: "L5", category: "Modelling",           tech: ["PyTorch", "TensorFlow", "JAX"] },
        { role: "MLOps Engineers",     level: "L6", category: "ML Ops",              tech: ["MLflow", "Ray", "BentoML"] },
        { role: "Data Scientists",     level: "L5", category: "Experimentation",     tech: ["Weights & Biases", "DVC", "Optuna"] },
        { role: "Eval Engineers",      level: "L5", category: "LLM Evals",           tech: ["RAGAS", "DeepEval", "Promptfoo"] },
      ],
    },
    {
      label: "Vision & Docs",
      cards: [
        { role: "CV Engineers",        level: "L5", category: "Computer Vision",     tech: ["YOLO", "Detectron2", "OpenCV"] },
        { role: "Document AI Eng.",    level: "L5", category: "Document Processing", tech: ["LayoutLM", "Textract", "Unstructured"] },
        { role: "Multimodal Eng.",     level: "L6", category: "Multimodal AI",       tech: ["LLaVA", "CLIP", "Gemini Vision"] },
        { role: "Speech Engineers",    level: "L5", category: "Audio & Speech",      tech: ["Whisper", "ElevenLabs", "Speechmatics"] },
      ],
    },
    {
      label: "Infra & Safety",
      cards: [
        { role: "AI Infra Engineers",  level: "L6", category: "GPU & Infra",         tech: ["CUDA", "vLLM", "Triton"] },
        { role: "AI Safety Engineers", level: "L6", category: "Guardrails",          tech: ["Presidio", "NeMo Guardrails", "Rebuff"] },
        { role: "Observability Eng.",  level: "L5", category: "LLM Observability",   tech: ["LangSmith", "Helicone", "Arize"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
