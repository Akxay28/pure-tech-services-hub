import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Globe2,
  Clock4,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import {
  PrimaryButton,
  GhostButton,
  ClientMarquee,
  Testimonial,
  CTASection,
  SectionHeader,
  CaseStudyCard,
} from "@/components/site/Primitives";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { YouTubeEmbed } from "@/components/site/YouTubeEmbed";
import { HeroCarousel } from "./heroCarousel";
import { getTestimonialsAction } from "@/lib/admin-actions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Technology — AI, IT Staffing & Product Engineering in India" },
      {
        name: "description",
        content:
          "Pure Technology helps enterprises ship AI products, hire vetted Indian engineers, and build SaaS that scales. Bengaluru-headquartered. Globally trusted.",
      },
      { property: "og:title", content: "Pure Technology — Engineering partner from India" },
      {
        property: "og:description",
        content: "AI solutions, IT staffing, and product engineering for ambitious enterprises.",
      },
    ],
  }),
  loader: async () => ({
    testimonials: await getTestimonialsAction({ data: { admin: false } }),
  }),
  component: Home,
});

// ─── TESTIMONIAL CAROUSEL (receives dynamic data) ─────────────────────────────

const accentColors = [
  "var(--brand-red)",
  "var(--brand-blue)",
  "var(--brand-orange)",
  "var(--brand-green)",
  "var(--brand-yellow)",
];

// ─── TESTIMONIAL CAROUSEL ─────────────────────────────────────────────────────

