import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Users, Boxes } from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  CTASection,
  ClientMarquee,
} from "@/components/site/Primitives";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AI, IT Staffing & Product Engineering | Pure Technology" },
      {
        name: "description",
        content:
          "Three connected practices — AI Solutions, IT Staffing, and Product Engineering — delivered by senior India-based engineers.",
      },
      { property: "og:title", content: "Pure Technology — Services" },
      {
        property: "og:description",
        content:
          "Explore Pure Technology's AI, staffing, and product engineering offerings.",
      },
    ],
  }),
  component: ServicesIndex,
});

const detailed = [
  {
    to: "/services/ai-solutions" as const,
    title: "AI Solutions",
    Icon: Brain,
    accent: "var(--brand-blue)",
    blurb:
      "From RAG-powered copilots to multi-agent automation, we ship AI that survives contact with real users, real data, and real compliance teams.",
    items: [
      "GenAI strategy & opportunity sizing",
      "RAG, fine-tuning, and evals",
      "Agentic workflows & copilots",
      "MLOps, observability, and guardrails",
      "Computer vision & document AI",
    ],
  },
  {
    to: "/services/it-staffing" as const,
    title: "IT Staffing",
    Icon: Users,
    accent: "var(--brand-orange)",
    blurb:
      "A pre-vetted bench of senior Indian engineers, designers, and PMs — onboarded in days with a transparent commercial model.",
    items: [
      "Contract & contract-to-hire",
      "Full-time direct placement",
      "Managed pods (engineer + lead + PM)",
      "Specialist niches: AI, DevOps, Data, Mobile",
      "Replacement guarantee within 30 days",
    ],
  },
  {
    to: "/services/product-engineering" as const,
    title: "Product Engineering",
    Icon: Boxes,
    accent: "var(--brand-green)",
    blurb:
      "End-to-end squads that take an idea from a Figma file to a SOC 2-friendly SaaS — design, web, mobile, backend, and DevOps under one roof.",
    items: [
      "Product discovery & design",
      "Web & mobile engineering",
      "Cloud-native backends",
      "DevOps, SRE, and platform",
      "QA automation & performance",
    ],
  },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            One partner. Three practices.{" "}
            <span className="text-gradient-brand">Zero hand-offs.</span>
          </>
        }
        description="AI Solutions, IT Staffing, and Product Engineering — designed to plug into one another so your roadmap doesn't stall at the seams between vendors."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Discuss your roadmap</PrimaryButton>
          <GhostButton to="/about">How we work</GhostButton>
        </div>
      </PageHero>

      <ServicesShowcase />

      <ClientMarquee />

      <section className="px-5 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeader
            eyebrow="Deep dive"
            title="Pick the practice you'd like to explore."
            description="Each service has a dedicated page with our methodology, case studies, pricing model, and the questions enterprises actually ask us."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {detailed.map(({ to, title, Icon, accent, blurb, items }) => (
              <Link
                key={to}
                to={to}
                className="group relative glass-card rounded-3xl p-7 overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div
                  className="absolute -top-12 -right-12 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: accent }}
                />
                <div className="relative">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-soft"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 55%, white))`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-display font-bold">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {blurb}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                    {items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ background: accent }}
                        />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                    Explore {title}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which practice fits? Let's untangle it together."
        description="Send us a paragraph about what you're trying to do. We'll respond within 48 hours with a recommended team shape and engagement model."
      />
    </>
  );
}
