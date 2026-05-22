import { createFileRoute } from "@tanstack/react-router";
import { HireRolePage } from "@/components/site/HireRolePage";
import { getHireRoleProps } from "@/lib/get-hire-role-props";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";

const role = getHireRoleProps("android-developers");

export const Route = createFileRoute("/hire/android-developers")({
  head: () => ({
    meta: [
      { title: `Hire ${role.roleTitle} — Pure Technology` },
      { name: "description", content: role.lede },
      { property: "og:title", content: `Hire ${role.roleTitle} — Pure Technology` },
      { property: "og:description", content: role.lede },
    ],
  }),
  component: function HireAndroidDevelopersPage() {
    return ( 
      <>
      
      <HireRolePage {...role} extraSection={
                <TechnologyExpertiseSection
                accent="var(--brand-blue)"
                tabs={[
                  {
                    label: "Native Android",
                    cards: [
                      { role: "Kotlin Engineers",         level: "L5", category: "Kotlin / Android",   tech: ["Kotlin", "Coroutines", "Flow"] },
                      { role: "Jetpack Compose Eng.",     level: "L5", category: "Modern UI",          tech: ["Jetpack Compose", "Material 3", "Navigation"] },
                      { role: "Android Architects",       level: "L6", category: "Architecture",       tech: ["MVVM", "MVI", "Clean Architecture"] },
                      { role: "Jetpack Engineers",        level: "L5", category: "Android Jetpack",    tech: ["Room", "WorkManager", "DataStore"] },
                    ],
                  },
                  {
                    label: "Platform & Integration",
                    cards: [
                      { role: "Android TV Engineers",     level: "L5", category: "TV & Large Screen",  tech: ["Leanback", "Compose TV", "ExoPlayer"] },
                      { role: "Wear OS Engineers",        level: "L4", category: "Wearables",          tech: ["Wear OS", "Health Services", "Tiles"] },
                      { role: "Android Auto Eng.",        level: "L4", category: "Automotive",         tech: ["Android Auto", "Car App Library", "AAOS"] },
                      { role: "SDK Engineers",            level: "L6", category: "Android SDK",        tech: ["Gradle", "AGP", "Maven Publish"] },
                    ],
                  },
                  {
                    label: "Quality & Distribution",
                    cards: [
                      { role: "Android QA Engineers",     level: "L4", category: "Testing",            tech: ["Espresso", "Robolectric", "Firebase Test Lab"] },
                      { role: "Perf. Engineers",          level: "L5", category: "Performance",        tech: ["Android Profiler", "Perfetto", "Baseline Profiles"] },
                      { role: "Android DevOps Eng.",      level: "L5", category: "CI/CD",              tech: ["Fastlane", "GitHub Actions", "Play Store API"] },
                      { role: "Play Store Eng.",          level: "L4", category: "Distribution",       tech: ["Play Console", "In-App Billing", "Play Integrity"] },
                    ],
                  },
                ]}
              />
          } />
      
      </>)   },
});