function TestimonialCarousel({ testimonials }: { testimonials: any[] }) {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    if (total === 0) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  if (total === 0) return null;

  const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % total]);

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-3 gap-5">
        {visible.map((t, i) => (
          <Testimonial
            key={`${active}-${i}`}
            quote={t.quote}
            name={t.name}
            role={t.role}
            company={t.company}
            initials={t.initials}
            accent={t.accent || accentColors[(active + i) % accentColors.length]}
            project={t.project}
            avatar={t.avatar || undefined}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full border border-border bg-surface/60 flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-foreground" : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="h-10 w-10 rounded-full border border-border bg-surface/60 flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function Home() {
  const { testimonials } = Route.useLoaderData();
  return (
    <>
      <HeroCarousel />

      <ClientMarquee />

      {/* How we work */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-[color-mix(in_oklab,var(--brand-orange)_8%,var(--background))] via-background to-[color-mix(in_oklab,var(--brand-green)_8%,var(--background))]">
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="p-6 lg:p-10">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-px w-8 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-red)]" />
                  How we work
                </div>
                <h2 className="mt-4 text-4xl lg:text-5xl font-display font-bold leading-[1.05]">
                  Enterprise Delivery <br />
                  With <span className="text-gradient-brand">Startup Speed.</span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  We work as your internal team combining AI expertise, product engineering, and
                  senior talent to move from idea to execution faster.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  From discovery workshops to production deployment, our teams stay embedded,
                  accountable, and outcome-focused.
                </p>
                <div className="mt-5 mb-5 flex flex-col sm:flex-row gap-3">
                  <PrimaryButton to="/contact">Watch overview</PrimaryButton>
                  <GhostButton to="/case-studies">See case studies</GhostButton>
                </div>
              </div>

              <div className="relative self-center w-full aspect-video overflow-hidden rounded-2xl shadow-soft bg-black">
                <YouTubeEmbed
                  videoId="4DpEGb4HG7w"
                  title="Pure Technology showreel"
                  autoplay={true}
                  className="absolute top-1/2 left-1/2 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      {/* Selected outcomes */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Client outcomes"
            title={
              <>
                Real Numbers From Recent <span className="text-gradient-brand">Engagements.</span>
              </>
            }
            description="Recent AI deliveries measured in rupees saved, hours recovered, and trust earned."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CaseStudyCard
              client="Local GPT for Secure Financial Operations"
              industry="Financial Services & Banking"
              image="https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510627/cloudwise-local-gpt_ha2gs1.webp"
              challenge="Strict regulatory requirements prevented external data sharing, while disconnected legacy systems and sensitive financial records limited AI adoption."
              outcome="Implemented a fully on-premises AI platform with offline LLMs, secure document intelligence, SQL-based analytics, and workflow automation."
              metrics={[
                { value: "85%", label: "Faster document processing" },
                { value: "95%", label: "Data retrieval accuracy" },
                { value: "300%+", label: "First-year ROI" },
              ]}
              accent="var(--brand-blue)"
              projectName="Local GPT – On-Premises AI Platform"
              objective="On-premises AI platform delivering enterprise capabilities without internet dependency. Enables document processing, workflow automation, and analytics while maintaining data sovereignty and encryption."
              solutions={[
                "Offline AI Infrastructure: Autonomous AI with LLMs in air-gapped environments.",
                "Zero-Trust Document Processing: Encrypted system with secure queries and multi-format processing.",
                "Intelligent SQL Agent: Natural language database querying for instant analytics.",
                "AI Workflow Automation: AI agents for compliance and regulatory reporting.",
              ]}
              challenges={[
                "Regulatory compliance prohibiting external data transmission.",
                "Zero internet access requiring offline capabilities.",
                "Sensitive financial records needing data sovereignty.",
                "Legacy system integration with fragmented databases.",
              ]}
              keyBenefits={[
                { value: "85%", label: "Reduction in document processing time" },
                { value: "70%", label: "Increase in operational efficiency" },
                { value: "95%", label: "Improvement in data retrieval accuracy" },
                { value: "60%", label: "Cost savings eliminating cloud subscriptions" },
              ]}
              results={[
                "10x processing capacity increase",
                "300%+ ROI first year",
                "Zero-breach security",
                "Scaled 50 to 5,000+ users",
              ]}
              techStack={[
                { category: "Languages", items: "JavaScript", icon: "ti-code" },
                { category: "Database", items: "Postgres", icon: "ti-database" },
                { category: "Cloud", items: "On-Premises", icon: "ti-server" },
                { category: "Frameworks", items: "React.js & Node.js", icon: "ti-layout" },
                {
                  category: "AI/ML",
                  items: "Langchain, LangGraph, LLMs, Vector Databases",
                  icon: "ti-brain",
                },
              ]}
              conclusion="Cloudwise AI established secure on-premises infrastructure eliminating internet dependencies while enabling unprecedented operational efficiencies and maintaining highest security standards."
            />

            <CaseStudyCard
              client="Global Recruitment & Talent Development Organization"
              industry="Human Resources & Career Development"
              image="https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510621/2_case_study_r5ijel.webp"
              challenge="Candidates were underperforming due to inadequate practice opportunities, delayed and subjective feedback, expensive coaching programs, and increasing risks associated with remote hiring and fraudulent interview practices."
              outcome="Developed Questa AI Interviewer, an AI-powered interview preparation platform featuring GPT-driven interview simulations, real-time speech analytics, smart proctoring, and performance dashboards."
              metrics={[
                { value: "78%", label: "Higher interview success rates" },
                { value: "85%", label: "Improvement in speech confidence" },
                { value: "60%", label: "Reduction in preparation time" },
              ]}
              accent="var(--brand-purple)"
              projectName="Questa AI Interviewer – Interview Simulation Platform"
              objective="AI-powered interview preparation platform transforming candidate training through intelligent interview simulations, speech analytics, and smart proctoring. Enables candidates to practice, improve communication skills, and achieve measurable interview success."
              solutions={[
                "AI Interview Simulation: GPT-powered system generating role-specific interview questions and realistic interview experiences.",
                "Real-Time Speech Analytics: Voice recognition technology analyzing fluency, confidence, speaking pace, and communication effectiveness.",
                "Smart Proctoring: AI-driven video monitoring with behavioral analysis to ensure interview integrity and prevent fraudulent activities.",
                "Performance Analytics Dashboard: Detailed scoring, personalized feedback, progress tracking, and skill-gap identification.",
              ]}
              challenges={[
                "Candidates lacked realistic interview practice opportunities before assessments.",
                "Traditional feedback mechanisms were delayed, inconsistent, and subjective.",
                "Professional interview coaching programs were expensive and inaccessible for many candidates.",
                "Remote hiring processes introduced integrity risks and fraudulent interview practices.",
              ]}
              keyBenefits={[
                { value: "78%", label: "Increase in interview success rates" },
                { value: "60%", label: "Reduction in preparation time" },
                { value: "85%", label: "Improvement in speech confidence" },
                { value: "70%", label: "Reduction in coaching costs" },
              ]}
              results={[
                "78% higher interview pass rates",
                "65% reduction in filler words and speech hesitation",
                "$250K annual cost savings",
                "Scaled from 50 to 1,500+ candidates assessed monthly",
              ]}
              techStack={[
                { category: "Languages", items: "Python", icon: "ti-code" },
                { category: "Database", items: "PostgreSQL", icon: "ti-database" },
                { category: "Deployment", items: "On-Premises", icon: "ti-server" },
                { category: "Frameworks", items: "Django", icon: "ti-layout" },
                {
                  category: "AI/ML",
                  items: "GPT Models, Wav2Vec 2.0, Speech Analytics",
                  icon: "ti-brain",
                },
              ]}
              conclusion="Questa AI Interviewer transformed interview preparation through AI-powered simulations, real-time communication analysis, and intelligent assessment workflows. The platform enabled candidates to improve interview performance while helping organizations conduct scalable, objective, and data-driven talent evaluations."
            />
            {/* 
            <CaseStudyCard
              client="Voice AI Assistant for Intelligent Candidate Evaluation"
              industry="Recruitment Technology"
              image="/homeCaseStudy/home-case-study-3.webp"
              challenge="Manual screening processes, subjective candidate evaluations, and constant interview coordination created hiring delays, inconsistent assessments, and operational inefficiencies."
              outcome="Implemented an AI Voice Agent that automates candidate screening through natural conversations, evaluates communication skills, schedules interviews, and generates structured assessment reports, significantly reducing manual recruitment effort and improving hiring efficiency."
              metrics={[
                { value: "70%", label: "Screening velocity" },
                { value: "100%", label: "Candidate handling" },
                { value: "85%", label: "Assessment quality" },
              ]}
              accent="var(--brand-green)"
            /> */}

            <CaseStudyCard
              client="Global Real Estate & B2B Sales Organization"
              industry="Real Estate, B2B SaaS & Sales"
              image="https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510622/ai_calling_bot_yfbmj5.png"
              challenge="Sales teams were spending the majority of their time on repetitive outbound calling, struggling with inconsistent follow-ups, limited scalability, and after-hours response gaps that resulted in missed opportunities and lost revenue."
              outcome="Developed an AI Calling Bot that autonomously initiates conversations, qualifies leads, schedules meetings, recognizes customer intent in real time, and updates CRM systems automatically."
              metrics={[
                { value: "90%", label: "Reduction in manual calling time" },
                { value: "65%", label: "Increase in conversion rates" },
                { value: "10X", label: "Growth in outreach capacity" },
              ]}
              accent="var(--brand-orange)"
              projectName="Sales Acceleration with AI Calling Bot"
              objective="Intelligent voice automation platform revolutionizing lead engagement through autonomous calling, real-time intent recognition, automated scheduling, and CRM synchronization, resulting in significantly higher conversion rates and operational efficiency."
              solutions={[
                "AI Voice Calling: Conversational AI capable of conducting natural, human-like phone conversations with prospects.",
                "Real-Time Intent Recognition: Machine learning models analyzing customer responses and generating contextual follow-up actions.",
                "Automated Scheduling: Calendar integrations enabling seamless meeting booking and coordination.",
                "CRM Integration: Real-time synchronization of lead status, call outcomes, and engagement data across sales systems.",
              ]}
              challenges={[
                "Sales teams spending 70–80% of their time on repetitive outbound calling activities.",
                "Revenue loss caused by inconsistent lead follow-up processes.",
                "Difficulty scaling outreach without increasing operational headcount.",
                "After-hours response delays resulting in high lead abandonment rates.",
              ]}
              keyBenefits={[
                { value: "90%", label: "Reduction in manual calling time" },
                { value: "65%", label: "Increase in conversion rates" },
                { value: "10X", label: "Expansion of outreach capacity" },
                { value: "85%", label: "Improvement in contact rates" },
              ]}
              results={[
                "Scaled daily outreach from 500 to 5,000+ calls",
                "Improved conversion rates from 12% to 65%",
                "$450K annual operational savings",
                "40–75% revenue growth across campaigns",
              ]}
              techStack={[
                { category: "Languages", items: "Python", icon: "ti-code" },
                { category: "Database", items: "PostgreSQL", icon: "ti-database" },
                { category: "Cloud", items: "AWS", icon: "ti-server" },
                { category: "Frameworks", items: "Django", icon: "ti-layout" },
                { category: "AI/ML", items: "TTS, LLM, STT Pipeline", icon: "ti-brain" },
              ]}
              conclusion="The AI Calling Bot transformed outbound sales operations by creating an intelligent voice automation ecosystem that dramatically increased outreach capacity, improved lead engagement, reduced operational costs, and delivered measurable revenue growth without requiring additional sales headcount."
            />
          </div>

          <div className="mt-10 flex justify-center">
            <GhostButton to="/case-studies">
              View more case studies
              <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>
        </div>
      </section>

      {/* Why Pure */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why teams pick Pure"
            title={
              <>
                A Delivery Model Built For Enterprise Trust,{" "}
                <span className="text-gradient-brand">Startup Velocity.</span>
              </>
            }
            description="We sit in the middle of the diagram — close enough to your business to think like an owner, big enough to staff and deliver at enterprise scale."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: ShieldCheck,
                title: "Compliance-first delivery",
                body: "SOC 2 Type II aligned process, ISO 27001 controls, DPDP-ready data handling. Your security team will sleep well.",
                accent: "var(--brand-blue)",
              },
              {
                Icon: Sparkles,
                title: "Senior by default",
                body: "Average 9 years of experience on every squad. No bait-and-switch — the engineers you meet are the engineers who ship.",
                accent: "var(--brand-orange)",
              },
              {
                Icon: Globe2,
                title: "India-rooted, globally minded",
                body: "Bengaluru, Hyderabad and Pune talent pools, with project leads working in your timezone — North America, EMEA, APAC.",
                accent: "var(--brand-green)",
              },
              {
                Icon: Clock4,
                title: "Two-week launch cycles",
                body: "Demoable progress every fortnight. We don't disappear for three months and hand over a tarball.",
                accent: "var(--brand-red)",
              },
              {
                Icon: HeartHandshake,
                title: "Partnership, not ticket-work",
                body: "Average client tenure is 3.4 years. We invest in understanding your business, not just closing JIRAs.",
                accent: "var(--brand-yellow)",
              },
              {
                Icon: TrendingUp,
                title: "Outcomes, measured",
                body: "Every engagement comes with a defined success metric. We share dashboards, not just status reports.",
                accent: "var(--brand-blue)",
              },
            ].map(({ Icon, title, body, accent }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{
                    background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 55%, white))`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-display font-semibold capitalize">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="In their words"
            title={
              <>
                The Kind of Feedback That Gets,{" "}
                <span className="text-gradient-brand">Out of Bed.</span>
              </>
            }
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <CTASection
        title="Let's Build Something Your Customers Brag About."
        description="Tell us where you are, where you'd like to be, and the constraints in between. We'll come back in 48 hours with a concrete plan."
      />
    </>
  );
}
