import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 7500; // milliseconds

type StatCard = { value: string; label: string; color: string };

type Slide = {
  id: number;
  eyebrow: string;
  eyebrowStyle: string;
  title: React.ReactNode;
  description: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  stats: StatCard[];
  topRightCard: StatCard;
  leftCard: StatCard;
  bottomRightCard: StatCard;
  image?: string;
  imageAlt?: string;
  demoVideo?: string;
  demoDevice?: "tablet";
  bg: string;
  accent: string;
  dotColor: string;
  progressColor: string;
};

const slides: Slide[] = [
  {
    id: 0,
    eyebrow: "AI-Powered. People-Driven.",
    eyebrowStyle: "bg-blue-50 border-blue-200 text-blue-700",
    title: (
      <>
        AI Product Development &amp;{" "}
        <span className="text-gradient-brand">IT Staffing Services in India.</span>
      </>
    ),
    description:
      "Engineering the next chapter of your business with India's finest minds. Pure Technology partners with enterprise and growth-stage teams to deliver production-grade AI, vetted engineering talent, and full-stack product squads — under one roof, with one accountable team.",
    primaryCta: { label: "Start Project", to: "/contact" },
    secondaryCta: { label: "See What We Build", to: "/services" },
    stats: [
      { value: "13+", label: "Years of experience", color: "text-blue-600" },
      { value: "80+", label: "Happy clients", color: "text-orange-500" },
      { value: "18+", label: "Countries delivered", color: "text-green-600" },
    ],
    topRightCard: { value: "80+", label: "Happy clients", color: "text-orange-500" },
    leftCard: { value: "20+", label: "Projects delivered", color: "text-violet-500" },
    bottomRightCard: { value: "13+", label: "Years of experience", color: "text-blue-600" },
    demoVideo: "hero/smartphone-ui-carousel.mp4",
    bg: "from-violet-50/60 via-white to-blue-50/40",
    accent: "bg-gray-900 hover:bg-gray-700",
    dotColor: "bg-gray-900",
    progressColor: "bg-gray-900",
  },
  {
    id: 1,
    eyebrow: "AI AGENTS. AUTOMATION. SCALE.",
    eyebrowStyle: "bg-orange-50 border-orange-200 text-orange-700",
    title: (
      <>
        Transform Operations With AI Systems Built For Business.{" "}
        <span className="text-gradient-brand">Powered By India's Finest Minds.</span>
      </>
    ),
    description:
      "Pure Technology designs and deploys intelligent AI solutions that automate workflows, streamline decision-making, and help modern businesses scale faster with confidence.",
    primaryCta: { label: "Hire Engineers", to: "/services/it-staffing" },
    secondaryCta: { label: "View Profiles", to: "/contact" },
    stats: [
      { value: "40+", label: "AI workflows automated", color: "text-orange-500" },
      { value: "15+", label: "Dedicated AI engineers", color: "text-amber-500" },
      { value: "100%", label: "Reliable deployment support", color: "text-orange-600" },
    ],
    topRightCard: { value: "40+", label: "AI workflows automated", color: "text-orange-500" },
    leftCard: { value: "15+", label: "Dedicated AI engineers", color: "text-violet-500" },
    bottomRightCard: {
      value: "100%",
      label: "Reliable deployment support",
      color: "text-blue-600",
    },
    // topRightCard:    { value: "150+",   label: "Engineers placed",      color: "text-orange-500" },
    // leftCard:        { value: "30 days", label: "Replacement guarantee", color: "text-amber-500"  },
    // bottomRightCard: { value: "Top 3%", label: "Vetted talent pool",     color: "text-orange-600" },
    image: "hero/slide-2.jpg",
    imageAlt: "Indian professional woman confident pose",
    // bg: "from-orange-50/50 via-white to-amber-50/30",
    // accent: "bg-orange-600 hover:bg-orange-700",
    // dotColor: "bg-orange-500",
    // progressColor: "bg-orange-500",
    demoVideo: "hero/tablet-ui-carousel.mp4",
    demoDevice: "tablet",
    bg: "from-violet-50/60 via-white to-blue-50/40",
    accent: "bg-gray-900 hover:bg-gray-700",
    dotColor: "bg-gray-900",
    progressColor: "bg-gray-900",
  },
  {
    id: 2,
    eyebrow: "DEDICATED TEAMS. ENTERPRISE DELIVERY.",
    eyebrowStyle: "bg-green-50 border-green-200 text-green-700",
    title: (
      <>
        Your Extended Technology Team For{" "}
        <span className="text-gradient-brand">Building Faster & Scaling Smarter.</span>
      </>
    ),
    description:
      "From product strategy to engineering execution, Pure Technology provides dedicated developers, designers, and AI specialists who work as a seamless extension of your in-house team.",
    primaryCta: { label: "Start Building", to: "/services/product-engineering" },
    secondaryCta: { label: "See Case Studies", to: "/case-studies" },
    stats: [
      { value: "25+", label: "Worldwide Partners", color: "text-green-600" },
      { value: "100K+", label: "Hours of development delivered", color: "text-teal-600" },
      { value: "24/7", label: "Collaboration & support", color: "text-green-700" },
    ],
    topRightCard: { value: "25+", label: "Worldwide Partners", color: "text-orange-600" },
    leftCard: { value: "100K+", label: "Hours of development delivered", color: "text-violet-600" },
    bottomRightCard: { value: "24/7", label: "Collaboration & support", color: "text-blue-700" },
    // image: "hero/slide-1.jpg",
    // topRightCard:    { value: "40+",   label: "Products shipped", color: "text-green-600" },
    // leftCard:        { value: "2 wks", label: "First demo cycle", color: "text-teal-600"  },
    // bottomRightCard: { value: "SOC 2", label: "Aligned delivery", color: "text-green-700" },
    image: "hero/slide-3.jpg",
    imageAlt: "Indian professional woman at work",
    // bg: "from-green-50/50 via-white to-teal-50/30",
    // accent: "bg-green-700 hover:bg-green-800",
    // dotColor: "bg-green-600",
    // progressColor: "bg-green-600",
    bg: "from-violet-50/60 via-white to-blue-50/40",
    accent: "bg-gray-900 hover:bg-gray-700",
    dotColor: "bg-gray-900",
    progressColor: "bg-gray-900",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const [imgVisible, setImgVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = useCallback(() => {
    setProgress(0);
    if (progRef.current) clearInterval(progRef.current);
    const step = 100 / (SLIDE_DURATION / 50);
    progRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
  }, []);
  const currentRef = useRef(0);
  const transitioningRef = useRef(false);

  const goTo = useCallback(
    (next: number) => {
      if (transitioningRef.current || next === currentRef.current) return;

      transitioningRef.current = true;
      setTransitioning(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      if (progRef.current) clearInterval(progRef.current);

      setTextVisible(false);
      setImgVisible(false);

      setTimeout(() => {
        setCurrent(next);
        currentRef.current = next; // keep ref in sync

        setTimeout(() => {
          setTextVisible(true);
          setImgVisible(true);
          transitioningRef.current = false; // keep ref in sync
          setTransitioning(false);
          startProgress();

          timerRef.current = setTimeout(() => {
            goTo((next + 1) % slides.length);
          }, SLIDE_DURATION);
        }, 60);
      }, 380);
    },
    [startProgress], // ← no longer depends on `current` or `transitioning`
  );

  useEffect(() => {
    startProgress();
    timerRef.current = setTimeout(() => {
      goTo(1);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progRef.current) clearInterval(progRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = slides[current];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden transition-colors duration-700 bg-gradient-to-br",
        slide.bg,
      )}
    >
      {/* Full-width ambient background — avoids a seam at the column split */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 55% 70% at 72% 45%, rgba(167,139,250,0.22) 0%, transparent 55%)",
              "radial-gradient(ellipse 40% 50% at 88% 12%, rgba(251,191,36,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse 45% 55% at 80% 88%, rgba(134,239,172,0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse 50% 60% at 35% 60%, rgba(196,181,253,0.12) 0%, transparent 55%)",
              "radial-gradient(ellipse 40% 45% at 12% 20%, rgba(191,219,254,0.14) 0%, transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Concentric rings — anchored to the image side, not a separate column */}
        <svg
          className="absolute bottom-0 right-[-4%] h-full w-[min(58%,640px)]"
          viewBox="0 0 520 540"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          {[90, 160, 230, 300, 370, 440, 510, 580].map((r) => (
            <circle
              key={r}
              cx="260"
              cy="580"
              r={r}
              stroke="rgba(139,92,246,0.09)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[520px] items-center gap-0">
          {/* Left — text */}
          <div className="py-16 lg:py-20 pr-0 lg:pr-12">
            <div
              className={cn(
                "transition-all duration-500",
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
              )}
            >
              <span
                className={cn(
                  "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full border mb-6",
                  slide.eyebrowStyle,
                  // "bg-blue-50 border-blue-200 text-blue-700"
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                {slide.eyebrow}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-bold leading-[1.1] tracking-tight text-foreground">
                {slide.title}
              </h1>

              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to={slide.primaryCta.to}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all",
                    slide.accent,
                  )}
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={slide.secondaryCta.to}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-surface transition-all"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>

              {/* <div className="mt-10 flex flex-wrap gap-4">
                {slide.stats.map((s) => (
                  <div key={s.label} className="glass-card rounded-2xl px-5 py-3">
                    <div className={cn("text-xl font-bold leading-none", s.color)}>
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Right — image */}
          <div
            className={cn("relative hidden h-full min-h-[520px] items-end justify-center lg:flex")}
          >
            {/* Image + floating cards — animate together on slide change */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500",
                imgVisible
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-105 translate-x-8",
              )}
            >
              {slide.demoVideo ? (
                slide.demoDevice === "tablet" ? (
                  <TabletVideoShowcase
                    src={slide.demoVideo}
                    topRightCard={slide.topRightCard}
                    leftCard={slide.leftCard}
                    bottomRightCard={slide.bottomRightCard}
                  />
                ) : (
                  <HeroVideoShowcase
                    src={slide.demoVideo}
                    topRightCard={slide.topRightCard}
                    leftCard={slide.leftCard}
                    bottomRightCard={slide.bottomRightCard}
                  />
                )
              ) : (
                <img
                  key={slide.id}
                  src={slide.image ?? ""}
                  alt={slide.imageAlt ?? ""}
                  className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 object-contain object-bottom"
                />
              )}

              {/* Card — top right */}
              <div
                className={cn(
                  "absolute top-35 right-10 rounded-2xl px-10 py-3.5 border border-white/30",
                  slide.demoVideo && "hidden",
                )}
                style={{ background: "rgba(255,255,255,0.45)" }}
              >
                <div
                  className={cn("text-[1.6rem] font-bold leading-none", slide.topRightCard.color)}
                >
                  {slide.topRightCard.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{slide.topRightCard.label}</div>
              </div>

              {/* Card — left middle */}
              <div
                className={cn(
                  "absolute top-[42%] left-2 rounded-2xl px-5 py-3.5 backdrop-blur-md border border-white/30",
                  slide.demoVideo && "hidden",
                )}
                style={{ background: "rgba(255,255,255,0.45)" }}
              >
                <div className={cn("text-[1.6rem] font-bold leading-none", slide.leftCard.color)}>
                  {slide.leftCard.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{slide.leftCard.label}</div>
              </div>

              {/* Card — bottom right */}
              <div
                className={cn(
                  "absolute bottom-14 right-8 rounded-2xl px-5 py-3.5 backdrop-blur-md border border-white/30",
                  slide.demoVideo && "hidden",
                )}
                style={{ background: "rgba(255,255,255,0.45)" }}
              >
                <div
                  className={cn(
                    "text-[1.6rem] font-bold leading-none",
                    slide.bottomRightCard.color,
                  )}
                >
                  {slide.bottomRightCard.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {slide.bottomRightCard.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 z-20 h-[3px] bg-border w-full">
        <div
          className={cn("h-full transition-none", slide.progressColor)}
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(to right, var(--brand-blue), var(--brand-orange), var(--brand-green))",
          }}
          //   style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dots + arrows */}
      <div className="absolute bottom-6 left-5 z-20 lg:left-8 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current
                ? cn("w-6", slide.dotColor)
                : "w-2 bg-foreground/20 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-5 z-20 lg:right-8 flex items-center gap-2">
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="h-9 w-9 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-surface transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          aria-label="Next slide"
          className="h-9 w-9 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-surface transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function TabletVideoShowcase({
  src,
  topRightCard,
  leftCard,
  bottomRightCard,
}: {
  src: string;
  topRightCard: StatCard;
  leftCard: StatCard;
  bottomRightCard: StatCard;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-visible pb-8 pt-8">
      <FloatingMetric card={topRightCard} className="right-2 top-24 px-8 py-4" />
      <FloatingMetric card={leftCard} className="left-0 top-[40%] px-6 py-3.5" />
      <FloatingMetric card={bottomRightCard} className="bottom-20 right-10 px-6 py-3.5" />

      <div className="relative w-[600px] -translate-y-2 rotate-[2deg]">
        <div className="absolute inset-x-8 bottom-[-34px] h-14 rounded-full bg-slate-900/16 blur-2xl" />

        <div className="relative rounded-[2.4rem] border border-white/60 bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-800 p-[9px] shadow-[0_34px_88px_rgba(15,23,42,0.3)] ring-1 ring-black/10">
          <div className="rounded-[1.95rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-4">
            <div className="relative aspect-video overflow-hidden rounded-[1.35rem] bg-black">
              <video
                src={src}
                aria-label="Pure Technology showcase video playing on tablet"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover object-center saturate-125 contrast-110"
              />
              <div className="pointer-events-none absolute bottom-[1.1rem] right-[1rem] z-10 flex h-11 w-24 items-center justify-center rounded-xl bg-white/92 px-2.5 shadow-[0_10px_22px_rgba(2,6,23,0.3)] ring-1 ring-white/75 backdrop-blur-sm">
                <img
                  src="/logos/pure-logo-black-text-transparent.png"
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.16)]"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/25" />
              <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-white/15" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_28%,transparent_66%,rgba(255,255,255,0.08))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVideoShowcase({
  src,
  topRightCard,
  leftCard,
  bottomRightCard,
}: {
  src: string;
  topRightCard: StatCard;
  leftCard: StatCard;
  bottomRightCard: StatCard;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-visible pb-2 pt-8">
      <FloatingMetric card={topRightCard} className="right-0 top-20 px-9 py-4" />
      <FloatingMetric card={leftCard} className="left-0 top-[36%] px-6 py-3.5" />
      <FloatingMetric card={bottomRightCard} className="bottom-24 right-6 px-6 py-3.5" />
      <div className="relative w-[620px] -translate-y-6 rotate-[-2deg]">
        <div className="absolute inset-x-10 bottom-[-58px] h-20 rounded-full bg-slate-900/14 blur-2xl" />

        <div className="relative rounded-[1.65rem] border border-white/55 bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-700 p-[8px] shadow-[0_32px_90px_rgba(15,23,42,0.3)] ring-1 ring-black/10">
          <div className="rounded-[1.3rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-3">
            <div className="relative aspect-video overflow-hidden rounded-[0.9rem] bg-black">
              <video
                src={src}
                aria-label="Pure Technology showcase video playing on desktop monitor"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full scale-[1.08] object-cover object-center saturate-125 contrast-110"
              />
              <div className="pointer-events-none absolute bottom-[1.45rem] right-[1rem] z-10 flex h-12 w-28 items-center justify-center rounded-2xl bg-white/92 px-3 shadow-[0_10px_24px_rgba(2,6,23,0.32)] ring-1 ring-white/75 backdrop-blur-sm">
                <img
                  src="/logos/pure-logo-black-text-transparent.png"
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.16)]"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/25" />
              <div className="pointer-events-none absolute inset-0 rounded-[0.9rem] ring-1 ring-white/15" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.16),transparent_30%,transparent_68%,rgba(255,255,255,0.07))]" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-16 w-24 bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-300 shadow-[0_18px_34px_rgba(15,23,42,0.18)]" />
        <div className="relative mx-auto h-4 w-60 rounded-[999px] bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-500 shadow-[0_16px_36px_rgba(15,23,42,0.2)]" />
      </div>
    </div>
  );
}

function FloatingMetric({ card, className }: { card: StatCard; className: string }) {
  return (
    <div
      className={cn(
        "absolute z-10 rounded-3xl border border-white/45 bg-white/50 shadow-[0_18px_42px_rgba(15,23,42,0.1)] backdrop-blur-xl",
        className,
      )}
    >
      <div className={cn("text-[1.55rem] font-bold leading-none", card.color)}>{card.value}</div>
      <div className="mt-1 text-xs text-slate-600">{card.label}</div>
    </div>
  );
}
