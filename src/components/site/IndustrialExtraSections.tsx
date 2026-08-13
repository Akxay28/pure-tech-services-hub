import { useState, useEffect } from "react";
import { 
  Check, 
  ChevronRight, 
  Smartphone, 
  QrCode, 
  FileText, 
  ShieldCheck, 
  SlidersHorizontal, 
  Activity, 
  Trash2, 
  AlertTriangle,
  FileSearch,
  Zap,
  Flame,
  Users,
  Play,
  Pause,
  RefreshCw,
  Database,
  Package,
  Clock,
  Gauge
} from "lucide-react";
import { brandIconGradient, accentAt } from "@/lib/brand-colors";
import { getIndustrialExtraContent } from "@/lib/industrial-extra-content";

// ─── 1. 7-STEP INSPECTION WORKFLOW ───
export function InspectionWorkflow7Step() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      num: 1,
      title: "Digital Checklists",
      subtitle: "Pass/Fail & Thresholds",
      desc: "Replace paper forms with powerful digital checklists. Group checklist items by sections like Safety, Mechanical, or Visual checks with custom numeric limit bounds."
    },
    {
      num: 2,
      title: "Synapse AI Creator",
      subtitle: "Instant Templates",
      desc: "Auto-generate compliance checklist templates matching global standards (ISO, OSHA) in seconds, tailored to your equipment model numbers."
    },
    {
      num: 3,
      title: "Scan QR / NFC Tag",
      subtitle: "Instant Field Sync",
      desc: "Frontline inspectors scan a QR code or NFC chip on the machine to instantly open the correct asset history and checklists, eliminating manual searches."
    },
    {
      num: 4,
      title: "Automated Reminders",
      subtitle: "Shift Alert Schedules",
      desc: "Define schedules (daily, weekly, after run). Automatically alert inspectors and escalate overdue tasks to site supervisors."
    },
    {
      num: 5,
      title: "Incident Reporting",
      subtitle: "Enforced Media Evidence",
      desc: "Require photo and video uploads for failed checks. Log anomalies instantly with location coordinates, severity flags, and immediate EHS routing."
    },
    {
      num: 6,
      title: "Root Cause (RCA)",
      subtitle: "DMAIC Actions",
      desc: "Run structured root-cause investigations (5-Whys) directly on failed items, creating trackable corrective actions and preventive plans (CAPA)."
    },
    {
      num: 7,
      title: "Review & Complete",
      subtitle: "Audit-Ready Logs",
      desc: "Digitally sign off reports and export them as clean PDFs. Sync all outcomes directly to your central ERP/CMMS database for regulatory inspections."
    }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Workflow Strategy</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Complete 7-Step Inspection Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Configure inspections around your plant's workflows. Click through each step to see how paper-based audits are transformed into a streamlined digital pipeline.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? "bg-foreground text-background border-foreground shadow-md -translate-y-1" 
                    : "bg-surface hover:bg-surface-muted border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-background text-foreground" : "bg-muted text-muted-foreground"}`}>
                    Step {step.num}
                  </span>
                  {idx < steps.length - 1 && <ChevronRight className="h-4 w-4 opacity-30" />}
                </div>
                <h4 className="mt-3 font-display text-sm font-semibold leading-tight">{step.title}</h4>
                <p className="mt-1 text-[11px] opacity-75">{step.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-border">
          <div className="h-14 w-14 shrink-0 rounded-2xl text-white flex items-center justify-center font-bold text-xl shadow-soft" style={{ background: brandIconGradient(accentAt(activeStep)) }}>
            {steps[activeStep].num}
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-[color:var(--brand-purple)]">{steps[activeStep].title}</h3>
            <p className="mt-1 text-xs font-semibold text-primary uppercase tracking-wider">{steps[activeStep].subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-4xl">{steps[activeStep].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. MOBILE AI GUIDED WORKFLOW & CASES ───
export function MobileAiGuidedWorkflow() {
  const [activeCase, setActiveCase] = useState("oil");
  const cases = {
    oil: {
      title: "Oil & Gas Integrity",
      items: [
        "Detect pipeline surface corrosion, paint chips, or weathering leaks using computer vision.",
        "Scan analog pressure dials and gauge face displays automatically via high-resolution OCR.",
        "Verify HSE safety walks, verify PPE requirements, and check valve status."
      ]
    },
    maritime: {
      title: "Maritime & Dock Operations",
      items: [
        "Inspect hulls, welds, and propeller states with guided photo overlays.",
        "Audit marine engine metrics, logs, and deck safety systems offline in engine rooms.",
        "Document harbor/terminal operations compliance with automated visual evidence."
      ]
    },
    utilities: {
      title: "Power & Water Utilities",
      items: [
        "Monitor substation gates, fencing, and safety indicators for security issues.",
        "Extract meter dials, nameplates, and thermal images into structural asset files.",
        "Enforce checklist routines for water treatment valves and pump operations."
      ]
    },
    construction: {
      title: "Construction Quality Assurance",
      items: [
        "Inspect structural steel alignments, concrete pour forms, and rebar structures.",
        "Log site hazard zones, PPE safety checks, and machinery checks on mobile tablets.",
        "Ensure standard documentation checks for materials incoming from distributors."
      ]
    }
  };

  return (
    <>
      {/* Visual Guided App Spotlight */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Visual Guided Inspection</span>
            <h2 className="text-3xl font-display font-bold lg:text-4xl">Guidance to Eliminate Inspector Bias</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Manual inspection can vary wildly between inspectors. Our mobile app guides technicians with pre-approved reference images, showing exactly what a good state looks like before submission.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-semibold text-base">1. Asset Master Setup</h4>
                  <p className="text-xs text-muted-foreground mt-1">Register assets with site locations, models, and tag them with unique QR codes or NFC tags.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <QrCode className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-semibold text-base">2. QR/NFC Tag Scanning</h4>
                  <p className="text-xs text-muted-foreground mt-1">Inspectors scan the tags on-site to verify physical presence, auto-loading the correct checklists.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Smartphone className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-semibold text-base">3. Guided Media Capture</h4>
                  <p className="text-xs text-muted-foreground mt-1">The app shows reference overlays side-by-side. Photos are taken from identical angles every run.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Camera Anomaly Detection View Mock */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-black/90 p-4 shadow-2xl relative aspect-[4/3] flex flex-col justify-between overflow-hidden">
              {/* Camera Header Overlay */}
              <div className="flex justify-between items-center text-white text-[10px] z-10 bg-black/40 p-2 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono">CAM_SOURCE: LENS_01</span>
                </div>
                <span className="font-mono">FPS: 30</span>
              </div>

              {/* Anomaly Bounding Box Visual */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="border-2 border-red-500 rounded-xl p-8 relative animate-pulse" style={{ width: "160px", height: "120px" }}>
                  <span className="absolute -top-6 left-0 bg-red-500 text-white font-mono text-[9px] px-1.5 py-0.5 rounded font-bold">
                    ANOMALY: Surface Crack (92%)
                  </span>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />
                </div>
              </div>

              {/* Camera Footer Overlay */}
              <div className="flex justify-between items-center text-white/80 text-[10px] z-10 bg-black/40 p-2 rounded-xl">
                <span>ZOOM: 1.0X</span>
                <span>ISO: 400</span>
                <span>EV: 0.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defect Detection & OCR Spotlight */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: OCR Scanner Mock */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl border border-border bg-[#0E1520] text-white p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-400">
                  <SlidersHorizontal className="h-5 w-5" />
                </span>
                <div>
                  <h5 className="font-display font-semibold text-sm">Analog Meter OCR Scanner</h5>
                  <small className="text-white/60 text-[10px]">Processing dial indicator...</small>
                </div>
              </div>

              <div className="relative border border-white/10 rounded-2xl p-4 bg-white/5 overflow-hidden flex flex-col items-center">
                {/* Simulated Dial Face */}
                <div className="w-24 h-24 rounded-full border-4 border-white/30 relative flex items-center justify-center">
                  <div className="w-1 h-12 bg-sky-400 rounded origin-bottom transform rotate-45 absolute -top-1" />
                  <span className="text-[10px] font-mono text-white/50 absolute bottom-3">BAR</span>
                </div>
                {/* Scan box overlay */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 border border-sky-400/80 bg-sky-400/10 h-8 rounded animate-pulse flex items-center justify-center">
                  <span className="font-mono text-xs text-sky-300 font-bold tracking-widest">OCR VALUE: 6.2 BAR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-500/10 text-sky-400">
                <Zap className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">Computer Vision OCR</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Analog Meter & Dial OCR</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Extract values instantly from analog dials, digital displays, and machinery nameplates. Our built-in OCR module parses text and number strings, logs them to CMMS databases, and flags limits.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Defect Classification", desc: "Instantly detect corrosion, cracks, oil leaks, and component wear." },
                { title: "Analog Gauge Parsing", desc: "No sensors needed—parse dial readings automatically from photos." },
                { title: "Offline OCR Mode", desc: "Process and extract reading values directly on-device with zero latency." },
                { title: "Auto-logging history", desc: "Attach raw photo proof alongside structured data fields on every scan." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <Check className="h-4 w-4 text-sky-500 mt-1 shrink-0" />
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

      {/* Use Cases switcher */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-lg text-[color:var(--brand-purple)]">Flexible Field Deployment</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Select your sector to view how field technicians deploy mobile AI inspection layouts to capture evidence and automate site safety tasks.
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(cases).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCase(key)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                    activeCase === key 
                      ? "bg-foreground text-background border-foreground" 
                      : "bg-surface hover:bg-surface-muted text-muted-foreground border-border"
                  }`}
                >
                  {key === "oil" ? "Oil & Gas" : key === "maritime" ? "Maritime" : key === "utilities" ? "Utilities" : "Construction"}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 glass-card rounded-3xl p-6 md:p-8 border border-border bg-surface-muted/30 space-y-4">
            <h4 className="font-display font-semibold text-base text-[color:var(--brand-purple)]">
              {cases[activeCase as keyof typeof cases].title}
            </h4>
            <ul className="space-y-3">
              {cases[activeCase as keyof typeof cases].items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConnectedModules />
    </>
  );
}

