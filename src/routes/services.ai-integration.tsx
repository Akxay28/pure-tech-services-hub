import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("ai-integration");

export const Route = createFileRoute("/services/ai-integration")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: AiIntegration,
});

function AiIntegration() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-blue)"
  tabs={[
    {
      label: "API & Middleware",
      cards: [
        { role: "AI API Engineers",    level: "L5", category: "LLM API Integration",  tech: ["OpenAI SDK", "Anthropic SDK", "Vertex AI"] },
        { role: "Middleware Engineers",level: "L5", category: "AI Middleware",         tech: ["LangChain", "LlamaIndex", "Haystack"] },
        { role: "Gateway Engineers",   level: "L6", category: "AI Gateway & Routing", tech: ["LiteLLM", "PortKey", "OpenRouter"] },
        { role: "Webhook Engineers",   level: "L4", category: "Events & Webhooks",     tech: ["Inngest", "Trigger.dev", "Temporal"] },
      ],
    },
    {
      label: "Enterprise Systems",
      cards: [
        { role: "ERP Integration Eng.",level: "L5", category: "ERP & CRM",            tech: ["SAP", "Salesforce", "Dynamics 365"] },
        { role: "Data Integration Eng.",level:"L5", category: "Data & BI",            tech: ["Fivetran", "dbt", "Tableau"] },
        { role: "Comms Integration",   level: "L4", category: "Comms & Collab",       tech: ["Slack API", "Teams API", "Gmail API"] },
        { role: "Doc Integration Eng.",level: "L4", category: "Document Systems",     tech: ["SharePoint", "Confluence", "Notion API"] },
      ],
    },
    {
      label: "Observability",
      cards: [
        { role: "LLM Observ. Eng.",    level: "L5", category: "LLM Monitoring",       tech: ["LangSmith", "Helicone", "Arize"] },
        { role: "Cost Optimisation",   level: "L5", category: "Token & Cost Mgmt",    tech: ["LiteLLM", "Infracost", "PortKey"] },
        { role: "Eval Engineers",      level: "L5", category: "Quality & Evals",      tech: ["RAGAS", "DeepEval", "Promptfoo"] },
        { role: "Tracing Engineers",   level: "L5", category: "Distributed Tracing",  tech: ["OpenTelemetry", "Datadog", "Jaeger"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
