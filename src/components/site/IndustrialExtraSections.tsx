import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
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
  Eye,
  Users,
  Play,
  Pause,
  RefreshCw,
  Database,
  Package,
  Clock,
  Gauge,
  Brain,
  TrendingUp,
  Sparkles,
  Lightbulb,
  Award,
  Plus,
  Settings,
  Layers,
  Ruler,
  ClipboardCheck,
  LineChart,
  X
} from "lucide-react";
import { brandIconGradient, accentAt } from "@/lib/brand-colors";
import { getIndustrialExtraContent } from "@/lib/industrial-extra-content";

// ─── SHARED: GLOW CARD WRAPPER ───
// Replicates the mouse-follow radial glow from CaseStudyCard, applied to any
// glass-card widget on the industrial solution pages.
function GlowCard({
  accent = "var(--primary)",
  className = "",
  children,
  style,
}: {
  accent?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-border backdrop-blur-md text-foreground shadow-xl glass-card transition-all duration-500 hover:-translate-y-1 ${className}`}
      style={{ "--card-accent": accent, ...style } as React.CSSProperties}
    >
      {/* Static corner glow */}
      <div
        className="pointer-events-none absolute -top-14 -right-14 h-40 w-40 rounded-full opacity-15 blur-3xl"
        style={{ background: accent }}
      />
      {/* Mouse-follow radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, ${accent} 18%, transparent), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

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
            <div className="rounded-3xl border border-border bg-slate-950 p-4 shadow-2xl relative aspect-[4/3] flex flex-col justify-between overflow-hidden">
              {/* Indian factory mobile inspection feed background */}
              <img 
                src="/homeCaseStudy/indian-mobile-inspection.jpg" 
                alt="Indian Mobile Field Inspection Feed" 
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-slate-950/20 z-0" />

              {/* Camera Header Overlay */}
              <div className="flex justify-between items-center text-white text-[10px] z-10 bg-black/50 p-2 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono">CAM_SOURCE: LENS_01</span>
                </div>
                <span className="font-mono">FPS: 30</span>
              </div>

              {/* Anomaly Bounding Box Visual */}
              <div className="absolute inset-0 grid place-items-center z-10">
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
              <div className="flex justify-between items-center text-muted-foreground text-opacity-90 text-[10px] z-10 bg-black/50 p-2 rounded-xl backdrop-blur-sm">
                <span>ZOOM: 1.0X</span>
                <span>ISO: 400</span>
                <span>EV: 0.0</span>
              </div>
            </div>
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
            <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-green)"} as React.CSSProperties}>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h5 className="font-display font-semibold text-sm">Live Production Monitor</h5>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-600 font-medium rounded-md">Live</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "CNC Machine #1", oee: "82%", status: "Running", statusColor: "bg-emerald-500" },
                  { name: "Press Line #2", oee: "68%", status: "Slow Cycle", statusColor: "bg-amber-500" },
                  { name: "Assembly #3", oee: "0%", status: "Down", statusColor: "bg-rose-500" }
                ].map((m, idx) => (
                  <div key={idx} className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-semibold">{m.name}</h6>
                      <span className="text-[9px] text-muted-foreground">OEE Score</span>
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
            <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}>
              <h5 className="font-display font-semibold text-sm border-b border-border pb-4">Six Big Losses Breakdown</h5>
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
                    <div className="w-full bg-surface-muted/80 rounded-full h-1.5 overflow-hidden">
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
            <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h5 className="font-display font-semibold text-sm">Material Scrap Log</h5>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 font-medium rounded-md">Log Open</span>
              </div>

              <div className="space-y-3">
                {[
                  { part: "Plate Steel 4mm", reason: "Dimension Drift", volume: "45 kg", cost: "$180" },
                  { part: "Copper Wiring", reason: "Insulation Defect", volume: "12 m", cost: "$95" }
                ].map((log, idx) => (
                  <div key={idx} className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-semibold">{log.part}</h6>
                      <small className="text-muted-foreground text-[9px]">{log.reason}</small>
                    </div>
                    <div className="text-end">
                      <div className="text-xs font-bold text-rose-600 font-medium">{log.volume}</div>
                      <span className="text-[9px] text-muted-foreground">{log.cost}</span>
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
            <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-green)"} as React.CSSProperties}>
              <h5 className="font-display font-semibold text-sm border-b border-border pb-4">EHS Disposal Authorization</h5>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span>Waste Code:</span>
                  <span className="font-bold">E-WASTE_08B</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Authorized Method:</span>
                  <span className="font-bold text-emerald-600 font-medium">Certified Recycling</span>
                </div>
                <div className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 text-[10px] text-muted-foreground space-y-1">
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

// ─── 5. SQC CONTROL CHART VISUAL ───
export function SqcChartVisual() {
  const [subgroupSize, setSubgroupSize] = useState<number>(5);
  const [usl, setUsl] = useState<string>("10.5 mm");
  const [lsl, setLsl] = useState<string>("9.5 mm");

  // Dynamic calculated limits logic based on inputs
  const parseNum = (str: string) => {
    const val = parseFloat(str.replace(/[^\d.]/g, ""));
    return isNaN(val) ? null : val;
  };

  const uslNum = parseNum(usl) ?? 10.5;
  const lslNum = parseNum(lsl) ?? 9.5;
  
  const centerLine = (uslNum + lslNum) / 2;
  const range = Math.abs(uslNum - lslNum);
  const ucl = centerLine + range * 0.45;
  const lcl = centerLine - range * 0.45;

  return (
    <>
      {/* 1. Process Capability Analysis Section (Image 3) */}
      <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-soft" style={{ background: brandIconGradient(accentAt(2)) }}>
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20 mb-4">
                Capability Metrics
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground">
                Process Capability Analysis
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Measure your process's ability to meet customer specifications. Calculate Cp, Cpk, Pp, Ppk indices and visualize capability with histograms and normal distribution curves.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                { title: "Cp Index", desc: "Process capability without centering." },
                { title: "Cpk Index", desc: "Capability with process centering." },
                { title: "Pp / Ppk Indices", desc: "Long-term process performance." },
                { title: "PPM Defective", desc: "Parts per million outside specs." },
                { title: "Sigma Level", desc: "Six Sigma performance rating." },
                { title: "Histogram Analysis", desc: "Distribution visualization." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <Check className="h-4 w-4 text-[#017E84] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 text-white rounded-xl text-xs font-semibold tracking-wide shadow-soft transition-opacity hover:opacity-90"
                style={{ background: brandIconGradient(accentAt(2)) }}
              >
                Analyze Capability
              </Link>
            </div>
          </div>

          {/* Right Column: Widget Panel */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-surface shadow-soft overflow-hidden">
              {/* Widget Header */}
              <div className="bg-[#0d1e4c] text-white px-5 py-4 flex items-center gap-2 text-xs font-semibold">
                <LineChart className="h-4 w-4 text-emerald-600 font-medium" />
                <span>Process Capability Analysis</span>
              </div>

              {/* Grid Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Cp Card */}
                  <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-indigo-700 tracking-wider">Cp (Potential)</span>
                      <h4 className="text-2xl font-bold text-indigo-950 mt-1">1.89</h4>
                    </div>
                    <span className="text-[9px] text-indigo-600 mt-2 font-medium">Target: ≥ 1.33</span>
                  </div>

                  {/* Cpk Card */}
                  <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-emerald-700 tracking-wider">Cpk (Actual)</span>
                      <h4 className="text-2xl font-bold text-emerald-950 mt-1">1.67</h4>
                    </div>
                    <span className="text-[9px] text-emerald-600 mt-2 font-medium">Target: ≥ 1.33</span>
                  </div>

                  {/* Pp Card */}
                  <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-amber-700 tracking-wider">Pp (Performance)</span>
                      <h4 className="text-2xl font-bold text-amber-950 mt-1">1.75</h4>
                    </div>
                    <span className="text-[9px] text-amber-600 mt-2 font-medium">Long-term</span>
                  </div>

                  {/* Ppk Card */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-600 tracking-wider">Ppk</span>
                      <h4 className="text-2xl font-bold text-slate-950 mt-1">1.52</h4>
                    </div>
                    <span className="text-[9px] text-slate-500 mt-2 font-medium">Centered</span>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="border border-emerald-200 bg-emerald-50/30 rounded-2xl p-4 flex justify-between items-center text-xs">
                  <div>
                    <h5 className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Process Capability</h5>
                    <div className="flex gap-6 mt-1.5">
                      <div>
                        <span className="text-[10px] text-muted-foreground block">PPM Defective</span>
                        <span className="font-mono font-bold text-emerald-600 text-sm">64 PPM</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-muted-foreground block">Sigma Level</span>
                        <span className="font-mono font-bold text-indigo-600 text-sm">4.8σ</span>
                      </div>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full text-[10px]">
                    Capable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Real-Time Control Charts Section (Image 1) */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-soft" style={{ background: brandIconGradient(accentAt(3)) }}>
              <SlidersHorizontal className="h-6 w-6" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20 mb-4">
                Feature Spotlight
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground">
                Real-Time Control Charts
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Monitor process variations in real-time with statistical control charts. Automatically detect out-of-control conditions, identify trends, and receive instant alerts before defects occur.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                { title: "Auto Chart Selection", desc: "System picks the optimal chart type for your data." },
                { title: "Control Limits", desc: "UCL, LCL, and center line calculation." },
                { title: "Trend Detection", desc: "Western Electric rules & Nelson rules." },
                { title: "Real-Time Alerts", desc: "Instant notifications for out-of-control points." },
                { title: "Historical Analysis", desc: "Compare trends across shifts and periods." },
                { title: "Mobile Access", desc: "View charts anywhere on any device." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <Check className="h-4 w-4 text-[#017E84] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 text-white rounded-xl text-xs font-semibold tracking-wide shadow-soft transition-opacity hover:opacity-90"
                style={{ background: brandIconGradient(accentAt(3)) }}
              >
                Create Control Chart
              </Link>
            </div>
          </div>

          {/* Right Column: Card Widget */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-surface shadow-soft overflow-hidden">
              {/* Widget Header */}
              <div className="bg-[#0d1e4c] text-white px-5 py-4 flex items-center gap-2 text-xs font-semibold">
                <LineChart className="h-4 w-4 text-emerald-600 font-medium" />
                <span>X-bar & R Control Chart</span>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold border-b border-border pb-3">
                  <Settings className="h-4 w-4 text-indigo-500" />
                  <span className="text-[#0d1e4c]">Chart Configuration</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="text-[10px] font-medium text-slate-500 block mb-1">Chart Type *</label>
                    <select className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-medium">
                      <option>X-bar & R</option>
                      <option>X-bar & S</option>
                      <option>I-MR</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-medium text-slate-500 block mb-1">Subgroup Size</label>
                    <input
                      type="number"
                      value={subgroupSize}
                      onChange={(e) => setSubgroupSize(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-mono font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-medium text-slate-500 block mb-1">Data Source</label>
                    <select className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-medium">
                      <option>IoT Sensor</option>
                      <option>Manual Input</option>
                      <option>LIMS Database</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-[10px] font-medium text-slate-500 block mb-1">Upper Spec Limit (USL)</label>
                    <input
                      type="text"
                      value={usl}
                      onChange={(e) => setUsl(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-medium text-slate-500 block mb-1">Lower Spec Limit (LSL)</label>
                    <input
                      type="text"
                      value={lsl}
                      onChange={(e) => setLsl(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-medium"
                    />
                  </div>
                </div>

                {/* Control Limits cards */}
                <div className="pt-2">
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block mb-3">CALCULATED CONTROL LIMITS</span>
                  <div className="grid grid-cols-3 gap-3 font-mono">
                    <div className="bg-rose-50/50 border border-rose-100 p-3 rounded-xl text-center">
                      <span className="text-[9px] text-rose-500 block font-sans font-semibold">UCL</span>
                      <span className="text-rose-600 font-bold text-xs mt-0.5 block">{ucl.toFixed(2)}</span>
                    </div>

                    <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl text-center">
                      <span className="text-[9px] text-emerald-500 block font-sans font-semibold">Center Line</span>
                      <span className="text-emerald-600 font-bold text-xs mt-0.5 block">{centerLine.toFixed(2)}</span>
                    </div>

                    <div className="bg-rose-50/50 border border-rose-100 p-3 rounded-xl text-center">
                      <span className="text-[9px] text-rose-500 block font-sans font-semibold">LCL</span>
                      <span className="text-rose-600 font-bold text-xs mt-0.5 block">{lcl.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card" style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-600 font-medium rounded-md border border-emerald-500/30">Active</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground rounded-md">Template</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground text-opacity-90 rounded-full">12 Items</span>
            </div>
            
            <h3 className="font-display font-bold text-base leading-tight mb-6">CHK-2024-001: Marine Main Propulsion Engine</h3>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-2 mb-6 text-center">
              <div className="bg-surface-muted/60 rounded-xl p-2 border border-border/50">
                <div className="text-lg font-bold">12</div>
                <div className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold">Items</div>
              </div>
              <div className={`rounded-xl p-2 border transition-colors duration-300 ${highlightType === "critical" ? "bg-rose-500/20 border-rose-500" : "bg-surface-muted/60 border-border/50"}`}>
                <div className="text-lg font-bold text-rose-600 font-medium">9</div>
                <div className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold">Critical</div>
              </div>
              <div className="bg-surface-muted/60 rounded-xl p-2 border border-border/50">
                <div className="text-lg font-bold text-emerald-600 font-medium">12</div>
                <div className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold">Mandatory</div>
              </div>
              <div className={`rounded-xl p-2 border transition-colors duration-300 ${highlightType === "photo" ? "bg-sky-500/20 border-sky-500" : "bg-surface-muted/60 border-border/50"}`}>
                <div className="text-lg font-bold text-sky-600 font-medium">3</div>
                <div className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold">Photos</div>
              </div>
            </div>

            {/* Checklist Section 1 */}
            <div className={`rounded-2xl border mb-4 transition-all duration-300 ${
              highlightType === "sections" ? "bg-surface-muted/80 border-primary shadow-lg" : "bg-surface-muted/60 border-border/50"
            }`}>
              <div className="flex justify-between items-center px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-primary text-[10px] font-bold">1</span>
                  <span className="text-xs font-bold font-display">Safety & Compliance</span>
                </div>
                <span className="text-[9px] text-muted-foreground font-semibold">3 Items</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                  <span className="text-xs text-muted-foreground text-opacity-90">Emergency STOP devices</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase transition-all duration-300 ${
                    highlightType === "critical" ? "bg-rose-500 text-white animate-pulse" : "bg-rose-500/20 text-rose-600 font-medium"
                  }`}>Critical</span>
                </div>
                <div className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                  <span className="text-xs text-muted-foreground text-opacity-90">Fire suppression ready</span>
                  <span className="text-[9px] px-2 py-0.5 bg-rose-500/20 text-rose-600 font-medium rounded font-bold uppercase">Critical</span>
                </div>
                <div className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                  <span className="text-xs text-muted-foreground text-opacity-90">IMO NOx Compliance</span>
                  <span className="text-[9px] px-2 py-0.5 bg-rose-500/20 text-rose-600 font-medium rounded font-bold uppercase">Critical</span>
                </div>
              </div>
            </div>

            {/* Checklist Section 2 */}
            <div className="rounded-2xl border bg-surface-muted/60 border-border/50">
              <div className="flex justify-between items-center px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-teal-500 text-[10px] font-bold">2</span>
                  <span className="text-xs font-bold font-display">Visual Inspection</span>
                </div>
                <span className="text-[9px] text-muted-foreground font-semibold">3 Items</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                  <span className="text-xs text-muted-foreground text-opacity-90">Leaks (oil, fuel, coolant)</span>
                  <span className={`grid h-6 w-6 place-items-center rounded transition-all duration-300 ${
                    highlightType === "photo" ? "bg-sky-500 text-white" : "bg-surface-muted/80 text-muted-foreground"
                  }`}>
                    <Smartphone className="h-3 w-3" />
                  </span>
                </div>
                <div className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                  <span className="text-xs text-muted-foreground text-opacity-90">Cylinder head integrity</span>
                  <span className={`grid h-6 w-6 place-items-center rounded transition-all duration-300 ${
                    highlightType === "photo" ? "bg-sky-500 text-white" : "bg-surface-muted/80 text-muted-foreground"
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--primary)"} as React.CSSProperties}>
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <SlidersHorizontal className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-display font-semibold text-sm">Synapse AI</h5>
                <small className="text-muted-foreground text-[10px]">Generating checklist...</small>
              </div>
            </div>

            {/* AI Prompt Input */}
            <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
              <small className="text-muted-foreground text-[10px] block mb-1">Your Prompt:</small>
              <p className="text-xs font-semibold leading-relaxed">
                "Create an inspection checklist for a MAN B&W 6S50ME-C marine diesel engine with IMO Tier III compliance"
              </p>
            </div>

            {/* AI Result Mock */}
            <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50 space-y-3">
              <small className="text-primary font-bold text-[10px] uppercase tracking-wider block">AI Generated Checklist</small>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/20 text-primary rounded">Section 1: Safety & Compliance</span>
                  <ul className="mt-2 space-y-1 pl-2">
                    <li className="text-[11px] text-muted-foreground text-opacity-90 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-600 font-medium" /> Emergency stop devices</li>
                    <li className="text-[11px] text-muted-foreground text-opacity-90 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-600 font-medium" /> Fire suppression system</li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded">Section 2: Visual Inspection</span>
                  <ul className="mt-2 space-y-1 pl-2">
                    <li className="text-[11px] text-muted-foreground text-opacity-90 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-600 font-medium" /> Oil & fuel leaks</li>
                    <li className="text-[11px] text-muted-foreground text-opacity-90 flex items-center gap-2"><Check className="h-3 w-3 text-emerald-600 font-medium" /> Cylinder head condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">AI-Powered Creation</span>
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
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Easy Workflow</span>
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
                <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-green)"} as React.CSSProperties}>
            <div className="flex items-center gap-2 border-b border-border pb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <h5 className="font-display font-semibold text-sm">Start New Inspection</h5>
            </div>

            <div className="space-y-3">
              {[
                { step: "1", title: "Select Asset", desc: "Marine Engine #ME-001" },
                { step: "2", title: "Choose Checklist", desc: "Marine Propulsion Engine Checklist" },
                { step: "3", title: "Set Location", desc: "Engine Room - Deck 2" }
              ].map((s, idx) => (
                <div key={idx} className="flex items-center justify-between bg-surface-muted/60 p-3 rounded-xl border border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold">{s.step}</span>
                    <div>
                      <h6 className="text-xs font-semibold">{s.title}</h6>
                      <p className="text-[10px] text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <Check className="h-4 w-4 text-primary" />
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-primary hover:bg-primary/95 text-white rounded-xl text-xs font-semibold shadow-md transition-colors">
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-yellow)"} as React.CSSProperties}>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Inspection Schedule</h5>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-primary/20 text-primary rounded-md">This Week</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-surface-muted/60 p-2 rounded-xl text-center">
                <div className="text-base font-bold">24</div>
                <div className="text-[8px] text-muted-foreground font-semibold uppercase">Total</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl text-center">
                <div className="text-base font-bold text-emerald-600 font-medium">18</div>
                <div className="text-[8px] text-muted-foreground font-semibold uppercase">Active</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl text-center">
                <div className="text-base font-bold text-rose-600 font-medium">5</div>
                <div className="text-[8px] text-muted-foreground font-semibold uppercase">Due</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-rose-500/20 text-rose-600 font-medium rounded mb-1 inline-block">Today</span>
                  <h6 className="text-[11px] font-semibold">Pre-Trip Inspection</h6>
                  <p className="text-[9px] text-muted-foreground">Truck #T-042 • John Smith</p>
                </div>
                <small className="text-[10px] text-muted-foreground">9:00 AM</small>
              </div>
              <div className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-primary/20 text-primary rounded mb-1 inline-block">Tomorrow</span>
                  <h6 className="text-[11px] font-semibold">Safety Audit</h6>
                  <p className="text-[9px] text-muted-foreground">Warehouse A • Sarah Johnson</p>
                </div>
                <small className="text-[10px] text-muted-foreground">10:00 AM</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <FileSearch className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">NEVER MISS AGAIN</span>
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}>
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Incident Report</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-red-500/20 text-red-400 rounded-md">INC-2024-089</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-xs font-bold">Hydraulic Line Failure</h6>
                <small className="text-muted-foreground text-[9px]">Dec 23, 2025 • 2:45 PM</small>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-red-500 text-white rounded">High Priority</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-sm font-bold text-red-400">$5,000</h5>
                <small className="text-[9px] text-muted-foreground">Estimated Cost</small>
              </div>
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-sm font-bold text-amber-600 font-medium">4 hrs</h5>
                <small className="text-[9px] text-muted-foreground">Downtime</small>
              </div>
            </div>

            <div>
              <h6 className="text-[11px] font-semibold mb-1">Description</h6>
              <p className="text-[10px] text-muted-foreground text-opacity-90 leading-relaxed">
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}>
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Root Cause Analysis</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 font-medium rounded-md">RCA-2024-015</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-emerald-600 font-medium">3</div>
                <div className="text-[8px] text-muted-foreground">Inspections</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-primary">2</div>
                <div className="text-[8px] text-muted-foreground">Work Orders</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-rose-600 font-medium">1</div>
                <div className="text-[8px] text-muted-foreground">Incidents</div>
              </div>
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-medium">5 Whys Analysis</h6>
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground text-opacity-90"><span className="text-sky-600 font-medium font-bold">1. </span> Why did the hose fail? → wear</div>
                <div className="text-[10px] text-muted-foreground text-opacity-90"><span className="text-sky-600 font-medium font-bold">2. </span> Why wasn't it detected? → checklist missing check</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-500/10 text-sky-600 font-medium">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 font-medium">Deep Insights</span>
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
            Pure Technology supports multiple inspection types to help you maintain compliance, ensure safety, and track asset conditions across your organization.
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
            Pure Technology's platform integrates seamlessly with all maintenance modules for complete operational visibility.
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
              <h4 className="font-display font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
        <span className="flex items-center gap-2 text-emerald-600 font-medium font-bold text-xs uppercase tracking-wider">
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
                  <td className="p-2 font-semibold text-sky-600 font-medium">{item.id}</td>
                  <td className="p-2 truncate max-w-[120px]">{item.name}</td>
                  <td className="p-2 font-bold">{item.qty}</td>
                  <td className="p-2">
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${
                      item.status === 'Safe' ? 'bg-emerald-500/10 text-emerald-600 font-medium' :
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
          <div className="text-base font-bold mt-1 text-emerald-600 font-medium">50%</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[9px] text-slate-500 uppercase">Diverted</div>
          <div className="text-base font-bold mt-1 text-sky-600 font-medium">76%</div>
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
                    ? "bg-emerald-500/10 text-emerald-600 font-medium border border-emerald-500/20 cursor-default" 
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
        <span className="text-sky-600 font-medium font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
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
          <div className="text-2xl font-bold mt-1 text-emerald-600 font-medium flex items-baseline gap-1">
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
        <span className="text-primary font-medium font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5 text-purple-500" />
          Interactive OEE calculator
        </span>
        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
          parseFloat(oee) >= 85 ? "bg-emerald-500/10 text-emerald-600 font-medium" : "bg-amber-500/10 text-amber-400"
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
        <span className="text-sky-600 font-medium font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Database className="h-3.5 w-3.5 text-sky-500" />
          Continuous Verification Batch logs
        </span>
        <span className="text-[10px] text-slate-500 uppercase">Governed Flow</span>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-end">
        {[
          { id: "BATCH #B2849", step: "Processing", status: "Out-of-Spec", color: "text-red-400 bg-red-500/10 border-red-500/20" },
          { id: "BATCH #B2848", step: "APQR Approved", status: "Verified", color: "text-emerald-600 font-medium bg-emerald-500/10 border-emerald-500/20" },
          { id: "BATCH #B2847", step: "Released", status: "Verified", color: "text-emerald-600 font-medium bg-emerald-500/10 border-emerald-500/20" }
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
        <span className="text-emerald-600 font-medium font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
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
                className="h-4 w-4 bg-surface border-border text-emerald-500 rounded focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
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

export function StatisticalAiVisual() {
  const [dataPoints, setDataPoints] = useState<number[]>([45, 52, 49, 48, 55, 50, 47, 53, 51, 56]);
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [anomalyScore, setAnomalyScore] = useState(0.12);
  const [recommendation, setRecommendation] = useState("Process parameters stable. Running baseline models.");

  useEffect(() => {
    let tickCount = 0;
    const interval = setInterval(() => {
      tickCount++;
      setDataPoints((prev) => {
        const nextPoints = [...prev.slice(1)];
        let newPoint = 50 + (Math.random() - 0.5) * 15; // default stable fluctuation around 50

        // Every 8-12 ticks, simulate a process drift/anomaly
        if (tickCount % 10 === 0 || tickCount % 10 === 1 || tickCount % 10 === 2) {
          newPoint = 78 + (Math.random() - 0.5) * 10; // drift upward
        }

        nextPoints.push(Math.round(newPoint));
        
        // Analyze if the last point is an anomaly (> 72)
        const lastVal = nextPoints[nextPoints.length - 1];
        if (lastVal > 72) {
          setIsAlertActive(true);
          setAnomalyScore(parseFloat((0.80 + Math.random() * 0.15).toFixed(2)));
          setRecommendation("Anomaly detected: Core temperature spike correlates with feed rate. Recommendation: Adjust cooling valve by +5%.");
        } else {
          setIsAlertActive(false);
          setAnomalyScore(parseFloat((0.08 + Math.random() * 0.08).toFixed(2)));
          setRecommendation("Process parameters stable. Running baseline models.");
        }

        return nextPoints;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // SVG grid dimensions
  const width = 400;
  const height = 180;
  const padding = 20;

  // Map points to SVG coordinates
  const coords = dataPoints.map((val, index) => {
    const x = padding + (index * (width - 2 * padding)) / (dataPoints.length - 1);
    // Map 0-100 to height-padding down to padding
    const y = height - padding - (val / 100) * (height - 2 * padding);
    return { x, y, val };
  });

  // Build SVG path
  const linePath = coords.reduce((acc, c, i) => {
    return i === 0 ? `M ${c.x} ${c.y}` : `${acc} L ${c.x} ${c.y}`;
  }, "");

  // UCL (Upper Control Limit) is 72, Target is 50, LCL is 28
  const uclY = height - padding - (72 / 100) * (height - 2 * padding);
  const targetY = height - padding - (50 / 100) * (height - 2 * padding);
  const lclY = height - padding - (28 / 100) * (height - 2 * padding);

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 p-4 font-sans flex flex-col justify-between overflow-hidden rounded-2xl relative select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_70%)] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 z-10">
        <div className="flex items-center gap-2">
          <Brain className={`h-4 w-4 text-sky-600 font-medium ${isAlertActive ? "animate-pulse" : ""}`} />
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-300">Statistical Process AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${isAlertActive ? "bg-red-500 animate-ping" : "bg-emerald-500"}`} />
          <span className={`text-[9px] font-medium tracking-wide uppercase ${isAlertActive ? "text-red-400" : "text-emerald-600 font-medium"}`}>
            {isAlertActive ? "Alert: Process Drift" : "Model Status: Active"}
          </span>
        </div>
      </div>

      {/* Main visualization grid */}
      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Grid lines */}
          <line x1={padding} y1={uclY} x2={width - padding} y2={uclY} stroke="#f43f5e" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
          <line x1={padding} y1={targetY} x2={width - padding} y2={targetY} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
          <line x1={padding} y1={lclY} x2={width - padding} y2={lclY} stroke="#f43f5e" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />

          {/* Grid labels */}
          <text x={width - padding + 4} y={uclY + 3} fill="#f43f5e" fontSize="7" fontWeight="bold" opacity="0.8">UCL (72)</text>
          <text x={width - padding + 4} y={targetY + 3} fill="#94a3b8" fontSize="7" opacity="0.8">Target (50)</text>
          <text x={width - padding + 4} y={lclY + 3} fill="#f43f5e" fontSize="7" opacity="0.6">LCL (28)</text>

          {/* Anomaly Highlight Zone (gradient overlay under path) */}
          <path
            d={`${linePath} L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`}
            fill="url(#chart-gradient)"
            opacity="0.15"
          />

          <defs>
            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isAlertActive ? "#f43f5e" : "#38bdf8"} />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* The Main Line */}
          <path
            d={linePath}
            fill="none"
            stroke={isAlertActive ? "#f43f5e" : "#38bdf8"}
            strokeWidth="2.5"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Data Points */}
          {coords.map((c, i) => {
            const isAnomaly = c.val > 72;
            const isLast = i === coords.length - 1;
            return (
              <g key={i}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isLast ? (isAnomaly ? 5.5 : 4.5) : 2.5}
                  fill={isAnomaly ? "#ef4444" : isLast ? "#38bdf8" : "#0284c7"}
                  className="transition-all duration-500 ease-in-out"
                />
                {isLast && (
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isAnomaly ? 10 : 8}
                    fill="none"
                    stroke={isAnomaly ? "#ef4444" : "#38bdf8"}
                    strokeWidth="1.5"
                    className="animate-ping"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Mini Panel */}
        <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg p-1.5 flex flex-col gap-0.5 z-10 shadow-lg">
          <span className="text-[7px] text-slate-400 font-medium uppercase tracking-wider">Anomaly Index</span>
          <div className="flex items-center gap-1">
            <span className={`text-[10px] font-bold ${isAlertActive ? "text-red-400" : "text-sky-600 font-medium"}`}>{anomalyScore}</span>
            <TrendingUp className={`h-2.5 w-2.5 ${isAlertActive ? "text-red-400 rotate-45" : "text-sky-600 font-medium"} transition-transform`} />
          </div>
        </div>
      </div>

      {/* Operator Plain Language Recommendation */}
      <div className={`mt-1 p-2 rounded-xl border transition-all duration-500 z-10 flex gap-2 items-start ${
        isAlertActive 
          ? "bg-red-950/40 border-red-500/30 text-red-200" 
          : "bg-slate-900/60 border-slate-800/80 text-slate-300"
      }`}>
        <Sparkles className={`h-4 w-4 mt-0.5 shrink-0 ${isAlertActive ? "text-red-400 animate-bounce" : "text-sky-600 font-medium"}`} />
        <div className="flex-1 space-y-0.5">
          <p className="text-[8px] uppercase font-bold tracking-wider text-slate-400">AI Operator Assistant</p>
          <p className="text-[9px] leading-normal font-medium transition-all duration-300">
            {recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}

export function StatisticalQualityControlVisual() {
  const [inspectedCount, setInspectedCount] = useState(14842);
  const [defectsCount, setDefectsCount] = useState(3);
  const [dataPoints, setDataPoints] = useState<number[]>([42, 45, 48, 52, 49, 53, 51, 46, 50, 52, 48, 47]);
  const [liveMeasure, setLiveMeasure] = useState(12.04);
  const [cpIndex, setCpIndex] = useState(1.42);
  const [cpkIndex, setCpkIndex] = useState(1.38);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment inspected parts
      setInspectedCount((prev) => prev + 1);

      // Randomly trigger a defect (very rarely)
      if (Math.random() > 0.985) {
        setDefectsCount((prev) => prev + 1);
      }

      // Update control chart points
      setDataPoints((prev) => {
        const nextPoints = [...prev.slice(1)];
        // Normal range: 35 to 65
        const newPoint = 50 + (Math.random() - 0.5) * 20;
        nextPoints.push(Math.round(newPoint));
        return nextPoints;
      });

      // Update live dimension measure (e.g. around 12.00 mm)
      setLiveMeasure(parseFloat((12.00 + (Math.random() - 0.5) * 0.12).toFixed(2)));

      // Slight updates to Cp/Cpk to simulate live computation
      setCpIndex(parseFloat((1.40 + Math.random() * 0.05).toFixed(2)));
      setCpkIndex(parseFloat((1.35 + Math.random() * 0.05).toFixed(2)));

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const yieldRate = inspectedCount > 0 ? (((inspectedCount - defectsCount) / inspectedCount) * 100).toFixed(3) : "100.000";

  // SVG parameters
  const width = 400;
  const height = 180;
  const padding = 20;

  // UCL is 75, Target is 50, LCL is 25
  const uclY = height - padding - (75 / 100) * (height - 2 * padding);
  const targetY = height - padding - (50 / 100) * (height - 2 * padding);
  const lclY = height - padding - (25 / 100) * (height - 2 * padding);

  const coords = dataPoints.map((val, index) => {
    const x = padding + (index * (width - 2 * padding - 40)) / (dataPoints.length - 1);
    const y = height - padding - (val / 100) * (height - 2 * padding);
    return { x, y, val };
  });

  const linePath = coords.reduce((acc, c, i) => {
    return i === 0 ? `M ${c.x} ${c.y}` : `${acc} L ${c.x} ${c.y}`;
  }, "");

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 p-4 font-sans flex flex-col justify-between overflow-hidden rounded-2xl relative select-none">
      {/* Subtle India Flag Gradient Background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-emerald-500 opacity-60 z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.03),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.03),transparent_60%)] pointer-events-none" />
      
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 z-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-bold text-orange-400 tracking-wider">PURE TECH INDIA</span>
            <span className="text-[8px] bg-slate-900 px-1 py-0.5 rounded border border-slate-850 text-slate-400">PUNE PLANT-02</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-200">Statistical Process Control</span>
        </div>
        <div className="text-right">
          <p className="text-[7px] text-slate-500 uppercase tracking-wider">Quality Inspector</p>
          <p className="text-[9px] font-medium text-slate-300">R. Sharma (ID: #4092)</p>
        </div>
      </div>

      {/* Main Grid: Control Chart & Gauges */}
      <div className="flex gap-3 items-center flex-1 my-2">
        
        {/* Left: Live Control Chart */}
        <div className="flex-1 h-full relative flex items-center">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
            {/* Grid lines */}
            <line x1={padding} y1={uclY} x2={width - padding - 40} y2={uclY} stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <line x1={padding} y1={targetY} x2={width - padding - 40} y2={targetY} stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="2,2" opacity="0.4" />
            <line x1={padding} y1={lclY} x2={width - padding - 40} y2={lclY} stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />

            {/* Labels */}
            <text x={width - padding - 36} y={uclY + 2} fill="#ef4444" fontSize="6.5" fontWeight="semibold">UCL</text>
            <text x={width - padding - 36} y={targetY + 2} fill="#94a3b8" fontSize="6.5">CL</text>
            <text x={width - padding - 36} y={lclY + 2} fill="#ef4444" fontSize="6.5" fontWeight="semibold">LCL</text>

            {/* Area Fill */}
            <path
              d={`${linePath} L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`}
              fill="url(#spc-gradient)"
              opacity="0.1"
            />

            <defs>
              <linearGradient id="spc-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Control Chart Path */}
            <path
              d={linePath}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              className="transition-all duration-500"
            />

            {/* Points */}
            {coords.map((c, i) => {
              const isLast = i === coords.length - 1;
              return (
                <g key={i}>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isLast ? 4 : 2}
                    fill={isLast ? "#f59e0b" : "#d97706"}
                  />
                  {isLast && (
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={7}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="1"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Floating Live Dimension Value */}
          <div className="absolute bottom-1 left-2 bg-slate-900/90 border border-slate-800/80 rounded px-1.5 py-0.5 flex flex-col">
            <span className="text-[6px] text-slate-500 uppercase tracking-wider">Live Laser Mic</span>
            <span className="text-[9px] font-bold text-amber-400 font-mono">{liveMeasure} mm</span>
          </div>
        </div>

        {/* Right: Key Performance Gauges */}
        <div className="w-[100px] flex flex-col gap-2 shrink-0">
          {/* Cp Indicator */}
          <div className="bg-slate-900/60 border border-slate-800 p-1.5 rounded-xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[6.5px] text-slate-500 font-bold tracking-wider">PROCESS CAPABILITY</span>
              <span className="text-[10px] font-bold text-slate-200">Cp Index</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 font-medium font-mono">{cpIndex}</span>
          </div>

          {/* Cpk Indicator */}
          <div className="bg-slate-900/60 border border-slate-800 p-1.5 rounded-xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[6.5px] text-slate-500 font-bold tracking-wider">DRIFT OFFSET</span>
              <span className="text-[10px] font-bold text-slate-200">Cpk Index</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 font-medium font-mono">{cpkIndex}</span>
          </div>
        </div>

      </div>

      {/* Footer Metrics (Batch info) */}
      <div className="grid grid-cols-4 gap-2 bg-slate-900/40 border border-slate-800 p-2 rounded-xl z-10 text-center">
        <div className="flex flex-col border-r border-slate-800">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider">Lot Inspected</span>
          <span className="text-[10px] font-bold text-slate-200 font-mono">{inspectedCount}</span>
        </div>
        <div className="flex flex-col border-r border-slate-800">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider">Defect Limit</span>
          <span className="text-[10px] font-bold text-slate-200 font-mono">Ac: 0 / Re: 1</span>
        </div>
        <div className="flex flex-col border-r border-slate-800">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider">Real Defects</span>
          <span className="text-[10px] font-bold text-emerald-600 font-medium font-mono">{defectsCount}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider">Batch Yield</span>
          <span className="text-[10px] font-bold text-emerald-600 font-medium font-mono">{yieldRate}%</span>
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
      accent: "bg-sky-500/10 text-sky-600 font-medium border-sky-500/30",
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
      accent: "bg-emerald-500/10 text-emerald-600 font-medium border-emerald-500/30",
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
      accent: "bg-purple-500/10 text-primary font-medium border-purple-500/30",
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
      imageSrc: "/homeCaseStudy/industrial-ci-ideas.png",
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
      accent: "bg-emerald-500/10 text-emerald-600 font-medium border-emerald-500/30",
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
      accent: "bg-rose-500/10 text-rose-600 font-medium border-rose-500/30",
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
      accent: "bg-sky-500/10 text-sky-600 font-medium border-sky-500/30",
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
      accent: "bg-purple-500/10 text-primary font-medium border-purple-500/30",
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
      accent: "bg-emerald-500/10 text-emerald-600 font-medium border-emerald-500/30",
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
    if (slug === "statistical-ai") {
      return <StatisticalAiVisual />;
    }
    if (slug === "statistical-quality-control") {
      return <StatisticalQualityControlVisual />;
    }
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card" style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-600 font-medium rounded-md border border-emerald-500/30">{card.badge}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground rounded-md">{card.templateLabel}</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground text-opacity-90 rounded-full">{card.itemsCount}</span>
            </div>
            
            <h3 className="font-display font-bold text-base leading-tight mb-6">{card.title}</h3>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-2 mb-6 text-center">
              {card.metrics.map((m, idx) => {
                const isHighlighted = highlightType && m.highlightId === highlightType;
                return (
                  <div key={idx} className={`rounded-xl p-2 border transition-all duration-300 ${
                    isHighlighted ? (m.bgClass || "bg-primary/20 border-primary scale-105") : "bg-surface-muted/60 border-border/50"
                  }`}>
                    <div className={`text-base font-bold ${m.colorClass === "text-white" ? "text-foreground" : m.colorClass}`}>{m.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{m.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Section 1 */}
            <div className={`rounded-2xl border mb-4 transition-all duration-300 ${
              highlightType === "sections" ? "bg-surface-muted/80 border-primary shadow-lg" : "bg-surface-muted/60 border-border/50"
            }`}>
              <div className="flex justify-between items-center px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-primary text-[10px] font-bold">{card.section1.num}</span>
                  <span className="text-xs font-bold font-display">{card.section1.title}</span>
                </div>
              </div>
              <div className="p-3 space-y-2">
                {card.section1.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                    <span className="text-xs text-muted-foreground text-opacity-90">{item.label}</span>
                    {item.badge && (
                      <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase transition-all duration-300 ${
                        highlightType === "critical" ? "bg-rose-500 text-white animate-pulse" : "bg-rose-500/20 text-rose-600 font-medium"
                      }`}>{item.badge}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl border bg-surface-muted/60 border-border/50">
              <div className="flex justify-between items-center px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded bg-teal-500 text-[10px] font-bold">{card.section2.num}</span>
                  <span className="text-xs font-bold font-display">{card.section2.title}</span>
                </div>
              </div>
              <div className="p-3 space-y-2">
                {card.section2.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-surface-muted/60 p-2 rounded-xl border border-border/50">
                    <span className="text-xs text-muted-foreground text-opacity-90">{item.label}</span>
                    {item.hasPhoto && (
                      <span className={`grid h-6 w-6 place-items-center rounded transition-all duration-300 ${
                        highlightType === "photo" ? "bg-sky-500 text-white" : "bg-surface-muted/80 text-muted-foreground"
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

  if (!ai || slug === "live-dashboards" || slug === "doe-experiments-management") return null;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Assistant Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--primary)"} as React.CSSProperties}>
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-display font-semibold text-sm">Synapse AI</h5>
                <small className="text-muted-foreground text-[10px]">Processing request...</small>
              </div>
            </div>

            {/* AI Prompt Input */}
            <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
              <small className="text-muted-foreground text-[10px] block mb-1">Your Prompt:</small>
              <p className="text-xs font-semibold leading-relaxed">
                "{ai.prompt}"
              </p>
            </div>

            {/* AI Result Mock */}
            <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50 space-y-3">
              <small className="text-primary font-bold text-[10px] uppercase tracking-wider block">{ai.generatedTitle}</small>
              <div className="space-y-3">
                {ai.sections.map((sect, idx) => (
                  <div key={idx}>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${sect.bgClass} ${sect.textClass}`}>{sect.title}</span>
                    <ul className="mt-2 space-y-1 pl-2">
                      {sect.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-[11px] text-muted-foreground text-opacity-90 flex items-center gap-2">
                          <Check className="h-3 w-3 text-emerald-600 font-medium shrink-0" />
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
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{ai.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{ai.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {ai.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {ai.features.map((item, idx) => (
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
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{sw.eyebrow}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">{sw.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {sw.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {sw.features.map((item, idx) => (
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

        {/* Right Column: Workflow Mock Card */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-green)"} as React.CSSProperties}>
            <div className="flex items-center gap-2 border-b border-border pb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <h5 className="font-display font-semibold text-sm">{sw.cardTitle}</h5>
            </div>

            <div className="space-y-3">
              {sw.steps.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between bg-surface-muted/60 p-3 rounded-xl border border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold">{s.step}</span>
                    <div>
                      <h6 className="text-xs font-semibold">{s.title}</h6>
                      <p className="text-[10px] text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <Check className="h-4 w-4 text-primary" />
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-primary hover:bg-primary/95 text-white rounded-xl text-xs font-semibold shadow-md transition-colors">
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-yellow)"} as React.CSSProperties}>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">{rem.cardTitle}</h5>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-yellow-500/20 text-amber-600 font-medium rounded-md">{rem.badgeText}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {rem.stats.map((s, idx) => (
                <div key={idx} className="bg-surface-muted/60 p-2 rounded-xl text-center">
                  <div className={`text-base font-bold ${s.colorClass === "text-white" ? "text-foreground" : s.colorClass}`}>{s.value}</div>
                  <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {rem.schedule.map((sch, idx) => (
                <div key={idx} className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 flex justify-between items-center">
                  <div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded mb-1 inline-block ${sch.tagColorClass}`}>{sch.tag}</span>
                    <h6 className="text-[11px] font-semibold">{sch.title}</h6>
                    <p className="text-[9px] text-muted-foreground">{sch.details}</p>
                  </div>
                  <small className="text-[10px] text-muted-foreground">{sch.time}</small>
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}>
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">{inc.cardTitle}</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-red-500/20 text-red-400 rounded-md">{inc.ticketId}</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-xs font-bold">{inc.titleText}</h6>
                <small className="text-muted-foreground text-[9px]">{inc.dateText}</small>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-red-500 text-white rounded">{inc.priorityBadge}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {inc.metrics.map((m, idx) => (
                <div key={idx} className="bg-surface-muted/60 p-3 rounded-xl text-center">
                  <h5 className={`text-sm font-bold ${m.colorClass === "text-white" ? "text-foreground" : m.colorClass}`}>{m.value}</h5>
                  <small className="text-[9px] text-muted-foreground">{m.label}</small>
                </div>
              ))}
            </div>

            <div>
              <h6 className="text-[11px] font-semibold mb-1">Details</h6>
              <p className="text-[10px] text-muted-foreground text-opacity-90 leading-relaxed">
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
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card" style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}>
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">{rca.cardTitle}</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 font-medium rounded-md">{rca.ticketId}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {rca.stats.map((s, idx) => (
                <div key={idx} className="bg-surface-muted/60 p-2 rounded-xl">
                  <div className={`text-xs font-bold ${s.colorClass === "text-white" ? "text-foreground" : s.colorClass}`}>{s.value}</div>
                  <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-medium">5 Whys Trace</h6>
              <div className="space-y-1.5">
                {rca.whys.map((why, idx) => {
                  const parts = why.split("→");
                  return (
                    <div key={idx} className="text-[10px] text-muted-foreground text-opacity-90">
                      <span className="text-sky-600 font-medium font-bold">{parts[0]}</span>
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
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-500/10 text-sky-600 font-medium">
              <FileSearch className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 font-medium">{rca.eyebrow}</span>
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
              <h4 className="font-display font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GenericIndustrialExtraSection({ slug }: { slug: string }) {
  if (
    slug === "oee-analytics" || slug === "production-management" || slug === "data-extractor" ||
    slug === "inventory-management" || slug === "scraps-inventory" ||
    // All surveillance slugs have their own dedicated ExtraSection — block generic fallback
    slug === "intrusion-detection" || slug === "weapon-detection" || slug === "fire-smoke-detection" ||
    slug === "perimeter-monitoring" || slug === "unauthorized-access-alerts" ||
    slug === "ai-video-surveillance" || slug === "crowd-analytics" || slug === "behaviour-analysis"
  ) {
    return null;
  }
  if (slug === "statistical-quality-control") {
    return (
      <>
        <SqcChartCategories />
        <SqcAcceptanceSampling />
        <SqcSixSigmaDmaic />
        <SqcClosedLoopQuality />
        <GenericConnectedModules slug={slug} />
      </>
    );
  }
  if (slug === "cpv-apqr" || slug === "gauge-msa" || slug === "inspection-management" || slug === "continuous-improvement" || slug === "maintenance-management") {
    return (
      <>
        <GenericFeatureSpotlight1 slug={slug} />
        <GenericWorkflowSteps slug={slug} />
        <GenericStartWorkflow slug={slug} />
        <GenericReminders slug={slug} />
        <GenericIncidents slug={slug} />
        <GenericRCA slug={slug} />
        <GenericTypesSupport slug={slug} />
        <GenericConnectedModules slug={slug} />
      </>
    );
  }

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

// ─── AI VISUAL INSPECTION SPECIFIC COMPONENTS ───

export function VisionDigitalCenter() {
  const [sku, setSku] = useState("SKU-9382: Cylinder Seal Ring");
  const [inspectState, setInspectState] = useState<"IDLE" | "OK" | "NG">("IDLE");
  const [recentCount, setRecentCount] = useState({ ok: 4280, ng: 34 });
  const [defectType, setDefectType] = useState<string | null>(null);

  const simulateInspect = (isOk: boolean) => {
    setInspectState(isOk ? "OK" : "NG");
    setDefectType(isOk ? null : "Surface Dent Detected");
    setRecentCount(prev => ({
      ok: prev.ok + (isOk ? 1 : 0),
      ng: prev.ng + (isOk ? 0 : 1)
    }));

    // Trigger state reset back to IDLE after 2s
    setTimeout(() => {
      setInspectState("IDLE");
    }, 2000);
  };

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Eye className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">VISION WATCH</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">24/7 Real-Time Vision Monitoring</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Inspect parts in real-time. Link industrial cameras and edge processing PCs to automatically reject non-conforming items and alert quality teams.
          </p>

          <div className="bg-surface-muted/50 border border-border p-4 rounded-2xl grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">OK COUNTER</span>
              <span className="text-xl font-bold text-emerald-600 block mt-1">{recentCount.ok}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">NG COUNTER</span>
              <span className="text-xl font-bold text-rose-600 block mt-1">{recentCount.ng}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => simulateInspect(true)}
              disabled={inspectState !== "IDLE"}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-50 transition-all shadow-soft"
            >
              Simulate Inspect OK
            </button>
            <button
              onClick={() => simulateInspect(false)}
              disabled={inspectState !== "IDLE"}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white disabled:opacity-50 transition-all shadow-soft"
            >
              Simulate Inspect NG
            </button>
          </div>
        </div>

        {/* Right Column: Live Video Stream Frame */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4 mb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">{sku}</span>
                <span className="text-[10px] text-muted-foreground block">Camera ID: CAM-STATION-02</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider transition-all duration-350 ${
                inspectState === "OK" 
                  ? "text-emerald-600 bg-emerald-500/10 border-emerald-500/20"
                  : inspectState === "NG"
                  ? "text-rose-600 bg-rose-500/10 border-rose-500/20"
                  : "text-blue-600 bg-blue-500/10 border-blue-500/20"
              }`}>
                {inspectState === "IDLE" ? "ONLINE - Trigger Ready" : `INSPECTED: ${inspectState}`}
              </span>
            </div>

            {/* Frame View */}
            <div className="bg-slate-950 border border-border/50 rounded-2xl overflow-hidden mb-6 aspect-video relative flex items-center justify-center">
              {/* Indian factory camera feed background */}
              <img 
                src="/homeCaseStudy/indian-factory-inspection.jpg" 
                alt="Indian Factory Conveyor Inspection Feed" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
              
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur z-20">
                FEED: 240 ppm // 8ms inference
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur flex items-center gap-1.5 border border-emerald-500/20 z-20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                STROBE ACTIVE
              </div>

              {/* Bounding box simulation */}
              {inspectState === "OK" && (
                <div className="absolute border-2 border-emerald-500 rounded-xl flex flex-col items-center justify-center bg-emerald-500/10 backdrop-blur-[0.5px] pointer-events-none select-none z-10 w-44 h-44 sm:w-52 sm:h-52 top-[32%] left-[20%] animate-fade-up">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-black/85 px-3 py-1 rounded border border-emerald-500/30">
                    PASS // OK
                  </span>
                  <span className="text-[9px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded mt-1">
                    Confidence: 99.4%
                  </span>
                </div>
              )}

              {inspectState === "NG" && (
                <div className="absolute border-2 border-rose-500 rounded-xl flex flex-col items-center justify-center bg-rose-500/10 backdrop-blur-[0.5px] pointer-events-none select-none z-10 w-44 h-44 sm:w-52 sm:h-52 top-[32%] left-[20%] animate-pulse">
                  <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-black/85 px-3 py-1 rounded border border-rose-500/30">
                    FAIL // REJECTED
                  </span>
                  <span className="text-[9px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded mt-1">
                    {defectType} (98.4%)
                  </span>
                </div>
              )}

              {inspectState === "IDLE" && (
                <div className="flex flex-col items-center text-center max-w-xs px-6 py-4 bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 relative z-10">
                  <span className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-3 border border-primary/30">
                    <Activity className="h-4 w-4 animate-pulse" />
                  </span>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Trigger simulated inspection to observe real-time classification overlays.
                  </p>
                </div>
              )}
            </div>

            {/* Reject status footer */}
            <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
              <span>PLC REJECT DELAY: 12ms</span>
              <span>DIVERTER GATE: READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisionQualityDashboard() {
  const [fpy, setFpy] = useState(98.7);
  const [logs, setLogs] = useState([
    { id: "PART-18394", sku: "SKU-9382", time: "19:05:42", result: "OK", conf: "99.2%", details: "Cylinder intact" },
    { id: "PART-18393", sku: "SKU-9382", time: "19:05:39", result: "OK", conf: "99.5%", details: "Seal aligned" },
    { id: "PART-18392", sku: "SKU-9382", time: "19:05:32", result: "NG", conf: "98.4%", details: "Surface Dent Detected" },
    { id: "PART-18391", sku: "SKU-9382", time: "19:05:28", result: "OK", conf: "99.1%", details: "Cylinder intact" },
    { id: "PART-18390", sku: "SKU-9382", time: "19:05:15", result: "OK", conf: "98.9%", details: "Seal aligned" }
  ]);

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: KPI Cards */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">QUALITY PERFORMANCE</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Smart Quality Dashboard</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Review shift stats, defect distribution trends, and yield outputs based on central server logs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface border border-border p-6 rounded-2xl shadow-soft">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">FIRST PASS YIELD (FPY)</span>
              <span className="text-3xl font-bold text-foreground block mt-2">{fpy}%</span>
              <span className="text-[9px] text-emerald-600 font-medium block mt-1">+0.3% vs yesterday</span>
            </div>
            <div className="bg-surface border border-border p-6 rounded-2xl shadow-soft">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">DEFECT RATE (DPMO)</span>
              <span className="text-3xl font-bold text-foreground block mt-2">1,200</span>
              <span className="text-[9px] text-emerald-600 font-medium block mt-1">-50 DPMO vs yesterday</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Log Widget */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden flex flex-col h-full justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border/80">
                <h4 className="font-display font-bold text-sm text-foreground">Recent Inspection Logs</h4>
                <span className="text-[9px] font-mono text-muted-foreground">Updated live</span>
              </div>

              <div className="space-y-2">
                {logs.map((log) => (
                  <div key={log.id} className="bg-surface-muted/50 border border-border/50 rounded-xl p-3 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${log.result === "OK" ? "bg-emerald-500" : "bg-rose-500"}`} />
                      <div className="space-y-0.5">
                        <span className="font-mono font-semibold text-foreground block">{log.id}</span>
                        <span className="text-[9px] text-muted-foreground block">SKU: {log.sku} // Time: {log.time}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`font-bold block ${log.result === "OK" ? "text-emerald-600" : "text-rose-600"}`}>
                        {log.result}
                      </span>
                      <span className="text-[9px] text-muted-foreground font-mono block">Conf: {log.conf}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 text-center">
              <Link to="/contact" className="text-xs font-semibold text-primary hover:opacity-80">
                View Historical Inspection Records
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisionCorrectiveActions() {
  const [tickets, setTickets] = useState([
    { id: "QA-482", station: "Station 3 - Outer Dent Rate >2%", assigned: "Quality Operations Team", status: "Assigned", priority: "HIGH" },
    { id: "QA-481", station: "Station 1 - Lens cleanliness check required", assigned: "Maintenance Desk", status: "In Progress", priority: "MEDIUM" }
  ]);

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Flow Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <ClipboardCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">WORKFLOW ENGINE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Automated Work Order & Corrective Action</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Initiate corrective action tickets instantly when repeated defect criteria are flagged, replacing slow, paper-based reporting systems.
          </p>

          <div className="space-y-3">
            {[
              "Automatically raise quality or maintenance tasks on failure",
              "Set priority levels, escalation paths, and operational owners",
              "Attach timestamped visual inspection evidence to work logs",
              "Enforce closed-loop verification steps before work order sign-off"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-xs text-muted-foreground leading-relaxed">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Work Order Logs */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4 mb-4">
              <div className="flex justify-between items-center pb-4 border-b border-border/80">
                <h4 className="font-display font-bold text-sm text-foreground">Active Corrective Actions</h4>
                <span className="text-[10px] font-mono text-muted-foreground uppercase bg-amber-500/10 text-amber-600 px-2 py-0.5 border border-amber-500/20 rounded">
                  2 Tickets Open
                </span>
              </div>

              <div className="space-y-3">
                {tickets.map((t) => (
                  <div key={t.id} className="bg-surface-muted/40 border border-border/60 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-0.5">
                        <span className="font-mono font-bold text-foreground text-xs">{t.id}</span>
                        <h5 className="font-semibold text-xs text-foreground mt-0.5">{t.station}</h5>
                      </div>
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase ${
                        t.priority === "HIGH" ? "bg-rose-500/10 text-rose-600 border border-rose-500/20" : "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                      }`}>
                        {t.priority}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-3 border-t border-border/50">
                      <span>Owner: {t.assigned}</span>
                      <span className="font-bold text-primary">{t.status}</span>
                    </div>
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

export function VisionPredictiveMaintenance() {
  const metrics = [
    { label: "Lens Enclosure Cleanliness", value: "94.2%", status: "OPTIMAL", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" },
    { label: "LED Strobe Intensity", value: "98.0%", status: "OPTIMAL", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Camera Align Angle Drift", value: "0.12mm", status: "OK", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Lighting Controller Sync Lag", value: "0.2ms", status: "OPTIMAL", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Widget preview */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border/80">
                <h4 className="font-display font-bold text-sm text-foreground">Optics Health Indicators</h4>
                <span className="text-[10px] font-mono text-muted-foreground">Station 2 Watch</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-surface-muted/50 border border-border/50 p-4 rounded-2xl space-y-2">
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">{m.label}</span>
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-bold text-foreground block">{m.value}</span>
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded border ${m.color}`}>
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Settings className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PREDICTIVE ANALYTICS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Predictive Maintenance Analytics</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Track equipment health trends using vision data. Monitor lighting decay, lens cover fogging, camera alignment drift, and defect patterns to schedule maintenance before line failures occur.
          </p>
        </div>
      </div>
    </section>
  );
}

export function VisionDeploymentArchitecture() {
  const steps = [
    { title: "Industrial Camera", desc: "Global shutter high-speed GigE cameras capture products inline." },
    { title: "Edge IPC Computer", desc: "Local industrial PC runs YOLO model inference at 8ms latency." },
    { title: "PLC Reject Link", desc: "PLC diverter gate receives signals to sort out NG parts." },
    { title: "Local Cache App", desc: "Maintains inspection queues locally if plant networks disconnect." },
    { title: "Central Server", desc: "Aggregates quality statistics, images, and model configs." },
    { title: "Web Dashboard", desc: "NOC screens provide live quality metrics, trends, and reports." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">ARCHITECTURE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Deployment Architecture</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Run inference locally at edge nodes close to the machinery, syncing logs and metrics to central enterprise servers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((s, idx) => (
            <div 
              key={idx} 
              className="bg-surface border border-border p-5 rounded-2xl flex flex-col justify-between glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-primary block">0{idx + 1}</span>
                <h4 className="font-display font-bold text-xs text-foreground uppercase tracking-wide">{s.title}</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionConnectedEcosystem() {
  const modules = [
    { name: "PLC / SCADA Integration", desc: "Broadcast reject commands and timing windows directly over digital I/O or industrial networks.", tags: ["PROFINET sync", "EtherNet/IP", "Digital I/O"] },
    { name: "MES System Sync", desc: "Fetch active product SKUs, production schedules, and batches to configure model parameters.", tags: ["MES API queries", "Batch tracking", "SKU sync"] },
    { name: "QMS Workflow Link", desc: "Log defect classifications and validation timelines into client quality databases automatically.", tags: ["NC Report logs", "QMS API links", "CAPA compliance"] },
    { name: "REST API & Alerts", desc: "Expose secure REST APIs and send notifications to operator tablets, supervisor desks, or MS Teams channels.", tags: ["HTTP Endpoints", "Teams Hooks", "Andon alarms"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">INTEGRATIONS</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">AI Vision Connected to Existing Systems</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Link inspection cameras directly with machine PLCs, factory MES databases, and central QMS corrective-action workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{m.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {m.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AiVisualInspectionExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="ai-visual-inspection" />
      <VisionDigitalCenter />
      <VisionQualityDashboard />
      <VisionCorrectiveActions />
      <VisionPredictiveMaintenance />
      <VisionDeploymentArchitecture />
      <VisionConnectedEcosystem />
    </>
  );
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
  return (
    <>
      <IndustrialImageGridSection slug="production-management" />
      <ProductionDigitalCenter />
      <ProductionWorkflowSteps />
      <ProductionAiAssistant />
      <ProductionDowntimeEventLog />
      <ProductionLossRca />
      <ProductionScenarios />
      <ProductionConnectedHub />
    </>
  );
}

export function DataExtractorExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="data-extractor" />
      <ExtractorDigitalCenter />
      <ExtractorWorkflowSteps />
      <ExtractorAiAssistant />
      <ExtractorExceptionsLog />
      <ExtractorPatternAnalysis />
      <ExtractorDocTypes />
      <ExtractorConnectedPipeline />
    </>
  );
}

export function InventoryManagementExtraSection() {
  return (
    <>
      <IndustrialImageGridSection slug="inventory-management" />
      <InventoryDigitalCenter />
      <InventoryWorkflowSteps />
      <InventoryDiscrepancyLog />
      <InventoryPatternAnalysis />
      <InventoryScenarios />
      <InventoryConnectedHub />
    </>
  );
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
      <ScrapDigitalCenter />
      <ScrapWorkflowSteps />
      <ScrapEhsApprovalWorkflow />
      <ScrapDisposalExceptionLog />
      <ScrapRootCauseAnalysis />
      <ScrapWasteStreams />
      <ScrapConnectedCompliance />
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

export function SqcChartCategories() {
  const [dataCategory, setDataCategory] = useState<"variable" | "attribute">("variable");
  const [selectedChart, setSelectedChart] = useState<string>("xbar-r");

  const variableCharts = [
    {
      id: "xbar-r",
      title: "X-bar & R (Average & Range)",
      short: "X̄ & R",
      desc: "Monitors the process mean and subgroup range over time.",
      subgroup: "2 to 10 samples",
      metric: "Variables (continuous measurements)",
      usage: "Dimension diameters, raw material weight check, curing press pressure logs.",
      formula: "UCL = X̄ + A₂R, LCL = X̄ - A₂R"
    },
    {
      id: "xbar-s",
      title: "X-bar & S (Average & Std Dev)",
      short: "X̄ & S",
      desc: "Monitors process mean and subgroup standard deviation for larger sample sizes.",
      subgroup: "10+ samples",
      metric: "Variables (continuous measurements)",
      usage: "High-volume automated measurement logs, automated sensor data runs.",
      formula: "UCL = X̄ + A₃S, LCL = X̄ - A₃S"
    },
    {
      id: "imr",
      title: "I-MR (Individual & Moving Range)",
      short: "I-MR",
      desc: "Monitors single process measurements where subgrouping is not possible.",
      subgroup: "n = 1",
      metric: "Variables (continuous measurements)",
      usage: "Batch chemical audits, low-volume tool calibrations, destructive tests.",
      formula: "UCL = X + 2.66*MR, LCL = X - 2.66*MR"
    },
    {
      id: "ewma",
      title: "EWMA (Weighted Moving Average)",
      short: "EWMA",
      desc: "Applies exponential weight to detect micro-drifts and small process shifts.",
      subgroup: "1 sample or more",
      metric: "Variables (continuous measurements)",
      usage: "Precision tool wear tracking, high-value semiconductors, micro-stops.",
      formula: "z_i = λx_i + (1-λ)z_{i-1}"
    }
  ];

  const attributeCharts = [
    {
      id: "p-chart",
      title: "P-Chart (Fraction Defective)",
      short: "P-Chart",
      desc: "Tracks the proportion of defective items in subgroups of varying size.",
      subgroup: "Variable sizes",
      metric: "Attributes (pass/fail count)",
      usage: "Daily reject percentage in tire curing, varying batch reject rates.",
      formula: "p = Total Defectives / Total Inspected"
    },
    {
      id: "np-chart",
      title: "NP-Chart (Number Defective)",
      short: "NP-Chart",
      desc: "Tracks the total count of defective items in subgroups of constant size.",
      subgroup: "Fixed size",
      metric: "Attributes (pass/fail count)",
      usage: "Standard lot audits, shift-wise reject counts for fixed sample groups.",
      formula: "UCL = np + 3*sqrt(np(1-p))"
    },
    {
      id: "c-chart",
      title: "C-Chart (Count of Defects)",
      short: "C-Chart",
      desc: "Tracks the number of defects per constant area or single unit.",
      subgroup: "Fixed unit area",
      metric: "Attributes (defect count density)",
      usage: "Number of paint scratches per car body, surface bubbles per tire bladder.",
      formula: "UCL = c + 3*sqrt(c)"
    },
    {
      id: "u-chart",
      title: "U-Chart (Defects Per Unit)",
      short: "U-Chart",
      desc: "Tracks defect density per unit across variable subgroup sample areas.",
      subgroup: "Variable area size",
      metric: "Attributes (defect count density)",
      usage: "Weave faults per square meter, weld defect counts across variable lengths.",
      formula: "u = Total Defects / Total Area"
    }
  ];

  const currentChart = [...variableCharts, ...attributeCharts].find(c => c.id === selectedChart) || variableCharts[0];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Redesigned Interactive Chart Selector Card Widget (Image 2) */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-soft space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0d1e4c] border-b border-border pb-3">
              <Layers className="h-4 w-4 text-indigo-500" />
              <span>Control Chart Types</span>
            </div>

            {/* Variable / Attribute Selector Rectangular Cards */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => { setDataCategory("variable"); setSelectedChart("xbar-r"); }}
                className={`rounded-2xl p-4 border text-center transition-all ${
                  dataCategory === "variable"
                    ? "border-[#017E84] bg-[#017E84]/5 text-[#017E84]"
                    : "border-border bg-surface text-muted-foreground hover:bg-slate-50"
                }`}
              >
                <div className="flex justify-center mb-1 text-slate-400">
                  <Ruler className="h-4 w-4" style={{ color: dataCategory === "variable" ? "#017E84" : undefined }} />
                </div>
                <div className="text-xs font-bold">Variable Data</div>
                <div className="text-[9px] text-muted-foreground mt-0.5 font-medium">X-bar, R, S, I-MR</div>
              </button>

              <button
                onClick={() => { setDataCategory("attribute"); setSelectedChart("p-chart"); }}
                className={`rounded-2xl p-4 border text-center transition-all ${
                  dataCategory === "attribute"
                    ? "border-[#017E84] bg-[#017E84]/5 text-[#017E84]"
                    : "border-border bg-surface text-muted-foreground hover:bg-slate-50"
                }`}
              >
                <div className="flex justify-center mb-1 text-slate-400">
                  <Check className="h-4 w-4" style={{ color: dataCategory === "attribute" ? "#017E84" : undefined }} />
                </div>
                <div className="text-xs font-bold">Attribute Data</div>
                <div className="text-[9px] text-muted-foreground mt-0.5 font-medium">P, NP, C, U</div>
              </button>
            </div>

            {/* Variable Data Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Ruler className="h-3.5 w-3.5 text-[#017E84]" />
                <span className="text-[10px] font-bold text-[#017E84] uppercase tracking-wider">Variable Data Charts</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {variableCharts.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setDataCategory("variable"); setSelectedChart(c.id); }}
                    className={`py-3 rounded-xl border font-semibold transition-all ${
                      selectedChart === c.id
                        ? "bg-[#017E84]/10 border-[#017E84] text-[#017E84]"
                        : "bg-slate-50/50 border-slate-200/80 text-foreground hover:bg-slate-50"
                    }`}
                  >
                    {c.short}
                  </button>
                ))}
              </div>
            </div>

            {/* Attribute Data Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#017E84]" />
                <span className="text-[10px] font-bold text-[#017E84] uppercase tracking-wider">Attribute Data Charts</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {attributeCharts.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setDataCategory("attribute"); setSelectedChart(c.id); }}
                    className={`py-3 rounded-xl border font-semibold transition-all ${
                      selectedChart === c.id
                        ? "bg-[#017E84]/10 border-[#017E84] text-[#017E84]"
                        : "bg-slate-50/50 border-slate-200/80 text-foreground hover:bg-slate-50"
                    }`}
                  >
                    {c.short}
                  </button>
                ))}
              </div>
            </div>

            {/* Mini selected info card in widget */}
            <div className="border border-border/80 bg-slate-50/50 rounded-xl p-3.5 text-[10px]">
              <div className="flex justify-between border-b border-border/50 pb-1.5">
                <span className="font-semibold text-foreground">Formula:</span>
                <span className="font-mono text-slate-600">{currentChart.formula}</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="font-semibold text-foreground">Subgroup size:</span>
                <span className="text-slate-600">{currentChart.subgroup}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-soft" style={{ background: brandIconGradient(accentAt(4)) }}>
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20 mb-4">
              Chart Categories
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground">
              Types of Control Charts
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Choose from comprehensive control chart types for both variable and attribute data. The system automatically recommends the best chart based on your measurement type and subgroup size.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {[
              { title: "X-bar & R Charts", desc: "For subgroups of 2-10 measurements." },
              { title: "X-bar & S Charts", desc: "For larger subgroups (n > 10)." },
              { title: "P-Chart & NP-Chart", desc: "For fraction or count of defectives." },
              { title: "C-Chart & U-Chart", desc: "For defects per unit counting." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-[#017E84] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-white rounded-xl text-xs font-semibold tracking-wide shadow-soft transition-opacity hover:opacity-90"
              style={{ background: brandIconGradient(accentAt(4)) }}
            >
              Explore Charts
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export function SqcAcceptanceSampling() {
  const [lotSizeVal, setLotSizeVal] = useState<string>("5,000 units");
  const [aqlVal, setAQLVal] = useState<number>(1.0);
  const [inspectionLevel, setInspectionLevel] = useState<string>("Normal (II)");
  const [foundDefects, setFoundDefects] = useState<number>(2);

  // Parse input lot size safely
  const parseLotSize = (str: string) => {
    const val = parseInt(str.replace(/[^\d]/g, ""));
    return isNaN(val) ? 5000 : val;
  };

  const lotNum = parseLotSize(lotSizeVal);

  // Level II Lookup simulation
  const getSamplingPlan = (lotSize: number, aql: number) => {
    let letter = "H";
    let sampleSize = 50;
    let ac = 1;
    let re = 2;

    if (lotSize <= 500) {
      letter = "H";
      sampleSize = 50;
      if (aql <= 1.0) { ac = 1; re = 2; }
      else if (aql <= 1.5) { ac = 2; re = 3; }
      else { ac = 3; re = 4; }
    } else if (lotSize <= 1200) {
      letter = "J";
      sampleSize = 80;
      if (aql <= 0.65) { ac = 1; re = 2; }
      else if (aql <= 1.0) { ac = 2; re = 3; }
      else if (aql <= 1.5) { ac = 3; re = 4; }
      else { ac = 5; re = 6; }
    } else if (lotSize <= 3200) {
      letter = "K";
      sampleSize = 125;
      if (aql <= 0.65) { ac = 2; re = 3; }
      else if (aql <= 1.0) { ac = 3; re = 4; }
      else if (aql <= 1.5) { ac = 5; re = 6; }
      else { ac = 7; re = 8; }
    } else {
      letter = "L";
      sampleSize = 200;
      if (aql <= 0.65) { ac = 3; re = 4; }
      else if (aql <= 1.0) { ac = 5; re = 6; }
      else if (aql <= 1.5) { ac = 7; re = 8; }
      else { ac = 10; re = 11; }
    }

    return { letter, sampleSize, ac, re };
  };

  const plan = getSamplingPlan(lotNum, aqlVal);
  const isAccepted = foundDefects <= plan.ac;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Acceptance Sampling Plan Widget (Image 4) */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-surface shadow-soft overflow-hidden">
            {/* Widget Header */}
            <div className="bg-slate-50 border-b border-border px-5 py-4 flex items-center gap-2 text-xs font-semibold text-[#0d1e4c]">
              <ClipboardCheck className="h-4 w-4 text-[#017E84]" />
              <span>Acceptance Sampling Plan</span>
            </div>

            {/* Inside Panel */}
            <div className="p-6 space-y-5 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-medium text-slate-500 block mb-1">Lot Size</label>
                  <input
                    type="text"
                    value={lotSizeVal}
                    onChange={(e) => setLotSizeVal(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-medium text-slate-500 block mb-1">AQL Level</label>
                  <select
                    value={aqlVal}
                    onChange={(e) => setAQLVal(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium"
                  >
                    <option value={0.65}>0.65%</option>
                    <option value={1.0}>1.0%</option>
                    <option value={1.5}>1.5%</option>
                    <option value={2.5}>2.5%</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="text-[10px] font-medium text-slate-500 block mb-1">Inspection Level</label>
                  <select
                    value={inspectionLevel}
                    onChange={(e) => setInspectionLevel(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium"
                  >
                    <option>Reduced (I)</option>
                    <option>Normal (II)</option>
                    <option>Tightened (III)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-medium text-slate-500 block mb-1">Sample Size</label>
                  <div className="bg-[#017E84]/15 border border-[#017E84]/20 text-[#017E84] font-bold py-2.5 rounded-xl text-center text-xs">
                    n = {plan.sampleSize}
                  </div>
                </div>
              </div>

              {/* Defects input (for simulation interaction) */}
              <div>
                <label className="text-[10px] font-medium text-slate-500 block mb-1">Defects Found in Sample</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={foundDefects}
                  onChange={(e) => setFoundDefects(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-mono font-medium"
                />
              </div>

              {/* Decision Criteria */}
              <div>
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block mb-3">DECISION CRITERIA</span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#017E84]/5 border border-[#017E84]/15 text-emerald-700 py-3 rounded-xl text-center">
                    <span className="text-[9px] font-bold block uppercase text-[#017E84]">ACCEPT</span>
                    <span className="font-semibold text-xs mt-0.5 block">≤ {plan.ac} defects</span>
                  </div>

                  <div className="bg-rose-50 border border-rose-100 text-rose-700 py-3 rounded-xl text-center">
                    <span className="text-[9px] font-bold block uppercase text-rose-600">REJECT</span>
                    <span className="font-semibold text-xs mt-0.5 block">≥ {plan.re} defects</span>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`p-3 rounded-xl text-center border font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 ${
                isAccepted
                  ? "bg-emerald-100 border-emerald-200 text-emerald-800"
                  : "bg-rose-100 border-rose-200 text-rose-800"
              }`}>
                {isAccepted ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>LOT ACCEPTED - {foundDefects} defects found</span>
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4 text-rose-600 shrink-0" />
                    <span>LOT REJECTED - {foundDefects} defects found</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-soft" style={{ background: brandIconGradient(accentAt(5)) }}>
            <ClipboardCheck className="h-6 w-6" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20 mb-4">
              Lot Inspection
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground">
              Acceptance Sampling
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Statistically valid sampling plans for incoming, in-process, and final inspection. Make accept/reject decisions based on AQL (Acceptable Quality Level) standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {[
              { title: "AQL-Based Sampling", desc: "Standard sampling plans per AQL level." },
              { title: "Sample Size Calculator", desc: "Automatic sample size determination." },
              { title: "Accept/Reject Criteria", desc: "Clear decision rules for lot disposition." },
              { title: "Supplier Quality", desc: "Track supplier performance history." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-[#017E84] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-white rounded-xl text-xs font-semibold tracking-wide shadow-soft transition-opacity hover:opacity-90"
              style={{ background: brandIconGradient(accentAt(5)) }}
            >
              Start Sampling
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export function SqcSixSigmaDmaic() {
  const [activeStage, setActiveStage] = useState<string>("D");

  const stages = [
    {
      key: "D",
      name: "Define",
      full: "Define Phase",
      desc: "Establish project scope, process boundaries, and critical-to-quality (CTQ) specifications based on customer quality audits.",
      deliverables: ["Project Charter", "SIPOC Diagram", "CTQ Parameter List"],
      tools: ["CTQ definition trees", "VOC surveys", "Process mapping"]
    },
    {
      key: "M",
      name: "Measure",
      full: "Measure Phase",
      desc: "Verify measurement system stability and establish baseline process capability metrics from current line logs.",
      deliverables: ["Gauge R&R Analysis", "Baseline Process Cp/Cpk", "Sampling Plans"],
      tools: ["Measurement System Analysis (MSA)", "Data Collection Templates", "FMEA risk reviews"]
    },
    {
      key: "A",
      name: "Analyze",
      full: "Analyze Phase",
      desc: "Perform statistical analysis on process variation to identify significant assignable root causes and defect patterns.",
      deliverables: ["Pareto Defect Charts", "Ishikawa Fishbone Tree", "Statistical Hypothesis Proofs"],
      tools: ["Defect Pareto analysis", "Multi-Vari charts", "ANOVA / Regression models"]
    },
    {
      key: "I",
      name: "Improve",
      full: "Improve Phase",
      desc: "Determine optimal process settings, design corrections, and validate changes using real trials.",
      deliverables: ["DOE parameter configs", "OCAP Action Guides", "Process capability verification"],
      tools: ["Design of Experiments (DOE)", "OCAP limit setup", "Process simulation runs"]
    },
    {
      key: "C",
      name: "Control",
      full: "Control Phase",
      desc: "Deploy automated control charts to monitor process mean, ensuring improvements remain stable and permanent.",
      deliverables: ["X-bar control charts", "Standardized Work Logs", "Audit compliance records"],
      tools: ["SPC control limits locks", "Nelson's rules alerts", "Operator training checks"]
    }
  ];

  const current = stages.find(s => s.key === activeStage) || stages[0];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Stage Selector */}
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20">
            Process Excellence
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground">
            Six Sigma & DMAIC Frameworks
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Deploy structured statistical root-cause and problem-solving methodologies integrated directly with your shop-floor data stream to maintain long-term stability.
          </p>

          <div className="flex gap-2 justify-between">
            {stages.map((s, idx) => (
              <button
                key={s.key}
                onClick={() => setActiveStage(s.key)}
                className={`flex-1 rounded-2xl py-3 border text-center transition-all ${
                  activeStage === s.key
                    ? "text-white border-transparent shadow-soft"
                    : "border-border bg-surface text-foreground hover:bg-secondary"
                }`}
                style={
                  activeStage === s.key
                    ? { background: brandIconGradient(accentAt(idx + 1)) }
                    : {}
                }
              >
                <div className="text-base font-bold font-display">{s.key}</div>
                <div className="text-[9px] uppercase font-semibold text-white/90 mt-0.5">{s.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Stage Details */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-soft space-y-5 text-xs">
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h3 className="font-display text-base font-bold text-foreground">{current.full}</h3>
              <span className="text-xs font-mono font-bold text-muted-foreground">STAGE: {current.key}</span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">{current.desc}</p>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <span className="text-[9px] uppercase font-bold text-[#017E84] tracking-wider block">KEY DELIVERABLES</span>
                <ul className="space-y-2 text-xs">
                  {current.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider block">SUPPORTED TOOLS</span>
                <ul className="space-y-2 text-xs">
                  {current.tools.map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SqcClosedLoopQuality() {
  const steps = [
    { num: 1, title: "Automated Alarm", desc: "Process deviations instantly trigger Andon lights and OCAP workflows." },
    { num: 2, title: "Operator OCAP Logs", desc: "Operators log machine settings, tool adjustments, or batch shifts immediately at line-side terminals." },
    { num: 3, title: "Containment Trigger", desc: "Automated quarantine ticket created in your MES to hold suspect parts." },
    { num: 4, title: "5-Why Root Cause Analysis", desc: "Quality team identifies the root cause using historical sensor correlations." },
    { num: 5, title: "Recalibration & Verification", desc: "Operators adjust physical processes and log corrective action proofs." },
    { num: 6, title: "Cpk Recovery Auto-Check", desc: "The platform monitors the next 30 points to verify Cpk returns above 1.33." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#017E84]/10 text-[#017E84] uppercase tracking-wider border border-[#017E84]/20">
            Closed-Loop Containment
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground">
            Closed-Loop Corrective Action
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Close the gap between detection and correction. Connect control chart alarms directly to frontline action plans to stop defects from escaping.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={s.num} className="rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div 
                className="absolute top-6 right-6 h-8 w-8 rounded-xl grid place-items-center text-xs font-bold font-mono"
                style={{ 
                  background: `color-mix(in oklab, ${accentAt(idx + 1)} 10%, white)`,
                  color: accentAt(idx + 1)
                }}
              >
                0{s.num}
              </div>
              <h3 className="font-display font-bold text-base text-foreground mt-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





// ─── OEE SPECIFIC COMPONENTS ───

export function OeeDigitalCenter() {
  const [selectedLine, setSelectedLine] = useState("Line 3");

  const linesData = {
    "Line 1": { oee: 84.5, a: 94.2, p: 90.1, q: 99.6, status: "Running", color: "text-emerald-500" },
    "Line 2": { oee: 76.8, a: 89.5, p: 86.2, q: 99.5, status: "Running", color: "text-amber-500" },
    "Line 3": { oee: 81.2, a: 92.4, p: 88.0, q: 99.6, status: "Micro-stop", color: "text-amber-500" }
  };

  const current = linesData[selectedLine as keyof typeof linesData];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Activity className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PRODUCTION HUB</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">OEE Digital Center</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Consolidate plant floor telemetry into a single pane of glass. Track Availability, Performance, and Quality metrics live by shift, line, and machine to instantly pinpoint speed losses and operational constraints.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Real-Time Telemetry", desc: "Live ingestion of machine run status, cycle counts, and rejects." },
              { title: "Shift & Line Comparison", desc: "Identify performance variance across crews, runs, and products." },
              { title: "Active Bottlenecks", desc: "Visualize speed loss and changeover delays before the shift ends." },
              { title: "World-Class Benchmarks", desc: "Compare plant OEE indicators live against TPM 85% standards." }
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

        {/* Right Column: Live OEE Dashboard Widget Mock Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-md border border-emerald-500/20">LIVE</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground rounded-md">Shift A (Morning)</span>
              </div>
              
              <div className="flex gap-1">
                {["Line 1", "Line 2", "Line 3"].map((l) => (
                  <button 
                    key={l}
                    onClick={() => setSelectedLine(l)}
                    className={`text-[9px] font-bold px-2.5 py-1 rounded-md transition-colors ${
                      selectedLine === l 
                        ? "bg-primary text-white" 
                        : "bg-surface-muted/80 text-muted-foreground hover:bg-surface-muted"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display font-bold text-base leading-tight">OEE Production Monitor</h3>
                <p className="text-[10px] text-muted-foreground mt-0.5">Asset: Hydraulic Press Unit 3</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold font-display">{current.oee}%</div>
                <div className="text-[8px] uppercase tracking-wider text-muted-foreground font-semibold">Overall OEE</div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { label: "Availability", val: `${current.a}%`, desc: "Run vs Planned", color: "text-blue-500" },
                { label: "Performance", val: `${current.p}%`, desc: "Actual vs Rated", color: "text-amber-500" },
                { label: "Quality", val: `${current.q}%`, desc: "Good vs Total", color: "text-emerald-500" }
              ].map((item, idx) => (
                <div key={idx} className="bg-surface-muted/60 rounded-xl p-3 border border-border/50 text-center">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</div>
                  <div className={`text-base font-bold my-1 ${item.color}`}>{item.val}</div>
                  <div className="text-[8px] text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Line items */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/75">Active Line Stations</div>
              {[
                { name: "CNC Machining #1", oee: "84%", status: "Running", statusColor: "bg-emerald-500" },
                { name: "Press Stamping #2", oee: "79%", status: "Micro-stop", statusColor: "bg-amber-500" },
                { name: "Quality Check Gate", oee: "96%", status: "Running", statusColor: "bg-emerald-500" }
              ].map((item, idx) => (
                <div key={idx} className="bg-surface-muted/60 p-2.5 rounded-xl border border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.statusColor}`} />
                    <span className="text-xs font-semibold">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold">OEE {item.oee}</span>
                    <span className="text-[8px] font-semibold text-muted-foreground">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OeeWorkflowSteps() {
  const steps = [
    { num: 1, title: "Data Capture", subtitle: "Automated telemetry ingestion", desc: "Ingest machine run states, cycle times, and scrap triggers directly via PLC/SCADA integrations." },
    { num: 2, title: "Loss Categorization", subtitle: "TPM loss classification", desc: "Group recorded downtime logs into standard TPM classes to isolate setup and speed losses." },
    { num: 3, title: "Shift Comparison", subtitle: "Operator & run correlation", desc: "Analyze performance and yield variance across shifts, crews, and raw material runs." },
    { num: 4, title: "Root-Cause Tagging", subtitle: "Multi-variable analysis", desc: "Correlate OEE drops with recipe parameters, changeover settings, and equipment age." },
    { num: 5, title: "Action Assignment", subtitle: "Targeted work orders", desc: "Generate corrective maintenance work orders or calibration tasks automatically upon breach." },
    { num: 6, title: "Verification", subtitle: "Continuous improvement proof", desc: "Monitor post-repair cycles to verify that OEE metrics return to target baselines." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">TPM LOOP</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">6-Step OEE Analysis Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Transition from raw shop floor signals to verified continuous improvement actions with our structured OEE optimization workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="relative bg-surface border border-border p-6 rounded-2xl flex flex-col justify-between hover:shadow-soft transition-all duration-300">
              <span className="absolute -top-4 left-6 grid h-8 w-8 place-items-center rounded-xl bg-primary text-white font-bold text-sm shadow-sm">{s.num}</span>
              <div className="mt-2 space-y-2">
                <div className="text-[10px] font-bold text-primary uppercase tracking-wider">{s.subtitle}</div>
                <h4 className="font-display font-bold text-sm">{s.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OeeAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Line 3 OEE Drop");

  const prompts = [
    { id: "Line 3 OEE Drop", label: "Explain Line 3 Drop", question: "Explain why Assembly Line 3's OEE dropped during the morning shift." },
    { id: "Changeover Loss", label: "Changeover Bottlenecks", question: "Analyze Setup and Adjustment losses on Press #2 this week." }
  ];

  const answers = {
    "Line 3 OEE Drop": {
      observations: [
        "OEE dropped to 68.2% between 10:15 AM and 11:30 AM.",
        "Primary constraint: A 45-minute Setup & Adjustment event on Stamping Press #2."
      ],
      recommendations: [
        "Feed mechanism calibration drifted during setup, causing a 12% drop in Performance (speed loss) post-changeover.",
        "Deploy automatic calibration profile for SKU-402 to reduce adjustment cycles by 15 minutes."
      ]
    },
    "Changeover Loss": {
      observations: [
        "Setup & Adjustment loss reached 14.5 hours on Press #2, accounting for 62% of total downtime.",
        "Average changeover time exceeded the 20-minute SLA by 18 minutes."
      ],
      recommendations: [
        "Recurring alignment delay on clamp assemblies due to thread wear on secure bolts.",
        "Generate a PM task to replace clamp bolts and verify tool change schedules."
      ]
    }
  };

  const currentAnswer = answers[activePrompt as keyof typeof answers];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Conversational AI Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-purple-500/10 text-purple-600">
                  <Sparkles className="h-3 w-3" />
                </span>
                <h5 className="font-display font-semibold text-xs">Synapse OEE AI Assistant</h5>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-600 rounded-md">OEE Expert</span>
            </div>

            {/* Prompt Selector */}
            <div className="flex gap-2">
              {prompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePrompt(p.id)}
                  className={`text-[9px] font-semibold px-2.5 py-1 rounded-lg transition-colors border ${
                    activePrompt === p.id 
                      ? "bg-purple-500/20 border-purple-500 text-purple-300 font-medium" 
                      : "bg-surface-muted/50 border-border text-muted-foreground hover:bg-surface-muted"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Chat Box */}
            <div className="space-y-3 bg-surface-muted/40 p-3.5 rounded-2xl border border-border/50 text-[11px]">
              <div className="text-muted-foreground italic">
                "{prompts.find(p => p.id === activePrompt)?.question}"
              </div>
              
              <div className="border-t border-border/50 my-2 pt-2 space-y-3">
                <div className="font-semibold text-purple-400">Analysis:</div>
                <div className="space-y-1 bg-purple-500/5 p-2 rounded-lg border border-purple-500/10">
                  {currentAnswer.observations.map((o, i) => (
                    <div key={i} className="flex gap-2 text-[10px]">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>

                <div className="font-semibold text-emerald-500">Root-Cause Insights:</div>
                <div className="space-y-1 bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
                  {currentAnswer.recommendations.map((r, i) => (
                    <div key={i} className="flex gap-2 text-[10px]">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">AI COGNITION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">OEE AI Trend Interpreter</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Stop digging through raw spreadsheets. Our conversational AI assistant translates complex machine run profiles and shift anomalies into plain-language diagnostic reports.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Loss Translation", desc: "Converts raw micro-stop logs and downtime cycles into clear loss events." },
              { title: "Anomaly Correlation", desc: "Flags OEE deviations by comparing live runs to golden batch templates." },
              { title: "Changeover Insights", desc: "Identifies setup inefficiencies and suggests target reduction actions." },
              { title: "Predictive Health Alerts", desc: "Warns of impending speed or quality loss trends before critical levels occur." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
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

export function OeeDowntimeEventLog() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">LOSS CAPTURE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Downtime Event Logging</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enforce absolute accountability for every minute of machine downtime. Tie stoppage events directly to standard TPM categories and calculate the financial impact of every loss.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "PLC Fault Integration", desc: "Automatically capture fault codes directly from SCADA loops." },
              { title: "Loss Categorization", desc: "Map outages to Equipment Failures, Setup, or Process adjustments." },
              { title: "Financial Impact", desc: "Calculate direct cost impact based on line rate and labor parameters." },
              { title: "Corrective Dispatch", desc: "Generate CMMS repair work orders straight from the logging screen." }
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

        {/* Right Column: Downtime Event Mock Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Downtime Log Entry</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded-md">DWN-2026-042</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-xs font-bold">Unplanned Hydraulic Press Downtime</h6>
                <small className="text-muted-foreground text-[9px]">Aug 18, 2026 • 10:15 AM - 10:50 AM</small>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-rose-500 text-white rounded">35 Minutes</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-sm font-bold text-rose-400">$3,200</h5>
                <small className="text-[9px] text-muted-foreground">Estimated Yield Loss</small>
              </div>
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-sm font-bold text-amber-600 font-medium">Availability</h5>
                <small className="text-[9px] text-muted-foreground">TPM Category</small>
              </div>
            </div>

            <div>
              <h6 className="text-[11px] font-semibold mb-1">Stoppage Details</h6>
              <p className="text-[10px] text-muted-foreground text-opacity-90 leading-relaxed">
                Automatic high-pressure limit trip triggered on Line 2 main press. Required manual solenoid inspection and calibration reset before restarting process loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OeeLossRca() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: RCA Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">OEE Loss Investigation</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 font-medium rounded-md">RCA-OEE-089</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-rose-600 font-medium">18.5 hrs</div>
                <div className="text-[8px] text-muted-foreground">Setup Loss</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-primary">SKU-402</div>
                <div className="text-[8px] text-muted-foreground">Primary SKU</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-sky-600 font-medium">92%</div>
                <div className="text-[8px] text-muted-foreground">Correlation</div>
              </div>
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-medium">5 Whys Analysis Trace</h6>
              <div className="space-y-1.5">
                {[
                  "Why did changeover duration exceed target? → Tooling alignment took 25 minutes longer.",
                  "Why did tooling alignment take longer? → Position clamp bolt threads were stripped."
                ].map((why, idx) => (
                  <div key={idx} className="flex gap-2 text-[10px] text-muted-foreground leading-relaxed">
                    <span className="text-primary font-bold">{idx + 1}</span>
                    <span>{why}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
              <TrendingUp className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">CONTINUOUS IMPROVEMENT</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">OEE Loss Root Cause Analysis</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bridge the gap between raw data and engineering action. Correlate repeat OEE loss patterns with tooling changes, material specs, and shift logs to permanently eliminate chronic bottlenecks.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Changeover Audits", desc: "Compare setup times against target SLAs by operator and line." },
              { title: "Guided 5 Whys", desc: "Document root causes step-by-step next to OEE trend charts." },
              { title: "Predictive Diagnostics", desc: "Flag tool and component degradation signs before failures occur." },
              { title: "Verification Tracking", desc: "Monitor production post-RCA to ensure metrics return to baseline." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
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

// ─── PRODUCTION SPECIFIC COMPONENTS ───

export function ProductionDigitalCenter() {
  const [selectedLine, setSelectedLine] = useState("Line 4");

  const linesData = {
    "Line 3": { 
      job: "Job #JB-1045 (SKU-784 Housing)", 
      outputPct: 95.5, 
      yieldPct: 99.2, 
      activeAlert: "None", 
      alertColor: "text-emerald-500",
      notes: "Operating at nominal speed of 15 ppm. Feed gate stable." 
    },
    "Line 4": { 
      job: "Job #JB-1089 (SKU-890 Casing)", 
      outputPct: 85.5, 
      yieldPct: 91.5, 
      activeAlert: "Feed Conveyor Jam", 
      alertColor: "text-rose-500 font-bold animate-pulse",
      notes: "Conveyor speed reduced by 15% post-jam to prevent sensor misalignment." 
    }
  };

  const current = linesData[selectedLine as keyof typeof linesData];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Settings className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">LIVE SHOP FLOOR MONITOR</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Production Digital Center</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Provide operators and supervisors with a live operational view. Monitor job progression, target vs actual yields, and active alert logs directly from the line.
          </p>

          <div className="space-y-4">
            {[
              { num: "01", title: "Live Board Metrics", desc: "Track current running jobs, outputs, and product yields in real-time." },
              { num: "02", title: "Shift Handovers & Notes", desc: "Provide clear running logs and instructions for incoming shift crews." },
              { num: "03", title: "Active Alert Board", desc: "Flag micro-stoppages and machine interlocks at the point of occurrence." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-lg font-display font-bold text-primary">{item.num}</span>
                <div>
                  <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Production Board Mock Card (Dark Panel UI Style) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card" style={{"--card-accent": "var(--primary)"} as React.CSSProperties}>
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-md border border-emerald-500/20 font-medium">LIVE MONITOR</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground rounded-md">Shift B (Afternoon)</span>
              </div>
              
              <div className="flex gap-1.5">
                {["Line 3", "Line 4"].map((l) => (
                  <button 
                    key={l}
                    onClick={() => setSelectedLine(l)}
                    className={`text-[9px] font-mono px-3 py-1 rounded transition-colors ${
                      selectedLine === l 
                        ? "bg-primary text-white font-bold" 
                        : "bg-surface-muted/80 text-muted-foreground hover:bg-surface-muted border border-border"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display font-bold text-base text-foreground tracking-tight">{selectedLine} Control Board</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">{current.job}</p>
                </div>
              </div>

              {/* Progress Bars / Metrics */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Output % */}
                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>OUTPUT vs TARGET</span>
                    <span className="text-foreground font-bold">{current.outputPct}%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: `${current.outputPct}%` }}
                    />
                  </div>
                </div>

                {/* Yield % */}
                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>FIRST PASS YIELD</span>
                    <span className="text-emerald-500 font-bold">{current.yieldPct}%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-500" 
                      style={{ width: `${current.yieldPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Detail Rows */}
              <div className="space-y-2 pt-2 border-t border-border">
                <div className="flex justify-between items-center text-[10px] font-mono py-1.5 border-b border-border">
                  <span className="text-muted-foreground uppercase tracking-wider">ACTIVE ALERT</span>
                  <span className={current.activeAlert === "None" ? "text-emerald-500" : "text-rose-500 font-bold animate-pulse"}>
                    {current.activeAlert}
                  </span>
                </div>
                <div className="text-[10px] font-mono py-2">
                  <span className="text-muted-foreground uppercase tracking-wider block mb-1">SHIFT LEAD LOG NOTES</span>
                  <p className="text-muted-foreground leading-relaxed bg-surface-muted/40 p-3 rounded-xl border border-border/50">
                    {current.notes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductionWorkflowSteps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { num: 1, label: "Job Start", sub: "Release setpoints", desc: "Select SKU from scheduler, load baseline speeds, and release target parameters to PLC tags." },
    { num: 2, label: "Output Logging", sub: "Automated logging", desc: "Capture real-time quantities and scrap volumes directly from line sensor feeds or terminals." },
    { num: 3, label: "Downtime Capture", sub: "Standardized categorization", desc: "Operators categorize any line stoppages exceeding 2 minutes using standard TPM reason codes." },
    { num: 4, label: "Shift Handover", sub: "Ledger notes transfer", desc: "Sign off yield targets, transfer open logs, and log operator notes digitally for incoming shift leads." },
    { num: 5, label: "Variance Review", sub: "Target vs Actual check", desc: "Audit speed slows, planned runs, and identify root causes for shift output variances." },
    { num: 6, label: "ERP Sync", sub: "Corporate system post", desc: "Automatically sync completed jobs, scrap, and verified output logs directly with the ERP ledger." }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PRODUCTION PIPELINE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">6-Step Production Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Configure, manage, and scale your shop floor data flow. Select a step to view details.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Vertical Step Selector */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border/80 text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                    <p className={`text-[10px] mt-1.5 leading-relaxed ${activeStep === s.num ? "text-white/80" : "text-muted-foreground"}`}>
                      {s.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step Detail Card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                  Step {currentStep.num} detail
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2">{currentStep.label}</h3>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider">{currentStep.sub}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Standardized MES/ERP integration compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductionAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Line 4 Variance");

  const prompts = [
    { id: "Line 4 Variance", label: "Line 4 Target Miss", question: "Explain why Assembly Line 4 missed its shift target." },
    { id: "Conveyor Stoppages", label: "Line 4 Conveyor Downtime", question: "Analyze downtime patterns on Feed Conveyor #1 this week." }
  ];

  const responses = {
    "Line 4 Variance": {
      observations: [
        "Line 4 finished the shift at 85.5% target (342 of 400 parts).",
        "Stoppages totaled 42 minutes: 15 mins planned changeover, and 27 mins material feed blockage."
      ],
      insights: [
        "Conveyor speed was reduced by 15% post-jam to prevent sensor misalignment, causing a loss of 32 units.",
        "Check spacer guide alignment during next maintenance window to prevent double-feeding."
      ]
    },
    "Conveyor Stoppages": {
      observations: [
        "Feed Conveyor #1 logged 3 separate jamming events this week, causing 52 minutes of unplanned downtime.",
        "Average recovery time was 17.3 minutes, leading to an estimated yield loss of 62 units."
      ],
      insights: [
        "Jams correlate with SKU changeovers under high cycle load rates.",
        "Recommend replacing mounting screws with self-locking bolts during the next PM window."
      ]
    }
  };

  const current = responses[activePrompt as keyof typeof responses];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Conversational AI Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-purple-500/10 text-purple-600">
                  <Sparkles className="h-3 w-3" />
                </span>
                <h5 className="font-display font-semibold text-xs">Synapse Production AI</h5>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-600 rounded-md font-semibold">Variance Analyst</span>
            </div>

            {/* Prompt Buttons */}
            <div className="flex gap-2">
              {prompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePrompt(p.id)}
                  className={`text-[9px] font-semibold px-2.5 py-1 rounded-lg transition-colors border ${
                    activePrompt === p.id 
                      ? "bg-purple-500/20 border-purple-500 text-purple-300 font-medium" 
                      : "bg-surface-muted/50 border-border text-muted-foreground hover:bg-surface-muted"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Chat output */}
            <div className="bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[11px] space-y-3.5">
              <div className="text-muted-foreground italic">
                "{prompts.find(p => p.id === activePrompt)?.question}"
              </div>
              
              <div className="border-t border-border/50 my-2 pt-2 space-y-3">
                <div className="font-semibold text-purple-400 font-display">Analysis Output:</div>
                <div className="space-y-1 bg-purple-500/5 p-2.5 rounded-xl border border-purple-500/10">
                  {current.observations.map((o, i) => (
                    <div key={i} className="flex gap-2 text-[10px]">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>

                <div className="font-semibold text-emerald-500 font-display">Advisor Recommendation:</div>
                <div className="space-y-1 bg-emerald-500/5 p-2.5 rounded-xl border border-emerald-500/10">
                  {current.insights.map((r, i) => (
                    <div key={i} className="flex gap-2 text-[10px]">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Assistant Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">AI COGNITION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">AI Production Advisor</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Translate shift logs and output variance into plain-language troubleshooting steps. Identify correlation with raw material batches and environmental parameters automatically.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Variance Insights", desc: "Explain the underlying patterns that triggered shift target misses." },
              { title: "Correlation Mapping", desc: "Correlate speed slows with conveyor and feeder anomalies." },
              { title: "Downtime Tagging Advice", desc: "AI alerts operators to standardize downtime codes post-incident." },
              { title: "Shift Audits", desc: "Draft end-of-shift reports from PLC telemetry summaries." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
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

export function ProductionDowntimeEventLog() {
  const [duration, setDuration] = useState(25);
  const costPerMin = 50; // rated lost cost per min

  const calculatedCost = duration * costPerMin;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">LOSS CAPTURE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Log Downtime Event</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Log and categorize line stoppages at the point of occurrence. Operators select standardized reason codes, calculate lost costs, and automatically alert supervisors to resolve delays.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Standard Code Trees", desc: "Log downtime under clean mechanical, electrical, or wait codes." },
              { title: "Cost Calculation", desc: "Automatically calculate financial impact based on line penalty rates." },
              { title: "Supervisor Alerts", desc: "Notify supervisors if downtime events exceed 10 minutes." },
              { title: "Direct MES Reconcile", desc: "Reconcile downtime duration with production logs automatically." }
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

        {/* Right Column: Downtime Event Mock Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Downtime Event Log</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 rounded-md">DWN-2026-102</span>
            </div>

            {/* Simulated Interactive Input Panel */}
            <div className="space-y-3.5 bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[10px]">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Asset Location</span>
                <div className="font-semibold text-foreground">Conveyor Belt Feed (Line 4)</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Reason Code</span>
                  <div className="font-semibold text-foreground">Mechanical Jam (Code 104)</div>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Escalation Status</span>
                  <div className="font-bold text-rose-500">Supervisor Notified</div>
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
                  Stoppage Duration: <span className="text-primary font-bold">{duration} Mins</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="60" 
                  value={duration} 
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Calculations Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-base font-bold text-rose-600 font-display">${calculatedCost.toLocaleString()}</h5>
                <small className="text-[9px] text-muted-foreground">Estimated Lost Cost</small>
              </div>
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-base font-bold text-amber-500 font-display">{Math.round(duration * 1.5)} units</h5>
                <small className="text-[9px] text-muted-foreground">Lost Yield Volume</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductionLossRca() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: RCA 5 Whys Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Production Root Cause Analysis</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 rounded-md font-semibold">RCA-PROD-102</span>
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2 text-[10px]">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-semibold">Guided 5 Whys Analysis</h6>
              <div className="space-y-2">
                {[
                  "Why did the conveyor jam? → Casing plates stacked and double-fed.",
                  "Why double-feed? → Spacer guide bracket was loose.",
                  "Why loose? → High-vibration during continuous run rates.",
                  "Why high-vibration? → Missing dampener pad on mounting plate.",
                  "Why missing? → Damaged during last tooling changeover and not logged."
                ].map((why, idx) => (
                  <div key={idx} className="flex gap-2 text-[10px] text-muted-foreground leading-relaxed">
                    <span className="text-primary font-bold">{idx + 1}</span>
                    <span>{why}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corrective Action Status */}
            <div className="bg-surface-muted/60 p-3.5 rounded-xl border border-border/50 space-y-2 text-[10px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">CAPA Action Item</span>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-amber-500/10 text-amber-600 rounded">Scheduled</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Task: Install self-locking mounting bolts and replacement dampener pad on Conveyor #1.
              </p>
              <div className="flex justify-between items-center text-[9px] text-muted-foreground pt-1">
                <span>Owner: J. Miller (Maintenance Tech)</span>
                <span>Due: Next PM window</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
              <TrendingUp className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">PATTERN CORRELATION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Production Root Cause Analysis</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Isolate recurring output inhibitors and design permanent fixes. Correlate raw downtime logs with machine parameters and product changeovers to trigger corrective actions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "TPM Loss Analysis", desc: "Compare actual repair durations against target recovery SLAs." },
              { title: "5 Whys Logging", desc: "Document root causes directly next to production board variance charts." },
              { title: "CAPA Tracking", desc: "Generate PM checks to retighten conveyor spacer guides." },
              { title: "Preventive Alarms", desc: "Flag vibration or torque anomalies that indicate feed drifts." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
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

export function ProductionScenarios() {
  const scenarios = [
    { title: "Batch Production", sub: "Mixers, Reactors, Ovens", desc: "Manage multi-step recipes, heat-treat cycles, and track material logs from raw inputs to finished batches." },
    { title: "Continuous Manufacturing", sub: "Extrusion, Roll Forming, Film", desc: "Track line run-rates, parts-per-minute speeds, scrap ratios, and detect continuous process deviations." },
    { title: "Discrete Assembly", sub: "Assembly Lines, Electronics", desc: "Reconcile completed parts against shift targets, calculate station cycle times, and automate line logs." },
    { title: "Changeover-Heavy Lines", sub: "High SKU, Tooling Swaps", desc: "Track changeover timelines against target durations, optimize tooling calibration, and log setup reasons." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">SCENARIO ADAPTABILITY</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Production Scenarios</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Pure Technology's production management layer is built to accommodate diverse manufacturing methodologies on the same floor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s, idx) => (
            <div key={idx} className="bg-surface-muted/30 border border-border p-6 rounded-2xl flex flex-col justify-between hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-[9px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-md uppercase">
                  {s.sub}
                </span>
                <h4 className="font-display font-bold text-sm text-foreground mt-2">{s.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductionConnectedHub() {
  const integrations = [
    { name: "ERP Integrations", desc: "Sync production outputs, verified batches, and job completions automatically with SAP, MS Dynamics, or Netsuite.", tags: ["Job Release", "Output Sync", "Scrap Logs"] },
    { name: "Quality Systems", desc: "Correlate output quantities and line speeds with SPC tolerance limits, reject counts, and lab LIMS measurements.", tags: ["Defect Sync", "MTR Validation", "Tolerance Locks"] },
    { name: "Maintenance & CMMS", desc: "Trigger work orders in UpKeep, Maximo, or Fiix automatically when line downtime logs exceed threshold limits.", tags: ["Auto Work Orders", "Meter Readings", "Tooling Logs"] },
    { name: "Scheduling & APS", desc: "Reconcile active schedules and dispatch lists with real-time station capabilities and line routing lists.", tags: ["Active Schedules", "Line Routing", "Due Dates"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">CONNECTED ENTERPRISE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Production Hub</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Eliminate operational silos. Bridge shop floor telemetry with enterprise planning and maintenance systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── DATA EXTRACTOR SPECIFIC COMPONENTS ───

export function ExtractorDigitalCenter() {
  const [selectedBatch, setSelectedBatch] = useState("Invoices");

  const batches = {
    "Invoices": {
      name: "BATCH-2026-08: Supplier Invoice Run",
      status: "Extraction Completed",
      confidence: "98.2%",
      flagged: "1 Document",
      docName: "INV-TataSteel-408.pdf",
      fields: [
        { label: "Supplier Name", val: "Tata Steel Ltd", match: true },
        { label: "Invoice Amount", val: "$24,500.00", match: true },
        { label: "Approved PO", val: "PO-89024 ($22,000)", match: false, reason: "Price Variance" }
      ]
    },
    "MTR Sheets": {
      name: "BATCH-2026-09: Raw Material Quality MTRs",
      status: "Verification Required",
      confidence: "88.5%",
      flagged: "2 Documents",
      docName: "MTR-Sandvik-094.pdf",
      fields: [
        { label: "Supplier Name", val: "Sandvik Castings", match: true },
        { label: "Batch ID", val: "BT-9024", match: true },
        { label: "Carbon Percentage", val: "0.22% (Max 0.20%)", match: false, reason: "High Carbon Limit" }
      ]
    }
  };

  const current = batches[selectedBatch as keyof typeof batches];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Database className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">DOCUMENT INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Extraction Digital Center</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Upload and process supplier records, quality sheets, and invoices automatically. Monitor active queues, check extraction confidence scores, and review flagged items in real-time.
          </p>

          <div className="space-y-4">
            {[
              { num: "01", title: "Automated Ingestion Queue", desc: "Monitor multi-format document batches as they are parsed and verified." },
              { num: "02", title: "Confidence Score Highlights", desc: "Inspect OCR character reliability scores to automate touchless approvals." },
              { num: "03", title: "Flagged Exception Isolation", desc: "Instantly quarantine files that fail limit constraints or layout formats." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-lg font-display font-bold text-primary">{item.num}</span>
                <div>
                  <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Extraction Dashboard Mock Card (Dark UI) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card" style={{"--card-accent": "var(--primary)"} as React.CSSProperties}>
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-600 rounded-md border border-indigo-500/20 font-medium">OCR BATCH RUN</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-muted/80 text-muted-foreground rounded-md">Job #JB-298</span>
              </div>
              
              <div className="flex gap-1.5">
                {["Invoices", "MTR Sheets"].map((b) => (
                  <button 
                    key={b}
                    onClick={() => setSelectedBatch(b)}
                    className={`text-[9px] font-mono px-3 py-1 rounded transition-colors ${
                      selectedBatch === b 
                        ? "bg-primary text-white font-bold" 
                        : "bg-surface-muted/80 text-muted-foreground hover:bg-surface-muted border border-border"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">Quarantine Scope: {current.flagged} flagged for review</p>
              </div>

              {/* Progress Bars / Metrics */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>EXTRACTION CONFIDENCE</span>
                    <span className="text-indigo-500 font-bold">{current.confidence}</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: current.confidence }}
                    />
                  </div>
                </div>

                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>PROCESSING STATUS</span>
                    <span className="text-foreground font-bold">{current.status}</span>
                  </div>
                </div>
              </div>

              {/* File details list */}
              <div className="bg-surface-muted/60 p-4 rounded-2xl border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground border-b border-border pb-2">
                  <span>ACTIVE FILE: {current.docName}</span>
                  <span className="text-rose-500">Flagged Exceptions</span>
                </div>
                
                <div className="space-y-2">
                  {current.fields.map((f, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] font-mono py-1.5 border-b border-border/40">
                      <span className="text-muted-foreground">{f.label}</span>
                      <div className="text-right">
                        <span className={`font-semibold ${f.match ? "text-foreground" : "text-rose-500 font-bold"}`}>
                          {f.val}
                        </span>
                        {!f.match && (
                          <span className="block text-[8px] text-rose-500 font-bold uppercase tracking-wider mt-0.5">
                            {f.reason}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExtractorWorkflowSteps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { num: 1, label: "Document Intake", sub: "Watched folder polling", desc: "Automatically ingest supplier invoices, PDF certificates, or Excel logs from watched directories, email attachments, or S3 uploads." },
    { num: 2, label: "Template Matching", sub: "Layout identification", desc: "Identify document layout patterns and dynamically map coordinates against pre-saved coordinate schemas." },
    { num: 3, label: "Field Extraction", sub: "OCR character recognition", desc: "Extract numeric limits, dates, batch IDs, and line tables from target coordinates with character confidence metrics." },
    { num: 4, label: "Data Validation", sub: "Boundary checking", desc: "Compare extracted values against purchase orders, limit bounds, and verify mathematical check totals." },
    { num: 5, label: "Exception Review", sub: "Operator mapping quarantine", desc: "Route template mismatches or values exceeding limit bounds to the review queue for fast manual offset correction." },
    { num: 6, label: "API / Database Push", sub: "MES & ERP sync", desc: "Synchronize approved clean data arrays directly into corporate database tables, inventory registers, or ERP entries." }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PROCESSING FLOW</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">6-Step Extraction Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Follow the automated lifecycle of raw document ingestion through template mapping, OCR parsing, and database posting.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Vertical Step Selector */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border/80 text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                    <p className={`text-[10px] mt-1.5 leading-relaxed ${activeStep === s.num ? "text-white/80" : "text-muted-foreground"}`}>
                      {s.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step Detail Card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                  Step {currentStep.num} details
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2">{currentStep.label}</h3>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider">{currentStep.sub}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Automated OCR and parsing standard compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExtractorAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Validation Anomaly");

  const prompts = [
    { id: "Validation Anomaly", label: "Invoice Target Miss", question: "Explain why invoice INV-TataSteel-408.pdf failed validation." },
    { id: "MTR Anomaly", label: "MTR Boundary Check", question: "Explain why MTR-Sandvik-094.pdf triggered a warning." }
  ];

  const answers = {
    "Validation Anomaly": {
      observations: [
        "INV-TataSteel-408.pdf extracted invoice total of $24,500.00.",
        "Matching PO-89024 total is recorded as $22,000.00."
      ],
      recommendations: [
        "A freight surcharge of $2,500.00 was identified on page 1, line 4, which is not present in the PO line items.",
        "Recommend routing this invoice to procurement for freight fee variance approval."
      ]
    },
    "MTR Anomaly": {
      observations: [
        "MTR-Sandvik-094.pdf recorded Carbon Content at 0.22% for casting batch BT-9024.",
        "Nominal carbon limits for SKU-784 casing is defined as 0.20% maximum."
      ],
      recommendations: [
        "Extrusion carbon limit check triggered a variance warning of +10% over the maximum limit.",
        "Recommend routing batch BT-9024 to Quality engineering for structural stress validation."
      ]
    }
  };

  const current = answers[activePrompt as keyof typeof answers];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Mock Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-purple-500/10 text-purple-600">
                  <Sparkles className="h-3 w-3" />
                </span>
                <h5 className="font-display font-semibold text-xs">Synapse Extraction AI</h5>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-600 rounded-md font-semibold">Document Advisor</span>
            </div>

            {/* Prompt Buttons */}
            <div className="flex gap-2">
              {prompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePrompt(p.id)}
                  className={`text-[9px] font-semibold px-2.5 py-1 rounded-lg transition-colors border ${
                    activePrompt === p.id 
                      ? "bg-purple-500/20 border-purple-500 text-purple-300 font-medium" 
                      : "bg-surface-muted/50 border-border text-muted-foreground hover:bg-surface-muted"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Response Area */}
            <div className="bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[11px] space-y-3.5">
              <div className="text-muted-foreground italic">
                "{prompts.find(p => p.id === activePrompt)?.question}"
              </div>

              <div className="border-t border-border/50 my-2 pt-2 space-y-3">
                <div className="font-semibold text-purple-400 font-display">Analysis Output:</div>
                <div className="space-y-1 bg-purple-500/5 p-2.5 rounded-xl border border-purple-500/10 text-[10px]">
                  {current.observations.map((o, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>

                <div className="font-semibold text-emerald-500 font-display">Anomalies Detected:</div>
                <div className="space-y-1 bg-emerald-500/5 p-2.5 rounded-xl border border-emerald-500/10 text-[10px]">
                  {current.recommendations.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Assistant Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">AI COGNITION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">AI Extraction Advisor</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Translate extraction exceptions and validation failures into plain-language summaries. Explain variances between purchase orders, invoices, and quality parameters automatically.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Anomaly Flag Analysis", desc: "Explain the underlying layout or value deviations in simple text." },
              { title: "PO-Invoice Correlation", desc: "Cross-reference billing lines against active contract POs automatically." },
              { title: "MTR Limit Checks", desc: "Verify material certificates match drawing specification boundaries." },
              { title: "Confidence Auditing", desc: "Generate OCR character warnings for check validation tasks." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
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

export function ExtractorExceptionsLog() {
  const [offsetValue, setOffsetValue] = useState(0);

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">QUARANTINE REVIEW</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Extraction Exceptions</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Quarantine documents that fail template matching or have out-of-range values. Operators check and map layouts with visual tools to eliminate pipeline delays.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Validation Quarantines", desc: "Quarantine files that drift from standard template coordinates." },
              { title: "Drag-and-Drop Mapping", desc: "Operators map coordinates visually, updating schemas for future runs." },
              { title: "Operator Alerts", desc: "Alert processing teams immediately when confidence scores drop." },
              { title: "Data Lineage Tracking", desc: "Retain raw PDF files alongside extracted JSON lines for audits." }
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

        {/* Right Column: Exceptions Log Mock Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Flagged Exception Queue</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 rounded-md">ERR-EXT-402</span>
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono">
              <div>
                <h6 className="font-bold text-foreground">MTR-TataSteel-089.pdf</h6>
                <small className="text-muted-foreground text-[9px]">OCR Confidence: 22% (No layout match)</small>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500 text-white rounded font-medium">Flagged</span>
            </div>

            {/* Interactive Alignment Slider Panel */}
            <div className="bg-surface-muted/60 p-4 rounded-2xl border border-border/50 space-y-3.5 text-[10px] font-mono">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Carbon Content Tag</span>
                <span className="text-rose-500 font-bold">Unmapped Coordinate</span>
              </div>
              
              <div>
                <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Adjust Boundary Coordinate Offset: <span className="text-primary font-bold">{offsetValue}px</span>
                </label>
                <input 
                  type="range" 
                  min="-50" 
                  max="50" 
                  value={offsetValue} 
                  onChange={(e) => setOffsetValue(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="text-[9px] text-muted-foreground bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl border border-border/50 leading-normal">
                {offsetValue === 0 
                  ? "Drag slider to align OCR bounding boxes with Carbon % table cell." 
                  : `Offset calibrated at ${offsetValue}px. Coordinates matched (Value detected: 0.18%).`
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExtractorPatternAnalysis() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Pattern Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Template Error Pattern Analysis</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 rounded-md font-semibold">RCA-EXT-98</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-rose-500 font-medium">14 Fails</div>
                <div className="text-[8px] text-muted-foreground">Sandvik Invoices</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-primary font-medium">3.4 min</div>
                <div className="text-[8px] text-muted-foreground">Avg Map Time</div>
              </div>
              <div className="bg-surface-muted/60 p-2 rounded-xl">
                <div className="text-xs font-bold text-sky-600 font-medium">92%</div>
                <div className="text-[8px] text-muted-foreground">Correlation</div>
              </div>
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2 text-[10px]">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-semibold">Analysis Findings</h6>
              <div className="space-y-1 text-[10px] text-muted-foreground leading-normal">
                <p><strong>Anomaly:</strong> Sandvik Castings updated invoice layout structures on Aug 12, shifting PO block positions from header to page 2 footer.</p>
                <p><strong>Impact:</strong> OCR parser failed coordinates on 14 straight uploads, triggering template mismatch alerts.</p>
              </div>
            </div>

            {/* Corrective Action Status */}
            <div className="bg-surface-muted/60 p-3 rounded-xl border border-border/50 space-y-1.5 text-[10px]">
              <div className="flex justify-between items-center font-semibold">
                <span>Calibrate Mapping Template</span>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded">Complete</span>
              </div>
              <p className="text-muted-foreground leading-normal">
                Conducted drag-and-drop bounding box alignment for Sandvik invoices. Layout template updated globally.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
              <TrendingUp className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">PIPELINE ANALYSIS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Pattern & Drift Analysis</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Identify recurring format failures and coordinate calibrations. Detect which supplier templates require coordinate offsets to continuously optimize confidence rates.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Supplier Error Audits", desc: "Identify which supplier templates trigger the most extraction errors." },
              { title: "Drift Correlation", desc: "Analyze OCR coordinate drifts as supplier formatting changes." },
              { title: "Dynamic Corrections", desc: "Update parsing templates globally once a coordinate offset is saved." },
              { title: "SLA Ingest Auditing", desc: "Compare manual correction speeds against target SLAs." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
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

export function ExtractorDocTypes() {
  const docTypes = [
    { title: "Spreadsheets", sub: "CSV, XLSX, XLS", desc: "Import shift yield files, inventory logs, machine outputs, and historical quality tables automatically." },
    { title: "PDF Documents", sub: "Digital & Scanned MTRs", desc: "Parse supplier chemical certificates, physical test reports, and billing bills into database rows." },
    { title: "Scanned Paper Forms", sub: "Operator Logs, Checksheets", desc: "Convert scanned handwritten shift checklists and parameter checks into structured logs." },
    { title: "System Exports", sub: "SCADA Telemetry, XML", desc: "Ingest structured system log outputs, alarm telemetry, and planning exports." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">LAYOUT ADAPTABILITY</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Document Types</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Pure Technology's extraction engine supports diverse semi-structured layout formats commonly found in industrial pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docTypes.map((item, idx) => (
            <div key={idx} className="bg-surface-muted/30 border border-border p-6 rounded-2xl flex flex-col justify-between hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-[9px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-md uppercase">
                  {item.sub}
                </span>
                <h4 className="font-display font-bold text-sm text-foreground mt-2">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExtractorConnectedPipeline() {
  const pipelines = [
    { name: "Quality Databases", desc: "Push parsed material test parameters (MTR) directly into SPC and capability databases for automated validation checks.", tags: ["SPC Databases", "LIMS Sync", "Parameter Limits"] },
    { name: "Inventory Registers", desc: "Extract supplier packing lists and bill of materials to dynamically update stock counts and raw inventory ledgers.", tags: ["Material Logs", "SKU Mapping", "Stock Levels"] },
    { name: "Corporate ERP", desc: "Sync validated invoice amount totals and PO items directly with SAP, NetSuite, or Dynamics for finance clearance.", tags: ["Invoice Sync", "PO Mapping", "Billing Lines"] },
    { name: "Zometric API Push", desc: "Route validated JSON or XML extraction arrays directly to external REST APIs or local factory MES endpoints.", tags: ["JSON Webhooks", "XML Streams", "Edge Post"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">CONNECTED PIPELINES</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Data Pipeline</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Send validated extraction arrays directly into quality databases, inventory registers, and ERP layers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelines.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── INVENTORY MANAGEMENT SPECIFIC COMPONENTS ───

export function InventoryDigitalCenter() {
  const [selectedSku, setSelectedSku] = useState("SKU-4471");

  const skusData = {
    "SKU-4471": {
      name: "SKU-4471: Steel Fasteners M8",
      onHand: 14200,
      reserved: 4000,
      reorder: 5000,
      location: "Rack B, Bin 12",
      status: "Adequate",
      statusColor: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20"
    },
    "SKU-3104": {
      name: "SKU-3104: Copper Rings M12",
      onHand: 2800,
      reserved: 1500,
      reorder: 3000,
      location: "Rack C, Bin 04",
      status: "Low Stock Warning",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20 font-semibold animate-pulse"
    }
  };

  const current = skusData[selectedSku as keyof typeof skusData];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Package className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">STORES CONTROL</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Inventory Digital Center</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Provide stores and warehouse teams with a live operational view. Track physical counts, reserved batch stocks, safety thresholds, and bin locations in real-time.
          </p>

          <div className="space-y-4">
            {[
              { num: "01", title: "Live Stock Balances", desc: "Monitor on-hand quantities, pending allocations, and reorder levels." },
              { num: "02", title: "Bin Location Mapping", desc: "Instantly trace inventory coordinates down to specific racks, zones, and bins." },
              { num: "03", title: "Replenishment Flags", desc: "Alert teams dynamically when available stock drops below reorder points." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-lg font-display font-bold text-primary">{item.num}</span>
                <div>
                  <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Stock Card (Light Glassmorphism Card) */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border ${current.statusColor}`}>
                  {current.status.toUpperCase()}
                </span>
                <span className="text-[9px] font-mono tracking-wider text-muted-foreground font-semibold bg-surface-muted/80 px-2 py-0.5 rounded border border-border/50">STORES CONTROL</span>
              </div>
              
              <div className="flex gap-1.5">
                {["SKU-4471", "SKU-3104"].map((sku) => (
                  <button 
                    key={sku}
                    onClick={() => setSelectedSku(sku)}
                    className={`text-[9px] font-mono px-3 py-1 rounded transition-colors ${
                      selectedSku === sku 
                        ? "bg-primary text-white font-bold" 
                        : "bg-surface-muted/80 text-muted-foreground hover:bg-surface-muted border border-border"
                    }`}
                  >
                    {sku}
                  </button>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">Warehouse Location: {current.location}</p>
              </div>

              {/* Progress Bars / Metrics */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>ON-HAND INVENTORY</span>
                    <span className="text-foreground font-bold">{current.onHand.toLocaleString()} units</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${selectedSku === "SKU-3104" ? "bg-rose-500" : "bg-primary"}`} 
                      style={{ width: `${Math.min(100, (current.onHand / 15000) * 100)}%` }}
                    />
                  </div>
                </div>

                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>REORDER LIMIT</span>
                    <span className="text-amber-500 font-bold">{current.reorder.toLocaleString()} units</span>
                  </div>
                </div>
              </div>

              {/* Detail Rows */}
              <div className="space-y-2 pt-2 border-t border-border">
                <div className="flex justify-between items-center text-[10px] font-mono py-1.5 border-b border-border">
                  <span className="text-muted-foreground uppercase tracking-wider">RESERVED STOCK (ALLOCATED)</span>
                  <span className="text-foreground font-bold">{current.reserved.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono py-1.5">
                  <span className="text-muted-foreground uppercase tracking-wider">AVAILABLE NET STOCK</span>
                  <span className={`font-bold ${current.onHand - current.reserved < 0 ? "text-rose-500" : "text-emerald-500"}`}>
                    {(current.onHand - current.reserved).toLocaleString()} units
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

export function InventoryWorkflowSteps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { num: 1, label: "Receipt", sub: "Material check-in", desc: "Log incoming supplier parts, capture quantities, check packing lists against active POs, and generate tracking lot codes." },
    { num: 2, label: "Putaway", sub: "Rack-bin assignment", desc: "Route received stock to specific storage coordinates, scan bin codes, and record mapping coordinates in local ledgers." },
    { num: 3, label: "Reservation", sub: "Production allocation", desc: "Reserve components dynamically for scheduled job batches, locking raw stocks to prevent double-issues." },
    { num: 4, label: "Issue / Transfer", sub: "Line dispatching", desc: "Record stock issue transactions at workstations as parts move from central stores to line-side staging bins." },
    { num: 5, label: "Cycle Count", sub: "Physical store audits", desc: "Conduct rolling inventory audits, verify bin counts, and record discrepancy codes for immediate review." },
    { num: 6, label: "Replenishment Trigger", sub: "PO & Purchase release", desc: "Post reorder alerts directly to corporate purchasing queues, auto-triggering PO releases on low stock." }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">STORES FLOW</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">6-Step Inventory Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Manage the physical stock lifecycle from dock receipt to workstation issue and automatic purchase releases.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Step List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border/80 text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                    <p className={`text-[10px] mt-1.5 leading-relaxed ${activeStep === s.num ? "text-white/80" : "text-muted-foreground"}`}>
                      {s.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step details card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                  Step {currentStep.num} details
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2">{currentStep.label}</h3>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider">{currentStep.sub}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Standardized CMMS and ERP inventory protocols compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InventoryAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("SKU Shortage");

  const prompts = [
    { id: "SKU Shortage", label: "SKU-4471 Shortage", question: "Explain why SKU-4471 is short this week." },
    { id: "Reorder Trigger", label: "SKU-3104 Warning", question: "Explain why SKU-3104 triggered a low stock warning." }
  ];

  const answers = {
    "SKU Shortage": {
      observations: [
        "Fastener SKU-4471 experienced a stock drop of 12,000 units on Aug 14.",
        "System consumption recorded at Line 4 exceeded the planned batch consumption by 45%."
      ],
      recommendations: [
        "The variance correlates with 3 recurring casing double-feed incidents on Line 4, which led to raw fastener scrap losses.",
        "Replenishment requisition of 15,000 units has been pushed to SAP automatically."
      ]
    },
    "Reorder Trigger": {
      observations: [
        "SKU-3104 (Copper Rings) on-hand balance is 2,800 units, crossing the reorder threshold of 3,000 units.",
        "Supplier delivery cycles for Bridgestone average 10 working days."
      ],
      recommendations: [
        "A reorder trigger was sent to procurement queues to prevent stock depletion before scheduled production run #42.",
        "Auto-generate PO draft to Bridgestone for 10,000 Copper Rings."
      ]
    }
  };

  const current = answers[activePrompt as keyof typeof answers];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Assistant Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-purple-500/10 text-purple-600">
                  <Sparkles className="h-3 w-3" />
                </span>
                <h5 className="font-display font-semibold text-xs">Synapse Inventory AI</h5>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-600 rounded-md font-semibold">Shortage Predictor</span>
            </div>

            {/* Prompt Buttons */}
            <div className="flex gap-2">
              {prompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePrompt(p.id)}
                  className={`text-[9px] font-semibold px-2.5 py-1 rounded-lg transition-colors border ${
                    activePrompt === p.id 
                      ? "bg-purple-500/20 border-purple-500 text-purple-300 font-medium" 
                      : "bg-surface-muted/50 border-border text-muted-foreground hover:bg-surface-muted"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Output */}
            <div className="bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[11px] space-y-3.5">
              <div className="text-muted-foreground italic">
                "{prompts.find(p => p.id === activePrompt)?.question}"
              </div>

              <div className="border-t border-border/50 my-2 pt-2 space-y-3">
                <div className="font-semibold text-purple-400 font-display">Analysis Output:</div>
                <div className="space-y-1 bg-purple-500/5 p-2.5 rounded-xl border border-purple-500/10 text-[10px]">
                  {current.observations.map((o, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>

                <div className="font-semibold text-emerald-500 font-display">Resolution Details:</div>
                <div className="space-y-1 bg-emerald-500/5 p-2.5 rounded-xl border border-emerald-500/10 text-[10px]">
                  {current.recommendations.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Assistant Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">AI COGNITION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">AI Inventory Advisor</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Translate warehouse counts and shortages into plain-language warnings. Track lead times, auto-generate replenishment drafts, and forecast stockout issues before they cause line stoppages.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Shortage Explainer", desc: "Explain the underlying run variations that triggered material shortages." },
              { title: "Lead-Time Warnings", desc: "Audit supplier lead times to suggest early purchase orders." },
              { title: "Discrepancy Checks", desc: "Identify workstations causing unlogged material variances." },
              { title: "Batch Auto-Reservation", desc: "Auto-reserve parts for scheduled batch runs based on BOM limits." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
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

export function InventoryDiscrepancyLog() {
  const [physicalCount, setPhysicalCount] = useState(13950);
  const systemCount = 14200;
  const variance = physicalCount - systemCount;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">VARIANCE CAPTURE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Log Stock Discrepancy</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Record variations between system ledger quantities and physical shelf audits. Tie each deviation directly to a bin location, SKU, and operational cause.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Physical Count Entry", desc: "Enable store teams to log physical counts directly from bins." },
              { title: "Variance Calculation", desc: "Instantly calculate negative or positive variance logs." },
              { title: "Standard Cause Trees", desc: "Categorize discrepancies under scrap, unlogged transfers, or damage." },
              { title: "Ledger Adjustment Requests", desc: "Flag ledger corrections for shift supervisor approval." }
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

        {/* Right Column: Log Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Discrepancy Log</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 rounded-md">DIS-2026-904</span>
            </div>

            <div className="space-y-3.5 bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[10px] font-mono">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">SKU IN AUDIT</span>
                <div className="font-semibold text-foreground">SKU-4471: Steel Fasteners M8</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Location Coordinates</span>
                  <div className="font-semibold text-foreground">Rack B, Bin 12</div>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Cause Code</span>
                  <div className="font-bold text-rose-500">Unlogged Scrap on Line 4</div>
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
                  Physical Count Input: <span className="text-primary font-bold">{physicalCount.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="13500" 
                  max="14500" 
                  value={physicalCount} 
                  onChange={(e) => setPhysicalCount(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-base font-bold text-rose-600 font-display">{variance.toLocaleString()} units</h5>
                <small className="text-[9px] text-muted-foreground">Variance Logged</small>
              </div>
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-base font-bold text-amber-500 font-display">{systemCount.toLocaleString()} units</h5>
                <small className="text-[9px] text-muted-foreground">System Count</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InventoryPatternAnalysis() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: RCA Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Stores Shortage Root Cause Analysis</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 rounded-md font-semibold">RCA-INV-104</span>
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2 text-[10px]">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-semibold">Shortage Pattern Finding</h6>
              <div className="space-y-2 text-[10px] text-muted-foreground leading-normal">
                <p><strong>Anomaly:</strong> Fastener SKU-4471 on-hand quantities persistently drift negative (-2.3% variance average) during shift runs.</p>
                <p><strong>Analysis:</strong> Cross-referencing logs with downtime alerts tags 92% of the variance directly to the Line 4 conveyor double-feeds (parts scrapped on floor and swept away without scrap logging tags).</p>
              </div>
            </div>

            <div className="bg-surface-muted/60 p-3.5 rounded-xl border border-border/50 space-y-2 text-[10px]">
              <div className="flex justify-between items-center font-semibold">
                <span>CAPA Resolution Item</span>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded">Implemented</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Task: Add visual scrap entry button to Line 4 terminal. Enable operators to record floor scraps instantly without leaving the station.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
              <TrendingUp className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">PATTERN ANALYSIS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Shortage & Discrepancy Analysis</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Isolate physical stores leaks and trace recurring count variance. Correlate cycle adjustments with assembly run scrap records to maintain audit logs.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Physical Drift Tracking", desc: "Monitor negative count drifts to pinpoint where scrap leakage occurs." },
              { title: "Line-Side Correlation", desc: "Correlate workstation issues with unlogged material drops." },
              { title: "CAPA Action Pushes", desc: "Dispatch warning tickets to tooling leads for vibrating feeders." },
              { title: "Audit Log Compliance", desc: "Provide fully compliant records of physical ledger updates." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
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

export function InventoryScenarios() {
  const scenarios = [
    { title: "Raw Materials", sub: "Steel Coils, Pellets, Castings", desc: "Manage bulk receipts, lot coordinate tracking, and direct supplier material verification programs." },
    { title: "Work-in-Progress (WIP)", sub: "Sub-assemblies, Staged Runs", desc: "Track semi-finished assemblies, batches awaiting curing, and reconcile counts across workstations." },
    { title: "Finished Goods", sub: "Packaged SKUs, Shipments", desc: "Verify final packaging counts, log dispatch receipts, and update corporate inventories automatically." },
    { title: "Consumables & Spares", sub: "Tooling inserts, fasteners", desc: "Monitor tooling inserts, lubricants, machine spare parts, and enforce safety stock reorders." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">SCENARIO COVERAGE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Inventory Scenarios</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Bridge physical warehouses with line-side inventories. Track every category of raw, WIP, and consumable stock.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s, idx) => (
            <div key={idx} className="bg-surface-muted/30 border border-border p-6 rounded-2xl flex flex-col justify-between hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-[9px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-md uppercase">
                  {s.sub}
                </span>
                <h4 className="font-display font-bold text-sm text-foreground mt-2">{s.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InventoryConnectedHub() {
  const integrations = [
    { name: "ERP Integrations", desc: "Post material receipts, issues, and counts directly to SAP, NetSuite, or Dynamics in real-time.", tags: ["Receipt Post", "Issue Sync", "Ledger Post"] },
    { name: "Production Scheduling", desc: "Reserve components automatically based on scheduled production requirements and BOM limits.", tags: ["BOM Allocation", "Schedule Checks", "Lock Reservation"] },
    { name: "Quality Holds", desc: "Block out-of-spec incoming batches or failed inspection lots from being issued to workstations.", tags: ["LIMS Quarantine", "Reject Block", "MRB Isolation"] },
    { name: "Automated Purchasing", desc: "Trigger replenishment orders or RFQs to approved suppliers when stock drops below safety levels.", tags: ["Safety Reorder", "RFQ Push", "PO Draft"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">CONNECTED PIPELINES</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Inventory Hub</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Unify warehousing telemetry with procurement and planning ledgers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── SCRAPS INVENTORY MANAGEMENT SPECIFIC COMPONENTS ───

export function ScrapDigitalCenter() {
  const [selectedBatch, setSelectedBatch] = useState("Plate Steel");

  const batches = {
    "Plate Steel": {
      name: "SCRAP-2026: Plate Steel Batch 4471",
      weight: "450 kg",
      reason: "Dimension Drift (Laser calibration drift)",
      status: "Awaiting EHS Manifest Approval",
      costLoss: "$1,800.00",
      statusColor: "text-amber-600 bg-amber-500/10 border-amber-500/20"
    },
    "Copper Tubing": {
      name: "SCRAP-2026: Copper Tubing Batch 3104",
      weight: "120 kg",
      reason: "Insulation Crack (High tooling heat)",
      status: "Dispatched to Recovery Vendor",
      costLoss: "$960.00",
      statusColor: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20"
    }
  };

  const current = batches[selectedBatch as keyof typeof batches];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Trash2 className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">YIELD CONTROL</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Scrap Digital Center</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Record material rejects, weight entries, and environmental status directly on the manufacturing floor. Monitor scrap logs, reasons, and disposal progress in real-time.
          </p>

          <div className="space-y-4">
            {[
              { num: "01", title: "Scale Weight Log", desc: "Ingest batch reject weights directly from digital scale terminal integrations." },
              { num: "02", title: "TPM Reason Coding", desc: "Map defects to standard EHS reject reasons for structural yield audits." },
              { num: "03", title: "Manifest Routing Gates", desc: "Track waste batches from initial scale-in to EHS approval and vendor dispatch." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-lg font-display font-bold text-primary">{item.num}</span>
                <div>
                  <h4 className="font-display font-semibold text-xs text-foreground">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Scrap Card */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border ${current.statusColor}`}>
                  {current.status.toUpperCase()}
                </span>
                <span className="text-[9px] font-mono tracking-wider text-muted-foreground font-semibold bg-surface-muted/80 px-2 py-0.5 rounded border border-border/50">STORES CONTROL</span>
              </div>
              
              <div className="flex gap-1.5">
                {["Plate Steel", "Copper Tubing"].map((b) => (
                  <button 
                    key={b}
                    onClick={() => setSelectedBatch(b)}
                    className={`text-[9px] font-mono px-3 py-1 rounded transition-colors ${
                      selectedBatch === b 
                        ? "bg-primary text-white font-bold" 
                        : "bg-surface-muted/80 text-muted-foreground hover:bg-surface-muted border border-border"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">Reject Cause: {current.reason}</p>
              </div>

              {/* Progress Bars / Metrics */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>REJECT WEIGHT</span>
                    <span className="text-foreground font-bold">{current.weight}</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-rose-500 transition-all duration-500" 
                      style={{ width: selectedBatch === "Plate Steel" ? "75%" : "35%" }}
                    />
                  </div>
                </div>

                <div className="bg-surface-muted/60 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>FINANCIAL LOSS</span>
                    <span className="text-rose-600 font-bold">{current.costLoss}</span>
                  </div>
                </div>
              </div>

              {/* Detail Rows */}
              <div className="space-y-2 pt-2 border-t border-border">
                <div className="flex justify-between items-center text-[10px] font-mono py-1.5 border-b border-border">
                  <span className="text-muted-foreground uppercase tracking-wider">DISPOSAL VENDOR DISPATCH</span>
                  <span className="text-foreground font-bold">{current.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScrapWorkflowSteps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1, label: "Reject Capture", sub: "Floor defect logging",
      desc: "Log out-of-spec products or raw materials instantly at assembly stations, referencing SKU and batch numbers.",
      bullets: [
        "Scan barcode or QR code to link reject to active job and SKU",
        "Record reject quantity, operator ID, and workstation number",
        "Auto-timestamp each entry against shift schedule for accountability",
        "Attach photo evidence of defect directly from mobile or floor terminal"
      ],
      actions: ["SKU Reject Log", "Shift Timestamp", "Batch Link", "Photo Capture"]
    },
    {
      num: 2, label: "Reason Coding", sub: "Standard TPM mapping",
      desc: "Classify reject logs under EHS categories (laser drift, insulation splits) to track recurring yield loss patterns.",
      bullets: [
        "Map each reject to a standard TPM reason code library (e.g. Laser Drift, Tooling Heat)",
        "Support custom site-specific reason codes configured per product line",
        "Aggregate reason codes weekly to surface top-5 yield loss causes",
        "Trigger supervisor alerts when any single reason exceeds threshold counts"
      ],
      actions: ["TPM Code Mapping", "Custom Reasons", "Threshold Alerts", "Weekly Trends"]
    },
    {
      num: 3, label: "Weighing & Logging", sub: "Scale telemetry ingestion",
      desc: "Weigh the batch on floor scale platforms to pull telemetry records into clean database files automatically.",
      bullets: [
        "Integrate directly with digital dock scales via local network protocol",
        "Log gross and net weights per batch automatically without manual entry",
        "Flag weight readings outside expected range for supervisor review",
        "Generate scale receipt records aligned with certified manifest requirements"
      ],
      actions: ["Scale Integration", "Gross/Net Capture", "Variance Flag", "Manifest Receipt"]
    },
    {
      num: 4, label: "Segregation", sub: "EHS storage tagging",
      desc: "Stage scraps in specific color-coded storage bins (metals, plastics, chemical flush) with hazard tags.",
      bullets: [
        "Assign each scrap batch to a designated storage zone by waste category",
        "Print or scan hazard tags (GHS labels, waste codes) on bin placement",
        "Track bin fill levels to trigger collection before overflow",
        "Maintain digital map of active segregation zones across plant floor"
      ],
      actions: ["Zone Assignment", "Hazard Tagging", "Fill Monitoring", "Floor Map View"]
    },
    {
      num: 5, label: "Disposal Scheduling", sub: "Contractor pickup release",
      desc: "Schedule certified recyclers to clear staged bins, dispatching pickup requisitions via vendor webhooks.",
      bullets: [
        "Generate vendor pickup requisitions automatically on bin-full triggers",
        "Send pickup requests via secure webhook to certified recycler portals",
        "Track pickup ETA and actual arrival against scheduled windows",
        "Log contractor license, vehicle ID, and driver confirmation on each run"
      ],
      actions: ["Auto-Requisition", "Vendor Webhook", "ETA Tracking", "Driver Confirmation"]
    },
    {
      num: 6, label: "Manifest Reconciliation", sub: "Regulatory EHS sign-off",
      desc: "Reconcile vendor manifest weights with plant scales, validating regulatory environmental receipts.",
      bullets: [
        "Compare plant scale log weight vs. vendor cargo manifest weight automatically",
        "Quarantine mismatches exceeding configured tolerance for supervisor review",
        "Attach PDF manifest receipts to the scrap batch record permanently",
        "Post reconciled records to EPA compliance portals and cost center ledgers"
      ],
      actions: ["Weight Reconcile", "Exception Quarantine", "PDF Attachment", "EPA Sync"]
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">COMPLIANCE PIPELINE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">6-Step Scrap Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Follow the regulated path of reject logging, reason classification, EHS bin segregation, and vendor manifest reconciliation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Step List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border/80 text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step details card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                    Step {currentStep.num} of 6
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/60 px-2 py-0.5 rounded border border-border">
                    {currentStep.actions.length} system actions
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">{currentStep.label}</h3>
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{currentStep.sub}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">What happens in this step</h6>
                  <ul className="space-y-2">
                    {currentStep.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Tags */}
                <div className="pt-3 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">System functions activated</h6>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.actions.map((tag) => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 bg-primary/8 text-primary border border-primary/15 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Certified hazardous & raw waste manifest compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function ScrapAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Copper Spike");

  const prompts = [
    { id: "Copper Spike", label: "Copper Scrap Increase", question: "Explain why copper wiring scrap rose 35% this month." },
    { id: "Laser Drift", label: "Plate Steel Spikes", question: "Analyze plate steel reject spikes on laser table 1." }
  ];

  const answers = {
    "Copper Spike": {
      observations: [
        "Copper scrap logs recorded a volume of 1,200 meters on Line 3.",
        "Reject reason codes identify insulation splitting post-extrusion."
      ],
      recommendations: [
        "Variance correlates with high tooling head temperatures exceeding nominal limits by 14°C on afternoon runs.",
        "Recommend tooling calibration adjustments to lower extrusion pre-heats."
      ]
    },
    "Laser Drift": {
      observations: [
        "Laser Table 1 logged 4 separate dimension reject batches (totaling 380 kg of plate steel).",
        "Variance logs indicate coordinate shifts during plate trimming runs."
      ],
      recommendations: [
        "Laser offset drifted by 1.2mm due to high-vibration tool setups.",
        "Install dampener brackets on Laser Table #1 before the next job release."
      ]
    }
  };

  const current = answers[activePrompt as keyof typeof answers];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Assistant Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-purple)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-purple-500/10 text-purple-600">
                  <Sparkles className="h-3 w-3" />
                </span>
                <h5 className="font-display font-semibold text-xs">Synapse Scrap AI</h5>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-600 rounded-md font-semibold">Yield Auditor</span>
            </div>

            {/* Prompt Buttons */}
            <div className="flex gap-2">
              {prompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePrompt(p.id)}
                  className={`text-[9px] font-semibold px-2.5 py-1 rounded-lg transition-colors border ${
                    activePrompt === p.id 
                      ? "bg-purple-500/20 border-purple-500 text-purple-300 font-medium" 
                      : "bg-surface-muted/50 border-border text-muted-foreground hover:bg-surface-muted"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Response Area */}
            <div className="bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[11px] space-y-3.5">
              <div className="text-muted-foreground italic">
                "{prompts.find(p => p.id === activePrompt)?.question}"
              </div>

              <div className="border-t border-border/50 my-2 pt-2 space-y-3">
                <div className="font-semibold text-purple-400 font-display">Analysis Output:</div>
                <div className="space-y-1 bg-purple-500/5 p-2.5 rounded-xl border border-purple-500/10 text-[10px]">
                  {current.observations.map((o, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>

                <div className="font-semibold text-emerald-500 font-display">Anomalies Traced:</div>
                <div className="space-y-1 bg-emerald-500/5 p-2.5 rounded-xl border border-emerald-500/10 text-[10px]">
                  {current.recommendations.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Assistant Descriptions */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">AI COGNITION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">AI Scrap Advisor</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Translate physical scrap logs and yield variances into plain-language diagnostic reports. Correlate scrap reasons with machine temperatures, speeds, and active supply lots automatically.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Yield Variance Audits", desc: "Explain the underlying run variations that triggered material waste." },
              { title: "Tooling Anomalies", desc: "Correlate tool vibrations or heats with dimensional scrap spikes." },
              { title: "EPA Manifest Warnings", desc: "Flag weight deviations on recycler manifest shipments automatically." },
              { title: "Cost Center Posting", desc: "Draft direct scrap financial adjustments to the line ledger." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
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

export function ScrapDisposalExceptionLog() {
  const [vendorWeight, setVendorWeight] = useState(415);
  const plantWeight = 450;
  const variance = vendorWeight - plantWeight;

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">VARIANCE QUARANTINE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Log Disposal Exception</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Quarantine discrepancies between plant scale measurements and certified recycling contractor manifests. Track cargo pickup delays, verify regulatory compliance records, and resolve cost allocations.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Weight Reconcile Checks", desc: "Flag manifest weight differences between plant and recycler receipts." },
              { title: "Exception Quarantine", desc: "Hold variance items automatically from financial cost center settlement." },
              { title: "Pickup Tracking", desc: "Log missed vendor pickups and manifest schedule exceptions." },
              { title: "EPA Audit Trails", desc: "Retain certified recycler PDF manifests alongside scale histories." }
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

        {/* Right Column: Exception Log Card */}
        <div className="lg:col-span-6">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-red)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Disposal Manifest Exception</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 rounded-md font-semibold">EXC-WASTE-902</span>
            </div>

            <div className="space-y-3.5 bg-surface-muted/40 p-4 rounded-2xl border border-border/50 text-[10px] font-mono">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Contracted Vendor</span>
                <div className="font-semibold text-foreground">Certified Metal Recovery Ltd</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">Cargo Batch ID</span>
                  <div className="font-semibold text-foreground">SCRAP-2026-08B (Steel)</div>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">EHS Waste Code</span>
                  <div className="font-bold text-rose-500">IND-METAL-08B</div>
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
                  Vendor Manifest Weight: <span className="text-primary font-bold">{vendorWeight} kg</span>
                </label>
                <input 
                  type="range" 
                  min="380" 
                  max="480" 
                  value={vendorWeight} 
                  onChange={(e) => setVendorWeight(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-base font-bold text-rose-600 font-display">{variance} kg</h5>
                <small className="text-[9px] text-muted-foreground">Variance Logged</small>
              </div>
              <div className="bg-surface-muted/60 p-3 rounded-xl text-center">
                <h5 className="text-base font-bold text-amber-500 font-display">{plantWeight} kg</h5>
                <small className="text-[9px] text-muted-foreground">Plant Logged Weight</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScrapRootCauseAnalysis() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: RCA Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div 
            className="rounded-3xl border border-border backdrop-blur-md text-foreground p-6 shadow-xl space-y-4 glass-card"
            style={{"--card-accent": "var(--brand-blue)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h5 className="font-display font-semibold text-sm">Steel Reject Root Cause Analysis</h5>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 rounded-md font-semibold">RCA-SCRAP-12B</span>
            </div>

            <div className="bg-surface-muted/60 p-3 rounded-xl space-y-2 text-[10px]">
              <h6 className="text-[9px] font-bold uppercase tracking-wider text-sky-600 font-semibold">Yield Loss Guided 5 Whys</h6>
              <div className="space-y-2">
                {[
                  "Why did plate steel scrap spike? → Dimension drifts on laser cutter cuts.",
                  "Why dimension drifts? → Cutting laser optics drifted by 1.2mm.",
                  "Why optics drifted? → High-vibration during raw sheet staging runs.",
                  "Why high-vibration? → Dampener brackets on Laser Table #1 were loose.",
                  "Why loose? → Vibration dampener bolt sheared off under cyclic shear load."
                ].map((why, idx) => (
                  <div key={idx} className="flex gap-2 text-[10px] text-muted-foreground leading-normal">
                    <span className="text-primary font-bold">{idx + 1}</span>
                    <span>{why}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corrective Action Status */}
            <div className="bg-surface-muted/60 p-3.5 rounded-xl border border-border/50 space-y-2 text-[10px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">CAPA Action Item</span>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded">Complete</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Task: Replace sheared bracket bolts with self-locking high-tensile fasteners on Laser Table #1.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
              <TrendingUp className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">YIELD OPTIMIZATION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Scrap Root Cause Analysis</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Audit and solve the underlying causes of material reject spikes. Correlate scrap reasons with workstation telemetry and raw material batches to design permanent fixes.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Yield Loss Correlation", desc: "Correlate reject counts with active line settings and tool logs." },
              { title: "5 Whys Ingest Mappings", desc: "Document scrap root causes directly alongside weight logs." },
              { title: "CAPA Task Integration", desc: "Generate PM adjustment tickets to eliminate raw material leaks." },
              { title: "Reject Drift Alarms", desc: "Flag process variations that correlate with scrap volume drifts." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Check className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
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

export function ScrapWasteStreams() {
  const streams = [
    { title: "Metal Scrap", sub: "Steel stamps, copper trim", desc: "Track steel shavings, copper extrusion trims, and aluminum cutting scraps. Audit recovery vendor yields." },
    { title: "Plastics & Polymers", sub: "Extrusion purges, molding scrap", desc: "Reconcile purge blocks, raw polymer overflows, and scrap packaging materials dynamically." },
    { title: "Chemical Waste", sub: "Washouts, residual compounds", desc: "Monitor solvent flush limits, line cleaning wastes, chemical compound residues, and hazardous manifests." },
    { title: "General Industrial", sub: "Staging packaging, spares waste", desc: "Log packaging logs, scrap filters, worn tooling inserts, and landfill diversion KPIs." }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">WASTE DIVERSITY</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Waste Streams</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Record, segregate, and report every category of manufacturing reject and environmental waste stream on a single portal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((item, idx) => (
            <div key={idx} className="bg-surface-muted/30 border border-border p-6 rounded-2xl flex flex-col justify-between hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-[9px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-md uppercase">
                  {item.sub}
                </span>
                <h4 className="font-display font-bold text-sm text-foreground mt-2">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScrapConnectedCompliance() {
  const integrations = [
    { name: "EHS & EPA Systems", desc: "Automate hazardous manifest posting and landfill diversion records for annual EPA reporting compliance.", tags: ["EPA manifests", "Hazard Logs", "EHS Ledgers"] },
    { name: "Vendor Portals", desc: "Sync batch scale weights directly with certified scrap recovery and waste recycler systems.", tags: ["Vendor Webhooks", "Manifest Upload", "Disposal Receipts"] },
    { name: "Financial & Costs", desc: "Post raw material cost losses and salvage revenue details directly to active line cost centers.", tags: ["Line Cost Allocation", "Loss Adjustments", "SAP Cost Sync"] },
    { name: "Production MES Logs", desc: "Correlate scale reject weights with active production job quantities and scrap reason checks.", tags: ["BOM Yield Sync", "Scale Telemetry", "Reject Logs"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">COMPLIANCE HUBS</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Compliance Hub</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Eliminate compliance silos. Bind physical scale logs and EHS manifests with corporate finance and contractor endpoints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INTRUSION DETECTION SPECIFIC COMPONENTS ───

export function IntrusionDigitalCenter() {
  const [selectedEvent, setSelectedEvent] = useState("Perimeter Breach");

  const events = {
    "Perimeter Breach": {
      id: "EVT-2026-118",
      title: "Perimeter Zone 3 Breach",
      cameraId: "CAM-NW-PERIM-03",
      zone: "Zone 3 - Northwest Fence Line",
      confidence: "98.4%",
      responseTime: "0.4s",
      status: "Security Dispatch Triggered",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20",
      description: "Motion signature identified as human shape crossing outer perimeter boundary tripwire. Event packaged with RTSP video clip.",
      image: "/homeCaseStudy/surveillance-intrusion.jpg"
    },
    "Tailgating Event": {
      id: "EVT-2026-119",
      title: "Restricted Server Room Entry",
      cameraId: "CAM-INT-SERV-01",
      zone: "Zone 12 - Data Center Lobby",
      confidence: "99.1%",
      responseTime: "0.3s",
      status: "NOC Alert Sent",
      statusColor: "text-amber-600 bg-amber-500/10 border-amber-500/20",
      description: "Tailgating detection triggered: multiple human bodies identified passing through access door following single badge event.",
      image: "/homeCaseStudy/surveillance-access.png"
    }
  };

  const current = events[selectedEvent as keyof typeof events];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">LIVE PIPELINE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Intrusion Detection Digital Center</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Monitor surveillance events as they happen. The active AI engine processes RTSP video streams, executes zone models, and routes priority alerts.
          </p>

          <div className="flex gap-2">
            {Object.keys(events).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedEvent(key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedEvent === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">{current.id}</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.statusColor}`}>
                {current.status}
              </span>
            </div>

            {/* Real Live Analytics Monitor */}
            <div className="bg-slate-950 border border-border/50 rounded-2xl overflow-hidden mb-6 aspect-video relative flex items-center justify-center">
              <img 
                src={current.image}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 select-none"
              />
              
              {/* Scanline or overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
              
              {/* Overlay HUD indicators */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                LIVE FEED: {current.cameraId}
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI STABLE
              </div>

              {/* Simulated analytical bounding overlay (only for Tailgating Event since Intrusion has it baked in) */}
              {selectedEvent === "Tailgating Event" && (
                <div className="absolute border-2 border-dashed border-rose-500 rounded p-4 flex flex-col items-center justify-center bg-rose-500/10 select-none pointer-events-none">
                  <span className="text-rose-500 font-bold text-[10px] uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded mb-1 border border-rose-500/30">
                    TAILGATING DETECTED
                  </span>
                  <span className="text-[8px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                    Target Confidence: {current.confidence}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{current.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">ZONE</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.zone}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">LATENCY</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.responseTime}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CONFIDENCE</span>
                  <span className="text-primary font-bold text-xs mt-0.5 block">{current.confidence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntrusionWorkflow() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1, label: "Feed Ingestion", sub: "RTSP & ONVIF setup",
      desc: "Connect cameras seamlessly. Auto-ingest RTSP/ONVIF streams from local edge cameras at low latency.",
      bullets: [
        "Ingest 30 FPS video streams from ONVIF compliant network cameras",
        "Perform stream health handshakes to flag network dropped packets",
        "Apply variable bitrate throttling to optimize edge pipeline compute",
        "Log RTSP stream credentials in encrypted local key stores"
      ],
      actions: ["RTSP Handshake", "Frame Buffer Setup", "Bitrate Management", "Health Probe"]
    },
    {
      num: 2, label: "Zone Monitoring", sub: "Polygonal line masks",
      desc: "Draw lines and polygons directly onto camera grids to delineate high-security boundary limits.",
      bullets: [
        "Draw custom polygonal shapes to focus AI processing on key perimeters",
        "Apply static pixel masking to ignore constant background highway motion",
        "Define tripwire thresholds (e.g. entry-only vs. exit-only crossings)",
        "Link defined boundaries to specific warning priorities in system rules"
      ],
      actions: ["Polygon Drawing", "Pixel Masking", "Tripwire Config", "Zone Prioritisation"]
    },
    {
      num: 3, label: "Anomaly Detection", sub: "Deep learning models",
      desc: "Trigger detection algorithms to track targets and ignore noise.",
      bullets: [
        "Detect human shapes and vehicle objects using custom YOLO models",
        "Ignore non-human triggers (wind, animal motion, rain, glare shadows)",
        "Track targets between camera overlaps using spatiotemporal ByteTrack",
        "Enforce minimum dwell times to identify loitering signatures"
      ],
      actions: ["YOLO Inference", "False Alarm Filter", "ByteTrack Handover", "Loiter Watch"]
    },
    {
      num: 4, label: "Alert Generation", sub: "Packaged threat data",
      desc: "Compile breach metadata, event logs, and high-quality snapshots for routing.",
      bullets: [
        "Generate a structured alert package with timestamps and camera IDs",
        "Extract high-definition image crops of the target face or body details",
        "Assemble 5-second video buffer clips showing the entry movement",
        "Post JSON event records to local active directory logs"
      ],
      actions: ["Alert Packaging", "HD Crop Extraction", "Buffer Clip Trim", "Directory Sync"]
    },
    {
      num: 5, label: "Response Dispatch", sub: "Instant alert actions",
      desc: "Notify security centers, dispatch guard details, and trigger hardware warning sirens.",
      bullets: [
        "Route high-priority alerts to desktop security console dashboards",
        "Send WhatsApp, Telegram, or SMS alerts with video links to guards",
        "Trigger physical alarm relay switches using Modbus or GPIO webhooks",
        "Initiate emergency lockdown routines on access control systems"
      ],
      actions: ["NOC Alert", "Guard SMS Broadcast", "GPIO Relay Trigger", "Access Control Lock"]
    },
    {
      num: 6, label: "Incident Archive", sub: "Auditable trace ledgers",
      desc: "Store full timelines and guard actions for compliance reviews and threat mapping.",
      bullets: [
        "Write full incident timeline metrics to local database tables",
        "Link guard validation notes and dispatch timelines with the event",
        "Archive video clips in encrypted secure media buckets",
        "Generate incident reports to verify compliance with plant EHS requirements"
      ],
      actions: ["Incident Indexing", "Guard Audit Capture", "Media Archiving", "Compliance Report"]
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">DETECTION PIPELINE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">6-Step Detection Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Follow the automated flow from network video ingestion to real-time object tracking, immediate alert routing, and auditable event archives.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Step List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border/80 text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step details card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                    Step {currentStep.num} of 6
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/60 px-2 py-0.5 rounded border border-border">
                    {currentStep.actions.length} system actions
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">{currentStep.label}</h3>
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{currentStep.sub}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">What happens in this step</h6>
                  <ul className="space-y-2">
                    {currentStep.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Tags */}
                <div className="pt-3 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">System functions activated</h6>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.actions.map((tag) => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 bg-primary/8 text-primary border border-primary/15 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Active perimeter threat detection online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntrusionPatrolVerification() {
  const [checking, setChecking] = useState(false);
  const [lastCheck, setLastCheck] = useState("09:42:15");

  const runVerification = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      const time = new Date().toTimeString().split(" ")[0];
      setLastCheck(time);
    }, 1500);
  };

  const systems = [
    { name: "Camera Stream Feeds", status: "Active & Synced", value: "42/42 Online", check: "Bitrate standard" },
    { name: "Detection Models", status: "Loaded", value: "YOLOv8 Edge Core", check: "0.04s Inference latency" },
    { name: "Boundary Masks", status: "Validated", value: "18 Areas Confirmed", check: "Calibration check OK" },
    { name: "Relay Webhooks", status: "Ready", value: "3 Gateway Relays", check: "Siren link ping OK" }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <RefreshCw className={`h-4 w-4 ${checking ? "animate-spin" : ""}`} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">HEALTH TASKS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Automated Patrol Verification</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Continuously verify security operation readiness. Detect stream packet dropouts, camera occlusion, frame rate decay, or boundary calibration drift.
          </p>

          <div className="flex items-center gap-4 bg-surface-muted border border-border p-4 rounded-2xl max-w-sm">
            <div className="flex-1">
              <span className="text-[10px] font-mono text-muted-foreground block">LAST VERIFICATION RUN</span>
              <span className="text-foreground font-bold text-sm mt-0.5 block">{lastCheck}</span>
            </div>
            <button
              onClick={runVerification}
              disabled={checking}
              className="bg-primary hover:opacity-90 text-white text-xs font-semibold px-4 py-2.5 rounded-xl disabled:opacity-50 transition-all shadow-soft"
            >
              {checking ? "Checking..." : "Verify Stack"}
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4">
            {systems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-surface border border-border p-5 rounded-2xl flex flex-col justify-between glass-card"
                style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-display font-bold text-xs text-foreground uppercase tracking-wider">{item.name}</h4>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-sm font-bold text-foreground font-display">{item.value}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 flex justify-between text-[10px] font-mono text-muted-foreground">
                  <span>{item.status}</span>
                  <span className="text-primary font-medium">{item.check}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntrusionIncidentsAndRCA() {
  const [selectedIncident, setSelectedIncident] = useState("Northwest perimeter blind spot");

  const incidents = {
    "Northwest perimeter blind spot": {
      desc: "Weekly analytical summary shows recurring target classification dropouts along the northwest yard fence.",
      findings: [
        "High light contrast backlighting from local road floodlights during shift handovers",
        "Camera lens accumulation of road dust obstructing secondary pixel checks",
        "Target tracking lost due to lack of frame overlap near corner fence gate"
      ],
      aiAdvice: "Relocate CAM-NW-03 by 2 meters inward, adjust night visual exposure settings to 1/250s shutter, and clean lens."
    },
    "Access Gate 4 tailgating": {
      desc: "Access data indicates daily entry anomalies: single card swiping followed by multiple human targets.",
      findings: [
        "Lack of interlocking physical barricades allowing concurrent personnel passage",
        "Personnel card swipe habits causing overlapping entry windows",
        "High traffic volumes between shift changeovers straining security desks"
      ],
      aiAdvice: "Integrate camera analysis with access badge databases to flag card-to-target mismatch events instantly."
    }
  };

  const current = incidents[selectedIncident as keyof typeof incidents];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PATTERN MANAGEMENT</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Security Incident & RCA Logs</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Diagnose threat vectors systematically. Group security logs into clear incident summaries, map root cause variables, and implement AI action advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive list */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4">
            <div className="space-y-2">
              {Object.keys(incidents).map((name) => (
                <button
                  key={name}
                  onClick={() => setSelectedIncident(name)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedIncident === name
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider">{name}</h4>
                  <p className={`text-[10px] mt-1.5 leading-relaxed ${selectedIncident === name ? "text-white/80" : "text-muted-foreground"}`}>
                    {incidents[name as keyof typeof incidents].desc}
                  </p>
                </button>
              ))}
            </div>
            
            <div className="bg-surface-muted/80 border border-border p-4 rounded-2xl">
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">RCA FOCUS</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                By grouping recurring alarm events, security teams can pinpoint blind spots, lighting issues, and structural vulnerabilities.
              </p>
            </div>
          </div>

          {/* Right: RCA details */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider">
                    Root Cause Investigation
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-3 uppercase tracking-wider">
                    {selectedIncident}
                  </h3>
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Findings & Variables</h5>
                  <ul className="space-y-2.5">
                    {current.findings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <span className="h-4 w-4 rounded bg-rose-500/10 text-rose-500 text-[10px] font-bold font-mono grid place-items-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Brain className="h-4 w-4 shrink-0" />
                    <h5 className="text-[11px] font-bold uppercase tracking-wider">AI Mitigation Advice</h5>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {current.aiAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntrusionScenarios() {
  const scenarios = [
    {
      title: "Perimeter Breach",
      desc: "Draw active tripwires on outer boundary fences. Detect direction and velocity of crossing objects instantly.",
      confidence: "Target Accuracy: >98%",
      action: "Instant Alert & Spotlight Relay"
    },
    {
      title: "Tailgating Detection",
      desc: "Verify access control database entry matches camera human tracking count at high-security portals.",
      confidence: "Target Accuracy: >97%",
      action: "NOC Event Alarm & Audit Log"
    },
    {
      title: "Restricted Zone Entry",
      desc: "Define strict exclusion zones (e.g. server rooms, power distribution stations) to flag presence 24/7.",
      confidence: "Target Accuracy: >99%",
      action: "Security Desk Alert & Push Notification"
    },
    {
      title: "After-Hours Access",
      desc: "Implement scheduling overlays to monitor offices and administrative buildings after shifts end.",
      confidence: "Target Accuracy: >98%",
      action: "Automatic Siren Trigger & Guard Dispatch"
    }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">DETECTION SCENARIOS</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Detection Scenarios</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Secure all campuses and critical areas. Choose from a library of pre-trained models to monitor physical borders and entries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 space-y-1">
                <span className="text-[9px] font-mono font-semibold block text-primary">{item.confidence}</span>
                <span className="text-[9px] font-mono text-muted-foreground block">Action: {item.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntrusionConnectedStack() {
  const integrations = [
    { name: "Access Control Systems", desc: "Integrate camera target logs with card swipe and RFID badge databases to flag card mismatches.", tags: ["RFID Database", "Badge API Sync", "Wiegand Protocols"] },
    { name: "VMS & NVR Storage", desc: "Push marked alarm clips directly to local Milestone, Genetec, or custom network storage nodes.", tags: ["RTSP streams", "NVR Sync", "Milestone Webhooks"] },
    { name: "Guard Alert Dispatches", desc: "Broadcast event summaries, HD crops, and coordinate metrics directly to WhatsApp, SMS, or Telegram.", tags: ["WhatsApp API", "SMS Gateway", "Webhook push"] },
    { name: "Local Siren Relays", desc: "Connect detection logic directly to Modbus relays or GPIO pins to trigger physical flashlights and local horns.", tags: ["GPIO Trigger", "Modbus TCP Relay", "Siren Relay"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">CONNECTED SECURITY</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Security Stack</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Eliminate silos. Bind visual threat detection directly with access systems, VMS recorders, siren hardware, and communication portals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntrusionDetectionExtraSection() {
  return (
    <>
      <IntrusionDigitalCenter />
      <IntrusionWorkflow />
      <IntrusionPatrolVerification />
      <IntrusionIncidentsAndRCA />
      <IntrusionScenarios />
      <IntrusionConnectedStack />
    </>
  );
}

// ─── WEAPON DETECTION SPECIFIC COMPONENTS ───

export function WeaponDigitalCenter() {
  const [selectedEvent, setSelectedEvent] = useState("Firearm Detected");

  const events = {
    "Firearm Detected": {
      id: "EVT-2026-045",
      title: "Firearm Detected — Zone B Lobby",
      cameraId: "CAM-LOBBY-02",
      zone: "Zone B Lobby Entrance",
      object: "Handgun / Pistol",
      confidence: "98.2%",
      status: "Local Lockdown Triggered",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20",
      description: "Visual firearm threat verified at lobby turnstiles. System initiated automated door locks and broadcast emergency alerts."
    },
    "Rifle Spotted": {
      id: "EVT-2026-046",
      title: "Long Gun Spotted — North Gate",
      cameraId: "CAM-EXT-GATE-04",
      zone: "Zone 1 - North Vehicle Checkpoint",
      object: "Rifle / Carbine",
      confidence: "99.4%",
      status: "Police Dispatch Initiated",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20",
      description: "High-confidence rifle threat detected outside main vehicle barrier. Alarm routed to police dispatch and local yard siren."
    }
  };

  const current = events[selectedEvent as keyof typeof events];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">THREAT HUB</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Weapon Detection Digital Center</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Actively monitor camera feeds for visible weapons. The system evaluates video frames instantly on edge processing nodes, triggering lockdown relays upon high-confidence alerts.
          </p>

          <div className="flex gap-2">
            {Object.keys(events).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedEvent(key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedEvent === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">{current.id}</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.statusColor}`}>
                {current.status}
              </span>
            </div>

            {/* Real Live Analytics Monitor */}
            <div className="bg-slate-950 border border-border/50 rounded-2xl overflow-hidden mb-6 aspect-video relative flex items-center justify-center">
              <img 
                src="/homeCaseStudy/surveillance-weapon.png"
                alt="Weapon Detection Alert"
                className="absolute inset-0 w-full h-full object-cover opacity-80 select-none"
              />
              
              {/* Scanline or overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              
              {/* Overlay HUD indicators */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                FEED: {current.cameraId}
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-rose-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur flex items-center gap-1.5 border border-rose-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                THREAT DETECTED
              </div>

              {/* Dynamic simulated bounding boxes for long gun spotted */}
              {selectedEvent === "Rifle Spotted" && (
                <div className="absolute border-2 border-dashed border-rose-500 rounded p-3 flex flex-col items-center justify-center bg-rose-500/15 select-none pointer-events-none">
                  <span className="text-rose-500 font-bold text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded mb-1 border border-rose-500/30">
                    LONG GUN
                  </span>
                  <span className="text-[8px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                    Confidence: {current.confidence}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{current.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">OBJECT</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.object}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CAMERA ID</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.cameraId}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CONFIDENCE</span>
                  <span className="text-rose-600 font-bold text-xs mt-0.5 block">{current.confidence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WeaponWorkflow() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1, label: "Feed Ingestion", sub: "RTSP stream capture",
      desc: "Auto-ingest RTSP video feeds from cameras at entrances, lobbies, and parking areas in real time.",
      bullets: [
        "Capture raw 1080p feeds at 30 FPS with sub-100ms packet ingestion",
        "Perform RTSP stream validation and check auto-reconnection logs",
        "Decompress H.264/H.265 video frames directly on local GPU pools",
        "Enforce end-to-end stream security keys to prevent packet intercepts"
      ],
      actions: ["RTSP Ingest", "Stream Check", "Frame Buffer Setup", "Stream Encrypt"]
    },
    {
      num: 2, label: "Object Detection", sub: "YOLO threat extraction",
      desc: "Execute visual threat models on high-performance local AI engines to flag possible firearms.",
      bullets: [
        "Run incoming camera frames through optimized threat detection models",
        "Detect specific weapon contours (handguns, long guns, carbines)",
        "Isolate bounding zones around threat coordinates in milliseconds",
        "Filter out non-threat objects like cell phones, badges, or keys"
      ],
      actions: ["AI Inference", "Bounding Coordinates", "Threat Classification", "Object Filter"]
    },
    {
      num: 3, label: "Confidence Verification", sub: "Visual variable filtering",
      desc: "Double-check detections using context checks like holsters or officer overlays to filter out false alerts.",
      bullets: [
        "Analyze spatial metadata to check context cues (e.g., holsters)",
        "Check badge regions to filter out local law enforcement or security",
        "Score detection confidence thresholds dynamically to avoid false triggers",
        "Flag variable light profiles to calibrate local model thresholds"
      ],
      actions: ["Context Evaluation", "Badge Check", "Confidence Filter", "Light Calibration"]
    },
    {
      num: 4, label: "Alert Generation", sub: "Priority metadata pack",
      desc: "Instantly build incident files containing timestamps, camera metadata, and cropped visual evidence.",
      bullets: [
        "Generate a priority incident package with verified camera metrics",
        "Isolate high-resolution image crops of the detected threat zone",
        "Trim a 5-second video buffer showing the entry or motion leading to the alert",
        "Broadcast secure alert JSON packages to dashboard servers"
      ],
      actions: ["Alert Packaging", "HD Snapshot Crop", "Video Buffer Trim", "Event Push"]
    },
    {
      num: 5, label: "Lockdown Dispatch", sub: "Automated trigger actions",
      desc: "Trigger hardware door locks, push emergency alerts to security staff, and dial police dispatches.",
      bullets: [
        "Send alert summaries, HD snapshots, and stream links to guard terminals",
        "Trigger physical alarm relay switches using Modbus or GPIO controllers",
        "Initiate emergency door locking locks on integrated access control modules",
        "Post event data to local law enforcement dispatch channels"
      ],
      actions: ["Access Lock Relay", "EAS Alert Trigger", "Guard WhatsApp Push", "NOC Map Alert"]
    },
    {
      num: 6, label: "Incident Archive", sub: "Immutable EHS audit trail",
      desc: "Archive timelines, visual clips, and operator notes securely for post-incident audits.",
      bullets: [
        "Log full alert incident timelines and camera details in secure databases",
        "Sync operator notes, alert response times, and police arrival dispatch logs",
        "Store visual clips and crop logs in encrypted object buckets",
        "Generate auditable EHS report templates for corporate security compliance"
      ],
      actions: ["Ledger Logging", "Operator Audit Sync", "Secure Video Archival", "Compliance Report"]
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">RESPONSE PIPELINE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Detection-to-Dispatch Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Follow the automated lifecycle from real-time GPU frame ingestion to active threat spotting, local lockdown relays, and police dispatches.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Step List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step details card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                    Step {currentStep.num} of 6
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/60 px-2 py-0.5 rounded border border-border">
                    {currentStep.actions.length} system actions
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">{currentStep.label}</h3>
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{currentStep.sub}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">What happens in this step</h6>
                  <ul className="space-y-2">
                    {currentStep.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Tags */}
                <div className="pt-3 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">System functions activated</h6>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.actions.map((tag) => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 bg-primary/8 text-primary border border-primary/15 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Automated threat verification loop active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WeaponAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Handgun Confidence");

  const prompts = {
    "Handgun Confidence": {
      q: "Explain active weapon detection confidence.",
      a: "The AI checks candidate bounding zones against thousands of weapon profiles, analyzing barrel structures, metal reflections, and trigger shapes. Detections exceeding 90% confidence trigger immediate alarms, while lower scores route to operators for quick verification."
    },
    "Umbrella False Triggers": {
      q: "Why do umbrellas sometimes trigger false alerts?",
      a: "Long umbrella handles (specifically curved J-handles) under bright backlight or high-contrast shadows can match handgun geometry parameters. We mitigate this by checking the object's context (e.g. wet weather settings) and tracking target movement sequences."
    },
    "Toy Guns Filtering": {
      q: "How does the AI filter out toy firearms?",
      a: "Toy guns are flagged by checking visual details like neon orange tips and high-saturation plastic surfaces. The system references a library of common toy structures to minimize false alerts while keeping entrance scans accurate."
    }
  };

  const current = prompts[activePrompt as keyof typeof prompts];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: Chat Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden glass-card flex flex-col gap-4"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-foreground">SYNAPSE WEAPON ADVISOR</span>
              </div>
              <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/50 px-2 py-0.5 rounded">Model: YOLOv8-Sec</span>
            </div>

            {/* Conversation list */}
            <div className="flex flex-col gap-4 pt-1">
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary text-white text-xs px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] leading-relaxed shadow-soft">
                  {current.q}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
                  <Brain className="h-4 w-4" />
                </div>
                <div className="bg-surface-muted border border-border/60 text-xs text-muted-foreground px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                  {current.a}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Description & Prompts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Brain className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">AI ADVISOR</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Synapse Weapon Advisor</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Understand visual threat metrics in plain language. Select prompts to ask the assistant about active models, confidence thresholds, and visual details.
          </p>

          <div className="space-y-2">
            {Object.keys(prompts).map((key) => (
              <button
                key={key}
                onClick={() => setActivePrompt(key)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all ${
                  activePrompt === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {prompts[key as keyof typeof prompts].q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WeaponIncidentLog() {
  const [selectedIncident, setSelectedIncident] = useState("EVT-2026-045");

  const incidents = {
    "EVT-2026-045": {
      location: "Zone B Lobby Turnstiles",
      time: "14:32:18",
      threat: "Handgun (High Confidence)",
      outcome: "Lockdown doors triggered. Guards dispatched. Police notified.",
      details: "Individual pulled firearm at lobby turnstiles. Automated door locks deployed in 0.4s. Threat was contained in vestibule area."
    },
    "EVT-2026-046": {
      location: "North Gate vehicle lane",
      time: "08:15:42",
      threat: "Long Gun (Rifle)",
      outcome: "Police notification routed. Local yard alarm active.",
      details: "Rifle container spotted in vehicle bed during barrier check. Alert sent to security NOC, police dispatch followed."
    }
  };

  const current = incidents[selectedIncident as keyof typeof incidents];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: List */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <FileSearch className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">ALERT RECORDS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Detection Incident Log</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Track verified threat incidents across all facilities. Access timestamps, camera ID records, threat shapes, and response logs.
          </p>

          <div className="space-y-2">
            {Object.keys(incidents).map((id) => (
              <button
                key={id}
                onClick={() => setSelectedIncident(id)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedIncident === id
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                <h4 className="font-display font-bold text-xs uppercase tracking-wider">{id}</h4>
                <p className={`text-[10px] mt-1 block font-semibold ${selectedIncident === id ? "text-white/80" : "text-primary"}`}>
                  {incidents[id as keyof typeof incidents].threat}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Card */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border/60 pb-4">
                <span className="text-xs font-mono font-bold text-foreground">{selectedIncident} Incident File</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-600 rounded">Alert Resolved</span>
              </div>

              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-surface-muted/60 p-3 rounded-xl border border-border/50">
                    <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest block">LOCATION</span>
                    <span className="text-foreground font-bold text-xs mt-0.5 block">{current.location}</span>
                  </div>
                  <div className="bg-surface-muted/60 p-3 rounded-xl border border-border/50">
                    <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest block">TIMESTAMP</span>
                    <span className="text-foreground font-bold text-xs mt-0.5 block">{current.time}</span>
                  </div>
                </div>

                <div className="bg-surface-muted/60 p-3.5 rounded-xl border border-border/50">
                  <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">THREAT OBJECT</span>
                  <p className="text-foreground font-bold text-xs">{current.threat}</p>
                </div>

                <div className="bg-surface-muted/60 p-3.5 rounded-xl border border-border/50">
                  <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">OUTCOME STATUS</span>
                  <p className="text-muted-foreground text-xs leading-relaxed">{current.outcome}</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <span className="text-[8px] font-mono text-primary uppercase tracking-widest block mb-1">LOG ENTRY DETAIL</span>
                  <p className="text-muted-foreground text-xs leading-relaxed">{current.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WeaponFalsePositiveRCA() {
  const [selectedCase, setSelectedCase] = useState("Umbrella handles backlight");

  const cases = {
    "Umbrella handles backlight": {
      desc: "CAM-LOBBY-01 triggered false positive handgun alerts on rainy afternoons due to reflection profiles.",
      findings: [
        "J-shaped umbrella handles match typical handgun grips in bounding coordinates",
        "Direct daylight reflections on metal shafts mimic firearm metallic profiles",
        "Rainy weather stage density at lobby entrance turnstiles caused shape overlaps"
      ],
      aiAdvice: "Tune confidence thresholds to ignore static linear shapes. Deploy secondary classifier filters checking wet weather status codes."
    },
    "Power drills glare": {
      desc: "CAM-MAINT-02 registered false alerts on cordless drill shapes during tool staging runs.",
      findings: [
        "Pistol-grip shape of cordless power drills mirrors handgun structures closely",
        "Bright metallic drill bits reflect light similarly to weapon barrels",
        "Lack of badge verification logs on maintenance workers handling tools"
      ],
      aiAdvice: "Define tool-use exclusion zones. Require contractors to scan tools or integrate badge database schedules to ignore authorized tool movements."
    }
  };

  const current = cases[selectedCase as keyof typeof cases];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FALSE POSITIVE RCA</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">False Positive Pattern Analysis</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Eliminate alert fatigue. Trace false positive alerts systematically, identify shape and light variables, and deploy AI calibration advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Selector */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4">
            <div className="space-y-2">
              {Object.keys(cases).map((name) => (
                <button
                  key={name}
                  onClick={() => setSelectedCase(name)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedCase === name
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider">{name}</h4>
                  <p className={`text-[10px] mt-1.5 leading-relaxed ${selectedCase === name ? "text-white/80" : "text-muted-foreground"}`}>
                    {cases[name as keyof typeof cases].desc}
                  </p>
                </button>
              ))}
            </div>

            <div className="bg-surface-muted/80 border border-border p-4 rounded-2xl">
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">RCA PROTOCOL</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Analyze shape and environment variables systematically to update local models and minimize false alerts without compromising safety.
              </p>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider">
                    Root Cause Diagnosis
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-3 uppercase tracking-wider">
                    {selectedCase}
                  </h3>
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Findings & Variables</h5>
                  <ul className="space-y-2.5">
                    {current.findings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <span className="h-4 w-4 rounded bg-rose-500/10 text-rose-500 text-[10px] font-bold font-mono grid place-items-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Brain className="h-4 w-4 shrink-0" />
                    <h5 className="text-[11px] font-bold uppercase tracking-wider">AI Mitigation Advice</h5>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {current.aiAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WeaponScenarios() {
  const scenarios = [
    {
      title: "Open-Carry Zones",
      desc: "Implement spatial models to track visible weapons and monitor perimeter safety boundaries.",
      confidence: "Target Accuracy: >97%",
      action: "NOC Threat Log & Camera Track"
    },
    {
      title: "Concealed-Carry Zones",
      desc: "Spot brandished weapons immediately at doorways or checkpoints before incident escalation.",
      confidence: "Target Accuracy: >98%",
      action: "Instant Alert & Alarm Routing"
    },
    {
      title: "Restricted Facilities",
      desc: "Verify zero-tolerance zones (e.g. data centers, offices) with continuous multi-camera visual watch.",
      confidence: "Target Accuracy: >99%",
      action: "Immediate Lockdown & Siren Relay"
    },
    {
      title: "Transit & Public Areas",
      desc: "Deploy edge inference on subway platforms and lobby vestibules for immediate threat detection.",
      confidence: "Target Accuracy: >98%",
      action: "Police Dispatch & Alert Broadcast"
    }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">DETECTION SCENARIOS</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Detection Scenarios</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Configure threat detection rules for varying security zones, carry regulations, and campus layouts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 space-y-1">
                <span className="text-[9px] font-mono font-semibold block text-primary">{item.confidence}</span>
                <span className="text-[9px] font-mono text-muted-foreground block">Action: {item.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WeaponConnectedStack() {
  const integrations = [
    { name: "Access Control Systems", desc: "Integrate threat logs directly with door locks and physical security gates to containerize threats.", tags: ["Lockdown Relays", "Door Locks", "Gates GPIO"] },
    { name: "VMS & Storage Hubs", desc: "Record alarm feeds and compile clip packages in Milestone, Genetec, or local secure storage systems.", tags: ["VMS Webhooks", "RTSP Recordings", "Encrypted Video"] },
    { name: "Public Notification (EAS)", desc: "Broadcast mass text, email, and desktop notification alerts to campuses during active threats.", tags: ["Emergency SMS", "EAS APIs", "Alert Feeds"] },
    { name: "Dispatch Integrations", desc: "Post verified threat snapshots and coordinates directly to security desks and police dispatch centers.", tags: ["Police Dispatches", "SMS Gateway", "Secure Webhooks"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">CONNECTED SECURITY</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Security Stack</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Eliminate gaps. Bind visual weapon alerts directly with physical access locks, mass notification APIs, and emergency channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WeaponDetectionExtraSection() {
  return (
    <>
      <WeaponDigitalCenter />
      <WeaponWorkflow />
      <WeaponIncidentLog />
      <WeaponFalsePositiveRCA />
      <WeaponScenarios />
      <WeaponConnectedStack />
    </>
  );
}

// ─── FIRE & SMOKE DETECTION SPECIFIC COMPONENTS ───

export function FireSafetySection({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-brand-pink-soft text-brand-pink text-xs font-semibold rounded-full uppercase">Safety</span>
              <h3 className="text-2xl font-display font-bold">Proactive Risk Mitigation</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Transform standard cameras into an active safety net, verifying compliance and protecting lives.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "PPE Compliance Detection", desc: "Automatically monitor for helmets, vests, and safety glasses.", imp: "Near-100% policy adherence." },
                { title: "Fall & Man-Down Detection", desc: "Instant alert if an employee falls or remains immobile in hazards.", imp: "Drastically cut response time." },
                { title: "Fire & Smoke Detection", desc: "Visual fire indicators from cameras in high-ceiling facilities.", imp: "Visual alert within 3 seconds." },
                { title: "Pedestrian-Vehicle Proximity", desc: "Detects proximity events between workers and moving machinery.", imp: "Eliminate blind-spot collisions." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-surface-muted/40 p-5 space-y-2">
                  <h4 className="text-sm font-semibold">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border overflow-hidden bg-surface-muted/30 p-3 shadow-lg">
              <img
                src={imageSrc || "/homeCaseStudy/surveillance-safety.png"}
                alt="Workplace Safety AI Analytics"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FireDigitalCenter() {
  const [selectedEvent, setSelectedEvent] = useState("Smoke Plume");

  const events = {
    "Smoke Plume": {
      id: "EVT-2026-088",
      title: "Smoke Plume Spotted — Zone 4 Chemical Staging",
      cameraId: "CAM-CHEM-04",
      zone: "Zone 4 Chemical Staging Yard",
      object: "Low-level Smoke Plume",
      confidence: "98.6%",
      status: "Pre-Alarm Verification Active",
      statusColor: "text-amber-600 bg-amber-500/10 border-amber-500/20",
      description: "Early smoke plume classified rising from pallet storage. Visual alert dispatched to site supervisor terminal for verification."
    },
    "Flame Combustion": {
      id: "EVT-2026-089",
      title: "Active Combustion Spotted — High-Bay 2",
      cameraId: "CAM-BAY2-01",
      zone: "Production High-Bay 2 Area",
      object: "Active Open Flame",
      confidence: "99.1%",
      status: "Sprinkler Relay Triggered",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20",
      description: "Visual combustion identified on assembly floor. System initiated local sprinkler solenoid valves and routed EAS alert."
    }
  };

  const current = events[selectedEvent as keyof typeof events];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">LIVE PIPELINE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Fire Detection Digital Center</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Continuously evaluate visual camera frames for flame or smoke. Edge-inference models parse textures, expansion velocity, and visual shapes, bypassing physical thermal lag.
          </p>

          <div className="flex gap-2">
            {Object.keys(events).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedEvent(key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedEvent === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">{current.id}</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.statusColor}`}>
                {current.status}
              </span>
            </div>

            {/* Real Live Analytics Monitor */}
            <div className="bg-slate-950 border border-border/50 rounded-2xl overflow-hidden mb-6 aspect-video relative flex items-center justify-center">
              <img 
                src="/homeCaseStudy/surveillance-fire.png"
                alt="Fire Detection Live Alert"
                className="absolute inset-0 w-full h-full object-cover opacity-80 select-none"
              />
              
              {/* Scanline or overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              
              {/* Overlay HUD indicators */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                FEED: {current.cameraId}
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-orange-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur flex items-center gap-1.5 border border-orange-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                ANALYSIS OK
              </div>

              {/* Dynamic simulated bounding boxes for flame combustion */}
              {selectedEvent === "Flame Combustion" && (
                <div className="absolute border-2 border-dashed border-rose-500 rounded p-4 flex flex-col items-center justify-center bg-rose-500/15 select-none pointer-events-none">
                  <span className="text-rose-500 font-bold text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded mb-1 border border-rose-500/30">
                    COMBUSTION SPOTTED
                  </span>
                  <span className="text-[8px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                    Confidence: {current.confidence}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{current.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">OBJECT TYPE</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.object}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CAMERA ID</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.cameraId}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CONFIDENCE</span>
                  <span className="text-orange-600 font-bold text-xs mt-0.5 block">{current.confidence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FireWorkflow() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1, label: "Feed Ingestion", sub: "RTSP stream capture",
      desc: "Auto-ingest low-latency network streams from high-ceiling bays and storage yards in real time.",
      bullets: [
        "Ingest 1080p RTSP camera streams at 30 FPS under low latency",
        "Monitor stream connection health loops to prevent frame gaps",
        "Apply local frame buffering to buffer feed frames for analysis",
        "Keep camera streams safe using encrypted secure transport keys"
      ],
      actions: ["RTSP Ingestion", "Stream Health Probe", "Frame Buffer Setup", "Stream Encryption"]
    },
    {
      num: 2, label: "Visual Analysis", sub: "Smoke & Flame ML models",
      desc: "Parse frames using visual AI classifiers to detect rising smoke plumes or glowing combustion.",
      bullets: [
        "Scan incoming frames for pixel color signatures matching flames",
        "Analyze geometric expansion vectors of rising smoke plumes",
        "Track plume propagation patterns between adjacent camera overlaps",
        "Verify light wavelengths to check thermal combustion glow points"
      ],
      actions: ["Inference Run", "Shape Vector Check", "Wavelength Check", "Plume Propagation"]
    },
    {
      num: 3, label: "Confidence Verification", sub: "False alarm filtering",
      desc: "Apply filter sets to avoid false alarms from steam releases, dust clouds, or exhaust vents.",
      bullets: [
        "Filter out dust plumes by checking edge density and shape vectors",
        "Filter out steam triggers using temperature dispersal metrics",
        "Exclude authorized welding arcs using zone pixel masking",
        "Apply persistence timers to check shape stability over 3 seconds"
      ],
      actions: ["Dust Filter Action", "Steam Dispersal check", "Pixel Mask Overlay", "Persistence Watch"]
    },
    {
      num: 4, label: "Alert Dispatch", sub: "NOC & emergency routing",
      desc: "Package metadata, alert coordinates, and clip snapshots for immediate dispatch to control rooms.",
      bullets: [
        "Compile threat coordinate details and time markers instantly",
        "Extract high-definition image crops of the combustion focus area",
        "Assemble 5-second video buffer clips showing the ignition start",
        "Route high-priority JSON alert records to central control desks"
      ],
      actions: ["Alert Packaging", "HD Crop Extract", "Video Buffer Trim", "JSON Event Route"]
    },
    {
      num: 5, label: "Relay Triggering", sub: "Hardware systems trigger",
      desc: "Automate hardware relays to trigger sirens, alert fire control panels, and open sprinkler valves.",
      bullets: [
        "Post Modbus TCP commands to trigger local alarm relay modules",
        "Send signal spikes directly to building fire alarm control boards",
        "Open integrated sprinkler or suppression solenoid valves automatically",
        "Broadcast mass notifications (EAS alerts) to local plant radios"
      ],
      actions: ["Modbus TCP Command", "FACP Interface Alert", "Solenoid Relay Trip", "EAS Mass Broadcast"]
    },
    {
      num: 6, label: "Incident Archive", sub: "EHS compliance trace",
      desc: "Store detailed event timelines and operator logs in databases for subsequent safety audits.",
      bullets: [
        "Log complete threat timelines and camera IDs in audit ledgers",
        "Sync operator notes, alert validation times, and CAPA logs",
        "Save video buffers and snapshot crops in secure media storage",
        "Format compliance-ready EHS templates for local fire inspectors"
      ],
      actions: ["Auditable Ledger Log", "CAPA Database Sync", "Secure Media Archive", "EHS Template Auto-Gen"]
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">RESPONSE PIPELINE</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Detection-to-Response Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Follow the automated security lifecycle from visual frame ingest to early flame spotting, false positive filter checks, and sprinkler solenoid relays.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Step List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step details card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                    Step {currentStep.num} of 6
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/60 px-2 py-0.5 rounded border border-border">
                    {currentStep.actions.length} system actions
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">{currentStep.label}</h3>
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{currentStep.sub}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">What happens in this step</h6>
                  <ul className="space-y-2">
                    {currentStep.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Tags */}
                <div className="pt-3 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">System functions activated</h6>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.actions.map((tag) => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 bg-primary/8 text-primary border border-primary/15 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Active visual fire watch online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FireAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Zone 4 Flags");

  const prompts = {
    "Zone 4 Flags": {
      q: "Why did Zone 4 flag three times this week?",
      a: "CAM-CHEM-04 registered false alerts due to steam releases from a nearby wash bay during early morning shifts. We recommend applying a polygonal pixel mask on the upper-right exhaust vent quadrant or increasing the persistence threshold to 5 seconds to bypass dispersing steam shapes."
    },
    "Dust Cloud Filtering": {
      q: "How does the model distinguish dust clouds from smoke?",
      a: "The visual AI model differentiates rising dust clouds from smoke by evaluating edge density patterns and heat propagation curves. Dust lacks the typical thermodynamic rising velocity of smoke. Calibrate camera contrast to improve edge check accuracy."
    },
    "Test-Burn Calibration": {
      q: "Explain the test-burn calibration process.",
      a: "We verify system parameters by executing controlled test burns. The AI parameters are calibrated under local lighting conditions to ensure visual smoke and spark detection triggers fire alarm panels within 3 seconds while ignoring standard welding arcs."
    }
  };

  const current = prompts[activePrompt as keyof typeof prompts];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: Chat Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden glass-card flex flex-col gap-4"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-foreground">SYNAPSE FIRE ADVISOR</span>
              </div>
              <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/50 px-2 py-0.5 rounded">Model: YOLOv8-Fire</span>
            </div>

            {/* Conversation list */}
            <div className="flex flex-col gap-4 pt-1">
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary text-white text-xs px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] leading-relaxed shadow-soft">
                  {current.q}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
                  <Brain className="h-4 w-4" />
                </div>
                <div className="bg-surface-muted border border-border/60 text-xs text-muted-foreground px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                  {current.a}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Description & Prompts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Brain className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">AI ADVISOR</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Synapse Fire Advisor</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Diagnose false alerts and calibrate models. Choose prompts to review local camera mounting recommendations or verify test-burn parameters.
          </p>

          <div className="space-y-2">
            {Object.keys(prompts).map((key) => (
              <button
                key={key}
                onClick={() => setActivePrompt(key)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all ${
                  activePrompt === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {prompts[key as keyof typeof prompts].q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FireEnvironments() {
  const scenarios = [
    {
      title: "High-Ceiling Bays",
      desc: "Monitor visual smoke plumes in tall factory structures instantly, bypassing standard sensor thermal lag.",
      confidence: "Target Speed: <3s",
      action: "NOC Event Alarm & Guard Dispatch"
    },
    {
      title: "Outdoor Storage Yards",
      desc: "Watch staging yards or open recycling areas where physical ceiling detectors cannot be installed.",
      confidence: "Target Speed: <4s",
      action: "Siren Relay & Dispatch Warning"
    },
    {
      title: "Chemical & Hazmat Staging",
      desc: "Early spark spotting in chemical storage rooms. Detect visual signs of chemical combustion.",
      confidence: "Target Speed: <2s",
      action: "Sprinkler Valve Relay Trigger"
    },
    {
      title: "Server Infrastructure",
      desc: "Constant watch over high-density rack areas. Spot cable spark sparks before smoke propagation.",
      confidence: "Target Speed: <3s",
      action: "BMS Alert & HVAC Power Cut"
    }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">DETECTION ZONES</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Detection Environments</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Deploy early visual fire alerts across complex facility layouts, open industrial yards, and critical data centers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 space-y-1">
                <span className="text-[9px] font-mono font-semibold block text-primary">{item.confidence}</span>
                <span className="text-[9px] font-mono text-muted-foreground block">Action: {item.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FireConnectedStack() {
  const integrations = [
    { name: "Fire Alarm Control Panels", desc: "Push visual alert signal spikes directly to central fire alarm panels (FACP) via relay modules.", tags: ["FACP relays", "Alarm Sync", "Modbus triggers"] },
    { name: "Sprinkler Solenoids", desc: "Integrate camera triggers with physical sprinkler control systems or gas suppression valves.", tags: ["Solenoid Relays", "Dry-pipe trigger", "GPIO switches"] },
    { name: "Building Management (BMS)", desc: "Sync alarm codes to central building dashboards. Auto-shutdown HVAC ventilation to contain smoke.", tags: ["BMS Dashboard", "HVAC Cutoff API", "BACnet Sync"] },
    { name: "EAS Emergency Dispatch", desc: "Broadcast verified alerts, snapshots, and stream coordinates directly to plant responders and dispatches.", tags: ["EAS API Sync", "Guard WhatsApp Push", "NOC Map Alert"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">SAFETY INTEGRATION</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Fire Safety Stack</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Eliminate response gaps. Bind visual fire warnings directly with physical panel boards, sprinkler valves, HVAC systems, and dispatcher networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FireSmokeDetectionExtraSection({ imageSrc }: { imageSrc?: string }) {
  return (
    <>
      <FireSafetySection imageSrc={imageSrc} />
      <FireDigitalCenter />
      <FireWorkflow />
      <FireEnvironments />
      <FireConnectedStack />
    </>
  );
}

// ─── UNAUTHORIZED ACCESS ALERTS SPECIFIC COMPONENTS ───

export function AccessSecuritySection({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-brand-purple-soft text-brand-purple text-xs font-semibold rounded-full uppercase">Security</span>
              <h3 className="text-2xl font-display font-bold">Intelligent Perimeter & Asset Defense</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Enhance physical security operations with low-latency object detection models tuned for high threat detection rates.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Intrusion Detection", desc: "Draw high-precision virtual fences on any camera feed to capture perimeter threats.", imp: "99% detection accuracy." },
                { title: "Weapon Spotting", desc: "Scan ingress points automatically for brandished firearms or rifles.", imp: "Sub-second notification." },
                { title: "Tailgating Prevention", desc: "Detect unauthorized follow-through events at badge turnstiles.", imp: "Enforce one badge, one entry." },
                { title: "Anomaly Recognition", desc: "Flag after-hours motion or direction violations in sensitive areas.", imp: "Zero blindspots." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-surface-muted/40 p-5 space-y-2">
                  <h4 className="text-sm font-semibold">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border overflow-hidden bg-surface-muted/30 p-3 shadow-lg">
              <img
                src={imageSrc || "/homeCaseStudy/surveillance-access-clean.png"}
                alt="Perimeter Defense AI Analytics"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AccessDigitalCenter() {
  const [selectedEvent, setSelectedEvent] = useState("Tailgating Event");

  const events = {
    "Tailgating Event": {
      id: "EVT-2026-904",
      title: "Turnstile Tailgating Spotted",
      cameraId: "CAM-ENTRY-02",
      zone: "Main Lobby turnstile East",
      target: "Person Count Mismatch (2 individuals, 1 scan)",
      badge: "ID-10024 (Sarah J.)",
      status: "Turnstile Locked / Alert Routed",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20",
      confidence: "98.7%",
      description: "Visual camera tracking registered two individuals crossing the turnstile within a single card read. System auto-locked next barrier and notified local security."
    },
    "Badge Mismatch": {
      id: "EVT-2026-905",
      title: "Badge-Clearance Mismatch",
      cameraId: "CAM-SERVER-04",
      zone: "Server Room A Entry Door",
      target: "Area Intrusion",
      badge: "ID-30812 (James L. - Guest Badge)",
      status: "Access Denied / Dispatch Active",
      statusColor: "text-orange-600 bg-orange-500/10 border-orange-500/20",
      confidence: "99.4%",
      description: "A guest badge was swiped at high-security zone. Camera verified subject profile did not match authorized clearance list and flagged NOC desk."
    }
  };

  const current = events[selectedEvent as keyof typeof events];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">ACCESS CENTER</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Access Event Digital Center</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Synchronize camera vision with physical badge read events. Automatically flag tailgating follow-throughs and credential mismatches.
          </p>

          <div className="flex gap-2">
            {Object.keys(events).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedEvent(key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedEvent === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">{current.id}</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.statusColor}`}>
                {current.status}
              </span>
            </div>

            {/* Visual Analytics Feed */}
            <div className="bg-slate-950 border border-border/50 rounded-2xl overflow-hidden mb-6 aspect-video relative flex items-center justify-center">
              <img 
                src="/homeCaseStudy/surveillance-access-clean.png"
                alt="Access Control Feed Visual"
                className="absolute inset-0 w-full h-full object-cover opacity-80 select-none"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                FEED: {current.cameraId}
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-purple-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur flex items-center gap-1.5 border border-purple-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                ACCESS DETECT
              </div>

              {selectedEvent === "Tailgating Event" && (
                <div className="absolute border-2 border-dashed border-rose-500 rounded p-4 flex flex-col items-center justify-center bg-rose-500/15 select-none pointer-events-none">
                  <span className="text-rose-500 font-bold text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded mb-1 border border-rose-500/30">
                    TAILGATING DETECTED
                  </span>
                  <span className="text-[8px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                    Confidence: {current.confidence}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{current.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">TARGET ID</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block truncate">{current.badge}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">ZONE</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.zone}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CONFIDENCE</span>
                  <span className="text-purple-600 font-bold text-xs mt-0.5 block">{current.confidence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AccessAnomalyLog() {
  const logs = [
    { time: "23:14:02", type: "Turnstile Tailgating", target: "Sarah J. / UNKNOWN", badgeId: "ID-10024", location: "Main Lobby turnstile East", status: "Turnstile Locked / NOC Alerted" },
    { time: "22:45:11", type: "Badge-Clearance Mismatch", target: "James L. (Guest)", badgeId: "ID-30812", location: "Server Room A Entry Door", status: "Access Denied / Guard Dispatch" },
    { time: "19:12:30", type: "After-Hours Access attempt", target: "Robert K.", badgeId: "ID-20941", location: "R&D Lab Annex", status: "Audit Warning Issued" },
    { time: "15:32:04", type: "Door Forced Open", target: "Unknown", badgeId: "None", location: "Loading Bay Side Exit", status: "Siren Activated / NOC Alerted" }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">AUDIT LOGS</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Access Anomaly Log</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Review real-time anomalies mapped to badge reader logs, Turnstiles locks, and after-hours entry alarms.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-muted-foreground uppercase font-mono tracking-wider text-[10px]">
                <th className="p-4">Time</th>
                <th className="p-4">Event Type</th>
                <th className="p-4">Subject & Badge ID</th>
                <th className="p-4">Location</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {logs.map((log, idx) => (
                <tr key={idx} className="hover:bg-surface-muted/30 transition-colors">
                  <td className="p-4 font-mono font-bold text-foreground">{log.time}</td>
                  <td className="p-4 font-semibold text-primary">{log.type}</td>
                  <td className="p-4 font-mono">
                    <span className="text-foreground font-semibold">{log.target}</span>
                    <span className="text-[10px] text-muted-foreground block">ID: {log.badgeId}</span>
                  </td>
                  <td className="p-4 text-muted-foreground">{log.location}</td>
                  <td className="p-4 text-right font-semibold text-foreground">{log.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function AccessConnectedStack() {
  const integrations = [
    { name: "Access Control Panels", desc: "Integrate with physical turnstile systems and badge readers supporting Wiegand or OSDP protocols.", tags: ["Wiegand relays", "OSDP control", "Turnstile Override"] },
    { name: "Visitor Management", desc: "Sync guest and visitor databases to check guest badge clearance parameters dynamically.", tags: ["Guest Pass API", "Visitor Sync", "Pre-clearance Check"] },
    { name: "SIEM & Logging", desc: "Push event metadata logs and snapshots directly to Splunk or Azure Sentinel incident registers.", tags: ["Splunk Endpoint", "Azure Sentinel API", "Syslog relays"] },
    { name: "Lockdown Systems", desc: "Automate dry-contact relays to lock high-security zones during verified intrusion alarms.", tags: ["Dry-contact lock", "Relay Override", "GPIO lockdowns"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">INTEGRATION MATRIX</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Access Control Stack</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Link AI video analytics with physical reader panels, guest registration catalogs, and SIEM security logging networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UnauthorizedAccessExtraSection({ imageSrc }: { imageSrc?: string }) {
  return (
    <>
      <AccessSecuritySection imageSrc={imageSrc} />
      <AccessDigitalCenter />
      <AccessAnomalyLog />
      <AccessConnectedStack />
    </>
  );
}

// ─── PERIMETER MONITORING SPECIFIC COMPONENTS ───

export function PerimeterSecuritySection({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-brand-green-soft text-brand-green text-xs font-semibold rounded-full uppercase">Security</span>
              <h3 className="text-2xl font-display font-bold">Intelligent Perimeter & Asset Defense</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Enhance physical security operations with low-latency object detection models tuned for high threat detection rates.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Intrusion Detection", desc: "Draw high-precision virtual fences on any camera feed to capture perimeter threats.", imp: "99% detection accuracy." },
                { title: "Weapon Spotting", desc: "Scan ingress points automatically for brandished firearms or rifles.", imp: "Sub-second notification." },
                { title: "Tailgating Prevention", desc: "Detect unauthorized follow-through events at badge turnstiles.", imp: "Enforce one badge, one entry." },
                { title: "Anomaly Recognition", desc: "Flag after-hours motion or direction violations in sensitive areas.", imp: "Zero blindspots." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-surface-muted/40 p-5 space-y-2">
                  <h4 className="text-sm font-semibold">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border overflow-hidden bg-surface-muted/30 p-3 shadow-lg">
              <img
                src={imageSrc || "/homeCaseStudy/surveillance-perimeter-clean.jpg"}
                alt="Perimeter Defense AI Analytics"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PerimeterDigitalCenter() {
  const [selectedEvent, setSelectedEvent] = useState("Intruder Breach");

  const events = {
    "Intruder Breach": {
      id: "EVT-2026-304",
      title: "Fence Line Breach — Segment 4 North",
      cameraId: "CAM-NORTH-08",
      zone: "Segment 4 North Boundary",
      object: "Human Intruder Classified",
      confidence: "94.0%",
      status: "PTZ Auto-Track Active",
      statusColor: "text-rose-600 bg-rose-500/10 border-rose-500/20",
      description: "Visual classification verified human silhouette entering Segment 4 boundary line. Primary PTZ camera commanded to slew-to-cue and auto-track target direction."
    }
  };

  const current = events[selectedEvent as keyof typeof events];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PERIMETER HUB</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Perimeter Monitoring Digital Center</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Monitor fence lines and exterior borders in real-time. Link thermal camera feeds and PTZ controllers to identify and isolate security breaches.
          </p>

          <div className="flex gap-2">
            {Object.keys(events).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedEvent(key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedEvent === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden glass-card"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">{current.id}</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.statusColor}`}>
                {current.status}
              </span>
            </div>

            {/* Thermal / CCTV Analytics Display */}
            <div className="bg-slate-950 border border-border/50 rounded-2xl overflow-hidden mb-6 aspect-video relative flex items-center justify-center">
              <img 
                src="/homeCaseStudy/surveillance-perimeter-clean.jpg"
                alt="Perimeter Monitoring Feed Visual"
                className="absolute inset-0 w-full h-full object-cover opacity-85 select-none"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                FEED: {current.cameraId}
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur flex items-center gap-1.5 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                THERMAL WATCH
              </div>

              {selectedEvent === "Intruder Breach" && (
                <div className="absolute border-2 border-dashed border-emerald-500 rounded p-4 flex flex-col items-center justify-center bg-emerald-500/10 select-none pointer-events-none">
                  <span className="text-emerald-400 font-bold text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded mb-1 border border-emerald-500/30">
                    TARGET FOUND
                  </span>
                  <span className="text-[8px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                    Confidence: {current.confidence}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-foreground tracking-tight">{current.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{current.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">OBJECT CLASS</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block truncate">{current.object}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">ZONE</span>
                  <span className="text-foreground font-bold text-xs mt-0.5 block">{current.zone}</span>
                </div>
                <div className="bg-surface-muted/60 rounded-xl p-3 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">CONFIDENCE</span>
                  <span className="text-emerald-600 font-bold text-xs mt-0.5 block">{current.confidence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PerimeterWorkflow() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1, label: "Zone Monitoring", sub: "24/7 stream analysis",
      desc: "Perform real-time visual monitoring of chain-link boundaries and open field border lines.",
      bullets: [
        "Ingest 1080p RTSP or thermal camera feeds under sub-100ms lag",
        "Draw virtual polygonal tripwires directly on boundary video zones",
        "Enable scheduled overlays to change tripwire coordinates automatically",
        "Verify network camera connections and keep system logs active"
      ],
      actions: ["RTSP Ingestion", "Virtual Tripwire Setup", "HUD Coordinates Overlay", "Stream Verification"]
    },
    {
      num: 2, label: "Motion Detection", sub: "Spatial background modeling",
      desc: "Apply motion modeling algorithms to isolate moving target silhouettes from background scenes.",
      bullets: [
        "Track local coordinate pixel changes between consecutive frames",
        "Isolate foreground motion layers from static background objects",
        "Filter out static fence movements caused by moderate wind patterns",
        "Define strict ignore zones on passing vehicle pathways to limit logs"
      ],
      actions: ["Inference Check", "Background Modeling", "Static Movement Filter", "Ignore Mask Overlay"]
    },
    {
      num: 3, label: "Classification", sub: "Threat vs environmental noise",
      desc: "Classify moving targets to filter out wind-blown branches, weather noise, and wildlife alerts.",
      bullets: [
        "Distinguish human shapes and vehicle profiles from wildlife signatures",
        "Filter out shadows, moving branches, and intense rain/fog layers",
        "Run target height check loops to ignore small birds or animals",
        "Verify target persistence stability checks over 2 seconds"
      ],
      actions: ["Target Profile Check", "Environmental Noise Filter", "Height Verification", "Persistence Watch"]
    },
    {
      num: 4, label: "PTZ Auto-Track", sub: "Target zoom coordinates tracking",
      desc: "Command Pan-Tilt-Zoom (PTZ) cameras to track and zoom in on detected boundary breach targets.",
      bullets: [
        "Calculate target coordinate offsets from fixed detection cameras",
        "Broadcast modbus pan-tilt-zoom command keys to PTZ units",
        "Auto-zoom optics to extract close-up crops of classification areas",
        "Keep focus tracking locked as intruder crosses overlapping fields"
      ],
      actions: ["Offset Coordinate Map", "Slew-to-Cue Command", "Auto-Zoom Focus", "PTZ Tracking Loop"]
    },
    {
      num: 5, label: "Alert Dispatch", sub: "EHS log packaging & routing",
      desc: "Package metadata details, coordinates, and clip snapshots for immediate dispatch to control rooms.",
      bullets: [
        "Compile threat segment coordinates, timestamps, and camera IDs",
        "Extract thermal or high-definition snapshots showing target paths",
        "Sync live feed overrides to central NOC desk alert monitors",
        "Route JSON-formatted alarm packages to client dispatch nodes"
      ],
      actions: ["Threat Metadata Build", "Snapshot Extraction", "Desk Screen Override", "JSON Alarm Delivery"]
    },
    {
      num: 6, label: "Incident Archive", sub: "Compliance safety audits",
      desc: "Store detailed event timelines and operator logs in databases for subsequent safety audits.",
      bullets: [
        "Log complete threat timelines and camera IDs in audit ledgers",
        "Sync operator notes, alert validation times, and CAPA logs",
        "Save video buffers and snapshot crops in secure media storage",
        "Format compliance-ready templates for security audit traces"
      ],
      actions: ["Audit Ledger Sync", "CAPA Database Sync", "Secure Video Archive", "Compliance Template Gen"]
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">RESPONSE WORKFLOW</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Boundary Breach Response Workflow</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Follow the boundary response cycle from constant zone checks to target class checks, PTZ auto-zoom sweeps, and dispatcher dispatch.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Step List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-350 flex items-center gap-4 ${
                    activeStep === s.num
                      ? "bg-primary text-white border-transparent shadow-soft"
                      : "bg-surface border-border text-foreground hover:bg-surface-muted"
                  }`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-bold text-xs ${
                    activeStep === s.num ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs leading-none">{s.label}</h4>
                    <span className={`text-[9px] mt-0.5 block font-semibold uppercase tracking-wider ${activeStep === s.num ? "text-white/90" : "text-primary"}`}>
                      {s.sub}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-primary text-white text-xs font-semibold px-5 py-3 hover:opacity-90 shadow-soft"
              >
                Deploy This Flow
              </Link>
            </div>
          </div>

          {/* Right Column: Step details card */}
          <div className="lg:col-span-7">
            <div 
              className="h-full rounded-3xl border border-border bg-surface p-8 shadow-xl flex flex-col justify-between relative overflow-hidden glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider font-semibold">
                    Step {currentStep.num} of 6
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/60 px-2 py-0.5 rounded border border-border">
                    {currentStep.actions.length} system actions
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">{currentStep.label}</h3>
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{currentStep.sub}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">What happens in this step</h6>
                  <ul className="space-y-2">
                    {currentStep.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] text-muted-foreground leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Tags */}
                <div className="pt-3 border-t border-border/60">
                  <h6 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">System functions activated</h6>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.actions.map((tag) => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 bg-primary/8 text-primary border border-primary/15 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">Active perimeter boundary check live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PerimeterAiAssistant() {
  const [activePrompt, setActivePrompt] = useState("Segment 4 North");

  const prompts = {
    "Segment 4 North": {
      q: "Why did Segment 4 flag five times this week?",
      a: "Three events were correctly filtered as deer crossing outer grass paths (EHS logs verified animal profile classification). One alert was registered due to wind-blown low branches during a storm, and one confirmed human threat was intercepted by the patrol squad. We recommend pruning tree limbs on that segment."
    },
    "Wildlife vs Intruders": {
      q: "How are deer and small animals filtered out?",
      a: "The camera classifier runs height verification filters and motion contour checks. Silhouette aspect ratios of four-legged movements or small birds are verified against animal templates. Events that fall below classification criteria are logged silently as non-threat logs."
    },
    "Weather Noise Correction": {
      q: "How does the system handle rain or wind noise?",
      a: "We configure spatiotemporal filters to track motion velocity and texture patterns. Random changes (like heavy rain drops or swaying fence lines) lack consistent directional vectors, so our classifier filters them out, keeping alert dashboards clear."
    }
  };

  const current = prompts[activePrompt as keyof typeof prompts];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: Chat Widget */}
        <div className="lg:col-span-7">
          <div 
            className="rounded-3xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden glass-card flex flex-col gap-4"
            style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
          >
            <div className="flex justify-between items-center border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-foreground">SYNAPSE PERIMETER ADVISOR</span>
              </div>
              <span className="text-[9px] font-mono text-muted-foreground bg-surface-muted/50 px-2 py-0.5 rounded">Model: YOLOv8-Bound</span>
            </div>

            {/* Conversation list */}
            <div className="flex flex-col gap-4 pt-1">
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary text-white text-xs px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] leading-relaxed shadow-soft">
                  {current.q}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
                  <Brain className="h-4 w-4" />
                </div>
                <div className="bg-surface-muted border border-border/60 text-xs text-muted-foreground px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                  {current.a}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Description & Prompts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Brain className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">AI ADVISOR</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">Synapse Perimeter Advisor</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Analyze fence activity patterns and review classifier details. Select prompts to ask the assistant about Segment 4 stats, animal classification, and storm noise checks.
          </p>

          <div className="space-y-2">
            {Object.keys(prompts).map((key) => (
              <button
                key={key}
                onClick={() => setActivePrompt(key)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all ${
                  activePrompt === key
                    ? "bg-primary text-white border-transparent shadow-soft"
                    : "bg-surface border-border text-foreground hover:bg-surface-muted"
                }`}
              >
                {prompts[key as keyof typeof prompts].q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PerimeterBoundaryTypes() {
  const boundaries = [
    {
      title: "Chain-Link & Mesh Fencing",
      desc: "Draw tight polygonal tripwires directly on fence lines. Filter out minor background mesh vibrations caused by wind.",
      confidence: "Accuracy Rate: >99%",
      action: "Local Siren Relay & Spotlight Trip"
    },
    {
      title: "Open-Field Boundaries",
      desc: "Implement thermal-optical cameras to track perimeter crossing lines over open ground fields without fences.",
      confidence: "Accuracy Rate: >98%",
      action: "Slew PTZ Auto-Track Coordinate"
    },
    {
      title: "Multi-Segment Long Borders",
      desc: "Map coordinate offsets across extensive campus fence lines. Hand off tracking tags between camera sectors.",
      confidence: "Accuracy Rate: >97%",
      action: "Alarm Relay to Security Dashboard"
    },
    {
      title: "Water & Coastal Edges",
      desc: "Deploy specialized wave-filtering algorithms to detect boats or swimmers in shoreline exclusion zones.",
      confidence: "Accuracy Rate: >96%",
      action: "Voice Warning Siren & Dispatch Alert"
    }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">BOUNDARIES</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Supported Boundary Types</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Secure all campus parameters. Deploy visual analytics models across chain-link fences, open staging fields, and shoreline exclusion zones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boundaries.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between glass-card"
              style={{"--card-accent": "var(--primary)"} as React.CSSProperties}
            >
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 space-y-1">
                <span className="text-[9px] font-mono font-semibold block text-primary">{item.confidence}</span>
                <span className="text-[9px] font-mono text-muted-foreground block">Action: {item.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PerimeterConnectedStack() {
  const integrations = [
    { name: "Access Control Panels", desc: "Integrate boundary alarms to auto-lock outer entrance gates or secure corridor doors.", tags: ["OSDP control relays", "Wiegand overrides", "Gate interlocks"] },
    { name: "SIEM & Security Dispatch", desc: "Route alarm metadata logs and visual snapshot packages to central NOC desks or Splunk incident registers.", tags: ["Splunk Endpoint", "JSON Alert Relays", "NOC Map Overrides"] },
    { name: "Floodlights & Deterrents", desc: "Automate GPIO and Modbus relays to activate high-intensity spotlights or voice sirens upon verified breach.", tags: ["Modbus TCP relay", "GPIO Sirens", "Spotlight triggers"] },
    { name: "Emergency Response", desc: "Sync live camera video streams directly to emergency responder dashboards and mobile alert applications.", tags: ["RTSP streams", "EAS Dispatch APIs", "EHS Audit Logging"] }
  ];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">SAFETY INTEGRATION</span>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Connected Perimeter Security Stack</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Link outer boundary visual warnings directly with access gates, spotlights, central NOC dispatch desks, and SIEM security logging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PerimeterMonitoringExtraSection({ imageSrc }: { imageSrc?: string }) {
  return (
    <>
      <PerimeterSecuritySection imageSrc={imageSrc} />
      <PerimeterDigitalCenter />
      <PerimeterWorkflow />
      <PerimeterBoundaryTypes />
      <PerimeterConnectedStack />
    </>
  );
}





