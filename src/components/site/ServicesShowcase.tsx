// 3 Content on this page is :
// 1. AI Solutions
// 2. IT Staffing
// 3. Product Engineering

// import { useState } from "react";
// import { Link } from "@tanstack/react-router";
// import { Brain, Users, Boxes, ArrowRight, Check } from "lucide-react";
// import { BRAND } from "@/lib/brand-colors";

// type ServiceKey = "ai" | "staffing" | "product";

// const items: {
//   key: ServiceKey;
//   title: string;
//   tagline: string;
//   to: string;
//   Icon: typeof Brain;
//   accent: string;
//   bullets: string[];
// }[] =  [
//   {
//     key: "ai",
//     title: "AI Solutions",
//     tagline: "Take GenAI from prototype to production.",
//     to: "/services/ai-solutions",
//     Icon: Brain,
//     accent: BRAND.blue,
//     bullets: [
//       "Custom LLM & RAG systems on your data",
//       "Agentic workflows and copilots",
//       "MLOps, evals, and guardrails",
//       "AI chatbots for support & operations",
//       "Workflow automation using AI agents",
//       "Fine-tuned models for enterprise use-cases",
//       "Secure AI deployment on cloud or on-prem",
//     ],
//   },

//   {
//     key: "staffing",
//     title: "IT Staffing",
//     tagline: "Pre-vetted Indian engineers, ready in days.",
//     to: "/services/it-staffing",
//     Icon: Users,
//     accent: BRAND.orange,
//     bullets: [
//       "Contract, contract-to-hire, full-time",
//       "Top 3% talent across India tier-1 hubs",
//       "Replacement guarantee within 30 days",
//       "Dedicated remote development teams",
//       "Frontend, backend, DevOps & QA experts",
//       "Fast onboarding with flexible engagement",
//       "Timezone-aligned collaboration support",
//     ],
//   },

//   {
//     key: "product",
//     title: "Product Engineering",
//     tagline: "Full-stack squads that ship like a startup.",
//     to: "/services/product-engineering",
//     Icon: Boxes,
//     accent: BRAND.green,
//     bullets: [
//       "Design, web, mobile, backend, DevOps",
//       "Two-week launch cycles, weekly demos",
//       "SOC 2, ISO 27001 aligned delivery",
//       "Scalable cloud-native architecture",
//       "UI/UX systems for modern SaaS products",
//       "API integrations & microservices support",
//       "End-to-end product lifecycle management",
//     ],
//   },
// ];

// export function ServicesShowcase() {
//   const [active, setActive] = useState<ServiceKey>("ai");
//   const current = items.find((i) => i.key === active)!;

//   return (
//     <section className="relative px-5 lg:px-8 py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center max-w-3xl mx-auto">
//           <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
//             <span
//               className="h-1 w-6 rounded-full"
//               style={{ background: "var(--gradient-brand)" }}
//             />
//             What we do
//           </div>
//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
//             Three practices.{" "}
//             <span className="text-gradient-brand">One delivery muscle.</span>
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
//             AI, talent, and product engineering — fused into a single,
//             accountable team that turns enterprise ambition into shipped
//             software.
//           </p>
//         </div>

//         <div className="mt-14 grid lg:grid-cols-12 gap-8 items-stretch">
//           {/* Interactive orbit visual */}
//           <div className="lg:col-span-6 relative">
//             <div className="relative aspect-square max-w-[520px] mx-auto">
//               {/* concentric rings */}
//               <div className="absolute inset-0 rounded-full border border-border/70" />
//               <div className="absolute inset-[10%] rounded-full border border-border/60" />
//               <div className="absolute inset-[22%] rounded-full border border-border/50" />
//               <div className="absolute inset-[34%] rounded-full border border-dashed border-border" />

//               {/* rotating dot tracks */}
//               <div className="absolute inset-0 animate-orbit-slow">
//                 <span
//                   className="absolute left-1/2 top-0 -translate-x-1/2 h-3 w-3 rounded-full"
//                   style={{ background: "var(--brand-blue)" }}
//                 />
//               </div>
//               <div className="absolute inset-[10%] animate-orbit-reverse">
//                 <span
//                   className="absolute left-1/2 top-0 -translate-x-1/2 h-2.5 w-2.5 rounded-full"
//                   style={{ background: "var(--brand-orange)" }}
//                 />
//               </div>
//               <div className="absolute inset-[22%] animate-orbit-slow">
//                 <span
//                   className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full"
//                   style={{ background: "var(--brand-green)" }}
//                 />
//               </div>

