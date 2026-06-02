// Replace your existing CaseStudyCard function in Primitives.tsx with this:

import { CaseStudy } from "@/lib/case-study";
import { useRouter } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CaseStudyCard({
  client,
  industry,
  challenge,
  outcome,
  metrics,
  accent = "var(--brand-blue)",
  image,
  ...rest
}: CaseStudy) {
  const router = useRouter();

  const slug = client
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const study = { client, industry, challenge, outcome, metrics, accent, image, ...rest };

  function handleExplore() {
    window.history.pushState(study, "", "");
    router.navigate({
      to: "/case-studies/$slug",
      params: { slug },
    });
  }
  

  return (
    <article
      className="group relative overflow-hidden rounded-[28px] glass-card border border-white/10 transition-all duration-500 hover:-translate-y-1"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      {/* Static glow */}
      <div
        className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: accent }}
      />

      {/* Mouse follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            600px circle at var(--x) var(--y),
            color-mix(in oklab, ${accent} 20%, transparent),
            transparent 40%
          )`,
        }}
      />

      {/* Image */}
      {image && (
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={image}
            alt={client}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {industry}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Case study
          </span>
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
        </div>

        <h3 className="mt-2.5 text-xl font-display capitalize font-bold">{client}</h3>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
          <p>
            <span className="font-semibold text-foreground">Challenge — </span>
            {challenge}
          </p>
          <p>
            <span className="font-semibold text-foreground">What we did — </span>
            {outcome}
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center backdrop-blur-md"
            >
              <div className="text-lg font-display font-bold" style={{ color: accent }}>
                {m.value}
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleExplore}
            className="group flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-2.5 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-surface hover:text-foreground"
          >
            Explore case study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
