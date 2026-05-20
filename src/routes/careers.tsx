import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Plane,
  Stethoscope,
  Coffee,
} from "lucide-react";
import {
  PageHero,
  SectionHeader,
  CTASection,
  Stat,
  Testimonial,
} from "@/components/site/Primitives";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build at Pure Technology | Bengaluru, Hyderabad, Pune" },
      {
        name: "description",
        content:
          "Join 180+ senior engineers shipping AI, product, and platform work for clients across 14 countries. Open roles in Bengaluru, Hyderabad, Pune, and remote across India.",
      },
      { property: "og:title", content: "Careers at Pure Technology" },
      {
        property: "og:description",
        content:
          "Senior-by-default engineering, no bait-and-switch, 9-year average tenure. We're hiring across AI, product, platform, and design.",
      },
    ],
  }),
  component: CareersPage,
});

type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
  experience: string;
  blurb: string;
  accent: string;
};

const roles: Role[] = [
  {
    title: "Senior AI Engineer — RAG & Agents",
    team: "AI Solutions",
    location: "Bengaluru / Hybrid",
    type: "Full-time",
    experience: "5–9 yrs",
    blurb:
      "Own the architecture of retrieval and agentic systems for BFSI and healthcare clients. You'll ship to real users, write the evals, and present to CISOs.",
    accent: "var(--brand-blue)",
  },
  {
    title: "Staff MLOps Engineer",
    team: "AI Solutions",
    location: "Hyderabad / Remote India",
    type: "Full-time",
    experience: "7–12 yrs",
    blurb:
      "Build the observability, eval, and deployment backbone behind every LLM product we ship. Kubernetes, Ray, vector stores, and a healthy bias for paved roads.",
    accent: "var(--brand-blue)",
  },
  {
    title: "Senior Full-Stack Engineer (TypeScript)",
    team: "Product Engineering",
    location: "Bengaluru / Pune",
    type: "Full-time",
    experience: "4–8 yrs",
    blurb:
      "Lead front-of-house product squads building SaaS for global customers. React, Node, Postgres, and an opinion about why types matter at 2am.",
    accent: "var(--brand-green)",
  },
  {
    title: "Engineering Manager — Product Pods",
    team: "Product Engineering",
    location: "Bengaluru",
    type: "Full-time",
    experience: "9+ yrs",
    blurb:
      "Run 2–3 product squads end-to-end. Hire seniors, protect cadence, partner with client PMs, and keep the craft bar high. Player-coach, not pure manager.",
    accent: "var(--brand-green)",
  },
  {
    title: "Senior Talent Partner — IT Staffing",
    team: "Talent",
    location: "Bengaluru",
    type: "Full-time",
    experience: "5–8 yrs",
    blurb:
      "Run end-to-end hiring for our staffing clients. Source senior engineers, defend our 'no bait-and-switch' promise, and own placement quality, not just volume.",
    accent: "var(--brand-orange)",
  },
  {
    title: "Senior Product Designer",
    team: "Product Engineering",
    location: "Remote India",
    type: "Full-time",
    experience: "5–9 yrs",
    blurb:
      "Design enterprise SaaS surfaces that real operators love. Systems thinking, prototyping in Figma, and the patience to ship the right thing — not the first thing.",
    accent: "var(--brand-yellow)",
  },
  {
    title: "DevOps & Platform Engineer",
    team: "Platform",
    location: "Hyderabad / Remote India",
    type: "Full-time",
    experience: "4–8 yrs",
    blurb:
      "Own the internal platform that every client squad ships on. AWS, Terraform, GitHub Actions, SOC 2 controls, and a fondness for boring, reliable infra.",
    accent: "var(--brand-red)",
  },
  {
    title: "Engineering Internship — Class of 2027",
    team: "Apprenticeship",
    location: "Bengaluru",
    type: "6-month internship",
    experience: "Pre-final / Final year",
    blurb:
      "Paid, mentored, and structured. Sit inside a senior squad, ship real client code, and graduate with a PPO interview if you clear the bar.",
    accent: "var(--brand-blue)",
  },
];

const principles = [
  {
    Icon: Sparkles,
    title: "Senior by default, always",
    body: "We hire experienced engineers and trust them with ownership from week one. No staffing benches, no surprise juniors on your project.",
    accent: "var(--brand-blue)",
  },
  {
    Icon: HeartHandshake,
    title: "Craft over hustle",
    body: "We ship in 2-week cycles, not 80-hour weeks. The work is hard because it's interesting — not because the calendar is broken.",
    accent: "var(--brand-orange)",
  },
  {
    Icon: GraduationCap,
    title: "Learn out loud",
    body: "₹60,000 / year learning budget, internal brown-bags every Friday, and a culture where 'I don't know yet' is a perfectly senior answer.",
    accent: "var(--brand-green)",
  },
];

