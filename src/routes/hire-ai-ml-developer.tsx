import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hire-ai-ml-developer")({
  loader: () => {
    throw redirect({ to: "/hire/ai-developers", statusCode: 301 });
  },
});
