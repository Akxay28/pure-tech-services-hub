import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("front-end-development");

export const Route = createFileRoute("/services/front-end-development")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: FrontEndDevelopment,
});

function FrontEndDevelopment() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-blue)"
  tabs={[
    {
      label: "Frameworks",
      cards: [
        { role: "React Developers",   level: "L5", category: "React Ecosystem",    tech: ["React 19", "Next.js 15", "React Query"] },
        { role: "Vue Specialists",    level: "L4", category: "Vue Ecosystem",      tech: ["Vue 3", "Nuxt 3", "VueUse"] },
        { role: "Angular Engineers",  level: "L6", category: "Angular Ecosystem",  tech: ["Angular 17", "NgRx", "Angular Material"] },
        { role: "Svelte Engineers",   level: "L4", category: "Svelte Ecosystem",   tech: ["SvelteKit", "Svelte 5", "Vite"] },
      ],
    },
    {
      label: "Styling & Design",
      cards: [
        { role: "Design Systems Eng.",level: "L5", category: "Design Systems",     tech: ["Storybook", "Radix UI", "shadcn/ui"] },
        { role: "CSS Architects",     level: "L5", category: "Styling",            tech: ["Tailwind", "CSS Modules", "Vanilla Extract"] },
        { role: "Motion Engineers",   level: "L4", category: "Animation",          tech: ["Framer Motion", "GSAP", "Lottie"] },
        { role: "UI/UX Engineers",    level: "L5", category: "Prototyping",        tech: ["Figma", "Framer", "Spline"] },
      ],
    },
    {
      label: "Performance",
      cards: [
        { role: "Web Perf. Eng.",     level: "L6", category: "Core Web Vitals",   tech: ["Lighthouse", "WebPageTest", "Partytown"] },
        { role: "Bundler Engineers",  level: "L5", category: "Build Tooling",     tech: ["Vite", "Turbopack", "esbuild"] },
        { role: "A11y Engineers",     level: "L5", category: "Accessibility",     tech: ["axe-core", "NVDA", "WCAG 2.2"] },
        { role: "PWA Engineers",      level: "L4", category: "Progressive Web",   tech: ["Workbox", "Web Push", "IndexedDB"] },
      ],
    },
    {
      label: "Testing",
      cards: [
        { role: "E2E Test Engineers", level: "L4", category: "E2E Testing",       tech: ["Playwright", "Cypress", "WebdriverIO"] },
        { role: "Unit Test Eng.",     level: "L4", category: "Unit & Integration",tech: ["Vitest", "Jest", "Testing Library"] },
        { role: "Visual Test Eng.",   level: "L4", category: "Visual Regression", tech: ["Chromatic", "Percy", "Applitools"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
