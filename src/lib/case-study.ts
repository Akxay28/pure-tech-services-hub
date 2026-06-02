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
}
