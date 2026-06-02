import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Target, Cog, Sparkles } from "lucide-react";
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
import { testimonialAccentAt } from "@/lib/brand-colors";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pure Technology | IT Consulting & Software Development, Pune" },
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
  { name: "Mr. Anuj Bajaj", role: "Founder & Director", initials: "AB", accent: "var(--brand-blue)", image: "/team/anuj-bajaj.jpg" },
  { name: "Mr. Rajesh Munde", role: "Founder & CEO", initials: "RM", accent: "var(--brand-orange)", image: "/team/rajesh-munde.jpg" },
  { name: "Mr. Parag Thakur", role: "Sales Director", initials: "PT", accent: "var(--brand-green)", image: "/team/parag-thakur.jpg" },
  { name: "Mr. Sumit Gupta", role: "VP", initials: "SG", accent: "var(--brand-red)", image: "/team/Sumit-G.webp" },
  { name: "Mr. Shirish Vispute", role: "CTO Advisor", initials: "SV", accent: "var(--brand-blue)", image: "/team/Shirish Vispute.jpg" },
  { name: "Mr. Govind Innani", role: "Advisor", initials: "GI", accent: "var(--brand-orange)", image: "/team/govindInnani.png" },
  { name: "Mr. Jalindra Shinde", role: "CTO", initials: "JS", accent: "var(--brand-green)", image: "/team/jalindrashinde.png" },
  { name: "Rajashree Gandhi", role: "CFO", initials: "RG", accent: "var(--brand-yellow)", image: "/team/rajashreeGandhi.jpg" },
];
 

const accentColors = [
  "var(--brand-red)",
  "var(--brand-blue)",
  "var(--brand-orange)",
  "var(--brand-green)",
  "var(--brand-yellow)",
];

