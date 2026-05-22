import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { subServices } from "@/lib/sub-services";

const entry = subServices["generative-ai-development"];

export const Route = createFileRoute("/services/generative-ai-development")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: GenerativeAiDevelopment,
});

function GenerativeAiDevelopment() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-blue)"
  tabs={[
    {
      label: "Text & Language",
      cards: [
        { role: "LLM Engineers",       level: "L6", category: "Large Language Models", tech: ["GPT-4o", "Claude 3.5", "Gemini 1.5"] },
        { role: "Fine-tune Engineers", level: "L6", category: "Fine-tuning & Align.", tech: ["LoRA", "DPO", "RLHF"] },
        { role: "RAG Engineers",       level: "L5", category: "Retrieval-Augmented",  tech: ["LlamaIndex", "LangChain", "pgvector"] },
        { role: "Prompt Engineers",    level: "L5", category: "Prompt Engineering",   tech: ["DSPy", "Guidance", "Outlines"] },
      ],
    },
    {
      label: "Image & Video",
      cards: [
        { role: "Image Gen Engineers", level: "L5", category: "Image Generation",  tech: ["Stable Diffusion", "FLUX", "DALL-E 3"] },
        { role: "Video Gen Engineers", level: "L6", category: "Video Generation",  tech: ["Sora", "Runway", "Pika Labs"] },
        { role: "ComfyUI Engineers",   level: "L5", category: "Workflow Pipelines",tech: ["ComfyUI", "A1111", "InvokeAI"] },
        { role: "3D Gen Engineers",    level: "L6", category: "3D & Spatial",      tech: ["TripoSR", "Zero123", "Shap-E"] },
      ],
    },
    {
      label: "Audio & Speech",
      cards: [
        { role: "TTS Engineers",       level: "L5", category: "Text-to-Speech",    tech: ["ElevenLabs", "Cartesia", "Kokoro"] },
        { role: "Music Gen Engineers", level: "L5", category: "Music Generation",  tech: ["Suno", "Udio", "MusicGen"] },
        { role: "Speech Engineers",    level: "L5", category: "STT & Diarisation", tech: ["Whisper", "Deepgram", "AssemblyAI"] },
      ],
    },
    {
      label: "Infra & Serving",
      cards: [
        { role: "AI Infra Engineers",  level: "L6", category: "Model Serving",     tech: ["vLLM", "TGI", "Triton"] },
        { role: "GPU Engineers",       level: "L6", category: "GPU Optimisation",  tech: ["CUDA", "Flash Attention", "GGUF"] },
        { role: "MLOps Engineers",     level: "L5", category: "ML Ops",            tech: ["BentoML", "Ray Serve", "Modal"] },
        { role: "Eval Engineers",      level: "L5", category: "Evals & Observ.",   tech: ["Helicone", "Arize", "LangSmith"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
