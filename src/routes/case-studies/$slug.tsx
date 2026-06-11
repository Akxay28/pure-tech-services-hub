import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { getCaseStudyBySlugAction } from "../../lib/admin-actions";

type TechStack = { category: string; items: string; icon: string };
type Metric = { value: string; label: string };

type CaseStudyState = {
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics: Metric[];
  accent?: string;
  image?: string;
  projectName?: string;
  objective?: string;
  solutions?: string[];
  challenges?: string[];
  keyBenefits?: Metric[];
  results?: string[];
  techStack?: TechStack[];
  conclusion?: string;
};

export const Route = createFileRoute("/case-studies/$slug")({
  loader: async ({ params }) => {
    const study = await getCaseStudyBySlugAction({ data: params.slug });
    return { study };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const ac = (study as any)?.accent ?? "var(--brand-blue)";

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-5">
        <p className="text-lg text-muted-foreground">Case study not found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="mx-auto max-w-5xl px-5 lg:px-8 pt-8">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        {/* <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Backs
        </Link> */}
      </div>

      <div className="mx-auto max-w-5xl px-5 lg:px-8 pb-24">
        {/* Header banner */}
        <div
          className="mt-6 rounded-[28px] px-8 py-7 flex flex-wrap items-center gap-6"
          style={{ background: ac }}
        >
          <div className="bg-white rounded-xl px-5 py-3 font-bold text-lg" style={{ color: ac }}>
            {study.client.split(" ")[0]}
          </div>
          {[
            { label: "Client", value: study.client },
            { label: "Project", value: study.projectName ?? study.client },
            { label: "Industry", value: study.industry },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                {item.label}
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        {study.image && (
          <div className="mt-6 rounded-[28px] overflow-hidden h-[300px]">
            <img src={study.image} alt={study.client} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="mt-10 space-y-10">
          {/* Objective */}
          {study.objective && (
            <section>
              <h4
                className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
                style={{ color: ac }}
              >
                Objective
              </h4>
              <p className="text-base leading-relaxed text-foreground/80">{study.objective}</p>
            </section>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solutions & Challenges */}
            <section className="space-y-4">
              {study.solutions && study.solutions.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] glass-card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">
                    ✓ Solutions Implemented
                  </p>
                  <ul className="space-y-3">
                    {study.solutions.map((s, i) => (
                      <li key={i} className="text-sm text-foreground/75 leading-relaxed flex gap-2">
                        <span className="text-green-400 mt-0.5 shrink-0">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {study.challenges && study.challenges.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] glass-card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">
                    ⚠ Key Challenges
                  </p>
                  <ul className="space-y-3">
                    {study.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-foreground/75 leading-relaxed flex gap-2">
                        <span className="text-yellow-400 mt-0.5 shrink-0">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Key Benefits + Tech Stack */}
            <section className="space-y-6">
              {study.keyBenefits && study.keyBenefits.length > 0 && (
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
                    style={{ color: ac }}
                  >
                    Key Benefits
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {study.keyBenefits.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/[0.03] glass-card px-3 py-4 text-center"
                      >
                        <div className="text-2xl font-bold font-display" style={{ color: ac }}>
                          {b.value}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-1 leading-tight">
                          {b.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {study.techStack && study.techStack.length > 0 && (
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
                    style={{ color: ac }}
                  >
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((t, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/[0.03] glass-card px-3 py-2"
                      >
                        <span className="text-muted-foreground text-[10px] block uppercase tracking-wide">
                          {t.category}
                        </span>
                        <span className="font-medium text-foreground text-xs">{t.items}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Results + Conclusion */}
          <div className="grid md:grid-cols-2 gap-8">
            {study.results && study.results.length > 0 && (
              <section>
                <p
                  className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
                  style={{ color: ac }}
                >
                  Results & ROI
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] glass-card p-6">
                  <ul className="space-y-3">
                    {study.results.map((r, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/75">
                        <span style={{ color: ac }} className="mt-0.5 shrink-0">
                          ✓
                        </span>{" "}
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
            {study.conclusion && (
              <section>
                <p
                  className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
                  style={{ color: ac }}
                >
                  Conclusion
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] glass-card p-6">
                  <p className="text-sm text-foreground/75 leading-relaxed">{study.conclusion}</p>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
