import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck, Target } from "lucide-react";
import {
  BrandIconBox,
  BrandTitle,
  CTASection,
  PageHero,
  SectionHeader,
} from "@/components/site/Primitives";
import { accentAt, BRAND } from "@/lib/brand-colors";

export const Route = createFileRoute("/mission-vision")({
  head: () => ({
    meta: [
      { title: "Mission & Vision - Pure Technology" },
      {
        name: "description",
        content:
          "Explore Pure Technology's mission, vision, and principles for building dependable digital products and technology teams.",
      },
      { property: "og:title", content: "Mission & Vision - Pure Technology" },
    ],
  }),
  component: MissionVisionPage,
});

const principles = [
  {
    Icon: ShieldCheck,
    title: "Trust Through Delivery",
    description:
      "We earn long-term relationships through reliable engineering, transparent communication, and accountable outcomes.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation With Purpose",
    description:
      "We apply AI and modern engineering where they solve meaningful business problems, not simply because they are new.",
  },
  {
    Icon: HeartHandshake,
    title: "Partnership Over Transactions",
    description:
      "We work as an extension of client teams, sharing ownership of quality, momentum, and measurable progress.",
  },
];

function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Purpose & Direction"
        title={
          <>
            Building Technology With{" "}
            <span className="text-gradient-brand">Purpose And Perspective.</span>
          </>
        }
        description="Our mission and vision guide the way we build, collaborate, and create measurable outcomes for growing businesses and global enterprises."
      />

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft sm:p-10">
            <div
              className="absolute right-0 top-0 h-40 w-40 rounded-full opacity-15 blur-3xl"
              style={{ background: BRAND.blue }}
            />
            <BrandIconBox color={BRAND.blue} size="lg">
              <Target className="h-6 w-6" />
            </BrandIconBox>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Our Mission
            </div>
            <h2 className="mt-3 text-3xl font-display font-bold tracking-tight">
              <BrandTitle>Turn Ambition Into Reliable Digital Outcomes.</BrandTitle>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              To help organisations build intelligent, scalable, and secure technology solutions
              through experienced teams, practical innovation, and delivery discipline that moves
              real business metrics.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft sm:p-10">
            <div
              className="absolute right-0 top-0 h-40 w-40 rounded-full opacity-15 blur-3xl"
              style={{ background: BRAND.green }}
            />
            <BrandIconBox color={BRAND.green} size="lg">
              <Eye className="h-6 w-6" />
            </BrandIconBox>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Our Vision
            </div>
            <h2 className="mt-3 text-3xl font-display font-bold tracking-tight">
              <BrandTitle>Be A Trusted Global Technology Partner.</BrandTitle>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              To become a globally respected technology partner known for enabling businesses with
              future-ready AI, engineering talent, and product capabilities built from India for the
              world.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted/60 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What Guides Us"
            title="Principles Behind Every Partnership."
            description="A simple operating belief: strong technology becomes valuable only when people trust it and outcomes prove it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ Icon, title, description }, index) => (
              <article key={title} className="glass-card rounded-3xl p-7">
                <BrandIconBox color={accentAt(index)}>
                  <Icon className="h-5 w-5" />
                </BrandIconBox>
                <h3 className="mt-5 text-xl font-display font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-gradient-soft p-8 sm:p-12">
          <div className="max-w-3xl">
            <BrandIconBox color={BRAND.orange}>
              <Compass className="h-5 w-5" />
            </BrandIconBox>
            <h2 className="mt-6 text-3xl font-display font-bold tracking-tight sm:text-4xl">
              <BrandTitle>Where We Are Heading</BrandTitle>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are growing an engineering organisation that combines deep technical capability
              with a human way of working: curious, transparent, responsive, and committed to
              building technology that lasts.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Build The Future With A Team You Can Trust."
        description="Talk to us about the technology, talent, or product outcome your organisation needs next."
        primaryLabel="Start A Conversation"
        primaryTo="/contact"
        secondaryLabel="Explore Our Gallery"
        secondaryTo="/gallery"
      />
    </>
  );
}
