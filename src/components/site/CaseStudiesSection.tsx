import type { CaseStudy } from "@/lib/case-study";
import { SectionHeader, CaseStudyCard } from "./Primitives";

export type { CaseStudy, CaseStudyMetric } from "@/lib/case-study";

export interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  accent?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function CaseStudiesSection({
  caseStudies,
  accent = "var(--brand-blue)",
  eyebrow = "Case studies",
  title = "Recent work, anonymised where it has to be.",
  description = "Numbers are real, names are sometimes changed at the client's request.",
}: CaseStudiesSectionProps) {
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.client} {...c} accent={c.accent ?? accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
