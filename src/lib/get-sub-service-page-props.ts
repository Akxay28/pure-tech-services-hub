import type { SubServicePageProps } from "@/components/site/SubServicePage";
import { getCaseStudiesForService, type SubServiceSlug } from "@/lib/case-studies-by-service";
import { subServices } from "@/lib/sub-services";

export type { SubServiceSlug };

export function getSubServicePageProps(slug: SubServiceSlug): SubServicePageProps & {
  title: string;
} {
  const entry = subServices[slug];
  return {
    ...entry,
    title: entry.title,
    caseStudies: getCaseStudiesForService(slug),
  };
}
