import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hire/software-developer")({
  loader: () => {
    throw redirect({ to: "/hire/software-developers", statusCode: 301 });
  },
});
