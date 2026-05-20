import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe2,
  Clock4,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  Stat,
  ClientMarquee,
  Testimonial,
  CTASection,
  SectionHeader,
  CaseStudyCard,
} from "@/components/site/Primitives";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";

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
        content:
          "AI solutions, IT staffing, and product engineering for ambitious enterprises.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Headquartered in Bengaluru · Serving 14 countries"
        title={
          <>
            Engineering the next chapter of your business{" "}
            <span className="text-gradient-brand">with India's finest minds.</span>
          </>
        }
        description="Pure Technology partners with enterprise and growth-stage teams to deliver production-grade AI, vetted engineering talent, and full-stack product squads — under one roof, with one accountable team."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Start a project</PrimaryButton>
          <GhostButton to="/services">See what we build</GhostButton>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          <Stat value="180+" label="Engineers on staff" />
          <Stat value="60+" label="Enterprise clients" />
          <Stat value="14" label="Countries delivered to" />
          <Stat value="9 yrs" label="Avg. senior tenure" />
        </div>
      </PageHero>

      <ClientMarquee />

      <ServicesShowcase />

      {/* Why Pure */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why teams pick Pure"
            title="A delivery model built for enterprise trust, startup velocity."
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
                <h3 className="mt-4 text-lg font-display font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How we engage"
            title="Predictable on the outside. Crafted on the inside."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Discover",
                body: "A 45-minute working session to understand goals, constraints, and what success looks like. No deck-ware.",
              },
              {
                step: "02",
                title: "Shape",
                body: "A 5–10 day shaping sprint: lightweight architecture, team shape, milestones, and a fixed-price option where it fits.",
              },
              {
                step: "03",
                title: "Build",
                body: "A senior-led squad ships in 2-week cycles with demos, written changelogs, and a shared dashboard.",
              },
              {
                step: "04",
                title: "Sustain",
                body: "On-call rotations, SLA-backed support, and a quarterly business review focused on outcomes, not hours.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-border bg-surface p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Step {s.step}
                </div>
                <div className="mt-3 text-xl font-display font-semibold">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
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
            title="The kind of feedback that gets us out of bed."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            <Testimonial
              quote="Pure felt like an extension of our own engineering team from week one. They challenged our assumptions and shipped what mattered."
              name="Aarushi Mehta"
              role="VP Engineering"
              company="FinEdge Capital"
              initials="AM"
              accent="var(--brand-blue)"
            />
            <Testimonial
              quote="The talent quality is just on a different level. Three of the engineers Pure placed with us became tech leads within a year."
              name="Rohan Iyer"
              role="Director of Talent"
              company="Northwind SaaS"
              initials="RI"
              accent="var(--brand-orange)"
            />
            <Testimonial
              quote="They took our messy LLM prototype and turned it into a compliant, observable product our enterprise customers actually trust."
              name="Sneha Krishnan"
              role="Chief Product Officer"
              company="Lumenpath Health"
              initials="SK"
              accent="var(--brand-green)"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build something your customers brag about."
        description="Tell us where you are, where you'd like to be, and the constraints in between. We'll come back in 48 hours with a concrete plan."
      />
    </>
  );
}
