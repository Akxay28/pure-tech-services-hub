import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Sparkles,
  HeartHandshake,
  Target,
  Users,
  Timer,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { PageHero, SectionHeader, Stat } from "@/components/site/Primitives";
import { getCareersAction, submitCareerApplicationAction } from "@/lib/admin-actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
  loader: async () => {
    const careers = await getCareersAction({ data: { admin: false } });
    return { careers };
  },
  component: CareersPage,
});

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

// ── Countdown badge shown on each role card ──────────────────────────────────
function CountdownBadge({ expiresAt }: { expiresAt: string | null }) {
  if (!expiresAt) return null;

  const remainingMs = new Date(expiresAt).getTime() - Date.now();
  const remainingDays = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));

  if (remainingDays <= 0) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-bold text-destructive">
        <Timer className="h-3.5 w-3.5" />
        Position Closed
      </span>
    );
  }

  const colorClass =
    remainingDays <= 3
      ? "border-destructive/30 bg-destructive/10 text-destructive"
      : remainingDays <= 7
        ? "border-amber-500/30 bg-amber-500/10 text-amber-600"
        : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${colorClass}`}
    >
      <Clock className="h-3.5 w-3.5" />
      Closes in {remainingDays} day{remainingDays !== 1 ? "s" : ""}
    </span>
  );
}

type CareerRole = {
  _id: string;
  title: string;
  team: string;
};

type CareerListing = CareerRole & {
  expiresAt: string | null;
  accent?: string;
  blurb: string;
  location: string;
  type: string;
  tag: string;
};

function CareerApplicationDialog({
  role,
  open,
  onOpenChange,
}: {
  role: CareerRole | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setSubmitting(false);
      setSubmitted(false);
      setError("");
    }
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!role) return;

    setSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      careerId: role._id,
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      currentCompany: formData.get("currentCompany"),
      experience: formData.get("experience"),
      location: formData.get("location"),
      linkedin: formData.get("linkedin"),
      portfolio: formData.get("portfolio"),
      noticePeriod: formData.get("noticePeriod"),
      message: formData.get("message"),
    };

    try {
      const result = await submitCareerApplicationAction({ data: payload });
      if (result?.success) {
        setSubmitted(true);
        event.currentTarget.reset();
      } else {
        setError("We could not submit your application. Please try again.");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "We could not submit your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-3xl rounded-2xl border-border p-0">
        <div className="border-b border-border bg-surface-muted/50 px-6 py-5">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Apply for {role?.title || "this role"}
            </DialogTitle>
            <DialogDescription>
              Fill in your details below. LinkedIn is mandatory for every application.
            </DialogDescription>
          </DialogHeader>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
            <h3 className="mt-4 text-xl font-display font-semibold">Application received</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Thanks for applying. Our team will review your profile and get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
            {error ? (
              <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                {error}
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="career-full-name">Full name</Label>
                <Input id="career-full-name" name="fullName" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-email">Email</Label>
                <Input id="career-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-phone">Phone number</Label>
                <Input id="career-phone" name="phone" required autoComplete="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-location">Current location</Label>
                <Input id="career-location" name="location" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-experience">Experience</Label>
                <Input id="career-experience" name="experience" required placeholder="3 years" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-notice">Notice period</Label>
                <Input id="career-notice" name="noticePeriod" placeholder="Immediate / 30 days" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-company">Current company</Label>
                <Input id="career-company" name="currentCompany" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-linkedin">LinkedIn profile / ID</Label>
                <Input
                  id="career-linkedin"
                  name="linkedin"
                  required
                  placeholder="linkedin.com/in/..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="career-portfolio">Resume or portfolio link</Label>
              <Input id="career-portfolio" name="portfolio" type="url" placeholder="https://..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="career-message">Short note</Label>
              <Textarea
                id="career-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your strongest work and why this role fits you."
              />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Submit application
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function CareersPage() {
  const { careers } = Route.useLoaderData();
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);

  return (
    <>
      <CareerApplicationDialog
        role={selectedRole}
        open={Boolean(selectedRole)}
        onOpenChange={(open) => {
          if (!open) setSelectedRole(null);
        }}
      />
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
          <Stat value="4" label="Global delivery expertise at 4 major regions." />
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

      {/* ── Open Roles ── */}
      <section
        id="open-roles"
        className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Open roles"
            title="Currently hiring - yes, a human reads every application."
            description="Apply with a quick note about what you've shipped and why it mattered. We respond within 7 days, always."
          />

          <div className="mt-12 grid gap-4">
            {careers.length === 0 ? (
              <div className="rounded-2xl border border-border bg-surface p-12 text-center">
                <Briefcase className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-40" />
                <p className="text-lg font-display font-semibold text-foreground">
                  No open roles right now
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We hire regularly — check back soon or write to us at{" "}
                  <a
                    href={`mailto:${HR_EMAIL}`}
                    className="text-primary underline underline-offset-4"
                  >
                    {HR_EMAIL}
                  </a>
                </p>
              </div>
            ) : (
              careers.map((role: CareerListing) => {
                const remainingMs = role.expiresAt
                  ? new Date(role.expiresAt).getTime() - Date.now()
                  : Infinity;
                const isExpired = remainingMs <= 0;

                return (
                  <article
                    key={role._id}
                    className={`group relative glass-card rounded-2xl p-6 sm:p-7 transition-transform hover:-translate-y-0.5 duration-300 ${isExpired ? "opacity-60" : ""}`}
                  >
                    <div
                      className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-15 blur-3xl pointer-events-none"
                      style={{ background: role.accent || "var(--brand-blue)" }}
                    />
                    <div className="relative flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: role.accent || "var(--brand-blue)" }}
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
                        {/* Countdown badge */}
                        <div className="mt-3">
                          <CountdownBadge expiresAt={role.expiresAt} />
                        </div>
                      </div>

                      {isExpired ? (
                        <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-secondary border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground cursor-not-allowed select-none">
                          Position Closed
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedRole({
                              _id: role._id,
                              title: role.title,
                              team: role.team,
                            })
                          }
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
                        >
                          Apply now
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </article>
                );
              })
            )}
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
                body: "A culture and leadership conversation. We always tell you the outcome - yes or no - within 7 days.",
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

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="In their words"
            title="What the team says when no one from HR is in the room."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {employeeTestimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-surface-muted/50 px-6 py-8 flex flex-col gap-4"
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-auto flex items-center gap-3">
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
