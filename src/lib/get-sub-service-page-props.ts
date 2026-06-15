import type { SubServicePageProps } from "@/components/site/SubServicePage";
import { getCaseStudiesForService, type SubServiceSlug } from "@/lib/case-studies-by-service";
import { subServices } from "@/lib/sub-services";

export type { SubServiceSlug };

const CASE_STUDY_SERVICE_SLUGS = new Set<SubServiceSlug>([
  "software-development",
  "remote-teams",
  "web-application-development",
  "mobile-app-development",
  "cloud-infrastructure",
  "front-end-development",
  "data-engineering",
  "cybersecurity",
  "ai-strategy-consulting",
  "custom-ai-development",
  "ai-chatbot-development",
  "generative-ai-development",
  "ai-agents-development",
  "ai-integration",
]);

export function getSubServicePageProps(slug: SubServiceSlug): SubServicePageProps & {
  title: string;
} {
  const entry = subServices[slug];
  return {
    ...entry,
    title: entry.title,
    caseStudies: getCaseStudiesForService(slug),
    showCaseStudies: CASE_STUDY_SERVICE_SLUGS.has(slug),
  };
}
