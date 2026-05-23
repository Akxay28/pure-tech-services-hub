import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  Stat,
  CTASection,
  ClientMarquee,
  BrandIconBox,
} from "@/components/site/Primitives";
import { MeetTheTeam } from "@/components/site/MeetTheTeam";
import {
  accentAt,
  brandIconGradient,
  outcomeCardThemeAt,
  BRAND,
} from "@/lib/brand-colors";
import type { HireCategory } from "@/lib/hire-roles";
 
export type HireRolePageProps = {
  slug: string;
  category: HireCategory;
  eyebrow: string;
  title: ReactNode;
  roleTitle: string;
  lede: string;
  accent: string;
  intro: { heading: string; paragraphs: string[] };
  heroStats: { value: string; label: string }[];
  whoFor: string[];
  capabilities: { title: string; body: string }[];
  skills: string[];
  outcomes: { metric: string; label: string; context: string }[];
  process: { title: string; body: string }[];
  engagement: { name: string; desc: string; bullets: string[] }[];
  whyHire: string[];
  faqs: { q: string; a: string }[];
  relatedHire: { to: string; label: string }[];
  relatedService?: { to: string; label: string };
  /** Optional extra section from an individual route file */
  extraSection?: ReactNode;
};

export function HireRolePage(p: HireRolePageProps) {
  const roleLower = p.roleTitle.toLowerCase();

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            Hire {p.title}{" "}
            <span className="text-gradient-brand">ready for your next sprint.</span>
          </>
        }
        description={p.lede}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Talk to a hiring partner</PrimaryButton>
          {p.relatedService ? (
            <GhostButton to={p.relatedService.to}>
              {p.relatedService.label}
            </GhostButton>
          ) : (
            <GhostButton to="/services/it-staffing">IT Staffing practice</GhostButton>
          )}
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          {p.heroStats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </PageHero>

      {/* <ClientMarquee /> */}

      {/* Intro */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span
                className="h-1 w-6 rounded-full"
                style={{ background: BRAND.gradientBrand }}
              />
              The role
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold leading-tight">
              {p.intro.heading}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
            {p.intro.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>


      {/* Skills */}
      {/* <section className="px-5 lg:px-8 py-16 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Stack"
            title="Tools and frameworks we hire for."
            description={`Senior ${roleLower} on our bench are screened on the skills your team actually uses — not a generic "full stack" label.`}
            />
          <div className="mt-10 flex flex-wrap gap-2.5">
             
          </div>
        </div>
      </section> */}
            {p.extraSection}

      {/* Who it's for */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fit"
            title={`When teams hire ${roleLower} through Pure.`}
          />
          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
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
      </section>

      {/* Capabilities */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What they ship"
            title="Day-one responsibilities we screen for."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
              >
                <BrandIconBox color={accentAt(i)} size="sm">
                  <Check className="h-4 w-4" />
                </BrandIconBox>
                <h3 className="mt-4 text-base font-display font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Proof"
            title="Outcomes from recent placements."
          />
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

      {/* Why Pure */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Pure Technology"
            title={`Why teams hire ${roleLower} here — not on a generic marketplace.`}
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.whyHire.map((item, i) => (
              <div key={item} className="glass-card rounded-2xl p-6">
                <BrandIconBox color={accentAt(i)} size="sm">
                  <Check className="h-4 w-4" />
                </BrandIconBox>
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="How it works" title="From brief to first PR in under two weeks." />
          <div className="mt-12 relative">
            <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-border" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {p.process.map((step, i) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
                >
                  <div
                    className="h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-white"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-display font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Commercial"
            title="Engagement models that fit how you hire."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {p.engagement.map((m, i) => (
              <div key={m.name} className="glass-card rounded-3xl p-7 flex flex-col">
                <div
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accentAt(i) }}
                >
                  {m.name}
                </div>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{m.desc}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: accentAt(i) }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions hiring managers ask us."
            align="center"
          />
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

      {/* Related roles */}
      <section className="px-5 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl glass-panel rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Related roles
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold">
              Building a broader team?
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Most clients hire multiple specialists — add adjacent roles without restarting the process.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {p.relatedHire.map((l) => (
              <Link
                key={l.to}
                to={l.to as never}
                className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-5 py-3 text-sm font-medium transition-all duration-300 hover:text-white hover:border-transparent hover:[background:var(--gradient-brand)]"
              >
                {l.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MeetTheTeam />
      <CTASection
        title={`Ready to hire ${roleLower}?`}
        description="Share your brief — we'll send a calibrated shortlist within five business days. No spam, no junior bait-and-switch."
      />
    </>
  );
}
