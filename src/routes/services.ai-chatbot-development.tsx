import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { subServices } from "@/lib/sub-services";

const entry = subServices["ai-chatbot-development"];

export const Route = createFileRoute("/services/ai-chatbot-development")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: AiChatbotDevelopment,
});

function AiChatbotDevelopment() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <TechnologyExpertiseSection
        accent="var(--brand-blue)"
        tabs={[
          {
            label: "Conversational AI",
            cards: [
              { role: "Dialogue Engineers",  level: "L5", category: "Conversation Design", tech: ["Rasa", "Botpress", "Voiceflow"] },
              { role: "NLU Engineers",       level: "L5", category: "Intent & Entity",     tech: ["spaCy", "Transformers", "Duckling"] },
              { role: "LLM Chat Engineers",  level: "L6", category: "LLM-powered Chat",    tech: ["OpenAI", "LangChain", "Anthropic"] },
              { role: "RAG Engineers",       level: "L5", category: "Knowledge Retrieval", tech: ["LlamaIndex", "pgvector", "Weaviate"] },
            ],
          },
          {
            label: "Channels & Integration",
            cards: [
              { role: "Channel Engineers",   level: "L4", category: "Omnichannel",         tech: ["WhatsApp API", "Twilio", "Intercom"] },
              { role: "Voice Bot Engineers", level: "L5", category: "Voice",               tech: ["Twilio Voice", "Deepgram", "Whisper"] },
              { role: "Widget Engineers",    level: "L4", category: "Web & Mobile Widget", tech: ["React", "WebSockets", "LiveKit"] },
              { role: "CRM Integration Eng.",level: "L5", category: "CRM & Helpdesk",      tech: ["Salesforce", "Zendesk", "HubSpot"] },
            ],
          },
          {
            label: "Safety & Evals",
            cards: [
              { role: "Eval Engineers",      level: "L5", category: "Chatbot Evals",       tech: ["RAGAS", "DeepEval", "Promptfoo"] },
              { role: "Safety Engineers",    level: "L6", category: "Content Safety",      tech: ["Presidio", "Llama Guard", "Rebuff"] },
              { role: "Analytics Engineers", level: "L4", category: "Bot Analytics",       tech: ["Botanalytics", "Dashbot", "PostHog"] },
            ],
          },
        ]}
      />
      }
    />
  );
}
