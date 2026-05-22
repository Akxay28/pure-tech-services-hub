import { SectionHeader, BrandIconBox } from "./Primitives";
import { accentAt } from "@/lib/brand-colors";

const GCC_MODELS = [
  {
    title: "Captive Model",
    bullets: [
      "Full ownership & control",
      "In-house IP management",
      "Direct talent acquisition",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
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

export function GCCModelsSection() {
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="GCC Models"
          title="Different models of GCC setup."
          description="Choosing the right operational framework for your maturity level."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GCC_MODELS.map((model, i) => {
            const color = accentAt(i);
            return (
              <div
                key={model.title}
                className="rounded-2xl border border-border bg-surface p-6 hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <BrandIconBox color={color} size="md">
                    {model.icon}
                  </BrandIconBox>
                  <h3 className="text-base font-display font-semibold">
                    {model.title}
                  </h3>
                </div>

                <div className="my-5 h-px bg-border" />

                <ul className="space-y-2.5">
                  {model.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
