export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  accent?: string;
  image?: string;
  slug?: string;
  projectName?: string;
  objective?: string;
  solutions?: string[];
  challenges?: string[];
  keyBenefits?: CaseStudyMetric[];
  results?: string[];
  techStack?: { category: string; items: string; icon: string }[];
  conclusion?: string;
}
