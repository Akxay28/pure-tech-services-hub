import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe2,
  Clock4,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  Stat,
  ClientMarquee,
  Testimonial,
  CTASection,
  SectionHeader,
  CaseStudyCard,
} from "@/components/site/Primitives";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { HeroCarousel } from "./heroCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Technology — AI, IT Staffing & Product Engineering in India" },
      {
        name: "description",
        content:
          "Pure Technology helps enterprises ship AI products, hire vetted Indian engineers, and build SaaS that scales. Bengaluru-headquartered. Globally trusted.",
      },
      { property: "og:title", content: "Pure Technology — Engineering partner from India" },
      {
        property: "og:description",
        content: "AI solutions, IT staffing, and product engineering for ambitious enterprises.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* <PageHero
        eyebrow="Headquartered in Pune · Serving 13+ countries"
        title={
          <>
            Engineering the next chapter of your business{" "}
            <span className="text-gradient-brand">with India's finest minds.</span>
          </>
        }
        description="Pure Technology partners with enterprise and growth-stage teams to deliver production-grade AI, vetted engineering talent, and full-stack product squads — under one roof, with one accountable team."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Start a project</PrimaryButton>
          <GhostButton to="/services">See what we build</GhostButton>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          <Stat value="13+" label="Years of experience" />
          <Stat value="20+" label="Projects delivered" />
          <Stat value="80+" label="Happy clients" />
          <Stat value="18+" label="Countries delivered to" />
        </div>
      </PageHero> */}

      <HeroCarousel />

      <ClientMarquee />

      {/* How we work — text + video */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-[color-mix(in_oklab,var(--brand-orange)_8%,var(--background))] via-background to-[color-mix(in_oklab,var(--brand-green)_8%,var(--background))] p-6 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-px w-8 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-red)]" />
                  How we work
                </div>
                <h2 className="mt-4 text-4xl lg:text-5xl font-display font-bold leading-[1.05]">
                  Enterprise delivery <br />
                  with <span className="text-gradient-brand">startup speed.</span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  We work as an extension of your internal team combining AI expertise, product
                  engineering, and senior talent to move from idea to execution faster.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  From discovery workshops to production deployment, our teams stay embedded,
                  accountable, and outcome-focused.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <PrimaryButton to="/contact">Watch overview</PrimaryButton>
                  <GhostButton to="/case-studies">See case studies</GhostButton>
                </div>

                {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
                  {[
                    { label: "AI-first mindset", accent: "var(--brand-blue)" },
                    { label: "Outcome driven", accent: "var(--brand-orange)" },
                    { label: "Embedded teams", accent: "var(--brand-green)" },
                    { label: "Transparent communication", accent: "var(--brand-red)" },
                  ].map((f) => (
                    <div key={f.label} className="flex flex-col items-start gap-2">
                      <span
                        className="grid h-8 w-8 place-items-center rounded-full text-white text-xs"
                        style={{
                          background: `linear-gradient(135deg, ${f.accent}, color-mix(in oklab, ${f.accent} 55%, white))`,
                        }}
                      >
                        ✦
                      </span>
                      <span className="text-xs text-muted-foreground leading-snug">{f.label}</span>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Right: video */}
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-soft bg-black">
                {/* <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-2xl shadow-soft bg-black"> */}
                <iframe
                  src="https://www.youtube.com/embed/4DpEGb4HG7w?autoplay=1&mute=1&loop=1&playlist=4DpEGb4HG7w&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0"
                  title="Pure Technology showreel"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      {/* Selected outcomes */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
  <div className="mx-auto max-w-7xl">
    <SectionHeader
      eyebrow="Client outcomes"
      title="Real numbers from recent engagements."
      description="Recent AI deliveries — measured in rupees saved, hours recovered, and trust earned."
    />
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      <CaseStudyCard
        client="Smarter business decisions with data & AI intelligence"
        industry="BFSI"
        image="homeCaseStudy/1 case study.webp"
        challenge="Customer-service agents spent 40% of their time searching across 11 internal knowledge bases for product, policy, and regulatory answers."
        outcome="Built a RAG-powered agent assistant with citation-first answers, role-based access, and a compliance review trail. Rolled out to 3,200 agents across 14 cities in 5 months."
        metrics={[
          { value: "37%", label: "AHT reduction" },
          { value: "92%", label: "Answer acceptance" },
          { value: "₹14 Cr", label: "Annual ops savings" },
        ]}
        accent="var(--brand-blue)"
      />

      <CaseStudyCard
        client="Lumenpath Health"
        industry="AI Calling"
        image="homeCaseStudy/2 case study.webp"
        challenge="A digital-health platform needed to summarise multi-page patient histories for clinicians, but earlier LLM attempts hallucinated medications and dosages."
        outcome="Designed a constrained generation pipeline with structured extraction, a medication knowledge graph as a hard ground-truth layer, and a clinician feedback loop driving weekly evals."
        metrics={[
          { value: "0", label: "Med hallucinations in eval" },
          { value: "4.7/5", label: "Clinician NPS" },
          { value: "11×", label: "Faster chart review" },
        ]}
        accent="var(--brand-orange)"
      />

      <CaseStudyCard
        client="Lumenpath Health"
        industry="HealthTech"
        image="homeCaseStudy/3 case study.webp"
        challenge="A digital-health platform needed to summarise multi-page patient histories for clinicians, but earlier LLM attempts hallucinated medications and dosages."
        outcome="Designed a constrained generation pipeline with structured extraction, a medication knowledge graph as a hard ground-truth layer, and a clinician feedback loop driving weekly evals."
        metrics={[
          { value: "0", label: "Med hallucinations in eval" },
          { value: "4.7/5", label: "Clinician NPS" },
          { value: "11×", label: "Faster chart review" },
        ]}
        accent="var(--brand-green)"
      />

      

    </div>
  </div>
</section>

      {/* Why Pure */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why teams pick Pure"
            title="A delivery model built for enterprise trust, startup velocity."
            description="We sit in the middle of the diagram — close enough to your business to think like an owner, big enough to staff and deliver at enterprise scale."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: ShieldCheck,
                title: "Compliance-first delivery",
                body: "SOC 2 Type II aligned process, ISO 27001 controls, DPDP-ready data handling. Your security team will sleep well.",
                accent: "var(--brand-blue)",
              },
              {
                Icon: Sparkles,
                title: "Senior by default",
                body: "Average 9 years of experience on every squad. No bait-and-switch — the engineers you meet are the engineers who ship.",
                accent: "var(--brand-orange)",
              },
              {
                Icon: Globe2,
                title: "India-rooted, globally minded",
                body: "Bengaluru, Hyderabad and Pune talent pools, with project leads working in your timezone — North America, EMEA, APAC.",
                accent: "var(--brand-green)",
              },
              {
                Icon: Clock4,
                title: "Two-week launch cycles",
                body: "Demoable progress every fortnight. We don't disappear for three months and hand over a tarball.",
                accent: "var(--brand-red)",
              },
              {
                Icon: HeartHandshake,
                title: "Partnership, not ticket-work",
                body: "Average client tenure is 3.4 years. We invest in understanding your business, not just closing JIRAs.",
                accent: "var(--brand-yellow)",
              },
              {
                Icon: TrendingUp,
                title: "Outcomes, measured",
                body: "Every engagement comes with a defined success metric. We share dashboards, not just status reports.",
                accent: "var(--brand-blue)",
              },
            ].map(({ Icon, title, body, accent }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{
                    background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 55%, white))`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-display font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {/* <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How we engage"
            title="Predictable on the outside. Crafted on the inside."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Discover",
                body: "A 45-minute working session to understand goals, constraints, and what success looks like. No deck-ware.",
              },
              {
                step: "02",
                title: "Shape",
                body: "A 5–10 day shaping sprint: lightweight architecture, team shape, milestones, and a fixed-price option where it fits.",
              },
              {
                step: "03",
                title: "Build",
                body: "A senior-led squad ships in 2-week cycles with demos, written changelogs, and a shared dashboard.",
              },
              {
                step: "04",
                title: "Sustain",
                body: "On-call rotations, SLA-backed support, and a quarterly business review focused on outcomes, not hours.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-border bg-surface p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Step {s.step}
                </div>
                <div className="mt-3 text-xl font-display font-semibold">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="In their words"
            title="The kind of feedback that gets us out of bed."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            <Testimonial
              quote="We evaluated five vendors before choosing this team. On time, on budget, and the code quality is something our internal engineers genuinely admire. A rare find in the outsourcing space.."
              name="Shubham Sharma"
              role="VP Engineering"
              company="FINCORE"
              initials="SS"
              accent="var(--brand-blue)"
            />
            <Testimonial
              quote="I've had a truly wonderful experience working with Pure Technology and his highly capable team across multiple initiatives. Their collaborative approach consistently makes every project successful."
              name="Ganesh Natrajan"
              role="Chairman"
              company="5F World"
              initials="GN"
              accent="var(--brand-orange)"
            />
            <Testimonial
              quote="The team delivered beyond expectations. Communication was seamless and technical quality was outstanding. I would highly recommend them to any enterprise looking for a reliable development partner."
              name="Akash Kale"
              role="CTO"
              company="NovaTech Solutions"
              initials="AK"
              accent="var(--brand-green)"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build something your customers brag about."
        description="Tell us where you are, where you'd like to be, and the constraints in between. We'll come back in 48 hours with a concrete plan."
      />
    </>
  );
}
