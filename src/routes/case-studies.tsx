import { createFileRoute, Outlet, useMatchRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  CaseStudyCard,
  CTASection,
} from "@/components/site/Primitives";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real outcomes from Pure Technology" },
      {
        name: "description",
        content:
          "Measurable results from recent Pure Technology engagements — AI, product engineering, and IT staffing across BFSI, healthcare, retail, and SaaS.",
      },
      { property: "og:title", content: "Case Studies — Pure Technology" },
      {
        property: "og:description",
        content:
          "Numbers, not narratives. Read how senior Pure Tech teams shipped production AI, modern platforms, and dedicated squads.",
      },
    ],
  }),
  component: CaseStudiesLayout,
});

const studies = [
  {
    client: "Top-5 Indian private bank",
    sector: "BFSI",
    accent: "var(--brand-blue)",
    image: "/homeCaseStudy/2 case study.webp",
    headline: "Customer-service copilot cut AHT by 37% across 3,200 agents.",
    body: "Built a retrieval-grounded assistant integrated into the agent desktop. Citation-first responses, full PII redaction, and an audit log for every call. Live across all retail-banking queues.",
    metrics: [
      { v: "37%", l: "AHT reduction" },
      { v: "92%", l: "Answer acceptance" },
      { v: "₹14 Cr", l: "Annual savings" },
    ],
    related: "/services/ai-chatbot-development",
  },
  {
    client: "Lumenpath Health",
    sector: "HealthTech",
    accent: "var(--brand-green)",
    image: "/homeCaseStudy/cloudwise-local-gpt.webp",
    headline: "Zero medication hallucinations across 5k-row gold eval set.",
    body: "Custom extraction model for clinician notes — multi-modal pipeline combining OCR, structured EHR fields, and a fine-tuned LLM. Shipped into clinical workflows with human-in-the-loop checks.",
    metrics: [
      { v: "0", l: "Hallucinations in eval" },
      { v: "4.7/5", l: "Clinician NPS" },
      { v: "11×", l: "Faster chart review" },
    ],
    related: "/services/custom-ai-development",
  },
  {
    client: "Series C SaaS — Logistics",
    sector: "Logistics SaaS",
    accent: "var(--brand-orange)",
    image: "/homeCaseStudy/2 case study.webp",
    headline: "Monolith → EKS — daily releases unlocked in 14 weeks.",
    body: "Replatformed a 6-year-old Rails monolith into a containerised, GitOps-driven stack on AWS EKS. Trunk-based development, feature flags, and SLO-driven on-call. Lead time from 11 days to <2 hours.",
    metrics: [
      { v: "11×", l: "Faster deploys" },
      { v: "<2 hrs", l: "Lead time for change" },
      { v: "99.97%", l: "12-mo uptime" },
    ],
    related: "/services/cloud-infrastructure",
  },
  {
    client: "Fortune 500 retailer",
    sector: "Retail",
    accent: "var(--brand-blue)",
    image: "/homeCaseStudy/2 case study.webp",
    headline: "Replaced 3 outsourcers with a 90-engineer GCC in Hyderabad.",
    body: "Build-Operate-Transfer engagement. Stood up the legal entity, real estate, and first 30 engineers in 12 weeks; scaled to 90 engineers across 5 product squads in year one.",
    metrics: [
      { v: "$3.2M", l: "Annual savings" },
      { v: "11 wks", l: "Time to first ship" },
      { v: "94%", l: "12-mo retention" },
    ],
    related: "/services/global-capability-center",
  },
  {
    client: "PE-backed B2B SaaS",
    sector: "SaaS",
    accent: "var(--brand-green)",
    image: "/homeCaseStudy/2 case study.webp",
    headline: "Senior offshore pod replaced 4 freelancers hey this is akshay this side trying to make changes more so that it can be seen by the client — quality, fixed.",
    body: "A 5-engineer offshore pod, all senior, embedded in the customer's release train.",
    metrics: [
      { v: "64%", l: "Fewer P1 incidents" },
      { v: "18", l: "Features shipped/6mo" },
      { v: "4.8/5", l: "Client NPS" },
    ],
    related: "/services/offshore-development",
    // ── detail fields ──
    projectName: "Offshore Engineering Pod",
    objective:
      "Replace fragmented freelancer setup with a cohesive senior engineering pod embedded in the client's release train.",
    solutions: [
      "Dedicated 5-engineer senior pod with full product ownership.",
      "Integrated into existing release train and CI/CD pipeline.",
      "Weekly demos and async communication in client timezone.",
    ],
    challenges: [
      "4 freelancers with inconsistent quality and availability.",
      "High P1 incident rate causing production instability.",
      "No single point of accountability for module ownership.",
    ],
    keyBenefits: [
      { value: "64%", label: "Fewer P1 incidents" },
      { value: "18", label: "Features shipped in 6 months" },
      { value: "4.8/5", label: "Client NPS score" },
      { value: "100%", label: "Module ownership coverage" },
    ],
    results: [
      "Replaced 4 freelancers with 1 cohesive senior pod",
      "P1 incident rate dropped 64% in 3 months",
      "18 features shipped across 6 months",
      "4.8/5 NPS from client engineering leadership",
    ],
    techStack: [
      { category: "Languages", items: "TypeScript, Python", icon: "ti-code" },
      { category: "Database", items: "PostgreSQL", icon: "ti-database" },
      { category: "Cloud", items: "AWS", icon: "ti-cloud" },
      { category: "Frameworks", items: "React, Node.js", icon: "ti-layout" },
    ],
    conclusion:
      "A focused senior pod delivered what four freelancers couldn't — consistent quality, clear ownership, and measurable outcomes within the first quarter.",
  },
  {
    client: "Tier-1 NBFC",
    sector: "BFSI",
    accent: "var(--brand-red)",
    image: "/homeCaseStudy/2 case study.webp",
    headline: "SOC 2 Type II clean opinion — in 11 weeks, no findings.",
    body: "Stood up the security program end-to-end: control framework, evidence pipeline, application security tooling, and a managed SOC. Clean Type II audit on first attempt; no qualifications.",
    metrics: [
      { v: "11 wks", l: "Kickoff → Type II" },
      { v: "0", l: "Audit findings" },
      { v: "24/7", l: "SOC coverage" },
    ],
    related: "/services/cybersecurity",
  },
];

