import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { getSubServicePageProps } from "@/lib/get-sub-service-page-props";

const props = getSubServicePageProps("cybersecurity");

export const Route = createFileRoute("/services/cybersecurity")({
  head: () => ({
    meta: [
      { title: `${props.eyebrow} — Pure Technology` },
      { name: "description", content: props.lede },
      { property: "og:title", content: `${props.eyebrow} — Pure Technology` },
      { property: "og:description", content: props.lede },
    ],
  }),
  component: Cybersecurity,
});

function Cybersecurity() {
  return (
    <SubServicePage
      {...props}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-blue)"
  tabs={[
    {
      label: "AppSec",
      cards: [
        { role: "AppSec Engineers",    level: "L6", category: "Application Security",  tech: ["OWASP Top 10", "Burp Suite", "Snyk"] },
        { role: "Pentest Engineers",   level: "L6", category: "Penetration Testing",   tech: ["Metasploit", "Nmap", "Kali Linux"] },
        { role: "Code Security Eng.",  level: "L5", category: "SAST & DAST",           tech: ["SonarQube", "Checkmarx", "Semgrep"] },
        { role: "Bug Bounty Hunters",  level: "L5", category: "Vulnerability Research",tech: ["HackerOne", "Bugcrowd", "CVE Research"] },
      ],
    },
    {
      label: "Cloud Security",
      cards: [
        { role: "Cloud Security Eng.", level: "L6", category: "Cloud Posture",     tech: ["Prisma Cloud", "Wiz", "AWS Security Hub"] },
        { role: "IAM Engineers",       level: "L5", category: "Identity & Access", tech: ["AWS IAM", "Azure AD", "HashiCorp Vault"] },
        { role: "CSPM Engineers",      level: "L5", category: "Compliance",        tech: ["Lacework", "Orca Security", "Dome9"] },
        { role: "Secrets Eng.",        level: "L4", category: "Secrets Management",tech: ["Vault", "AWS Secrets Manager", "SOPS"] },
      ],
    },
    {
      label: "SOC & Monitoring",
      cards: [
        { role: "SOC Analysts",        level: "L4", category: "Threat Detection",  tech: ["Splunk", "QRadar", "Elastic SIEM"] },
        { role: "SIEM Engineers",      level: "L5", category: "SIEM",              tech: ["Sentinel", "Chronicle", "Sumo Logic"] },
        { role: "Threat Intel Eng.",   level: "L6", category: "Threat Intelligence",tech: ["MITRE ATT&CK", "STIX/TAXII", "OpenCTI"] },
        { role: "IR Engineers",        level: "L6", category: "Incident Response", tech: ["TheHive", "Cortex", "Velociraptor"] },
      ],
    },
    {
      label: "Compliance",
      cards: [
        { role: "GRC Analysts",        level: "L5", category: "Governance & Risk", tech: ["ISO 27001", "SOC 2", "DPDP Act"] },
        { role: "Compliance Engineers",level: "L5", category: "Regulatory",        tech: ["PCI DSS", "HIPAA", "GDPR"] },
        { role: "Audit Engineers",     level: "L4", category: "Security Audits",   tech: ["Vanta", "Drata", "Tugboat Logic"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
