import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building,
  Building2,
  Globe,
  Handshake,
  Landmark,
  Rocket,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { type CSSProperties, useEffect, useRef } from "react";
import {
  BrandIconBox,
  CTASection,
  PageHero,
  SectionHeader,
  Stat,
} from "@/components/site/Primitives";

export const Route = createFileRoute("/awards-achievements")({
  head: () => ({
    meta: [
      { title: "Awards & Achievements - Pure Technology" },
      {
        name: "description",
        content:
          "Recognitions, milestones, and industry accomplishments from Pure Technology - IT consulting and software development since 2013.",
      },
      { property: "og:title", content: "Awards & Achievements - Pure Technology" },
      {
        property: "og:description",
        content:
          "Awards, certifications, and milestones from Pure Technology's work with enterprises and growth-stage teams.",
      },
    ],
  }),
  component: AwardsAchievementsPage,
});

const stats = [
  { number: "2013", label: "Company founded" },
  { number: "50+", label: "Customer engagements completed" },
  { number: "10", label: "Countries reached" },
  { number: "2026", label: "AI interview product launched" },
];

const brandAccents = [
  "var(--brand-blue)",
  "var(--brand-red)",
  "var(--brand-orange)",
  "var(--brand-yellow)",
  "var(--brand-green)",
  "var(--brand-purple)",
  "var(--brand-blue)",
  "var(--brand-red)",
  "var(--brand-orange)",
  "var(--brand-green)",
];

type Milestone = {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  Icon: LucideIcon;
};

const milestones: Milestone[] = [
  {
    year: "2013",
    title: "Company Founded",
    description: "Founded with a mission to deliver precision engineering.",
    side: "left",
    Icon: Rocket,
  },
  {
    year: "2015",
    title: "Global Footprint Begins",
    description: "Completed the first 50+ customer engagements across 10 different countries.",
    side: "right",
    Icon: Globe,
  },
  {
    year: "2016",
    title: "Company Incorporation",
    description: "Pure Tech Codex Pvt. Ltd. officially incorporated.",
    side: "left",
    Icon: Building2,
  },
  {
    year: "2017",
    title: "Enterprise Milestone",
    description:
      "Successfully delivered projects to Fortune 500 companies - Bridgestone and Schindler.",
    side: "right",
    Icon: Handshake,
  },
  {
    year: "2018",
    title: "Partnership with Reliance",
    description: "Delivered a strategic project with Reliance.",
    side: "left",
    Icon: Building,
  },
  {
    year: "2020",
    title: "Engagement with Symbiosis",
    description: "Began working with a Symbiosis group client on key initiatives.",
    side: "right",
    Icon: Users,
  },
  {
    year: "2022",
    title: "Indian Defence",
    description: "Secured and delivered a project for the Government Army.",
    side: "left",
    Icon: ShieldCheck,
  },
  {
    year: "2024",
    title: "UAE ( Dubai ) Expansion",
    description: "Expanded globally with the launch of our new company in Dubai.",
    side: "right",
    Icon: Landmark,
  },
  {
    year: "2025",
    title: "Local GPT - ( AI Lab )",
    description: "Established our AI Lab and developed our own Local GPT framework.",
    side: "left",
    Icon: BrainCircuit,
  },
  {
    year: "2026",
    title: "AI Interview Product",
    description: "Developed and launched our AI-powered interview platform.",
    side: "right",
    Icon: Bot,
  },
];

const recognitions = [
  {
    Icon: Globe,
    title: "Global Customer Reach",
    sub: "50+ customer engagements across 10 countries",
  },
  {
    Icon: Handshake,
    title: "Enterprise Delivery",
    sub: "Projects delivered for Bridgestone and Schindler",
  },
  {
    Icon: Building,
    title: "Reliance Partnership",
    sub: "Strategic project delivered with Reliance",
  },
  {
    Icon: ShieldCheck,
    title: "Government Project",
    sub: "Indian Defence project awarded and delivered for the Government Army",
  },
  {
    Icon: Landmark,
    title: "Dubai Expansion",
    sub: "New global company launched in Dubai",
  },
  {
    Icon: Bot,
    title: "AI Product Launch",
    sub: "AI-powered interview platform developed and launched",
  },
];

