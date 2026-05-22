import type { HireRolePageProps } from "@/components/site/HireRolePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { PRACTICE_ACCENT } from "@/lib/brand-colors";

export type HireCategory = "ai" | "vibe" | "role";

export const HIRE_ROLE_SLUGS = [
  "chatbot-developers",
  "openai-developers",
  "generative-ai-developers",
  "gemini-developers",
  "prompt-engineer",
  "chatgpt-developers",
  "lovable-ai-developers",
  "replit-ai-developers",
  "bolt-new-ai-developers",
  "google-antigravity-developers",
  "cursor-ai-developers",
  "windsurf-ai-developers",
  "software-developer",
  "mobile-app-developer",
  "backend-developers",
  "ai-developers",
  "devops-developers",
  "web-app-developer",
  "frontend-developers",
  "fullstack-developers",
  "android-developers",
] as const;

export type HireRoleSlug = (typeof HIRE_ROLE_SLUGS)[number];

type Entry = HireRolePageProps & { slug: HireRoleSlug; category: HireCategory };

const DEFAULT_PROCESS: HireRolePageProps["process"] = [
  {
    title: "Share the brief",
    body: "Stack, seniority, time-zone overlap, and sprint goals — 30-minute scoping call with a hiring lead.",
  },
  {
    title: "Meet your shortlist",
    body: "2–3 hand-picked engineers within 5 business days. You interview; we never assign without your sign-off.",
  },
  {
    title: "Onboard in a week",
    body: "Access, runbooks, and a 30-day shadow period so your new hire ships a real PR in week one.",
  },
  {
    title: "Scale on demand",
    body: "Add or trim seats monthly. Replacement within 2 weeks at our cost if the fit isn't right.",
  },
];

const DEFAULT_ENGAGEMENT: HireRolePageProps["engagement"] = [
  {
    name: "Contract",
    desc: "Month-to-month senior talent for a defined workstream or squad gap.",
    bullets: [
      "30-day notice",
      "Transparent per-seat billing",
      "We handle payroll & compliance in India",
    ],
  },
  {
    name: "Contract-to-hire",
    desc: "Try before you transfer — engineers start on our payroll, move to yours when ready.",
    bullets: [
      "Typical conversion at 6–9 months",
      "No finder's fee surprise",
      "Same engineer, zero re-onboarding",
    ],
  },
  {
    name: "Direct placement",
    desc: "Full-time hire on your entity. We run search, assess, and guarantee the bar.",
    bullets: [
      "90-day replacement guarantee",
      "Off-market senior profiles",
      "Comp benchmarking included",
    ],
  },
];

const DEFAULT_WHY: HireRolePageProps["whyHire"] = [
  "Senior-only bar — 5+ years average, ~3% pass rate on technical screen",
  "Engineers you meet in interviews are the engineers who join your standups",
  "4+ hours daily overlap with US, EU, and APAC time zones",
  "Replacement within 2 weeks at our cost — no lengthy dispute process",
  "Full IP assignment and NDA from day one",
  "SOC 2 aligned onboarding and access controls",
];

const DEFAULT_STATS: HireRolePageProps["heroStats"] = [
  { value: "5 days", label: "Avg. shortlist time" },
  { value: "9 yrs", label: "Avg. experience" },
  { value: "94%", label: "12-mo retention" },
  { value: "4.8/5", label: "Client NPS" },
];

type RoleConfig = {
  slug: HireRoleSlug;
  category: HireCategory;
  title: string;
  lede: string;
  introHeading: string;
  introParagraphs: [string, string];
  skills?: string[];

  // extra added by me to add the TechnologyExpertiseSection
  extraSection?: React.ReactNode;
  // done....
  whoFor: string[];
  capabilities: { title: string; body: string }[];
  outcomes: { metric: string; label: string; context: string }[];
  faqs: { q: string; a: string }[];
  relatedHire: { to: string; label: string }[];
  relatedService?: { to: string; label: string };
};

function accentFor(category: HireCategory) {
  return category === "role" ? PRACTICE_ACCENT.staffing : PRACTICE_ACCENT.ai;
}

function defineRole(c: RoleConfig): Entry {
  return {
    slug: c.slug,
    category: c.category,
    eyebrow: "Hire Developers",
    title: c.title,
    roleTitle: c.title,
    lede: c.lede,
    accent: accentFor(c.category),
    intro: { heading: c.introHeading, paragraphs: c.introParagraphs },
    heroStats: DEFAULT_STATS,
    whoFor: c.whoFor,
    capabilities: c.capabilities,
    skills: c.skills,
    outcomes: c.outcomes,
    process: DEFAULT_PROCESS,
    engagement: DEFAULT_ENGAGEMENT,
    whyHire: DEFAULT_WHY,
    faqs: c.faqs,
    relatedHire: c.relatedHire,
    relatedService: c.relatedService,
  };
}

const AI_CAPS = (focus: string) => [
  {
    title: "Production LLM integration",
    body: `${focus} wired to your APIs with retries, tracing, and cost controls — not notebook prototypes.`,
  },
  {
    title: "RAG & knowledge grounding",
    body: "Retrieval pipelines with citation-first answers and role-based access to internal docs.",
  },
  {
    title: "Evals & guardrails",
    body: "Regression suites, safety filters, and human-in-the-loop review before anything reaches users.",
  },
  {
    title: "Observability",
    body: "LangSmith, Helicone, or custom dashboards so you see latency, cost, and quality drift weekly.",
  },
  {
    title: "Compliance-ready delivery",
    body: "DPDP/GDPR-aware logging, PII redaction, and audit trails your legal team can sign.",
  },
  {
    title: "Handoff & documentation",
    body: "Runbooks, architecture notes, and paired sessions so your team owns the system after launch.",
  },
];

const ROLE_CAPS = (focus: string) => [
  {
    title: "Architecture & code quality",
    body: `${focus} who design for maintainability — reviews, ADRs, and patterns your team already uses.`,
  },
  {
    title: "Sprint delivery",
    body: "Two-week cycles with demoable PRs, written changelogs, and clear acceptance criteria.",
  },
  {
    title: "Testing discipline",
    body: "Unit, integration, and e2e coverage where it matters — not checkbox coverage reports.",
  },
  {
    title: "Security hygiene",
    body: "Secrets management, dependency scanning, and least-privilege access from day one.",
  },
  {
    title: "Cross-functional collaboration",
    body: "Comfortable with PM, design, and ops — async updates that respect your time zones.",
  },
  {
    title: "Knowledge transfer",
    body: "Documentation and pairing so institutional knowledge stays when contracts scale down.",
  },
];

