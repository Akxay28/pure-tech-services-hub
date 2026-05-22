import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("it-outsourcing");

export const Route = createFileRoute("/services/it-outsourcing")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: ItOutsourcing,
});

function ItOutsourcing() {
  return (
    <SubServicePage
      {...props}
      caseStudiesCopy={{
        title: "Managed services outcomes from real transitions.",
        description:
          "Numbers are from live outsourcing engagements — client names anonymised where required.",
      }}
    />
  );
}
