/**
 * Canonical brand palette — mirrors :root tokens in styles.css and the homepage.
 * Use these instead of ad-hoc hex values so service pages match the landing page.
 */
export const BRAND = {
  blue: "var(--brand-blue)",
  orange: "var(--brand-orange)",
  green: "var(--brand-green)",
  red: "var(--brand-red)",
  yellow: "var(--brand-yellow)",
  ink: "var(--brand-ink)",
  purple: "var(--brand-purple)",
  pink: "var(--brand-pink)",
  gradientBrand: "var(--gradient-brand)",
} as const;

/** Primary accent per top-level practice (ServicesShowcase / services index). */
export const PRACTICE_ACCENT = {
  ai: BRAND.blue,
  staffing: BRAND.orange,
  product: BRAND.green,
} as const;

/** Six-card icon cycle on the homepage “delivery model” section. */
export const BRAND_ICON_PALETTE = [
  BRAND.blue,
  BRAND.orange,
  BRAND.green,
  BRAND.red,
  BRAND.yellow,
  BRAND.blue,
] as const;

/** Homepage testimonial avatar colors (left → right). */
export const TESTIMONIAL_ACCENTS = [BRAND.blue, BRAND.orange, BRAND.green] as const;

/** Homepage case study metric highlights. */
export const CASE_STUDY_ACCENTS = [BRAND.blue, BRAND.green] as const;

export function brandIconGradient(color: string): string {
  return `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 55%, white))`;
}

export function accentAt(index: number): string {
  return BRAND_ICON_PALETTE[index % BRAND_ICON_PALETTE.length]!;
}

export function testimonialAccentAt(index: number): string {
  return TESTIMONIAL_ACCENTS[index % TESTIMONIAL_ACCENTS.length]!;
}

export function caseStudyAccentAt(index: number): string {
  return CASE_STUDY_ACCENTS[index % CASE_STUDY_ACCENTS.length]!;
}