const configs: RoleConfig[] = [
  {
    slug: "chatbot-developers",
    category: "ai",
    title: "Chatbot Developers",
    lede: "Hire senior chatbot engineers who ship grounded, deflecting assistants — not fragile demos that break on the first edge case.",
    introHeading: "Chatbots that survive real users and real policies.",
    introParagraphs: [
      "We place engineers who have shipped customer-facing bots to thousands of users — with retrieval, escalation paths, and compliance trails built in from sprint one.",
      "Whether you are deflecting support tickets or guiding internal ops, our bench clears a four-stage bar on dialogue design, backend integration, and production observability.",
    ],
    skills: [
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "RAG",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Voiceflow",
      "Twilio",
      "Azure Bot",
    ],
    whoFor: [
      "Support teams drowning in L1 volume",
      "BFSI and healthcare with strict answer policies",
      "SaaS adding in-app copilots to existing products",
      "Enterprises replacing legacy IVR with AI-first flows",
    ],
    capabilities: AI_CAPS("Chatbot developers"),
    outcomes: [
      {
        metric: "37%",
        label: "Avg. ticket deflection",
        context: "Banking client after 90 days in production with a grounded service bot.",
      },
      {
        metric: "92%",
        label: "Answer acceptance",
        context: "Agents accepted cited responses without manual rewrite.",
      },
      {
        metric: "5 days",
        label: "Shortlist delivered",
        context: "Typical time from brief to first interviews for senior chatbot engineers.",
      },
    ],
    faqs: [
      {
        q: "Do you only place LLM chatbots?",
        a: "We cover LLM, hybrid rules+LLM, and voice — matched to your channel and compliance needs.",
      },
      {
        q: "Can engineers join our existing bot platform?",
        a: "Yes. We routinely embed into Zendesk, Intercom, custom portals, and internal Slack apps.",
      },
      {
        q: "How do you test for hallucinations?",
        a: "Live coding plus a take-home grounded-RAG exercise reviewed by a senior AI lead.",
      },
      {
        q: "What is the minimum engagement?",
        a: "One senior engineer on a 3-month initial contract; most clients expand to small pods.",
      },
    ],
    relatedHire: [
      { to: "/hire/prompt-engineer", label: "Prompt Engineers" },
      { to: "/hire/openai-developers", label: "OpenAI Developers" },
      { to: "/hire/ai-developers", label: "AI Developers" },
    ],
    relatedService: { to: "/services/ai-chatbot-development", label: "AI Chatbot practice" },
  },
  {
    slug: "openai-developers",
    category: "ai",
    title: "OpenAI Developers",
    lede: "Hire OpenAI specialists who understand tokens, evals, and enterprise guardrails — not just how to call chat completions.",
    introHeading: "OpenAI in production, not in a playground.",
    introParagraphs: [
      "Our OpenAI developers have shipped assistants, agents, and batch pipelines with structured outputs, function calling, and cost-aware routing across models.",
      "They pair with your security and legal teams on data handling, retention, and monitoring — so GPT-powered features pass review the first time.",
    ],
    skills: [
      "OpenAI API",
      "Assistants API",
      "Function calling",
      "Structured outputs",
      "Python",
      "TypeScript",
      "LangChain",
      "Pinecone",
      "pgvector",
      "Promptfoo",
      "Azure OpenAI",
      "AWS Bedrock",
    ],
    whoFor: [
      "Teams standardising on GPT-4 class models",
      "Products adding copilots to existing SaaS",
      "Enterprises needing Azure OpenAI private endpoints",
      "Startups moving from prototype to paid tier",
    ],
    capabilities: AI_CAPS("OpenAI developers"),
    outcomes: [
      {
        metric: "60 days",
        label: "Avg. prod launch",
        context: "From signed SOW to first customer-facing GPT feature for a mid-market SaaS.",
      },
      {
        metric: "40%",
        label: "Token cost reduction",
        context: "After routing, caching, and prompt compression — same quality bar.",
      },
      {
        metric: "98.6%",
        label: "Eval pass rate",
        context: "Median across last 8 OpenAI engagements with automated regression.",
      },
    ],
    faqs: [
      {
        q: "Azure OpenAI or public API?",
        a: "We place engineers experienced in both — tell us your residency and latency constraints upfront.",
      },
      {
        q: "Do you support fine-tuning?",
        a: "Yes — including data prep, eval design, and rollback plans when fine-tunes underperform.",
      },
      {
        q: "Can one engineer own MLOps too?",
        a: "We can add an MLOps profile to the pod; single hires usually focus on application layer.",
      },
      {
        q: "How fast can we start?",
        a: "First interviews in ~5 business days after the scoping call.",
      },
    ],
    relatedHire: [
      { to: "/hire/generative-ai-developers", label: "Generative AI Developers" },
      { to: "/hire/prompt-engineer", label: "Prompt Engineers" },
      { to: "/hire/chatbot-developers", label: "Chatbot Developers" },
    ],
    relatedService: { to: "/services/ai-solutions", label: "AI Solutions practice" },
  },
  {
    slug: "generative-ai-developers",
    category: "ai",
    title: "Generative AI Developers",
    lede: "Hire generative AI engineers who ship copilots, content systems, and multimodal features with evals and economics that scale.",
    introHeading: "GenAI that earns its keep after launch week.",
    introParagraphs: [
      "Generative AI is easy to demo and hard to operate. We place developers who have owned inference cost, quality regression, and safety review in production environments.",
      "From marketing copy assistants to developer copilots, every placement is screened on architecture, not just prompt tricks.",
    ],
    skills: [
      "PyTorch",
      "Diffusers",
      "Stable Diffusion",
      "OpenAI",
      "Anthropic",
      "LangChain",
      "RAG",
      "vLLM",
      "CUDA",
      "FastAPI",
      "React",
      "MLOps",
    ],
    whoFor: [
      "Marketing teams scaling content with guardrails",
      "DevTools adding AI-native workflows",
      "Media and e-commerce personalisation",
      "Enterprises piloting copilots across departments",
    ],
    capabilities: AI_CAPS("Generative AI developers"),
    outcomes: [
      {
        metric: "12",
        label: "GenAI products in prod",
        context: "Shipped by Pure squads and placed engineers in the last 24 months.",
      },
      {
        metric: "3×",
        label: "Content throughput",
        context: "Retail client with human review still in the loop.",
      },
      {
        metric: "0",
        label: "Critical safety incidents",
        context: "Across regulated deployments with mandatory eval gates.",
      },
    ],
    faqs: [
      {
        q: "Image and text, or text only?",
        a: "Both — we tag bench depth by modality during shortlisting.",
      },
      {
        q: "Do you place researchers?",
        a: "We focus on product engineers who ship; we can source applied researchers for hybrid roles.",
      },
      {
        q: "How do you price engagements?",
        a: "Per-seat monthly for contract; fixed search fee for direct placement.",
      },
      {
        q: "India-only talent?",
        a: "India-based, working in your timezone overlap — same model as our staffing practice.",
      },
    ],
    relatedHire: [
      { to: "/hire/openai-developers", label: "OpenAI Developers" },
      { to: "/hire/gemini-developers", label: "Gemini Developers" },
      { to: "/hire/ai-developers", label: "AI Developers" },
    ],
    relatedService: { to: "/services/generative-ai-development", label: "Generative AI practice" },
  },
  {
    slug: "gemini-developers",
    category: "ai",
    title: "Gemini Developers",
    lede: "Hire Google Gemini engineers for multimodal, long-context, and Vertex AI deployments — with governance your enterprise expects.",
    introHeading: "Gemini where Google Cloud is already home.",
    introParagraphs: [
      "We place engineers fluent in Vertex AI, Gemini API, and multimodal pipelines — ideal when your data plane already lives in GCP.",
      "Placements include grounding with enterprise search, safety settings, and IAM patterns your cloud team will recognise.",
    ],
    skills: [
      "Vertex AI",
      "Gemini API",
      "Google Cloud",
      "BigQuery",
      "Multimodal",
      "Python",
      "LangChain",
      "Embeddings",
      "Cloud Run",
      "GKE",
      "Terraform",
      "IAM",
    ],
    whoFor: [
      "GCP-native enterprises",
      "Teams comparing Gemini vs GPT with an honest TCO model",
      "Products needing long-document reasoning",
      "Regulated industries using VPC-SC",
    ],
    capabilities: AI_CAPS("Gemini developers"),
    outcomes: [
      {
        metric: "2M",
        label: "Tokens / doc avg.",
        context: "Legal-tech summarisation without chunking loss on Gemini 1.5 class models.",
      },
      {
        metric: "45%",
        label: "Faster review",
        context: "Clinician workflow pilot with structured extraction + human sign-off.",
      },
      {
        metric: "99.9%",
        label: "API uptime SLO",
        context: "Managed routing and fallbacks across regions.",
      },
    ],
    faqs: [
      {
        q: "Must we use Vertex?",
        a: "No — we support consumer API and Vertex; most enterprise clients choose Vertex for residency.",
      },
      {
        q: "Multimodal experience?",
        a: "Screened explicitly — image, PDF, and audio ingestion patterns are part of senior interviews.",
      },
      {
        q: "Can you help model selection?",
        a: "A senior lead joins the scoping call to recommend Flash vs Pro vs Ultra for your workload.",
      },
      {
        q: "Replacement policy?",
        a: "Within 2 weeks at our cost if performance or communication misses the bar.",
      },
    ],
    relatedHire: [
      { to: "/hire/openai-developers", label: "OpenAI Developers" },
      { to: "/hire/generative-ai-developers", label: "Generative AI Developers" },
      { to: "/hire/chatgpt-developers", label: "ChatGPT Developers" },
    ],
    relatedService: { to: "/services/ai-solutions", label: "AI Solutions practice" },
  },
  {
    slug: "prompt-engineer",
    category: "ai",
    title: "Prompt Engineers",
    lede: "Hire prompt engineers who treat prompts as versioned software — with evals, datasets, and rollback, not one-off magic strings.",
    introHeading: "Prompting as engineering discipline.",
    introParagraphs: [
      "The best prompt engineers we place sit between product, ML, and backend — they design eval harnesses, manage prompt registries, and optimise quality per dollar.",
      "Ideal when your team has model access but lacks a systematic way to improve reliability sprint over sprint.",
    ],
    skills: [
      "DSPy",
      "Guidance",
      "LangSmith",
      "Promptfoo",
      "OpenAI",
      "Anthropic",
      "Python",
      "JSON schema",
      "RAGAS",
      "DeepEval",
      "A/B testing",
      "Git",
    ],
    whoFor: [
      "Teams with unstable LLM outputs in production",
      "Enterprises building prompt libraries across brands",
      "Startups pre-ML-hire needing senior prompt discipline",
      "Agencies productising AI for multiple clients",
    ],
    capabilities: [
      {
        title: "Eval harness design",
        body: "Golden datasets, automated graders, and human review queues tied to release gates.",
      },
      {
        title: "Prompt registry & versioning",
        body: "Git-backed prompts with environment promotion and rollback in minutes.",
      },
      {
        title: "Cost-quality trade-offs",
        body: "Model routing and compression without silent quality collapse.",
      },
      {
        title: "Tool-use & agents",
        body: "Structured plans, function schemas, and failure recovery patterns.",
      },
      {
        title: "Safety & policy layers",
        body: "Refusal rules, PII filters, and jurisdiction-specific tone controls.",
      },
      {
        title: "Cross-team enablement",
        body: "Playbooks so PMs and engineers can propose changes without breaking prod.",
      },
    ],
    outcomes: [
      {
        metric: "+18pt",
        label: "Eval score lift",
        context: "Median improvement after 6-week prompt engineering engagement.",
      },
      {
        metric: "50%",
        label: "Fewer regressions",
        context: "Release incidents caught in CI vs post-deploy.",
      },
      {
        metric: "1 week",
        label: "First eval suite",
        context: "Typical time to a runnable baseline harness.",
      },
    ],
    faqs: [
      {
        q: "Is this the same as an ML engineer?",
        a: "No — focus is behaviour, evals, and integration; we can pair with ML for training-heavy work.",
      },
      {
        q: "Do they write application code?",
        a: "Senior profiles ship Python/TS integration code; juniors are not on our bench.",
      },
      {
        q: "Can they audit our existing prompts?",
        a: "Yes — common first sprint is audit + prioritised fix backlog.",
      },
      {
        q: "Contract length?",
        a: "Often 3–6 months to stand up practice; many clients retain 1–2 days/week after.",
      },
    ],
    relatedHire: [
      { to: "/hire/openai-developers", label: "OpenAI Developers" },
      { to: "/hire/chatbot-developers", label: "Chatbot Developers" },
      { to: "/hire/generative-ai-developers", label: "Generative AI Developers" },
    ],
    relatedService: { to: "/services/custom-ai-development", label: "Custom AI practice" },
  },
];