// ─── 3. OEE METRICS & LOSSES GRID ───
export function OeeLossesGrid() {
  return (
    <>
      {/* OEE Formula & Benchmarks */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Performance Metric</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">What is OEE?</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto">
            Overall Equipment Effectiveness (OEE) measures manufacturing productivity. It calculates the percentage of planned production time that is truly productive: 100% OEE means you are producing only good parts, as fast as possible, with no stop time.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {[
              { title: "Availability", value: "Run Time ÷ Planned Time", color: "text-blue-500" },
              { title: "Performance", value: "Actual Speed ÷ Max Speed", color: "text-amber-500" },
              { title: "Quality", value: "Good Parts ÷ Total Parts", color: "text-emerald-500" },
              { title: "OEE %", value: "Availability × Performance × Quality", color: "text-purple-500" }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-muted/30 border border-border p-6 rounded-2xl">
                <h4 className="font-display font-semibold text-xs text-muted-foreground uppercase">{item.title}</h4>
                <div className={`text-base font-bold mt-2 ${item.color}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Production Monitor */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Live Monitoring</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Real-Time OEE Monitoring</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get instant visibility into equipment effectiveness with real-time OEE dashboards. Monitor every machine, production line, and shift—see exactly where productivity is being lost and take action before it impacts output.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Live OEE Scores", desc: "Real-time Availability, Performance, and Quality scores." },
                { title: "Production Targets", desc: "Track actual vs target output in real-time." },
                { title: "Shift Comparisons", desc: "Compare OEE across shifts, runs, and operators." },
                { title: "Instant Alerts", desc: "Receive alerts when metrics drop below custom thresholds." }
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

          {/* Right Column: Live Production Monitor Mock Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-[#0B153C] text-white p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h5 className="font-display font-semibold text-sm">Live Production Monitor</h5>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-md">Live</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "CNC Machine #1", oee: "82%", status: "Running", statusColor: "bg-emerald-500" },
                  { name: "Press Line #2", oee: "68%", status: "Slow Cycle", statusColor: "bg-amber-500" },
                  { name: "Assembly #3", oee: "0%", status: "Down", statusColor: "bg-rose-500" }
                ].map((m, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-semibold">{m.name}</h6>
                      <span className="text-[9px] text-white/50">OEE Score</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold">{m.oee}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${m.statusColor} text-white`}>{m.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Big Losses */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Six Big Losses Chart Mock */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl border border-border bg-[#0F2027] text-white p-6 shadow-xl space-y-4">
              <h5 className="font-display font-semibold text-sm border-b border-white/10 pb-4">Six Big Losses Breakdown</h5>
              <div className="space-y-3">
                {[
                  { name: "Availability Losses (breakdowns, setup)", value: 72, color: "bg-rose-500" },
                  { name: "Performance Losses (minor stops, speed)", value: 54, color: "bg-amber-500" },
                  { name: "Quality Losses (scraps, rejects)", value: 24, color: "bg-emerald-500" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">TPM Optimization</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Track the Six Big Losses</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Identify and categorize the root causes of manufacturing yield and speed losses with the TPM Six Big Losses framework. Target areas like setup downtime, micro-stops, and scrap rates to recover capacity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Equipment Failures", desc: "Unplanned breakdowns and tooling failures." },
                { title: "Setup & Adjustments", desc: "Downtime during tooling changeover." },
                { title: "Idling & Minor Stops", desc: "Short stops that slip through normal logging." },
                { title: "Reduced Speed", desc: "Equipment running slower than rated capacity." }
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
        </div>
      </section>

      <ConnectedModules />
    </>
  );
}

// ─── 4. SCRAP EHS APPROVAL WORKFLOW ───
export function ScrapEhsApprovalWorkflow() {
  return (
    <>
      {/* Material Yield & Scrap Logs */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Yield Management</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Material Yield & Scrap Logs</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Maintain absolute transparency around material yield loss. Record scrap volume, discard reasons, and material batches directly on the shop floor to map yield drift.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Reject Logging", desc: "Categorize defects by reason code and operator ID." },
                { title: "Reconciliation", desc: "Verify input weight against finished and scrap totals." },
                { title: "Raw Material Traceability", desc: "Trace defects back to specific vendor supply batches." },
                { title: "Cost Allocation", desc: "Map scrap events directly to scrap financial categories." }
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

          {/* Right Column: Scrap Log Mock Dashboard */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-[#1A1A1A] text-white p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h5 className="font-display font-semibold text-sm">Material Scrap Log</h5>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded-md">Log Open</span>
              </div>

              <div className="space-y-3">
                {[
                  { part: "Plate Steel 4mm", reason: "Dimension Drift", volume: "45 kg", cost: "$180" },
                  { part: "Copper Wiring", reason: "Insulation Defect", volume: "12 m", cost: "$95" }
                ].map((log, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-semibold">{log.part}</h6>
                      <small className="text-white/50 text-[9px]">{log.reason}</small>
                    </div>
                    <div className="text-end">
                      <div className="text-xs font-bold text-rose-400">{log.volume}</div>
                      <span className="text-[9px] text-white/50">{log.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disposal Manifests & EHS Approvals */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: EHS Sign-off Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl border border-border bg-[#0B211B] text-white p-6 shadow-xl space-y-4">
              <h5 className="font-display font-semibold text-sm border-b border-white/10 pb-4">EHS Disposal Authorization</h5>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span>Waste Code:</span>
                  <span className="font-bold">E-WASTE_08B</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Authorized Method:</span>
                  <span className="font-bold text-emerald-400">Certified Recycling</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-[10px] text-white/60 space-y-1">
                  <div>Approved by: EHS Site Lead</div>
                  <div>Signature status: VERIFIED</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Compliance Routing</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Disposal Flow & Manifests</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enforce compliant environmental workflows. Route hazardous, toxic, or industrial scrap logs through multi-tier supervisor approvals to match certified waste contractors and generate regulatory audit logs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Supervisor Routing", desc: "Auto-alert supervisors when scrap exceeds set limits." },
                { title: "Waste Manifests", desc: "Attach cargo manifests and vendor receipts for regulatory audit trails." },
                { title: "OSHA/EPA Logs", desc: "Maintain structured records to verify hazardous material compliance." },
                { title: "Disposal Sign-off", desc: "Require digital inspector signature before scrap disposal." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
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

      <ConnectedModules />
    </>
  );
}

// ─── 5. SQC CONTROL CHART VISUAL ───
export function SqcChartVisual() {
  const chartData = [10.2, 10.4, 10.1, 9.9, 10.5, 10.9, 10.2, 10.0, 9.8, 10.3, 10.7, 10.4, 10.1];
  const ucl = 11.0;
  const lcl = 9.0;
  const target = 10.0;

  return (
    <>
      {/* Capability Cp/Cpk */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Process Capability</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Cp & Cpk Process capability</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Confirm your process remains centered within specification limits. Compute Cp and Cpk capability indexes dynamically to predict process drift and quality alignment before parts go out of spec.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Limits Analysis", desc: "Auto-calculate Lower and Upper Specification Limits." },
                { title: "Defect Alarms", desc: "Trigger plant floor alerts when process limits degrade." },
                { title: "Standard Sampling", desc: "Integrate measurement data automatically from test tools." },
                { title: "Quality Validation", desc: "Export statistical proofs for customer quality validation." }
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

          {/* Right Column: Process Capability Scorecard Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-[#0C1B25] text-white p-6 shadow-xl space-y-4">
              <h5 className="font-display font-semibold text-sm border-b border-white/10 pb-4">Process Scorecard</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <h4 className="text-2xl font-bold text-sky-400">1.67</h4>
                  <small className="text-[9px] text-white/50">Process Cp</small>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <h4 className="text-2xl font-bold text-sky-400">1.54</h4>
                  <small className="text-[9px] text-white/50">Process Cpk</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Charts */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Live Run Chart (X-Bar) */}
          <div className="lg:col-span-6 order-2 lg:order-1 bg-surface border border-border rounded-3xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-display font-semibold text-sm text-[color:var(--brand-purple)]">Live Run Chart (X-Bar)</h4>
              <span className="badge bg-emerald-500/10 text-emerald-500 rounded-pill text-[10px] px-2 py-0.5 font-bold">Stable</span>
            </div>

            {/* Simulated Chart Container */}
            <div className="relative border-l border-b border-border/80 h-44 flex items-end justify-between px-2 pt-6">
              {/* UCL Line */}
              <div className="absolute top-[20px] left-0 right-0 border-t border-dashed border-red-500/60 flex justify-between px-2 text-[9px] text-red-500 font-bold">
                <span>UCL (11.0)</span>
              </div>
              {/* Target Line */}
              <div className="absolute top-[50%] left-0 right-0 border-t border-dashed border-gray-400/60 flex justify-between px-2 text-[9px] text-gray-500 font-bold">
                <span>Target (10.0)</span>
              </div>
              {/* LCL Line */}
              <div className="absolute bottom-[20px] left-0 right-0 border-t border-dashed border-red-500/60 flex justify-between px-2 text-[9px] text-red-500 font-bold">
                <span>LCL (9.0)</span>
              </div>

              {/* Data points */}
              {chartData.map((val, idx) => {
                const ratio = (val - lcl) / (ucl - lcl);
                const heightPercentage = Math.max(10, Math.min(90, ratio * 100));
                return (
                  <div key={idx} className="flex flex-col items-center flex-1 group relative">
                    <div className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-[9px] px-1 py-0.5 rounded font-bold pointer-events-none z-10">
                      {val}
                    </div>
                    <div 
                      className="w-2 h-2 rounded-full bg-primary border-2 border-surface absolute"
                      style={{ bottom: `${heightPercentage}%` }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-[9px] text-muted-foreground mt-2 px-1 font-semibold">
              <span>Sample 1</span>
              <span>Sample 13</span>
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Process Variation</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Real-time SQC Control Charts</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calculate process limits dynamically and monitor variations with X-bar R and P control charts. Prevent defects before they occur by identifying out-of-control trends the moment the process drifts.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Statistical Alarms", desc: "Alert teams based on Western Electric or Nelson rules." },
                { title: "Run Chart Alarms", desc: "Flag process shifts and standard deviation anomalies instantly." },
                { title: "MIL-STD Acceptance", desc: "Implement sampling acceptance plans with full parameters." },
                { title: "Process Centering", desc: "Check if measurements center correctly around targets." }
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
        </div>
      </section>

      <ConnectedModules />
    </>
  );
}

// ─── 6. INTERACTIVE FEATURE SPOTLIGHT DIGITAL CHECKLIST ───
export function FeatureSpotlightDigitalChecklist() {
  const [highlightType, setHighlightType] = useState<string | null>(null);

  const features = [
    {
      id: "sections",
      title: "Multiple Sections",
      desc: "Organize checklist items into logical groups like Safety, Visual, Performance checks."
    },
    {
      id: "types",
      title: "Various Item Types",
      desc: "Pass/Fail, Yes/No, Numeric ranges, Text input, Multiple choice options."
    },
    {
      id: "critical",
      title: "Critical Item Markers",
      desc: "Flag mandatory items that trigger work orders or alerts when failed."
    },
    {
      id: "photo",
      title: "Photo Requirements",
      desc: "Require photo evidence for specific items to ensure documentation."
    },
    {
      id: "signature",
      title: "Digital Signatures",
      desc: "Capture inspector signatures for compliance and accountability."
    },
    {
      id: "scoring",
      title: "Custom Scoring",
      desc: "Define pass/fail thresholds and weighted scoring for overall results."
    }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FEATURE SPOTLIGHT</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Digital Inspection Checklists</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Replace paper forms with powerful digital checklists. Build comprehensive inspection templates with multiple sections, item types, and automated workflows that ensure nothing gets missed.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {features.map((f) => (
              <div 
                key={f.id}
                onMouseEnter={() => setHighlightType(f.id)}
                onMouseLeave={() => setHighlightType(null)}
                className={`flex gap-3 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  highlightType === f.id ? "border-primary bg-primary/5 shadow-sm" : "border-transparent bg-transparent"
                }`}
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <div>
                  <h4 className="font-display font-semibold text-sm">{f.title}</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[color:var(--brand-purple)] text-white text-xs font-semibold hover:bg-[color:var(--brand-purple)]/90 transition-all shadow-md">
              Create Your First Checklist
            </a>
          </div>
        </div>

        {/* Right Column: Mock Checklist UI Card */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-[#0B153C] text-white p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30">Active</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-white/10 text-white/70 rounded-md">Template</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/10 text-white/80 rounded-full">12 Items</span>
            </div>
            
            <h3 className="font-display font-bold text-base leading-tight mb-6">CHK-2024-001: Marine Main Propulsion Engine</h3>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-2 mb-6 text-center">
              <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                <div className="text-lg font-bold">12</div>
                <div className="text-[8px] text-white/50 uppercase tracking-wider font-semibold">Items</div>
              </div>
              <div className={`rounded-xl p-2 border transition-colors duration-300 ${highlightType === "critical" ? "bg-rose-500/20 border-rose-500" : "bg-white/5 border-white/5"}`}>
                <div className="text-lg font-bold text-rose-400">9</div>
                <div className="text-[8px] text-white/50 uppercase tracking-wider font-semibold">Critical</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                <div className="text-lg font-bold text-emerald-400">12</div>
                <div className="text-[8px] text-white/50 uppercase tracking-wider font-semibold">Mandatory</div>
              </div>
              <div className={`rounded-xl p-2 border transition-colors duration-300 ${highlightType === "photo" ? "bg-sky-500/20 border-sky-500" : "bg-white/5 border-white/5"}`}>
                <div className="text-lg font-bold text-sky-400">3</div>
                <div className="text-[8px] text-white/50 uppercase tracking-wider font-semibold">Photos</div>
              </div>
            </div>

            {/* Checklist Section 1 */}
            <div className={`rounded-2xl border mb-4 transition-all duration-300 ${
              highlightType === "sections" ? "bg-white/10 border-primary shadow-lg" : "bg-white/5 border-white/5"
            }`}>
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-primary text-[10px] font-bold">1</span>
                  <span className="text-xs font-bold font-display">Safety & Compliance</span>
                </div>
                <span className="text-[9px] text-white/60 font-semibold">3 Items</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                  <span className="text-xs text-white/80">Emergency STOP devices</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase transition-all duration-300 ${
                    highlightType === "critical" ? "bg-rose-500 text-white animate-pulse" : "bg-rose-500/20 text-rose-400"
                  }`}>Critical</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                  <span className="text-xs text-white/80">Fire suppression ready</span>
                  <span className="text-[9px] px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded font-bold uppercase">Critical</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                  <span className="text-xs text-white/80">IMO NOx Compliance</span>
                  <span className="text-[9px] px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded font-bold uppercase">Critical</span>
                </div>
              </div>
            </div>

            {/* Checklist Section 2 */}
            <div className="rounded-2xl border bg-white/5 border-white/5">
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-teal-500 text-[10px] font-bold">2</span>
                  <span className="text-xs font-bold font-display">Visual Inspection</span>
                </div>
                <span className="text-[9px] text-white/60 font-semibold">3 Items</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                  <span className="text-xs text-white/80">Leaks (oil, fuel, coolant)</span>
                  <span className={`grid h-6 w-6 place-items-center rounded transition-all duration-300 ${
                    highlightType === "photo" ? "bg-sky-500 text-white" : "bg-white/10 text-white/60"
                  }`}>
                    <Smartphone className="h-3 w-3" />
                  </span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                  <span className="text-xs text-white/80">Cylinder head integrity</span>
                  <span className={`grid h-6 w-6 place-items-center rounded transition-all duration-300 ${
                    highlightType === "photo" ? "bg-sky-500 text-white" : "bg-white/10 text-white/60"
                  }`}>
                    <Smartphone className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. SYNAPSE AI ASSISTANT SPOTLIGHT ───
export function FeatureSpotlightSynapseAI() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Assistant Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border bg-[#1F1735] text-white p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
                <SlidersHorizontal className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-display font-semibold text-sm">Synapse AI</h5>
                <small className="text-white/60 text-[10px]">Generating checklist...</small>
              </div>
            </div>

            {/* AI Prompt Input */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <small className="text-white/50 text-[10px] block mb-1">Your Prompt:</small>
              <p className="text-xs font-semibold leading-relaxed">
                "Create an inspection checklist for a MAN B&W 6S50ME-C marine diesel engine with IMO Tier III compliance"
              </p>
            </div>

            {/* AI Result Mock */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 space-y-3">
              <small className="text-purple-400 font-bold text-[10px] uppercase tracking-wider block">AI Generated Checklist</small>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded">Section 1: Safety & Compliance</span>
                  <ul className="mt-2 space-y-1 pl-2">
                    <li className="text-[11px] text-white/80 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Emergency stop devices</li>
                    <li className="text-[11px] text-white/80 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Fire suppression system</li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded">Section 2: Visual Inspection</span>
                  <ul className="mt-2 space-y-1 pl-2">
                    <li className="text-[11px] text-white/80 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Oil & fuel leaks</li>
                    <li className="text-[11px] text-white/80 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Cylinder head condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">AI-Powered Creation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Synapse AI Assistant</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Let artificial intelligence do the heavy lifting. Synapse AI can automatically generate comprehensive inspection checklists based on your asset type, industry standards, and compliance requirements—saving hours of manual work.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Auto-Generate Checklists", desc: "Describe your asset and get a complete checklist with sections and items." },
              { title: "Compliance Suggestions", desc: "AI recommends items based on DOT, OSHA, IMO, and other regulations." },
              { title: "Industry Best Practices", desc: "Get checklist items based on industry standards and common practices." },
              { title: "Critical Item Detection", desc: "AI automatically flags safety-critical items that require attention." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
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

// ─── 8. START NEW INSPECTION SPOTLIGHT ───
export function FeatureSpotlightStartInspection() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">Easy Workflow</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Start New Inspection</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Initiate inspections in seconds with our streamlined workflow. Select your asset, choose a checklist, configure environmental conditions, and start inspecting—all from your mobile device or desktop.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Asset Selection", desc: "Search and select from your asset database with QR code scanning." },
              { title: "Checklist Templates", desc: "Choose from saved templates or create a new checklist on the fly." },
              { title: "Location Tracking", desc: "Auto-capture GPS location or select from predefined locations." },
              { title: "Environmental Data", desc: "Record temperature, humidity, weather conditions during inspection." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Workflow Mock Card */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-[#081F1A] text-white p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <h5 className="font-display font-semibold text-sm">Start New Inspection</h5>
            </div>

            <div className="space-y-3">
              {[
                { step: "1", title: "Select Asset", desc: "Marine Engine #ME-001" },
                { step: "2", title: "Choose Checklist", desc: "Marine Propulsion Engine Checklist" },
                { step: "3", title: "Set Location", desc: "Engine Room - Deck 2" }
              ].map((s, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-[10px] font-bold">{s.step}</span>
                    <div>
                      <h6 className="text-xs font-semibold">{s.title}</h6>
                      <p className="text-[10px] text-white/60">{s.desc}</p>
                    </div>
                  </div>
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow-md transition-colors">
              Begin Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 9. AUTOMATED REMINDERS SPOTLIGHT ───
export function FeatureSpotlightReminders() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Reminders Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border bg-[#27210F] text-white p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h5 className="font-display font-semibold text-sm">Inspection Schedule</h5>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-md">This Week</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/5 p-2 rounded-xl text-center">
                <div className="text-base font-bold">24</div>
                <div className="text-[8px] text-white/50 font-semibold uppercase">Total</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl text-center">
                <div className="text-base font-bold text-emerald-400">18</div>
                <div className="text-[8px] text-white/50 font-semibold uppercase">Active</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl text-center">
                <div className="text-base font-bold text-rose-400">5</div>
                <div className="text-[8px] text-white/50 font-semibold uppercase">Due</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-rose-500/20 text-rose-400 rounded mb-1 inline-block">Today</span>
                  <h6 className="text-[11px] font-semibold">Pre-Trip Inspection</h6>
                  <p className="text-[9px] text-white/55">Truck #T-042 • John Smith</p>
                </div>
                <small className="text-[10px] text-white/60">9:00 AM</small>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded mb-1 inline-block">Tomorrow</span>
                  <h6 className="text-[11px] font-semibold">Safety Audit</h6>
                  <p className="text-[9px] text-white/55">Warehouse A • Sarah Johnson</p>
                </div>
                <small className="text-[10px] text-white/60">10:00 AM</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-yellow-500/10 text-yellow-500">
              <FileSearch className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-500">NEVER MISS AGAIN</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Automated Reminders</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Set it and forget it. Our smart reminder system ensures your team never misses a scheduled inspection. Configure daily, weekly, monthly, or custom recurrence patterns with automatic notifications.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Flexible Scheduling", desc: "Daily, weekly, monthly, quarterly, or custom recurrence patterns." },
              { title: "Multi-Channel Alerts", desc: "Push notifications, email alerts, and in-app reminders." },
              { title: "Escalation Rules", desc: "Notify supervisors if inspections are overdue or missed." },
              { title: "Calendar Integration", desc: "Sync with Google Calendar, Outlook, and other calendars." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-yellow-500 mt-1 shrink-0" />
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

// ─── 10. INCIDENT REPORTING SPOTLIGHT ───
export function FeatureSpotlightIncidents() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-red-500/10 text-red-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">Safety First</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Incident Reporting & Tracking</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Document safety incidents comprehensively with severity ratings, cost tracking, root cause analysis, and corrective actions. Ensure OSHA compliance and create a safer workplace.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Severity Ratings", desc: "Classify incidents as Low, Medium, High, or Critical severity." },
              { title: "Cost Tracking", desc: "Record estimated and actual costs associated with incidents." },
              { title: "Downtime Recording", desc: "Track equipment downtime caused by safety incidents." },
              { title: "Corrective Actions", desc: "Create and track corrective action plans with due dates." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Incident Mock Card */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-[#250C0C] text-white p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h5 className="font-display font-semibold text-sm">Incident Report</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-red-500/20 text-red-400 rounded-md">INC-2024-089</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-xs font-bold">Hydraulic Line Failure</h6>
                <small className="text-white/60 text-[9px]">Dec 23, 2025 • 2:45 PM</small>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-red-500 text-white rounded">High Priority</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-xl text-center">
                <h5 className="text-sm font-bold text-red-400">$5,000</h5>
                <small className="text-[9px] text-white/50">Estimated Cost</small>
              </div>
              <div className="bg-white/5 p-3 rounded-xl text-center">
                <h5 className="text-sm font-bold text-yellow-400">4 hrs</h5>
                <small className="text-[9px] text-white/50">Downtime</small>
              </div>
            </div>

            <div>
              <h6 className="text-[11px] font-semibold mb-1">Description</h6>
              <p className="text-[10px] text-white/80 leading-relaxed">
                Hydraulic hose burst on Excavator #EX-042 during operation. Immediate shutdown performed. No injuries reported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 11. ROOT CAUSE ANALYSIS SPOTLIGHT ───
export function FeatureSpotlightRCA() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: RCA Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border bg-[#0B2129] text-white p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h5 className="font-display font-semibold text-sm">Root Cause Analysis</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-400 rounded-md">RCA-2024-015</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/5 p-2 rounded-xl">
                <div className="text-xs font-bold text-emerald-400">3</div>
                <div className="text-[8px] text-white/50">Inspections</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl">
                <div className="text-xs font-bold text-primary">2</div>
                <div className="text-[8px] text-white/50">Work Orders</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl">
                <div className="text-xs font-bold text-rose-400">1</div>
                <div className="text-[8px] text-white/50">Incidents</div>
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-xl space-y-2">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-400">5 Whys Analysis</h6>
              <div className="space-y-1">
                <div className="text-[10px] text-white/80"><span className="text-sky-400 font-bold">1. </span> Why did the hose fail? → wear</div>
                <div className="text-[10px] text-white/80"><span className="text-sky-400 font-bold">2. </span> Why wasn't it detected? → checklist missing check</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-500/10 text-sky-400">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">Deep Insights</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Root Cause Analysis (RCA)</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Go beyond symptoms to find the real cause of failures. Link inspections, work orders, and incidents together to identify patterns and implement effective corrective actions that prevent recurrence.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Link Related Items", desc: "Connect inspections, work orders, and incidents for full picture." },
              { title: "5 Whys Analysis", desc: "Built-in methodology to drill down to root causes." },
              { title: "Corrective Actions", desc: "Create action plans with assignees and due dates." },
              { title: "Trend Analysis", desc: "Identify recurring issues and failure patterns." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-sky-500 mt-1 shrink-0" />
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

// ─── 12. INSPECTION TYPES GRID ───
export function InspectionTypesSupport() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Inspection Types</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Support for All Inspection Needs</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            OxMaint supports multiple inspection types to help you maintain compliance, ensure safety, and track asset conditions across your organization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Pre-Trip Inspections", desc: "DOT-compliant vehicle inspections before every trip." },
            { title: "Safety Audits", desc: "OSHA safety inspections and hazard identification." },
            { title: "Marine Inspections", desc: "IMO and USCG compliant vessel inspections." },
            { title: "Equipment Inspections", desc: "Routine maintenance inspections for machinery." }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-muted/30 border border-border p-5 rounded-2xl hover:shadow-soft transition-all">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                <Check className="h-5 w-5" />
              </span>
              <h4 className="font-display font-semibold text-sm mb-2">{item.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 13. CONNECTED MODULES GRID ───
export function ConnectedModules() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/50 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">INTEGRATED MODULES</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Inspections Connected to Every Module</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            OxMaint's inspection management integrates seamlessly with all maintenance modules for complete operational visibility.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: "Work Orders", desc: "Auto-generate from failures" },
            { title: "Assets", desc: "Link to equipment history" },
            { title: "Preventive Maintenance", desc: "Schedule from findings" },
            { title: "Reports & Analytics", desc: "Inspection metrics dashboards" },
            { title: "Team", desc: "Inspector assignment flows" },
            { title: "EHS Management", desc: "Safety & compliance audits" },
            { title: "Incidents", desc: "Report & track site failures" },
            { title: "Documents", desc: "Attach manuals & templates" }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-4 rounded-xl text-center hover:scale-[1.02] hover:shadow-soft transition-all">
              <h4 className="font-display font-semibold text-xs mb-1">{item.title}</h4>
              <p className="text-[9px] text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 14. REUSABLE IMAGE AND DATA GRID SECTION ───
// ─── 14. INTERACTIVE MOCK APP WIDGETS ───

// 1. Barcode Scanner Emulator
function InteractiveInventoryWidget() {
  const [scannedItems, setScannedItems] = useState([
    { id: "M-902", name: "Aluminium Alloy Rail", qty: 240, status: "Safe" },
    { id: "S-104", name: "Vibration Sensor Node", qty: 12, status: "Low" },
    { id: "C-882", name: "Hydraulic Core Seal", qty: 2, status: "Critical" }
  ]);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    if (!scanning) return;
    const timer = setInterval(() => {
      const newItems = [
        { id: "P-402", name: "Coupler Ring B", qty: 50, status: "Safe" },
        { id: "M-905", name: "Stainless Bolt Set", qty: 450, status: "Safe" },
        { id: "E-102", name: "Micro Controller Hub", qty: 8, status: "Low" }
      ];
      const randomItem = newItems[Math.floor(Math.random() * newItems.length)];
      setScannedItems(prev => {
        if (prev.find(item => item.id === randomItem.id)) return prev;
        return [randomItem, ...prev.slice(0, 2)];
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [scanning]);

  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl border border-border/40 p-5 flex flex-col justify-between font-mono text-xs text-slate-300 min-h-[340px] shadow-2xl relative overflow-hidden h-full">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          Scanner Active
        </span>
        <button 
          onClick={() => setScanning(!scanning)}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 text-[10px] uppercase font-semibold transition-colors"
        >
          {scanning ? "Pause" : "Resume"}
        </button>
      </div>

      <div className="my-4 border border-slate-800 bg-slate-950/60 rounded-xl p-4 flex flex-col justify-center items-center relative aspect-[16/6] border-dashed overflow-hidden">
        {scanning && (
          <div className="absolute left-0 w-full h-[2px] bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" style={{ top: "45%" }} />
        )}
        <QrCode className="h-8 w-8 text-slate-600 mb-1" />
        <span className="text-[8px] text-slate-500 uppercase tracking-widest">Center barcode to scan</span>
        <div className="absolute top-2 left-2 border-t border-l border-slate-600 h-2.5 w-2.5" />
        <div className="absolute top-2 right-2 border-t border-r border-slate-600 h-2.5 w-2.5" />
        <div className="absolute bottom-2 left-2 border-b border-l border-slate-600 h-2.5 w-2.5" />
        <div className="absolute bottom-2 right-2 border-b border-r border-slate-600 h-2.5 w-2.5" />
      </div>

      <div className="space-y-2 flex-1 flex flex-col justify-end">
        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Live Inventory Ledger</span>
        <div className="border border-slate-800 bg-slate-950/80 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-850 text-slate-400 text-[9px] uppercase">
                <th className="p-2">Item ID</th>
                <th className="p-2">Description</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {scannedItems.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-900/60 hover:bg-slate-900/30 transition-colors text-[10px]">
                  <td className="p-2 font-semibold text-sky-400">{item.id}</td>
                  <td className="p-2 truncate max-w-[120px]">{item.name}</td>
                  <td className="p-2 font-bold">{item.qty}</td>
                  <td className="p-2">
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${
                      item.status === 'Safe' ? 'bg-emerald-500/10 text-emerald-400' :
                      item.status === 'Low' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 2. Scrap Ledger & Diversion Metrics
function InteractiveScrapWidget() {
  const [logs, setLogs] = useState([
    { part: "Chassis Rail B", scrapKg: 14.2, reason: "Deformed Edge", time: "10 mins ago", approved: false },
    { part: "Wiring Harness X", scrapKg: 1.8, reason: "Connector Failure", time: "1 hr ago", approved: true }
  ]);

  const handleApprove = (idx: number) => {
    setLogs(prev => prev.map((log, i) => i === idx ? { ...log, approved: true } : log));
  };

  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl border border-border/40 p-5 flex flex-col justify-between font-mono text-xs text-slate-300 min-h-[340px] shadow-2xl h-full">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="text-red-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Trash2 className="h-3.5 w-3.5 text-red-500" />
          Material Reject logs
        </span>
        <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">Shift A Ledger</span>
      </div>

      <div className="my-3 grid grid-cols-3 gap-3">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[9px] text-slate-500 uppercase">Yield Loss</div>
          <div className="text-base font-bold mt-1 text-slate-200">16.0 kg</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[9px] text-slate-500 uppercase">EHS Signed</div>
          <div className="text-base font-bold mt-1 text-emerald-400">50%</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[9px] text-slate-500 uppercase">Diverted</div>
          <div className="text-base font-bold mt-1 text-sky-400">76%</div>
        </div>
      </div>

      <div className="space-y-2 flex-1 flex flex-col justify-end">
        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Pending EHS Approvals</span>
        <div className="space-y-2">
          {logs.map((log, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-slate-200">{log.part}</h4>
                <p className="text-[9px] text-slate-500 mt-0.5">{log.reason} • {log.scrapKg} kg • {log.time}</p>
              </div>
              <button
                onClick={() => handleApprove(idx)}
                disabled={log.approved}
                className={`px-3 py-1.5 rounded text-[9px] font-bold uppercase transition-all ${
                  log.approved 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-default" 
                    : "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
                }`}
              >
                {log.approved ? "Approved" : "Approve"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Operational Dashboard Display
function InteractiveLiveDashboardWidget() {
  const [data, setData] = useState({ speed: 142, uptime: 98.4, target: 842 });

  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => {
        const drift = Math.floor(Math.random() * 5) - 2;
        return {
          speed: Math.max(135, Math.min(150, prev.speed + drift)),
          uptime: Math.max(97.8, Math.min(99.9, prev.uptime + (Math.random() * 0.2 - 0.1))),
          target: Math.min(1000, prev.target + 1)
        };
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl border border-border/40 p-5 flex flex-col justify-between font-mono text-xs text-slate-300 min-h-[340px] shadow-2xl h-full">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="text-sky-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Activity className="h-3.5 w-3.5 text-sky-500" />
          Live Line Target Dashboard
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <div className="my-4 grid grid-cols-2 gap-4">
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <div className="text-[10px] text-slate-500 uppercase">Operating Speed</div>
          <div className="text-2xl font-bold mt-1 text-slate-200 flex items-baseline gap-1">
            {data.speed}
            <span className="text-[10px] text-slate-500 font-normal">UPM</span>
          </div>
        </div>
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <div className="text-[10px] text-slate-500 uppercase">Shift Uptime</div>
          <div className="text-2xl font-bold mt-1 text-emerald-400 flex items-baseline gap-1">
            {data.uptime.toFixed(1)}
            <span className="text-[10px] text-slate-500 font-normal">%</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-end">
        <div>
          <div className="flex justify-between text-[10px] text-slate-500 mb-1">
            <span>Shift Target Progress</span>
            <span className="font-bold text-slate-300">{data.target} / 1000 Parts</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-850">
            <div className="h-full bg-sky-500 transition-all duration-1000" style={{ width: `${(data.target / 1000) * 100}%` }} />
          </div>
        </div>
        
        <div className="border border-slate-800 bg-slate-950/60 rounded-xl p-3">
          <div className="flex justify-between items-center text-[9px] text-slate-500">
            <span>Line Alert Logs</span>
            <span>Standard Run</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Line 2 speed optimized to ideal target cycle.
          </p>
        </div>
      </div>
    </div>
  );
}

// 4. OEE Analytics Interactive Breakdown
function InteractiveOeeWidget() {
  const [a, setA] = useState(90);
  const [p, setP] = useState(85);
  const [q, setQ] = useState(98);

  const oee = ((a / 100) * (p / 100) * (q / 100) * 100).toFixed(1);

  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl border border-border/40 p-5 flex flex-col justify-between font-mono text-xs text-slate-300 min-h-[340px] shadow-2xl h-full">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="text-purple-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5 text-purple-500" />
          Interactive OEE calculator
        </span>
        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
          parseFloat(oee) >= 85 ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
        }`}>
          {parseFloat(oee) >= 85 ? "World Class" : "Standard"}
        </span>
      </div>

      <div className="my-3 flex items-center justify-center py-2 bg-slate-950 border border-slate-900 rounded-xl">
        <div className="text-center">
          <div className="text-[10px] text-slate-500 uppercase">Calculated OEE</div>
          <div className="text-3xl font-bold mt-1 text-slate-100">{oee}%</div>
        </div>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-end">
        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-400">Availability (Uptime)</span>
            <span className="font-bold text-slate-200">{a}%</span>
          </div>
          <input 
            type="range" min="50" max="100" value={a} onChange={(e) => setA(parseInt(e.target.value))}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-400">Performance (Speed)</span>
            <span className="font-bold text-slate-200">{p}%</span>
          </div>
          <input 
            type="range" min="50" max="100" value={p} onChange={(e) => setP(parseInt(e.target.value))}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-400">Quality (Yield)</span>
            <span className="font-bold text-slate-200">{q}%</span>
          </div>
          <input 
            type="range" min="50" max="100" value={q} onChange={(e) => setQ(parseInt(e.target.value))}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>
      </div>
    </div>
  );
}

// 5. Continuous Process Verification Batch logs
function InteractiveCpvWidget() {
  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl border border-border/40 p-5 flex flex-col justify-between font-mono text-xs text-slate-300 min-h-[340px] shadow-2xl h-full">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="text-sky-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Database className="h-3.5 w-3.5 text-sky-500" />
          Continuous Verification Batch logs
        </span>
        <span className="text-[10px] text-slate-500 uppercase">Governed Flow</span>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-end">
        {[
          { id: "BATCH #B2849", step: "Processing", status: "Out-of-Spec", color: "text-red-400 bg-red-500/10 border-red-500/20" },
          { id: "BATCH #B2848", step: "APQR Approved", status: "Verified", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
          { id: "BATCH #B2847", step: "Released", status: "Verified", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" }
        ].map((batch, idx) => (
          <div key={idx} className="bg-slate-950 border border-slate-850 rounded-xl p-3 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-slate-200 text-xs">{batch.id}</h4>
              <p className="text-[9px] text-slate-500 mt-0.5">{batch.step} • 14 Critical Parameters Logged</p>
            </div>
            <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase border ${batch.color}`}>
              {batch.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 6. Interactive Checklist App Viewport
function InteractiveMobileInspectionWidget() {
  const [items, setItems] = useState([
    { label: "Check hydraulic pressure levels", checked: true },
    { label: "Verify safety gate interlock loop", checked: false },
    { label: "Confirm analog temperature dials", checked: false }
  ]);

  const handleToggle = (idx: number) => {
    setItems(prev => prev.map((item, i) => i === idx ? { ...item, checked: !item.checked } : item));
  };

  const progress = Math.round((items.filter(i => i.checked).length / items.length) * 100);

  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl border border-border/40 p-5 flex flex-col justify-between font-mono text-xs text-slate-300 min-h-[340px] shadow-2xl h-full">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Smartphone className="h-3.5 w-3.5 text-emerald-500" />
          SOP Guided Field App
        </span>
        <span className="text-[9px] text-slate-500">Device View</span>
      </div>

      <div className="my-3 bg-slate-950 border border-slate-900 rounded-xl p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(idx)}
                className="h-4 w-4 bg-slate-900 border-slate-800 text-emerald-500 rounded focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
              />
              <span className={`text-[10px] text-slate-300 ${item.checked ? "line-through text-slate-500" : ""}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-900">
          <div className="flex justify-between text-[9px] text-slate-500 mb-1">
            <span>Inspection Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 15. REUSABLE IMAGE AND DATA GRID SECTION ───
export function IndustrialImageGridSection({ slug }: { slug: string }) {
  const configs: Record<string, {
    title: string;
    lede: string;
    imageSrc: string;
    accent: string;
    cards: { title: string; desc: string; imp: string }[];
  }> = {
    "ai-visual-inspection": {
      title: "Computer Vision Defect Detection AI",
      lede: "Deploy edge-inference cameras to inspect products at line-speed, identifying visible deviations with absolute consistency.",
      imageSrc: "/homeCaseStudy/industrial-visual-inspection.png",
      accent: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      cards: [
        { title: "Label & Packaging Verification", desc: "Scan product barcodes and labels to verify correct orientation, placement, and alignment.", imp: "Reduces product escapes." },
        { title: "Surface Defect Identification", desc: "Detect dents, scratches, missing components, or contamination instantly under factory lighting.", imp: "Maintains brand consistency." },
        { title: "Contamination Detection", desc: "Identify foreign substances on components, packaging, or product containers.", imp: "Ensures safety compliance." },
        { title: "Line-Speed Inference", desc: "Process frames instantly at up to 60 FPS using edge computing platforms.", imp: "Keeps cycle time optimal." }
      ]
    },
    "statistical-ai": {
      title: "Statistical Process Intelligence",
      lede: "Convert raw variables and process histories into plain-language actions that keep production stable.",
      imageSrc: "/homeCaseStudy/industrial-statistical-ai.png",
      accent: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      cards: [
        { title: "Multi-Variable Analysis", desc: "Compare production parameters (temperature, pressure, speed) to find yield correlations.", imp: "Uncovers root causes." },
        { title: "Plain-Language Insights", desc: "Convert complex raw stats into clear actionable text directions for site operators.", imp: "Empowers frontline decisions." },
        { title: "Trend Signals", desc: "Identify hidden signals and drifts before they degrade into true defects.", imp: "Saves raw material costs." },
        { title: "Cross-Site Standardisation", desc: "Use consistent mathematical models to compare performance across lines and plants.", imp: "Ensures corporate parity." }
      ]
    },
    "in-process-quality-spc": {
      title: "Digitized Quality Intelligence",
      lede: "Implement shop-floor SPC controls to identify process drift before batches fail quality checks.",
      imageSrc: "/homeCaseStudy/industrial-spc-quality.png",
      accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      cards: [
        { title: "Digital Control Plans", desc: "Set up check frequencies, numeric limits, and supervisor approval gates.", imp: "Stops operator oversight." },
        { title: "Live Control Limits", desc: "Compute upper and lower control limits dynamically as operators submit checks.", imp: "Prevents defect batches." },
        { title: "Automatic Escalations", desc: "Alert engineering leads instantly when parameters drift out of control limits.", imp: "Minimizes response times." },
        { title: "Audit Trail Logging", desc: "Maintain permanent, tamper-proof logs of all quality audits and results.", imp: "Ensures 100% compliance audit readiness." }
      ]
    },
    "cpv-apqr": {
      title: "Continuous Verification & Compliance",
      lede: "Unify quality reviews, exceptions, and batch histories into a single governed report pipeline.",
      imageSrc: "/homeCaseStudy/industrial-cpv-apqr.png",
      accent: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      cards: [
        { title: "Periodic Reviews (APQR)", desc: "Consolidate batch records, deviations, and actions into one report dashboard.", imp: "Reduces reporting labor." },
        { title: "Critical Parameter Tracking", desc: "Monitor CCPs and CQAs continuously to verify process safety.", imp: "Maintains process validation." },
        { title: "Exception Management", desc: "Route batch exceptions to supervisors with resolution logs.", imp: "Speeds up batch releases." },
        { title: "Trend Analysis Reports", desc: "Identify long-term drifts across batch history over months or years.", imp: "Informs quality reviews." }
      ]
    },
    "gauge-msa": {
      title: "Measurement Systems Reliability",
      lede: "Manage instrument calibrations and run operator consistency studies with full compliance logs.",
      imageSrc: "/homeCaseStudy/industrial-gauge-msa.png",
      accent: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      cards: [
        { title: "Central Gauge Register", desc: "Register all calipers, scales, micrometers with locations, owners, and status.", imp: "Eliminates lost tools." },
        { title: "Calibration Schedules", desc: "Auto-notify tools department when instruments are due or overdue for testing.", imp: "Prevents out-of-cal errors." },
        { title: "Gauge R&R Studies", desc: "Calculate operator variation vs gauge variation automatically on studies.", imp: "Validates measurements." },
        { title: "Quarantine Flow", desc: "Instantly lock out failing tools in the system to prevent usage on production lines.", imp: "Maintains data trust." }
      ]
    },
    "inspection-management": {
      title: "AI-Powered Inspection Management",
      lede: "Automate frontline checklists, standardise incident reports, and maintain regulatory compliance.",
      imageSrc: "/homeCaseStudy/industrial-spc-quality.png",
      accent: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      cards: [
        { title: "Smart Digital Checklists", desc: "Build structured checks with Pass/Fail controls and photo proofs.", imp: "Replaces manual paperwork." },
        { title: "Incident Tracking Logs", desc: "Standardise shift incident reporting and route remediation tickets.", imp: "Closes safety feedback loops." },
        { title: "Missed Inspection Reminders", desc: "Track completion status and trigger notifications for late checklists.", imp: "Maintains schedule adherence." },
        { title: "DMAIC Investigation Templates", desc: "Analyze inspection failures with structured troubleshooting templates.", imp: "Prevents repeating issues." }
      ]
    },
    "continuous-improvement": {
      title: "Idea Pipeline & Kaizen Management",
      lede: "Link shop floor improvement suggestions to concrete quality, delivery, and cost outcomes.",
      imageSrc: "/homeCaseStudy/industrial-statistical-ai.png",
      accent: "bg-red-500/10 text-red-400 border-red-500/30",
      cards: [
        { title: "Central Idea Capture", desc: "Empower shop floor teams to submit kaizens and efficiency suggestions.", imp: "Boosts operator engagement." },
        { title: "Benefit Metrics", desc: "Link actions directly to plant safety, yield, throughput, or cost outcomes.", imp: "Proves improvement ROI." },
        { title: "RCA Problem Solving", desc: "Guide teams through 5-Whys or Fishbone diagrams on one digital card.", imp: "Solves root failure causes." },
        { title: "Action Tracker", desc: "Assign follow-up tasks to engineers with due dates and alerts.", imp: "Ensures idea execution." }
      ]
    },
    "maintenance-management": {
      title: "Preventive Maintenance & CMMS",
      lede: "Transition operations from emergency breakdown repairs to organized, schedule-adherent maintenance.",
      imageSrc: "/homeCaseStudy/industrial-maintenance.png",
      accent: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      cards: [
        { title: "Work Order Management", desc: "Assign, prioritize, and close maintenance jobs with full asset context.", imp: "Minimizes downtime delays." },
        { title: "Asset History Logs", desc: "Track MTBF and MTTR metrics automatically against each equipment ID.", imp: "Highlights bad actors." },
        { title: "Spare Parts Allocation", desc: "Check stores availability and link spare parts usage to work orders.", imp: "Prevents job delays." },
        { title: "Condition Monitoring", desc: "Trigger work orders dynamically from vibration, temperature, or run hours data.", imp: "Moves teams to predictive rhythm." }
      ]
    },
    "doe-experiments-management": {
      title: "Process Optimization Experiments",
      lede: "Conduct design of experiments trials under plant conditions with structured engineering logs.",
      imageSrc: "/homeCaseStudy/industrial-doe-experiments.png",
      accent: "bg-pink-500/10 text-pink-400 border-pink-500/30",
      cards: [
        { title: "Factorial Experiment Plans", desc: "Design trial runs with varied settings (speed, feed, heat) to map outputs.", imp: "Finds sweet spot parameters." },
        { title: "Standard Execution Guides", desc: "Instruct line operators on specific trial conditions to avoid setup bias.", imp: "Validates test criteria." },
        { title: "Knowledge Base Library", desc: "Retain test histories so engineering learnings aren't lost to turnover.", imp: "Preserves R&D assets." },
        { title: "Response Surface Mapping", desc: "Plot yield results dynamically to identify optimal process windows.", imp: "Maximizes yield gains." }
      ]
    },
    "live-dashboards": {
      title: "Visual Plant Management",
      lede: "Unify machine outputs, quality exceptions, and open work orders in a single visual grid.",
      imageSrc: "/homeCaseStudy/industrial-live-dashboards.png",
      accent: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      cards: [
        { title: "Shop Floor Dials", desc: "Display OEE and line speeds on Andon boards for immediate team visibility.", imp: "Improves shift ownership." },
        { title: "Real-time Escalations", desc: "Alert shift leaders immediately when throughput targets drop below line limits.", imp: "Shortens response lag." },
        { title: "Role-based Dashboards", desc: "Tailor screens for operators, engineers, supervisors, and plant managers.", imp: "Clarifies target tasks." },
        { title: "Unified Data Streams", desc: "Sync machine outputs, quality logs, and open work orders in one grid.", imp: "Unifies team picture." }
      ]
    },
    "production-management": {
      title: "Production Control & Execution",
      lede: "Track shifts, target vs actual outputs, and downtime reason codes directly at the workstation.",
      imageSrc: "/homeCaseStudy/industrial-live-dashboards.png",
      accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      cards: [
        { title: "Digital Shift Logging", desc: "Log jobs, batches, outputs, and scraps at the end of each shift.", imp: "Eliminates paper sheets." },
        { title: "Downtime Categorisation", desc: "Require reason codes for all machine stoppages to map bottlenecks.", imp: "Identifies loss causes." },
        { title: "Target vs Actual", desc: "Compare scheduled volumes against live output with variance alerts.", imp: "Keeps shipping on schedule." },
        { title: "ERP Handoff", desc: "Push production outputs and batch completions directly to corporate ERP.", imp: "Speeds up billing." }
      ]
    },
    "data-extractor": {
      title: "Automated Document Intelligence",
      lede: "Parse supplier quality sheets, PDFs, and invoices into databases automatically.",
      imageSrc: "/homeCaseStudy/industrial-data-extractor.png",
      accent: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      cards: [
        { title: "Template Matching", desc: "Parse supplier quality certificates, material sheets, and invoices.", imp: "Reduces data entry labor." },
        { title: "Numeric Validation", desc: "Extract numbers, verify decimals, and compare values against bounds.", imp: "Stops manual typos." },
        { title: "Automatic Entry Routing", desc: "Send extracted info into quality databases or inventory registers.", imp: "Speeds up document flows." },
        { title: "Anomaly Flags", desc: "Flag documents that fail to match formats or have out-of-spec readings.", imp: "Stops bad supplier stock." }
      ]
    },
    "inventory-management": {
      title: "Warehouse Stores Control",
      lede: "Track material receipts, locations, cycle counts, and reorder alerts in real-time.",
      imageSrc: "/homeCaseStudy/industrial-inventory.png",
      accent: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      cards: [
        { title: "Scan receipts & issues", desc: "Use mobile scanner apps to check material in and out of storage.", imp: "Closes inventory gaps." },
        { title: "Real-time Stock Levels", desc: "Monitor stock levels, set reorder points, and auto-notify buyer teams.", imp: "Prevents line stoppages." },
        { title: "Batch & Lot Tracking", desc: "Link material lots to manufacturing runs for full downstream tracking.", imp: "Secures batch recalls." },
        { title: "Stores Audits", desc: "Standardize inventory audits with structured cycle-counting checks.", imp: "Keeps balance books clean." }
      ]
    },
    "mobile-ai-inspection": {
      title: "Mobile Field App & Guided Capture",
      lede: "Eliminate checklist evaluation differences and log readings instantly with on-device OCR.",
      imageSrc: "/homeCaseStudy/industrial-mobile-inspection.png",
      accent: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      cards: [
        { title: "Guided Inspection App", desc: "Display visual reference images for checkmarks to ensure consistency.", imp: "Prevents operator bias." },
        { title: "Analog Dial OCR Scanner", desc: "Extract dial readings from pressure gauges or thermometers instantly.", imp: "Speeds up logging." },
        { title: "Geo & Time Stamp Logs", desc: "Capture GPS coordinates, timestamp, and user ID to verify presence.", imp: "Ensures compliance audit trail." },
        { title: "Offline Sync", desc: "Store checks locally and upload when network connectivity returns.", imp: "Enables remote field use." }
      ]
    },
    "oee-analytics": {
      title: "Manufacturing OEE Intelligence",
      lede: "Deconstruct equipment run histories live to prioritize setup and quality loss solutions.",
      imageSrc: "/homeCaseStudy/industrial-oee.png",
      accent: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      cards: [
        { title: "Availability Calculator", desc: "Log downtime events to compute planned vs actual running time.", imp: "Tracks machinery uptime." },
        { title: "Performance Monitoring", desc: "Compare speed cycles against ideal standards to spot micro-stops.", imp: "Recovers capacity limits." },
        { title: "Quality Yield Tracking", desc: "Calculate scrap rate ratios by batch or shift.", imp: "Minimizes material waste." },
        { title: "Six Big Losses Charting", desc: "Group loss logs into TPM categories for structured prioritization.", imp: "Directs improvement efforts." }
      ]
    },
    "scraps-inventory": {
      title: "Material Scrap Compliance",
      lede: "Log rejects at source, reconcile materials, and secure certified landfill diversion trails.",
      imageSrc: "/homeCaseStudy/industrial-scraps.png",
      accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      cards: [
        { title: "Shop Floor Scrap Logging", desc: "Require operators to input weight, cause, and photo proof for scrap.", imp: "Increases accountability." },
        { title: "Toxic Disposal Manifests", desc: "Enforce digital sign-offs and contractor log sheets for waste.", imp: "Secures EHS audit ready." },
        { title: "Yield Loss Analytics", desc: "Pivot scrap metrics by line, batch, and operator.", imp: "Pinpoints process leaks." },
        { title: "Landfill Diversion Goals", desc: "Monitor segregation rates for recyclable material streams.", imp: "Measures sustainability progress." }
      ]
    },
    "statistical-quality-control": {
      title: "Statistical Process Control",
      lede: "Monitor Cp/Cpk limits live and prevent defects with automated control chart alarms.",
      imageSrc: "/homeCaseStudy/industrial-statistical-ai.png",
      accent: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      cards: [
        { title: "Cp/Cpk Capability Indices", desc: "Monitor process boundaries to verify alignment with targets.", imp: "Prevents drift defects." },
        { title: "X-bar Control Charts", desc: "Plot measurements automatically with instant out-of-control alarms.", imp: "Stops lines before errors scale." },
        { title: "MIL-STD Acceptance Plans", desc: "Standardize sampling numbers for incoming material inspects.", imp: "Reduces inspection costs." },
        { title: "Pareto Defect Charts", desc: "Consolidate failure reason codes to focus engineering investigations.", imp: "Speeds up problem resolution." }
      ]
    }
  };

  const current = configs[slug];
  if (!current) return null;

  const renderVisual = () => {
    return (
      <div className="w-full h-full overflow-hidden rounded-2xl relative">
        <img
          src={current.imageSrc}
          alt={current.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    );
  };

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: 4-card feature list */}
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className={`px-3.5 py-1 text-xs font-semibold rounded-full uppercase border ${current.accent}`}>
                FEATURES
              </span>
              <h3 className="text-2xl font-display font-bold">{current.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {current.lede}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {current.cards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-surface-muted/40 p-5 space-y-2 hover:scale-[1.02] transition-transform">
                  <h4 className="text-xs font-semibold">{c.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{c.desc}</p>
                  <p className="text-[10px] text-primary font-medium">Improvement: {c.imp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Section Image or Custom Live App Widget */}
          <div className="lg:col-span-6 lg:order-1">
            <div className="rounded-3xl border border-border overflow-hidden bg-surface-muted/30 p-3 shadow-lg aspect-[4/3] relative">
              {renderVisual()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 15. INDIVIDUAL SOLUTIONS WRAPPERS ───

export function GenericFeatureSpotlight1({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const spotlight = data.spotlight1;
  const card = spotlight.card;
  const [highlightType, setHighlightType] = useState<string | null>(null);

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{spotlight.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{spotlight.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {spotlight.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {spotlight.features.map((f) => (
              <div 
                key={f.id}
                onMouseEnter={() => setHighlightType(f.id)}
                onMouseLeave={() => setHighlightType(null)}
                className={`flex gap-3 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  highlightType === f.id ? "border-primary bg-primary/5 shadow-sm" : "border-transparent bg-transparent"
                }`}
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <div>
                  <h4 className="font-display font-semibold text-sm">{f.title}</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[color:var(--brand-purple)] text-white text-xs font-semibold hover:bg-[color:var(--brand-purple)]/90 transition-all shadow-md">
              {spotlight.buttonText}
            </a>
          </div>
        </div>

        {/* Right Column: Mock Card UI */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-[#0B153C] text-white p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30">{card.badge}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-white/10 text-white/70 rounded-md">{card.templateLabel}</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/10 text-white/80 rounded-full">{card.itemsCount}</span>
            </div>
            
            <h3 className="font-display font-bold text-base leading-tight mb-6">{card.title}</h3>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-2 mb-6 text-center">
              {card.metrics.map((m, idx) => {
                const isHighlighted = highlightType && m.highlightId === highlightType;
                return (
                  <div key={idx} className={`rounded-xl p-2 border transition-all duration-300 ${
                    isHighlighted ? (m.bgClass || "bg-primary/20 border-primary scale-105") : "bg-white/5 border-white/5"
                  }`}>
                    <div className={`text-base font-bold ${m.colorClass}`}>{m.value}</div>
                    <div className="text-[8px] text-white/50 uppercase tracking-wider font-semibold">{m.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Section 1 */}
            <div className={`rounded-2xl border mb-4 transition-all duration-300 ${
              highlightType === "sections" ? "bg-white/10 border-primary shadow-lg" : "bg-white/5 border-white/5"
            }`}>
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-primary text-[10px] font-bold">{card.section1.num}</span>
                  <span className="text-xs font-bold font-display">{card.section1.title}</span>
                </div>
              </div>
              <div className="p-3 space-y-2">
                {card.section1.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-xs text-white/80">{item.label}</span>
                    {item.badge && (
                      <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase transition-all duration-300 ${
                        highlightType === "critical" ? "bg-rose-500 text-white animate-pulse" : "bg-rose-500/20 text-rose-400"
                      }`}>{item.badge}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl border bg-white/5 border-white/5">
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-teal-500 text-[10px] font-bold">{card.section2.num}</span>
                  <span className="text-xs font-bold font-display">{card.section2.title}</span>
                </div>
              </div>
              <div className="p-3 space-y-2">
                {card.section2.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-xs text-white/80">{item.label}</span>
                    {item.hasPhoto && (
                      <span className={`grid h-6 w-6 place-items-center rounded transition-all duration-300 ${
                        highlightType === "photo" ? "bg-sky-500 text-white" : "bg-white/10 text-white/60"
                      }`}>
                        <Smartphone className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export function GenericWorkflowSteps({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const wf = data.workflow;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{wf.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">{wf.title}</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            {wf.desc}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr mb-8">
          {wf.steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? "bg-foreground text-background border-foreground shadow-md -translate-y-1" 
                    : "bg-surface hover:bg-surface-muted border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold h-6 w-6 rounded-full grid place-items-center ${
                    isActive ? "bg-background text-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    {step.num}
                  </span>
                  <ChevronRight className={`h-3 w-3 ${isActive ? "text-background" : "text-muted-foreground"}`} />
                </div>
                <h4 className="font-display font-bold text-xs mt-3 leading-tight">{step.title}</h4>
                <p className={`text-[9px] mt-1 ${isActive ? "text-background/80" : "text-muted-foreground"}`}>{step.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card */}
        <div className="bg-surface rounded-3xl border border-border p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-md uppercase tracking-wider">
                Step {wf.steps[activeStep].num} Detail
              </span>
              <h3 className="font-display font-bold text-xl">{wf.steps[activeStep].title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{wf.steps[activeStep].desc}</p>
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-xs font-semibold hover:bg-foreground/90 transition-all shadow-md shrink-0">
              Deploy This Flow <ChevronRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GenericAISpotlight({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const ai = data.aiSpotlight;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Assistant Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border bg-[#1F1735] text-white p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-display font-semibold text-sm">Synapse AI</h5>
                <small className="text-white/60 text-[10px]">Processing request...</small>
              </div>
            </div>

            {/* AI Prompt Input */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <small className="text-white/50 text-[10px] block mb-1">Your Prompt:</small>
              <p className="text-xs font-semibold leading-relaxed">
                "{ai.prompt}"
              </p>
            </div>

            {/* AI Result Mock */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 space-y-3">
              <small className="text-purple-400 font-bold text-[10px] uppercase tracking-wider block">{ai.generatedTitle}</small>
              <div className="space-y-3">
                {ai.sections.map((sect, idx) => (
                  <div key={idx}>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${sect.bgClass} ${sect.textClass}`}>{sect.title}</span>
                    <ul className="mt-2 space-y-1 pl-2">
                      {sect.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-[11px] text-white/80 flex items-center gap-2">
                          <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">{ai.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{ai.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {ai.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {ai.features.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
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

export function GenericStartWorkflow({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const sw = data.startWorkflow;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">{sw.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{sw.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {sw.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {sw.features.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Workflow Mock Card */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-[#081F1A] text-white p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <h5 className="font-display font-semibold text-sm">{sw.cardTitle}</h5>
            </div>

            <div className="space-y-3">
              {sw.steps.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-[10px] font-bold">{s.step}</span>
                    <div>
                      <h6 className="text-xs font-semibold">{s.title}</h6>
                      <p className="text-[10px] text-white/60">{s.desc}</p>
                    </div>
                  </div>
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow-md transition-colors">
              {sw.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GenericReminders({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const rem = data.reminders;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Reminders Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border bg-[#27210F] text-white p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h5 className="font-display font-semibold text-sm">{rem.cardTitle}</h5>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-md">{rem.badgeText}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {rem.stats.map((s, idx) => (
                <div key={idx} className="bg-white/5 p-2 rounded-xl text-center">
                  <div className={`text-base font-bold ${s.colorClass}`}>{s.value}</div>
                  <div className="text-[8px] text-white/50 font-semibold uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {rem.schedule.map((sch, idx) => (
                <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded mb-1 inline-block ${sch.tagColorClass}`}>{sch.tag}</span>
                    <h6 className="text-[11px] font-semibold">{sch.title}</h6>
                    <p className="text-[9px] text-white/55">{sch.details}</p>
                  </div>
                  <small className="text-[10px] text-white/60">{sch.time}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-yellow-500/10 text-yellow-500">
              <Clock className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-500">{rem.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{rem.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {rem.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {rem.features.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-yellow-500 mt-1 shrink-0" />
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

export function GenericIncidents({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const inc = data.incidents;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-red-500/10 text-red-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">{inc.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{inc.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {inc.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {inc.features.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Incident Mock Card */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-[#250C0C] text-white p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h5 className="font-display font-semibold text-sm">{inc.cardTitle}</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-red-500/20 text-red-400 rounded-md">{inc.ticketId}</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-xs font-bold">{inc.titleText}</h6>
                <small className="text-white/60 text-[9px]">{inc.dateText}</small>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-red-500 text-white rounded">{inc.priorityBadge}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {inc.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/5 p-3 rounded-xl text-center">
                  <h5 className={`text-sm font-bold ${m.colorClass}`}>{m.value}</h5>
                  <small className="text-[9px] text-white/50">{m.label}</small>
                </div>
              ))}
            </div>

            <div>
              <h6 className="text-[11px] font-semibold mb-1">Details</h6>
              <p className="text-[10px] text-white/80 leading-relaxed">
                {inc.descriptionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GenericRCA({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const rca = data.rca;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: RCA Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border bg-[#0B2129] text-white p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h5 className="font-display font-semibold text-sm">{rca.cardTitle}</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-400 rounded-md">{rca.ticketId}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {rca.stats.map((s, idx) => (
                <div key={idx} className="bg-white/5 p-2 rounded-xl">
                  <div className={`text-xs font-bold ${s.colorClass}`}>{s.value}</div>
                  <div className="text-[8px] text-white/50">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 p-3 rounded-xl space-y-2">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-400">5 Whys Trace</h6>
              <div className="space-y-1.5">
                {rca.whys.map((why, idx) => {
                  const parts = why.split("→");
                  return (
                    <div key={idx} className="text-[10px] text-white/80">
                      <span className="text-sky-400 font-bold">{parts[0]}</span>
                      {parts[1] && ` → ${parts[1]}`}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-500/10 text-sky-400">
              <FileSearch className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">{rca.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{rca.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {rca.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {rca.features.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-sky-500 mt-1 shrink-0" />
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

export function GenericTypesSupport({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const types = data.types;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{types.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">{types.title}</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            {types.desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.items.map((item, idx) => (
            <div key={idx} className="bg-surface-muted/30 border border-border p-5 rounded-2xl hover:shadow-soft transition-all">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                <Check className="h-5 w-5" />
              </span>
              <h4 className="font-display font-semibold text-sm mb-2">{item.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GenericConnectedModules({ slug }: { slug: string }) {
  const data = getIndustrialExtraContent(slug);
  const mods = data.modules;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/50 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{mods.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">{mods.title}</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            {mods.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mods.items.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-4 rounded-xl text-center hover:scale-[1.02] hover:shadow-soft transition-all">
              <h4 className="font-display font-semibold text-xs mb-1">{item.title}</h4>
              <p className="text-[9px] text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GenericIndustrialExtraSection({ slug }: { slug: string }) {
  return (
    <>
      <GenericFeatureSpotlight1 slug={slug} />
      <GenericWorkflowSteps slug={slug} />
      <GenericAISpotlight slug={slug} />
      <GenericStartWorkflow slug={slug} />
      <GenericReminders slug={slug} />
      <GenericIncidents slug={slug} />
      <GenericRCA slug={slug} />
      <GenericTypesSupport slug={slug} />
      <GenericConnectedModules slug={slug} />
    </>
  );
}

export function AiVisualInspectionExtraSection() {
  return <IndustrialImageGridSection slug="ai-visual-inspection" />;
}

export function StatisticalAiExtraSection() {
  return <IndustrialImageGridSection slug="statistical-ai" />;
}

export function InProcessQualitySpcExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="in-process-quality-spc" />
      <SqcChartVisual />
    </>
  );
}

export function CpvApqrExtraSection() {
  return <IndustrialImageGridSection slug="cpv-apqr" />;
}

export function GaugeMsaExtraSection() {
  return <IndustrialImageGridSection slug="gauge-msa" />;
}

export function ContinuousImprovementExtraSection() {
  return <IndustrialImageGridSection slug="continuous-improvement" />;
}

export function MaintenanceManagementExtraSection() {
  return <IndustrialImageGridSection slug="maintenance-management" />;
}

export function DoeExperimentsManagementExtraSection() {
  return <IndustrialImageGridSection slug="doe-experiments-management" />;
}

export function LiveDashboardsExtraSection() {
  return <IndustrialImageGridSection slug="live-dashboards" />;
}

export function ProductionManagementExtraSection() {
  return <IndustrialImageGridSection slug="production-management" />;
}

export function DataExtractorExtraSection() {
  return <IndustrialImageGridSection slug="data-extractor" />;
}

export function InventoryManagementExtraSection() {
  return <IndustrialImageGridSection slug="inventory-management" />;
}

export function MobileAiExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="mobile-ai-inspection" />
      <MobileAiGuidedWorkflow />
    </>
  );
}

export function OeeAnalyticsExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="oee-analytics" />
      <OeeLossesGrid />
    </>
  );
}

export function ScrapsInventoryExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="scraps-inventory" />
      <ScrapEhsApprovalWorkflow />
    </>
  );
}

export function StatisticalQualityControlExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="statistical-quality-control" />
      <SqcChartVisual />
    </>
  );
}

export function InspectionManagementExtraSection() {
  return <IndustrialImageGridSection slug="inspection-management" />;
}



