import { createFileRoute } from "@tanstack/react-router";
import { GCCModelsSection } from "@/components/site/GCCModelSection";
import { SubServicePage } from "@/components/site/SubServicePage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";
import { GCCIn12WeeksSection } from "@/components/site/GCCIn12WeeksSection";

const props = getSubServicePageProps("global-capability-center");

export const Route = createFileRoute("/services/global-capability-center")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: GlobalCapabilityCenter,
});

function GlobalCapabilityCenter() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <>
          <GCCIn12WeeksSection />
          <GCCModelsSection />
        </>
      }
    />
  );
}
