import { SectionHeader } from "./Primitives";

const GCC_MODELS = [
    {
      title: "Captive Model",
      bullets: [
        "Full ownership & control",
        "In-house IP management",
        "Direct talent acquisition",
      ],
      icon: (
        // Building / ownership icon
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: "Build-Operate-Transfer",
      bullets: [
        "Accelerated time-to-market",
        "Partnered risk mitigation",
        "Gradual ownership transfer",
      ],
      icon: (
        // Handshake / transfer icon
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 21l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-8.0z" />
        </svg>
      ),
    },
    {
      title: "AI Process Automation",
      bullets: [
        "Outcome-based delivery",
        "Vendor-led management",
        "Elastic scalability",
      ],
      icon: (
        // CPU / AI chip icon
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      ),
    },
  ];
  
  export function GCCModelsSection({ accent = "var(--brand-blue)" }: { accent?: string }) {
  
    return (
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
  
          {/* Heading — matches SectionHeader style from ServicePage */}
          <div className="mx-auto max-w-7xl">    
                    <SectionHeader
            eyebrow="GCC Models"
            title="Different Models of GCC Setup."
            description="Choosing the right operational framework for your maturity level."
          />
          </div>
  
          {/* Cards — same rounded-2xl border style as Capabilities section */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GCC_MODELS.map((model) => (
              <div
                key={model.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover glow — same as TechExpertiseSection */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, color-mix(in oklab, ${accent} 10%, transparent), transparent 65%)`,
                  }}
                />
  
                {/* Icon + Title — same pattern as Capabilities cards */}
                <div className="relative z-10 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-sm"
                    style={{
                        background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 60%, #0ea5e9))`,
                      }}
                  >
 {model.icon}
                  </span>
                  <h3 className="text-base font-display font-semibold" style={{ color: accent }}>
                    {model.title}
                  </h3>
                </div>
  
                {/* Divider */}
                <div className="relative z-10 my-5 h-px bg-border" />
  
                {/* Bullets — same dot style as engagement model bullets in ServicePage */}
                <ul className="relative z-10 space-y-3">
                  {model.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
  
                {/* Bottom accent bar — same as TechExpertiseSection cards */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{ background: "var(--gradient-brand)" }}
                />
              </div>
            //     <div
            //       className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
            //       style={{ background: "var(--gradient-brand)" }}
            //     />
            //   </div>
            ))}
          </div>
        </div>
      </section>
    );
  }