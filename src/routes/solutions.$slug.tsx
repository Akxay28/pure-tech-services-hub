import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";
import { solutionSlugSet, subServices } from "@/lib/sub-services";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    if (!solutionSlugSet.has(params.slug)) throw notFound();
    const entry = subServices[params.slug];
    if (!entry) throw notFound();
    return { entry, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { entry } = loaderData;
    const title = `${entry.eyebrow} - Industrial AI Solutions | Pure Technology`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.lede },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.lede },
      ],
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
  if (!solutionSlugSet.has(slug)) throw notFound();
  return <SubServicePage {...getSubServicePageProps(slug as keyof typeof subServices)} />;
}
