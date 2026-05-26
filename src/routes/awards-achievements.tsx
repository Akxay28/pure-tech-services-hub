// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, Award } from "lucide-react";
// import { PageHero, CTASection } from "@/components/site/Primitives";

// export const Route = createFileRoute("/awards-achievements")({
//   head: () => ({
//     meta: [
//       { title: "Awards & Achievements — Pure Technology" },
//       {
//         name: "description",
//         content:
//           "Recognitions, milestones, and industry accomplishments from Pure Technology — IT consulting and software development since 2013.",
//       },
//       { property: "og:title", content: "Awards & Achievements — Pure Technology" },
//       {
//         property: "og:description",
//         content:
//           "Awards, certifications, and milestones from Pure Technology's work with enterprises and growth-stage teams.",
//       },
//     ],
//   }),
//   component: AwardsAchievementsPage,
// });

// function AwardsAchievementsPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="Company"
//         title={
//           <>
//             Awards &{" "}
//             <span className="text-gradient-brand">achievements.</span>
//           </>
//         }
//         description="Recognitions, milestones, and industry accomplishments from our journey since 2013. This page is ready for your content — add awards, certifications, and press highlights here."
//       >
//         <Link
//           to="/about"
//           className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
//         >
//           About Pure Technology
//           <ArrowRight className="h-4 w-4" />
//         </Link>
//       </PageHero>

// {/* Coming soon section */}
//       {/* <section className="px-5 mt-30 lg:px-8 pb-24">
//         <div className="mx-auto max-w-3xl">
//           <div className="glass-card rounded-2xl border border-dashed border-border p-10 sm:p-12 text-center">
//             <span
//               className="mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white"
//               style={{ background: "var(--gradient-brand)" }}
//             >
//               <Award className="h-7 w-7" />
//             </span>
//             <h2 className="mt-6 text-xl font-display font-semibold">
//               Content coming soon
//             </h2>
//             <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
//               Add your awards, certifications, partnerships, and media
//               mentions to this page when ready. The route is live at{" "}
//               <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
//                 /awards-achievements
//               </code>
//               .
//             </p>
//           </div>
//         </div>
//       </section> */}

//       <CTASection
//         title="Building something worth celebrating?"
//         description="Talk to us about your next project — AI, product engineering, or IT staffing from Pune."
//       />
//     </>
//   );
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Cloud, Landmark, Rocket, Star } from "lucide-react";
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
      { title: "Awards & Achievements — Pure Technology" },
      {
        name: "description",
        content:
          "Recognitions, milestones, and industry accomplishments from Pure Technology — IT consulting and software development since 2013.",
      },
      { property: "og:title", content: "Awards & Achievements — Pure Technology" },
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
  { number: "150+", label: "Active enterprise engagements" },
  { number: "10K+", label: "Vetted professionals in network" },
  { number: "50+", label: "Enterprise clients, North America" },
  { number: "15", label: "Years in operation" },
];

const brandAccents = [
  "var(--brand-blue)",
  "var(--brand-red)",
  "var(--brand-orange)",
  "var(--brand-yellow)",
  "var(--brand-green)",
  "var(--brand-blue)",
];

const milestones = [
  {
    year: "2009",
    description: "Founded with a mission to deliver precision engineering.",
    side: "left",
  },
  {
    year: "2013",
    description: "Reached 50 enterprise clients across North America.",
    side: "right",
  },
  {
    year: "2016",
    description: "Expanded globally with offices in London and Singapore.",
    side: "left",
  },
  {
    year: "2019",
    description: "Launched dedicated AI practice and research division.",
    side: "right",
  },
  {
    year: "2022",
    description: "Built talent network of 10,000+ vetted professionals.",
    side: "left",
  },
  { year: "2024", description: "150+ active enterprise engagements worldwide.", side: "right" },
];

const recognitions = [
  { Icon: Award, title: "Top IT Consulting Firm", sub: "Clutch Global — 2023 & 2024" },
  { Icon: BadgeCheck, title: "ISO 27001 Certified", sub: "Information security management" },
  { Icon: Star, title: "Great Place to Work", sub: "Certified, India — 2022–2024" },
  { Icon: Cloud, title: "AWS Select Partner", sub: "Cloud architecture & deployment" },
  { Icon: Rocket, title: "Deloitte Fast 50", sub: "Technology growth company, 2021" },
  { Icon: Landmark, title: "Nasscom Member", sub: "India's premier tech industry body" },
];

