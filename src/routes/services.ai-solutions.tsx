import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getCaseStudiesForMainService } from "@/lib/case-studies-by-service";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

export const Route = createFileRoute("/services/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions — GenAI, RAG & Agentic Systems | Pure Technology" },
      {
        name: "description",
        content:
          "Production-grade GenAI, RAG pipelines, agentic copilots, and MLOps — built for compliance-heavy enterprises by senior Indian AI engineers.",
      },
      { property: "og:title", content: "AI Solutions — Pure Technology" },
      {
        property: "og:description",
        content:
          "From prototype to production: enterprise AI delivered with guardrails, evals, and observability.",
      },
    ],
  }),
  component: AiSolutions,
});

function AiSolutions() {
  return (
    <ServicePage
      eyebrow="AI Solutions"
      title={
        <>
          From clever demo to <span className="text-gradient-brand">enterprise-grade AI.</span>
        </>
      }
      lede="We help BFSI, healthcare, retail, and SaaS leaders translate GenAI ambition into reliable products — with the guardrails, observability, and governance their security and legal teams actually approve."
      accent="var(--brand-blue)"
      heroStats={[
        { value: "40+", label: "AI engagements shipped" },
        { value: "12", label: "LLM-powered products in prod" },
        { value: "98.6%", label: "Avg. eval pass rate" },
        { value: "60 days", label: "Avg. proof-of-value timeline" },
      ]}
      intro={{
        heading:
          "We've watched enough AI POCs die quietly. We design backwards from the production line.",
        paragraphs: [
          "Most teams can wire up an LLM in a weekend. The hard part — the part that decides whether your AI ever sees a real customer — is the next 90 days: retrieval that doesn't hallucinate, evals that catch regressions, a cost model that survives scale, and a compliance posture your CISO will sign.",
          "Our AI practice is built around that production reality. Every engagement is led by a senior engineer who has shipped AI to paying users before, paired with a domain analyst who understands your industry's language and edge cases.",
          "We work in tight loops: a measurable success metric is defined in week one, instrumented in week two, and reported on every Friday. No magic. No theatre. Just AI that quietly earns its keep.",
        ],
      }}
      capabilities={[
        {
          title: "GenAI strategy & opportunity sizing",
          body: "A 2-week diagnostic: where AI moves the metric, where it's a distraction, and what the realistic ROI window looks like.",
        },
        {
          title: "RAG & knowledge systems",
          body: "Production-grade retrieval over your docs, tickets, code, and structured data — with citations, fallbacks, and cost ceilings.",
        },
        {
          title: "Agentic workflows",
          body: "Multi-step agents that draft, review, and act — with human-in-the-loop checkpoints designed by your compliance team.",
        },
        {
          title: "Fine-tuning & distillation",
          body: "When prompt engineering hits the wall: SFT, DPO, and distilled open models that cut latency and lock in your voice.",
        },
        {
          title: "MLOps, evals & guardrails",
          body: "LLM observability, regression evals, prompt versioning, PII scrubbing, and red-team harnesses baked into your CI.",
        },
        {
          title: "Computer vision & document AI",
          body: "OCR, layout-aware extraction, and visual QA pipelines for insurance, logistics, manufacturing, and healthcare.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Diagnose",
          body: "We map your workflows, data, and risk appetite — then pick the 1–2 use cases where AI moves a number, not vibes.",
        },
        {
          step: "02",
          title: "Prototype",
          body: "A live prototype on your data in 3–4 weeks, paired with an evaluation harness and a cost dashboard from day one.",
        },
        {
          step: "03",
          title: "Productionise",
          body: "Hardening for scale, observability, security review, and a clean integration into your existing product surface.",
        },
        {
          step: "04",
          title: "Operate",
          body: "Ongoing evals, drift monitoring, model upgrades, and a quarterly review focused on the business metric we agreed on.",
        },
      ]}
      engagement={[
        {
          name: "Discovery sprint",
          desc: "Fixed-price, 2 weeks. A senior AI engineer plus an analyst, working alongside your team to size opportunities and pick a beachhead use case.",
          bullets: [
            "Working sessions with your domain experts",
            "Architecture sketch and cost model",
            "Prioritised opportunity backlog",
            "Risk and compliance pre-read",
          ],
        },
        {
          name: "POV to production",
          desc: "Time-and-materials, 8–16 weeks. A pod of 3–5 senior engineers takes the chosen use case from prototype to a production pilot.",
          bullets: [
            "Live system on real data",
            "Eval harness and CI integration",
            "Security review pack for your CISO",
            "Documented handover or co-managed run",
          ],
        },
        {
          name: "Embedded AI squad",
          desc: "Monthly retainer. A long-running AI team that becomes a part of your product org and owns the AI roadmap end-to-end.",
          bullets: [
            "Dedicated senior tech lead",
            "Quarterly OKR planning with your PM",
            "Joint on-call rotation",
            "Predictable monthly burn",
          ],
        },
      ]}
      caseStudies={getCaseStudiesForMainService("ai-solutions")}
      showCaseStudies
      testimonials={[
        {
          quote:
            "Pure was the only partner who started by asking us how we'd measure success — not by showing slides of someone else's chatbot.",
          name: "Vikram Subramanian",
          role: "Chief Digital Officer",
          company: "Top-5 Indian Bank",
          initials: "VS",
        },
        {
          quote:
            "We had three vendors attempt the medical summarisation problem. Pure was the only team that took the safety constraints seriously from week one.",
          name: "Dr. Anika Rao",
          role: "VP Clinical Products",
          company: "Lumenpath Health",
          initials: "AR",
          accent: "var(--brand-green)",
        },
        {
          quote:
            "Their eval harness alone changed how our internal ML team thinks about quality. That's value beyond the engagement itself.",
          name: "Karthik Nair",
          role: "Head of Data Science",
          company: "Northwind SaaS",
          initials: "KN",
          accent: "var(--brand-orange)",
        },
      ]}
      faqs={[
        {
          q: "Do you work with our existing models or recommend new ones?",
          a: "Both. We're model-agnostic — OpenAI, Anthropic, Google, Mistral, Llama-family, and self-hosted open models. We benchmark against your data and pick the option that wins on quality, latency, and cost for your specific use case.",
        },
        {
          q: "Where does our data live?",
          a: "Wherever your compliance posture requires. We deploy inside your VPC on AWS, Azure, GCP, or on-prem. For Indian regulated industries, we have reference architectures for DPDP-aligned, data-residency-enforced deployments.",
        },
        {
          q: "How do you handle hallucinations and safety?",
          a: "Every production system ships with a layered defence: retrieval citations, structured output constraints, an eval suite run on every change, PII scrubbing, and a red-team harness exercised before each release.",
        },
        {
          q: "Can you work alongside our internal ML team?",
          a: "Yes — most of our engagements look like that. We integrate into your sprint cadence, attend your standups, and write code your team can read and own after we leave.",
        },
        {
          q: "What does this typically cost?",
          a: "A discovery sprint is in the ₹6–10 lakh range; production engagements typically land between ₹40 lakh and ₹2 Cr depending on scope. We'll come back with a concrete number within a week of an initial chat.",
        },
      ]}
      cta={{
        title: "Have an AI use case that needs to make it to production?",
        description:
          "Tell us the goal and the constraints. We'll respond within 48 hours with a recommended team shape and a concrete next step.",
      }}
      siblingLinks={[
        { to: "/services/it-staffing", label: "IT Staffing" },
        { to: "/services/product-engineering", label: "Product Engineering" },
      ]}
      extraSection={
        <TechnologyExpertiseSection
          accent="var(--brand-blue)"
          tabs={[
            {
              label: "GenAI & LLMs",
              cards: [
                {
                  role: "LLM Engineers",
                  level: "L6",
                  category: "GenAI & RAG",
                  tech: ["LangChain", "OpenAI", "Anthropic"],
                },
                {
                  role: "RAG Specialists",
                  level: "L5",
                  category: "Retrieval",
                  tech: ["Pinecone", "Weaviate", "pgvector"],
                },
                {
                  role: "Prompt Engineers",
                  level: "L4",
                  category: "Prompt Design",
                  tech: ["DSPy", "Guidance", "LMQL"],
                },
                {
                  role: "AI Safety Eng.",
                  level: "L6",
                  category: "Guardrails",
                  tech: ["Evals", "Presidio", "Rebuff"],
                },
              ],
            },
            {
              label: "ML & Data",
              cards: [
                {
                  role: "ML Engineers",
                  level: "L5",
                  category: "Modelling",
                  tech: ["PyTorch", "TensorFlow", "Keras"],
                },
                {
                  role: "Data Engineers",
                  level: "L5",
                  category: "Pipelines",
                  tech: ["Spark", "Airflow", "dbt"],
                },
                {
                  role: "MLOps Eng.",
                  level: "L6",
                  category: "Ops & Infra",
                  tech: ["MLflow", "Ray", "BentoML"],
                },
                {
                  role: "Data Scientists",
                  level: "L4",
                  category: "Analytics",
                  tech: ["Pandas", "Scikit-learn", "SQL"],
                },
              ],
            },
            {
              label: "Vision & Docs",
              cards: [
                {
                  role: "CV Engineers",
                  level: "L5",
                  category: "Computer Vision",
                  tech: ["OpenCV", "YOLO", "Detectron2"],
                },
                {
                  role: "Document AI Eng.",
                  level: "L5",
                  category: "Document AI",
                  tech: ["Tesseract", "LayoutLM", "AWS Textract"],
                },
                {
                  role: "Multimodal Eng.",
                  level: "L6",
                  category: "Multimodal AI",
                  tech: ["CLIP", "LLaVA", "Gemini Vision"],
                },
              ],
            },
          ]}
        />
      }
    />
  );
}