const testimonials = [
  {
    quote: "The tire inspection and uniformity platform exceeded our expectations. The team understood our manufacturing requirements deeply and delivered a solution that integrated seamlessly into our production line.",
    name: "Rajendra Patel",
    role: "Engineering Lead",
    company: "Bridgestone",
    initials: "RP",
    project: "PROJECT: Tire Inspection & Uniformity",
    // avatar: "/testimonials/rajendra-patel.jpg",
  },
  {
    quote: "The weapon management system built by Pure Technology brought much-needed precision and accountability to our depot operations. Reliable, secure, and built to defence-grade standards.",
    name: "Capt Praveen Sab",
    role: "Captain",
    company: "29 Forward Ammunition Depot",
    initials: "PS",
    project: "Weapon Management System",
    // avatar: "/testimonials/praveen-sab.jpg",
  },
  {
    quote: "Pure Technology delivered the GED software and pulley concentricity solution with exceptional technical depth. Their team grasped our engineering requirements quickly and delivered a robust, production-ready system.",
    name: "Ritesh Bhole",
    role: "Deputy General Manager",
    company: "Schindler",
    initials: "RB",
    project: "GED Software & Pulley Concentricity",
   avatar: "/testimonial/riteshbhole.jpg",
  },
  {
    quote: "The web portal and cybersecurity solution delivered by Pure Technology gave us the reliability and security compliance we needed for government-grade operations. Highly professional team.",
    name: "J N Tulekar",
    role: "Officer",
    company: "PCDA (O)",
    initials: "JT",
    project: "Web Portal & Cyber Security",
    // avatar: "/testimonials/jn-tulekar.jpg",
  },
  {
    quote: "Pure Technology built a robust vehicle management system that streamlined our fleet operations significantly. Their technical expertise and timely delivery made the entire engagement smooth.",
    name: "Madhusudan Sadani",
    role: "Manager",
    company: "Sandvik",
    initials: "MS",
    project: "Vehicle Management System",
    // avatar: "/testimonials/madhusudan-sadani.jpg",
  },
  {
    quote: "The AI calling solution integrated with Zoho transformed how we handle client outreach. Pure Technology understood our business needs precisely and delivered a seamless, intelligent workflow.",
    name: "Prabin",
    role: "Director",
    company: "AA Consultancy",
    initials: "PR",
    project: "AI Calling with Zoho Integration",
    // avatar: "/testimonials/prabin.jpg",
  },
  {
    quote: "The AI-based quotation paper generation and interview system has revolutionized our academic processes. Pure Technology brought innovation that we didn't think was possible in the education space.",
    name: "Dr Sushant Patil",
    role: "Director",
    company: "DY Patil Educational Federation",
    initials: "SP",
    project: "AI Quotation Paper & Interview",
    avatar: "/testimonial/sushantpatil.jpg",
  },
  {
    quote: "The student portal and AI interview system built by Pure Technology has dramatically improved our student engagement and administrative efficiency. A truly future-ready solution.",
    name: "Dr Sajid Alvi",
    role: "Director",
    company: "DIMR",
    initials: "SA",
    project: "Student Portal & AI Interview",
    // avatar: "/testimonials/sajid-alvi.jpg",
  },
  {
    quote: "Pure Technology delivered our emailer platform with great attention to detail and design quality. The solution was clean, scalable, and exactly what our media operations needed.",
    name: "Mrunal Pawar",
    role: "Manager",
    company: "Sakal Media",
    initials: "MP",
    project: "Emailer Platform",
    // avatar: "/testimonials/mrunal-pawar.jpg",
  },
  {
    quote: "The internal AI agent built by Pure Technology has streamlined our processes beyond expectations. It handles complex workflows intelligently and has saved our team countless hours.",
    name: "Sagar Babar",
    role: "Manager",
    company: "Comsense Technologies",
    initials: "SB",
    project: "AI Agent for Internal Process",
    avatar: "/testimonial/sagarbabar.png",
  },
  {
    quote: "Pure Technology delivered a payroll and expense management system that perfectly fits our organizational scale. Reliable, accurate, and easy for our HR team to operate.",
    name: "Mr Khan Ahmed",
    role: "Manager",
    company: "Mahabeej",
    initials: "KA",
    project: "Payroll & Expense Management",
    // avatar: "/testimonials/khan-ahmed.jpg",
  },
  {
    quote: "The AI-based newsletter solution built for Reliance has transformed internal communications by automating content creation and distribution. An intelligent system that saves significant editorial effort.",
    name: "Mrs Kaval Bajwa",
    role: "Manager",
    company: "Reliance Industries",
    initials: "KB",
    project: "AI Newsletter",
    // avatar: "/testimonials/kaval-bajwa.jpg",
  },
  {
    quote: "The lead portal built by Pure Technology is intuitive, fast, and exactly what our sales team needed. It has improved our lead tracking and conversion workflows considerably.",
    name: "Rajashree Gandhi",
    role: "Director",
    company: "Botonym",
    initials: "RG",
    project: "Lead Portal",
    avatar: "/team/rajashreeGandhi.jpg",

    // avatar: "/team/rajashreeGandhi.jpg",
  },
];

 export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});  // ← keyed by name
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % total]);

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-3 gap-5">
        {visible.map((t, i) => (
          <Testimonial
            key={`${active}-${i}`}
            quote={t.quote}
            name={t.name}
            role={t.role}
            company={t.company}
            initials={t.initials}
            accent={accentColors[(active + i) % accentColors.length]}
            project={t.project}
            // Pass avatar only if it hasn't errored before
            avatar={imgErrors[t.name] ? undefined : t.avatar}
            onAvatarError={() =>
              setImgErrors((prev) => ({ ...prev, [t.name]: true }))
            }
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full border border-border bg-surface/60 flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-foreground" : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="h-10 w-10 rounded-full border border-border bg-surface/60 flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}


function About() {
  return (
    <>
      <PageHero
        eyebrow="About Pure Technology"
        title={
          <>
            Leading IT Consulting & Software Development Company{" "}
            <span className="text-gradient-brand">Driving Digital Transformation</span>
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
              Pure Technology was born out of a simple belief — that technology should enable
              progress, not complexity. We set out to build an engineering services company that
              hired like a product company, shipped like a product company, and stayed with clients
              for the long haul.
            </p>
            <p>
              Today, we're a growing team based in Pune, serving startups, SMEs, and global
              enterprises across India, the Middle East, Europe, and North America. Our
              cross-functional teams combine deep industry expertise with advanced technologies —
              from AI and cloud to product engineering and IT staffing — to deliver impactful
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
              <div key={title} className="rounded-2xl border border-border bg-surface p-6">
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
            <Stat value="4 regions" label="India, Middle East, Europe, North America" />
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
              <div key={m.name} className="glass-card rounded-2xl p-6 flex items-center gap-4">
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
                  <div className="font-display font-semibold text-base leading-tight">{m.name}</div>
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
          <TestimonialCarousel />
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
