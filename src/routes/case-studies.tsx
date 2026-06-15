import { createFileRoute, Outlet, useMatchRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  CaseStudyCard,
  CTASection,
} from "@/components/site/Primitives";
import { getCaseStudiesAction } from "../lib/admin-actions";

export const Route = createFileRoute("/case-studies")({
  loader: async () => {
    return { studies: await getCaseStudiesAction() };
  },
  head: () => ({
    meta: [
      { title: "Case Studies — Real outcomes from Pure Technology" },
      {
        name: "description",
        content:
          "Measurable results from recent Pure Technology engagements — AI, product engineering, and IT staffing across BFSI, healthcare, retail, and SaaS.",
      },
      { property: "og:title", content: "Case Studies — Pure Technology" },
      {
        property: "og:description",
        content:
          "Numbers, not narratives. Read how senior Pure Tech teams shipped production AI, modern platforms, and dedicated squads.",
      },
    ],
  }),
  component: CaseStudiesLayout,
});

export { studies } from "../lib/static-case-studies";

function CaseStudiesLayout() {
  const { studies } = Route.useLoaderData();
  const matchRoute = useMatchRoute();
  const isSlug = matchRoute({ to: "/case-studies/$slug" });

  if (isSlug) return <Outlet />;

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Numbers, <span className="text-gradient-brand">not narratives.</span>
          </>
        }
        description="Every engagement we publish has a defined success metric agreed on day one — and reported every Friday. These are six of the most recent."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Start your engagement</PrimaryButton>
          <GhostButton to="/services">Explore services</GhostButton>
        </div>
      </PageHero>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Recent work"
            title="Outcomes worth writing down."
            description="Anonymised where the client requires it — numbers are always real."
          />
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {studies.map((s) => (
              <div key={s.client} className="flex h-full flex-col gap-3">
                <CaseStudyCard
                  client={s.client}
                  industry={s.sector}
                  image={s.image}
                  accent={s.accent}
                  challenge={s.headline}
                  outcome={s.body}
                  metrics={s.metrics.map((m) => ({ value: m.v, label: m.l }))}
                  // ── detail fields ──
                  projectName={s.projectName}
                  objective={s.objective}
                  solutions={s.solutions}
                  challenges={s.challenges}
                  keyBenefits={s.keyBenefits}
                  results={s.results}
                  techStack={s.techStack}
                  conclusion={s.conclusion}
                />
                <Link
                  to={s.related as never}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: s.accent }}
                >
                  Related service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be the next case study?"
        description="Bring us a problem with a number attached. We'll come back with a plan to move it — and a Friday demo schedule to prove it."
      />
    </>
  );
}
