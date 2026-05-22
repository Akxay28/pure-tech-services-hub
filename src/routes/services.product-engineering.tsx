import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

export const Route = createFileRoute("/services/product-engineering")({
  head: () => ({
    meta: [
      { title: "Product Engineering — End-to-End SaaS Squads | Pure Technology" },
      {
        name: "description",
        content:
          "Full-stack product squads — design, web, mobile, backend, DevOps — building SaaS that scales globally. Two-week launch cycles, SOC 2-aligned delivery.",
      },
      { property: "og:title", content: "Product Engineering — Pure Technology" },
      {
        property: "og:description",
        content:
          "From Figma to enterprise-ready SaaS, in two-week cycles. Senior engineers, accountable delivery.",
      },
    ],
  }),
  component: ProductEngineering,
});

function ProductEngineering() {
  return (
    <ServicePage
      eyebrow="Product Engineering"
      title={
        <>
          Ship like a startup.{" "}
          <span className="text-gradient-brand">Operate like an enterprise.</span>
        </>
      }
      lede="We build SaaS from blank Figma to first paying customer — and then keep going. Senior squads that own the whole stack: design, web, mobile, backend, DevOps, QA, and SRE."
      accent="var(--brand-green)"
      heroStats={[
        { value: "70+", label: "Products shipped" },
        { value: "2 wks", label: "Demo cadence" },
        { value: "99.95%", label: "Avg. SLA delivered" },
        { value: "3.4 yrs", label: "Avg. client tenure" },
      ]}
      intro={{
        heading:
          "Product engineering as a single accountable squad — not five vendors stitched with status meetings.",
        paragraphs: [
          "Most product engineering 'partners' specialise in one slice — design, or frontend, or backend — and leave you to integrate the rest. The cost shows up in the seams: missed scope, finger-pointing, and a roadmap that quietly slips by months.",
          "Pure's product squads are built differently. A single squad covers product design, web, mobile, backend, DevOps, and QA — led by a senior tech lead who is accountable end-to-end. We don't hand you off across functions.",
          "We work in 2-week cycles with a demo every Friday and a written changelog. By the end of any month, you've seen the work twice, and you've shipped something to real users at least once.",
        ],
      }}
      capabilities={[
        {
          title: "Product discovery & design",
          body: "Lightweight discovery sprints, user research with your real customers, UX/UI design, and a clickable prototype before we write a line of code.",
        },
        {
          title: "Web engineering",
          body: "Next.js, React, TanStack, Remix, Astro — with a strong opinion about performance budgets, accessibility, and SEO from day one.",
        },
        {
          title: "Mobile engineering",
          body: "Native iOS and Android, plus React Native and Flutter where it earns its keep. Released through your stores with crash-rate SLAs.",
        },
        {
          title: "Cloud-native backends",
          body: "Go, TypeScript, Python, Java, .NET. Event-driven on AWS, GCP, Azure — with a strong bias to managed services and boring tech.",
        },
        {
          title: "DevOps, SRE & platform",
          body: "IaC with Terraform / Pulumi, GitOps, observability with OpenTelemetry, and on-call rotations that meet your SLA.",
        },
        {
          title: "QA automation & performance",
          body: "Playwright / Cypress / Detox automation, load testing, accessibility audits, and a performance budget enforced in CI.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Shape",
          body: "A 1–2 week shaping sprint produces a lightweight architecture, a milestone plan, and a fixed-price option where it makes sense.",
        },
        {
          step: "02",
          title: "Stand up",
          body: "The squad is in place in 2–3 weeks: tech lead, designer, engineers, QA. CI, observability, and security baseline shipped in week one.",
        },
        {
          step: "03",
          title: "Ship",
          body: "Two-week cycles with a Friday demo, a written changelog, and a shared dashboard. Real users see real value every month.",
        },
        {
          step: "04",
          title: "Scale & sustain",
          body: "Performance hardening, SRE rotations, SOC 2 / ISO 27001 prep, and a quarterly business review tied to outcome metrics.",
        },
      ]}
      engagement={[
        {
          name: "Shaping sprint",
          desc: "Fixed-price, 1–2 weeks. A tech lead and a senior designer shape the build before you commit to a long engagement.",
          bullets: [
            "Lightweight architecture",
            "Milestone plan with risks called out",
            "Fixed-price option for V1 where it fits",
            "Clickable prototype",
          ],
        },
        {
          name: "Build squad",
          desc: "Time-and-materials, 3–9 months. A 5–9 person squad takes V1 from zero to launched, then to product-market fit.",
          bullets: [
            "Senior tech lead, full ownership",
            "Two-week ship cadence",
            "Production-grade from day one",
            "Joint OKRs with your team",
          ],
        },
        {
          name: "Sustain squad",
          desc: "Monthly retainer. A long-running team that owns operations, feature work, on-call, and continuous performance for a live product.",
          bullets: [
            "SLA-backed on-call",
            "Predictable monthly burn",
            "Roadmap planning with your PM",
            "Quarterly business review",
          ],
        },
      ]}
      caseStudies={[
        {
          client: "FinEdge Capital",
          industry: "WealthTech",
          challenge:
            "A regulated Indian wealth platform needed to ship a new advisor workstation and a customer mobile app in 6 months — synchronised launches, single quality bar.",
          outcome:
            "Stood up an 11-person squad across design, web, iOS, Android, and backend. Shipped both surfaces in 5.5 months with a SEBI-aligned audit trail and a 99.97% uptime SLA in the first quarter.",
          metrics: [
            { value: "5.5 mo", label: "Launch timeline" },
            { value: "99.97%", label: "First-quarter SLA" },
            { value: "4.7★", label: "App store rating" },
          ],
        },
        {
          client: "GreenLane Logistics",
          industry: "Supply Chain",
          challenge:
            "A Singapore-headquartered logistics platform was on legacy Rails monolith infrastructure that couldn't survive the next 10× of growth.",
          outcome:
            "Re-architected to event-driven services on GCP, strangled the monolith over 9 months without a single customer-visible outage, and cut average API latency from 740ms to 95ms.",
          metrics: [
            { value: "8×", label: "Throughput" },
            { value: "−87%", label: "API latency" },
            { value: "0", label: "Downtime in cutover" },
          ],
          accent: "var(--brand-orange)",
        },
      ]}
      testimonials={[
        {
          quote:
            "We launched two product surfaces inside six months with one squad. The same team is now our long-term partner — there was nothing to hand over.",
          name: "Aditya Chatterjee",
          role: "Chief Product Officer",
          company: "FinEdge Capital",
          initials: "AC",
        },
        {
          quote:
            "The cutover was the most boring weekend of my engineering career. Exactly what you want from a re-platforming project.",
          name: "Daniel Lim",
          role: "VP Engineering",
          company: "GreenLane Logistics",
          initials: "DL",
          accent: "var(--brand-orange)",
        },
        {
          quote:
            "Friday demos, written changelogs, real users every month. After a decade of agency theatre, this felt like a real engineering team.",
          name: "Ishita Banerjee",
          role: "Founder & CEO",
          company: "Cravely",
          initials: "IB",
          accent: "var(--brand-red)",
        },
      ]}
      faqs={[
        {
          q: "Do you do design as well as engineering?",
          a: "Yes — and they sit on the same squad, not in different timezones. Our designers run discovery, ship Figma files alongside engineering, and stay engaged through QA.",
        },
        {
          q: "What's your technology opinion?",
          a: "Boring, observable, fast. We have a strong bias to TypeScript on the frontend, Go / TypeScript / Python on the backend, native or RN on mobile, and managed services on AWS / GCP / Azure. We pick the tool that fits — not the one we want to learn.",
        },
        {
          q: "How do you handle code ownership and IP?",
          a: "You own the IP from day one. Code lives in your GitHub / GitLab. We're happy to sign down-stream IP assignment, customer-specific NDAs, and the usual security questionnaires.",
        },
        {
          q: "Can you operate the product after launch?",
          a: "Yes. A sustain squad takes over once V1 is live — feature work, performance, on-call, and roadmap planning with your PM. Many of our build squads convert into sustain squads.",
        },
        {
          q: "How much does a typical engagement cost?",
          a: "A shaping sprint is ₹4–8 lakh. A build squad usually lands between ₹35 lakh and ₹2.5 Cr depending on size and tenure. We'll provide a concrete estimate within a week of an initial chat.",
        },
      ]}
      cta={{
        title: "Got a product idea — or a product running out of runway?"
        ,
        description:
          "Send us a paragraph about where you are and where you'd like to be. We'll come back in 48 hours with a recommended team shape and a realistic timeline.",
      }}
      siblingLinks={[
        { to: "/services/ai-solutions", label: "AI Solutions" },
        { to: "/services/it-staffing", label: "IT Staffing" },
      ]}

      extraSection={
        <TechnologyExpertiseSection
        
          accent="var(--brand-orange)"
          tabs={[
            {
              label: "Product Stack",
              cards: [
                { role: "Full-Stack Eng.",   level: "L5", category: "Product Engineering", tech: ["Next.js", "tRPC", "Prisma"] },
                { role: "API Architects",    level: "L6", category: "API Design",          tech: ["GraphQL", "REST", "OpenAPI"] },
                { role: "Auth Specialists",  level: "L5", category: "Security",            tech: ["Auth0", "JWT", "OAuth2"] },
                { role: "Payments Eng.",     level: "L5", category: "Fintech",             tech: ["Stripe", "Razorpay", "Webhooks"] },
              ],
            },
            {
              label: "Infrastructure",
              cards: [
                { role: "Platform Engineers", level: "L6", category: "Platform Eng.",  tech: ["AWS", "Vercel", "Railway"] },
                { role: "Database Eng.",      level: "L5", category: "Data Layer",     tech: ["PostgreSQL", "Redis", "MongoDB"] },
                { role: "Search Engineers",   level: "L5", category: "Search & Index", tech: ["Elasticsearch", "Typesense", "Algolia"] },
              ],
            },
            {
              label: "Quality",
              cards: [
                { role: "QA Engineers",      level: "L4", category: "Testing",         tech: ["Playwright", "Cypress", "Jest"] },
                { role: "Perf. Engineers",   level: "L5", category: "Performance",     tech: ["Lighthouse", "k6", "WebPageTest"] },
                { role: "Security Analysts", level: "L6", category: "AppSec",          tech: ["OWASP", "Snyk", "Burp Suite"] },
              ],
            },
          ]}
        />
      }
    />
  );
}
