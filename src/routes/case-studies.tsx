import { createFileRoute, Outlet, useMatchRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
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

const CASE_STUDIES_PER_PAGE = 9;

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
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(studies.length / CASE_STUDIES_PER_PAGE));
  const paginatedStudies = useMemo(() => {
    const start = (page - 1) * CASE_STUDIES_PER_PAGE;
    return studies.slice(start, start + CASE_STUDIES_PER_PAGE);
  }, [page, studies]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const goToPage = (nextPage: number) => {
    const safePage = Math.min(Math.max(nextPage, 1), totalPages);
    setPage(safePage);
    window.requestAnimationFrame(() => {
      document.getElementById("case-study-grid")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

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
          <div id="case-study-grid" className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {paginatedStudies.map((s) => (
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

          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => goToPage(pageNumber)}
                  aria-current={pageNumber === page ? "page" : undefined}
                  className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-semibold transition-colors ${
                    pageNumber === page
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-surface text-foreground hover:bg-secondary"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want to be the next case study?"
        description="Bring us a problem with a number attached. We'll come back with a plan to move it — and a Friday demo schedule to prove it."
      />
    </>
  );
}
