import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";
import { solutionSlugSet, subServices } from "@/lib/sub-services";
import { industrialSlugs, industrialSolutions } from "@/lib/industrial-solutions";
import { surveillanceSlugs, surveillanceSolutions } from "@/lib/surveillance-solutions";
import { getCaseStudiesForService } from "@/lib/case-studies-by-service";

const allSolutionSlugs = new Set([...solutionSlugSet, ...industrialSlugs, ...surveillanceSlugs]);

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    if (!allSolutionSlugs.has(params.slug)) throw notFound();
    const entry = subServices[params.slug] ?? industrialSolutions[params.slug] ?? surveillanceSolutions[params.slug];
    if (!entry) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const entry = subServices[loaderData.slug] ?? industrialSolutions[loaderData.slug] ?? surveillanceSolutions[loaderData.slug];
    if (!entry) return {};
    const title = `${entry.eyebrow}: ${entry.title} | Pure Technology`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.lede },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.lede },
        { name: "robots", content: "index, follow" },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: entry.eyebrow,
                description: entry.lede,
                provider: { "@type": "Organization", name: "Pure Technology", url: "https://puretechnology.in" },
                areaServed: ["India", "Worldwide"],
                serviceType: "Industrial digital transformation and operational intelligence",
              },
              {
                "@type": "FAQPage",
                mainEntity: entry.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
            ],
          },
        },
      ],
      links: [{ rel: "canonical", href: `https://puretechnology.in/solutions/${loaderData.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="px-5 lg:px-8 py-32 text-center">
      <h1 className="text-3xl font-display font-bold">Solution not found</h1>
      <p className="mt-2 text-muted-foreground">
        That solution page does not exist. Browse all solutions to find what you need.
      </p>
    </div>
  ),
  component: SolutionRoute,
});

function SolutionRoute() {
  const { slug } = Route.useLoaderData();
  if (!allSolutionSlugs.has(slug)) throw notFound();
  if (solutionSlugSet.has(slug)) {
    return <SubServicePage {...getSubServicePageProps(slug as keyof typeof subServices)} />;
  }
  const entry = industrialSolutions[slug] ?? surveillanceSolutions[slug];
  if (!entry) throw notFound();
  
  const caseStudies = getCaseStudiesForService(slug as any);
  return (
    <SubServicePage 
      {...entry} 
      caseStudies={caseStudies.length > 0 ? caseStudies : entry.caseStudies}
      showCaseStudies={caseStudies.length > 0 || entry.showCaseStudies}
    />
  );
}
