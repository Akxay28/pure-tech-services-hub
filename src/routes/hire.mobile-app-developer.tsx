import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hire/mobile-app-developer")({
  loader: () => {
    throw redirect({ to: "/hire/mobile-app-developers", statusCode: 301 });
  },
});
