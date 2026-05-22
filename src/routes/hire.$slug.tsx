import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

const ROLE_LABELS: Record<string, string> = {
  "chatbot-developers": "Chatbot Developers",
  "openai-developers": "OpenAI Developers",
  "generative-ai-developers": "Generative AI Developers",
  "gemini-developers": "Gemini Developers",
  "prompt-engineer": "Prompt Engineer",
  "chatgpt-developers": "ChatGPT Developers",
  "lovable-ai-developers": "Lovable AI Developers",
  "replit-ai-developers": "Replit AI Developers",
  "bolt-new-ai-developers": "Bolt.new AI Developers",
  "google-antigravity-developers": "Google Antigravity Developers",
  "cursor-ai-developers": "Cursor AI Developers",
  "windsurf-ai-developers": "Windsurf AI Developers",
  "software-developer": "Software Developers",
  "mobile-app-developer": "Mobile App Developers",
  "backend-developers": "Backend Developers",
  "ai-developers": "AI Developers",
  "devops-developers": "DevOps Developers",
  "web-app-developer": "Web App Developers",
  "frontend-developers": "Frontend Developers",
  "fullstack-developers": "Fullstack Developers",
  "android-developers": "Android Developers",
};

function labelFor(slug: string) {
  return (
    ROLE_LABELS[slug] ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export const Route = createFileRoute("/hire/$slug")({
  head: ({ params }) => {
    const role = labelFor(params.slug);
    const title = `Hire ${role} — Pure Technology`;
    const description = `Hire pre-vetted, senior ${role} on demand. Cleared in days, integrated with your team, billed by the seat.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: HireRolePage,
});

function HireRolePage() {
  const { slug } = Route.useParams();
  const role = labelFor(slug);

  const bullets = [
    "Senior-only bar — 5+ years average experience",
    "Time-zone overlap with US, EU, and APAC",
    "Vetted on architecture, code quality, and product sense",
    "Replaceable inside 2 weeks, on us, if it isn't a fit",
    "Direct slack/standup integration with your team",
    "IP assigned to you from the very first commit",
  ];

  const process = [
    { step: "01", title: "Tell us the brief", body: "Stack, scope, seniority, time-zone overlap. 30-minute scoping call." },
    { step: "02", title: "Meet the shortlist", body: "We hand-pick 2–3 engineers within 5 business days. You interview." },
    { step: "03", title: "Onboard in a week", body: "Pre-wired access, runbooks, and a senior shadow for the first 30 days." },
    { step: "04", title: "Scale or step down", body: "Add or trim seats monthly — no long-term lock-in beyond a 30-day notice." },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-pink-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-pink)]">
              <Users className="h-3.5 w-3.5" />
              Hire Developers
            </div>
            <h1 className="mt-5 text-4xl lg:text-6xl font-display font-bold tracking-tight text-[color:var(--brand-purple)]">
              Hire {role}
              <span className="block bg-[image:var(--gradient-cta)] bg-clip-text text-transparent">
                ready to ship in your next sprint.
              </span>
            </h1>
            <p className="mt-6 text-lg text-[color:var(--brand-purple)]/70 max-w-2xl">
              Pre-vetted, senior {role.toLowerCase()} who slot into your team in days — not months. No agency layers, no juniors hiding behind a tech lead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase text-white shadow-[0_10px_30px_-10px_rgba(255,77,141,0.55)] transition-all hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-cta)" }}
              >
                Talk to a hiring partner
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand-purple)] hover:bg-[color:var(--brand-pink-soft)]/40 transition-all"
              >
                See client outcomes
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(46,11,125,0.3)]">
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { v: "5 days", l: "Avg. match time" },
                  { v: "9 yrs", l: "Avg. engineer tenure" },
                  { v: "94%", l: "12-mo retention" },
                  { v: "4.8/5", l: "Client NPS" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-[color:var(--brand-pink-soft)]/30 p-4">
                    <div className="text-2xl font-display font-bold text-[color:var(--brand-purple)]">{s.v}</div>
                    <div className="mt-1 text-xs text-[color:var(--brand-purple)]/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why us */}
        <section className="mt-24">
          <h2 className="text-3xl font-display font-bold text-[color:var(--brand-purple)]">
            Why teams hire {role.toLowerCase()} through Pure Technology
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {bullets.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white p-5"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[color:var(--brand-pink)] shrink-0" />
                <span className="text-sm text-[color:var(--brand-purple)]/80">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-24">
          <h2 className="text-3xl font-display font-bold text-[color:var(--brand-purple)]">
            How hiring works
          </h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-border/60 bg-white p-6"
              >
                <div className="text-xs font-bold tracking-widest text-[color:var(--brand-pink)]">
                  {p.step}
                </div>
                <div className="mt-2 text-lg font-semibold text-[color:var(--brand-purple)]">
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-[color:var(--brand-purple)]/70">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-3xl border border-border/60 bg-[color:var(--brand-pink-soft)]/30 p-10 text-center">
          <h2 className="text-3xl font-display font-bold text-[color:var(--brand-purple)]">
            Ready to add {role.toLowerCase()} to your team?
          </h2>
          <p className="mt-3 text-[color:var(--brand-purple)]/70 max-w-xl mx-auto">
            Share your brief — we'll send 2–3 hand-picked candidates inside a week.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase text-white shadow-[0_10px_30px_-10px_rgba(255,77,141,0.55)]"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            Start hiring
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
