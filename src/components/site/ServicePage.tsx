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
  CaseStudyCard,
  Testimonial,
  CTASection,
  Stat,
} from "@/components/site/Primitives";

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
  caseStudies: React.ComponentProps<typeof CaseStudyCard>[];
  testimonials: React.ComponentProps<typeof Testimonial>[];
  faqs: Faq[];
  cta: { title: string; description: string };
  siblingLinks: { to: string; label: string }[];
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
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span
                className="h-1 w-6 rounded-full"
                style={{ background: p.accent }}
              />
              The practice
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

      {/* Capabilities */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Capabilities"
            title="The full surface area."
            description="Everything we offer within this practice, delivered by senior practitioners — not handed to juniors after the contract is signed."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg text-white"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, color-mix(in oklab, ${p.accent} 55%, white))`,
                    }}
                  >
                    <Check className="h-4 w-4" />
                  </span>
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
                  <div className="relative z-10 h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, color-mix(in oklab, ${p.accent} 55%, white))`,
                    }}
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
            {p.engagement.map((m) => (
              <div
                key={m.name}
                className="glass-card rounded-3xl p-7 flex flex-col"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: p.accent }}>
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
                        style={{ background: p.accent }}
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

      {/* Case studies */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Case studies"
            title="Recent work, anonymised where it has to be."
            description="Numbers are real, names are sometimes changed at the client's request."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {p.caseStudies.map((c) => (
              <CaseStudyCard key={c.client} {...c} accent={c.accent ?? p.accent} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Voices"
            title="What the people writing the cheques say."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {p.testimonials.map((t) => (
              <Testimonial key={t.name} {...t} accent={t.accent ?? p.accent} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqList faqs={p.faqs} accent={p.accent} />

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

      <CTASection {...p.cta} />
    </>
  );
}

function FaqList({ faqs, accent }: { faqs: Faq[]; accent: string }) {
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
                    style={{
                      background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 55%, white))`,
                    }}
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
