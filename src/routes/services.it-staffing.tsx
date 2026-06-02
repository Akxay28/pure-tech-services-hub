import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getCaseStudiesForMainService } from "@/lib/case-studies-by-service";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

export const Route = createFileRoute("/services/it-staffing")({
  head: () => ({
    meta: [
      { title: "IT Staffing — Vetted Indian Engineers, Onboarded in Days | Pure Technology" },
      {
        name: "description",
        content:
          "Pre-vetted senior Indian engineers across AI, DevOps, data, mobile, and full-stack — contract, contract-to-hire, and full-time, with a 30-day replacement guarantee.",
      },
      { property: "og:title", content: "IT Staffing — Pure Technology" },
      {
        property: "og:description",
        content:
          "Senior talent from Bengaluru, Hyderabad, and Pune — ready in days, vetted in depth.",
      },
    ],
  }),
  component: ItStaffing,
});

function ItStaffing() {
  return (
    <ServicePage
      eyebrow="IT Staffing"
      title={
        <>
          Senior Indian engineers,{" "}
          <span className="text-gradient-brand">vetted the way you'd vet them.</span>
        </>
      }
      lede="We're not a CV-spray agency. Pure runs a 4-stage technical screening modelled on FAANG-style hiring, so every engineer we send you is one your own bar-raiser would have hired."
      accent="var(--brand-orange)"
      heroStats={[
        { value: "180+", label: "Active engineers on bench" },
        { value: "8 days", label: "Avg. shortlist turnaround" },
        { value: "3%", label: "Of applicants make our bench" },
        { value: "94%", label: "1-year retention" },
      ]}
      intro={{
        heading:
          "Staffing done by engineers, not by recruiters reading off a keyword list.",
        paragraphs: [
          "We started Pure because we were tired of the staffing experience on both sides — clients wading through 40 CVs to find one usable engineer, and good engineers being shopped around like resumes in a marketplace.",
          "Our model is different. Every engineer on our bench has cleared a structured technical bar: a system-design interview, a coding session, a domain deep-dive, and a values conversation. The same panel of senior engineers who would interview them at a top product company.",
          "When you brief us, we don't blast your role to a thousand candidates. We send you a shortlist of 2–4 humans we genuinely believe are right — with notes from our interviewers, references, and a clear view on availability.",
        ],
      }}
      capabilities={[
        {
          title: "Contract staffing",
          body: "3-, 6-, and 12-month engagements with senior engineers, designers, PMs, and SRE. Monthly billing, no minimum commitment beyond the agreed term.",
        },
        {
          title: "Contract-to-hire",
          body: "Try-before-you-buy: work with the engineer for 3–6 months, then convert with a transparent, pre-agreed conversion fee.",
        },
        {
          title: "Direct full-time placement",
          body: "We headhunt for your full-time roles — leadership, principal, and hard-to-find specialists — with a 90-day replacement guarantee.",
        },
        {
          title: "Managed pods",
          body: "Engineer + tech lead + PM, billed as a single squad. You manage outcomes; we manage people, ramp, and replacements.",
        },
        {
          title: "Specialist verticals",
          body: "AI/ML, data engineering, platform & DevOps, iOS / Android, security, and embedded — with dedicated practice leads in each.",
        },
        {
          title: "Co-employment & compliance",
          body: "Full statutory compliance — EPF, ESIC, PT, GST — handled by us. You get a single, clean monthly invoice and zero HR overhead.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Briefing",
          body: "A 30-minute working session with our practice lead — not a recruiter — to understand the role, the team, and the bar.",
        },
        {
          step: "02",
          title: "Shortlist",
          body: "2–4 humans within 5–10 days, each with our interview notes, code samples, and references. No CV firehoses.",
        },
        {
          step: "03",
          title: "Onboard",
          body: "Background verification, device provisioning, NDA, and a structured first-week ramp playbook tailored to your stack.",
        },
        {
          step: "04",
          title: "Hold the bar",
          body: "Quarterly 1:1s with the engineer and you, performance reviews, and a no-questions-asked replacement window for 30 days.",
        },
      ]}
      engagement={[
        {
          name: "Individual contributor",
          desc: "One engineer, embedded into your team. Best when you have a clear team structure and need a missing skill or extra hands.",
          bullets: [
            "Monthly billing in INR or USD",
            "Notice period: 30 days either side",
            "Replacement guarantee within 30 days",
            "Quarterly performance reviews",
          ],
        },
        {
          name: "Managed pod",
          desc: "A squad of 4–8 humans with a tech lead. You set outcomes, we manage the people side — ramp, leave, replacements, growth.",
          bullets: [
            "Single point of accountability",
            "Joint OKRs with your PM",
            "Built-in lead and bench coverage",
            "Predictable monthly burn",
          ],
        },
        {
          name: "Direct placement",
          desc: "One-time fee for a full-time hire. Designed for leadership, principal-IC, and specialist roles where the cost of a bad hire is highest.",
          bullets: [
            "Capped fee, billed on join",
            "90-day replacement guarantee",
            "Calibrated panel, written debrief",
            "Compensation benchmarking included",
          ],
        },
      ]}
      caseStudies={getCaseStudiesForMainService("it-staffing")}
      testimonials={[
        {
          quote:
            "We've worked with five staffing partners over the years. Pure is the only one whose shortlist we don't have to second-guess.",
          name: "Meera Subramaniam",
          role: "Director of Engineering",
          company: "Northwind SaaS",
          initials: "MS",
        },
        {
          quote:
            "Finding senior embedded engineers in India is brutal. Pure delivered a calibrated panel of six humans inside three months.",
          name: "Arjun Deshmukh",
          role: "CTO",
          company: "Helix Robotics",
          initials: "AD",
          accent: "var(--brand-red)",
        },
        {
          quote:
            "The engineer Pure placed with us became our tech lead in eleven months. That's the bar of talent they're working with.",
          name: "Priya Ramesh",
          role: "VP Engineering",
          company: "FinEdge Capital",
          initials: "PR",
          accent: "var(--brand-blue)",
        },
      ]}
      faqs={[
        {
          q: "How is Pure different from a traditional staffing agency?",
          a: "Three things: (1) every candidate is interviewed by a senior engineer on our side before they reach you, (2) we send 2–4 shortlisted humans, not 40 CVs, and (3) we offer a 30-day replacement guarantee on every placement.",
        },
        {
          q: "What roles do you cover?",
          a: "Full-stack, backend, frontend, mobile (iOS / Android / React Native / Flutter), data engineering, ML / AI engineering, DevOps / SRE / platform, QA automation, security, embedded, and product design. We have dedicated practice leads for each.",
        },
        {
          q: "How do you handle payroll, benefits, and compliance?",
          a: "Engineers placed on contract are employed by Pure Technology Pvt. Ltd. We handle EPF, ESIC, professional tax, GST, payroll, leave, and benefits. You receive a single, audit-ready monthly invoice in INR or USD.",
        },
        {
          q: "What if the engineer doesn't work out?",
          a: "Within the first 30 days, we replace at no cost. After that, we work on a transition plan — usually 30–45 days — so your project doesn't stall.",
        },
        {
          q: "Can engineers work from your office or ours?",
          a: "Both, plus hybrid. We have collaboration spaces in Bengaluru, Hyderabad, and Pune. Many of our clients run a hybrid model: engineers from our office 2 days a week, work-from-home the rest.",
        },
      ]}
      cta={{
        title: "Looking to scale a team without lowering the bar?"
        ,
        description:
          "Send us a role and the must-haves. We'll come back within 48 hours with a sense of who's available and how fast we can shortlist.",
      }}
      siblingLinks={[
        { to: "/services/ai-solutions", label: "AI Solutions" },
        { to: "/services/product-engineering", label: "Product Engineering" },
      ]}

      extraSection={
        <TechnologyExpertiseSection
          accent="var(--brand-green)"
          tabs={[
            {
              label: "Frontend",
              cards: [
                { role: "React Developers",  level: "L5", category: "Frontend Engineering", tech: ["React", "Next.js", "TypeScript"] },
                { role: "Vue Specialists",   level: "L4", category: "Frontend Engineering", tech: ["Vue", "Nuxt", "Tailwind"] },
                { role: "Angular Engineers", level: "L6", category: "Enterprise Frontend",  tech: ["Angular", "RxJS", "NgRx"] },
                { role: "UI Engineers",      level: "L5", category: "Design Systems",       tech: ["Figma", "Storybook", "Motion"] },
              ],
            },
            {
              label: "Backend",
              cards: [
                { role: "Node.js Developers", level: "L5", category: "Backend Engineering", tech: ["Node.js", "Express", "PostgreSQL"] },
                { role: "Python Engineers",   level: "L5", category: "Backend Engineering", tech: ["Python", "FastAPI", "Django"] },
                { role: "Java Developers",    level: "L6", category: "Backend Engineering", tech: ["Java", "Spring Boot", "Kafka"] },
                { role: "Go Engineers",       level: "L5", category: "Backend Engineering", tech: ["Go", "gRPC", "Redis"] },
              ],
            },
            {
              label: "Cloud & DevOps",
              cards: [
                { role: "Cloud Engineers",  level: "L6", category: "Cloud & DevOps", tech: ["AWS", "Docker", "Terraform"] },
                { role: "DevOps Engineers", level: "L5", category: "CI/CD & Infra",  tech: ["GitHub Actions", "K8s", "Helm"] },
                { role: "SRE Engineers",    level: "L6", category: "Observability",  tech: ["Prometheus", "Grafana", "PagerDuty"] },
              ],
            },
            {
              label: "Mobile",
              cards: [
                { role: "iOS Developers",    level: "L5", category: "Native Mobile",  tech: ["Swift", "SwiftUI", "Xcode"] },
                { role: "Android Developers",level: "L5", category: "Native Mobile",  tech: ["Kotlin", "Jetpack", "Compose"] },
                { role: "Mobile Developers", level: "L4", category: "Cross Platform", tech: ["React Native", "Flutter", "Firebase"] },
              ],
            },
          ]}
        />
      }
    />
  );
}
