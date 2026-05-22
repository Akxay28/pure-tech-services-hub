import { SectionHeader } from "./Primitives";

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
    const accent = "var(--brand-blue)";
  
    return (
      <section className="px-5 lg:px-8 py-20 bg-surface">
        <div className="mx-auto max-w-7xl">
  
          {/* Heading */}
          <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="GCC in 12 weeks"
            title="How to set up a GCC in 12 weeks."
            description="A step-by-step guide to setting up a GCC in 12 weeks."
          />
          </div>
  
          {/* Step Cards */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GCC_STEPS.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex flex-col items-center text-center rounded-2xl border border-border bg-surface pt-10 pb-8 px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft overflow-hidden"
              >
                {/* Number badge */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white text-xl font-bold shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 60%, #0ea5e9))`,
                  }}
                >
                  {i + 1}
                </div>
  
                {/* Title */}
                <h3
                  className="mt-6 text-base font-display font-bold tracking-tight"
                  style={{ color: accent }}
                >
                  {item.title}
                </h3>
  
                {/* Body */}
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
  
                {/* Bottom border accent — always visible, matches screenshot */}
                <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-2xl">
  <div
    className="h-full w-full animate-[gradientFlow_3s_linear_infinite]"
    style={{
      background: "var(--gradient-brand)",
      backgroundSize: "200% 100%",
    }}
  />
</div>
                </div>
            ))}
          </div>
        </div>
      </section>
    );
  }