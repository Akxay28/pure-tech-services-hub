import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";
import { solutionSlugSet, subServices } from "@/lib/sub-services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (solutionSlugSet.has(params.slug)) {
      throw redirect({ to: "/solutions/$slug", params: { slug: params.slug } });
    }
    const entry = subServices[params.slug];
    if (!entry) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const entry = subServices[loaderData.slug];
    if (!entry) return {};
    const title = `${entry.eyebrow} — Pure Technology`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.lede },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.lede },
      ],
      links: [{ rel: "canonical", href: `https://puretechnology.in/services/${loaderData.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="px-5 lg:px-8 py-32 text-center">
      <h1 className="text-3xl font-display font-bold">Service not found</h1>
      <p className="mt-2 text-muted-foreground">
        That service page doesn't exist. Browse all services to find what you need.
      </p>
    </div>
  ),
  component: SubServiceRoute,
});

function SubServiceRoute() {
  const { slug } = Route.useLoaderData();
  if (!(slug in subServices)) throw notFound();
  return <SubServicePage {...getSubServicePageProps(slug as keyof typeof subServices)} />;
}
