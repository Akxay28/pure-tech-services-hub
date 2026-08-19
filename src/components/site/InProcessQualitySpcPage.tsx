import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  Check, 
  Sparkles, 
  ArrowRight,
  Database,
  Search,
  Activity,
  SlidersHorizontal,
  ChevronDown,
  Building,
  UserCheck,
  ShieldCheck,
  FileCheck,
  Zap,
  Lock,
  RefreshCw,
  Plug,
  FileUp,
  Network,
  ClipboardList,
  AlertTriangle,
  Monitor,
  GraduationCap,
  Target
} from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  Stat,
  BrandIconBox,
  CTASection
} from "@/components/site/Primitives";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { accentAt, brandIconGradient } from "@/lib/brand-colors";

interface Concept {
  title: string;
  short: string;
  detail: string;
}

interface TechCard {
  role: string;
  level: string;
  category: string;
  tech: string[];
}

interface TechTab {
  label: string;
  cards: TechCard[];
}

export function InProcessQualitySpcPage() {
  const accentColor = "var(--brand-blue)";
  const [activeGlossary, setActiveGlossary] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Data Capture");
  const [activeSector, setActiveSector] = useState<string>("All");

  // Verified stats
  const heroStats = [
    { value: "13 Years", label: "Operational inception (Est. 2013)" },
    { value: "50+", label: "Successful engagements" },
    { value: "10", label: "Countries reached" },
    { value: "AWS & GCP", label: "Certified cloud engineers" },
  ];

  // Who this is for list
  const whoForItems = [
    {
      title: "Quality Engineers",
      body: "Engineers responsible for running control charts, configuring capability studies (Cp/Cpk), and analyzing process distributions."
    },
    {
      title: "Line Supervisors",
      body: "Supervisors on the shop floor tasked with identifying process drift and tool wear before a batch fails or escapes."
    },
    {
      title: "Plant Quality Managers",
      body: "Managers who need audit-ready compliance evidence, secure electronic records, and traceable correction histories."
    },
    {
      title: "Modernizing Manufacturers",
      body: "Operations currently relying on manual paper checklists or end-of-shift spreadsheet reviews instead of real-time control charts."
    }
  ];

  // Verified Outcomes (TATA AutoComp, Bridgestone, Schindler, Sandvik)
  const outcomes = [
    {
      title: "Raw Material Testing (MTR)",
      metric: "90% Fewer Errors",
      project: "Bridgestone Digitalization",
      industry: "Automotive & Tires",
      body: "Replaced manual raw material record checks with IoT data capture and AI predictive quality checks, resulting in 90% fewer errors in test reports and 50% better traceability."
    },
    {
      title: "TQM Operational Portal",
      metric: "40% Fewer Defects",
      project: "Tata AutoComp Portal",
      industry: "Automotive & Tires",
      body: "Digitized abnormality management, safety audits, and lean tools (5S, Poka-Yoke) to reduce repetitive defects by 40% and increase Kaizen submission by 60%."
    },
    {
      title: "Pulley Concentricity Inspection",
      metric: "High Precision",
      project: "Schindler GED Software",
      industry: "Heavy Machinery",
      body: "Developed custom GED software matching high-precision engineering gauge inputs for elevator pulley concentricity inspection, ensuring automated quality validation."
    },
    {
      title: "Production KPI Dashboard",
      metric: "20% Efficiency Boost",
      project: "Bridgestone KPI System",
      industry: "Automotive & Tires",
      body: "Centralized production output, scrap monitoring, and downtime logs across departments, driving a 20% efficiency boost and 40% faster reporting."
    },
    {
      title: "Vehicle Access Control",
      metric: "90% Automation",
      project: "Sandvik Gates System",
      industry: "Heavy Machinery",
      body: "Integrated RFID/FastTag scanning with boom barrier controllers and corporate SSO to achieve 90% automated gate clearance and 80% live visibility."
    },
    {
      title: "8D Complaint Resolution",
      metric: "100% Traceable",
      project: "Tata AutoComp QR Board",
      industry: "Automotive & Tires",
      body: "Digitalized the structured 8D complaint management methodology, replacing paper logs with automated notifications and root-cause verification workflows."
    }
  ];

  const filteredOutcomes = activeSector === "All"
    ? outcomes
    : outcomes.filter(o => o.industry === activeSector);

  // 6 Workflow Cards
  const workflowCards = [
    {
      title: "Operator measurement logs",
      body: "Operators log dimensions directly at line terminals, receiving instant visual feedback when a point exceeds control limits."
    },
    {
      title: "Out-of-control notifications",
      body: "Statistical engine evaluates points against Nelson's rules and instantly routes alert notifications to assigned quality engineers."
    },
    {
      title: "Audit-ready capability reports",
      body: "Export compiled Cp/Cpk capability indices and unalterable electronic signature logs for external auditors with a single click."
    },
    {
      title: "Enforcing OCAP execution",
      body: "When an alarm is triggered, operators are guided through the Out-of-Control Action Plan (OCAP), requiring digital sign-offs."
    },
    {
      title: "Standardizing chart templates",
      body: "Distribute consistent X-bar R and I-MR chart layouts centrally across lines while restricting limit-modification privileges."
    },
    {
      title: "Validating alert accuracy",
      body: "Track false-alarm ratios on pilot lines, adjusting and optimizing control limits before rolling out across the entire facility."
    }
  ];

  // Data Lifecycle steps
  const lifecycleSteps = [
    {
      step: "01",
      title: "Capture",
      subtitle: "Unified Ingestion",
      body: "Ingest dimensions, weight, and critical parameters from edge PLCs (using OPC UA and MQTT), manual line-side operator terminals, or LIMS laboratory data imports."
    },
    {
      step: "02",
      title: "Detect",
      subtitle: "Statistical Evaluation",
      body: "Continuous calculation engines plot X-bar R, X-bar S, or I-MR charts, monitoring data against Nelson's rules to identify shifts and process drift in real-time."
    },
    {
      step: "03",
      title: "Act",
      subtitle: "Closed-Loop Containment",
      body: "Route anomalies to engineers, enforce standardized Out-of-Control Action Plans (OCAPs), capture root causes, and recalculate Cp/Cpk to verify process correction."
    }
  ];

  // Glossary concepts
  const glossaryConcepts: Concept[] = [
    {
      title: "Common vs. Special Cause Variation",
      short: "Expected background noise versus assignable process deviations.",
      detail: "Common cause variation is the natural, expected background fluctuation inherent in any process (e.g. minor environmental changes). Special cause variation is an assignable, unexpected event (e.g. tool break, raw material batch shift) that shifts the baseline and requires immediate containment."
    },
    {
      title: "Why Control Limits Sit at 3-Sigma",
      short: "UCL and LCL boundaries set at +/- 3 standard deviations.",
      detail: "Control limits (UCL and LCL) are calculated statistically to encompass 99.73% of normal process variation. By placing limits at +/- 3 standard deviations (3-sigma) from the center line, any point crossing a limit represents a statistically significant deviation (99.73% confidence) that cannot be attributed to random noise."
    },
    {
      title: "Process Capability: Cp vs. Cpk",
      short: "Potential process width compared to actual centering.",
      detail: "Cp measures the potential capability of a process, comparing the tolerance width (specification limits) against the natural width of process variation, assuming the process is perfectly centered. Cpk adjusts this capability for centering, showing how close the process distribution actually is to the nearest specification limit. A process can have a high Cp but a low Cpk if it is drifting off-target."
    },
    {
      title: "Reading a Control Chart for Process Drift",
      short: "Detecting trends and shifts using statistical pattern rules.",
      detail: "Process drift is not just a single point crossing a control limit. We monitor patterns using Nelson's rules—such as 9 consecutive points on one side of the center line, or 6 points steadily rising or falling. These indicators alert quality engineers to process shifts before parts violate physical tolerance thresholds."
    }
  ];

  // Timeline
  const processTimeline = [
    {
      title: "Discover — Week 1-2",
      body: "Map current workflows, select which lines to monitor first, and identify critical-to-quality (CTQ) product characteristics."
    },
    {
      title: "Configure — Week 3-5",
      body: "Define control plans, set initial control limits, and configure X-bar R or I-MR charts on frontline screens."
    },
    {
      title: "Pilot — Week 6-10",
      body: "Run live measurements on a single production line, validate OCAP workflows, and verify alert and alarm accuracy."
    },
    {
      title: "Scale — Week 11+",
      body: "Roll out control chart types and locked limits across assets, production lines, and multi-site operations."
    }
  ];

  // SPC Technology tabs
  const techExpertise: TechTab[] = [
    {
      label: "Data Capture",
      cards: [
        { role: "PLC / Sensor Capture", level: "Edge Integration", category: "Real-time edge ingestion", tech: ["OPC UA", "MQTT", "Modbus"] },
        { role: "Operator Terminals", level: "Frontline Inputs", category: "Responsive digital entry", tech: ["Line-side screens", "Offline sync", "QR codes"] },
        { role: "LIMS Integration", level: "Laboratory Sync", category: "Quality lab interfaces", tech: ["REST APIs", "SQL databases", "CSV/Excel import"] }
      ]
    },
    {
      label: "Calculation Engine",
      cards: [
        { role: "Statistical Math Engine", level: "Real-Time Calculations", category: "Statistical indices", tech: ["Cp & Cpk", "Pp & Ppk", "Standard deviation"] },
        { role: "Pattern Recognition", level: "Continuous Audits", category: "Alarms & drift rules", tech: ["Nelson's rules", "Western Electric rules", "Custom zones"] },
        { role: "Limit Configuration", level: "Process Calibration", category: "Dynamic limit setting", tech: ["Historical baselines", "Auto-recalculation", "Limit locks"] }
      ]
    },
    {
      label: "Compliance & Audits",
      cards: [
        { role: "Electronic Records", level: "Compliant Audit Trails", category: "Electronic signatures", tech: ["21 CFR Part 11", "Timestamped logs", "Unalterable records"] },
        { role: "OCAP Governance", level: "Closed-loop Workflows", category: "Corrective sign-offs", tech: ["Standard workflows", "Required photos", "Multi-tier approvals"] },
        { role: "Standards Alignment", level: "Quality Frameworks", category: "Traceable compliance", tech: ["IATF 16949", "ISO 13485", "ISO 9001"] }
      ]
    }
  ];

  // Engagement modes
  const engagementModes = [
    {
      type: "SOFTWARE",
      title: "Pure Technology Software Implementation",
      body: "Deploy Pure Technology SPC into your existing manufacturing stack. Cloud, hybrid, or on-premise — your choice, our setup.",
      bullets: [
        "30-day cloud deployment",
        "PLC & SCADA integration handled",
        "Historical data import included"
      ],
      btnLabel: "Book a product demo"
    },
    {
      type: "TRAINING",
      title: "Training & Development",
      body: "Build statistical fluency across your team — from operators reading control charts to engineers running multi-factor DOEs.",
      bullets: [
        "SPC, MSA, FMEA, Six Sigma tracks",
        "Instructor-led, on-site, or self-paced",
        "Certification programs available"
      ],
      btnLabel: "Book a training"
    },
    {
      type: "CONSULTING",
      title: "Consulting Engagement",
      body: "End-to-end program rollouts with measurable RoI. We handle scope, deployment, change management, and embed cleanly.",
      bullets: [
        "4–12 month engagements",
        "2–4 consultants embedded",
        "3–8× year-1 RoI typical"
      ],
      btnLabel: "Discuss a project"
    }
  ];

  // SPC FAQs
  const spcFaqs = [
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
  ];

  return (
    <>
      {/* Hero */}
      <PageHero 
        eyebrow="Quality Intelligence" 
        title="In-Process Quality & Statistical Process Control (SPC)" 
        description="Digitize quality checks, establish real-time control charts, and enforce OCAP compliance to catch process drift before your batch fails."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Talk to a senior engineer</PrimaryButton>
          <GhostButton to="/services">All services</GhostButton>
        </div>
        <div className="mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {heroStats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </PageHero>

      {/* Trust Bar (Section 1) */}
      <section className="py-12 border-y border-border bg-surface-muted/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Delivered for Manufacturing Leaders
              </span>
              <h3 className="mt-1 text-lg font-display font-bold text-foreground">
                Verifiable enterprise projects delivered for leading global brands.
              </h3>
            </div>
            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              {[
                { name: "Bridgestone", desc: "Tire Manufacturing" },
                { name: "Schindler", desc: "Pulley Concentricity" },
                { name: "Tata AutoComp", desc: "TQM Portal" },
                { name: "Sandvik", desc: "Vehicle Management" }
              ].map((client) => (
                <div 
                  key={client.name} 
                  className="rounded-xl border border-border bg-surface/50 p-4 text-center hover:bg-surface/80 transition-all duration-300"
                >
                  <p className="font-display font-bold text-base text-foreground tracking-tight">
                    {client.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                    {client.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Real Verifiable Stats row */}
          <div className="mt-8 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-foreground">Est. 2013</p>
              <p className="text-xs text-muted-foreground mt-0.5">Active engineering and consulting partner for 13 years.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Fortune 500 projects</p>
              <p className="text-xs text-muted-foreground mt-0.5">Verifiable manufacturing systems delivered since 2017.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Defense-Grade Systems</p>
              <p className="text-xs text-muted-foreground mt-0.5">Secure operations tracking built for the Government Army in 2022.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <BrandIconBox color={accentColor} size="lg" className="shadow-soft">
              <SlidersHorizontal className="h-6 w-6" />
            </BrandIconBox>
            <h2 className="mt-5 text-3xl capitalize lg:text-4xl font-display font-bold leading-tight">
              Engineered for Quality Leaders & <span className="text-gradient-brand">Frontline Operations.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Designed to replace manual paper sheets and disconnected spreadsheet reviews with real-time process integrity.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Who this is for
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-4">
              {whoForItems.map((w, i) => (
                <li
                  key={w.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-foreground">{w.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{w.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes (Section 2) */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Proven Impact"
            title="Real Operational Outcomes"
            description="Verified results delivered across Pure Technology's manufacturing engagements."
          />

          {/* Industry Filter Tabs */}
          <div className="mt-8 mb-12 flex flex-wrap gap-3">
            {[
              { label: "All Industries", value: "All" },
              { label: "Automotive & Tires", value: "Automotive & Tires" },
              { label: "Heavy Machinery", value: "Heavy Machinery" }
            ].map((tab, tabIndex) => (
              <button
                key={tab.value}
                onClick={() => setActiveSector(tab.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 border ${
                  activeSector === tab.value
                    ? "text-white border-transparent shadow-soft"
                    : "border-border bg-surface hover:bg-secondary"
                }`}
                style={
                  activeSector === tab.value
                    ? { background: brandIconGradient(accentAt(tabIndex)) }
                    : {}
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOutcomes.map((item, index) => (
              <div 
                key={item.title} 
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm hover:-translate-y-1 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top right, color-mix(in oklab, ${accentAt(index)} 10%, transparent), transparent 60%)` }}
                />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wide"
                      style={{ background: brandIconGradient(accentAt(index)) }}
                    >
                      {item.metric}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/60">
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">Verified Client Project</p>
                    <p className="text-[11px] font-semibold text-foreground mt-0.5">{item.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capture Detect Act (Section 3) */}
      <section className="px-5 lg:px-8 py-20 bg-surface">
        <div className="mx-auto max-w-7xl space-y-28">

          {/* STEP 1: CAPTURE */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Bullets */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-display font-bold text-gradient-brand">01</span>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">STEP ONE</span>
                  <span className="text-sm font-bold text-foreground">Capture</span>
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                Meet your data where it already lives.
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Quality data takes different forms on different lines — manual entry on operator tablets, bulk Excel imports for historical loads, or fully automated capture from PLCs and IIoT sensors. Pure Technology handles all three on the same platform, with the same data model.
              </p>

              <ul className="space-y-3.5 text-xs text-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>PLC & IIoT integration</strong> with Allen-Bradley, Siemens, Beckhoff, Cognex, AutomationDirect, OPC-UA, MQTT.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Operator-friendly manual entry</strong> with multi-sample subgroups, validation, and offline sync.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Bulk historical import</strong> — quick onboarding for your historical quality records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Edge connectors for legacy machines</strong> — retrofit older equipment without ripping out your stack.</span>
                </li>
              </ul>

              <div className="border-l-4 border-[#017E84] bg-surface-muted/50 p-4 rounded-r-2xl">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Outcome:</strong> One quality data lake across every line, every plant — without changing your existing automation stack.
                </p>
              </div>

              <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#017E84] hover:underline">
                Read the integration docs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right Column: Visual Mockup (Data Sources) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-[#F8FAFC]/60 p-6 shadow-soft space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-3 mb-2">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider ml-2">data sources</span>
                </div>

                <div className="space-y-2">
                  {[
                    { Icon: Plug, type: "PLC", name: "Allen-Bradley CompactLogix", status: "live" },
                    { Icon: Plug, type: "PLC", name: "Siemens S7-1500", status: "live" },
                    { Icon: Search, type: "Vision", name: "Cognex In-Sight", status: "live" },
                    { Icon: ClipboardList, type: "Manual", name: "Op tablet (Line 4)", status: "3 ops" },
                    { Icon: FileUp, type: "Bulk import", name: "Q3 historicals", status: "428k rows" },
                    { Icon: Network, type: "OPC-UA", name: "Edge gateway", status: "14 tags" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between border border-border bg-white px-4 py-3 rounded-2xl text-xs">
                      <div className="flex items-center gap-3">
                        <item.Icon className="h-4 w-4 text-[#017E84] shrink-0" />
                        <span className="font-mono text-[11px] text-foreground">
                          <strong className="font-semibold">{item.type}</strong> • {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* STEP 2: DETECT */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Mockup (Rule 2 Violation Card) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden text-xs">
                {/* Alert Header */}
                <div className="bg-[#FEFBE8] border-b border-border px-5 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4.5 w-4.5 text-[#D97706]" />
                    <span className="font-display font-bold text-sm text-foreground">Nelson Rule 2 violation</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">14:23:08 • Today</span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#FEF9C3] border border-[#FEF08A] font-mono text-[10px] font-bold text-[#854D0E] uppercase tracking-wide">
                    Rule 2 • 9 points same side of CL
                  </span>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Diameter measurements on <strong className="font-semibold text-foreground">Line 3</strong> show 9 consecutive points above the centerline. Process is technically in control, but trending — investigate before further drift.
                  </p>

                  <div className="border-t border-border pt-4 grid grid-cols-2 gap-y-4 gap-x-2 text-[11px]">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block">PRODUCT</span>
                      <span className="font-mono font-semibold text-foreground mt-0.5 block">SKU-7842</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block">NOTIFIED</span>
                      <span className="font-semibold text-foreground mt-0.5 block">3 supervisors, 1 engineer</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block">CHANNEL</span>
                      <span className="font-semibold text-foreground mt-0.5 block font-mono">Email • SMS</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block">LINK</span>
                      <Link to="/contact" className="font-semibold text-[#017E84] mt-0.5 inline-flex items-center gap-1">
                        Open chart <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text & Bullets */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-display font-bold text-gradient-brand">02</span>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">STEP TWO</span>
                  <span className="text-sm font-bold text-foreground">Detect</span>
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                Catch the right signals — not the noise.
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                A control limit breach is the obvious signal, but processes drift in detectable patterns long before any single point goes out. Pure Technology implements Nelson rules and lets you toggle each one independently per chart — so sensitivity tracks process maturity, not theoretical defaults.
              </p>

              <ul className="space-y-3.5 text-xs text-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Variable charts</strong> — I-MR, Xbar-R, Xbar-S, IMR-R/S, CUSUM, EWMA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Attribute charts</strong> — P, NP, U, C, Laney P (with variable subgroup sizes).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>All 8 Nelson rules</strong>, each toggleable per chart.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Granular alert routing</strong> by Product × Process × Parameter.</span>
                </li>
              </ul>

              <div className="border-l-4 border-[#017E84] bg-surface-muted/50 p-4 rounded-r-2xl">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Outcome:</strong> Engineers stop drift before it becomes scrap — corrective action starts before the next batch.
                </p>
              </div>

              <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#017E84] hover:underline">
                See all supported chart types <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>


          {/* STEP 3: ACT */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Bullets */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-display font-bold text-gradient-brand">03</span>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">STEP THREE</span>
                  <span className="text-sm font-bold text-foreground">Act</span>
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                Capability and corrective action — closed loop.
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Every signal becomes structured data: assigned cause, corrective action, follow-up. Capability indices are recalculated on the latest stable window — Cp, Cpk, Pp, Ppk, Cpm, Z.bench, sigma within and overall — so engineering decisions ride on current truth, not stale reports.
              </p>

              <ul className="space-y-3.5 text-xs text-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Cp, Cpk, Pp, Ppk, Cpm, Z.bench</strong> — all AIAG-validated.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Normal & non-normal</strong> — Anderson-Darling, Shapiro-Wilk, Box-Cox, Johnson.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Capability six-pack</strong> — diagnostic standard for new product introductions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Special-cause capture</strong> — every violation logged with assigned cause and follow-up.</span>
                </li>
              </ul>

              <div className="border-l-4 border-[#017E84] bg-surface-muted/50 p-4 rounded-r-2xl">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Outcome:</strong> Capability targets met for IATF and FDA audits — without weekend war rooms before the audit window.
                </p>
              </div>

              <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#017E84] hover:underline">
                Capability indices explained <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right Column: Visual Mockup (Capability Scorecard) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-soft space-y-5 text-xs">
                {/* Capability Header */}
                <div className="border-b border-border pb-3">
                  <h4 className="font-display font-semibold text-sm text-foreground">Capability — SKU-7842 / Diameter</h4>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Window • last 30 days • n=2,841</p>
                </div>

                {/* 6 Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "CP", val: "1.85", accent: true },
                    { label: "CPK", val: "1.67", accent: true },
                    { label: "PP", val: "1.72", accent: true },
                    { label: "PPK", val: "1.59", accent: true },
                    { label: "Z.BENCH", val: "5.0σ", accent: false },
                    { label: "PPM", val: "63", accent: false }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[#F8FAFC]/60 border border-border px-3 py-3.5 rounded-2xl text-center">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block">{item.label}</span>
                      <span className={`text-base font-bold mt-1 block font-mono ${item.accent ? "text-emerald-500" : "text-foreground"}`}>
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Slider / Range bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="relative h-2 bg-[#F1F5F9] rounded-full border border-slate-200 overflow-hidden">
                    {/* Green range */}
                    <div className="absolute left-[20%] right-[20%] top-0 bottom-0 bg-emerald-500/25" />
                    {/* Red line LSL */}
                    <div className="absolute left-[15%] top-0 bottom-0 w-0.5 bg-red-500" />
                    {/* Sky line mean */}
                    <div className="absolute left-[52%] top-0 bottom-0 w-0.5 bg-sky-500" />
                    {/* Red line USL */}
                    <div className="absolute right-[15%] top-0 bottom-0 w-0.5 bg-red-500" />
                  </div>

                  <div className="flex justify-between font-mono text-[9px] text-muted-foreground px-0.5">
                    <span>LSL • 24.5</span>
                    <span>x̄ • 25.02</span>
                    <span>USL • 25.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SpcChartBoard />
      <SpcOcapContainment />

      {/* 6 Workflow cards */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Workflow depth"
            title="From The Shop Floor To The Leadership View"
            description="Our statistical process control workflow connects every operation level from frontline checks to regulatory reviews."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflowCards.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ background: brandIconGradient(accentAt(index)) }}
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Concepts Section (Section 6) */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 sticky top-24">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-6 rounded-full" style={{ background: "var(--gradient-brand)" }} />
              SPC Knowledge
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              Demystifying <span className="text-gradient-brand">Statistical Concepts.</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Understand the core logic powering Statistical Process Control (SPC). Tap any concept card to expand details.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {glossaryConcepts.map((item, idx) => {
              const isOpen = activeGlossary === idx;
              const cardAccent = accentAt(idx);
              return (
                <div 
                  key={item.title}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-border shadow-soft bg-surface" : "border-border/60 bg-surface/60 hover:bg-surface hover:border-border"
                  }`}
                >
                  <button
                    onClick={() => setActiveGlossary(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                        style={{ background: `color-mix(in oklab, ${cardAccent} 10%, white)` }}
                      >
                        <Activity className="h-5 w-5" style={{ color: cardAccent }} />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-base text-foreground leading-snug">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-normal">{item.short}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-border/40" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 bg-surface-muted/30">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Repeatable path */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader 
            eyebrow="How we work" 
            title="A Repeatable Path to Plant Scaling" 
            description="Our structured rollout process is focused on validating statistical limits and operator workflows before scaling site-wide."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processTimeline.map((s, i) => (
              <div key={s.title} className="relative">
                <div
                  className="h-9 w-9 rounded-full grid place-items-center text-sm font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, color-mix(in oklab, ${accentColor} 55%, white))`,
                  }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-display font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial technology your operation can rely on */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/20 border-b border-border overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-12 rounded-full bg-gradient-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Technology Expertise
              </span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              Industrial technology your operation can <span className="text-gradient-brand">rely on.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              We combine real-time PLC integration, analytical processing, and compliance frameworks to keep process measurements secure and audit-ready.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {techExpertise.map((tab, tabIndex) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 border ${
                  activeTab === tab.label
                    ? "text-white border-transparent shadow-soft"
                    : "border-border bg-surface hover:bg-secondary"
                }`}
                style={
                  activeTab === tab.label
                    ? { background: brandIconGradient(accentAt(tabIndex)) }
                    : {}
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Cards Content Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(techExpertise.find(t => t.label === activeTab)?.cards ?? []).map((card, cardIndex) => {
              const cardAccent = accentAt(cardIndex);
              return (
                <div
                  key={card.role}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top right, color-mix(in oklab, ${cardAccent} 14%, transparent), transparent 60%)` }}
                  />
                  <div className="flex items-start justify-between relative z-10">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{ background: `color-mix(in oklab, ${cardAccent} 10%, white)` }}
                    >
                      <div className="h-3 w-3 rounded-full" style={{ background: cardAccent }} />
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {card.level}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="mt-8 text-lg font-display font-semibold tracking-tight text-foreground">{card.role}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{card.category}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border px-3 py-1.5 text-[10px] font-medium bg-surface-muted/70"
                          style={{ color: cardAccent }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ background: brandIconGradient(cardAccent) }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Modes (Section 5) */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20 mb-4">
              Engagement Modes
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
              Three ways to work with Pure Technology.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Whether you need software in your stack, capability in your team, or a full program implemented — pick the engagement that fits.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {engagementModes.map((mode, i) => {
              // Select appropriate icon
              let Icon = Monitor;
              if (mode.type === "TRAINING") Icon = GraduationCap;
              if (mode.type === "CONSULTING") Icon = Target;

              const cardAccent = accentAt(i + 1);

              return (
                <div 
                  key={mode.title} 
                  className="rounded-3xl border border-border bg-surface p-8 flex flex-col justify-between hover:border-border/80 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div style={{ color: cardAccent }}>
                      <Icon className="h-10 w-10 shrink-0" />
                    </div>

                    {/* Badge */}
                    <div>
                      <span 
                        className="inline-block px-2.5 py-1 rounded text-[9px] font-bold tracking-wider uppercase"
                        style={{ 
                          background: `color-mix(in oklab, ${cardAccent} 10%, white)`,
                          color: cardAccent,
                          border: `1px solid color-mix(in oklab, ${cardAccent} 20%, white)`
                        }}
                      >
                        {mode.type}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-display font-bold text-foreground">{mode.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{mode.body}</p>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 pt-2 text-[11px] text-muted-foreground">
                      {mode.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-center gap-2.5">
                          <Check className="h-3.5 w-3.5 shrink-0" style={{ color: cardAccent }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="mt-8 pt-6">
                    <Link
                      to="/contact"
                      className="block w-full text-center py-3 text-white rounded-xl text-xs font-semibold tracking-wide transition-opacity hover:opacity-90 shadow-soft"
                      style={{ background: brandIconGradient(cardAccent) }}
                    >
                      {mode.btnLabel}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs (Section 7) */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-b border-border">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="The questions we hear most." align="center" />
          <div className="mt-10 space-y-3">
            {spcFaqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-surface p-5 open:shadow-soft"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold text-foreground">
                  {f.q}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white text-sm transition-transform group-open:rotate-45"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Standard bottom contact block and CTA banner */}
      <ConsultationSection formSource="Service page - Quality Intelligence" />

      <CTASection
        title="Ready to scope this in detail?"
        description="A 30-minute call with a senior engineer. No sales theatre — just a real assessment of fit, scope, and timeline."
      />
    </>
  );
}


// ─── SPC SPECIFIC WIDGETS ───

export function SpcChartBoard() {
  const [selectedChart, setSelectedChart] = useState("xbar-r");

  const chartData = {
    "xbar-r": {
      title: "Line 3 Outer Diameter (X-bar R)",
      desc: "Subgroup Average & Range chart",
      cl: "25.02 mm",
      ucl: "25.18 mm",
      lcl: "24.86 mm",
      status: "Trend Detected",
      statusColor: "text-amber-500",
      points: [24.95, 24.98, 25.01, 25.04, 25.06, 25.08, 25.09, 25.11, 25.12],
      violation: "Nelson Rule 2: 9 consecutive points above Center Line"
    },
    "imr": {
      title: "Batch 42 Viscosity (I-MR)",
      desc: "Individual & Moving Range chart",
      cl: "45.2 cP",
      ucl: "48.5 cP",
      lcl: "41.9 cP",
      status: "In Control",
      statusColor: "text-emerald-500",
      points: [24.8, 25.0, 24.9, 25.1, 25.0, 25.0, 24.9, 25.1, 25.0],
      violation: "None"
    }
  };

  const current = chartData[selectedChart as keyof typeof chartData];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Activity className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">REAL-TIME MONITORING</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Real-Time Control Charts</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Monitor process centering and variability as parts are measured. Instantly generate X-bar R, X-bar S, or I-MR charts with automated drift detection using standard statistical rules.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Nelson's Rules Recognition", desc: "Flag process shifts and runs before parts violate specifications." },
              { title: "Custom Control Zones", desc: "Divide charts into A, B, and C zones to analyze distribution spreads." },
              { title: "Dynamic Limit Locks", desc: "Lock calculated baselines to prevent unauthorized boundary shifts." },
              { title: "Automated Data Ingestion", desc: "Map variables to digital micrometers, thickness gauges, and scales." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Chart Board Mock Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-md border border-emerald-500/20 font-medium">LIVE CHART FEED</span>
              </div>
              
              <div className="flex gap-1">
                {["xbar-r", "imr"].map((c) => (
                  <button 
                    key={c}
                    onClick={() => setSelectedChart(c)}
                    className={`text-[9px] font-bold px-2.5 py-1 rounded-md transition-colors ${
                      selectedChart === c 
                        ? "bg-primary text-white" 
                        : "bg-surface-muted/80 text-muted-foreground hover:bg-surface-muted"
                    }`}
                  >
                    {c === "xbar-r" ? "X-bar R" : "I-MR"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display font-bold text-base leading-tight">{current.title}</h3>
                <p className="text-[10px] text-muted-foreground mt-0.5">{current.desc}</p>
              </div>
              <div className="text-right">
                <div className={`text-xs font-bold px-2.5 py-0.5 rounded border ${
                  current.status === "In Control" 
                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                    : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                }`}>
                  {current.status}
                </div>
              </div>
            </div>

            {/* Simulated Chart Plot Area */}
            <div className="bg-surface-muted/50 rounded-2xl p-4 border border-border/50 relative h-36 flex items-end justify-between gap-1.5 mb-6">
              {/* UCL, CL, LCL horizontal dotted lines */}
              <div className="absolute left-0 right-0 top-[20%] border-t border-dashed border-rose-500/40 flex justify-between px-2 text-[8px] text-rose-500">
                <span>UCL: {current.ucl}</span>
              </div>
              <div className="absolute left-0 right-0 top-[50%] border-t border-dashed border-slate-400/40 flex justify-between px-2 text-[8px] text-slate-500">
                <span>CL: {current.cl}</span>
              </div>
              <div className="absolute left-0 right-0 top-[80%] border-t border-dashed border-rose-500/40 flex justify-between px-2 text-[8px] text-rose-500">
                <span>LCL: {current.lcl}</span>
              </div>

              {/* Data points represented as small dots with lines connecting them */}
              {current.points.map((pt, idx) => {
                // Calculate percentage height
                const valRange = 25.3 - 24.7; // general window
                const normalized = (pt - 24.7) / valRange;
                const bottomPercent = Math.min(Math.max(normalized * 100, 10), 90);

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center z-10">
                    <div 
                      className={`h-2.5 w-2.5 rounded-full border border-white shadow-sm transition-all duration-300 ${
                        selectedChart === "xbar-r" && idx >= 5 
                          ? "bg-amber-500 animate-pulse" 
                          : "bg-primary"
                      }`}
                      style={{ transform: `translateY(-${bottomPercent}px)` }}
                    />
                    <span className="text-[7px] text-muted-foreground font-mono mt-1">n={idx+1}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Alert Banner */}
            {current.violation !== "None" && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex items-start gap-2.5 text-[10px] text-amber-800 dark:text-amber-300">
                <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold">Alarm Triggered</h6>
                  <p className="text-muted-foreground text-[9px] mt-0.5">{current.violation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpcOcapContainment() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: OCAP Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Abnormality Containment (OCAP)</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 rounded-md">OCAP-2026-894</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-xs font-bold">Nelson Rule 2 Alarm (Line 3)</h6>
                <small className="text-muted-foreground text-[9px]">CTQ Parameter: Outer Diameter</small>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-500 text-white rounded font-medium">RECOVERED</span>
            </div>

            {/* Step list */}
            <div className="space-y-2.5 text-[10px]">
              <div className="font-bold uppercase tracking-wider text-muted-foreground">Standard Recovery Protocol</div>
              {[
                { step: "Step 1", desc: "Check spindle coolant flow rate and verify temperature", status: "Completed - OK", color: "text-emerald-500" },
                { step: "Step 2", desc: "Verify spindle speed and apply -0.015mm offset adjustment", status: "Adjusted - Checked", color: "text-emerald-500" },
                { step: "Step 3", desc: "Measure and log next subgroup of 5 parts to verify center", status: "Process Centered", color: "text-emerald-500" }
              ].map((item, idx) => (
                <div key={idx} className="bg-surface/50 p-2.5 rounded-xl border border-border/50 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-primary block">{item.step}</span>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                  <span className={`font-bold shrink-0 ml-2 ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 flex justify-between items-center text-[10px]">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-slate-100 border border-slate-300 grid place-items-center text-[8px] font-bold">QA</span>
                <span className="text-muted-foreground">E-Signature: R. Davis (Quality Lead)</span>
              </div>
              <span className="text-muted-foreground">14:38 Today</span>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">CLOSED-LOOP CONTAINMENT</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Out-of-Control Action Plans</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ensure operators execute standardized corrective procedures the moment an alarm sounds. Enforce containment logs, capture calibration photos, and route signs to quality managers.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Enforced Step-by-Step Logic", desc: "Guide crews through interactive recovery workflows based on failure modes." },
              { title: "Mandatory Evidence Uploads", desc: "Require photos of tool alignment, gauge values, or material labels." },
              { title: "Traceable Audit Ledgers", desc: "Log every validation step and operator comment to satisfy FDA and IATF audits." },
              { title: "Automated Escalation Loops", desc: "Instantly alert quality engineers if OCAP steps fail to correct process offsets." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-rose-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
