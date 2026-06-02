import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Coffee,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import {
  BrandIconBox,
  CTASection,
  PageHero,
  SectionHeader,
} from "@/components/site/Primitives";
import { accentAt, BRAND } from "@/lib/brand-colors";

export const Route = createFileRoute("/careers/life-at-pure-technology")({
  head: () => ({
    meta: [
      { title: "Life at Pure Technology — Culture & Work Environment" },
      {
        name: "description",
        content:
          "Culture, perks, and work environment at Pure Technology — collaborative teams, growth-minded leadership, and a Pune HQ built for focused engineering.",
      },
      { property: "og:title", content: "Life at Pure Technology" },
    ],
  }),
  component: LifeAtPureTechnologyPage,
});

const cultureHighlights = [
  {
    Icon: Users,
    title: "Teams That Ship Together",
    body: "Engineers, AI specialists, and delivery leads work in small squads with clear ownership — fewer handoffs, more momentum on client work.",
  },
  {
    Icon: Lightbulb,
    title: "Learn By Building",
    body: "Real client projects across AI, product engineering, and staffing — exposure that compounds faster than tutorial-only roles.",
  },
  {
    Icon: MessagesSquare,
    title: "Open Communication",
    body: "Ideas travel up as easily as priorities travel down. Leadership is accessible, feedback is direct, and decisions are explained.",
  },
  {
    Icon: HeartHandshake,
    title: "Respect For Your Time",
    body: "We plan sprints realistically, protect focus blocks, and avoid performative late nights — sustainable pace beats burnout culture.",
  },
];

const environmentPerks = [
  {
    Icon: Coffee,
    title: "Collaborative Workspace",
    body: "Our Pune office is set up for pairing, reviews, and team rituals — with quiet zones when you need deep focus.",
  },
  {
    Icon: Sparkles,
    title: "Events & Milestones",
    body: "Team celebrations, learning sessions, and milestone shout-outs — we mark wins together, not just in slide decks.",
  },
  {
    Icon: Zap,
    title: "Modern Tooling",
    body: "Current stacks, AI-assisted workflows where they help, and tooling chosen to reduce friction — not bureaucracy.",
  },
];

function LifeAtPureTechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Life at Pure Technology"
        title={
          <>
            Culture, Perks, And A{" "}
            <span className="text-gradient-brand">Work Environment You Can Grow In.</span>
          </>
        }
        description="We're building a company where skilled people do meaningful work — with teams that collaborate honestly, leaders who listen, and an environment designed for long-term careers."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition-opacity hover:opacity-90"
          >
            View Open Roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/careers/benefits-perks"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Benefits & Perks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our culture"
            title="How It Feels To Work Here."
            description="Pure Technology is a delivery-focused IT company — but the day-to-day is shaped by people, trust, and shared standards for quality."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {cultureHighlights.map(({ Icon, title, body }, index) => (
              <article key={title} className="glass-card rounded-3xl p-7">
                <BrandIconBox color={accentAt(index)}>
                  <Icon className="h-5 w-5" />
                </BrandIconBox>
                <h3 className="mt-5 text-xl font-display font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted/60 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Work environment"
            title="Built For Focused, Collaborative Delivery."
            description="Whether you're in Pune or contributing remotely, we keep the environment practical — space to think, people to learn from, and clarity on what matters."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {environmentPerks.map(({ Icon, title, body }, index) => (
              <article key={title} className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
                <BrandIconBox color={accentAt(index + 2)}>
                  <Icon className="h-5 w-5" />
                </BrandIconBox>
                <h3 className="mt-5 text-lg font-display font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-gradient-soft p-8 sm:p-12">
          <BrandIconBox color={BRAND.pink}>
            <HeartHandshake className="h-5 w-5" />
          </BrandIconBox>
          <h2 className="mt-6 text-2xl font-display font-bold tracking-tight sm:text-3xl">
            Growing careers, not just filling seats.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We invest in people who want to deepen their craft — through mentorship, client
            exposure, and a culture that rewards ownership. Explore our gallery for team moments,
            or see open roles when you are ready to apply.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Company Gallery
            </Link>
            <Link
              to="/mission-vision"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Mission & Vision
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Join The Team?"
        description="See current openings or reach out if your profile is a strong fit for upcoming roles."
        primaryLabel="Open Roles"
        primaryTo="/careers"
        secondaryLabel="Benefits & Perks"
        secondaryTo="/careers/benefits-perks"
      />
    </>
  );
}
