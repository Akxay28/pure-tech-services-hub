import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("chatbot-developers");

export const Route = createFileRoute("/hire/chatbot-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireChatbotDevelopersPage() {
    return ( 
    <>
    
    <HireRolePage {...role} extraSection={
              <TechnologyExpertiseSection
              accent="var(--brand-blue)"
              tabs={[
                {
                  label: "Chat Infra",
                  cards: [
                    { role: "Chat Backend Eng.",   level: "L5", category: "Messaging Systems",   tech: ["WebSockets", "Socket.io", "XMPP"] },
                    { role: "Real-time Eng.",      level: "L5", category: "Real-time",           tech: ["Pusher", "Ably", "Firebase RTDB"] },
                    { role: "Bot Framework Eng.",  level: "L5", category: "Bot Development",     tech: ["Botpress", "Rasa", "Microsoft Bot Framework"] },
                    { role: "Chat UI Engineers",   level: "L4", category: "Frontend",            tech: ["Stream Chat", "TalkJS", "CometChat SDK"] },
                  ],
                },
                {
                  label: "AI Integration",
                  cards: [
                    { role: "LLM Integration Eng.",level: "L5", category: "AI Wiring",          tech: ["OpenAI API", "LangChain", "Vercel AI SDK"] },
                    { role: "RAG Engineers",       level: "L6", category: "Retrieval",          tech: ["Pinecone", "Weaviate", "pgvector"] },
                    { role: "NLP Engineers",       level: "L5", category: "Language",           tech: ["spaCy", "Hugging Face", "NLTK"] },
                    { role: "Dialogue Designers",  level: "L4", category: "Conversation Design",tech: ["Voiceflow", "Botmock", "Figma"] },
                  ],
                },
                {
                  label: "Platform",
                  cards: [
                    { role: "Platform Engineers",  level: "L6", category: "Infrastructure",     tech: ["AWS", "Cloudflare Workers", "Railway"] },
                    { role: "Queue Engineers",     level: "L5", category: "Message Queues",     tech: ["Redis Streams", "Kafka", "BullMQ"] },
                    { role: "Moderation Eng.",     level: "L4", category: "Trust & Safety",     tech: ["OpenAI Moderation", "Perspective API", "Hive"] },
                  ],
                },
              ]}
            />
        } />
    
    </>)
  },
});
