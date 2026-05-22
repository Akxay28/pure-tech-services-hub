import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("mobile-app-development");

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: MobileAppDevelopment,
});

function MobileAppDevelopment() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-green)"
  tabs={[
    {
      label: "iOS",
      cards: [
        { role: "iOS Developers",     level: "L5", category: "Native iOS",      tech: ["Swift", "SwiftUI", "Combine"] },
        { role: "iOS Architects",     level: "L6", category: "Architecture",    tech: ["TCA", "MVVM", "Clean Swift"] },
        { role: "iOS Performance",    level: "L5", category: "Perf & Memory",   tech: ["Instruments", "MetricKit", "XCTest"] },
        { role: "iOS Security Eng.",  level: "L5", category: "Mobile Security", tech: ["Keychain", "CryptoKit", "App Attest"] },
      ],
    },
    {
      label: "Android",
      cards: [
        { role: "Android Developers", level: "L5", category: "Native Android",  tech: ["Kotlin", "Jetpack Compose", "Coroutines"] },
        { role: "Android Architects", level: "L6", category: "Architecture",    tech: ["MVVM", "Hilt", "Room"] },
        { role: "Android Perf. Eng.", level: "L5", category: "Perf & Battery",  tech: ["Profiler", "WorkManager", "Baseline Profiles"] },
      ],
    },
    {
      label: "Cross-Platform",
      cards: [
        { role: "React Native Eng.",  level: "L5", category: "React Native",    tech: ["React Native", "Expo", "MMKV"] },
        { role: "Flutter Engineers",  level: "L5", category: "Flutter",         tech: ["Flutter", "Dart", "Riverpod"] },
        { role: "KMM Engineers",      level: "L5", category: "Kotlin Multiplatform", tech: ["KMM", "Compose Multiplatform", "Ktor"] },
      ],
    },
    {
      label: "Backend & Services",
      cards: [
        { role: "Firebase Engineers", level: "L4", category: "BaaS",            tech: ["Firebase", "Firestore", "FCM"] },
        { role: "Push & Notif. Eng.", level: "L4", category: "Notifications",   tech: ["APNs", "FCM", "OneSignal"] },
        { role: "Mobile API Eng.",    level: "L5", category: "API & Sync",      tech: ["REST", "GraphQL", "Apollo"] },
        { role: "Analytics Eng.",     level: "L4", category: "Mobile Analytics",tech: ["Mixpanel", "Amplitude", "Firebase Analytics"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
