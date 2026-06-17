import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Sparkles } from "lucide-react";
import {
  CTASection,
  GhostButton,
  PageHero,
  PrimaryButton,
  SectionHeader,
  Stat,
} from "@/components/site/Primitives";
import { BrandIconBox } from "@/components/site/Primitives";
import { brandIconGradient, accentAt } from "@/lib/brand-colors";
import { solutionSlugs, subServices } from "@/lib/sub-services";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions - Industrial AI, Inspection & Safety | Pure Technology" },
      {
        name: "description",
        content:
          "Packaged Industrial AI solutions for visual inspection, mobile inspection, workplace safety, people counting, operational sustainability, and predictive maintenance.",
      },
      { property: "og:title", content: "Industrial AI Solutions - Pure Technology" },
      {
        property: "og:description",
        content:
          "Explore production-ready AI solutions for manufacturing, facilities, safety, and field operations.",
      },
    ],
  }),
  component: SolutionsIndex,
});

const solutionCards = solutionSlugs.map((slug) => ({
  slug,
  ...subServices[slug],
}));

function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Packaged AI solutions for{" "}
            <span className="text-gradient-brand">real-world operations.</span>
          </>
        }
        description="Industrial AI Solutions bring computer vision, mobile workflows, IoT data, and operational dashboards into focused use cases your teams can pilot, measure, and scale."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Discuss a solution</PrimaryButton>
          <GhostButton to="/services">Explore services</GhostButton>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          <Stat value="6" label="Solution pages" />
          <Stat value="4-8 wks" label="Pilot window" />
          <Stat value="Edge + Cloud" label="Deployment patterns" />
          <Stat value="Ops-first" label="Designed for action" />
        </div>
      </PageHero>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Subcategory"
            title="Industrial AI Solutions"
            description="These are not broad consulting pages. Each one is a packaged operational solution with a focused use case, implementation path, and measurable outcome."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map(({ slug, eyebrow, title, lede, Icon }, index) => {
              const accent = accentAt(index);
              return (
                <Link
                  key={slug}
                  to="/solutions/$slug"
                  params={{ slug }}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <BrandIconBox color={accent} size="md">
                    <Icon className="h-5 w-5" />
                  </BrandIconBox>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-display font-bold leading-tight">{title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {lede}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <BrandIconBox color="var(--brand-blue)" size="lg" className="shadow-soft">
              <Factory className="h-6 w-6" />
            </BrandIconBox>
            <h2 className="mt-5 text-3xl font-display font-bold leading-tight lg:text-4xl">
              Where solutions fit beside services.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Services describe how Pure Technology builds. Solutions describe the operational
              problems we can package and deploy faster because the patterns are already known.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              "Start with one measurable plant, site, zone, or inspection workflow.",
              "Use available cameras, sensors, mobile forms, and business systems where possible.",
              "Pilot against a clear metric before scaling to more assets, lines, or locations.",
              "Connect alerts and insights to owners so dashboards become action, not theatre.",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-surface p-5">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ background: brandIconGradient(accentAt(index)) }}
                >
                  {index + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-surface p-8 sm:p-10 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Need something nearby?
              </div>
              <h2 className="mt-4 text-2xl font-display font-bold sm:text-3xl">
                We can shape a new solution around your operation.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                If your use case does not fit these six pages cleanly, we can scope it through AI
                Strategy, Custom AI Development, or AI Integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <GhostButton to="/services/ai-strategy-consulting">AI Strategy</GhostButton>
              <GhostButton to="/services/custom-ai-development">Custom AI</GhostButton>
              <GhostButton to="/services/ai-integration">AI Integration</GhostButton>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have an operational AI use case in mind?"
        description="Tell us the site, workflow, current data sources, and the metric you want to improve. We will help you pick the right pilot shape."
      />
    </>
  );
}
