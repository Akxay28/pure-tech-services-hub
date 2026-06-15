import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, type LucideIcon } from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  Stat,
  CTASection,
} from "@/components/site/Primitives";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import type { CaseStudy } from "@/lib/case-study";
import { accentAt, brandIconGradient, outcomeCardThemeAt } from "@/lib/brand-colors";
import { BrandIconBox } from "@/components/site/Primitives";

export type CaseStudiesCopy = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export type SubServicePageProps = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  accent: string;
  Icon: LucideIcon;
  heroStats: { value: string; label: string }[];
  whoFor: string[];
  capabilities: { title: string; body: string }[];
  outcomes: { metric: string; label: string; context: string }[];
  process: { title: string; body: string }[];
  tech?: string[];
  faqs: { q: string; a: string }[];
  siblingLinks: { to: string; label: string }[];
  /** Per-page case study cards — same layout, content from route or getSubServicePageProps() */
  caseStudies?: CaseStudy[];
  caseStudiesCopy?: CaseStudiesCopy;
  showCaseStudies?: boolean;
  /** Optional section — pass from the route for this slug only */
  extraSection?: ReactNode;
};

export function SubServicePage(p: SubServicePageProps) {
  const { Icon } = p;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.lede}>
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Talk to a senior engineer</PrimaryButton>
          <GhostButton to="/services">All services</GhostButton>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          {p.heroStats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </PageHero>

      {/* Who it's for */}
      <section className="px-5 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <BrandIconBox color={p.accent} size="lg" className="shadow-soft">
              <Icon className="h-6 w-6" />
            </BrandIconBox>
            <h2 className="mt-5 text-3xl capitalize lg:text-4xl font-display font-bold leading-tight">
              Built for teams that need this to{" "}
              <span className="text-gradient-brand">just work.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Who this is for
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {p.whoFor.map((w, i) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.extraSection}

      {/* Capabilities */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What we deliver"
            title="A full-stack capability - not a job title."
            description="Every engagement is led by senior practitioners. You meet them in the pitch; they ship the work."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <BrandIconBox color={accentAt(i)} size="sm">
                    <Sparkles className="h-4 w-4" />
                  </BrandIconBox>
                  <h3 className="text-base font-display font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Outcomes that matter" title="Numbers from real engagements." />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {p.outcomes.map((o, i) => {
              const theme = outcomeCardThemeAt(i);
              return (
                <div
                  key={o.label}
                  className="outcome-stat-card group rounded-3xl p-7 border border-border/80"
                  style={{
                    backgroundColor: theme.bg,
                    ["--outcome-accent" as string]: theme.accent,
                  }}
                >
                  <div
                    className="text-4xl sm:text-5xl font-display font-bold tracking-tight transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{ color: theme.accent }}
                  >
                    {o.metric}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{o.label}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.context}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {p.showCaseStudies && p.caseStudies && p.caseStudies.length > 0 && (
        <CaseStudiesSection
          caseStudies={p.caseStudies.slice(0, 3)}
          accent={p.accent}
          eyebrow={p.caseStudiesCopy?.eyebrow ?? "Related case studies"}
          title={p.caseStudiesCopy?.title ?? "Proof from similar work."}
          description={
            p.caseStudiesCopy?.description ??
            "A few relevant engagements that match this service area."
          }
        />
      )}

      {/* Process */}
      {/* <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="How we work" title="A repeatable path, every time." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.process.map((s, i) => (
              <div key={s.title} className="relative">
                <div
                  className="h-9 w-9 rounded-full grid place-items-center text-sm font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}, color-mix(in oklab, ${p.accent} 55%, white))`,
                  }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Tech */}
      {/* {p.tech && p.tech.length > 0 && (
        <section className="px-5 lg:px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Stack" title="Tools we reach for first." />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium"
                  style={{ color: p.accent }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* FAQs */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="The questions we hear most." align="center" />
          <div className="mt-10 space-y-3">
            {p.faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-surface p-5 open:shadow-soft"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold">
                  {f.q}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white text-sm transition-transform group-open:rotate-45"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling links */}
      <section className="px-5 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl bg-surface-muted/60 border-y border-border shadow-soft rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Related services
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold">
              Most engagements span more than one practice.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {p.siblingLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to as never}
                className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-5 py-3 text-sm font-medium transition-all duration-700 hover:text-white hover:border-transparent hover:[background:var(--gradient-brand)]"
              >
                {l.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationSection formSource={`Service page - ${p.eyebrow}`} />

      <CTASection
        title="Ready to scope this in detail?"
        description="A 30-minute call with a senior engineer. No sales theatre — just a real assessment of fit, scope, and timeline."
      />
    </>
  );
}
