import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Sparkles,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";
import { PageHero, SectionHeader, Stat } from "@/components/site/Primitives";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      {
        title: "Careers — Build with Pure Technology | Pune & Remote India",
      },
      {
        name: "description",
        content:
          "Join Pure Technology's growing team of engineers, AI specialists, and technology consultants in Pune and remote across India. Open roles in AI, full stack, business development, and IT staffing.",
      },
      { property: "og:title", content: "Careers at Pure Technology" },
      {
        property: "og:description",
        content:
          "We hire for skill, invest in growth, and build careers — not just projects. Explore open roles in Pune and remote India.",
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
  tag: string;
  blurb: string;
  accent: string;
};

const roles: Role[] = [
  {
    title: "Business Development Specialist",
    team: "Business Development",
    location: "Pune",
    type: "Full-time",
    tag: "IT Sector",
    blurb:
      "Drive new business across our IT services portfolio — from AI and product engineering to staff augmentation. You'll partner with leadership on pipeline, proposals, and client relationships.",
    accent: "var(--brand-orange)",
  },
  {
    title: "AI Developer / Engineer",
    team: "AI Solutions",
    location: "Pune",
    type: "Full-time",
    tag: "AI & Automation",
    blurb:
      "Build intelligent systems for startups and enterprises — LLM integrations, automation workflows, and production-ready AI features aligned to real client outcomes.",
    accent: "var(--brand-blue)",
  },
  {
    title: "Full Stack Developer",
    team: "Product Engineering",
    location: "Pune",
    type: "Full-time",
    tag: "Web & SaaS",
    blurb:
      "Ship end-to-end product work for global clients — modern frontends, APIs, and cloud-backed services with a team that cares about maintainability and delivery quality.",
    accent: "var(--brand-green)",
  },
  {
    title: "IT Staff Augmentation Consultant",
    team: "Talent & Delivery",
    location: "Pune",
    type: "Full-time",
    tag: "Staffing",
    blurb:
      "Match senior engineers to client needs, own delivery quality, and uphold our no-bait-and-switch promise — senior talent, transparent placements, long-term relationships.",
    accent: "var(--brand-red)",
  },
];

const principles = [
  {
    Icon: Target,
    title: "Outcome Over Output",
    body: "We measure success by business impact — not lines of code or hours billed. Every team member is aligned to client KPIs, not just task lists.",
    accent: "var(--brand-blue)",
  },
  {
    Icon: Sparkles,
    title: "AI-First Mindset",
    body: "We're building for the future. Our teams actively work with AI, automation, and intelligent systems — learning and applying new technologies every day.",
    accent: "var(--brand-orange)",
  },
  {
    Icon: Users,
    title: "People Over Headcount",
    body: "We hire people, not resources. We grow them, name them in case studies, and never trade their wellbeing for a deadline.",
    accent: "var(--brand-green)",
  },
];

// ============================================================
// CAREERS PAGE — EMPLOYEE TESTIMONIALS DATA
// Update quotes, names, roles, and year here anytime
// ============================================================

const employeeTestimonials = [
  {
    quote:
      "Pure Technology gave me the opportunity to work on real AI projects from day one. The culture here is collaborative, fast-paced, and genuinely invested in your growth.",
    name: "Pranay Borode.",
    role: "Full Stack Developer",
    yearJoined: "2022",
    initials: "PB",
  },
  {
    quote:
      "What I love most is that leadership actually listens. Ideas from junior team members get implemented. That kind of trust is rare in an IT company.",
    name: "Aniket M.",
    role: "AI Engineer",
    yearJoined: "2023",
    initials: "AM",
  },
  {
    quote:
      "I've grown more in 18 months at Pure Technology than in my previous 4 years combined. The exposure to diverse client projects across industries is unmatched.",
    name: "Megha R.",
    role: "Product Engineer",
    yearJoined: "2023",
    initials: "MR",
  },
];

