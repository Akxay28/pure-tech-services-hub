import type { CaseStudy } from "@/lib/case-study";
import { subServices } from "@/lib/sub-services";
import { studies as staticCaseStudies } from "@/lib/static-case-studies";

export type SubServiceSlug = keyof typeof subServices;

type StaticCaseStudy = (typeof staticCaseStudies)[number];

function caseStudySlug(client: string) {
  return client
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toServiceCaseStudy(study: StaticCaseStudy): CaseStudy {
  return {
    client: study.client,
    industry: study.sector,
    challenge: study.headline,
    outcome: study.body,
    image: study.image,
    accent: study.accent,
    slug: caseStudySlug(study.client),
    metrics: study.metrics.map((metric) => ({
      value: metric.v,
      label: metric.l,
    })),
    projectName: study.projectName,
    objective: study.objective,
    solutions: study.solutions,
    challenges: study.challenges,
    keyBenefits: study.keyBenefits,
    results: study.results,
    techStack: study.techStack,
    conclusion: study.conclusion,
  };
}

function realCaseStudiesForClients(clients: string[]) {
  return clients
    .map((client) => staticCaseStudies.find((study) => study.client === client))
    .filter((study): study is StaticCaseStudy => Boolean(study))
    .map(toServiceCaseStudy);
}

const realCaseStudyClientsByService: Partial<Record<SubServiceSlug, string[]>> = {
  "software-development": [
    "Warehouse Management System",
    "Quick Response Board",
    "Safety Dashboard System",
  ],
  "web-application-development": [
    "VisitorPass",
    "MTR Raw Material Report Digitalization",
    "TQM-powered digital portal",
  ],
  "mobile-app-development": ["Bladder Inventory System"],
  "cloud-infrastructure": [
    "Local GPT for Secure Financial Operations",
    "IoT-Diesel consumption system",
  ],
  "front-end-development": [
    "VisitorPass",
    "Enterprise Software Solutions",
    "Global E-Learning & Digital Marketing Agency - QgenX",
  ],
  "data-engineering": [
    "KPI Dashboard for Manufacturing",
    "TMA usage monitoring",
    "IoT-Diesel consumption system",
  ],
  cybersecurity: ["Vehicle Access Management System", "Global Financial Institution"],
  "ai-strategy-consulting": [
    "Global Financial Institution",
    "KPI Dashboard for Manufacturing",
    "TMA usage monitoring",
  ],
  "custom-ai-development": [
    "Global Wellness & Spiritual Guidance Platform",
    "AIML-powered tire verification system",
    "Professional Event Photography Organization",
  ],
  "ai-chatbot-development": [
    "Global E-Learning & Digital Marketing Agency - QgenX",
    "Enterprise Software Solutions",
    "Global Recruitment & Talent Development Organization",
  ],
  "generative-ai-development": [
    "Global E-Learning & Digital Marketing Agency - QgenX",
    "Professional Event Photography Organization",
    "Enterprise Software Solutions",
  ],
  "ai-agents-development": [
    "Enterprise Talent Solutions",
    "Global Real Estate & B2B Sales Organization",
    "PaintMinds",
  ],
  "ai-integration": [
    "Global Real Estate & B2B Sales Organization",
    "PaintMinds",
    "Local GPT for Secure Financial Operations",
  ],
};

/** Per-page case study content — same card layout, different copy per service slug */
export const caseStudiesByService: Record<SubServiceSlug, CaseStudy[]> = {
  "global-capability-center": [
    {
      client: "Fortune 500 Retail Co.",
      industry: "Retail",
      image: "/homeCaseStudy/1 case study.webp",
      challenge:
        "Three outsourcing vendors, rising run-cost, and no captive engineering muscle in India — leadership wanted a GCC without a two-year setup programme.",
      outcome:
        "90-person GCC in Hyderabad live in 12 weeks. Replaced vendor spend with a captive org that shipped their first production feature in week 11.",
      metrics: [
        { value: "$3.2M", label: "Annual savings" },
        { value: "12 wks", label: "GCC operational" },
        { value: "94%", label: "12-mo retention" },
      ],
    },
    {
      client: "Fortune 500 Retail Co.",
      industry: "Retail",
      image: "/homeCaseStudy/1 case study.webp",
      challenge:
        "Three outsourcing vendors, rising run-cost, and no captive engineering muscle in India — leadership wanted a GCC without a two-year setup programme.",
      outcome:
        "90-person GCC in Hyderabad live in 12 weeks. Replaced vendor spend with a captive org that shipped their first production feature in week 11.",
      metrics: [
        { value: "$3.2M", label: "Annual savings" },
        { value: "12 wks", label: "GCC operational" },
        { value: "94%", label: "12-mo retention" },
      ],
    },
    {
      client: "Series C SaaS Platform",
      industry: "B2B SaaS",
      challenge:
        "US engineering costs were blocking roadmap velocity. They needed a GCC with the same ceremonies and quality bar as HQ — not a low-cost body shop.",
      outcome:
        "Micro-GCC ramped from 12 to 45 engineers in 9 months. First feature from India shipped in under 3 months with shared SLOs and audit-ready controls.",
      metrics: [
        { value: "11 wks", label: "First ship" },
        { value: "45", label: "Engineers scaled" },
        { value: "40%", label: "Lower TCO" },
      ],
      accent: "var(--brand-orange)",
    },
  ],

  "offshore-development": [
    {
      client: "NorthPeak Health",
      industry: "HealthTech",
      challenge:
        "A US Series B needed a 12-person pod for patient portal and EHR work while HQ focused on FDA submissions — without US payroll expansion.",
      outcome:
        "Dedicated pod live in 18 days. First production PR in week two; pod now owns 70% of monthly releases with 4-hour daily overlap.",
      metrics: [
        { value: "18 days", label: "Pod live" },
        { value: "62%", label: "Cost vs. US hires" },
        { value: "4.8/5", label: "Engagement NPS" },
      ],
    },
    {
      client: "Atlas Retail Group",
      industry: "E-commerce",
      challenge:
        "Peak-season traffic overwhelmed a monolithic checkout maintained by rotating contractors. Leadership wanted one stable offshore team.",
      outcome:
        "9-engineer pod rebuilt checkout and inventory sync. Black Friday handled 3.2× prior peak with zero P1 incidents.",
      metrics: [
        { value: "3.2×", label: "Peak traffic" },
        { value: "0", label: "P1 on launch" },
        { value: "<200ms", label: "Cart API p95" },
      ],
      accent: "var(--brand-orange)",
    },
  ],

  "it-outsourcing": [
    {
      client: "Meridian Manufacturing",
      industry: "Manufacturing",
      challenge:
        "Six IT vendors, no single SLA owner, and 4,000+ monthly service-desk tickets. The CIO needed one accountable partner without a risky cutover.",
      outcome:
        "Consolidated app support, infra, and L1/L2 under one contract. 90-day reverse-shadow, then ITIL steady state with quarterly automation.",
      metrics: [
        { value: "47%", label: "TCO reduction" },
        { value: "99.97%", label: "Critical app SLA" },
        { value: "<8 min", label: "P1 acknowledgement" },
      ],
    },
    {
      client: "Harborstone BFSI",
      industry: "Banking & Finance",
      challenge:
        "Post-M&A estates on different toolchains with audit findings on change control and incident documentation.",
      outcome:
        "Unified ITSM on ServiceNow, harmonised runbooks, 24/7 SOC handoff. Two external audits passed with zero major findings in year one.",
      metrics: [
        { value: "2", label: "Audits passed clean" },
        { value: "24/7", label: "Ops coverage" },
        { value: "35%", label: "Ticket volume down" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "cloud-computing": [
    {
      client: "High-Growth SaaS",
      industry: "SaaS",
      challenge:
        "Cloud spend doubled in 18 months with no tagging discipline or reservation strategy. Engineering blamed finance; finance blamed engineering.",
      outcome:
        "FinOps programme delivered $1.4M annual savings in 60 days through right-sizing, SPs, and idle-resource elimination — with showback dashboards.",
      metrics: [
        { value: "$1.4M", label: "Annual savings" },
        { value: "32%", label: "Spend reduction" },
        { value: "60 days", label: "Payback window" },
      ],
    },
    {
      client: "Logistics Platform",
      industry: "Supply Chain",
      challenge:
        "Monolith on legacy VMs blocked daily releases. Prior migration waves stalled with two failed cutover weekends.",
      outcome:
        "Wave-based EKS migration with SRE-led cutovers. Eleven× faster deploys and zero failed cutovers across four production waves.",
      metrics: [
        { value: "11×", label: "Faster deploys" },
        { value: "0", label: "Failed cutovers" },
        { value: "4", label: "Waves shipped" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "software-development": [
    {
      client: "Enterprise ERP Vendor",
      industry: "Enterprise Software",
      challenge:
        "A decade-old .NET monolith slowed every feature request. Releases were quarterly and regression-heavy.",
      outcome:
        "Strangled the monolith into modular services over 10 months. Bi-weekly releases restored with 78% fewer production regressions.",
      metrics: [
        { value: "10 mo", label: "Modernisation" },
        { value: "78%", label: "Fewer regressions" },
        { value: "2 wk", label: "Release cadence" },
      ],
    },
    {
      client: "InsurTech Scale-up",
      industry: "Insurance",
      challenge:
        "Policy administration built by agencies lacked tests, docs, or owners. Scaling meant hiring more contractors.",
      outcome:
        "Stood up a 14-engineer product squad with CI/CD, contract tests, and domain ownership. Policy changes now ship in days, not months.",
      metrics: [
        { value: "14", label: "Engineer squad" },
        { value: "−65%", label: "Lead time" },
        { value: "99.9%", label: "Release success" },
      ],
      accent: "var(--brand-green)",
    },
  ],

  "remote-teams": [
    {
      client: "EU Fintech",
      industry: "FinTech",
      challenge:
        "Follow-the-sun coverage was a slide-deck promise from vendors — in practice, handoffs broke and incidents lingered overnight.",
      outcome:
        "India + EU squads with overlapping standups and shared on-call runbooks. Mean time to acknowledge P1 dropped below 12 minutes globally.",
      metrics: [
        { value: "<12 min", label: "P1 ack globally" },
        { value: "18 hrs", label: "Daily overlap" },
        { value: "3.4 yrs", label: "Avg. tenure" },
      ],
    },
    {
      client: "US Health Platform",
      industry: "HealthTech",
      challenge:
        "Remote contractors churned every quarter, erasing domain knowledge in a HIPAA-sensitive codebase.",
      outcome:
        "Dedicated remote team with 30-day shadow KT and documented runbooks. Attrition fell to 8% annualised in the first year.",
      metrics: [
        { value: "8%", label: "Annual attrition" },
        { value: "30 days", label: "Shadow KT" },
        { value: "100%", label: "HIPAA aligned" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "web-application-development": [
    {
      client: "D2C Lifestyle Brand",
      industry: "E-commerce",
      challenge:
        "A 4-second LCP on mobile was killing paid acquisition ROI. Prior agency rebuilds never moved Core Web Vitals.",
      outcome:
        "Next.js + edge replatform with performance budgets in CI. LCP hit 0.6s and conversion lifted 31% within 90 days of launch.",
      metrics: [
        { value: "0.6s", label: "LCP achieved" },
        { value: "31%", label: "Conversion lift" },
        { value: "100", label: "Lighthouse score" },
      ],
    },
    {
      client: "B2B Analytics Co.",
      industry: "SaaS",
      challenge:
        "AngularJS dashboard from 2016 couldn't support enterprise SSO, role-based views, or accessible keyboard flows.",
      outcome:
        "React + design-system rebuild with WCAG AA and Auth0. Enterprise deals unblocked; support tickets on UI fell 44%.",
      metrics: [
        { value: "44%", label: "UI tickets down" },
        { value: "WCAG AA", label: "Certified" },
        { value: "5 mo", label: "Replatform time" },
      ],
      accent: "var(--brand-green)",
    },
  ],

  "mobile-app-development": [
    {
      client: "NeoBank",
      industry: "FinTech",
      challenge:
        "React Native app crashed on 6% of sessions and store ratings stalled at 3.2★. Regulators scrutinised mobile release hygiene.",
      outcome:
        "Native Swift + Kotlin rebuild with mobile RUM and staged rollouts. Crash-free sessions above 99.5% and 4.7★ within two quarters.",
      metrics: [
        { value: "4.7★", label: "Store rating" },
        { value: "99.5%", label: "Crash-free" },
        { value: "2 qtr", label: "Rating recovery" },
      ],
    },
    {
      client: "Field Ops Enterprise",
      industry: "Logistics",
      challenge:
        "Offline-first field app lost sync in low-connectivity warehouses, causing incorrect inventory counts.",
      outcome:
        "Offline-first architecture with conflict resolution and bandwidth-aware sync. Inventory accuracy improved 23% in pilot regions.",
      metrics: [
        { value: "23%", label: "Accuracy up" },
        { value: "Offline", label: "First-class sync" },
        { value: "6 wks", label: "Pilot rollout" },
      ],
      accent: "var(--brand-orange)",
    },
  ],

  "cloud-infrastructure": [
    {
      client: "Payments Processor",
      industry: "FinTech",
      challenge:
        "Multi-account AWS sprawl with no guardrails — engineers could open public S3 buckets and security reviews blocked every release.",
      outcome:
        "Landing zone with SCPs, CIEM, and IaC scanning. CIS-aligned posture with automated evidence for SOC 2 audits.",
      metrics: [
        { value: "100%", label: "IaC scanned" },
        { value: "0", label: "Public buckets" },
        { value: "SOC 2", label: "Audit ready" },
      ],
    },
    {
      client: "Media Streaming Co.",
      industry: "Media",
      challenge:
        "Kubernetes clusters were snowflakes — no standard observability, on-call burned out, and incident MTTR exceeded 4 hours.",
      outcome:
        "Standardised EKS platform with SLOs, tracing, and runbooks. P1 MTTR dropped under 45 minutes in quarter one.",
      metrics: [
        { value: "<45 min", label: "P1 MTTR" },
        { value: "3", label: "Regions unified" },
        { value: "99.95%", label: "SLO met" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "front-end-development": [
    {
      client: "HR Tech Platform",
      industry: "HRTech",
      challenge:
        "Design and engineering spoke different languages — Figma files didn't match production, and accessibility was an afterthought.",
      outcome:
        "Token-driven design system in Storybook with axe in CI. Feature lead time down 40% and WCAG issues near zero on new work.",
      metrics: [
        { value: "40%", label: "Faster delivery" },
        { value: "WCAG AA", label: "Default bar" },
        { value: "1", label: "Design system" },
      ],
    },
    {
      client: "Marketplace",
      industry: "E-commerce",
      challenge:
        "Vue 2 codebase couldn't support micro-frontends for seller vs. buyer experiences without a full rewrite risk.",
      outcome:
        "Incremental migration to Vue 3 + module federation. Seller dashboard shipped first with no customer-visible downtime.",
      metrics: [
        { value: "0", label: "Downtime" },
        { value: "Vue 3", label: "Migration done" },
        { value: "8 mo", label: "Programme length" },
      ],
      accent: "var(--brand-green)",
    },
  ],

  "data-engineering": [
    {
      client: "Retail Analytics",
      industry: "Retail",
      challenge:
        "Nightly batch jobs missed SLAs during peak season; business trusted Excel exports more than the warehouse.",
      outcome:
        "dbt + Airflow lakehouse with data contracts and freshness alerts. Pipeline SLAs met 99.2% over peak quarter.",
      metrics: [
        { value: "99.2%", label: "SLA met" },
        { value: "−70%", label: "Job failures" },
        { value: "4 hr", label: "Freshness SLO" },
      ],
    },
    {
      client: "Insurer",
      industry: "Insurance",
      challenge:
        "Claims data sat in silos — actuarial models ran on stale extracts with no lineage for regulators.",
      outcome:
        "Unified bronze-silver-gold model with lineage in OpenLineage. Regulatory submissions cut from 3 weeks to 4 days.",
      metrics: [
        { value: "4 days", label: "Submission cycle" },
        { value: "100%", label: "Lineage tracked" },
        { value: "1", label: "Source of truth" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  cybersecurity: [
    {
      client: "Tier-1 BFSI",
      industry: "Banking",
      challenge:
        "Annual pen test findings repeated year over year — remediations lived in spreadsheets, not the SDLC.",
      outcome:
        "DevSecOps pipeline with SAST/DAST gates and SOC playbooks. Critical findings closed 3× faster; two clean audits.",
      metrics: [
        { value: "3×", label: "Faster remediation" },
        { value: "2", label: "Clean audits" },
        { value: "24/7", label: "SOC coverage" },
      ],
    },
    {
      client: "Health SaaS",
      industry: "HealthTech",
      challenge:
        "HIPAA gap assessment flagged logging, encryption, and access reviews before a major enterprise deal.",
      outcome:
        "Controls implemented with Vanta evidence collection. Enterprise security review passed in 6 weeks; deal closed.",
      metrics: [
        { value: "6 wks", label: "Review passed" },
        { value: "HIPAA", label: "Controls met" },
        { value: "$2.1M", label: "Deal unlocked" },
      ],
      accent: "var(--brand-orange)",
    },
  ],

  "ai-strategy-consulting": [
    {
      client: "Industrial Conglomerate",
      industry: "Manufacturing",
      challenge:
        "Board mandated an AI roadmap but teams chased pilots with no ROI model, data readiness, or governance.",
      outcome:
        "12-week strategy: use-case portfolio, TCO models, and phased build plan. Top 3 use cases funded with executive KPIs.",
      metrics: [
        { value: "12 wks", label: "Roadmap delivered" },
        { value: "3", label: "Funded use cases" },
        { value: "$8M", label: "Projected ROI" },
      ],
    },
    {
      client: "Legal Tech",
      industry: "Legal",
      challenge:
        "Partners feared hallucination risk in client-facing workflows; no policy on model use or human review.",
      outcome:
        "Responsible AI framework, HITL patterns, and vendor shortlist. First production copilot launched with legal sign-off.",
      metrics: [
        { value: "1", label: "Copilot live" },
        { value: "100%", label: "HITL on outputs" },
        { value: "0", label: "Compliance incidents" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "custom-ai-development": [
    {
      client: "Document AI Co.",
      industry: "LegalTech",
      challenge:
        "Generic LLM APIs couldn't hit accuracy on domain-specific contracts — fine-tuning attempts stalled without eval discipline.",
      outcome:
        "Custom model with golden-set evals and regression gates. Extraction F1 improved from 71% to 93% on production docs.",
      metrics: [
        { value: "93%", label: "F1 score" },
        { value: "+22 pts", label: "Accuracy gain" },
        { value: "6 wks", label: "Model iteration" },
      ],
    },
    {
      client: "MedTech",
      industry: "Healthcare",
      challenge:
        "Clinical note summarisation needed on-prem inference and strict PHI handling — cloud APIs were non-starters.",
      outcome:
        "On-prem inference stack with de-identification pipeline and clinician review UI. Deployed to 12 hospitals in phase one.",
      metrics: [
        { value: "12", label: "Hospitals live" },
        { value: "On-prem", label: "Inference" },
        { value: "4.6/5", label: "Clinician NPS" },
      ],
      accent: "var(--brand-green)",
    },
  ],

  "ai-chatbot-development": [
    {
      client: "Telco Support",
      industry: "Telecom",
      challenge:
        "IVR deflected only 12% of tier-1 calls. Previous chatbot projects failed on intent coverage and CRM integration.",
      outcome:
        "RAG chatbot on knowledge base + billing APIs with human escalation. Tier-1 deflection rose to 41% in 90 days.",
      metrics: [
        { value: "41%", label: "Tier-1 deflection" },
        { value: "90 days", label: "To steady state" },
        { value: "−28%", label: "AHT reduction" },
      ],
    },
    {
      client: "B2B SaaS",
      industry: "SaaS",
      challenge:
        "Support team answered the same onboarding questions 200+ times weekly; docs were accurate but unused.",
      outcome:
        "In-app copilot with product telemetry context. Onboarding tickets down 52% and CSAT up 0.4 points.",
      metrics: [
        { value: "52%", label: "Tickets down" },
        { value: "+0.4", label: "CSAT lift" },
        { value: "<2s", label: "P95 response" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "generative-ai-development": [
    {
      client: "Marketing Enterprise",
      industry: "CPG",
      challenge:
        "Creative teams needed gen-AI for copy and imagery but brand/legal had no guardrails or approval workflow.",
      outcome:
        "Brand-tuned gen pipeline with policy filters and marketer HITL. Time-to-campaign cut 35% with legal pre-approved templates.",
      metrics: [
        { value: "35%", label: "Faster campaigns" },
        { value: "100%", label: "Brand review" },
        { value: "0", label: "Off-brand launches" },
      ],
    },
    {
      client: "EdTech",
      industry: "Education",
      challenge:
        "Personalised lesson plans were manual; teachers rejected early AI drafts as generic and non-curriculum aligned.",
      outcome:
        "Fine-tuned generation on curriculum corpus with teacher edit loop. Adoption hit 78% of active instructors in one term.",
      metrics: [
        { value: "78%", label: "Teacher adoption" },
        { value: "1 term", label: "Rollout" },
        { value: "4.5/5", label: "Educator rating" },
      ],
      accent: "var(--brand-orange)",
    },
  ],

  "ai-agents-development": [
    {
      client: "Procurement SaaS",
      industry: "B2B SaaS",
      challenge:
        "Buyers spent hours comparing vendor quotes in email threads — no structured workflow or audit trail.",
      outcome:
        "Multi-agent workflow for RFP parsing, vendor outreach, and summary memos with human approval gates. Cycle time down 58%.",
      metrics: [
        { value: "58%", label: "Cycle time down" },
        { value: "3", label: "Agents orchestrated" },
        { value: "100%", label: "Approvals logged" },
      ],
    },
    {
      client: "IT Ops Enterprise",
      industry: "Enterprise IT",
      challenge:
        "L1 tickets for password resets and access requests consumed 40% of desk capacity — simple automations never stuck.",
      outcome:
        "Tool-using agents on ITSM + AD with HITL for risky actions. L1 auto-resolution reached 36% without SLA regression.",
      metrics: [
        { value: "36%", label: "Auto-resolved" },
        { value: "0", label: "SLA regression" },
        { value: "8 wks", label: "Pilot to prod" },
      ],
      accent: "var(--brand-blue)",
    },
  ],

  "ai-integration": [
    {
      client: "CRM Platform",
      industry: "SaaS",
      challenge:
        "Sales reps lived in CRM but insights sat in Snowflake — embedding copilots without rewriting the core app was the bar.",
      outcome:
        "Embedded AI via APIs + feature flags in existing UI. Rep research time down 47%; no monolith rewrite required.",
      metrics: [
        { value: "47%", label: "Research time saved" },
        { value: "0", label: "Monolith rewrite" },
        { value: "10 wks", label: "Integration" },
      ],
    },
    {
      client: "ERP Manufacturer",
      industry: "Manufacturing",
      challenge:
        "Forecasting still ran in spreadsheets while leadership bought an LLM platform no one integrated with SAP.",
      outcome:
        "SAP + vector store integration for demand signals with governed prompts. Forecast error reduced 19% in first quarter.",
      metrics: [
        { value: "19%", label: "Error reduction" },
        { value: "SAP", label: "Integrated" },
        { value: "1 qtr", label: "To production" },
      ],
      accent: "var(--brand-green)",
    },
  ],
};

/** Main practice pages (ServicePage) — same shape, separate keys */
export const mainServiceCaseStudies: Record<
  "product-engineering" | "ai-solutions" | "it-staffing",
  CaseStudy[]
> = {
  "product-engineering": [
    {
      client: "FinEdge Capital",
      industry: "WealthTech",
      challenge:
        "A regulated Indian wealth platform needed a new advisor workstation and customer mobile app in 6 months — synchronised launches, single quality bar.",
      outcome:
        "11-person squad across design, web, iOS, Android, and backend. Shipped both surfaces in 5.5 months with SEBI-aligned audit trail and 99.97% uptime SLA in Q1.",
      metrics: [
        { value: "5.5 mo", label: "Launch timeline" },
        { value: "99.97%", label: "First-quarter SLA" },
        { value: "4.7★", label: "App store rating" },
      ],
    },
    {
      client: "GreenLane Logistics",
      industry: "Supply Chain",
      challenge:
        "Singapore-headquartered logistics on legacy Rails couldn't survive the next 10× of growth.",
      outcome:
        "Event-driven services on GCP; strangled monolith over 9 months with zero customer-visible outage. API latency 740ms → 95ms.",
      metrics: [
        { value: "8×", label: "Throughput" },
        { value: "−87%", label: "API latency" },
        { value: "0", label: "Downtime in cutover" },
      ],
      accent: "var(--brand-orange)",
    },
  ],
  "ai-solutions": [
    {
      client: "Claims Insurer",
      industry: "Insurance",
      challenge:
        "Claims adjusters spent 45 minutes per complex file reading unstructured documents — automation pilots never reached production.",
      outcome:
        "Document AI + human review queue integrated with claims core. Average handling time down 38% with full audit trail.",
      metrics: [
        { value: "38%", label: "AHT reduction" },
        { value: "100%", label: "Audit trail" },
        { value: "14 wks", label: "Production" },
      ],
    },
    {
      client: "Retail Bank",
      industry: "Banking",
      challenge:
        "Customer service copilot hallucinated product terms — compliance blocked any customer-facing launch.",
      outcome:
        "RAG with approved knowledge base, citation requirements, and escalation paths. Pilot passed compliance; 29% call deflection.",
      metrics: [
        { value: "29%", label: "Call deflection" },
        { value: "0", label: "Compliance blocks" },
        { value: "12 wks", label: "Pilot to prod" },
      ],
      accent: "var(--brand-blue)",
    },
  ],
  "it-staffing": [
    {
      client: "Series D SaaS",
      industry: "SaaS",
      challenge:
        "Hiring freeze met a roadmap that still needed 8 senior full-stack engineers in Q1 — internal recruiting had a 120-day cycle.",
      outcome:
        "Eight L5+ engineers placed in 21 days average; all cleared client technical interviews. Team still embedded 2 years later.",
      metrics: [
        { value: "21 days", label: "Avg. time-to-seat" },
        { value: "8", label: "Seniors placed" },
        { value: "2 yrs", label: "Still embedded" },
      ],
    },
    {
      client: "PE Portfolio Co.",
      industry: "Private Equity",
      challenge:
        "Portfolio company needed a fractional CTO plus 5 engineers for a 90-day value-creation sprint post-acquisition.",
      outcome:
        "CTO + squad placed in 2 weeks. Delivered integration playbook and shipped MVP data room analytics in the sprint window.",
      metrics: [
        { value: "2 wks", label: "Squad live" },
        { value: "90 days", label: "Sprint window" },
        { value: "1", label: "MVP shipped" },
      ],
      accent: "var(--brand-green)",
    },
  ],
};

export function getCaseStudiesForService(slug: SubServiceSlug): CaseStudy[] {
  const realClients = realCaseStudyClientsByService[slug];
  if (realClients) {
    const realStudies = realCaseStudiesForClients(realClients);
    if (realStudies.length > 0) return realStudies;
  }

  return caseStudiesByService[slug];
}

export function getCaseStudiesForMainService(
  slug: keyof typeof mainServiceCaseStudies,
): CaseStudy[] {
  return mainServiceCaseStudies[slug];
}