const services = [
  {
    title: "AI & machine learning",
    desc: "Production-grade AI systems, LLM integrations, and intelligent automation for enterprise workflows.",
  },
  {
    title: "Product engineering",
    desc: "Full-stack product development — from architecture to deployment — for startups and scale-ups.",
  },
  {
    title: "IT staff augmentation",
    desc: "Vetted engineers embedded in your teams from our Pune talent network.",
  },
  {
    title: "Cloud & infrastructure",
    desc: "AWS, Azure, and GCP architecture, migration, and managed cloud services.",
  },
  {
    title: "SaaS development",
    desc: "Scalable multi-tenant SaaS platforms built for growth-stage businesses.",
  },
  {
    title: "Cybersecurity",
    desc: "Security audits, compliance advisory, and enterprise-grade data protection.",
  },
];

function StatsSection() {
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="By the numbers"
          title="Milestones built through long-term delivery."
          description="15 years of building, shipping, and growing with clients worldwide."
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay ?? "0", 10);
            setTimeout(() => el.classList.add("tl-show"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
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
      const start = window.innerHeight * 0.78;
      const end = window.innerHeight * 0.3;
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
        .tl-container { position: relative; max-width: 680px; margin: 0 auto; --tl-progress: 0; }
        .tl-center-line {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
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
          margin-bottom: 2.5rem;
          position: relative;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .tl-row.tl-left  { justify-content: flex-end;   padding-right: calc(50% + 28px); transform: translateX(-22px); }
        .tl-row.tl-right { justify-content: flex-start; padding-left:  calc(50% + 28px); transform: translateX(22px);  }
        .tl-row.tl-show  { opacity: 1; transform: translateX(0); }
        .tl-dot-wrap {
          position: absolute;
          left: 50%;
          top: 14px;
          transform: translateX(-50%);
          width: 13px; height: 13px;
          border-radius: 50%;
          border: 2px solid var(--tl-accent);
          background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
          transition: border-color 0.3s ease;
        }
        .tl-dot-inner {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--tl-accent);
          transition: background 0.3s ease;
        }
        .tl-card {
          border-color: color-mix(in oklab, var(--tl-accent) 18%, white);
          box-shadow: 0 12px 32px -24px color-mix(in oklab, var(--tl-accent) 40%, transparent);
        }
        .tl-year { color: var(--tl-accent); }
      `}</style>

      <SectionHeader
        eyebrow="Our journey"
        title="Progress marked by outcomes."
        description="13+ years of relentless execution."
        align="center"
      />

      <div ref={timelineRef} className="tl-container mt-14">
        <div className="tl-center-line" />
        {milestones.map((m, i) => (
          <div
            key={m.year}
            ref={(el) => (itemRefs.current[i] = el)}
            data-delay={i * 120}
            className={`tl-row tl-${m.side}`}
            style={{ "--tl-accent": brandAccents[i] } as CSSProperties}
          >
            {m.side === "left" && (
              <div className="tl-card glass-card rounded-2xl px-5 py-4 max-w-[240px]">
                <p className="tl-year text-sm font-semibold mb-1">{m.year}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            )}
            <div className="tl-dot-wrap">
              <div className="tl-dot-inner" />
            </div>
            {m.side === "right" && (
              <div className="tl-card glass-card rounded-2xl px-5 py-4 max-w-[240px]">
                <p className="tl-year text-sm font-semibold mb-1">{m.year}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            )}
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
          eyebrow="Recognition"
          title="Recognitions & certifications."
          description="Industry acknowledgements earned through consistent delivery."
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

function ServicesSection() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="What we're known for."
          description="Core capabilities that have driven every milestone."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="glass-card rounded-2xl p-6">
              {/* <span
                className="block h-1 w-12 rounded-full"
                style={{ background: brandAccents[i] }}
              /> */}
              <p className="mt-5 text-lg font-display font-semibold text-foreground">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
      Recognitions, Milestones & Industry Accomplishments From Our Journey
      Since <strong>2013</strong>
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
      <ServicesSection />

      <CTASection
        title="Building something worth celebrating?"
        description="Talk to us about your next project — AI, product engineering, or IT staffing from Pune."
      />
    </>
  );
}
