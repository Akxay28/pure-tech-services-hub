import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  Stat,
  Testimonial,
  CTASection,
} from "@/components/site/Primitives";
import { Compass, Heart, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pure Technology | India-rooted engineering partner" },
      {
        name: "description",
        content:
          "Pure Technology is a Bengaluru-headquartered engineering partner — building AI, staffing teams, and shipping products with senior Indian talent.",
      },
      { property: "og:title", content: "About — Pure Technology" },
      {
        property: "og:description",
        content:
          "Our story, our values, and the team behind Pure Technology.",
      },
    ],
  }),
  component: About,
});

const team = [
  { name: "Karthik Raman", role: "Co-founder & CEO", initials: "KR", accent: "var(--brand-blue)" },
  { name: "Sneha Iyer", role: "Co-founder & COO", initials: "SI", accent: "var(--brand-orange)" },
  { name: "Aditya Nair", role: "Head of AI Practice", initials: "AN", accent: "var(--brand-green)" },
  { name: "Devika Menon", role: "Head of Talent", initials: "DM", accent: "var(--brand-red)" },
  { name: "Pranav Joshi", role: "Head of Product Engineering", initials: "PJ", accent: "var(--brand-blue)" },
  { name: "Rhea D'Souza", role: "Head of Delivery", initials: "RD", accent: "var(--brand-orange)" },
];

const values = [
  {
    Icon: Sparkles,
    title: "Craft first.",
    body: "We'd rather ship one thing carefully than ten things sloppily. Engineering is a craft, and it deserves the time it takes to do well.",
    accent: "var(--brand-blue)",
  },
  {
    Icon: Heart,
    title: "Long memory.",
    body: "Our average client tenure is 3.4 years. We design for the second year of a relationship, not the first invoice.",
    accent: "var(--brand-red)",
  },
  {
    Icon: Compass,
    title: "Owner's mindset.",
    body: "We make decisions the way you would if you were footing the bill. That's the test, and we apply it every day.",
    accent: "var(--brand-orange)",
  },
  {
    Icon: Users,
    title: "Humans over headcount.",
    body: "We hire people, not resources. We grow them, name them in case studies, and never trade their wellbeing for a deadline.",
    accent: "var(--brand-green)",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Pure Technology"
        title={
          <>
            Indian engineering at its best —{" "}
            <span className="text-gradient-brand">in the hands of senior humans who care.</span>
          </>
        }
        description="Pure Technology was founded in Bengaluru in 2017 by a group of engineers who wanted to build a different kind of services company — one that felt like a small team, even at scale."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/services">See what we do</PrimaryButton>
          <GhostButton to="/contact">Meet the team</GhostButton>
        </div>
      </PageHero>

      {/* Story */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-6 rounded-full bg-gradient-brand" />
              Our story
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold leading-tight">
              We started Pure to fix the things we kept seeing break.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
            <p>
              Between the four of us, we'd spent years inside large Indian IT
              services firms and inside scrappy product startups in
              Bengaluru. We loved the talent depth of one and the craft and
              accountability of the other. We hated how rarely the two ever
              showed up in the same room.
            </p>
            <p>
              Pure was an attempt to put them in the same room. To build an
              engineering services company that hired like a product company,
              shipped like a product company, and stayed with clients for the
              long haul — without the hand-offs, the bait-and-switch, or the
              status-report theatre we'd all grown up resenting.
            </p>
            <p>
              Eight years on, we're a 200-strong team across Bengaluru,
              Hyderabad, and Pune — serving customers in 14 countries.
              We're still a small team in the way that matters: the people who
              ship your work are the people you meet on day one.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What we believe"
            title="Four convictions we run the company by."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, body, accent }) => (
              <div key={title} className="rounded-2xl border border-border bg-surface p-6">
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

      {/* Stats */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="By the numbers"
            title="A snapshot of where Pure is today."
          />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            <Stat value="2017" label="Founded in Bengaluru" />
            <Stat value="200+" label="Engineers, designers, PMs" />
            <Stat value="14" label="Countries served" />
            <Stat value="3.4 yrs" label="Avg. client tenure" />
            <Stat value="60+" label="Active enterprise clients" />
            <Stat value="9 yrs" label="Avg. senior experience" />
            <Stat value="₹0" label="Money spent on telemarketing" />
            <Stat value="∞" label="Cups of filter coffee" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Leadership"
            title="The humans behind the work."
            description="Approachable, accountable, and on the floor — not on a slide."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m) => (
              <div
                key={m.name}
                className="glass-card rounded-2xl p-6 flex items-center gap-4"
              >
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl text-white font-display font-bold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${m.accent}, color-mix(in oklab, ${m.accent} 55%, white))`,
                  }}
                >
                  {m.initials}
                </span>
                <div>
                  <div className="font-display font-semibold text-lg">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <Testimonial
            quote="We've worked with Pure for almost four years. They feel less like a vendor and more like the part of our engineering team that happens to sit in Bengaluru."
            name="Daniel Lim"
            role="VP Engineering"
            company="GreenLane Logistics"
            initials="DL"
            accent="var(--brand-orange)"
          />
        </div>
      </section>

      <CTASection
        title="Want to see if Pure is the right partner for what you're building?"
        description="We'll spend 45 honest minutes understanding where you are. No deck. No sales pitch. If we're not the right fit, we'll tell you who is."
      />
    </>
  );
}
