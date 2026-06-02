import type { CaseStudy } from "@/lib/case-study";
import { accentAt } from "@/lib/brand-colors";
import { SectionHeader, CaseStudyCard } from "./Primitives";

export type { CaseStudy, CaseStudyMetric } from "@/lib/case-study";

export interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  accent?: string;
  eyebrow?: string;
  title?: string;
  image?: string;
  description?: string;
}

function publicImagePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function CaseStudiesSection({
  caseStudies,
  accent = "var(--brand-blue)",
  eyebrow = "Case studies",
  image = "/homeCaseStudy/2 case study.webp",
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
       <div
  className={`mt-12 grid gap-6 ${
    caseStudies.length >= 3
      ? "lg:grid-cols-3"
      : caseStudies.length === 2
        ? "lg:grid-cols-2"
        : "max-w-2xl"
  }`}
>
          {caseStudies.map((c, i) => {
            const preferredAccent = c.accent ?? accentAt(i);
            const cardAccent =
              i > 0 && preferredAccent === accent ? accentAt(i) : preferredAccent;

            return (
              <CaseStudyCard
                key={c.client}
                {...c}
                image={publicImagePath(c.image ?? image)}
                accent={i === 0 ? c.accent ?? accent : cardAccent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
