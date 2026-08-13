import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("mobile-app-developers");

export const Route = createFileRoute("/hire/mobile-app-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": `Hire ${role.roleTitle}`,
              "description": role.lede,
              "provider": {
                "@type": "Organization",
                "name": "Pure Technology",
                "url": "https://puretechnology.in"
              },
              "areaServed": ["India", "Worldwide"],
              "serviceType": "IT Staffing & Staff Augmentation"
            },
            {
              "@type": "FAQPage",
              "mainEntity": role.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", text: faq.a }
              }))
            }
          ]
        }
      }
    ],
  }),
  component: function HireMobileAppDevelopersPage() {
    return ( 
      <>
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Cross-Platform",
                    cards: [
                      { role: "React Native Eng.",        level: "L5", category: "Cross-Platform",     tech: ["React Native", "Expo", "TypeScript"] },
                      { role: "Flutter Engineers",        level: "L5", category: "Cross-Platform",     tech: ["Flutter", "Dart", "Riverpod"] },
                      { role: "Capacitor Engineers",      level: "L4", category: "Hybrid Apps",        tech: ["Capacitor", "Ionic", "Tailwind CSS"] },
                      { role: "Mobile Architects",        level: "L6", category: "Architecture",       tech: ["Clean Architecture", "MVI", "TCA"] },
                    ],
                  },
                  {
                    label: "Native",
                    cards: [
                      { role: "iOS Engineers",            level: "L5", category: "iOS",                tech: ["Swift", "SwiftUI", "Xcode"] },
                      { role: "Android Engineers",        level: "L5", category: "Android",            tech: ["Kotlin", "Jetpack Compose", "Android Studio"] },
                      { role: "watchOS / tvOS Eng.",      level: "L5", category: "Apple Platforms",    tech: ["watchOS", "tvOS", "WidgetKit"] },
                      { role: "Wear OS Engineers",        level: "L4", category: "Wearables",          tech: ["Wear OS", "Health Services API", "Tiles"] },
                    ],
                  },
                  {
                    label: "Mobile Infra",
                    cards: [
                      { role: "Mobile DevOps Eng.",       level: "L5", category: "CI/CD",              tech: ["Fastlane", "Bitrise", "EAS Build"] },
                      { role: "Push & Notifications Eng.",level: "L4", category: "Messaging",          tech: ["FCM", "APNs", "OneSignal"] },
                      { role: "Mobile Analytics Eng.",    level: "L4", category: "Analytics",          tech: ["Mixpanel", "Amplitude", "Firebase Analytics"] },
                      { role: "App Performance Eng.",     level: "L5", category: "Performance",        tech: ["Crashlytics", "Sentry", "Perfetto"] },
                    ],
                  },
                ]}
              />
          } />
      </>
    )
  },
});
