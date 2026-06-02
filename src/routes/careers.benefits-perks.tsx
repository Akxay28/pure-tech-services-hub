import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Gift,
  HeartPulse,
  Home,
  Laptop,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import {
  BrandIconBox,
  CTASection,
  PageHero,
  SectionHeader,
} from "@/components/site/Primitives";
import { accentAt, BRAND } from "@/lib/brand-colors";

export const Route = createFileRoute("/careers/benefits-perks")({
  head: () => ({
    meta: [
      { title: "Benefits & Perks — Pure Technology Careers" },
      {
        name: "description",
        content:
          "Health support, flexible work, learning budgets, and perks for Pure Technology team members in Pune and remote across India.",
      },
      { property: "og:title", content: "Benefits & Perks — Pure Technology" },
    ],
  }),
  component: BenefitsPerksPage,
});

const benefitCategories = [
  {
    title: "Health & wellbeing",
    items: [
      {
        Icon: HeartPulse,
        title: "Health support",
        body: "Medical coverage and wellbeing support structured for you and your dependents — details shared during onboarding.",
      },
      {
        Icon: ShieldCheck,
        title: "Stable, transparent policies",
        body: "Clear leave, attendance, and benefits documentation — no surprises when you need time off or support.",
      },
    ],
  },
  {
    title: "Flexibility",
    items: [
      {
        Icon: Home,
        title: "Hybrid & remote options",
        body: "Role-dependent flexibility — many teams blend Pune office days with remote focus time where delivery allows.",
      },
      {
        Icon: CalendarDays,
        title: "Balanced scheduling",
        body: "Planned releases and client commitments — with room for personal priorities when communicated early.",
      },
    ],
  },
  {
    title: "Growth & learning",
    items: [
      {
        Icon: BookOpen,
        title: "Learning budgets",
        body: "Courses, certifications, and conference support aligned to your role — AI, cloud, product, and engineering tracks.",
      },
      {
        Icon: Laptop,
        title: "Tools & equipment",
        body: "Hardware and software you need to do your best work — provisioned for engineering and delivery roles.",
      },
    ],
  },
  {
    title: "Recognition",
    items: [
      {
        Icon: Gift,
        title: "Perks & celebrations",
        body: "Festival bonuses, team events, and milestone recognition — because sustained delivery deserves acknowledgment.",
      },
      {
        Icon: Wallet,
        title: "Competitive compensation",
        body: "Market-aligned packages with clarity on structure — discussed openly during your offer conversation.",
      },
    ],
  },
];

function BenefitsPerksPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Benefits & Perks"
        title={
          <>
            Health, Flexibility, And{" "}
            <span className="text-gradient-brand">Learning That Keeps You Growing.</span>
          </>
        }
        description="We package benefits around how people actually work — support for health, room to balance life and delivery, and budgets that help you stay current in a fast-moving industry."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition-opacity hover:opacity-90"
          >
            View Open Roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/careers/life-at-pure-technology"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Life at Pure Technology
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {benefitCategories.map((category) => (
            <div key={category.title}>
              <SectionHeader
                eyebrow="Benefits"
                title={category.title}
                description="Specific eligibility may vary by role and tenure — your recruiter will walk through the full package."
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {category.items.map(({ Icon, title, body }, index) => (
                  <article key={title} className="glass-card rounded-3xl p-7">
                    <BrandIconBox color={accentAt(index)}>
                      <Icon className="h-5 w-5" />
                    </BrandIconBox>
                    <h3 className="mt-5 text-xl font-display font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface-muted/60 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <BrandIconBox color={BRAND.blue} className="mx-auto">
            <Gift className="h-5 w-5" />
          </BrandIconBox>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Benefits evolve as we grow. During hiring, we share the latest policy summary for your
            role — including health coverage, leave, learning support, and any role-specific perks.
          </p>
          <a
            href="mailto:hr@puretechnology.in"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-80"
          >
            Questions? Email hr@puretechnology.in
          </a>
        </div>
      </section>

      <CTASection
        title="See If There Is A Role For You."
        description="Explore open positions or learn more about our culture and work environment."
        primaryLabel="Open Roles"
        primaryTo="/careers"
        secondaryLabel="Life at Pure Technology"
        secondaryTo="/careers/life-at-pure-technology"
      />
    </>
  );
}
