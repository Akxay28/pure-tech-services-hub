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

                <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[color:var(--brand-purple)]/60">
          the above image is only for the sample purpose, we can add all our team members in this page if we want, or we can remove this page also waiting for the confirmation from Anuj sir{" "}
          {/* <code className="rounded bg-[color:var(--brand-pink-soft)]/60 px-1.5 py-0.5 text-xs">
            NAV_TEAM_CONTACTS
          </code> */}
          {/* . Add more profiles only in{" "}
          <code className="rounded bg-[color:var(--brand-pink-soft)]/60 px-1.5 py-0.5 text-xs">
            TEAM_PAGE_EXTRA_CONTACTS
          </code>{" "}
          inside{" "}
          <code className="rounded bg-[color:var(--brand-pink-soft)]/60 px-1.5 py-0.5 text-xs">
            src/lib/team-contacts.ts
          </code> */}
          .
        </p>
      </section>

      <CTASection
        title="Prefer a general inquiry?"
        description="Use our contact form and we'll route you to the right lead within one business day."
      />
    </>
  );
}
