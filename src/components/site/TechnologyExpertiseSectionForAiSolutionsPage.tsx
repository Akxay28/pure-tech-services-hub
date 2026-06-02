import React, { ReactNode, useState } from "react";
import { accentAt, brandIconGradient, BRAND } from "@/lib/brand-colors";

export interface TechCard {
  role: string;
  level: string;
  category: string;
  tab: string;
  tech: string[];
}

export interface TechTab {
  label: string;
  cards: Omit<TechCard, "tab">[];
}

interface Props {
  accent?: string;
  heading?: ReactNode;
  subheading?: string;
  tabs: TechTab[];
}

export function TechnologyExpertiseSection({
  accent = BRAND.blue,
  heading = (
    <>
      Technologies Your Teams{" "}
      <span className="text-gradient-brand">Already Trust.</span>
    </>
  ),
  subheading = "We build teams around modern engineering ecosystems ensuring every developer is aligned with your stack, workflows, and delivery standards.",
  tabs,
}: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label ?? "");

  const activeCards = tabs.find((t) => t.label === activeTab)?.cards ?? [];

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/40 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-12 rounded-full"
              style={{ background: BRAND.gradientBrand }}
            />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Technology Expertise
            </span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
  {heading}
</h2>


          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {tabs.map((tab, tabIndex) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.label
                  ? "text-white border-transparent"
                  : "border-border bg-surface hover:bg-secondary"
              }`}
              style={
                activeTab === tab.label
                  ? { background: brandIconGradient(accentAt(tabIndex)) }
                  : {}
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activeCards.map((card, cardIndex) => {
            const cardAccent = accentAt(cardIndex);
            return (
            <div
              key={card.role}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, color-mix(in oklab, ${cardAccent} 14%, transparent), transparent 60%)` }}
              />
              <div className="flex items-start justify-between relative z-10">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: `color-mix(in oklab, ${cardAccent} 10%, white)` }}
                >
                  <div className="h-3 w-3 rounded-full" style={{ background: cardAccent }} />
                </div>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {card.level}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="mt-8 text-xl font-display font-semibold tracking-tight">{card.role}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.category}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium bg-surface-muted/70"
                      style={{ color: cardAccent }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: brandIconGradient(cardAccent) }}
              />
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}