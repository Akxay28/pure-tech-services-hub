import { createFileRoute } from "@tanstack/react-router";
import { GCCModelsSection } from "@/components/site/GCCModelSection";
import { SubServicePage } from "@/components/site/SubServicePage";
import { subServices } from "@/lib/sub-services";
import { GCCIn12WeeksSection } from "@/components/site/GCCIn12WeeksSection";

const entry = subServices["global-capability-center"];

export const Route = createFileRoute("/services/global-capability-center")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: GlobalCapabilityCenter,
});

function GlobalCapabilityCenter() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <>
          <GCCIn12WeeksSection />
          <GCCModelsSection accent={entry.accent} />
          {/* another section here */}
        </>
      }
    />
  );
}
