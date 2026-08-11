import {
  BarChart3,
  Boxes,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Lightbulb,
  PackageSearch,
  Settings,
  SlidersHorizontal,
  TestTube2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { SubServicePageProps } from "@/components/site/SubServicePage";
import { BRAND } from "@/lib/brand-colors";

type IndustrialDefinition = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  Icon: LucideIcon;
  capabilities: { title: string; body: string }[];
  outcomes: { metric: string; label: string; context: string }[];
};

const relatedLinks = [
  { to: "/solutions/ai-visual-inspection", label: "AI Visual Inspection" },
  { to: "/solutions/predictive-maintenance", label: "Predictive Maintenance" },
  { to: "/services/data-engineering", label: "Data Engineering" },
];

function makeIndustrialPage(definition: IndustrialDefinition): SubServicePageProps {
  return {
    ...definition,
    accent: BRAND.blue,
    heroStats: [
      { value: "Real-time", label: "Operational visibility" },
      { value: "Plant-ready", label: "Built for the shop floor" },
      { value: "Connected", label: "Works with your data" },
      { value: "Measurable", label: "Outcome-led rollout" },
    ],
    whoFor: [
      "Plant and operations leaders who need timely, reliable decisions from production data.",
      "Quality, maintenance, and process teams moving beyond disconnected paper and spreadsheets.",
      "Manufacturers standardising workflows across lines, shifts, and sites.",
      "Digital transformation teams that need a pilot with a clear operational metric.",
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Each implementation is configured around your process, decision points, and evidence requirements — not a generic software rollout.",
        items: definition.capabilities,
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "The solution is designed to fit the people, systems, and controls already operating in your plant.",
        items: [
          { title: "Role-based workflows", body: "Give operators, supervisors, engineers, and leaders the right tasks, approvals, and level of detail." },
          { title: "Action and escalation", body: "Turn exceptions into owned follow-ups with clear status, context, and accountability." },
          { title: "Connected data", body: "Bring together equipment, forms, files, and business-system data where it improves the operational decision." },
          { title: "Audit-ready evidence", body: "Retain structured records of checks, changes, actions, and results for internal and customer reviews." },
          { title: "Multi-site standards", body: "Use common workflows and measures while retaining the flexibility each plant needs." },
          { title: "Measured rollout", body: "Start with a focused pilot and scale only after adoption and business impact are demonstrated." },
        ],
      },
    ],
    process: [
      { title: "Discover", body: "Map the current workflow, data sources, decision owners, and the metric that matters." },
      { title: "Configure", body: "Set up forms, rules, integrations, and role-based views around the way your plant works." },
      { title: "Pilot", body: "Run the solution on a focused line or workflow, validate adoption, and measure the result." },
      { title: "Scale", body: "Extend proven workflows across assets and sites with governance and continuous improvement." },
    ],
    tech: ["Industrial IoT", "APIs", "Mobile workflows", "Dashboards", "Role-based access"],
    techExpertise: [
      {
        label: "Industrial Data",
        cards: [
          { role: "Industrial Data Layer", level: "Core", category: "Plant data foundation", tech: ["IIoT", "OPC UA", "MQTT"] },
          { role: "Workflow Engine", level: "Core", category: "Digital operations", tech: ["Forms", "Approvals", "Alerts"] },
          { role: "Operational Analytics", level: "Advanced", category: "Decision support", tech: ["KPIs", "Trends", "Exceptions"] },
          { role: "Plant Dashboards", level: "Live", category: "Performance visibility", tech: ["OEE", "Quality", "Downtime"] },
        ],
      },
      {
        label: "Integration",
        cards: [
          { role: "Equipment Connectivity", level: "Edge", category: "Machines and sensors", tech: ["PLCs", "Sensors", "Gateways"] },
          { role: "Business Systems", level: "API", category: "Enterprise integration", tech: ["ERP", "MES", "REST APIs"] },
          { role: "Mobile Operations", level: "Field", category: "Frontline workflows", tech: ["Offline capture", "Photos", "QR codes"] },
          { role: "Document Intelligence", level: "Data", category: "Files and records", tech: ["PDF", "CSV", "Excel"] },
        ],
      },
      {
        label: "Governance",
        cards: [
          { role: "Role-based Access", level: "Secure", category: "Controlled access", tech: ["Roles", "Permissions", "Approvals"] },
          { role: "Audit Trail", level: "Traceable", category: "Operational evidence", tech: ["History", "Changes", "Records"] },
          { role: "Multi-site Operations", level: "Scalable", category: "Plant standardisation", tech: ["Sites", "Templates", "Reporting"] },
          { role: "Data Quality", level: "Reliable", category: "Trusted decisions", tech: ["Validation", "Rules", "Review"] },
        ],
      },
    ],
    faqs: [
      { q: "Can this work with our existing systems?", a: "Yes. We assess your current equipment, spreadsheets, ERP, MES, and data sources first, then integrate where it creates practical value." },
      { q: "Do we need to replace machines or software?", a: "No. The implementation is designed to complement your existing operation and can start with the data and tools you already use." },
      { q: "How do we start?", a: "We begin with one defined workflow, site, or production line and agree on the operational measure that will determine pilot success." },
    ],
    siblingLinks: relatedLinks,
  };
}

