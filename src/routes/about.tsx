import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  Stat,
  Testimonial,
  CTASection,
  BrandTitle,
} from "@/components/site/Primitives";
import { Target, Cog, Sparkles } from "lucide-react";
import { testimonialAccentAt } from "@/lib/brand-colors";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About — Pure Technology | IT Consulting & Software Development, Pune",
      },
      {
        name: "description",
        content:
          "Pure Technology is a Pune-based IT consulting and software development company founded in 2013, helping enterprises accelerate digital transformation.",
      },
      { property: "og:title", content: "About — Pure Technology" },
      {
        property: "og:description",
        content:
          "Our story, leadership, and values — consulting-led IT solutions from Pune since 2013.",
      },
    ],
  }),
  component: About,
});

const convictions = [
  {
    Icon: Target,
    title: "Outcome-Engineered Solutions",
    body: "We don't deliver features - we deliver measurable outcomes. Every solution is engineered around business KPIs such as efficiency, scalability, cost optimization, and user adoption.",
    accent: "var(--brand-blue)",
  },
  {
    Icon: Cog,
    title: "Built for Real-World Operations",
    body: "Lab-ready solutions often fail in production. We design technology for real users, real traffic, real constraints - ensuring stability, performance, and maintainability in live environments.",
    accent: "var(--brand-orange)",
  },
  {
    Icon: Sparkles,
    title: "Intelligent Automation & AI Readiness",
    body: "We help organizations move beyond experimentation to real-world AI adoption. Our AI-powered solutions and automation frameworks improve efficiency, enable smarter decisions, and unlock operational intelligence.",
    accent: "var(--brand-green)",
  },
];

const leadership = [
  {
    name: "Mr. Anuj Bajaj",
    role: "Founder & Director",
    initials: "AB",
    accent: "var(--brand-blue)",
    image: "/team/anuj-bajaj.jpg",
  },
  {
    name: "Mr. Rajesh Munde",
    role: "Founder & CEO",
    initials: "RM",
    accent: "var(--brand-orange)",
    image: "/team/rajesh-munde.jpg",
  },
  {
    name: "Mr. Parag Thakur",
    role: "Sales Director",
    initials: "PT",
    accent: "var(--brand-green)",
    image: "/team/parag-thakur.jpg",
  },
  {
    name: "Mr. Sumit Gupta",
    role: "VP",
    initials: "SG",
    accent: "var(--brand-red)",
  },
  {
    name: "Mr. Sirish Vispute",
    role: "CTO Advisor",
    initials: "SV",
    accent: "var(--brand-blue)",
  },
  {
    name: "Mr. Govind Innani",
    role: "Advisor",
    initials: "GI",
    accent: "var(--brand-orange)",
  },
  {
    name: "Mr. Jalindra Shinde",
    role: "CTO",
    initials: "JS",
    accent: "var(--brand-green)",
  },
  {
    name: "Rajashree Gandhi",
    role: "CFO",
    initials: "RG",
    accent: "var(--brand-yellow)",
  },
];

const testimonials = [
  {
    quote:
      "I've had a truly wonderful experience working with Pure Technology and his highly capable team across multiple initiatives. Their collaborative approach consistently makes every project successful.",
    name: "Ganesh Natrajan",
    role: "Chairman",
    company: "5F World, Boards",
    initials: "GN",
  },
  {
    quote:
      "The team delivered beyond expectations. Communication was seamless and technical quality was outstanding. I would highly recommend them to any enterprise looking for a reliable development partner.",
    name: "Akash Kale",
    role: "CEO",
    company: "5F World, Boards",
    initials: "AK",
  },
  {
    quote:
      "We evaluated five vendors before choosing this team. On time, on budget, and the code quality is something our internal engineers genuinely admire. A rare find in the outsourcing space.",
    name: "Shubham Sharma",
    role: "Director",
    company: "",
    initials: "SS",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Pure Technology"
        title={
          <>
            Leading IT Consulting & Software Development Company{" "}
            <span className="text-gradient-brand">
              Driving Digital Transformation
            </span>
          </>
        }
        description="Pure Technology is a consulting-led IT solutions company helping enterprises accelerate digital transformation with scalable, secure, and future-ready technology platforms. Founded in Pune, Maharashtra — 2013."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/services">See What We Do</PrimaryButton>
          <GhostButton to="/team">Meet the Team</GhostButton>
        </div>
      </PageHero>

      {/* Story */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-6 rounded-full bg-gradient-brand" />
              Our story
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold leading-tight">
              <BrandTitle>
                We started Pure Technology to build technology that actually delivers.
              </BrandTitle>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
            <p>
              Pure Technology was born out of a simple belief — that technology
              should enable progress, not complexity. We set out to build an
              engineering services company that hired like a product company,
              shipped like a product company, and stayed with clients for the
              long haul.
            </p>
            <p>
              Today, we're a growing team based in Pune, serving startups,
              SMEs, and global enterprises across India, the Middle East,
              Europe, and North America. Our cross-functional teams combine deep
              industry expertise with advanced technologies — from AI and cloud
              to product engineering and IT staffing — to deliver impactful
              digital solutions at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Convictions */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What we believe"
            title="Three pillars that guide how we build and deliver."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {convictions.map(({ Icon, title, body, accent }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{
                    background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 55%, white))`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-display font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="By the numbers"
            title="A snapshot of where Pure Technology is today."
          />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-5">
            <Stat value="2013" label="Founded in Pune, Maharashtra" />
            <Stat value="51–200" label="Team size (employees)" />
            <Stat value="17+" label="Active clients" />
            <Stat
              value="4 regions"
              label="India, Middle East, Europe, North America"
            />
            <Stat value="20+" label="Service offerings across AI, Cloud, Software & Staffing" />
            <Stat value="Pune" label="Headquarters - Hinjawadi" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Leadership"
            title="The team behind Pure Technology."
            description="Founders, advisors, and functional leaders driving delivery across AI, engineering, and client partnerships."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((m) => (
              <div
                key={m.name}
                className="glass-card rounded-2xl p-6 flex items-center gap-4"
              >
                {"image" in m && m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-14 w-14 shrink-0 rounded-2xl object-cover object-top"
                  />
                ) : (
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white font-display font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${m.accent}, color-mix(in oklab, ${m.accent} 55%, white))`,
                    }}
                  >
                    {m.initials}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="font-display font-semibold text-base leading-tight">
                    {m.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="In their words"
            title="What our clients say about working with us."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Testimonial
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                company={t.company}
                initials={t.initials}
                accent={testimonialAccentAt(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Intelligent Together"
        description="Book a free consultation with our team. We'll understand your goals, assess your needs, and recommend the right technology path — no fluff, no lock-in."
        primaryLabel="Book Free Consultation"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
        contactEmail="contact@puretechnology.in"
        contactPhone="+91 83298 49726"
      />
    </>
  );
}
