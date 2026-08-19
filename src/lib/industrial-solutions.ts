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
  Smartphone,
  Activity,
  Eye,
  FileSearch as FileSearchIcon,
  type LucideIcon,
} from "lucide-react";
import type { SubServicePageProps } from "@/components/site/SubServicePage";
import { BRAND } from "@/lib/brand-colors";
import { 
  InspectionManagementExtraSection, 
  MobileAiExtraSection, 
  OeeAnalyticsExtraSection, 
  ScrapsInventoryExtraSection, 
  StatisticalQualityControlExtraSection,
  AiVisualInspectionExtraSection,
  StatisticalAiExtraSection,
  InProcessQualitySpcExtraSection,
  CpvApqrExtraSection,
  GaugeMsaExtraSection,
  ContinuousImprovementExtraSection,
  MaintenanceManagementExtraSection,
  DoeExperimentsManagementExtraSection,
  LiveDashboardsExtraSection,
  ProductionManagementExtraSection,
  DataExtractorExtraSection,
  InventoryManagementExtraSection
} from "@/components/site/IndustrialExtraSections";

type IndustrialDefinition = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  Icon: LucideIcon;
  capabilities: { title: string; body: string }[];
  outcomes: { metric: string; label: string; context: string }[];
  extraSection?: React.ComponentType;
  // Overrides
  whoFor?: string[];
  contentSections?: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  }[];
  process?: { title: string; body: string }[];
  tech?: string[];
  techExpertise?: any[];
  faqs?: { q: string; a: string }[];
  outcomesIntro?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    stats?: { value: string; label: string }[];
  };
  heroStats?: { value: string; label: string }[];
  whoForTitle?: React.ReactNode;
  whoForSub?: string;
  processTitle?: string;
  processDescription?: string;
  techHeading?: React.ReactNode;
  techSubheading?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryTo?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryTo?: string;
  outcomesTitle?: string;

};

const relatedLinks = [
  { to: "/solutions/ai-visual-inspection", label: "AI Visual Inspection" },
  { to: "/solutions/predictive-maintenance", label: "Predictive Maintenance" },
  { to: "/services/data-engineering", label: "Data Engineering" },
];