//               {/* center node */}
//               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full glass-card grid place-items-center">
//                 <div className="text-center">
//                   <div
//                     className="mx-auto h-16 w-16 rounded-full grid place-items-center text-white shadow-soft transition-all duration-500"
//                     style={{
//                       background: `linear-gradient(135deg, ${current.accent}, color-mix(in oklab, ${current.accent} 50%, white))`,
//                     }}
//                   >
//                     <current.Icon className="h-7 w-7" />
//                   </div>
//                   <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
//                     Selected
//                   </div>
//                   <div className="mt-1 font-display font-bold text-lg">
//                     {current.title}
//                   </div>
//                 </div>
//               </div>

//               {/* corner service nodes */}
//               {items.map((item, i) => {
//                 const positions = [
//                   "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
//                   "bottom-4 left-0 -translate-x-1/3 translate-y-1/3",
//                   "bottom-4 right-0 translate-x-1/3 translate-y-1/3",
//                 ];
//                 const isActive = item.key === active;
//                 return (
//                   <button
//                     key={item.key}
//                     onMouseEnter={() => setActive(item.key)}
//                     onFocus={() => setActive(item.key)}
//                     onClick={() => setActive(item.key)}
//                     className={`absolute ${positions[i]} group`}
//                     aria-label={item.title}
//                   >
//                     <span
//                       className={`grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-2xl text-white transition-all duration-500 ${
//                         isActive
//                           ? "scale-110 shadow-glass animate-pulse-soft"
//                           : "scale-100 opacity-80 group-hover:opacity-100"
//                       }`}
//                       style={{
//                         background: `linear-gradient(135deg, ${item.accent}, color-mix(in oklab, ${item.accent} 55%, white))`,
//                       }}
//                     >
//                       <item.Icon className="h-7 w-7 sm:h-8 sm:w-8" />
//                     </span>
//                   </button>
//                 );
//               })}

//               {/* connector lines (SVG) */}
//               <svg
//                 className="absolute inset-0 w-full h-full pointer-events-none -z-10"
//                 viewBox="0 0 100 100"
//                 preserveAspectRatio="none"
//                 aria-hidden
//               >
//                 <defs>
//                   <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.5" />
//                     <stop offset="100%" stopColor="var(--brand-green)" stopOpacity="0.5" />
//                   </linearGradient>
//                 </defs>
//                 <line x1="50" y1="50" x2="50" y2="0" stroke="url(#line-grad)" strokeWidth="0.4" strokeDasharray="1 1.4" />
//                 <line x1="50" y1="50" x2="6" y2="92" stroke="url(#line-grad)" strokeWidth="0.4" strokeDasharray="1 1.4" />
//                 <line x1="50" y1="50" x2="94" y2="92" stroke="url(#line-grad)" strokeWidth="0.4" strokeDasharray="1 1.4" />
//               </svg>
//             </div>
//           </div>

//           {/* Detail panel */}
//           <div className="lg:col-span-6 flex flex-col">
//             <div className="flex flex-wrap gap-2">
//               {items.map((item) => {
//                 const isActive = item.key === active;
//                 return (
//                   <button
//                     key={item.key}
//                     onClick={() => setActive(item.key)}
//                     onMouseEnter={() => setActive(item.key)}
//                     className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
//                       isActive
//                         ? "text-white shadow-soft"
//                         : "bg-surface border border-border text-foreground/80 hover:text-foreground"
//                     }`}
//                     style={
//                       isActive
//                         ? {
//                             background: `linear-gradient(135deg, ${item.accent}, color-mix(in oklab, ${item.accent} 60%, white))`,
//                           }
//                         : undefined
//                     }
//                   >
//                     <item.Icon className="h-4 w-4" />
//                     {item.title}
//                   </button>
//                 );
//               })}
//             </div>