function CaseStudiesLayout() {
  const matchRoute = useMatchRoute();
  const isSlug = matchRoute({ to: "/case-studies/$slug" });

  if (isSlug) return <Outlet />;

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Numbers, <span className="text-gradient-brand">not narratives.</span>
          </>
        }
        description="Every engagement we publish has a defined success metric agreed on day one — and reported every Friday. These are six of the most recent."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Start your engagement</PrimaryButton>
          <GhostButton to="/services">Explore services</GhostButton>
        </div>
      </PageHero>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Recent work"
            title="Outcomes worth writing down."
            description="Anonymised where the client requires it — numbers are always real."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {studies.map((s) => (
              <div key={s.client} className="space-y-3">
                <CaseStudyCard
                  client={s.client}
                  industry={s.sector}
                  image={s.image}
                  accent={s.accent}
                  challenge={s.headline}
                  outcome={s.body}
                  metrics={s.metrics.map((m) => ({ value: m.v, label: m.l }))}
                  // ── detail fields ──
                  projectName={s.projectName}
                  objective={s.objective}
                  solutions={s.solutions}
                  challenges={s.challenges}
                  keyBenefits={s.keyBenefits}
                  results={s.results}
                  techStack={s.techStack}
                  conclusion={s.conclusion}
                />
                <Link
                  to={s.related as never}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: s.accent }}
                >
                  Related service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be the next case study?"
        description="Bring us a problem with a number attached. We'll come back with a plan to move it — and a Friday demo schedule to prove it."
      />
    </>
  );
}