const benefits = [
  { Icon: Stethoscope, label: "Family health cover up to ₹10L" },
  { Icon: Plane, label: "30 days paid leave + India + global holidays" },
  { Icon: GraduationCap, label: "₹60K/year learning budget" },
  { Icon: HeartHandshake, label: "Parental leave: 26w birthing / 12w partner" },
  { Icon: Coffee, label: "Hybrid by default · 2 days in office" },
  { Icon: Briefcase, label: "ESOPs from day one for senior roles" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Bengaluru · Hyderabad · Pune · Remote India"
        title={
          <>
            Build the things you'll be proud to talk about{" "}
            <span className="text-gradient-brand">at your next dinner table.</span>
          </>
        }
        description="We're 180+ engineers, designers, and operators shipping AI, product, and platform work for clients across 14 countries. We hire seniors, pay them properly, and protect the cadence that lets craft happen."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#open-roles"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
          >
            See open roles
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:careers@puretechnology.in"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Don't see your role? Write to us
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          <Stat value="180+" label="Engineers on staff" />
          <Stat value="9 yrs" label="Avg. senior tenure" />
          <Stat value="3.4 yrs" label="Avg. team-mate tenure" />
          <Stat value="4.7/5" label="Glassdoor (last 12 mo)" />
        </div>
      </PageHero>

      {/* Principles */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How we work"
            title="Three principles we'll defend in performance reviews."
            description="If these sound like the kind of place you want to spend the next five years, we should talk."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {principles.map(({ Icon, title, body, accent }) => (
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

      {/* Open roles */}
      <section
        id="open-roles"
        className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Open roles"
            title="Currently hiring — and yes, a human reads every application."
            description="Apply with a quick note about a thing you've shipped and why it mattered. We respond within 7 days, always."
          />

          <div className="mt-12 grid gap-4">
            {roles.map((role) => (
              <article
                key={role.title}
                className="group relative glass-card rounded-2xl p-6 sm:p-7 transition-transform hover:-translate-y-0.5 duration-300"
              >
                <div
                  className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-15 blur-3xl pointer-events-none"
                  style={{ background: role.accent }}
                />
                <div className="relative flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: role.accent }}
                      />
                      {role.team}
                    </div>
                    <h3 className="mt-2 text-xl sm:text-2xl font-display font-semibold">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                      {role.blurb}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-foreground/75">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-3 py-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-3 py-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-3 py-1">
                        <Clock className="h-3.5 w-3.5" />
                        {role.experience}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@puretechnology.in?subject=${encodeURIComponent(
                      `Application — ${role.title}`,
                    )}`}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Benefits"
            title="The boring-but-important list."
            description="No ping-pong tables in the deck. Just the things that actually matter when you're 32, have a family, and want to do your best work."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground/90">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What to expect"
            title="A hiring process that respects your calendar."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Intro chat",
                body: "30 minutes with a recruiter. Mostly your questions. We share the role, the team, and the comp range upfront.",
              },
              {
                step: "02",
                title: "Craft conversation",
                body: "60–90 minutes with a senior on the team. We dig into one thing you've actually built. No whiteboarding gotchas.",
              },
              {
                step: "03",
                title: "Paid take-home",
                body: "A small, scoped problem you can do in 4–6 hours. We pay for your time, and you keep the code.",
              },
              {
                step: "04",
                title: "Decision in 7 days",
                body: "A final values + practicalities chat, then a written offer within a week. Yes or no — we always tell you why.",
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

      {/* Voices */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="In their words"
            title="What the team says when no one from HR is in the room."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            <Testimonial
              quote="I joined Pure after eight years at a service shop. The single biggest difference is being trusted to say no to bad ideas — even when the client is paying for them."
              name="Priya Subramanian"
              role="Staff Engineer"
              company="Joined 2022"
              initials="PS"
              accent="var(--brand-blue)"
            />
            <Testimonial
              quote="The take-home was the first interview in years where I learned something I actually used at work the next month. They take the craft conversation seriously."
              name="Aniket Sharma"
              role="Senior Product Engineer"
              company="Joined 2024"
              initials="AS"
              accent="var(--brand-green)"
            />
            <Testimonial
              quote="I've been on three different client projects in two years and never been the most junior person on the team. That's not an accident — it's a hiring philosophy."
              name="Megha Iyer"
              role="Senior AI Engineer"
              company="Joined 2023"
              initials="MI"
              accent="var(--brand-orange)"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your role? Send a note anyway."
        description="We open new positions every month. If your craft is sharp and your timing is right, we'd rather hear from you early than miss you entirely."
      />

      <div className="-mt-12 mb-20 text-center">
        <Link
          to="/contact"
          className="text-sm font-medium text-foreground/70 hover:text-foreground underline underline-offset-4"
        >
          Or write directly to careers@puretechnology.in
        </Link>
      </div>
    </>
  );
}