//             <div
//               key={current.key}
//               className="mt-6 glass-card rounded-3xl p-7 sm:p-8 flex-1 animate-fade-up"
//             >
//               <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
//                 {current.tagline}
//               </div>
//               <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold">
//                 {current.title}
//               </h3>
//               <ul className="mt-5 space-y-3">
//                 {current.bullets.map((b) => (
//                   <li
//                     key={b}
//                     className="flex items-start gap-3 text-sm sm:text-base text-foreground/85"
//                   >
//                     <span
//                       className="mt-0.5 grid h-5 w-5 place-items-center rounded-full text-white"
//                       style={{ background: current.accent }}
//                     >
//                       <Check className="h-3 w-3" />
//                     </span>
//                     {b}
//                   </li>
//                 ))}
//               </ul>
//               <Link
//                 to={current.to}
//                 className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
//               >
//                 Explore {current.title}
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 4 Content on this page is :
// 1. AI Solutions
// 2. IT Staffing
// 3. Product Engineering
// 4. Enterprise App Development

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Brain, Users, Boxes, Building2, ArrowRight, Check } from "lucide-react";
import { BRAND } from "@/lib/brand-colors";

type ServiceKey = "ai" | "staffing" | "product" | "enterprise";

const items: {
  key: ServiceKey;
  title: string;
  tagline: string;
  to: string;
  Icon: typeof Brain;
  accent: string;
  bullets: string[];
}[] = [
  {
    key: "ai",
    title: "AI Solutions",
    tagline: "Take GenAI from prototype to production.",
    to: "/services/ai-solutions",
    Icon: Brain,
    accent: BRAND.blue,
    bullets: [
      "Custom LLM & RAG systems on your data",
      "Agentic workflows and copilots",
      "MLOps, evals, and guardrails",
      "AI chatbots for support & operations",
      "Workflow automation using AI agents",
      "Fine-tuned models for enterprise use-cases",
      "Secure AI deployment on cloud or on-prem",
    ],
  },
  {
    key: "staffing",
    title: "IT Staffing",
    tagline: "Pre-vetted Indian engineers, ready in days.",
    to: "/services/it-staffing",
    Icon: Users,
    accent: BRAND.orange,
    bullets: [
      "Contract, contract-to-hire, full-time",
      "Top 3% talent across India tier-1 hubs",
      "Replacement guarantee within 30 days",
      "Dedicated remote development teams",
      "Frontend, backend, DevOps & QA experts",
      "Fast onboarding with flexible engagement",
      "Timezone-aligned collaboration support",
    ],
  },
  {
    key: "product",
    title: "Product Engineering",
    tagline: "Full-stack squads that ship like a startup.",
    to: "/services/product-engineering",
    Icon: Boxes,
    accent: BRAND.green,
    bullets: [
      "Design, web, mobile, backend, DevOps",
      "Two-week launch cycles, weekly demos",
      "SOC 2, ISO 27001 aligned delivery",
      "Scalable cloud-native architecture",
      "UI/UX systems for modern SaaS products",
      "API integrations & microservices support",
      "End-to-end product lifecycle management",
    ],
  },
  {
    key: "enterprise",
    title: "Enterprise App Development",
    tagline: "Modernize operations with apps built for scale.",
    to: "/services/mobile-app-development",
    Icon: Building2,
    accent: BRAND.purple ?? "#7C3AED",
    bullets: [
      "Custom enterprise applications at scale",
      "Legacy system migration & modernization",
      "Complex third-party & ERP integrations",
      "Cloud-native and hybrid architecture builds",
      "Security-first, compliance-ready delivery",
      "High-performance, resilient system design",
      "End-to-end operational excellence support",
    ],
  },
];

