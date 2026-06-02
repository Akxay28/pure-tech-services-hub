import { SectionHeader } from "./Primitives";
import { accentAt, brandIconGradient } from "@/lib/brand-colors";

const GCC_STEPS = [
  {
    title: "Strategy & Planning",
    body: "Location analysis and business case finalization.",
  },
  {
    title: "Legal & Real Estate",
    body: "Entity setup and workspace procurement.",
  },
  {
    title: "Talent Acquisition",
    body: "Leadership hiring and skill mapping.",
  },
  {
    title: "Operations Live",
    body: "IT infrastructure ready and first team onboarded.",
  },
];

export function GCCIn12WeeksSection() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="GCC in 12 weeks"
          title="How to set up a GCC in 12 weeks."
          description="A step-by-step guide to standing up your captive center — from strategy through first engineers on the floor."
        />

        <div className="mt-12 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-border" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GCC_STEPS.map((item, i) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
              >
                <div
                  className="relative z-10 h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-white"
                  style={{ background: brandIconGradient(accentAt(i)) }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
