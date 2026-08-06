import { QueryClient, dehydrate, hydrate } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    dehydrate: () => {
      return {
        dehydratedQuery: dehydrate(queryClient),
      };
    },
    hydrate: (dehydrated: any) => {
      hydrate(queryClient, dehydrated.dehydratedQuery);
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Always re-fetch loader data on navigation — prevents stale data when revisiting routes
    defaultStaleTime: 0,
  });

  return router;
};