function makeIndustrialPage(definition: IndustrialDefinition): SubServicePageProps {
  return {
    ...definition,
    extraSection: definition.extraSection as any,
    accent: BRAND.blue,

    heroStats: definition.heroStats || [
      { value: "Real-time", label: "Operational visibility" },
      { value: "Plant-ready", label: "Built for the shop floor" },
      { value: "Connected", label: "Works with your data" },
      { value: "Measurable", label: "Outcome-led rollout" },
    ],
    whoFor: definition.whoFor || [
      "Plant and operations leaders who need timely, reliable decisions from production data.",
      "Quality, maintenance, and process teams moving beyond disconnected paper and spreadsheets.",
      "Manufacturers standardising workflows across lines, shifts, and sites.",
      "Digital transformation teams that need a pilot with a clear operational metric.",
    ],
    contentSections: definition.contentSections || [
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
    process: definition.process || [
      { title: "Discover", body: "Map the current workflow, data sources, decision owners, and the metric that matters." },
      { title: "Configure", body: "Set up forms, rules, integrations, and role-based views around the way your plant works." },
      { title: "Pilot", body: "Run the solution on a focused line or workflow, validate adoption, and measure the result." },
      { title: "Scale", body: "Extend proven workflows across assets and sites with governance and continuous improvement." },
    ],
    tech: definition.tech || ["Industrial IoT", "APIs", "Mobile workflows", "Dashboards", "Role-based access"],
    techExpertise: definition.techExpertise || [
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
    faqs: definition.faqs || [
      { q: "Can this work with our existing systems?", a: "Yes. We assess your current equipment, spreadsheets, ERP, MES, and data sources first, then integrate where it creates practical value." },
      { q: "Do we need to replace machines or software?", a: "No. The implementation is designed to complement your existing operation and can start with the data and tools you already use." },
      { q: "How do we start?", a: "We begin with one defined workflow, site, or production line and agree on the operational measure that will determine pilot success." },
    ],
    siblingLinks: relatedLinks,
  };
}

const definitions: IndustrialDefinition[] = [
  {
    slug: "ai-visual-inspection",
    eyebrow: "AI Visual Inspection",
    title: "Turn every camera into an intelligent quality and process-monitoring system.",
    lede: "Detect defects, verify products, monitor production activities, and generate actionable insights using AI-powered computer vision. Built for production environments where accuracy, speed, traceability, and uptime matter.",
    Icon: Eye,
    capabilities: [
      { title: "AI Defect Detection", body: "Detect scratches, cracks, dents, contamination, surface defects, incorrect assembly, missing components, and other visual anomalies." },
      { title: "Presence & Absence Verification", body: "Confirm that required components, labels, seals, fasteners, markings, or features are present and correctly positioned." },
      { title: "Dimension & Geometry Inspection", body: "Use vision-based measurement to validate dimensions, alignment, shape, spacing, and tolerances where the application permits." },
    ],
    outcomes: [
      { metric: "40%+", label: "Inspection effort reduction", context: "Potential reduction in manual inspection effort for suitable applications." },
      { metric: "49%", label: "Consistency improvement", context: "Improvement potential in inspection consistency and traceability." },
      { metric: "30%", label: "Faster response times", context: "Faster response to recurring quality issues with automated alerts and workflows." },
    ],
    extraSection: AiVisualInspectionExtraSection,
    whoFor: [
      "Designed for manufacturing organizations that require dependable inspection and process visibility across production environments.",
      "Discrete or continuous operations in automotive, tyre and rubber, engineering, electronics, packaging, FMCG, and pharmaceutical lines.",
      "Quality, plant, and operations leaders seeking to move from manual visual checks to continuous, data-driven quality control.",
      "Digital transformation teams needing traceable evidence with product, batch, machine, shift, and timestamp information.",
    ],
    contentSections: [
      {
        eyebrow: "Capabilities",
        title: "Core Platform Capabilities",
        description: "The operational building blocks your team needs to automate inspection and get full process visibility.",
        items: [
          { title: "OCR / OCV & Code Verification", body: "Read and validate text, serial numbers, batch numbers, QR codes, barcodes, and other machine-readable information." },
          { title: "Color & Pattern Analysis", body: "Identify color deviations, pattern mismatches, print quality issues, and visual inconsistencies." },
          { title: "Process Compliance Monitoring", body: "Verify operator or process steps using vision-based checks and configured business rules." },
          { title: "Image & Result Traceability", body: "Maintain inspection records with timestamps, production references, defect categories, confidence scores, and images." },
          { title: "Alerts & Escalation", body: "Notify operators, supervisors, quality teams, or maintenance teams when predefined conditions occur." },
        ],
      },
    ],
    process: [
      { title: "Step 1 – Application Assessment", body: "Understand the product, defect types, production speed, lighting, camera position, and expected inspection accuracy." },
      { title: "Step 2 – Proof of Concept", body: "Collect representative images and validate the feasibility of the selected AI vision approach." },
      { title: "Step 3 – Pilot Installation", body: "Install the camera, lighting, edge device, and software at a controlled production station." },
      { title: "Step 4 – Integration", body: "Connect the solution with PLC, MES, ERP, QMS, database, or other required systems." },
      { title: "Step 5 – Validation", body: "Validate accuracy, response time, false positives, false negatives, and production behavior." },
      { title: "Step 6 – Production Rollout", body: "Deploy the approved solution and configure monitoring, alerts, reports, and user access." },
      { title: "Step 7 – Continuous Improvement", body: "Review defect trends and model performance and improve the solution as products or processes evolve." },
    ],
    faqs: [
      { q: "Can the AI Vision Camera inspect every product?", a: "The platform can support 100% inspection for suitable applications. Final performance depends on product variation, defect characteristics, camera resolution, lighting, line speed, and the quality of training/validation data." },
      { q: "Does the system require an internet connection?", a: "Not necessarily. AI inference and critical inspection functions can be deployed at the edge. Internet or plant-network connectivity can be added for centralized dashboards, remote access, cloud analytics, or integrations." },
      { q: "Can it connect to our existing PLC?", a: "Yes. PLC integration can be implemented using the communication method supported by the plant and PLC, such as digital I/O, industrial protocols, or an application gateway." },
      { q: "Can we store inspection images?", a: "Yes. Images can be stored according to the required retention policy, with options to store all images, only NG images, sampled images, or selected events." },
      { q: "Can the system support multiple production lines?", a: "Yes. A centralized architecture can aggregate data from multiple inspection stations, lines, and plants, subject to network and infrastructure requirements." },
      { q: "Can the AI model be improved after deployment?", a: "Yes. New representative samples and validated defect examples can be used to evaluate and retrain models through a controlled model-management process." },
      { q: "What happens if the network goes down?", a: "An edge-based design can continue local inspection and store required events until connectivity is restored, depending on the selected architecture." },
    ],
    techExpertise: [
      {
        label: "Optics & Hardware",
        cards: [
          { role: "Smart Lighting Sync", level: "Optics", category: "Surface illumination", tech: ["Coaxial", "Darkfield", "Strobe-sync"] },
          { role: "Industrial Cameras", level: "Optics", category: "Frame acquisition", tech: ["High-speed global shutter", "GigE Vision", "Polarizing"] },
          { role: "Edge GPU Inference", level: "Compute", category: "Shop floor execution", tech: ["NVIDIA Jetson", "RTX edge nodes", "Local inference"] },
          { role: "Enclosures & Mounting", level: "Hardware", category: "Plant floor ruggedness", tech: ["IP67 housings", "Vibration damping", "Adjustable mounts"] },
        ],
      },
      {
        label: "AI & Model Pipeline",
        cards: [
          { role: "Neural Net Architectures", level: "AI Model", category: "Computer Vision", tech: ["YOLOv8/10", "U-Net Segmentation", "Autoencoders"] },
          { role: "Dataset Pipeline", level: "Model", category: "Image management", tech: ["Active learning", "CVAT labeling", "Image augmentation"] },
          { role: "Synapse AI Bootstrap", level: "AI Generator", category: "Synthetic defects", tech: ["Diffusion Models", "CAD-to-defect texture mapping"] },
          { role: "Retraining Workflows", level: "Pipeline", category: "Continuous learning", tech: ["Local fine-tuning", "Validation testing", "Version control"] },
        ],
      },
      {
        label: "Control & Integrations",
        cards: [
          { role: "PLC Control Integration", level: "Control", category: "Reject actuation", tech: ["EtherNet/IP", "PROFINET", "Digital I/O"] },
          { role: "Reject Mechanisms", level: "Actuator", category: "Physical sorting", tech: ["Air blowers", "Pneumatic pushers", "Diverter gates"] },
          { role: "Shopfloor Alerts", level: "Notification", category: "Frontline escalation", tech: ["Andon beacons", "Telegram/Teams hooks", "E-Stop relay"] },
          { role: "Compliance Export", level: "Governance", category: "Traceable records", tech: ["Exception logs", "PDF quality certificates", "MES APIs"] },
        ],
      },
    ],
  },
  {
    slug: "statistical-ai",
    eyebrow: "Industrial Analytics",
    title: "Statistical AI for Faster, Better Decisions",
    lede: "Turn your everyday data into clear insights. Statistical AI helps you understand patterns, spot unusual changes, and make confident decisions based on real evidence.",
    Icon: BarChart3,
    whoForTitle: "Built for Teams That Need Clear Answers From Their Data",
    whoForSub: "Whether you are monitoring performance, checking quality, or trying to understand why results are changing, Statistical AI helps your team turn complex data into clear answers.",
    whoFor: [
      "Track performance and spot quality issues easily.",
      "Identify why process results or outputs are changing.",
      "Understand long-term trends and find hidden patterns.",
      "Replace manual spreadsheets with automated, evidence-based answers."
    ],
    capabilities: [
      { title: "Understand Patterns", body: "Analyze variation, distributions, and correlations using the data your teams already collect." },
      { title: "Spot Unusual Results", body: "Present statistical findings in clear, everyday language so engineers and managers can act immediately." },
      { title: "Find Possible Causes", body: "Compare measurements and conditions to pinpoint the factors most likely to cause quality issues." },
    ],
    outcomes: [
      { metric: "10x Faster", label: "10x Faster Analysis", context: "Spend less time manually reviewing large amounts of data." },
      { metric: "95%", label: "95% User Adoption", context: "Operations and business teams adopt the tool because findings are presented in plain language." },
      { metric: "1000+", label: "1000+ Check runs", context: "Over a thousand automated checks and capability runs performed monthly." }
    ],
    process: [
      { title: "Collect — Week 1-2", body: "Gather your everyday data from historians, databases, or spreadsheet files." },
      { title: "Understand — Week 3-5", body: "Let the AI analyze the data to determine what normal behavior looks like." },
      { title: "Compare — Week 6-10", body: "Compare active results against historical runs to identify shifts." },
      { title: "Find Changes — Week 11+", body: "Spot deviations and trends before they turn into actual quality issues." }
    ],
    contentSections: [
      {
        eyebrow: "Capabilities",
        title: "Statistical AI Tools That Help You Understand What Is Happening",
        description: "Everything you need to analyze variation, calculate capability, and monitor process trends without complex scripting.",
        items: [
          { title: "Understand Patterns", body: "Analyze variation, distributions, and correlations using the data your teams already collect." },
          { title: "Spot Unusual Results", body: "Present statistical findings in clear, everyday language so engineers and managers can act immediately." },
          { title: "Find Possible Causes", body: "Compare measurements and conditions to pinpoint the factors most likely to cause quality issues." }
        ],
      },
      {
        eyebrow: "Process Analytics",
        title: "From Complex Data to Clear Decisions",
        description: "Your data can contain thousands of numbers and patterns that are difficult to understand manually. Statistical AI helps find the important information and presents it in a way your team can understand and act on. (Data → Find Patterns → Spot Problems → Understand Changes → Take Action)",
        items: [
          { title: "What is changing?", body: "Identify trends and changes in your data over time." },
          { title: "What looks unusual?", body: "Find results that are different from normal behavior." },
          { title: "Is the process staying on track?", body: "Monitor whether results remain within expected and normal ranges." },
          { title: "Where are we losing performance?", body: "Understand where output, quality, or efficiency is dropping." },
          { title: "What could be causing the change?", body: "Use data to find relationships and possible reasons behind a problem." },
          { title: "What should we pay attention to?", body: "Highlight important findings so teams can focus on the areas that need action." }
        ],
      },
    ],
    techExpertise: [
      {
        label: "Statistical Engine",
        cards: [
          { role: "Hypothesis Testing", level: "Core", category: "Basic comparison tools", tech: ["t-Tests", "ANOVA", "Chi-Square"] },
          { role: "Regression Models", level: "Core", category: "Relationship fitting", tech: ["Linear", "Multiple", "Nonlinear"] },
          { role: "Process Control (SPC)", level: "Advanced", category: "Control charts & capability", tech: ["Xbar-R", "I-MR", "Cp / Cpk"] },
          { role: "Design of Experiments", level: "Advanced", category: "Optimization runs", tech: ["Factorial", "Response Surface"] },
        ],
      },
      {
        label: "Integration & Historians",
        cards: [
          { role: "Historian Pull", level: "Data", category: "Industrial databases", tech: ["OPC UA", "SQL Databases", "API Connectors"] },
          { role: "Spreadsheet Import", level: "Data", category: "File-based uploads", tech: ["Excel (.xlsx)", "CSV files", "Drag & drop"] },
          { role: "Real-time Monitors", level: "Live", category: "Live process tracking", tech: ["Dynamic limit plots", "Alarm triggers", "Webhooks"] },
          { role: "Lab Sync (LIMS)", level: "API", category: "Off-line quality matching", tech: ["Lab records", "Inspection sync", "LIMS APIs"] },
        ],
      },
      {
        label: "Governance & Auditing",
        cards: [
          { role: "Limit Lock-in", level: "Secure", category: "Controlled limit changes", tech: ["Version history", "Approvals", "Audit logs"] },
          { role: "Report Compile", level: "Audits", category: "Regulatory exports", tech: ["PDF reports", "Compliance certificates", "CSV exports"] },
          { role: "Multi-site Alignment", level: "Scalable", category: "Standard limit templates", tech: ["Shared models", "Site offsets", "Reporting"] },
          { role: "Data Quality Check", level: "Reliable", category: "Trusted input records", tech: ["Filter outliers", "Clean dropouts", "Verify bounds"] },
        ],
      },
    ],
    faqs: [
      { q: "What is Statistical AI?", a: "Statistical AI combines statistical analysis with artificial intelligence to find patterns, identify unusual changes, and help people make better decisions from their data." },
      { q: "How is Statistical AI different from normal analytics?", a: "Traditional analytics often tells you what happened. Statistical AI goes further by helping identify unusual behavior, important patterns, and changes that may need attention." },
      { q: "Do I need to understand statistics to use it?", a: "No. The complex analysis happens behind the scenes. Results are presented in a clear, plain-language way so business and operations teams can understand them." },
      { q: "What kind of data can Statistical AI analyze?", a: "It can analyze any structured measurements from your operations, including temperatures, speeds, dimensions, times, or test measurements." },
      { q: "Can it detect unusual behavior?", a: "Yes. It learns normal behavior and highlights results that are noticeably different from that normal range." },
      { q: "Can it help identify why something changed?", a: "Yes. It highlights possible relationships between variables to help your team find what may be causing the shift." },
      { q: "How does Statistical AI help businesses?", a: "It provides faster analysis, earlier detection of problems, a better understanding of performance, and more consistent decisions based on evidence." }
    ],
    techHeading: "Statistical Intelligence for Real-World Decisions",
    techSubheading: "From monitoring performance to finding unusual changes, Statistical AI helps your team understand what the data is telling you and decide what to do next.",
    ctaTitle: "Ready to Get More From Your Data?",
    ctaDescription: "See how Statistical AI can help your team understand complex data, spot important changes, and make better decisions.",
    ctaPrimaryLabel: "Explore Statistical AI",
    ctaSecondaryLabel: "Talk to an Expert",
    extraSection: StatisticalAiExtraSection,
  },
  {
    slug: "in-process-quality-spc",
    eyebrow: "Quality Intelligence",
    title: "In-process quality and SPC that catches drift early.",
    lede: "Digitise quality checks and statistical process control so deviations are visible while there is still time to correct the process.",
    Icon: SlidersHorizontal,
    capabilities: [{ title: "Digital control plans", body: "Guide operators through the right checks, frequencies, and acceptance criteria for every process." }, { title: "Live control charts", body: "Track variation and control-limit breaches as data is captured on the shop floor." }, { title: "Escalation workflows", body: "Route out-of-control signals to the right owners with context and a record of response." }],
    outcomes: [{ metric: "Less", label: "Process variation", context: "Identify unstable conditions earlier in the production cycle." }, { metric: "Faster", label: "Corrective action", context: "Replace delayed spreadsheet reviews with visible, timely signals." }, { metric: "Stronger", label: "Quality evidence", context: "Maintain a traceable record of in-process control." }],
    extraSection: InProcessQualitySpcExtraSection,
    faqs: [
      {
        q: "Which control chart types are supported?",
        a: "We support standard control charts including X-bar R (Average and Range), X-bar S (Average and Standard Deviation), I-MR (Individual and Moving Range), and p/np/c/u attribute charts. All charts dynamically highlight points violating Nelson's rules or custom process control zones."
      },
      {
        q: "How fast do we get alerted when a process drifts?",
        a: "Alerts are sent in near real-time. The moment an operator logs a measurement or a sensor feeds a data point that triggers an out-of-control rule, the system routes notifications via SMS, email, or Andon beacons to the assigned quality engineer."
      },
      {
        q: "Can this replace our current Excel-based SPC sheets?",
        a: "Yes. We replace manual data entry and offline Excel macros with real-time digital entry, automated Cp/Cpk calculation, and secure database storage. This eliminates formula errors and ensures control limits cannot be manually bypassed or altered without authorization."
      },
      {
        q: "Is this compliant with IATF/FDA/21 CFR Part 11 audit requirements?",
        a: "Yes. Pure Technology supports full electronic record compliance including automated, unalterable audit trails, electronic signatures for OCAP sign-offs, role-based access control, and secure version history for limit changes, aligning with 21 CFR Part 11, IATF 16949, and ISO 13485 requirements."
      },
      {
        q: "Can operators use this without statistics training?",
        a: "Absolutely. The complexity of Nelson's rules, Cp/Cpk math, and control limit calculation runs in the background. Operators simply see clean, color-coded inputs (Green for in-control, Red for out-of-control) and clear, step-by-step instructions for Out-of-Control Action Plans (OCAP)."
      }
    ]
  },
  {
    slug: "cpv-apqr",
    eyebrow: "Compliance Intelligence",
    title: "Continuous process verification and APQR, made manageable.",
    lede: "Bring process-verification data, product quality reviews, exceptions, and recurring trends into one governed workflow.",
    Icon: ClipboardCheck,
    capabilities: [
      { title: "Verification plans", body: "Define critical process and quality parameters with consistent monitoring rules." },
      { title: "Review-ready records", body: "Organise product and process evidence for periodic quality review without chasing files." },
      { title: "Trend management", body: "Surface recurring deviations, investigations, and actions across batches and products." }
    ],
    outcomes: [
      { metric: "Ready", label: "For review", context: "Keep the evidence needed for periodic quality conversations in one place." },
      { metric: "Better", label: "Traceability", context: "Connect observations, exceptions, and follow-up actions." },
      { metric: "Lower", label: "Manual effort", context: "Reduce time spent assembling recurring process-quality reports." }
    ],
    extraSection: CpvApqrExtraSection,
    whoFor: [
      "QA and regulatory affairs teams preparing for inspections and audits.",
      "Process engineers responsible for CPV monitoring and statistical validation.",
      "Plant quality managers compiling APQRs for batch release reviews.",
      "Pharma manufacturers looking to transition from manual, months-long annual review sprints to a continuously-updated record."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Each implementation is configured around your process, decision points, and evidence requirements — not a generic software rollout.",
        items: [
          { title: "Verification plans", body: "Define critical process and quality parameters with consistent monitoring rules." },
          { title: "Review-ready records", body: "Organise product and process evidence for periodic quality review without chasing files." },
          { title: "Trend management", body: "Surface recurring deviations, investigations, and actions across batches and products." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "The solution is designed to fit the people, systems, and controls already operating in your plant.",
        items: [
          { title: "CPP/CQA excursion alerts", body: "Automatically route critical parameter excursions to the responsible process engineer for immediate assessment." },
          { title: "Batch record compilation", body: "Seamlessly compile batch run logs, deviations, and laboratory results into the draft APQR record." },
          { title: "E-signature closure", body: "Execute secure 21 CFR Part 11 compliant digital signatures to lock and close completed reviews." },
          { title: "Frontline quality context", body: "Give operators line-side visibility into control limits and parameters as they run." },
          { title: "Validation monitoring", body: "Compare batch capability metrics (Cpk, Ppk) across lines to confirm validation status." },
          { title: "Multi-site quality governance", body: "Track compliance status and report completeness across all manufacturing sites." }
        ]
      }
    ],
    process: [
      { title: "Discover (Weeks 1–2)", body: "Map critical parameters (CPP/CQA) and identify the current quality review and APQR cadence." },
      { title: "Configure (Weeks 3–5)", body: "Set up CPV plans, validation rules, and APQR document templates tailored to your product portfolio." },
      { title: "Pilot (Weeks 6–10)", body: "Run live continuous process verification monitoring and draft the first APQR on a single product line." },
      { title: "Scale (Weeks 11+)", body: "Extend CPV monitoring to the full product portfolio and coordinate a multi-site rollout." }
    ],
    techExpertise: [
      {
        label: "Data Ingestion",
        cards: [
          { role: "Batch Record Integration", level: "Core", category: "Production logs", tech: ["OPC UA", "MES Sync", "CSV Ingestion"] },
          { role: "LIMS Connectivity", level: "Advanced", category: "Laboratory results", tech: ["SQL DB", "REST APIs", "LIMS Exports"] },
          { role: "CPP/CQA Parameter Mapping", level: "Core", category: "Parameter binding", tech: ["Limit Rules", "Variable Binding"] }
        ]
      },
      {
        label: "Compliance Infrastructure",
        cards: [
          { role: "21 CFR Part 11 Framework", level: "Secure", category: "Regulatory alignment", tech: ["Audit Trail", "Security Keys"] },
          { role: "E-Signature Controls", level: "Verified", category: "Authorized sign-off", tech: ["Active Directory", "E-Signatures"] },
          { role: "Audit Trail Logging", level: "Traceable", category: "System history", tech: ["Permanent Log", "Change Reason Tracking"] }
        ]
      },
      {
        label: "Secure Archiving",
        cards: [
          { role: "Secure Digital Archive", level: "Safe", category: "Document records", tech: ["Encrypted Storage", "Read-Only PDF"] },
          { role: "Database Infrastructure", level: "Standard", category: "Long-term data", tech: ["Structured DB", "Backup Routines"] }
        ]
      }
    ],
    faqs: [
      {
        q: "How is this compliant with 21 CFR Part 11?",
        a: "The system enforces strict electronic signatures, permanent tamper-evident audit trails with change-reason logs, secure user access controls mapped to Active Directory, and structured electronic records that ensure full ALCOA+ data integrity compliance."
      },
      {
        q: "Can this generate our actual APQR document, or just the underlying data?",
        a: "It does both. The platform continually gathers and structures your process quality data, and provides pre-built templates to compile the final APQR report drafts—including batch lists, deviations, Cpk trends, and e-signature logs—ready for QA review."
      },
      {
        q: "How does this connect to our LIMS and batch record systems?",
        a: "We connect to LIMS databases and historian databases (like OPC UA or SCADA) via secure APIs or structured data exports. This automates the retrieval of Critical Quality Attributes (CQAs) and Critical Process Parameters (CPPs) without manual copy-pasting."
      },
      {
        q: "What happens during an inspection — can auditors get direct read access?",
        a: "Yes. You can configure read-only guest roles specifically for auditors during inspections. They can directly search change records, view time-stamped audit trails, check parameter capability charts, and inspect approved validation history."
      },
      {
        q: "How long does it take to get our first product's CPV plan live?",
        a: "A typical pilot configuration takes 6–10 weeks. This includes mapping your CPPs and CQAs, establishing system integrations, configuring validation limits, and running a test batch cycle to verify compliance checks."
      }
    ],
    outcomesTitle: "Clear outcomes for periodic quality review.",
  },
  {
    slug: "gauge-msa",
    eyebrow: "Measurement Systems",
    title: "Gauge management and MSA you can trust on the floor.",
    lede: "Maintain calibration visibility and evaluate measurement-system reliability so quality decisions are built on dependable data.",
    Icon: Gauge,
    capabilities: [
      { title: "Gauge register", body: "Keep instruments, owners, locations, and calibration status in a single digital register." },
      { title: "Calibration scheduling", body: "Plan due dates, reminders, certificates, and exceptions before an instrument becomes a risk." },
      { title: "MSA studies", body: "Support repeatability, reproducibility, bias, and stability studies with structured data capture." }
    ],
    outcomes: [
      { metric: "Trusted", label: "Measurements", context: "Support confidence that inspection decisions use fit-for-purpose gauges." },
      { metric: "Visible", label: "Calibration status", context: "Know what is due, overdue, quarantined, or ready to use." },
      { metric: "Consistent", label: "MSA practice", context: "Standardise measurement studies across teams and locations." }
    ],
    extraSection: GaugeMsaExtraSection,
    whoFor: [
      "Metrology and calibration technicians responsible for keeping physical gauges in tolerance.",
      "Quality engineers who design and execute Gauge R&R studies to assess measurement system error.",
      "Plant quality managers needing audit-ready calibration logs and traceable certification records.",
      "Manufacturers currently tracking calibration status and gauge attributes on legacy spreadsheets instead of a governed register."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Each implementation is configured around your process, decision points, and evidence requirements — not a generic software rollout.",
        items: [
          { title: "Gauge register", body: "Keep instruments, owners, locations, and calibration status in a single digital register." },
          { title: "Calibration scheduling", body: "Plan due dates, reminders, certificates, and exceptions before an instrument becomes a risk." },
          { title: "MSA studies", body: "Support repeatability, reproducibility, bias, and stability studies with structured data capture." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "The solution is designed to fit the people, systems, and controls already operating in your plant.",
        items: [
          { title: "Calibration logging", body: "Allow technicians to quickly log physical calibration check values and reference standard IDs at line-side terminals." },
          { title: "Out-of-tolerance quarantine", body: "Automatically quarantine failing gauges in the digital register and escalate alerts to quality leads." },
          { title: "GR&R study alerts", body: "Route calculated repeatability and reproducibility (Gage R&R) results directly to quality managers for review." },
          { title: "Technician work lists", body: "Present metrology technicians with clear daily lists of upcoming calibration and verification checks." },
          { title: "Instrument status tracking", body: "Display dynamic calibration dashboards to operators before using any gauge on production runs." },
          { title: "Multi-site gauge compliance", body: "Provide plant leadership with an audit-ready overview of metrology compliance across all locations." }
        ]
      }
    ],
    process: [
      { title: "Discover (Weeks 1–2)", body: "Inventory existing physical gauges, standard blocks, and map the current manual calibration and MSA practices." },
      { title: "Configure (Weeks 3–5)", body: "Set up the digital gauge register, configure calibration intervals, and establish master reference standards." },
      { title: "Pilot (Weeks 6–8)", body: "Run Gauge R&R studies and execute daily calibration tracking on a single target department or production cell." },
      { title: "Scale (Weeks 9+)", body: "Extend the digital metrology register and MSA study program plant-wide or across multiple manufacturing sites." }
    ],
    techExpertise: [
      {
        label: "Metrology Data",
        cards: [
          { role: "Gauge Asset Registry", level: "Core", category: "Instrument foundation", tech: ["Unique ID Mapping", "Status Tracking"] },
          { role: "NIST Reference Sync", level: "Core", category: "Standard traceability", tech: ["NIST Certificates", "Master Reference Logs"] },
          { role: "Study Calculators", level: "Advanced", category: "MSA execution", tech: ["Gage R&R Crossed", "Nested Studies"] }
        ]
      },
      {
        label: "System Integration",
        cards: [
          { role: "LIMS Synchronization", level: "API", category: "Quality database", tech: ["SQL Connector", "REST API Sync"] },
          { role: "Operator Stations", level: "Edge", category: "Line-side terminals", tech: ["Barcode Scanning", "Offline Capture"] }
        ]
      },
      {
        label: "Compliance Controls",
        cards: [
          { role: "Audit Trail Logging", level: "Traceable", category: "History tracking", tech: ["Permanent Log", "E-Signatures"] },
          { role: "Automated Quarantine", level: "Control", category: "Error containment", tech: ["Use Restrictions", "Supervisor Override"] }
        ]
      }
    ],
    faqs: [
      {
        q: "What types of GR&R studies are supported (crossed, nested, Type 1)?",
        a: "The platform supports standard Measurement Systems Analysis (MSA) studies including Gage R&R Crossed (for non-destructive tests), Gage R&R Nested (for destructive tests), and Type 1 Gauge Study to evaluate bias and repeatability."
      },
      {
        q: "Can this generate AIAG-format MSA reports?",
        a: "Yes. The MSA module automatically calculates repeatability, reproducibility, parts-to-parts variance, and number of distinct categories (ndc), formatting results to align with AIAG Core Tools guidelines."
      },
      {
        q: "How does gauge quarantine work when a calibration fails?",
        a: "When a calibration value falls outside the predefined tolerance limits, the gauge status is instantly set to 'Quarantined'. The system triggers an alert, locks the gauge from active use records, and requires a QA supervisor override after repair."
      },
      {
        q: "Can we track gauges across multiple plants from one dashboard?",
        a: "Yes. You can manage multiple plant registers under one parent workspace, allowing you to track overall calibration compliance, upcoming checks, and MSA status globally while keeping operations localized."
      },
      {
        q: "Is this compliant with IATF 16949 and ISO 17025 requirements?",
        a: "Yes. The register structures master calibration reference trails (NIST traceability), manages operator MSA study histories, and logs permanent, secure change files to fulfill metrology standards under IATF 16949 and ISO/IEC 17025."
      }
    ],
    outcomesTitle: "Metrology outcomes that matter.",
  },
  {
    slug: "inspection-management",
    eyebrow: "Inspection Management",
    title: "AI-Powered Inspection Management & Digital Compliance",
    lede: "Automate asset checks, enforce EHS standardisation, and generate audit-ready documentation 50% faster with mobile-first checklists.",
    Icon: PackageSearch,
    capabilities: [
      { title: "Smart Digital Checklists", body: "Build dynamic, structured checklists with Pass/Fail controls, numeric thresholds, and mandatory photo evidence." },
      { title: "EHS Safety Compliance", body: "Standardise incident reporting, track EHS regulatory compliance, and route alerts based on safety thresholds." },
      { title: "Automated Reminders & SLA", body: "Schedule inspections around shift timings and send automated reminders to ensure 100% schedule adherence." },
      { title: "Root Cause Analysis (RCA)", body: "Convert inspection failures into investigations using built-in DMAIC templates and correction logs." },
    ],
    outcomes: [
      { metric: "35% Less", label: "Incident Rate", context: "Catch safety and compliance anomalies before they manifest on the shop floor." },
      { metric: "50% Faster", label: "Documentation", context: "Generate audit-ready records instantly instead of spending hours compiling files." },
      { metric: "100%", label: "SLA Adherence", context: "Trigger real-time notifications for missed or failed inspections." },
    ],
    extraSection: InspectionManagementExtraSection,
  },
  {
    slug: "continuous-improvement",
    eyebrow: "Continuous Improvement",
    title: "Continuous improvement that connects ideas to impact.",
    lede: "Manage improvement opportunities, problem solving, actions, and verified results in a shared operational pipeline.",
    Icon: Lightbulb,
    heroStats: [
      { value: "100%", label: "Pipeline visibility" },
      { value: "<10m", label: "Idea logging time" },
      { value: "Real-time", label: "Benefit tracking" },
      { value: "Automatic", label: "Task escalations" },
    ],
    whoForSub: "Who this is for — (Kaizen is the standard term for a small, tracked shop-floor improvement: someone spots a problem, suggests a fix, it gets approved, and someone checks later that it worked.)",
    whoFor: [
      "Continuous improvement leaders responsible for managing a site or division-wide Kaizen portfolio.",
      "Quality and process engineers running structured DMAIC, Kaizen, or 8D problem-solving investigations.",
      "Plant and operations managers who need verified operational and financial savings instead of estimated benefits.",
      "Operations teams currently tracking improvement ideas and task assignments on spreadsheets or physical whiteboards."
    ],
    capabilities: [
      { title: "Improvement pipeline", body: "Capture ideas, kaizens, and improvement projects with owners, priorities, and status." },
      { title: "Structured problem solving", body: "Support root-cause analysis, corrective actions, and approvals in one repeatable workflow." },
      { title: "Benefit tracking", body: "Link completed actions to the quality, cost, delivery, safety, or throughput metric they improve." }
    ],
    outcomes: [
      { metric: "Visible", label: "Improvement portfolio", context: "See what is being worked on, who owns it, and what is blocked." },
      { metric: "Accountable", label: "Actions", context: "Keep follow-ups from slipping between shifts and functional teams." },
      { metric: "Measured", label: "Benefits", context: "Track whether an improvement delivered the intended operational result." }
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Each implementation is configured around your process, decision points, and evidence requirements — not a generic software rollout.",
        items: [
          { title: "Improvement pipeline", body: "Capture ideas, kaizens, and improvement projects with owners, priorities, and status." },
          { title: "Structured problem solving", body: "Support root-cause analysis, corrective actions, and approvals in one repeatable workflow." },
          { title: "Benefit tracking", body: "Link completed actions to the quality, cost, delivery, safety, or throughput metric they improve." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "The solution is designed to fit the people, systems, and controls already operating in your plant.",
        items: [
          { title: "Idea submission logging", body: "Allow operators to submit ideas at line-side terminals, instantly routing suggestions to area supervisors for scoring." },
          { title: "Kaizen project promotion", body: "Promote approved ideas into active Kaizen projects, assigning owners and setting target benefit categories." },
          { title: "Action delay escalation", body: "Monitor project milestones and automatically escalate stalled corrective tasks to the plant manager." },
          { title: "RCA investigation logs", body: "Run 5-Whys or Fishbone analysis directly inside project cards, documenting structural process corrections." },
          { title: "Financial savings audit", body: "Verify project benefit metrics against actual operational data to lock in audited cost reductions." },
          { title: "Multi-site portfolio view", body: "Provide continuous improvement leaders with a real-time view of project progress and ROI." }
        ]
      }
    ],
    process: [
      { title: "Discover (Weeks 1–2)", body: "Audit existing idea-capture practices, identify current tracking formats, and map approval gates." },
      { title: "Configure (Weeks 3–5)", body: "Set up the digital Kaizen board, define project scoring rules, and customize DMAIC/8D methodology templates." },
      { title: "Pilot (Weeks 6–10)", body: "Run the full digital pipeline on a single production line's active improvement backlog and verify savings." },
      { title: "Scale (Weeks 11+)", body: "Extend the digital CI portfolio register and task tracking system plant-wide or across multiple plants." }
    ],
    techExpertise: [
      {
        label: "CI Project Data",
        cards: [
          { role: "Kaizen Register", level: "Core", category: "Project database", tech: ["Idea Fields", "Priority Scoring"] },
          { role: "Methodology Checklists", level: "Core", category: "Standard gates", tech: ["DMAIC Forms", "8D Gate Checklists"] },
          { role: "Investigation Boards", level: "Advanced", category: "Root-cause UI", tech: ["5-Whys Mapping", "Fishbone Visuals"] }
        ]
      },
      {
        label: "Workflow Engine",
        cards: [
          { role: "Task Router", level: "Engine", category: "Work assignments", tech: ["Auto-routing", "Due-date Alerts"] },
          { role: "CMMS Sync", level: "API", category: "Work order link", tech: ["REST API Integration", "SQL Database Sync"] }
        ]
      },
      {
        label: "Financial Sync",
        cards: [
          { role: "Savings Validator", level: "Audit", category: "Benefits audit", tech: ["Financial Database Sync", "ROI Verification"] },
          { role: "Executive View", level: "Dashboard", category: "Corporate portfolio", tech: ["Multi-site Rollups", "Performance Indexing"] }
        ]
      }
    ],
    faqs: [
      {
        q: "Which methodologies are supported (DMAIC, Kaizen, 8D, CAPA)?",
        a: "The platform supports multiple standard methodologies, including simple Kaizen suggestion loops, structured 5-Whys, full DMAIC projects for engineering teams, 8D templates for customer-complaint resolutions, and CAPA follow-up logs."
      },
      {
        q: "How are savings verified against actual financial data?",
        a: "Users define operational targets (e.g. reduced cycle times, raw material weight savings) and link them to unit cost values. The platform integrates with LIMS and ERP data to query actual performance improvements and lock in audited savings figures."
      },
      {
        q: "Can operators submit ideas from the shop floor without a login?",
        a: "Yes. You can set up shared kiosk terminals or tablet stations on the shop floor where operators scan a station QR code or badge ID to quickly log a Kaizen suggestion without requiring a personal software user license."
      },
      {
        q: "How does this connect to our existing maintenance or quality systems?",
        a: "When a continuous improvement action is approved (for example, modifying a machine guard or adjusting tool settings), the system can automatically create corresponding work orders in your CMMS or change requests in your Quality management system via secure API hooks."
      },
      {
        q: "Can leadership see a real-time portfolio view across all projects?",
        a: "Yes. The enterprise dashboard aggregates project status, milestone timelines, overdue tasks, and total verified financial ROI across all active plants and departments in a unified portfolio view."
      }
    ],
    extraSection: ContinuousImprovementExtraSection,
  },
  {
    slug: "maintenance-management",
    eyebrow: "Maintenance Management",
    title: "Maintenance management that moves teams from reactive to prepared.",
    lede: "Plan preventive work, manage work orders, record breakdowns, and connect asset history to reliability decisions.",
    Icon: Wrench,

    whoFor: [
      "Maintenance managers focused on shifting their operations from reactive breakdown repairs to planned, preventive maintenance.",
      "Field technicians who need immediate mobile access to work orders, safety checklists, and equipment manuals at the machine side.",
      "Plant and operations managers who need to track MTBF, MTTR, and preventive maintenance compliance indices in real time.",
      "Manufacturing plants currently running their maintenance dispatching off paper log sheets or shared spreadsheets."
    ],
    capabilities: [{ title: "Work order management", body: "Create, assign, prioritise, and close maintenance work with the right asset and fault context." }, { title: "Preventive maintenance", body: "Schedule recurring tasks, inspections, and reminders around equipment criticality." }, { title: "Reliability analytics", body: "Review downtime, recurring faults, MTBF, and MTTR trends to focus improvement work." }],
    outcomes: [{ metric: "More", label: "Planned work", context: "Give teams a dependable rhythm for preventive and condition-based maintenance." }, { metric: "Less", label: "Repeat downtime", context: "Use asset history and fault patterns to address recurring issues." }, { metric: "Clearer", label: "Asset accountability", context: "Keep ownership, work, and service records connected to each asset." }],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Each implementation is configured around your process, decision points, and evidence requirements — not a generic software rollout.",
        items: [
          { title: "Work order management", body: "Create, assign, prioritize, and close maintenance tasks with full asset and fault history." },
          { title: "Preventive maintenance", body: "Schedule recurring tasks, inspections, and checklist audits around equipment run hours or elapsed time." },
          { title: "Reliability analytics", body: "Track equipment downtime, recurring failure reasons, and maintenance efficiency KPIs." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "The solution is designed to fit the people, systems, and controls already operating in your plant.",
        items: [
          { title: "Mobile repair logging", body: "Technicians scan equipment QR codes to open active checklists, log fault reasons, and attach photo evidence." },
          { title: "Automatic breakdown alerts", body: "Route instant notifications to on-duty technicians and shift supervisors when critical line assets fault out." },
          { title: "Breakdown escalations", body: "Escalate long-running downtime tickets automatically to the maintenance manager if repair milestones are missed." },
          { title: "Spare parts consumption", body: "Link parts usage directly to closing work orders, automatically updating store stock balances." },
          { title: "Reliability rollups", body: "Aggregate MTTR and MTBF metrics across assets, lines, and sites for plant managers to identify bad actors." },
          { title: "Maintenance budget sync", body: "Provide plant leadership with real-time dashboards detailing labor hours and spare parts spend versus budget." }
        ]
      }
    ],
    process: [
      { title: "Discover (Weeks 1–2)", body: "Inventory plant assets, map current maintenance practices, and identify critical machinery priorities." },
      { title: "Configure (Weeks 3–5)", body: "Build the digital asset hierarchy, import safety guidelines, and schedule preventive maintenance plans." },
      { title: "Pilot (Weeks 6–10)", body: "Run active work orders, spare parts checklists, and mobile repair logs on a single production line or asset class." },
      { title: "Scale (Weeks 11+)", body: "Extend the digital maintenance platform, scheduling engines, and cost tracking to the entire plant or multi-site fleet." }
    ],
    techExpertise: [
      {
        label: "Asset Data Model",
        cards: [
          { role: "Asset Hierarchy", level: "Core", category: "Data structure", tech: ["ISO 14224 Mapping", "Location Trees"] },
          { role: "Parts Inventory", level: "Core", category: "Warehouse database", tech: ["SKU Tracking", "Reorder Thresholds"] },
          { role: "Safety Documentation", level: "Advanced", category: "Risk controls", tech: ["LOTO Checklists", "Permit-to-work Logs"] }
        ]
      },
      {
        label: "Downtime Ingestion",
        cards: [
          { role: "PLC Edge Connectors", level: "IoT", category: "Sensor integration", tech: ["Modbus TCP/IP", "OPC UA Bridging"] },
          { role: "Trigger Engine", level: "IoT", category: "Alert rules", tech: ["Downtime Events", "Run-hour Aggregation"] }
        ]
      },
      {
        label: "Reliability Analytics",
        cards: [
          { role: "KPI Rollups", level: "BI", category: "Executive dashboards", tech: ["MTBF Calculation", "MTTR Performance Indexing"] },
          { role: "PM Compliance Tracker", level: "BI", category: "Schedules audit", tech: ["Schedule Adherence", "Backlog Heatmaps"] }
        ]
      }
    ],
    faqs: [
      {
        q: "Can this handle a multi-level asset hierarchy (plant/line/machine)?",
        a: "Yes. The platform supports a hierarchical asset registry down to component levels (e.g., Plant > Production Line > Machinery > Specific Gearbox/Motor), making it easy to roll up downtime or analyze reliability by any level."
      },
      {
        q: "Does it support predictive maintenance from sensor data, or only scheduled PM?",
        a: "It supports both. You can set up scheduled preventive tasks (e.g., weekly lubrication checks) and ingest real-time sensor metrics (such as vibration peaks or high temperature readings) through edge connectors to trigger immediate work orders."
      },
      {
        q: "Can technicians use it offline on the shop floor?",
        a: "Yes. The mobile app stores active checklists and asset files locally. Technicians can complete inspections and log faults offline in shielded plant areas; data will sync automatically once a network connection is restored."
      },
      {
        q: "How does spare parts inventory sync with work orders?",
        a: "When scheduling a PM task or planning a breakdown repair, users can pre-assign required parts. Upon closing the work order, the specified parts are automatically deducted from the warehouse inventory, updating SKU stock balances."
      },
      {
        q: "What maintenance KPIs are tracked automatically (MTBF, MTTR, PM compliance)?",
        a: "The dashboard computes Mean Time Between Failures (MTBF), Mean Time To Repair (MTTR), Overall Equipment Effectiveness (OEE) impacts, and preventive maintenance (PM) schedule adherence indices dynamically as tasks are closed."
      }
    ],
    extraSection: MaintenanceManagementExtraSection,
  },
  {
    slug: "doe-experiments-management",
    eyebrow: "Process Optimisation",
    title: "Design and manage experiments with industrial discipline.",
    lede: "Plan, execute, document, and analyse designed experiments so process learning becomes repeatable organisational knowledge.",
    Icon: TestTube2,
    capabilities: [
      { title: "Experiment planning", body: "Define factors, responses, constraints, trial plans, and owners before a production experiment starts." },
      { title: "Execution records", body: "Capture observations and results against the approved experimental conditions." },
      { title: "Knowledge library", body: "Retain experiment history, findings, and validated settings for future engineering work." }
    ],
    outcomes: [
      { metric: "Faster", label: "Learning cycles", context: "Bring structure to test-and-learn work on products and processes." },
      { metric: "Repeatable", label: "Experiments", context: "Preserve how trials were run rather than relying on individual memory." },
      { metric: "Stronger", label: "Process knowledge", context: "Turn results into controlled, usable guidance for the next team." }
    ],
    extraSection: DoeExperimentsManagementExtraSection,
    whoFor: [
      "Process and R&D Engineers designing structured experiments to optimize product quality.",
      "Quality Assurance Teams validating process windows and operating boundaries.",
      "Plant and Operations Managers who need permanent, documented trial records rather than tribal knowledge.",
      "Manufacturers transitioning from trial-and-error testing to structured, repeatable DOE methodologies."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Configure experimental inputs and responses, compile trial matrices, enforce safety thresholds, and store analysis records.",
        items: [
          { title: "Experiment planning", body: "Define factors, responses, constraints, trial plans, and owners before a production experiment starts." },
          { title: "Execution records", body: "Capture observations and results against the approved experimental conditions." },
          { title: "Knowledge library", body: "Retain experiment history, findings, and validated settings for future engineering work." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "Enforce safety boundaries, guide operators through active trials, and convert validated setups into standard settings.",
        items: [
          { title: "Log Trial Run", body: "Guide operators through active trial parameters and capture results directly at the workstation." },
          { title: "Safety Halts", body: "Automatically halt experiments and alert supervisors if process telemetry breaches safety thresholds." },
          { title: "ANOVA & Analytics", body: "Calculate main effects, interaction curves, and response surfaces directly from logged results." },
          { title: "Standard Settings", body: "Convert optimal, validated factor setpoints into standard operating procedures automatically." },
          { title: "Experiment Approvals", body: "Require manager reviews and safety signs before releasing experiment matrices to the line." },
          { title: "Knowledge Registry", body: "Archive all past trials, designs, and statistical outcomes in a central, searchable library." }
        ]
      }
    ],
    process: [
      { title: "1. Discover Scope (Weeks 1-2)", body: "Identify the target process, define experimental objectives, and list critical factors (inputs) and responses (outputs)." },
      { title: "2. Configure Safety (Weeks 3-4)", body: "Set up the DoE hub with factor limits, safety constraints, operator logging views, and trial matrix templates." },
      { title: "3. Launch Trial Pilot (Weeks 5-6)", body: "Execute a full, structured experiment cycle on a single production line, validate operator logging, and run initial analysis." },
      { title: "4. Scale Registry (Weeks 7-8)", body: "Roll out the structured experimentation workflow across remaining lines and plants to establish a central, searchable trial registry." }
    ],
    tech: ["DOE Design Matrix", "ANOVA & Regression Engines", "Response Surface Methods", "LIMS Integrations", "PLC Safety Constraints"],
    techExpertise: [
      {
        label: "Design & Analysis",
        cards: [
          { role: "Factor/Response Model", level: "Core", category: "DoE Hub configuration", tech: ["Factors", "Responses", "Constraints"] },
          { role: "Statistical Engine", level: "Advanced", category: "ANOVA & RSM calculation", tech: ["ANOVA", "RSM", "Regression"] },
          { role: "AI Experiment Designer", level: "Live", category: "Trial optimization generator", tech: ["Active Learning", "Matrices"] }
        ]
      },
      {
        label: "Data Ingestion",
        cards: [
          { role: "SCADA & PLC Ingest", level: "Edge", category: "Real-time parameter capture", tech: ["OPC UA", "MQTT", "Tag Mapping"] },
          { role: "LIMS Integration", level: "API", category: "Quality lab measurements sync", tech: ["REST APIs", "Lab Ingest"] },
          { role: "Operator Logging Screen", level: "Field", category: "Shopfloor trial inputs", tech: ["Mobile Forms", "Observations"] }
        ]
      },
      {
        label: "Governance",
        cards: [
          { role: "Pre-Trial Sign-off", level: "Secure", category: "Safe parameter approvals", tech: ["Workflows", "Signatures"] },
          { role: "Safety Thresholds", level: "Traceable", category: "Excursion halt overrides", tech: ["Limits", "Interlocks"] },
          { role: "Multi-Product History", level: "Scalable", category: "Searchable trial registry", tech: ["History", "Knowledge Base"] }
        ]
      }
    ],
    faqs: [
      { q: "Which experimental design types are supported (factorial, RSM, Taguchi)?", a: "We support Full and Fractional Factorial designs, Response Surface Methodologies (RSM like Box-Behnken and Central Composite), and Taguchi Orthogonal Arrays depending on your variable count and trial budget." },
      { q: "Can this calculate ANOVA and interaction effects automatically?", a: "Yes. Once trial run response measurements are logged, our statistical engine automatically performs Analysis of Variance (ANOVA), generates main effects/interaction plots, and calculates regression models." },
      { q: "How are safety limits enforced during trial runs?", a: "Safety boundaries and interlock conditions are defined in the experiment plan. If SCADA telemetry registers any parameter excursions past these limits during a trial, operators are alerted and runs are immediately flagged as halted." },
      { q: "Can we search past experiment history before designing a new trial?", a: "Yes. All completed and drafted experiments are archived in a central, searchable knowledge registry. You can search by factor keywords, equipment type, or product SKU to review past trial configurations." },
      { q: "Does the AI designer account for constraints between factors?", a: "Yes. You can define parameter constraint rules (e.g., 'Temperature + Pressure must not exceed X'). The AI experiment designer respects these constraints when generating trial matrices." }
    ]
  },
  {
    slug: "live-dashboards",
    eyebrow: "Operational Visibility",
    title: "Live dashboards for the decisions happening now.",
    lede: "Give shop-floor teams and leaders a shared view of production, quality, maintenance, and improvement indicators as they change.",
    Icon: BarChart3,
    capabilities: [{ title: "Role-based views", body: "Present the right operational measures for operators, supervisors, and plant leadership." }, { title: "Connected data", body: "Bring together machine, quality, maintenance, and manual workflow signals in one view." }, { title: "Actionable alerts", body: "Highlight exceptions and thresholds that call for a response, not just reporting." }],
    outcomes: [{ metric: "Shared", label: "Operational picture", context: "Align teams around current performance instead of separate reports." }, { metric: "Quicker", label: "Escalation", context: "Surface exceptions while a supervisor can still intervene." }, { metric: "Focused", label: "Daily management", context: "Keep the measures that matter visible in meetings and on the floor." }],
    extraSection: LiveDashboardsExtraSection,
  },
  {
    slug: "production-management",
    eyebrow: "Production Management",
    title: "Production management built around actual shop-floor performance.",
    lede: "Capture production activity, downtime, reasons, schedules, and output so daily execution is visible and improvable.",
    Icon: Settings,
    capabilities: [
      { title: "Production logging", body: "Record jobs, output, rejects, shifts, and operating conditions digitally." },
      { title: "Downtime tracking", body: "Capture duration, causes, ownership, and recurring patterns at the point of occurrence." },
      { title: "Plan versus actual", body: "Compare expected output and schedule against what happened, with context for variance." }
    ],
    outcomes: [
      { metric: "Better", label: "Schedule visibility", context: "See how actual output is tracking against the day’s plan." },
      { metric: "Clearer", label: "Downtime causes", context: "Replace vague downtime records with timely, structured reason capture." },
      { metric: "Stronger", label: "Daily control", context: "Give production teams the information to recover performance during the shift." }
    ],
    extraSection: ProductionManagementExtraSection,
    whoFor: [
      "Production Supervisors logging shift outputs and managing operator handovers.",
      "Plant and Operations Managers tracking live plan-versus-actual metrics across lines.",
      "Continuous Improvement Teams identifying recurring downtime bottlenecks and material issues.",
      "Manufacturers transitioning from paper-based shift logs and spreadsheets to real-time logging."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Configure job parameters, log shift runs, capture standardized reasons for stoppages, and view plan-vs-actual progress.",
        items: [
          { title: "Production logging", body: "Record jobs, output, rejects, shifts, and operating conditions digitally." },
          { title: "Downtime tracking", body: "Capture duration, causes, ownership, and recurring patterns at the point of occurrence." },
          { title: "Plan versus actual", body: "Compare expected output and schedule against what happened, with context for variance." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "Enforce crew accountability, automate shift reporting, and synchronize raw outputs directly with ERP systems.",
        items: [
          { title: "Log Shift Output", body: "Let operators input completed quantities, batches, and rejects straight from line screens." },
          { title: "Downtime Escalation", body: "Escalate machine stoppage logs automatically to supervisor channels when thresholds exceed 10 minutes." },
          { title: "ERP Sync Handoff", body: "Reconcile shift output summaries and post quantities to the enterprise ledger automatically." },
          { title: "Active Run-rates", body: "Track current cycle times and parts-per-minute indicators against engineering baselines." },
          { title: "Shift Handovers", body: "Formally transfer active jobs, supervisor logs, and pending items between shift leads." },
          { title: "Performance Dashboards", body: "View shift yield, target metrics, and downtime reasons on large layout screens." }
        ]
      }
    ],
    process: [
      { title: "1. Map Job Flows (Weeks 1-2)", body: "Audit current shift logs, job sheet layouts, and standardize downtime reason codes." },
      { title: "2. Deploy Logging Hub (Weeks 3-4)", body: "Configure logging screens, setup supervisor reviews, and connect central ERP interfaces." },
      { title: "3. Launch Line Pilot (Weeks 5-6)", body: "Start shift logging and downtime capture on one pilot line to build crew familiarity." },
      { title: "4. Scale Across Sites (Weeks 7-8)", body: "Roll out the digital production management system to all lines, establishing unified shift comparisons." }
    ],
    tech: ["Shift Logging Hub", "Downtime Reason Taxonomy", "ERP & MES Connectors", "Plan vs Actual Analytics", "Mobile Offline Sync"],
    techExpertise: [
      {
        label: "Production Capture",
        cards: [
          { role: "Shift/Job Data Model", level: "Core", category: "Digital runtime configuration", tech: ["Jobs", "Shifts", "Schedules"] },
          { role: "Downtime Taxonomy", level: "Core", category: "Standardized classification codes", tech: ["TPM Reason Codes", "Micro-stops"] },
          { role: "Live Run-rate Indicators", level: "Advanced", category: "Real-time velocity tracking", tech: ["Parts/Min", "Actual vs Rated"] }
        ]
      },
      {
        label: "System Integrations",
        cards: [
          { role: "ERP/MES Sync Layer", level: "API", category: "Production summary transfer", tech: ["ERP APIs", "MES Handoff", "XML/JSON"] },
          { role: "IoT PLC Telemetry", level: "Edge", category: "Automated run-signal extraction", tech: ["OPC UA", "Cycle Counting"] },
          { role: "Offline Capture Cache", level: "Field", category: "Floor logging without network", tech: ["Local Storage", "Sync Queue"] }
        ]
      },
      {
        label: "Governance",
        cards: [
          { role: "Crew Sign-off Workflow", level: "Secure", category: "Supervisor shift verification", tech: ["E-Signatures", "Handovers"] },
          { role: "Shift Handover Ledger", level: "Traceable", category: "Permanent crew transition records", tech: ["Log Entries", "Notes"] },
          { role: "Site Benchmark Registry", level: "Scalable", category: "Multi-line efficiency comparison", tech: ["Benchmarks", "Reports"] }
        ]
      }
    ],
    faqs: [
      { q: "How is downtime categorized and by whom?", a: "Downtime is logged by operators right at the machine. They select from a pre-configured list of standardized reason codes (e.g., tooling setup, raw material wait, mechanical jam) to ensure consistent data classification." },
      { q: "Can this replace our paper shift logs?", a: "Yes. Our digital logging cards replace paper checklists and spreadsheet logs, allowing operators to enter runs, rejects, and handovers directly into local tablets or workstations." },
      { q: "How does output data sync to our ERP?", a: "Once a shift supervisor signs off the shift report, the system automatically posts the completed quantities, job numbers, and scrap reasons to your ERP/MES systems via secure REST APIs." },
      { q: "Can operators log data offline on the floor?", a: "Yes. The logging screens cache entries locally on the device if the plant Wi-Fi drops, and automatically sync all logs to the server once connection is restored." }
    ]
  },
  {
    slug: "data-extractor",
    eyebrow: "Industrial Data",
    title: "Extract operational data from the files you already receive.",
    lede: "Turn structured and semi-structured data in spreadsheets, PDFs, CSVs, and forms into usable information for industrial workflows.",
    Icon: FileSearchIcon,
    capabilities: [
      { title: "Document extraction", body: "Identify needed values from common operational documents and place them in structured fields." },
      { title: "Template matching", body: "Apply repeatable templates and validation rules to recurring supplier and plant documents." },
      { title: "Workflow handoff", body: "Route validated data into dashboards, quality records, inventory workflows, or connected systems." }
    ],
    outcomes: [
      { metric: "Less", label: "Manual entry", context: "Reduce repetitive copy-and-paste work around operational documents." },
      { metric: "Faster", label: "Data availability", context: "Make useful information available to workflows sooner." },
      { metric: "More", label: "Consistent records", context: "Apply the same validation and structure each time a known document arrives." }
    ],
    extraSection: DataExtractorExtraSection,
    whoFor: [
      "Operations Teams manually re-keying data from supplier invoices and shift records.",
      "Quality Assurance Teams needing structured parameters from scanned paper or PDF records.",
      "Manufacturing Engineers copy-pasting values between spreadsheets, forms, and databases."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Configure parsing rules, define template coordinates, map structured fields, and validate numeric values automatically.",
        items: [
          { title: "Document extraction", body: "Identify needed values from common operational documents and place them in structured fields." },
          { title: "Template matching", body: "Apply repeatable templates and validation rules to recurring supplier and plant documents." },
          { title: "Workflow handoff", body: "Route validated data into dashboards, quality records, inventory workflows, or connected systems." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "Enforce boundary checks, route validation exceptions to human mapping, and post clean data arrays downstream.",
        items: [
          { title: "Document Intake", body: "Automatically ingest invoices, certificates, or logs from email attachments, SFTP, or S3 uploads." },
          { title: "Template Matcher", body: "Match incoming layouts against saved templates to locate parsing coordinates automatically." },
          { title: "Field Extraction", body: "Parse text, numbers, and tabular data using secure OCR coordinates and confidence scoring." },
          { title: "Data Validation", body: "Check extracted numbers against purchase orders and limit bounds automatically." },
          { title: "Quarantine Reviews", body: "Route template mismatches and limit exceptions to a visual mapping console for quick operator correction." },
          { title: "ERP & MES Sync", body: "Push approved, validated datasets directly into quality SPC databases or inventory registers." }
        ]
      }
    ],
    process: [
      { title: "1. Audit Layouts (Weeks 1-2)", body: "Collect supplier sheets, invoices, and standard logs to define target extraction fields." },
      { title: "2. Set Rules & Limits (Weeks 3-4)", body: "Configure template coordinates, coordinate offsets, and data validation limit rules." },
      { title: "3. Run Ingest Pilot (Weeks 5-6)", body: "Deploy email/folder intake adapters and run live files to calibrate OCR confidence thresholds." },
      { title: "4. Direct Sync Scale (Weeks 7-8)", body: "Connect the validated outputs directly to corporate ERP ledgers and SPC databases." }
    ],
    tech: ["OCR Parsing Engine", "Template Field Mapper", "REST API Push", "XML/JSON Outputs", "Quarantine Review Console"],
    techExpertise: [
      {
        label: "Extraction Core",
        cards: [
          { role: "OCR & Ingestion Engine", level: "Core", category: "Multi-format text extraction", tech: ["PDF Parsing", "Image OCR", "Excel Readers"] },
          { role: "Template Coordinates", level: "Core", category: "Layout field mapping", tech: ["Bounding Boxes", "Anchor Mappers", "Grid Readers"] },
          { role: "Validation Checks", level: "Advanced", category: "Boundary and type validation", tech: ["Type Checks", "Limit Bounds", "Math Checks"] }
        ]
      },
      {
        label: "Enterprise Sync",
        cards: [
          { role: "API Push Integration", level: "API", category: "Real-time downstream REST post", tech: ["JSON Payloads", "Webhooks", "POST Calls"] },
          { role: "Database Ingestion", level: "API", category: "Direct database table loading", tech: ["SQL Loaders", "NoSQL Connectors"] },
          { role: "Watched Folder Poll", level: "Edge", category: "Monitor directory shifts", tech: ["SFTP Watchers", "S3 Connectors"] }
        ]
      },
      {
        label: "Governance",
        cards: [
          { role: "Manual Quarantine Review", level: "Secure", category: "Operator correction dashboard", tech: ["Visual Console", "Approval Actions"] },
          { role: "Audit Ingestion Trails", level: "Traceable", category: "OCR confidence metrics log", tech: ["Confidence Audits", "Raw vs Output"] },
          { role: "Adaptive Calibration", level: "Scalable", category: "Coordinates mapping calibration", tech: ["Coordinate Offsets", "Layout Updates"] }
        ]
      }
    ],
    faqs: [
      { q: "Which file formats are supported?", a: "We support PDFs (both digital and scanned), Excel spreadsheets (XLSX, XLS), CSVs, raw TXT files, and images (PNG, JPEG) of supplier invoices or material test certificates." },
      { q: "How accurate is extraction on scanned or handwritten documents?", a: "Digital files achieve 99.9% extraction accuracy. Scanned documents achieve 95%+ depending on print quality. Handwritten fields are routed to secondary confidence scoring and flagged for quick operator check if they drop below 80%." },
      { q: "What happens when a document doesn't match any template?", a: "The document is automatically quarantined in our Exception Review Console. An operator is notified to map the new layout using a visual drag-and-drop editor, which saves the format for all future runs." },
      { q: "Can this push data directly into our ERP or quality system?", a: "Yes. Once values pass validation checks, our integration engine formats the data into JSON, XML, or CSV and pushes it directly into ERPs (SAP, Netsuite) or SPC quality databases via secure APIs." }
    ]
  },
  {
    slug: "inventory-management",
    eyebrow: "Inventory Management",
    title: "Inventory control with real-time operational context.",
    lede: "Track receipts, issues, returns, transfers, and replenishment so stores and production teams can trust material availability.",
    Icon: Boxes,
    capabilities: [
      { title: "Movement tracking", body: "Record every receipt, issue, return, transfer, and adjustment against the right material and location." },
      { title: "Stock visibility", body: "Make current stock, reservations, and replenishment needs visible to authorised teams." },
      { title: "Material traceability", body: "Connect material movements with lots, jobs, inspection status, and downstream consumption." }
    ],
    outcomes: [
      { metric: "Clearer", label: "Stock position", context: "Give teams one view of what is on hand and where it is." },
      { metric: "Fewer", label: "Material surprises", context: "Make shortages and replenishment needs visible earlier." },
      { metric: "Traceable", label: "Movements", context: "Maintain an accountable history from receipt through issue or return." }
    ],
    extraSection: InventoryManagementExtraSection,
    whoFor: [
      "Warehouse Stores Teams tracking physical receipts, issues, transfers, and counts.",
      "Production Planners needing reliable material availability forecasts and BOM allocation rules.",
      "Manufacturers currently reconciling inventory from spreadsheets or manual physical counts."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Track inventory transactions at storage bins, configure safety limits, manage quality holds, and verify stock balances dynamically.",
        items: [
          { title: "Movement tracking", body: "Record every receipt, issue, return, transfer, and adjustment against the right material and location." },
          { title: "Stock visibility", body: "Make current stock, reservations, and replenishment needs visible to authorised teams." },
          { title: "Material traceability", body: "Connect material movements with lots, jobs, inspection status, and downstream consumption." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "Enforce real-time transactions, route count adjustments to supervisors, and connect with enterprise databases.",
        items: [
          { title: "Material Receipts", body: "Log incoming supplier packing lists against open PO numbers instantly." },
          { title: "Bin Coordinates Mapping", body: "Map materials to specific racks, zones, and bins with digital scan confirmations." },
          { title: "Production Allocation", body: "Reserve components dynamically for scheduled job runs, locking raw stock." },
          { title: "Offline Terminal Logs", body: "Cache count updates locally on devices when plant network drops." },
          { title: "Variance Adjustments", body: "Flag physical count discrepancies for immediate supervisor sign-offs." },
          { title: "Purchase Pushes", body: "Trigger corporate ERP procurement drafts automatically on low stock levels." }
        ]
      }
    ],
    process: [
      { title: "1. Map Bin Layouts (Weeks 1-2)", body: "Set up storage locations, zones, rack coordinates, and sync the material catalog." },
      { title: "2. Configure Safety Levels (Weeks 3-4)", body: "Define safety stock limits, reorder thresholds, and validation rule boundaries." },
      { title: "3. Deploy Stores Terminals (Weeks 5-6)", body: "Install handheld cycle count apps and line-side issue tablets for operators." },
      { title: "4. Scale Enterprise Sync (Weeks 7-8)", body: "Connect material transaction logs with scheduling, purchasing, and ERP systems." }
    ],
    tech: ["Material Master Data Model", "Location/Lot Tracking Engine", "ERP Ledger Sync", "Automated RFQ Triggers", "Barcode/Bin Handheld Mapper"],
    techExpertise: [
      {
        label: "Stores Management",
        cards: [
          { role: "Inventory Ledgers", level: "Core", category: "Ingestion and dispatch logs", tech: ["Receipts Log", "Workstation Issues", "Transfers"] },
          { role: "Location Mapping", level: "Core", category: "Bin coordinate mapping", tech: ["Rack Mapping", "Zone Layouts", "Handheld Scans"] },
          { role: "Lot Tracking Engine", level: "Advanced", category: "Raw lot traceability", tech: ["Lot Generation", "Batch Mappers", "FIFO Controls"] }
        ]
      },
      {
        label: "Integration Gateways",
        cards: [
          { role: "ERP Synchronization", level: "API", category: "Sync stock value ledgers", tech: ["SAP Sync", "PO Reconciliation", "Dynamics Mapping"] },
          { role: "Scheduling Sync", level: "API", category: "Reserve items for schedules", tech: ["BOM Reservation", "Job Sync", "Due-Date Locks"] },
          { role: "Procurement Dispatch", level: "API", category: "Purchase alert releases", tech: ["RFQ Dispatches", "PO Drafts", "Email Alerts"] }
        ]
      },
      {
        label: "Operational Auditing",
        cards: [
          { role: "Guided Cycle Counts", level: "Standard", category: "Continuous stores audit", tech: ["Count Audits", "Discrepancy Logs"] },
          { role: "Variance Corrections", level: "Secure", category: "Signed ledger adjustments", tech: ["Supervisor Sign-off", "Discrepancy Codes"] },
          { role: "Quality Quarantine Holds", level: "Traceable", category: "Out-of-spec lot locks", tech: ["LIMS Quarantine", "Reject Block", "Hold Tags"] }
        ]
      }
    ],
    faqs: [
      { q: "Can this track multiple warehouse locations?", a: "Yes. The platform supports multi-warehouse, multi-plant staging configurations. You can track stocks across main stores, line-side inventories, and transit locations." },
      { q: "How does batch or lot tracking work?", a: "Every receipt generates or maps a batch/lot ID. This lot number follows the material through reservations, staging, consumption, and finished goods, providing complete traceability." },
      { q: "Can operators log transactions offline?", a: "Yes. Our floor terminals cache issues, cycle counts, and transfers locally if the warehouse network drops, then upload the logs to the master ledger once reconnected." },
      { q: "How does this sync with our ERP for purchasing and replenishment?", a: "Transactions are posted in real-time to ERP ledgers (SAP, NetSuite) via secure REST API protocols. When stock drops below reorder points, the system alerts procurement or posts draft purchase requisitions directly." }
    ]
  },
  {
    slug: "mobile-ai-inspection",
    eyebrow: "Mobile AI Inspection",
    title: "Next-Gen Mobile AI Inspection & Guided Field Capture",
    lede: "A simple mobile app for your phone or tablet that makes inspections easier. Your team can check equipment, machines, products, or sites, while AI helps them capture correct readings, follow the right steps, find issues, and create clear reports instantly.",
    Icon: Smartphone,
    heroStats: [
      { value: "100% Mobile", label: "Phone & tablet app" },
      { value: "AI-Guided", label: "Step-by-step checks" },
      { value: "Offline-Ready", label: "Works without signal" },
      { value: "Instant Reports", label: "No manual data entry" },
    ],
    whoForTitle: "Built for teams that need reliable inspections.",
    whoForSub: "Whether you're checking a machine, product, vehicle, facility, or site, the app helps you complete the inspection correctly and record everything in one place.",
    whoFor: [
      "Inspectors and field workers who need a simple app to do regular checks, take photos, and record readings without carrying paper forms.",
      "Operations managers who want to make sure nothing is missed during inspections and that every check follows the exact same steps.",
      "Maintenance and quality teams who need to identify problems early and share results with the right people instantly.",
      "Business owners who want accurate, time-stamped inspection records for safety, audits, and compliance without the admin work."
    ],
    capabilities: [
      { title: "Guided Inspections", body: "Follow step-by-step instructions on your phone or tablet so important checks are never missed." },
      { title: "Easy Data Capture", body: "Capture photos, meter readings, notes, and other information directly on your mobile device." },
      { title: "AI Assistance", body: "Get smart support while inspecting. AI helps you read gauges, find visible problems, and suggest next steps." },
      { title: "Consistent Checks", body: "Enforce the same inspection process across different people, locations, and equipment." },
      { title: "Offline Ready", body: "Perform inspections in remote locations without a cellular connection. The app syncs automatically when you're back online." }
    ],
    outcomes: [
      { metric: "50% Faster", label: "Faster inspections", context: "Inspectors complete checklists, capture photos, and submit reports in half the time by replacing paper forms with a simple mobile app." },
      { metric: "100%", label: "Fewer missed checks", context: "Mandatory checklist steps and AI validation ensure every required check is completed and documented correctly." },
      { metric: "Instant", label: "Faster issue flagging", context: "Failed items automatically send alerts to maintenance teams, allowing you to address problems immediately rather than waiting for weekly reports." }
    ],
    extraSection: MobileAiExtraSection,
    contentSections: [
      {
        eyebrow: "Capabilities",
        title: "Everything You Need for a Better Inspection",
        description: "Our mobile app gives you all the tools to make field and equipment inspections simple, fast, and highly accurate.",
        items: [
          { title: "Guided Inspections", body: "Follow step-by-step instructions on your phone or tablet so important checks are never missed." },
          { title: "Easy Data Capture", body: "Capture photos, meter readings, notes, and other information directly on your mobile device." },
          { title: "AI Assistance", body: "Get smart support while inspecting. AI helps you read gauges, find visible problems, and suggest next steps." },
          { title: "Consistent Checks", body: "Enforce the same inspection process across different people, locations, and equipment." },
          { title: "Offline Ready", body: "Perform inspections in remote locations without a cellular connection. The app syncs automatically when you're back online." }
        ],
      },
      {
        eyebrow: "Connected Operations",
        title: "From the Inspection Site to the Decision Makers",
        description: "Inspection information doesn't stay on paper or inside one person's phone. Results are shared instantly with supervisors and decision-makers so problems can be reviewed and acted on.",
        items: [
          { title: "Guided Field Checklists", body: "Inspectors follow simple, step-by-step instructions on their mobile screens with photos showing exactly what to look for." },
          { title: "Immediate Action on Issues", body: "If something fails an inspection, the app can automatically notify the right person to look at it and fix it." },
          { title: "Instant Sharing", body: "Photos, readings, and notes go straight from the mobile device to a central dashboard, so supervisors see results without delay." },
          { title: "Offline Syncing", body: "Inspectors can do their checks in remote areas without cell signal. The app saves everything and uploads it when connection is restored." },
          { title: "Standardized Templates", body: "Ensure everyone across different sites, locations, and teams uses the exact same inspection checklists." },
          { title: "Simple Rollout", body: "Start with one simple inspection checklist, see how your team likes it, and expand to other areas at your own pace." },
        ],
      },
    ],
    techHeading: "Reliable AI Inspection for Real-World Work",
    techSubheading: "From a quick equipment check to a detailed site inspection, your team can use one simple mobile process to capture information, identify issues, and keep inspection records organized.",
    techExpertise: [
      {
        label: "Mobile App & AI",
        cards: [
          { role: "iOS & Android Support", level: "Mobile", category: "Runs on any device", tech: ["Smartphones", "Tablets", "Rugged devices"] },
          { role: "Smart AI Scanning", level: "AI Helper", category: "Reads details for you", tech: ["Meter reading", "Dial scanning", "Text reading"] },
          { role: "Location & Time Stamps", level: "Verification", category: "Confirms when and where", tech: ["GPS location", "Unalterable timestamps", "Inspector details"] },
          { role: "Offline Mode", level: "Offline", category: "Works without signal", tech: ["Local storage", "Automatic syncing", "No data loss"] },
        ],
      },
      {
        label: "Business Integration",
        cards: [
          { role: "Central System Sync", level: "Integration", category: "Connects with existing software", tech: ["SAP", "IBM Maximo", "Custom systems"] },
          { role: "Web Connection", level: "Web", category: "Shares data instantly", tech: ["REST APIs", "Instant notifications", "Webhooks"] },
          { role: "Device Management", level: "Admin", category: "Easy app updates", tech: ["Remote updates", "Secure access", "App deployment"] },
          { role: "Secure Cloud Storage", level: "Storage", category: "Saves photos and reports", tech: ["Cloud storage", "Photo compression", "History logs"] },
        ],
      },
      {
        label: "Quality & Governance",
        cards: [
          { role: "User Roles", level: "Access", category: "Correct access for everyone", tech: ["Inspector roles", "Supervisor approvals", "Custom permissions"] },
          { role: "Inspection History", level: "Audits", category: "Clear history records", tech: ["Unchangeable history", "Audit records", "PDF reports"] },
          { role: "Shared Checklists", level: "Consistency", category: "Standard templates", tech: ["Global checklists", "Uniform checks", "Site overrides"] },
          { role: "Data Verification", level: "Validation", category: "Ensures correct inputs", tech: ["Reading bounds", "Required photos", "Quality checks"] },
        ],
      },
    ],
    faqs: [
      {
        q: "What is Mobile AI Inspection?",
        a: "It is a mobile app for phones and tablets that helps you inspect equipment, machines, or locations. It uses AI (artificial intelligence) to help you capture correct information, guide you through the check steps, and find issues faster."
      },
      {
        q: "How does AI help during an inspection?",
        a: "AI guides you step-by-step so you don't miss anything. It can also automatically read values from meters or dials when you take a photo, and identify visual problems like cracks, leaks, or rust."
      },
      {
        q: "Can I perform inspections using a phone or tablet?",
        a: "Yes. The app works on standard iOS and Android smartphones and tablets. It is designed to be easy to use with one hand on the spot, even in dusty or wet environments."
      },
      {
        q: "What can I inspect?",
        a: "You can inspect almost anything: production machines, factory equipment, buildings, sites, safety equipment, vehicles, or finished products. The checklists can be fully customized for whatever you need to check."
      },
      {
        q: "Do I need technical knowledge to use it?",
        a: "No. The app is built for frontline workers. It guides you with clear questions and reference photos showing what a 'good' or 'bad' state looks like, so anyone can perform a consistent check."
      },
      {
        q: "Can I capture photos and readings?",
        a: "Yes. You can take photos, record notes, and type in readings. If you take a picture of a dial or meter, the AI reads the number automatically, saving you from typing it manually."
      },
      {
        q: "What happens when an issue is found?",
        a: "If a check fails or a reading is out of range, the app immediately flags it. The system can automatically notify a supervisor or send a repair ticket to your maintenance team to get it resolved."
      },
      {
        q: "Can inspection results be shared with managers?",
        a: "Yes. As soon as you submit the inspection, the results go straight to a central dashboard. Managers and supervisors can view reports, track issues, and review photos instantly."
      }
    ],
    processTitle: "The Same Reliable Process, Every Time",
    processDescription: "Give every inspector the same clear process, whether they are working at one location or across multiple sites.",
    process: [
      { title: "1. Map your checks", body: "We look at your current checklists (paper, spreadsheets, or forms) and identify the key things your team needs to inspect." },
      { title: "2. Set up the app", body: "We turn your checklists into simple digital steps on the mobile app, and configure the AI to help read meters or find visible problems." },
      { title: "3. Run a quick pilot", body: "We launch the app with a small group of users at one site to make sure the checklists are easy to follow and the app works perfectly." },
      { title: "4. Roll out to everyone", body: "We roll out the app to all your teams and locations, connecting the results directly to the people who need to see them." }
    ],
    ctaTitle: "Ready to Make Inspections Easier?",
    ctaDescription: "See how Mobile AI Inspection can help your team capture better information, follow the right process, and turn inspection findings into action.",
    ctaPrimaryLabel: "Talk to an Expert",
    ctaPrimaryTo: "/contact",
    ctaSecondaryLabel: "Explore all solutions",
    ctaSecondaryTo: "/solutions",
  },
  {
    slug: "oee-analytics",
    eyebrow: "OEE Analytics",
    title: "Real-time OEE Analytics & Industrial Efficiency Tracking",
    lede: "Measure Overall Equipment Effectiveness (OEE) dynamically across lines and shifts. Track Availability, Performance, and Quality to eliminate the Six Big Losses.",
    Icon: Activity,
    capabilities: [
      { title: "The Six Big Losses Monitor", body: "Deconstruct downtime into setup delays, minor stops, speed loss, startups, and production defects." },
      { title: "Availability, Performance, Quality (APQ)", body: "Calculate key OEE pillars live and compare plant-wide indicators to world-class 85% benchmarks." },
      { title: "Dynamic Shift & Line Dashboards", body: "Give supervisors and plant managers visual trends to spot performance decay before the shift ends." },
      { title: "CMMS Integrated Root-Cause", body: "Connect downtime events directly to maintenance logs to analyze repeat equipment failure roots." },
    ],
    outcomes: [
      { metric: "25% Up", label: "Productivity", context: "Drive immediate output gains by identifying and recovering hidden capacity bottlenecks." },
      { metric: "Reduced", label: "Minor Stops", context: "Highlight and address short, recurring speed losses that slip under the radar." },
      { metric: "Actionable", label: "Loss Analytics", context: "Pivot data by shift, product, batch, or machine to pinpoint performance issues." },
    ],
    extraSection: OeeAnalyticsExtraSection,
    whoFor: [
      "Plant and Operations Managers who need to optimize line utilization and shift output.",
      "Production Supervisors tracking live line performance and shift changes.",
      "Industrial and Process Engineers analyzing bottleneck root causes and changeover times.",
      "Continuous Improvement and TPM Leaders driving structured loss recovery programs."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Standardize OEE measurement across assets and sites while fitting the specific telemetry and workflows of each line.",
        items: [
          { title: "The Six Big Losses Monitor", body: "Deconstruct downtime into setup delays, minor stops, speed loss, startups, and production defects." },
          { title: "Availability, Performance, Quality (APQ)", body: "Calculate key OEE pillars live and compare plant-wide indicators to world-class 85% benchmarks." },
          { title: "Dynamic Shift & Line Dashboards", body: "Give supervisors and plant managers visual trends to spot performance decay before the shift ends." },
          { title: "CMMS Integrated Root-Cause", body: "Connect downtime events directly to maintenance logs to analyze repeat equipment failure roots." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "Designed for rapid operator adoption, automatic data capture, and transparent plant performance tracking.",
        items: [
          { title: "Operator Live Screen", body: "Let operators tag downtime events and log changeovers with one tap at the line side." },
          { title: "Supervisors Shift Review", body: "Review shift performance, confirm loss allocations, and log handovers before leaving." },
          { title: "Plant-Wide Dashboard", body: "Monitor real-time OEE, production targets, and line status at a glance from any screen." },
          { title: "SCADA & PLC Integration", body: "Ingest runtime signals automatically to capture micro-stops without operator input." },
          { title: "CMMS Integration", body: "Route repeat failure root causes directly to maintenance queues as actionable work orders." },
          { title: "Enterprise OEE Analytics", body: "Compare performance, loss trends, and OEE benchmarks across multiple lines and plants." }
        ]
      }
    ],
    process: [
      { title: "1. Discover Telemetry", body: "Audit existing telemetry, SCADA/PLC systems, manual logs, and define baseline OEE metrics." },
      { title: "2. Configure Pipelines", body: "Integrate automatic machine signals, build line dashboards, and map reason codes to the Six Big Losses." },
      { title: "3. Launch Focused Pilot", body: "Deploy on one production line or work cell to establish operator buy-in and validate data accuracy." },
      { title: "4. Scale Across Plants", body: "Roll out to remaining production lines and integrate OEE analytics into daily shift reviews and CI workflows." }
    ],
    tech: ["SCADA / PLCs", "OPC UA & MQTT", "Real-time Dashboards", "TPM Frameworks", "CI Root-Cause Tracking"],
    faqs: [
      { q: "How is OEE calculated?", a: "OEE is calculated by multiplying Availability (run time vs. planned production time), Performance (actual speed vs. ideal cycle time), and Quality (good parts vs. total parts produced)." },
      { q: "Can this integrate with our PLCs/SCADA for automatic data capture?", a: "Yes. We support standard industrial protocols like OPC UA, MQTT, and direct database queries to capture machine state signals automatically, reducing manual logging." },
      { q: "How do shift comparisons work?", a: "The system logs OEE metrics continuously and groups them by shift schedules. Supervisors can compare OEE, downtime events, and loss categories across shifts, crews, and products." },
      { q: "What counts as a Six Big Losses event?", a: "It includes equipment failures, setup and adjustments (Availability losses), idling and minor stops, reduced speed (Performance losses), and startup defects and production rejects (Quality losses)." }
    ]
  },
  {
    slug: "scraps-inventory",
    eyebrow: "Scraps Inventory",
    title: "Scraps Inventory Management & Industrial Waste Tracking",
    lede: "Enforce accountability around material yield loss. Track scrapped materials, manage disposal manifests, and ensure strict EHS compliance.",
    Icon: Boxes,
    capabilities: [
      { title: "Yield Loss & Scrap Tracking", body: "Log material waste, reject reasons, and disposition codes directly on the manufacturing floor." },
      { title: "Hazardous Waste Manifests", body: "Generate and store certified manifests for toxic, chemical, or electronic waste disposal streams." },
      { title: "Multi-level Approval Workflows", body: "Log and route disposal authorizations through EHS managers to verify regulatory alignment." },
      { title: "Disposal & Recovery Analytics", body: "Measure scrap recovery rates, recycling efficiency, and calculate direct landfill diversion metrics." }
    ],
    outcomes: [
      { metric: "35% Down", label: "Waste Costs", context: "Audit scrap patterns and disposal routes to uncover and eliminate material waste." },
      { metric: "100%", label: "EHS Audit Readiness", context: "Maintain permanent, traceable records for municipal, state, and global safety regulators." },
      { metric: "Optimised", label: "Material Yield", context: "Pinpoint process stages where raw materials are lost to optimize batch ratios." }
    ],
    extraSection: ScrapsInventoryExtraSection,
    whoFor: [
      "EHS Managers tracking waste manifests and regulatory EPA compliance logs.",
      "Plant Quality Teams identifying yield loss trends and reject causes.",
      "Operations Leaders currently reconciling scrap weights on paper logs."
    ],
    contentSections: [
      {
        eyebrow: "Solution coverage",
        title: "The operational building blocks your team needs.",
        description: "Log material waste, categorize reject reasons, route disposal manifests, and track salvage recovery rates.",
        items: [
          { title: "Yield Loss & Scrap Tracking", body: "Log material waste, reject reasons, and disposition codes directly on the manufacturing floor." },
          { title: "Hazardous Waste Manifests", body: "Generate and store certified manifests for toxic, chemical, or electronic waste disposal streams." },
          { title: "Multi-level Approval Workflows", body: "Log and route disposal authorizations through EHS managers to verify regulatory alignment." },
          { title: "Disposal & Recovery Analytics", body: "Measure scrap recovery rates, recycling efficiency, and calculate direct landfill diversion metrics." }
        ]
      },
      {
        eyebrow: "Built for adoption",
        title: "From the shop floor to the leadership view.",
        description: "Verify scale weights, authorize scrap pickup manifests, and push financial variance allocations downstream.",
        items: [
          { title: "Reject Capture", body: "Log defective parts and scrap weights at production terminals." },
          { title: "TPM Coding", body: "Map waste to standardized EHS reasons (calibration shifts, material cracks)." },
          { title: "Disposal Manifesting", body: "Attach cargo manifest receipts and vendor weight records." },
          { title: "EHS Sign-offs", body: "Enforce digital signature authorizations before waste pickups." },
          { title: "Discrepancy Checks", body: "Flag manifest weight variances between plant scale and vendor logs." },
          { title: "Cost Allocation", body: "Allocate raw cost losses directly to line cost centers." }
        ]
      }
    ],
    process: [
      { title: "1. Map Waste Streams (Weeks 1-2)", body: "Inventory metal, chemical, and general waste streams, and catalog contractor codes." },
      { title: "2. Define Manifest Workflows (Weeks 3-4)", body: "Set up EHS supervisor signature rules, mismatch thresholds, and approval matrices." },
      { title: "3. Connect Weigh Terminals (Weeks 5-6)", body: "Install floor terminal applications connected directly to weight scale readouts." },
      { title: "4. Scale Compliance Integration (Weeks 7-8)", body: "Sync digital manifest logs with annual EPA compliance portals and ERP accounts." }
    ],
    tech: ["Scale Ingest Service", "TPM Reason Code Engine", "EPA Manifest Mapper", "Certified Vendor REST APIs", "EHS Compliance Logging Console"],
    techExpertise: [
      {
        label: "Scrap Operations",
        cards: [
          { role: "Weight Ingestion", level: "Core", category: "Scale telemetry capture", tech: ["Scale Telemetry", "Receipt Mappers"] },
          { role: "Scrap Classification", level: "Core", category: "TPM reason code mapping", tech: ["Reason Mappers", "Reject Codes"] },
          { role: "Warehouse Segregation", level: "Advanced", category: "Bin staging coordinate tracker", tech: ["Zone Layouts", "Staging Bins"] }
        ]
      },
      {
        label: "Regulatory Gateway",
        cards: [
          { role: "Recycler Portal Sync", level: "API", category: "Upload cargo manifest receipts", tech: ["Vendor Webhooks", "API Manifests"] },
          { role: "EPA Compliance Sync", level: "API", category: "Sync regulatory waste forms", tech: ["EPA manifests", "EHS Ledgers"] },
          { role: "Cost Center Mapping", level: "API", category: "Allocate loss to accounts", tech: ["SAP Mappings", "Variance Sync"] }
        ]
      },
      {
        label: "Governance Controls",
        cards: [
          { role: "Manifest Audit Console", level: "Secure", category: "Reconcile manifest variances", tech: ["Quarantine Reviews", "Audits"] },
          { role: "Multi-tier Sign-off", level: "Secure", category: "Supervisor approval gates", tech: ["Role Gates", "Sign-offs"] },
          { role: "Trend Detection Engine", level: "Scalable", category: "Flag yield loss drifts", tech: ["Drift Reports", "Anomalies"] }
        ]
      }
    ],
    faqs: [
      { q: "Can this track hazardous waste manifests?", a: "Yes. The platform supports EPA hazardous waste manifests, allowing EHS managers to track regulatory codes, certified disposal methods, and digital signature records." },
      { q: "How does the digital scale integration work?", a: "Line terminal apps connect directly to dock scales or weight indicators via local network protocols, logging weight readings to scrap records automatically." },
      { q: "What happens when a vendor cargo weight doesn't match our logged weight?", a: "The manifest is quarantined in our Exception console. A supervisor receives an alert to resolve the variance before final reconciliation is synced." },
      { q: "Does this sync with financial systems for cost allocation?", a: "Yes. Approved scrap logs calculate raw cost loss and push the entries directly to line or SKU accounts in SAP or NetSuite for direct cost accounting." }
    ]
  },
  {
    slug: "statistical-quality-control",
    eyebrow: "Quality Analytics",
    title: "Statistical Quality Control (SQC) & Process Capability",
    lede: "Deploy automated control charts, process capability analysis (Cp, Cpk), and acceptance sampling to ensure stable manufacturing processes and audit-ready compliance.",
    Icon: SlidersHorizontal,
    capabilities: [
      { title: "Process Capability Index (Cp, Cpk)", body: "Calculate process limits and capability scores dynamically to confirm production stays in spec." },
      { title: "Real-time Control Charts", body: "Plot X-bar R, P, NP, and C charts automatically with instant alarms for out-of-control trends." },
      { title: "Acceptance Sampling Plans", body: "Implement standardized MIL-STD sampling rules to inspect incoming parts with statistical confidence." },
      { title: "Six Sigma DMAIC Tools", body: "Integrate analysis, pareto defect charts, and scatter plots for structured process optimization." },
    ],
    outcomes: [
      { metric: "40% Less", label: "Repetitive Defects", context: "Achieve verified defect reductions on frontline tasks, as proven in automotive components deployments." },
      { metric: "Lower", label: "Inspection Costs", context: "Transition from expensive 100% inspection to statistical sampling." },
      { metric: "Guaranteed", label: "Quality Compliance", context: "Deliver reliable process validation data to customers and certification bodies." },
    ],
    extraSection: StatisticalQualityControlExtraSection,
  },
];

export const industrialSolutions = Object.fromEntries(
  definitions.map((definition) => [definition.slug, makeIndustrialPage(definition)]),
) as Record<string, SubServicePageProps>;

export const industrialSlugs = definitions.map(({ slug }) => slug);