export function ServicesShowcase() {
  const [active, setActive] = useState<ServiceKey>("ai");
  const current = items.find((i) => i.key === active)!;

  // 4 nodes placed at cardinal / diagonal positions around the orbit visual
  // top-center, bottom-left, bottom-right, right-center
  const positions = [
    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",       // AI  — top
    "bottom-4 left-0 -translate-x-1/3 translate-y-1/3",        // Staffing — bottom-left
    "bottom-4 right-0 translate-x-1/3 translate-y-1/3",        // Product — bottom-right
    "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",        // Enterprise — right
  ];

  // SVG connector lines: centre (50,50) → each node position (approx)
  const connectorTargets = [
    { x2: 50, y2: 0 },   // top
    { x2: 6,  y2: 92 },  // bottom-left
    { x2: 94, y2: 92 },  // bottom-right
    { x2: 100, y2: 50 }, // right
  ];

  return (
    <section className="relative px-5 lg:px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span
              className="h-1 w-6 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
            What we do
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Four practices.{" "}
            <span className="text-gradient-brand">One delivery muscle.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            AI, talent, product engineering, and enterprise applications — fused
            into a single, accountable team that turns enterprise ambition into
            shipped software.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive orbit visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-[520px] mx-auto">
              {/* concentric rings */}
              <div className="absolute inset-0 rounded-full border border-border/70" />
              <div className="absolute inset-[10%] rounded-full border border-border/60" />
              <div className="absolute inset-[22%] rounded-full border border-border/50" />
              <div className="absolute inset-[34%] rounded-full border border-dashed border-border" />

              {/* rotating dot tracks */}
              <div className="absolute inset-0 animate-orbit-slow">
                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 h-3 w-3 rounded-full"
                  style={{ background: "var(--brand-blue)" }}
                />
              </div>
              <div className="absolute inset-[10%] animate-orbit-reverse">
                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--brand-orange)" }}
                />
              </div>
              <div className="absolute inset-[22%] animate-orbit-slow">
                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full"
                  style={{ background: "var(--brand-green)" }}
                />
              </div>
              {/* 4th orbit dot track */}
              <div className="absolute inset-[10%] animate-orbit-slow" style={{ animationDelay: "-3s" }}>
                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full"
                  style={{ background: current.key === "enterprise" ? current.accent : "var(--brand-purple, #7C3AED)" }}
                />
              </div>

              {/* center node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full glass-card grid place-items-center">
                <div className="text-center">
                  <div
                    className="mx-auto h-16 w-16 rounded-full grid place-items-center text-white shadow-soft transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${current.accent}, color-mix(in oklab, ${current.accent} 50%, white))`,
                    }}
                  >
                    <current.Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Selected
                  </div>
                  <div className="mt-1 font-display font-bold text-lg leading-snug px-2">
                    {current.title}
                  </div>
                </div>
              </div>

              {/* service nodes — now 4 */}
              {items.map((item, i) => {
                const isActive = item.key === active;
                return (
                  <button
                    key={item.key}
                    onMouseEnter={() => setActive(item.key)}
                    onFocus={() => setActive(item.key)}
                    onClick={() => setActive(item.key)}
                    className={`absolute ${positions[i]} group`}
                    aria-label={item.title}
                  >
                    <span
                      className={`grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-2xl text-white transition-all duration-500 ${
                        isActive
                          ? "scale-110 shadow-glass animate-pulse-soft"
                          : "scale-100 opacity-80 group-hover:opacity-100"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}, color-mix(in oklab, ${item.accent} 55%, white))`,
                      }}
                    >
                      <item.Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                    </span>
                  </button>
                );
              })}

              {/* connector lines (SVG) — now 4 */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--brand-green)" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {connectorTargets.map((t, i) => (
                  <line
                    key={i}
                    x1="50" y1="50"
                    x2={t.x2} y2={t.y2}
                    stroke="url(#line-grad)"
                    strokeWidth="0.4"
                    strokeDasharray="1 1.4"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex flex-wrap gap-2">
              {items.map((item) => {
                const isActive = item.key === active;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    onMouseEnter={() => setActive(item.key)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "text-white shadow-soft"
                        : "bg-surface border border-border text-foreground/80 hover:text-foreground"
                    }`}
                    style={
                      isActive
                        ? {
                            background: `linear-gradient(135deg, ${item.accent}, color-mix(in oklab, ${item.accent} 60%, white))`,
                          }
                        : undefined
                    }
                  >
                    <item.Icon className="h-4 w-4" />
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div
              key={current.key}
              className="mt-6 glass-card rounded-3xl p-7 sm:p-8 flex-1 animate-fade-up"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {current.tagline}
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold">
                {current.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {current.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm sm:text-base text-foreground/85"
                  >
                    <span
                      className="mt-0.5 grid h-5 w-5 place-items-center rounded-full text-white"
                      style={{ background: current.accent }}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to={current.to}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
              >
                Explore {current.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