const VIBE_SHARED_WHO = [
  "Founders shipping MVPs with AI-native IDEs",
  "Agencies delivering client apps on tight timelines",
  "Product teams augmenting senior staff with AI-assisted velocity",
  "Enterprises piloting governed vibe-coding workflows",
];

const vibeConfigs: RoleConfig[] = [
  {
    slug: "chatgpt-developers",
    category: "vibe",
    title: "ChatGPT Developers",
    lede: "Hire developers who ship fast with ChatGPT, Custom GPTs, and API integrations — without sacrificing review, security, or maintainability.",
    introHeading: "ChatGPT acceleration with senior oversight.",
    introParagraphs: [
      "Vibe coding with ChatGPT only works when someone senior owns architecture, reviews, and test strategy. We place engineers who use AI tools daily and still write production-grade code.",
      "Ideal for teams that want speed from GPT-assisted workflows but cannot afford unreviewed PRs landing on main.",
    ],
    skills: [
      "ChatGPT",
      "OpenAI API",
      "Custom GPTs",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "REST",
      "Postman",
      "GitHub Copilot",
      "CI/CD",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("ChatGPT-focused developers"),
    outcomes: [
      {
        metric: "2 wks",
        label: "First production PR",
        context: "Median for senior hires joining an existing React/Node codebase.",
      },
      {
        metric: "35%",
        label: "Faster feature cycle",
        context: "Measured sprint velocity after structured AI-assisted workflow.",
      },
      {
        metric: "0",
        label: "Critical security finds",
        context: "Post-onboarding audit on last 10 vibe-coder placements.",
      },
    ],
    faqs: [
      {
        q: "Do they only prompt ChatGPT?",
        a: "No — they ship full features; ChatGPT is an accelerator, not a substitute for engineering.",
      },
      {
        q: "Can they build Custom GPTs for our org?",
        a: "Yes — including knowledge files, actions, and OAuth integrations.",
      },
      {
        q: "How do you prevent AI-generated bugs?",
        a: "Mandatory review checklist, tests on critical paths, and senior sign-off on architecture.",
      },
      {
        q: "Remote and timezone overlap?",
        a: "4+ hours overlap with US/EU/APAC — configured in the brief.",
      },
    ],
    relatedHire: [
      { to: "/hire/cursor-ai-developers", label: "Cursor AI Developers" },
      { to: "/hire/lovable-ai-developers", label: "Lovable AI Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
  {
    slug: "lovable-ai-developers",
    category: "vibe",
    title: "Lovable AI Developers",
    lede: "Hire Lovable specialists who turn AI-generated UI into maintainable products — wired to your auth, data, and design system.",
    introHeading: "From Lovable prototype to production system.",
    introParagraphs: [
      "Lovable gets you to pixel-fast prototypes. Our engineers harden them: real auth, API contracts, tests, and deployment pipelines your team can extend.",
      "We place developers who have shipped multiple Lovable → production transitions without throwing away the prototype.",
    ],
    skills: [
      "Lovable",
      "React",
      "Supabase",
      "Tailwind",
      "TypeScript",
      "Vercel",
      "Stripe",
      "REST",
      "PostgreSQL",
      "Git",
      "Figma",
      "Playwright",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("Lovable developers"),
    outcomes: [
      {
        metric: "10 days",
        label: "Prototype → staging",
        context: "Typical hardening sprint for a SaaS MVP.",
      },
      {
        metric: "100%",
        label: "Design token match",
        context: "When integrating with an existing brand system.",
      },
      { metric: "4.8/5", label: "Client NPS", context: "Vibe-coder placements over 24 months." },
    ],
    faqs: [
      {
        q: "Do you design in Lovable only?",
        a: "We implement and extend — design can stay in Lovable or Figma depending on your workflow.",
      },
      {
        q: "Supabase vs custom backend?",
        a: "Both — we match engineers to your chosen data layer in the brief.",
      },
      {
        q: "Can you take over an existing Lovable project?",
        a: "Yes — including refactors where generated code needs structure.",
      },
      {
        q: "Minimum team size?",
        a: "One senior is enough to start; pods available for faster hardening.",
      },
    ],
    relatedHire: [
      { to: "/hire/bolt-new-ai-developers", label: "Bolt.new Developers" },
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
      { to: "/hire/web-app-developer", label: "Web App Developers" },
    ],
    relatedService: { to: "/services/front-end-development", label: "Front-End Development" },
  },
  {
    slug: "replit-ai-developers",
    category: "vibe",
    title: "Replit AI Developers",
    lede: "Hire Replit AI developers for rapid full-stack iteration — with proper repos, environments, and release discipline.",
    introHeading: "Replit speed, enterprise hygiene.",
    introParagraphs: [
      "Replit AI is brilliant for exploration. We place engineers who keep that velocity while moving artifacts into GitHub, CI, and staged rollouts your org requires.",
      "Perfect when internal teams or students built a Replit prototype that now needs paying customers.",
    ],
    skills: [
      "Replit",
      "Replit AI",
      "Node.js",
      "Python",
      "PostgreSQL",
      "React",
      "Express",
      "Docker",
      "GitHub Actions",
      "AWS",
      "Auth0",
      "Stripe",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("Replit AI developers"),
    outcomes: [
      { metric: "1 wk", label: "Repo migration", context: "Replit → GitHub with CI green." },
      {
        metric: "3×",
        label: "Deploy frequency",
        context: "After pipeline setup on a startup MVP.",
      },
      {
        metric: "99.5%",
        label: "Uptime post-launch",
        context: "First 60 days on managed hosting.",
      },
    ],
    faqs: [
      {
        q: "Do engineers work only in Replit?",
        a: "They use Replit where it helps; production work happens in standard IDEs and CI.",
      },
      {
        q: "Multiplayer Replit experience?",
        a: "Yes for teams still collaborating in Replit during transition.",
      },
      {
        q: "Security reviews?",
        a: "Secrets scanning and dependency audit included in onboarding checklist.",
      },
      { q: "Pricing model?", a: "Per-seat monthly contract — same as other hire roles." },
    ],
    relatedHire: [
      { to: "/hire/chatgpt-developers", label: "ChatGPT Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
      { to: "/hire/software-developer", label: "Software Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
  {
    slug: "bolt-new-ai-developers",
    category: "vibe",
    title: "Bolt.new AI Developers",
    lede: "Hire Bolt.new engineers who export clean React codebases and connect them to real backends, auth, and observability.",
    introHeading: "Bolt.new prototypes that scale past demo day.",
    introParagraphs: [
      "Bolt.new generates impressive UI fast. Our placements specialise in extracting maintainable React, fixing state management, and integrating APIs your business depends on.",
      "You keep the speed advantage without locking yourself into generated patterns nobody understands.",
    ],
    skills: [
      "Bolt.new",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Supabase",
      "Firebase",
      "Vercel",
      "Netlify",
      "Git",
      "Vitest",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("Bolt.new developers"),
    outcomes: [
      {
        metric: "8 days",
        label: "Export + deploy",
        context: "Bolt project live on client VPC with auth.",
      },
      {
        metric: "-60%",
        label: "UI bug backlog",
        context: "After refactor of generated component structure.",
      },
      { metric: "5 days", label: "Shortlist", context: "Senior Bolt.new profiles delivered." },
    ],
    faqs: [
      {
        q: "Can you stay on Bolt hosting?",
        a: "If it fits your policy; most enterprises move to Vercel/AWS.",
      },
      {
        q: "TypeScript strict mode?",
        a: "We place engineers who enforce strict TS and lint rules post-export.",
      },
      {
        q: "Design system integration?",
        a: "Yes — tokens, components, and Storybook where required.",
      },
      { q: "Team extension?", a: "Add frontend + backend hires from our bench as you scale." },
    ],
    relatedHire: [
      { to: "/hire/lovable-ai-developers", label: "Lovable AI Developers" },
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
      { to: "/hire/web-app-developer", label: "Web App Developers" },
    ],
    relatedService: {
      to: "/services/web-application-development",
      label: "Web Application Development",
    },
  },
  {
    slug: "google-antigravity-developers",
    category: "vibe",
    title: "Google Antigravity Developers",
    lede: "Hire engineers experienced with Google Antigravity and agentic IDE workflows — shipping reviewed code into your main branch.",
    introHeading: "Agentic IDEs with accountable engineering.",
    introParagraphs: [
      "Antigravity and similar agentic environments change how code gets written; they do not remove the need for architecture, tests, and security review.",
      "We place early adopters who use these tools to multiply output while keeping your standards non-negotiable.",
    ],
    skills: [
      "Google Antigravity",
      "Gemini",
      "VS Code",
      "TypeScript",
      "Python",
      "Go",
      "Git",
      "CI/CD",
      "Testing",
      "Cloud Run",
      "GCP",
      "Code review",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("Antigravity developers"),
    outcomes: [
      {
        metric: "40%",
        label: "PR throughput",
        context: "Senior engineer using agentic IDE with review gates.",
      },
      {
        metric: "100%",
        label: "Reviewed merges",
        context: "No direct-to-main agent output on client engagements.",
      },
      {
        metric: "9 yrs",
        label: "Avg. experience",
        context: "Bench average for vibe-coder placements.",
      },
    ],
    faqs: [
      {
        q: "Is Antigravity required?",
        a: "Preferred for this track; we confirm tool fluency in interviews.",
      },
      { q: "GCP-only?", a: "Not required — many clients are multi-cloud; GCP depth is a plus." },
      {
        q: "Agent safety policies?",
        a: "We align with your allowed tools and data residency in the MSA.",
      },
      {
        q: "Can they train our team?",
        a: "Optional enablement workshops during onboarding month.",
      },
    ],
    relatedHire: [
      { to: "/hire/gemini-developers", label: "Gemini Developers" },
      { to: "/hire/cursor-ai-developers", label: "Cursor AI Developers" },
      { to: "/hire/ai-developers", label: "AI Developers" },
    ],
    relatedService: { to: "/services/ai-solutions", label: "AI Solutions practice" },
  },
  {
    slug: "cursor-ai-developers",
    category: "vibe",
    title: "Cursor AI Developers",
    lede: "Hire Cursor power-users who multiply sprint output while keeping your architecture, tests, and security bar intact.",
    introHeading: "Cursor in the hands of senior engineers.",
    introParagraphs: [
      "Cursor works best when the human in the loop has strong judgment. Our bench filters for engineers who have used AI IDEs in anger on large repos — not weekend tinkering.",
      "They join your Slack, your rituals, and your definition of done.",
    ],
    skills: [
      "Cursor",
      "VS Code",
      "TypeScript",
      "Python",
      "React",
      "Go",
      "Rust",
      "Git",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Code review",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("Cursor developers"),
    outcomes: [
      {
        metric: "30%",
        label: "Story points ↑",
        context: "Median after 4 sprints with Cursor-enabled senior hire.",
      },
      { metric: "2 wks", label: "Onboarding", context: "Productive on a 200k+ LOC monorepo." },
      { metric: "94%", label: "Retention", context: "12-month placement retention." },
    ],
    faqs: [
      {
        q: "Do you supply Cursor licences?",
        a: "Client-provided; we ensure engineers already use Cursor professionally.",
      },
      { q: "Monorepo experience?", a: "Explicitly screened — including Bazel, Nx, and Turborepo." },
      {
        q: "IP concerns with AI IDEs?",
        a: "We follow your policy on telemetry, privacy mode, and allowed models.",
      },
      {
        q: "Backend or frontend?",
        a: "Both — specify stack in the brief for accurate shortlisting.",
      },
    ],
    relatedHire: [
      { to: "/hire/windsurf-ai-developers", label: "Windsurf AI Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
      { to: "/hire/software-developer", label: "Software Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
  {
    slug: "windsurf-ai-developers",
    category: "vibe",
    title: "Windsurf AI Developers",
    lede: "Hire Windsurf AI developers for flow-state coding with cascade agents — backed by senior review and your existing engineering standards.",
    introHeading: "Windsurf velocity, production discipline.",
    introParagraphs: [
      "Windsurf's cascade and flow features help seniors move faster through boilerplate and refactors. We place engineers who know when to accept agent suggestions and when to rewrite.",
      "Best for teams already on VS Code forks who want dedicated Windsurf expertise without lowering the bar.",
    ],
    skills: [
      "Windsurf",
      "Cascade",
      "TypeScript",
      "Java",
      "Python",
      "React",
      "Spring",
      "Git",
      "JUnit",
      "Docker",
      "AWS",
      "Code review",
    ],
    whoFor: VIBE_SHARED_WHO,
    capabilities: ROLE_CAPS("Windsurf developers"),
    outcomes: [
      {
        metric: "25%",
        label: "Less boilerplate time",
        context: "Self-reported across placed seniors; validated in sprint metrics.",
      },
      {
        metric: "0",
        label: "Prod incidents from AI",
        context: "Attribution policy: no unreviewed agent merges.",
      },
      { metric: "5 days", label: "Shortlist", context: "Windsurf-experienced seniors." },
    ],
    faqs: [
      {
        q: "Windsurf vs Cursor?",
        a: "Different strengths — we shortlist against the IDE you standardise on.",
      },
      { q: "Java enterprise shops?", a: "Yes — strong bench depth for Spring and microservices." },
      {
        q: "On-prem restrictions?",
        a: "We match engineers used to locked-down environments and air-gapped flows.",
      },
      { q: "Can we hire a pod?", a: "Yes — lead + 2–4 engineers with shared Windsurf practices." },
    ],
    relatedHire: [
      { to: "/hire/cursor-ai-developers", label: "Cursor AI Developers" },
      { to: "/hire/backend-developers", label: "Backend Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
];

const ROLE_SHARED_WHO = [
  "Scale-ups under hiring freezes that still need to ship",
  "Enterprises augmenting internal teams for a product push",
  "CTOs replacing a bad agency or body-shop experience",
  "Founders who need senior ICs without 6-month local searches",
];

const roleConfigs: RoleConfig[] = [
  {
    slug: "software-developer",
    category: "role",
    title: "Software Developers",
    lede: "Hire senior software developers who own features end-to-end — clear communication, tested code, and respect for your existing conventions.",
    introHeading: "Software developers who act like owners.",
    introParagraphs: [
      "Our software developers average nine years of experience across SaaS, fintech, and enterprise IT. They join your ceremonies, your repo, and your on-call rotation when you need them to.",
      "No hidden juniors, no rotating faces — the engineer you approve is the engineer who ships.",
    ],
    skills: [
      "TypeScript",
      "Python",
      "Java",
      "Go",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "TDD",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Software developers"),
    outcomes: [
      {
        metric: "2 wks",
        label: "First merged PR",
        context: "Median onboarding on mature codebases.",
      },
      {
        metric: "60%",
        label: "Cost vs. US hire",
        context: "Fully loaded comparison for equivalent seniority.",
      },
      { metric: "3.4 yrs", label: "Avg. client tenure", context: "Across staffing engagements." },
    ],
    faqs: [
      {
        q: "Which stacks do you cover?",
        a: "Most modern web and cloud stacks — specify yours in the brief for a tight shortlist.",
      },
      {
        q: "Do developers work in our tools?",
        a: "Yes — Jira, Linear, GitHub/GitLab, your cloud, your laptop policy.",
      },
      { q: "Replacement guarantee?", a: "Within 2 weeks at our cost if the fit fails." },
      { q: "Can we convert to FTE?", a: "Contract-to-hire and direct placement both available." },
    ],
    relatedHire: [
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
      { to: "/hire/backend-developers", label: "Backend Developers" },
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
  {
    slug: "mobile-app-developer",
    category: "role",
    title: "Mobile App Developers",
    lede: "Hire mobile developers for iOS, Android, and React Native — store-ready releases, offline UX, and performance you can measure.",
    introHeading: "Mobile engineers who respect the store and the user.",
    introParagraphs: [
      "We place mobile specialists who have shipped consumer and B2B apps with real retention — not tutorial clones.",
      "From App Store compliance to crash-free sessions, they know what production mobile demands.",
    ],
    skills: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "Expo",
      "Firebase",
      "REST",
      "GraphQL",
      "Fastlane",
      "TestFlight",
      "Play Console",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Mobile developers"),
    outcomes: [
      {
        metric: "4.7★",
        label: "Avg. store rating",
        context: "Across consumer apps we helped staff.",
      },
      {
        metric: "<2%",
        label: "Crash regression",
        context: "Post-release on last 8 mobile engagements.",
      },
      {
        metric: "6 wks",
        label: "MVP to TestFlight",
        context: "Greenfield React Native with existing API.",
      },
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We shortlist separately — tell us your performance and team constraints.",
      },
      {
        q: "App Store submission experience?",
        a: "Required for senior mobile profiles on our bench.",
      },
      { q: "Wearables / tablet?", a: "Available — note form factors in the brief." },
      {
        q: "Design handoff?",
        a: "Engineers work from Figma; we can pair with design partners if needed.",
      },
    ],
    relatedHire: [
      { to: "/hire/android-developers", label: "Android Developers" },
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
    ],
    relatedService: { to: "/services/mobile-app-development", label: "Mobile App Development" },
  },
  {
    slug: "backend-developers",
    category: "role",
    title: "Backend Developers",
    lede: "Hire backend engineers who design APIs, data models, and services that stay fast under load — with observability built in.",
    introHeading: "Backends that scale without drama.",
    introParagraphs: [
      "Our backend developers come from high-traffic SaaS and regulated industries. They think in contracts, idempotency, and migration safety — not just happy-path endpoints.",
      "Place one senior IC or a pod with a lead who owns your service map.",
    ],
    skills: [
      "Node.js",
      "Python",
      "Go",
      "Java",
      "Spring",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "gRPC",
      "REST",
      "AWS",
      "Datadog",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Backend developers"),
    outcomes: [
      {
        metric: "40%",
        label: "Latency reduction",
        context: "E-commerce API refactor without schema breaking clients.",
      },
      {
        metric: "99.95%",
        label: "SLA achieved",
        context: "Managed services client over 12 months.",
      },
      { metric: "5 days", label: "Shortlist", context: "Senior backend profiles." },
    ],
    faqs: [
      { q: "Microservices or monolith?", a: "Both — we match to your architecture style." },
      { q: "On-call included?", a: "Can be part of the role definition; priced accordingly." },
      {
        q: "Legacy modernisation?",
        a: "Common engagement — strangler fig patterns, incremental cutover.",
      },
      {
        q: "Data residency?",
        a: "We place engineers used to India + global deployment constraints.",
      },
    ],
    relatedHire: [
      { to: "/hire/devops-developers", label: "DevOps Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
      { to: "/hire/software-developer", label: "Software Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
  {
    slug: "ai-developers",
    category: "role",
    title: "AI Developers",
    lede: "Hire AI developers who bridge application engineering and ML — shipping features with evals, monitoring, and sensible fallbacks.",
    introHeading: "AI developers for product teams, not labs.",
    introParagraphs: [
      "These are builders who integrate models into your product: RAG, agents, classification, and ranking — with the software craft to keep releases boring.",
      "Ideal when you need more capacity on AI features without hiring a full research org.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "LangChain",
      "OpenAI",
      "RAG",
      "FastAPI",
      "TypeScript",
      "Docker",
      "MLflow",
      "Pandas",
      "SQL",
      "MLOps",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: AI_CAPS("AI developers"),
    outcomes: [
      {
        metric: "8",
        label: "AI features shipped",
        context: "Average per 6-month placement on SaaS product teams.",
      },
      { metric: "98%", label: "Eval pass rate", context: "Where clients adopt our eval template." },
      { metric: "5 days", label: "Shortlist", context: "Senior AI application engineers." },
    ],
    faqs: [
      {
        q: "PhD required?",
        a: "No — we optimise for shipping; research PhDs available for special cases.",
      },
      { q: "On-prem models?", a: "Yes — Ollama, vLLM, and private VPC deployments." },
      {
        q: "Pair with data science?",
        a: "We can add data engineering or MLOps hires to the same brief.",
      },
      { q: "Regulated industries?", a: "BFSI and healthcare placements are a core strength." },
    ],
    relatedHire: [
      { to: "/hire/openai-developers", label: "OpenAI Developers" },
      { to: "/hire/generative-ai-developers", label: "Generative AI Developers" },
      { to: "/hire/prompt-engineer", label: "Prompt Engineers" },
    ],
    relatedService: { to: "/services/ai-solutions", label: "AI Solutions practice" },
  },
  {
    slug: "devops-developers",
    category: "role",
    title: "DevOps Developers",
    lede: "Hire DevOps and platform engineers who tame pipelines, clusters, and incidents — with documentation your team can actually use.",
    introHeading: "Platform engineers who reduce toil.",
    introParagraphs: [
      "Our DevOps placements own CI/CD, infrastructure as code, and observability — not ticket-chasing without context.",
      "They work alongside dev squads to make releases frequent and reversions boring.",
    ],
    skills: [
      "Terraform",
      "Kubernetes",
      "Helm",
      "AWS",
      "GCP",
      "Azure",
      "GitHub Actions",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "Linux",
      "Python",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("DevOps engineers"),
    outcomes: [
      {
        metric: "70%",
        label: "Deploy time cut",
        context: "After pipeline redesign for a 40-engineer org.",
      },
      { metric: "99.95%", label: "Uptime SLO", context: "12-month managed platform engagement." },
      { metric: "0", label: "Secrets in git", context: "Post-audit on onboarding week." },
    ],
    faqs: [
      {
        q: "SRE vs DevOps title?",
        a: "We match skills — tell us whether you need app SRE or platform IaC depth.",
      },
      { q: "On-call?", a: "Can be included with clear rota and escalation paths." },
      { q: "Multi-cloud?", a: "Yes — AWS/GCP/Azure combinations are common on our bench." },
      { q: "FinOps interest?", a: "Several seniors include cost optimisation in platform work." },
    ],
    relatedHire: [
      { to: "/hire/backend-developers", label: "Backend Developers" },
      { to: "/hire/software-developer", label: "Software Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
    ],
    relatedService: { to: "/services/cloud-infrastructure", label: "Cloud & Infrastructure" },
  },
  {
    slug: "web-app-developer",
    category: "role",
    title: "Web App Developers",
    lede: "Hire web application developers for SPAs, SSR, and full product surfaces — performance, accessibility, and API integration included.",
    introHeading: "Web apps that feel fast and stay maintainable.",
    introParagraphs: [
      "From Next.js marketing sites to complex logged-in dashboards, we place engineers who understand both browser constraints and backend contracts.",
      "They ship with Core Web Vitals, accessibility, and error budgets in mind — not just feature checklists.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "GraphQL",
      "REST",
      "Vercel",
      "AWS",
      "Playwright",
      "WCAG",
      "Redis",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Web app developers"),
    outcomes: [
      { metric: "0.4s", label: "LCP achieved", context: "Dashboard re-platform for B2B SaaS." },
      {
        metric: "+18%",
        label: "Conversion lift",
        context: "Marketing site performance + UX pass.",
      },
      { metric: "5 days", label: "Shortlist", context: "Senior web engineers." },
    ],
    faqs: [
      { q: "SEO-critical sites?", a: "Yes — SSR/SSG and technical SEO collaboration." },
      { q: "Legacy jQuery migration?", a: "Common — incremental migration strategies." },
      { q: "Auth patterns?", a: "OAuth2, SAML, Auth0, Clerk — screened per brief." },
      { q: "E-commerce?", a: "Shopify, headless commerce, and custom carts." },
    ],
    relatedHire: [
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
      { to: "/hire/backend-developers", label: "Backend Developers" },
    ],
    relatedService: {
      to: "/services/web-application-development",
      label: "Web Application Development",
    },
  },
  {
    slug: "frontend-developers",
    category: "role",
    title: "Frontend Developers",
    lede: "Hire frontend developers obsessed with UX, design systems, and performance — integrated with your design and API teams.",
    introHeading: "Frontends your designers and users agree on.",
    introParagraphs: [
      "We place frontend specialists who treat components, tokens, and accessibility as production concerns — not afterthoughts.",
      "They partner with design on Figma-to-code workflows and with backend on sensible API shapes.",
    ],
    skills: [
      "React",
      "Vue",
      "TypeScript",
      "Tailwind",
      "Radix",
      "Storybook",
      "Framer Motion",
      "Vitest",
      "Playwright",
      "Webpack",
      "Vite",
      "WCAG 2.2",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Frontend developers"),
    outcomes: [
      { metric: "100%", label: "WCAG AA pass", context: "Default on enterprise dashboard work." },
      { metric: "+22%", label: "Activation lift", context: "Onboarding flow redesign." },
      { metric: "2 wks", label: "Design system adoption", context: "Token pipeline into code." },
    ],
    faqs: [
      { q: "Vue and React both?", a: "Separate shortlists — specify primary framework." },
      { q: "Micro-frontends?", a: "Senior engineers with module federation experience available." },
      { q: "Only UI, no Node?", a: "We offer UI-focused profiles and fullstack-leaning profiles." },
      { q: "Brand-new design system?", a: "We can staff a lead to establish Storybook + tokens." },
    ],
    relatedHire: [
      { to: "/hire/web-app-developer", label: "Web App Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
      { to: "/hire/mobile-app-developer", label: "Mobile App Developers" },
    ],
    relatedService: { to: "/services/front-end-development", label: "Front-End Development" },
  },
  {
    slug: "fullstack-developers",
    category: "role",
    title: "Fullstack Developers",
    lede: "Hire fullstack developers who own vertical slices — database to UI — without creating silos or skipping tests.",
    introHeading: "One engineer, clear end-to-end ownership.",
    introParagraphs: [
      "Fullstack on our bench means genuinely strong on both sides, not weak on one. We verify depth in interviews on backend design and frontend quality separately.",
      "Perfect for early-stage teams and squads that need flexible capacity.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST",
      "GraphQL",
      "AWS",
      "Docker",
      "TDD",
      "CI/CD",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Fullstack developers"),
    outcomes: [
      {
        metric: "1 feature",
        label: "E2E per sprint",
        context: "Vertical slice delivery on startup squads.",
      },
      {
        metric: "50%",
        label: "Less coordination tax",
        context: "Vs. separate FE/BE contractors on small teams.",
      },
      { metric: "5 days", label: "Shortlist", context: "Validated fullstack seniors." },
    ],
    faqs: [
      {
        q: "How do you verify fullstack?",
        a: "Split technical: backend system design + frontend live coding.",
      },
      { q: "Mobile fullstack?", a: "React Native + Node profiles available." },
      {
        q: "Solo on a project?",
        a: "Yes for MVPs; we recommend a lead review cadence for architecture.",
      },
      { q: "Scale to a pod?", a: "Add specialists as scope grows — same hiring partner." },
    ],
    relatedHire: [
      { to: "/hire/software-developer", label: "Software Developers" },
      { to: "/hire/backend-developers", label: "Backend Developers" },
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
    ],
    relatedService: { to: "/services/software-development", label: "Software Development" },
  },
  {
    slug: "android-developers",
    category: "role",
    title: "Android Developers",
    lede: "Hire Android developers for Kotlin, Jetpack Compose, and Play Store excellence — performance, offline, and security included.",
    introHeading: "Android builds that pass review and perform.",
    introParagraphs: [
      "We place Android engineers who have shipped apps with millions of installs and strict enterprise MDM requirements.",
      "From Compose migrations to legacy Java cutovers, they document decisions and leave your team unblocked.",
    ],
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "Room",
      "Retrofit",
      "Hilt",
      "Firebase",
      "Gradle",
      "Play Console",
      "JUnit",
      "Espresso",
      "Material 3",
    ],
    whoFor: ROLE_SHARED_WHO,
    capabilities: ROLE_CAPS("Android developers"),
    outcomes: [
      {
        metric: "4.6★",
        label: "Play Store avg.",
        context: "Consumer apps staffed by Pure engineers.",
      },
      { metric: "30%", label: "APK size reduction", context: "After modularisation pass." },
      {
        metric: "3 wks",
        label: "Compose migration slice",
        context: "Feature module pilot on brownfield app.",
      },
    ],
    faqs: [
      {
        q: "Java legacy codebases?",
        a: "Seniors comfortable with interop and gradual Kotlin migration.",
      },
      { q: "Compose-only?", a: "We tag profiles by Compose depth vs XML legacy." },
      { q: "Enterprise MDM?", a: "Experience with Intune and custom device policies." },
      { q: "Wear OS / TV?", a: "Available — specify form factor in brief." },
    ],
    relatedHire: [
      { to: "/hire/mobile-app-developer", label: "Mobile App Developers" },
      { to: "/hire/frontend-developers", label: "Frontend Developers" },
      { to: "/hire/fullstack-developers", label: "Fullstack Developers" },
    ],
    relatedService: { to: "/services/mobile-app-development", label: "Mobile App Development" },
  },
];

const ALL_CONFIGS: RoleConfig[] = [...configs, ...vibeConfigs, ...roleConfigs];

export const hireRoles: Record<HireRoleSlug, Entry> = Object.fromEntries(
  ALL_CONFIGS.map((c) => [c.slug, defineRole(c)]),
) as Record<HireRoleSlug, Entry>;

export function getHireRole(slug: string): Entry | undefined {
  return hireRoles[slug as HireRoleSlug];
}

export function isHireRoleSlug(slug: string): slug is HireRoleSlug {
  return (HIRE_ROLE_SLUGS as readonly string[]).includes(slug);
}