function StatsSection() {
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="By the numbers"
          title="Milestones built through long-term delivery."
          description="A quick snapshot of the company journey shown below."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <Stat key={s.label} value={s.number} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = reduceMotion ? 0 : parseInt(el.dataset.delay ?? "0", 10);
            window.setTimeout(() => el.classList.add("tl-show"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.22 },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;

    const updateLineProgress = () => {
      const { top, height } = timeline.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const end = window.innerHeight * 0.26;
      const progress = Math.min(Math.max((start - top) / (height + start - end), 0), 1);

      timeline.style.setProperty("--tl-progress", reduceMotion ? "1" : progress.toString());
      animationFrame = 0;
    };

    const requestLineUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateLineProgress);
      }
    };

    updateLineProgress();
    window.addEventListener("scroll", requestLineUpdate, { passive: true });
    window.addEventListener("resize", requestLineUpdate);

    return () => {
      window.removeEventListener("scroll", requestLineUpdate);
      window.removeEventListener("resize", requestLineUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
      <style>{`
        .tl-container { position: relative; max-width: 960px; margin: 0 auto; --tl-progress: 0; }
        .tl-center-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          border-radius: 999px;
          overflow: hidden;
          background: color-mix(in oklab, var(--brand-blue) 12%, var(--border));
          transform: translateX(-50%);
        }
        .tl-center-line::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: var(--gradient-brand);
          box-shadow: 0 0 18px color-mix(in oklab, var(--brand-blue) 25%, transparent);
          transform: scaleY(var(--tl-progress));
          transform-origin: top;
          transition: transform 90ms linear;
        }
        .tl-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 3rem;
          position: relative;
          opacity: 0;
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.2,.8,.2,1);
          will-change: opacity, transform;
        }
        .tl-row.tl-left {
          justify-content: flex-end;
          padding-right: calc(50% + 36px);
          transform: translate3d(-34px, 22px, 0) scale(.94);
        }
        .tl-row.tl-right {
          justify-content: flex-start;
          padding-left: calc(50% + 36px);
          transform: translate3d(34px, 22px, 0) scale(.94);
        }
        .tl-row.tl-show {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        .tl-dot-wrap {
          position: absolute;
          left: 50%;
          top: 48px;
          transform: translateX(-50%);
          width: 17px;
          height: 17px;
          border-radius: 50%;
          border: 3px solid var(--tl-accent);
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 0 8px color-mix(in oklab, var(--tl-accent) 10%, transparent);
        }
        .tl-dot-inner {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--tl-accent);
        }
        .tl-card {
          width: min(100%, 380px);
          border-color: color-mix(in oklab, var(--tl-accent) 20%, white);
          box-shadow: 0 18px 45px -30px color-mix(in oklab, var(--tl-accent) 45%, transparent);
        }
        .tl-icon {
          background: color-mix(in oklab, var(--tl-accent) 10%, white);
          color: var(--tl-accent);
        }
        .tl-year { color: var(--tl-accent); }
        @media (max-width: 767px) {
          .tl-container { max-width: 640px; }
          .tl-center-line { left: 10px; }
          .tl-row,
          .tl-row.tl-left,
          .tl-row.tl-right {
            justify-content: flex-start;
            padding-left: 40px;
            padding-right: 0;
            transform: translate3d(22px, 18px, 0) scale(.96);
          }
          .tl-row.tl-show { transform: translate3d(0, 0, 0) scale(1); }
          .tl-dot-wrap { left: 10px; top: 42px; }
          .tl-card { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tl-row,
          .tl-row.tl-left,
          .tl-row.tl-right,
          .tl-row.tl-show {
            transition: none;
            transform: none;
          }
          .tl-center-line::after { transition: none; }
        }
      `}</style>

      <SectionHeader
        eyebrow="Our journey"
        title={
          <>
            Progress Marked <span className="text-gradient-brand">By Outcomes.</span>
          </>
        }
        description="From our inception to innovations in AI, every milestone reflects our commitment to excellence."
        align="center"
      />

      <div ref={timelineRef} className="tl-container mt-14">
        <div className="tl-center-line" />
        {milestones.map(({ Icon, ...m }, i) => (
          <div
            key={m.year}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-delay={i * 75}
            className={`tl-row tl-${m.side}`}
            style={{ "--tl-accent": brandAccents[i] } as CSSProperties}
          >
            <article className="tl-card glass-card rounded-2xl px-5 py-5">
              <div className="flex gap-4">
                <span className="tl-icon grid h-16 w-16 shrink-0 place-items-center rounded-xl">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <p className="tl-year text-xl font-display font-bold leading-none">{m.year}</p>
                  <h3 className="mt-2 text-base font-display font-semibold text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </article>
            <div className="tl-dot-wrap">
              <div className="tl-dot-inner" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecognitionsSection() {
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Highlights"
          title="Achievements from the journey."
          description="The verified milestones and accomplishments shared for this page."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recognitions.map(({ Icon, title, sub }, i) => (
            <div key={title} className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <BrandIconBox color={brandAccents[i]}>
                <Icon className="h-5 w-5" />
              </BrandIconBox>
              <div>
                <p className="font-display font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsAchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            Awards & <span className="text-gradient-brand">Achievements</span>
          </>
        }
        description={
          <>
            Recognitions, milestones, and industry accomplishments from our journey since{" "}
            <strong>2013</strong>.
          </>
        }
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          About Pure Technology
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <StatsSection />
      <JourneySection />
      <RecognitionsSection />

      <CTASection
        title="Building something worth celebrating?"
        description="Talk to us about your next project - AI, product engineering, or IT staffing from Pune."
      />
    </>
  );
}
