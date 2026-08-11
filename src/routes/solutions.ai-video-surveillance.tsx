import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Flame,
  Users,
  Eye,
  ArrowRight,
  Camera,
  Play,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Building2,
  Video,
} from "lucide-react";
import {
  CTASection,
  PageHero,
  PrimaryButton,
  GhostButton,
  BrandIconBox,
} from "@/components/site/Primitives";
import { brandIconGradient, accentAt } from "@/lib/brand-colors";

export const Route = createFileRoute("/solutions/ai-video-surveillance")({
  head: () => ({
    meta: [
      { title: "AI Video Surveillance & Intelligent Video Analytics | Pure Technology" },
      {
        name: "description",
        content: "Proactive AI Video Surveillance systems. Edge-to-cloud security analytics for intrusion detection, weapon spotting, fire warning, safety audits, and automated lockdowns.",
      },
      { property: "og:title", content: "AI Video Surveillance - Pure Technology" },
      {
        property: "og:description",
        content: "Deploy intelligent visual threat defense with real-time video analytics and early fire alerts.",
      },
    ],
  }),
  component: AIVideoSurveillancePage,
});

const faqs = [
  {
    q: "Can this work with our existing CCTV cameras?",
    a: "Yes. Our models ingest standard RTSP/ONVIF streams. We can deploy edge server hubs to connect your existing CCTV infrastructure without replacing any cameras.",
  },
  {
    q: "How does the system prevent false alarms (shadows, weather, animals)?",
    a: "We train state-of-the-art convolutional neural networks (CNNs) to differentiate human/vehicle shapes from environmental noise, shadows, rain, and wildlife, reducing false triggers by up to 95%.",
  },
  {
    q: "Where is the video data processed?",
    a: "We support multiple deployment patterns: local edge servers (NVIDIA Jetson or custom rack builds) for zero-latency, private cloud, or hybrid environments depending on your network policies.",
  },
  {
    q: "How does tailgating detection integrate with access control?",
    a: "Our AI analysis system correlates real-time turnstile badge logs with overhead cameras. If a badge swipe is matched to more than one person passing through, an immediate alert is dispatched.",
  },
];

function AIVideoSurveillancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Security & Operations"
        title={
          <>
            Turn Every Frame into a{" "}
            <span className="text-gradient-brand">Business Asset.</span>
          </>
        }
        description="Deploy advanced computer vision at the line, boundary, or zone. Automate threat defense, early fire detection, PPE compliance, and tailgating audits with zero human fatigue."
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <PrimaryButton to="/contact">Discuss a surveillance audit</PrimaryButton>
          <GhostButton to="/solutions">All Solutions</GhostButton>
        </div>

      </PageHero>

      {/* Side-by-Side Intro Section */}
      <section className="px-5 lg:px-8 pb-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/20 bg-surface/30 backdrop-blur-md p-3 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
              <img
                src="/homeCaseStudy/ai-video-surveillance.png"
                alt="AI Surveillance Dashboard"
                className="w-full h-auto rounded-2xl border border-border object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Operational Intelligence</p>
            <h2 className="text-3xl font-display font-bold leading-tight lg:text-4xl">
              Real-time, edge-to-cloud security analytics
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A complete visual intelligence platform that integrates with your existing camera feeds. Deploy custom ML models to automate perimeter patrols, safety audits, and operational counting.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Explore docs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Video Overview Section */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-y border-border">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">At a Glance</p>
          <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">AI Surveillance at the Edge</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Standard CCTV only records what happened in the past. Our analytics transform feeds into an active, real-time security net that coordinates with sirens, locks, and security dispatch.
          </p>

          <div className="mt-12 rounded-3xl border border-border bg-surface p-4 max-w-4xl mx-auto shadow-lg relative aspect-video flex items-center justify-center group overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10 flex flex-col justify-center items-center">
              <span className="h-16 w-16 flex items-center justify-center rounded-full bg-white text-primary shadow-soft transform transition-transform group-hover:scale-105">
                <Play className="h-6 w-6 fill-current ml-1" />
              </span>
              <span className="mt-4 text-white text-sm font-semibold tracking-wider uppercase">
                Active Detection Demo
              </span>
            </div>
            <img
              src="/homeCaseStudy/ai-video-surveillance.png"
              alt="Surveillance Video Mockup"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. USPs & Value Attributes */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">USPs & Value Attributes</p>
            <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Why choose our AI surveillance?</h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Edge-to-Cloud Flexibility", desc: "Deploy in-VPC or on-premises edge hubs to protect sensitive feeds and run zero-latency alerts." },
              { title: "High-Precision Accuracy", desc: "Our filters ignore shadows, weather changes, and animals to prevent alarm fatigue." },
              { title: "Zero Guard Fatigue", desc: "Automate continuous 24/7 scanning across hundreds of feeds without human lapse." },
              { title: "Privacy-First Design", desc: "Facial masking and role-based permissions ensure full local compliance." },
            ].map(({ title, desc }, index) => (
              <div key={title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <span className="h-8 w-8 flex items-center justify-center rounded-full text-white text-sm font-bold" style={{ background: brandIconGradient(accentAt(index)) }}>
                  ✓
                </span>
                <h3 className="mt-4 text-base font-display font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Intelligence for Every Department */}
      <section className="px-5 lg:px-8 py-24 bg-surface-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl space-y-32">
          
          {/* Section Header */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Intelligence for Every Department</p>
            <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Proactive, automated visual operations</h2>
          </div>

          {/* Section 1: Safety */}
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
                  <div key={c.title} className="rounded-2xl border border-border bg-surface p-5 space-y-2">
                    <h4 className="text-sm font-semibold">{c.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border overflow-hidden bg-surface p-3 shadow-lg">
                <img
                  src="/homeCaseStudy/surveillance-safety.png"
                  alt="Workplace Safety AI Analytics"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Security (Mirror Layout) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-brand-blue-soft text-brand-blue text-xs font-semibold rounded-full uppercase">Security</span>
                <h3 className="text-2xl font-display font-bold">Intelligent Perimeter & Asset Defense</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Move beyond static recording to active threat identification, lockdown triggers, and access control audit.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Intrusion Detection", desc: "Alerts for unauthorized entry into restricted zones or outer fences.", imp: "Replaces manual security patrols." },
                  { title: "Weapon Detection", desc: "AI detection of firearms in public or sensitive workplace zones.", imp: "Buys critical response seconds." },
                  { title: "Tailgating Detection", desc: "Identify when unauthorized persons follow employees through badges.", imp: "Closes physical access gaps." },
                  { title: "Unauthorized Person Detection", desc: "Flag individuals in no-go administrative areas or plant zones.", imp: "Automatic access compliance." },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-border bg-surface p-5 space-y-2">
                    <h4 className="text-sm font-semibold">{c.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl border border-border overflow-hidden bg-surface p-3 shadow-lg">
                <img
                  src="/homeCaseStudy/surveillance-security.png"
                  alt="Security & Perimeter Defense AI"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Productivity */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-brand-green-soft text-brand-green text-xs font-semibold rounded-full uppercase">Productivity</span>
                <h3 className="text-2xl font-display font-bold">Data-Driven Operational Excellence</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Turn camera feeds into operational indicators, optimizing staffing, queues, and floor throughput.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Touchless Attendance", desc: "Face matching for seamless, ticketless check-ins.", imp: "Zero queue entry time." },
                  { title: "Idle Worker Detection", desc: "Identify line-side bottlenecks or equipment inoperation.", imp: "Optimize workforce distribution." },
                  { title: "Crowd Density Monitoring", desc: "Analyze footfall, peaks, and capacity utilization of campus spaces.", imp: "Smart ventilation/cooling." },
                  { title: "Queue Length Analysis", desc: "Monitor wait times at counters or desks in real-time.", imp: "Automatic staff triggers." },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-border bg-surface p-5 space-y-2">
                    <h4 className="text-sm font-semibold">{c.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border overflow-hidden bg-surface p-3 shadow-lg">
                <img
                  src="/homeCaseStudy/surveillance-productivity.png"
                  alt="Productivity & Analytics AI"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FAQs */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/30 border-b border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Support</p>
            <h2 className="mt-3 text-3xl font-display font-bold lg:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="rounded-2xl border border-border bg-surface overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs leading-relaxed text-muted-foreground border-t border-border/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA / Quote */}
      <CTASection
        title="Ready to secure your operations?"
        description="Book a visual audit with our senior engineering team to assess your existing cameras and model compatibility."
      >
        <PrimaryButton to="/contact">Get a Quote today</PrimaryButton>
      </CTASection>
    </div>
  );
}