const HR_EMAIL = "jobs@puretechnology.in";

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Pune, Maharashtra · Remote India"
        title={
          <>
            Build Real. Build Smart.{" "}
            <span className="text-gradient-brand">Build with Pure Technology.</span>
          </>
        }
        description="We're a growing team of engineers, AI specialists, and technology consultants delivering world-class digital solutions for startups, SMEs, and global enterprises. We hire for skill, invest in growth, and build careers — not just projects."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#open-roles"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
          >
            See Open Roles
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${HR_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
Don't see your role? Write to us → {HR_EMAIL}
</a>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          <Stat value="175-200" label="Team members" />
          <Stat value="2013" label="Founded in Pune" />
          <Stat value="20+" label="Services offered" />
          <Stat
            value="4"
            label="Global delivery expertise at 4 major regions."
          />
        </div>
      </PageHero>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How we work"
            title="Three things we genuinely believe in."
            description="If these sound like the kind of place you want to grow, we should talk."
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
                <h3 className="mt-4 text-lg font-display font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Open roles"
            title="Currently hiring — and yes, a human reads every application."
            description="Apply with a quick note about what you've shipped and why it mattered. We respond within 7 days, always."
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
                        {role.tag}
                      </span>
                    </div>
                  </div>
                  <a
                   href={`https://mail.google.com/mail/?view=cm&to=${HR_EMAIL}&su=${encodeURIComponent(`Application — ${role.title}`)}`}
                   target="_blank"
                   rel="noopener noreferrer" 
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
                  >
                    Apply now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What to expect"
            title="A hiring process that respects your time."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Initial Connect",
                body: "A quick 20-minute call to understand your background, interests, and what you're looking for.",
              },
              {
                step: "02",
                title: "Technical Round",
                body: "A focused discussion on your core skills with our tech leads. We keep it relevant, not tricky.",
              },
              {
                step: "03",
                title: "Practical Assignment",
                body: "A short, real-world problem relevant to the role. We value applied thinking over theory.",
              },
              {
                step: "04",
                title: "Final Decision",
                body: "A culture and leadership conversation. We always tell you the outcome — yes or no — within 7 days.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-border bg-surface p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Step {s.step}
                </div>
                <div className="mt-3 text-xl font-display font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* // ============================================================
// REPLACE the current [PLACEHOLDER] section with this:
// ============================================================ */}

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="In their words"
            title="What the team says when no one from HR is in the room."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {employeeTestimonials.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-surface-muted/50 px-6 py-8 flex flex-col gap-4"
              >
                {/* Quote */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="mt-auto flex items-center gap-3">
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · Joined {t.yearJoined}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-20">
        <div className="relative mx-auto max-w-7xl rounded-[2rem] overflow-hidden isolate">
          <div className="absolute inset-0 liquid-cta opacity-95" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full opacity-45 blur-[90px] animate-blob-1"
              style={{ background: "var(--brand-blue)" }}
            />
            <div
              className="absolute -top-20 right-6 w-[34rem] h-[34rem] rounded-full opacity-35 blur-[85px] animate-blob-2"
              style={{ background: "var(--brand-red)" }}
            />
            <div
              className="absolute top-1/2 -left-16 w-[36rem] h-[36rem] rounded-full opacity-40 blur-[90px] animate-blob-3"
              style={{ background: "var(--brand-green)" }}
            />
            <div
              className="absolute bottom-8 right-0 w-[32rem] h-[32rem] rounded-full opacity-40 blur-[85px] animate-blob-4"
              style={{ background: "var(--brand-orange)" }}
            />
            <div
              className="absolute top-8 left-1/3 w-[34rem] h-[34rem] rounded-full opacity-45 blur-[90px] animate-blob-5"
              style={{ background: "var(--brand-yellow)" }}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_20%,white,transparent_60%)] opacity-20" />

          <div className="relative px-8 sm:px-14 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
                Don't see your role? Reach out anyway.
              </h2>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
                We open new positions regularly. If your skills are sharp and the timing is right,
                we'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <a
                href={`mailto:${HR_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/90 transition-colors"
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-12 mb-20 text-center">
        <a
          href={`mailto:${HR_EMAIL}`}
          className="text-sm font-medium text-foreground/70 hover:text-foreground underline underline-offset-4"
        >
          Or write directly to {HR_EMAIL}
        </a>
      </div>
    </>
  );
}
