import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hire/web-app-developer")({
  loader: () => {
    throw redirect({ to: "/hire/web-app-developers", statusCode: 301 });
  },
});
