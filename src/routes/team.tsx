import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/Primitives";
import { TeamContactCard } from "@/components/site/TeamContactCard";
import { TEAM_PAGE_CONTACTS } from "@/lib/team-contacts";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Pure Technology" },
      {
        name: "description",
        content:
          "Connect with Pure Technology — AI consulting, staff augmentation, and sales leadership.",
      },
      { property: "og:title", content: "Our Team — Pure Technology" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            Connect with{" "}
            <span className="text-gradient-brand">our leadership team.</span>
          </>
        }
        description="Reach the right person for AI strategy, team scaling, or partnership conversations. Email or LinkedIn links open directly from each profile."
      />

      <section className="px-5 mt-25 lg:px-8 pb-20">
        <div className="mx-auto max-w-2xl space-y-4">
          {TEAM_PAGE_CONTACTS.map((member, index) => (
            <TeamContactCard
              key={member.id}
              member={member}
              accentIndex={index}
              variant="page"
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Prefer a general inquiry?"
        description="Use our contact form and we'll route you to the right lead within one business day."
      />
    </>
  );
}
