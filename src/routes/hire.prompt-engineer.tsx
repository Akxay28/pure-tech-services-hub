import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hire/prompt-engineer")({
  loader: () => {
    throw redirect({ to: "/hire/prompt-engineers", statusCode: 301 });
  },
});
