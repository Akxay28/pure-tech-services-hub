import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { subServices } from "@/lib/sub-services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const entry = subServices[params.slug];
    if (!entry) throw notFound();
    return { entry, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { entry } = loaderData;
    const title = `${entry.eyebrow} — Pure Technology`;
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
      <h1 className="text-3xl font-display font-bold">Service not found</h1>
      <p className="mt-2 text-muted-foreground">
        That service page doesn't exist. Browse all services to find what you need.
      </p>
    </div>
  ),
  component: SubServiceRoute,
});

function SubServiceRoute() {
  const { entry } = Route.useLoaderData();
  return <SubServicePage {...entry} title={entry.title} />;
}
