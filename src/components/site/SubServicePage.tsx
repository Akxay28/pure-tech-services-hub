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
import {
  TechnologyExpertiseSection,
  type TechTab,
} from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

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
  contentSections?: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  }[];
  outcomes: { metric: string; label: string; context: string }[];
  outcomesIntro?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    stats?: { value: string; label: string }[];
  };
  process: { title: string; body: string }[];
  tech?: string[];
  techExpertise?: TechTab[];
  faqs: { q: string; a: string }[];
  siblingLinks: { to: string; label: string }[];
  /** Per-page case study cards — same layout, content from route or getSubServicePageProps() */
  caseStudies?: CaseStudy[];
  caseStudiesCopy?: CaseStudiesCopy;
  showCaseStudies?: boolean;
  /** Optional section — pass from the route for this slug only */
  extraSection?: any;
  extraSectionImage?: string;
  whoForTitle?: ReactNode;
  whoForSub?: string;
  processTitle?: string;
  processDescription?: string;
  techHeading?: ReactNode;
  techSubheading?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryTo?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryTo?: string;
  outcomesTitle?: string;
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
        <div className="mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {p.heroStats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </PageHero>

      {p.extraSection}

      {/* Outcomes */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          {p.outcomesIntro ? (
            <div className="grid lg:grid-cols-12 gap-10 mb-12 items-center">
              <div className="lg:col-span-7">
                <span className="px-3.5 py-1 text-xs font-semibold rounded-full uppercase border border-primary/20 bg-primary/5 text-primary">
                  {p.outcomesIntro.eyebrow || "Outcomes that matter"}
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold leading-tight">
                  {p.outcomesIntro.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {p.outcomesIntro.description}
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {p.outcomesIntro.stats?.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-surface-muted/40 p-5 text-center shadow-soft">
                    <div className="text-3xl font-display font-bold text-rose-500">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium leading-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <SectionHeader eyebrow="Outcomes that matter" title={p.outcomesTitle || "Numbers from real engagements."} />
          )}
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

      {/* Who it's for */}
      <section className="px-5 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <BrandIconBox color={p.accent} size="lg" className="shadow-soft">
              <Icon className="h-6 w-6" />
            </BrandIconBox>
            <h2 className="mt-5 text-3xl capitalize lg:text-4xl font-display font-bold leading-tight">
              {p.whoForTitle || (
                <>
                  Built for teams that need this to{" "}
                  <span className="text-gradient-brand">just work.</span>
                </>
              )}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {p.whoForSub || "Who this is for"}
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

      {p.contentSections?.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={sectionIndex % 2 === 0 ? "px-5 lg:px-8 py-20" : "px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border"}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ background: brandIconGradient(accentAt(index)) }}
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Capabilities */}
      {!p.contentSections && (
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
      )}


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
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader 
            eyebrow="How we work" 
            title={p.processTitle || "A repeatable path, every time."} 
            description={p.processDescription}
          />
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
      </section>

      {/* Technology expertise */}
      {p.techExpertise ? (
        <TechnologyExpertiseSection
          accent={p.accent}
          heading={p.techHeading || <>Industrial technology your operation can <span className="text-gradient-brand">rely on.</span></>}
          subheading={p.techSubheading || "We combine industrial data, connected workflows, and secure integrations to make this solution practical for real plant operations."}
          tabs={p.techExpertise}
        />
      ) : p.tech && p.tech.length > 0 ? (
        <section className="px-5 lg:px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeader 
              eyebrow={p.techHeading ? "Locations" : "Stack"} 
              title={p.techHeading || "Tools we reach for first."} 
              description={p.techSubheading}
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium" style={{ color: p.accent }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
        title={p.ctaTitle || "Ready to scope this in detail?"}
        description={p.ctaDescription || "A 30-minute call with a senior engineer. No sales theatre — just a real assessment of fit, scope, and timeline."}
        primaryLabel={p.ctaPrimaryLabel}
        primaryTo={p.ctaPrimaryTo}
        secondaryLabel={p.ctaSecondaryLabel}
        secondaryTo={p.ctaSecondaryTo}
      />
    </>
  );
}
