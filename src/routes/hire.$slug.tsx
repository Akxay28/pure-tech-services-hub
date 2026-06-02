import { createFileRoute, notFound } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRole, isHireRoleSlug } from "@/lib/hire-roles";

export const Route = createFileRoute("/hire/$slug")({
  loader: ({ params }) => {
    if (!isHireRoleSlug(params.slug)) throw notFound();
    const entry = getHireRole(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { entry } = loaderData;
    const title = `Hire ${entry.roleTitle} — Pure Technology`;
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
      <h1 className="text-3xl font-display font-bold">Role not found</h1>
      <p className="mt-2 text-muted-foreground">
        That hire page does not exist. Browse roles from Hire Developers in the menu.
      </p>
    </div>
  ),
  component: HireSlugRoute,
});

function HireSlugRoute() {
  const { entry } = Route.useLoaderData();
  return <HireRolePage {...entry} />;
}