const definitions: IndustrialDefinition[] = [
  {
    slug: "statistical-ai",
    eyebrow: "Industrial Analytics",
    title: "Statistical AI for faster, evidence-based process decisions.",
    lede: "Turn production and quality data into understandable statistical analysis, trend signals, and practical next actions for plant teams.",
    Icon: BarChart3,
    capabilities: [
      { title: "Process analysis", body: "Analyse variation, distributions, correlations, and capability using the data your teams already collect." },
      { title: "Plain-language insights", body: "Present statistical findings in clear operational language so engineers can act without waiting for a specialist report." },
      { title: "Root-cause support", body: "Compare variables and production conditions to focus investigations on the factors most likely to affect performance." },
    ],
    outcomes: [{ metric: "Earlier", label: "Process insight", context: "Spot meaningful shifts before they become costly production or quality issues." }, { metric: "Clearer", label: "Decision support", context: "Give teams a shared, evidence-based view of what the data is saying." }, { metric: "Repeatable", label: "Analysis", context: "Use consistent methods across products, lines, and plants." }],
  },
  {
    slug: "in-process-quality-spc",
    eyebrow: "Quality Intelligence",
    title: "In-process quality and SPC that catches drift early.",
    lede: "Digitise quality checks and statistical process control so deviations are visible while there is still time to correct the process.",
    Icon: SlidersHorizontal,
    capabilities: [{ title: "Digital control plans", body: "Guide operators through the right checks, frequencies, and acceptance criteria for every process." }, { title: "Live control charts", body: "Track variation and control-limit breaches as data is captured on the shop floor." }, { title: "Escalation workflows", body: "Route out-of-control signals to the right owners with context and a record of response." }],
    outcomes: [{ metric: "Less", label: "Process variation", context: "Identify unstable conditions earlier in the production cycle." }, { metric: "Faster", label: "Corrective action", context: "Replace delayed spreadsheet reviews with visible, timely signals." }, { metric: "Stronger", label: "Quality evidence", context: "Maintain a traceable record of in-process control." }],
  },
  {
    slug: "cpv-apqr",
    eyebrow: "Compliance Intelligence",
    title: "Continuous process verification and APQR, made manageable.",
    lede: "Bring process-verification data, product quality reviews, exceptions, and recurring trends into one governed workflow.",
    Icon: ClipboardCheck,
    capabilities: [{ title: "Verification plans", body: "Define critical process and quality parameters with consistent monitoring rules." }, { title: "Review-ready records", body: "Organise product and process evidence for periodic quality review without chasing files." }, { title: "Trend management", body: "Surface recurring deviations, investigations, and actions across batches and products." }],
    outcomes: [{ metric: "Ready", label: "For review", context: "Keep the evidence needed for periodic quality conversations in one place." }, { metric: "Better", label: "Traceability", context: "Connect observations, exceptions, and follow-up actions." }, { metric: "Lower", label: "Manual effort", context: "Reduce time spent assembling recurring process-quality reports." }],
  },
  {
    slug: "gauge-msa",
    eyebrow: "Measurement Systems",
    title: "Gauge management and MSA you can trust on the floor.",
    lede: "Maintain calibration visibility and evaluate measurement-system reliability so quality decisions are built on dependable data.",
    Icon: Gauge,
    capabilities: [{ title: "Gauge register", body: "Keep instruments, owners, locations, and calibration status in a single digital register." }, { title: "Calibration scheduling", body: "Plan due dates, reminders, certificates, and exceptions before an instrument becomes a risk." }, { title: "MSA studies", body: "Support repeatability, reproducibility, bias, and stability studies with structured data capture." }],
    outcomes: [{ metric: "Trusted", label: "Measurements", context: "Support confidence that inspection decisions use fit-for-purpose gauges." }, { metric: "Visible", label: "Calibration status", context: "Know what is due, overdue, quarantined, or ready to use." }, { metric: "Consistent", label: "MSA practice", context: "Standardise measurement studies across teams and locations." }],
  },
  {
    slug: "inspection-management",
    eyebrow: "Inspection Management",
    title: "Incoming, in-process, and outgoing inspection in one workflow.",
    lede: "Replace paper inspection records with guided, traceable checks for materials, work-in-progress, and finished goods.",
    Icon: PackageSearch,
    capabilities: [{ title: "Configurable inspections", body: "Build plans for incoming, process, and final inspections with sampling and acceptance rules." }, { title: "Non-conformance capture", body: "Record defects, photos, dispositions, and corrective actions where the inspection happens." }, { title: "Lot traceability", body: "Connect inspection evidence to suppliers, batches, jobs, and release decisions." }],
    outcomes: [{ metric: "Paperless", label: "Inspection records", context: "Give teams a structured digital alternative to forms and folders." }, { metric: "Faster", label: "Release decisions", context: "Make inspection status and exceptions visible to the people who need them." }, { metric: "Complete", label: "Quality history", context: "Preserve traceable evidence across the material and product journey." }],
  },
  {
    slug: "continuous-improvement",
    eyebrow: "Continuous Improvement",
    title: "Continuous improvement that connects ideas to impact.",
    lede: "Manage improvement opportunities, problem solving, actions, and verified results in a shared operational pipeline.",
    Icon: Lightbulb,
    capabilities: [{ title: "Improvement pipeline", body: "Capture ideas, kaizens, and improvement projects with owners, priorities, and status." }, { title: "Structured problem solving", body: "Support root-cause analysis, corrective actions, and approvals in one repeatable workflow." }, { title: "Benefit tracking", body: "Link completed actions to the quality, cost, delivery, safety, or throughput metric they improve." }],
    outcomes: [{ metric: "Visible", label: "Improvement portfolio", context: "See what is being worked on, who owns it, and what is blocked." }, { metric: "Accountable", label: "Actions", context: "Keep follow-ups from slipping between shifts and functional teams." }, { metric: "Measured", label: "Benefits", context: "Track whether an improvement delivered the intended operational result." }],
  },
  {
    slug: "maintenance-management",
    eyebrow: "Maintenance Management",
    title: "Maintenance management that moves teams from reactive to prepared.",
    lede: "Plan preventive work, manage work orders, record breakdowns, and connect asset history to reliability decisions.",
    Icon: Wrench,
    capabilities: [{ title: "Work order management", body: "Create, assign, prioritise, and close maintenance work with the right asset and fault context." }, { title: "Preventive maintenance", body: "Schedule recurring tasks, inspections, and reminders around equipment criticality." }, { title: "Reliability analytics", body: "Review downtime, recurring faults, MTBF, and MTTR trends to focus improvement work." }],
    outcomes: [{ metric: "More", label: "Planned work", context: "Give teams a dependable rhythm for preventive and condition-based maintenance." }, { metric: "Less", label: "Repeat downtime", context: "Use asset history and fault patterns to address recurring issues." }, { metric: "Clearer", label: "Asset accountability", context: "Keep ownership, work, and service records connected to each asset." }],
  },
  {
    slug: "doe-experiments-management",
    eyebrow: "Process Optimisation",
    title: "Design and manage experiments with industrial discipline.",
    lede: "Plan, execute, document, and analyse designed experiments so process learning becomes repeatable organisational knowledge.",
    Icon: TestTube2,
    capabilities: [{ title: "Experiment planning", body: "Define factors, responses, constraints, trial plans, and owners before a production experiment starts." }, { title: "Execution records", body: "Capture observations and results against the approved experimental conditions." }, { title: "Knowledge library", body: "Retain experiment history, findings, and validated settings for future engineering work." }],
    outcomes: [{ metric: "Faster", label: "Learning cycles", context: "Bring structure to test-and-learn work on products and processes." }, { metric: "Repeatable", label: "Experiments", context: "Preserve how trials were run rather than relying on individual memory." }, { metric: "Stronger", label: "Process knowledge", context: "Turn results into controlled, usable guidance for the next team." }],
  },
  {
    slug: "live-dashboards",
    eyebrow: "Operational Visibility",
    title: "Live dashboards for the decisions happening now.",
    lede: "Give shop-floor teams and leaders a shared view of production, quality, maintenance, and improvement indicators as they change.",
    Icon: BarChart3,
    capabilities: [{ title: "Role-based views", body: "Present the right operational measures for operators, supervisors, and plant leadership." }, { title: "Connected data", body: "Bring together machine, quality, maintenance, and manual workflow signals in one view." }, { title: "Actionable alerts", body: "Highlight exceptions and thresholds that call for a response, not just reporting." }],
    outcomes: [{ metric: "Shared", label: "Operational picture", context: "Align teams around current performance instead of separate reports." }, { metric: "Quicker", label: "Escalation", context: "Surface exceptions while a supervisor can still intervene." }, { metric: "Focused", label: "Daily management", context: "Keep the measures that matter visible in meetings and on the floor." }],
  },
  {
    slug: "production-management",
    eyebrow: "Production Management",
    title: "Production management built around actual shop-floor performance.",
    lede: "Capture production activity, downtime, reasons, schedules, and output so daily execution is visible and improvable.",
    Icon: Settings,
    capabilities: [{ title: "Production logging", body: "Record jobs, output, rejects, shifts, and operating conditions digitally." }, { title: "Downtime tracking", body: "Capture duration, causes, ownership, and recurring patterns at the point of occurrence." }, { title: "Plan versus actual", body: "Compare expected output and schedule against what happened, with context for variance." }],
    outcomes: [{ metric: "Better", label: "Schedule visibility", context: "See how actual output is tracking against the day’s plan." }, { metric: "Clearer", label: "Downtime causes", context: "Replace vague downtime records with timely, structured reason capture." }, { metric: "Stronger", label: "Daily control", context: "Give production teams the information to recover performance during the shift." }],
  },
  {
    slug: "data-extractor",
    eyebrow: "Industrial Data",
    title: "Extract operational data from the files you already receive.",
    lede: "Turn structured and semi-structured data in spreadsheets, PDFs, CSVs, and forms into usable information for industrial workflows.",
    Icon: FileSearch,
    capabilities: [{ title: "Document extraction", body: "Identify needed values from common operational documents and place them in structured fields." }, { title: "Template matching", body: "Apply repeatable templates and validation rules to recurring supplier and plant documents." }, { title: "Workflow handoff", body: "Route validated data into dashboards, quality records, inventory workflows, or connected systems." }],
    outcomes: [{ metric: "Less", label: "Manual entry", context: "Reduce repetitive copy-and-paste work around operational documents." }, { metric: "Faster", label: "Data availability", context: "Make useful information available to workflows sooner." }, { metric: "More", label: "Consistent records", context: "Apply the same validation and structure each time a known document arrives." }],
  },
  {
    slug: "inventory-management",
    eyebrow: "Inventory Management",
    title: "Inventory control with real-time operational context.",
    lede: "Track receipts, issues, returns, transfers, and replenishment so stores and production teams can trust material availability.",
    Icon: Boxes,
    capabilities: [{ title: "Movement tracking", body: "Record every receipt, issue, return, transfer, and adjustment against the right material and location." }, { title: "Stock visibility", body: "Make current stock, reservations, and replenishment needs visible to authorised teams." }, { title: "Material traceability", body: "Connect material movements with lots, jobs, inspection status, and downstream consumption." }],
    outcomes: [{ metric: "Clearer", label: "Stock position", context: "Give teams one view of what is on hand and where it is." }, { metric: "Fewer", label: "Material surprises", context: "Make shortages and replenishment needs visible earlier." }, { metric: "Traceable", label: "Movements", context: "Maintain an accountable history from receipt through issue or return." }],
  },

];

export const industrialSolutions = Object.fromEntries(
  definitions.map((definition) => [definition.slug, makeIndustrialPage(definition)]),
) as Record<string, SubServicePageProps>;

export const industrialSlugs = definitions.map(({ slug }) => slug);
