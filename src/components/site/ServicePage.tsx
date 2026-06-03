import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  ShieldCheck,
  Award,
  Users2,
  Clock4,
  HeartHandshake,
  LineChart,
} from "lucide-react";
import { useState } from "react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  Testimonial,
  CTASection,
  Stat,
  BrandTitle,
} from "@/components/site/Primitives";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import type { CaseStudy } from "@/lib/case-study";
import {
  accentAt,
  brandIconGradient,
  BRAND,
  testimonialAccentAt,
} from "@/lib/brand-colors";
import { BrandIconBox } from "@/components/site/Primitives";

export type Capability = { title: string; body: string };
export type Step = { step: string; title: string; body: string };
export type Faq = { q: string; a: string };
export type ServicePageProps = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  accent: string;
  heroStats: { value: string; label: string }[];
  intro: { heading: string; paragraphs: string[] };
  capabilities: Capability[];
  process: Step[];
  engagement: { name: string; desc: string; bullets: string[] }[];
  /** Omit to hide; or pass `<CaseStudiesSection />` via extraSection on other page types */
  caseStudies?: CaseStudy[];
  testimonials: React.ComponentProps<typeof Testimonial>[];
  faqs: Faq[];
  cta: { title: string; description: string };
  siblingLinks: { to: string; label: string }[];
  /** Optional one-off section (e.g. timeline) — only pass from routes that need it */
  extraSection?: ReactNode;
};

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.lede}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Start a conversation</PrimaryButton>
          <GhostButton to="/services">Back to all services</GhostButton>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          {p.heroStats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </PageHero>

      {/* Intro narrative */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span
                className="h-1 w-6 rounded-full"
                style={{ background: BRAND.gradientBrand }}
              />
              The practice
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold leading-tight">
              <BrandTitle>{p.intro.heading}</BrandTitle>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
            {p.intro.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {p.extraSection}

      {/* Capabilities */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Capabilities"
            title="The full surface area."
            description="Everything we offer within this practice, delivered by senior practitioners — not handed to juniors after the contract is signed."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <BrandIconBox color={accentAt(i)} size="sm">
                    <Check className="h-4 w-4" />
                  </BrandIconBox>
                  <h3 className="text-base font-display font-semibold">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Methodology"
            title="A repeatable path from idea to outcome."
          />
          <div className="mt-12 relative">
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-border" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {p.process.map((s, i) => (
                <div key={s.step} className="relative">
                  <div
                    className="relative z-10 h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-white"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-display font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Engagement models"
            title="Commercial shapes that fit how you actually work."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {p.engagement.map((m, i) => (
              <div
                key={m.name}
                className="glass-card rounded-3xl p-7 flex flex-col"
              >
                <div
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accentAt(i) }}
                >
                  {m.name}
                </div>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">
                  {m.desc}
                </p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
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

      {p.caseStudies && p.caseStudies.length > 0 && (
        <CaseStudiesSection caseStudies={p.caseStudies} accent={p.accent} />
      )}

      {/* Testimonials */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Voices"
            title="What the people writing the cheques say."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {p.testimonials.map((t, i) => (
              <Testimonial
                key={t.name}
                {...t}
                accent={t.accent ?? testimonialAccentAt(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustSection />

      {/* FAQ */}
      <FaqList faqs={p.faqs} />

      {/* Sibling services */}
      <section className="px-5 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl glass-panel rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Keep exploring
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold">
              We rarely do just one of these.
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Most engagements eventually pull in a sibling practice — talent into AI, AI into product, product into talent.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {p.siblingLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-5 py-3 text-sm font-medium hover:bg-secondary"
              >
                {l.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationSection formSource={`Service page - ${p.eyebrow}`} />
      <CTASection {...p.cta} />
    </>
  );
}

function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="The questions enterprise buyers actually ask."
          align="center"
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-surface overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-semibold text-base sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition-transform"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const pillars = [
    {
      Icon: ShieldCheck,
      title: "Compliance you can audit",
      body: "SOC 2 Type II aligned process, ISO 27001 controls, DPDP-ready data handling, and signed MSAs that don't read like a trap.",
      accent: BRAND.blue,
    },
    {
      Icon: Award,
      title: "Senior by default",
      body: "9 years average experience on every squad. The engineers you meet in the pitch are the engineers who ship — no bait-and-switch.",
      accent: BRAND.orange,
    },
    {
      Icon: Users2,
      title: "Top 3% talent bar",
      body: "Every engineer clears a 4-stage technical bar modelled on FAANG-style hiring. Only ~3% of applicants make our bench.",
      accent: BRAND.green,
    },
    {
      Icon: Clock4,
      title: "Predictable cadence",
      body: "Two-week ship cycles, a Friday demo, and a written changelog. You always know what's done, what's next, and what's at risk.",
      accent: BRAND.red,
    },
    {
      Icon: HeartHandshake,
      title: "Long-term partnership",
      body: "Average client tenure is 3.4 years. We design for year two of a relationship, not the first invoice — and it shows in the work.",
      accent: BRAND.yellow,
    },
    {
      Icon: LineChart,
      title: "Outcomes, measured",
      body: "Every engagement starts with a defined success metric and a shared dashboard. We report on outcomes, not just hours burned.",
      accent: BRAND.blue,
    },
  ];

  const badges = [
    "ISO/IEC 27001",
    "SOC 2 Type II aligned",
    "DPDP compliant",
    "GDPR ready",
    "MSME registered",
    "STPI registered",
  ];

  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span
              className="h-1 w-6 rounded-full"
              style={{ background: BRAND.gradientBrand }}
            />
            Why trust Pure Technology
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Six reasons enterprise teams{" "}
            <span className="text-gradient-brand">renew with us, year after year.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Trust isn't a logo wall — it's the operating rigour you feel from
            the first call. Here's what backs ours.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ Icon, title, body, accent }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300"
            >
              <BrandIconBox color={accent}>
                <Icon className="h-5 w-5" />
              </BrandIconBox>
              <h3 className="mt-4 text-lg font-display font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-panel rounded-2xl px-6 py-5 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center text-xs sm:text-sm font-medium text-foreground/75">
          <span className="uppercase tracking-[0.18em] text-muted-foreground text-[11px]">
            Certifications & registrations
          </span>
          {badges.map((b, i) => (
            <span key={b} className="inline-flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: accentAt(i) }}
              />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
