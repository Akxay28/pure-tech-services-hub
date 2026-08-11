import React from "react";
import { ShieldCheck, Activity, Users, Eye, Flame, type LucideIcon } from "lucide-react";
import type { SubServicePageProps } from "@/components/site/SubServicePage";
import { BRAND } from "@/lib/brand-colors";

export const surveillanceTechExpertise = [
  {
    label: "AI & Inference",
    cards: [
      { role: "Edge Inference", level: "Core", category: "Local model execution", tech: ["YOLOv8", "NVIDIA DeepStream", "TensorRT"] },
      { role: "Object Tracking", level: "Core", category: "Spatiotemporal tracking", tech: ["ByteTrack", "DeepSORT"] },
      { role: "Stream Management", level: "Advanced", category: "Low-latency ingestion", tech: ["RTSP", "ONVIF", "WebRTC"] },
      { role: "Model Training", level: "Custom", category: "Proprietary datasets", tech: ["PyTorch", "Transfer Learning"] },
    ],
  },
  {
    label: "Integration & Actions",
    cards: [
      { role: "Alerting Pipeline", level: "Core", category: "Instant notification routing", tech: ["Webhooks", "SMS", "WhatsApp API"] },
      { role: "Access Control Sync", level: "Advanced", category: "Badge database integration", tech: ["RFID API", "Wiegand protocol"] },
      { role: "Physical Relays", level: "Core", category: "Hardware trigger relays", tech: ["GPIO", "Modbus TCP", "IP Relays"] },
    ],
  },
  {
    label: "Governance & Privacy",
    cards: [
      { role: "Identity Protection", level: "Core", category: "PII shielding", tech: ["Face Blur", "License Plate Masking"] },
      { role: "Audit Trail", level: "Advanced", category: "Compliant event logging", tech: ["Encrypted Video", "Immutable Logs"] },
      { role: "Device Management", level: "Enterprise", category: "Fleet health monitoring", tech: ["Balena", "Prometheus", "Grafana"] },
    ],
  },
];

// Safety Section Component (Functional with imageSrc prop)
export const SafetySection: React.FC<{ imageSrc?: string }> = ({ imageSrc }) => (
  <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
    <div className="mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-brand-pink-soft text-brand-pink text-xs font-semibold rounded-full uppercase">Safety</span>
            <h3 className="text-2xl font-display font-bold">Proactive Risk Mitigation</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Transform standard cameras into an active safety net, verifying compliance and protecting lives.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "PPE Compliance Detection", desc: "Automatically monitor for helmets, vests, and safety glasses.", imp: "Near-100% policy adherence." },
              { title: "Fall & Man-Down Detection", desc: "Instant alert if an employee falls or remains immobile in hazards.", imp: "Drastically cut response time." },
              { title: "Fire & Smoke Detection", desc: "Visual fire indicators from cameras in high-ceiling facilities.", imp: "Visual alert within 3 seconds." },
              { title: "Pedestrian-Vehicle Proximity", desc: "Detects proximity events between workers and moving machinery.", imp: "Eliminate blind-spot collisions." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-surface-muted/40 p-5 space-y-2">
                <h4 className="text-sm font-semibold">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border overflow-hidden bg-surface-muted/30 p-3 shadow-lg">
            <img
              src={imageSrc || "/homeCaseStudy/surveillance-safety.png"}
              alt="Workplace Safety AI Analytics"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Security Section Component (Functional with imageSrc prop)
export const SecuritySection: React.FC<{ imageSrc?: string }> = ({ imageSrc }) => (
  <section className="px-5 lg:px-8 py-20 bg-surface border-y border-border">
    <div className="mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 lg:order-2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-brand-blue-soft text-brand-blue text-xs font-semibold rounded-full uppercase">Security</span>
            <h3 className="text-2xl font-display font-bold">Intelligent Perimeter & Asset Defense</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Move beyond static recording to active threat identification, lockdown triggers, and access control audit.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Intrusion Detection", desc: "Alerts for unauthorized entry into restricted zones or outer fences.", imp: "Replaces manual security patrols." },
              { title: "Weapon Detection", desc: "AI detection of firearms in public or sensitive workplace zones.", imp: "Buys critical response seconds." },
              { title: "Tailgating Detection", desc: "Identify when unauthorized persons follow employees through badges.", imp: "Closes physical access gaps." },
              { title: "Unauthorized Person Detection", desc: "Flag individuals in no-go administrative areas or plant zones.", imp: "Automatic access compliance." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-surface-muted/40 p-5 space-y-2">
                <h4 className="text-sm font-semibold">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                <p className="text-xs text-primary font-medium">Improvement: {c.imp}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <div className="rounded-3xl border border-border overflow-hidden bg-surface-muted/30 p-3 shadow-lg">
            <img
              src={imageSrc || "/homeCaseStudy/surveillance-security.png"}
              alt="Security & Perimeter Defense AI"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const surveillanceSolutions: Record<string, SubServicePageProps & { title: string, extraSectionImage?: string }> = {
  "intrusion-detection": {
    eyebrow: "AI Video Surveillance",
    title: "Intrusion Detection",
    lede: "Real-time alerts for unauthorized entry into restricted zones or perimeters. Turn camera feeds into an automated active guard.",
    accent: BRAND.blue,
    Icon: ShieldCheck,
    heroStats: [
      { value: "<1s", label: "Alert response" },
      { value: "24/7", label: "Continuous watch" },
      { value: "99%", label: "Accuracy" },
      { value: "Zero", label: "Guard fatigue" },
    ],
    whoFor: [
      "Security and facility operations managers looking to automate CCTV threat monitoring.",
      "Critical infrastructure and high-security campuses requiring immediate intrusion warnings.",
      "Warehouse and industrial yards prone to trespassing or stock theft.",
    ],
    capabilities: [
      { title: "Custom Zone Rules", body: "Draw lines and polygons on your camera feeds to define restricted zones and trigger alerts only on breaches." },
      { title: "Directional Alerts", body: "Detect whether targets are entering, leaving, or loitering near a boundary line." },
      { title: "Incident Evidence", body: "Store snapshots and video clips of the breach event with precise timestamps for compliance and audits." },
    ],
    outcomes: [
      { metric: "100%", label: "Area coverage", context: "Continuous AI vigilance across all defined camera feeds and blind spots." },
      { metric: "<1s", label: "Notification latency", context: "Instant alert routing to security teams with location and video evidence." },
      { metric: "Zero", label: "Missed breaches", context: "Automation removes the human fatigue of watching multiple screens." },
    ],
    process: [
      { title: "Camera Audit", body: "We map camera fields of view and identify perimeter boundaries." },
      { title: "Zone Definition", body: "Draw detection zones and configure tripwires in the system software." },
      { title: "Alert Routing", body: "Integrate alerts with local sirens, security dashboards, or WhatsApp/Telegram notifications." },
    ],
    tech: ["YOLOv8", "RTSP Streams", "Zone Masking", "NVIDIA Edge", "SMS/WhatsApp Alerts"],
    techExpertise: surveillanceTechExpertise,
    extraSection: SecuritySection,
    extraSectionImage: "/homeCaseStudy/surveillance-intrusion.png",
    faqs: [
      { q: "Does this require special cameras?", a: "No. It works with standard IP cameras supporting RTSP/ONVIF." },
      { q: "How are false alarms handled?", a: "The AI filters out small animals, wind-blown vegetation, and shadow shifts." },
    ],
    siblingLinks: [
      { to: "/solutions/perimeter-monitoring", label: "Perimeter Monitoring" },
      { to: "/solutions/unauthorized-access-alerts", label: "Unauthorized Access Alerts" },
    ],
  },

  "weapon-detection": {
    eyebrow: "AI Video Surveillance",
    title: "Weapon Detection",
    lede: "Automated identification of firearms and dangerous objects in public or sensitive areas. Buy critical seconds for emergency response.",
    accent: BRAND.red,
    Icon: ShieldCheck,
    heroStats: [
      { value: "Instant", label: "Threat detection" },
      { value: "Active", label: "Lockdown trigger" },
      { value: "98%", label: "Recall rate" },
      { value: "Real-time", label: "Alert latency" },
    ],
    whoFor: [
      "Schools, campuses, and educational institutions looking to improve active threat posture.",
      "Airports, transit hubs, and corporate offices requiring rapid response to public security threats.",
      "High-risk retail or banking locations needing visual firearm verification.",
    ],
    capabilities: [
      { title: "Visible Weapon Spotting", body: "Detects handguns, rifles, and other threat objects instantly as they enter camera sight." },
      { title: "Automated Lockdown Integration", body: "Directly trigger door locks, alarms, and emergency notification systems upon verified weapon detection." },
      { title: "Multi-Camera Tracking", body: "Follows the threat trajectory across multiple overlapping camera feeds to provide continuous telemetry." },
    ],
    outcomes: [
      { metric: "<2s", label: "Critical warning time", context: "Alerts go out before a threat can escalate inside the building." },
      { metric: "98%", label: "Accuracy rate", context: "Trained on massive weapon datasets to ensure high reliability." },
      { metric: "SMS/EAS", label: "Alert dispatch", context: "Instant emergency broadcasts to security teams and police." },
    ],
    process: [
      { title: "Model Tuning", body: "Optimize object recognition parameters for varying light and camera resolutions." },
      { title: "Action Plan Integration", body: "Connect alerts to local law enforcement dispatch and internal emergency channels." },
      { title: "Hardware Check", body: "Ensure camera resolution and frame rates meet detection guidelines." },
    ],
    tech: ["Object Detection", "CUDA", "Low-latency streaming", "Emergency Alert System (EAS) Integration"],
    techExpertise: surveillanceTechExpertise,
    extraSection: SecuritySection,
    extraSectionImage: "/homeCaseStudy/surveillance-weapon.png",
    faqs: [
      { q: "Can it detect concealed weapons?", a: "No, this is visual-based AI. It detects weapons once they are brandished or visible on camera." },
      { q: "How does it handle holstered firearms?", a: "The AI can be configured to ignore holstered weapons on authorized security personnel." },
    ],
    siblingLinks: [
      { to: "/solutions/intrusion-detection", label: "Intrusion Detection" },
      { to: "/solutions/unauthorized-access-alerts", label: "Unauthorized Access Alerts" },
    ],
  },

  "fire-smoke-detection": {
    eyebrow: "AI Video Surveillance",
    title: "Fire & Smoke Detection",
    lede: "Early visual fire alerts from camera feeds in open factory bays or warehouse spaces where traditional physical sensors fail or react too late.",
    accent: BRAND.orange,
    Icon: Flame,
    heroStats: [
      { value: "<3s", label: "Detection speed" },
      { value: "99%", label: "Accuracy" },
      { value: "Visual", label: "Confirmation" },
      { value: "Outdoor", label: "Capable" },
    ],
    whoFor: [
      "Industrial plants, chemical warehouses, and server farms requiring early fire warning.",
      "Open-air yards or recycling centers where ceiling-mounted smoke detectors cannot be installed.",
      "High-ceiling facilities where physical smoke takes minutes to reach standard sensors.",
    ],
    capabilities: [
      { title: "Visual Flame Spotting", body: "Detects active combustion and sparks before heat or smoke reaches physical ceiling sensors." },
      { title: "Smoke Plume Tracking", body: "Identifies early smoke plumes rising from materials, even outdoors or in high-ceiling structures." },
      { title: "Automated Relays", body: "Send signals directly to fire alarm control panels or local sprinkler solenoids." },
    ],
    outcomes: [
      { metric: "<3s", label: "Detection speed", context: "Flags visual triggers immediately upon ignition." },
      { metric: "99.4%", label: "Accuracy rate", context: "Avoids false positives from steam, dust, or welding arcs." },
      { metric: "Zero", label: "Escapes", context: "Provides visual safety net over critical materials." },
    ],
    process: [
      { title: "Feasibility Review", body: "Check overhead camera angles, lighting conditions, and obstructions." },
      { title: "Relay Setup", body: "Connect AI alerts to physical sprinkler systems or plant alarms via relay modules." },
      { title: "Calibration", body: "Run test burns or simulation tests to tune parameters." },
    ],
    tech: ["Flame Detection ML", "Smoke Detection models", "Relay Controllers", "ONVIF Streams"],
    techExpertise: surveillanceTechExpertise,
    extraSection: SafetySection,
    extraSectionImage: "/homeCaseStudy/surveillance-fire.png",
    faqs: [
      { q: "Will steam or dust trigger false alarms?", a: "No. The model is trained on heat movement and visual textures to filter out steam, dust, and vehicle exhaust." },
      { q: "Does it replace standard fire alarms?", a: "No. It serves as an early visual warning system, supplementing your primary fire alarm compliance hardware." },
    ],
    siblingLinks: [
      { to: "/solutions/intrusion-detection", label: "Intrusion Detection" },
      { to: "/solutions/perimeter-monitoring", label: "Perimeter Monitoring" },
    ],
  },

  "unauthorized-access-alerts": {
    eyebrow: "AI Video Surveillance",
    title: "Unauthorized Access Alerts",
    lede: "Flag individuals in no-go areas and detect tailgating at badge-only access points to enforce physical security policies automatically.",
    accent: BRAND.purple,
    Icon: Users,
    heroStats: [
      { value: "Anti-tailgate", label: "Enforced" },
      { value: "Badge sync", label: "Access logs" },
      { value: "Real-time", label: "Alert routing" },
      { value: "PII Shield", label: "Privacy guard" },
    ],
    whoFor: [
      "Datacenters, server rooms, R&D labs, and cleanrooms requiring strict entry enforcement.",
      "Corporate campuses looking to prevent tailgating through secure turnstiles.",
      "High-value storage rooms or administrative offices holding sensitive records.",
    ],
    capabilities: [
      { title: "Tailgating Prevention", body: "Alerts when more than one person passes through an opened security door per badge swipe." },
      { title: "Access Control Integration", body: "Directly correlates badge swipe logs with camera video to verify credentials." },
      { title: "Attribute-Based Alerts", body: "Flag personnel who are present in zones where their badge clearance level does not authorize access." },
    ],
    outcomes: [
      { metric: "Zero", label: "Tailgate escapes", context: "Strict edge-case tracking at badge-access doors." },
      { metric: "100%", label: "Audited entries", context: "Every access log matched to visual evidence." },
      { metric: "Real-time", label: "Escalations", context: "Alerts go directly to security desks for immediate interception." },
    ],
    process: [
      { title: "Badge Sync", body: "Connect local access database and card reader events with the camera feed schedule." },
      { title: "Deploy Edge App", body: "Install inference modules on cameras pointing at main thresholds." },
      { title: "Verify Actions", body: "Audit detection rate and calibrate door status sensors." },
    ],
    tech: ["Tailgating Detection", "Access Control API", "ONVIF cameras", "Edge AI"],
    techExpertise: surveillanceTechExpertise,
    extraSection: SecuritySection,
    extraSectionImage: "/homeCaseStudy/surveillance-access.png",
    faqs: [
      { q: "Can it run on-premises?", a: "Yes. All access control data stays local for maximum security." },
      { q: "Does it support facial recognition?", a: "Optionally, yes, or it can operate strictly on person counting and tailgating shapes to maintain privacy." },
    ],
    siblingLinks: [
      { to: "/solutions/intrusion-detection", label: "Intrusion Detection" },
      { to: "/solutions/weapon-detection", label: "Weapon Detection" },
    ],
  },

  "perimeter-monitoring": {
    eyebrow: "AI Video Surveillance",
    title: "Perimeter Monitoring",
    lede: "Continuous 24/7 boundary and fence-line monitoring with high-precision threat classification that eliminates false alarms from weather or wildlife.",
    accent: BRAND.green,
    Icon: Eye,
    heroStats: [
      { value: "24/7", label: "Boundary guard" },
      { value: "Low false", label: "Alarms" },
      { value: "PTZ track", label: "Smart zoom" },
      { value: "Thermal", label: "Compatible" },
    ],
    whoFor: [
      "Campus managers, solar farms, airports, and construction sites needing outer perimeter security.",
      "Large industrial plants with long boundaries that are difficult to patrol manually.",
      "Agricultural lands or remote storage locations seeking active fence-line alerts.",
    ],
    capabilities: [
      { title: "PTZ Tracking Control", body: "Automatically command Pan-Tilt-Zoom cameras to track and zoom in on detected boundary breaches." },
      { title: "Human/Vehicle Classifier", body: "Ignores small animals, birds, wind-blown branches, and weather changes to keep alerts relevant." },
      { title: "Thermal Analytics", body: "Integrate thermal camera feeds to detect boundaries even in total darkness, fog, or heavy rain." },
    ],
    outcomes: [
      { metric: "95%", label: "Fewer false alerts", context: "Filters out environmental noise, letting guards focus on real threats." },
      { metric: "24/7", label: "Active vigilance", context: "Eliminates patrols by automating fence-line threat detection." },
      { metric: "PTZ zoom", label: "Detailed evidence", context: "Enables clear identification of details at long distances." },
    ],
    process: [
      { title: "Boundary Setup", body: "Map the outer fence lines and camera ranges." },
      { title: "Integrate PTZ", body: "Link camera pan/tilt controls with visual coordinates." },
      { title: "Go Live", body: "Initiate active monitoring with alert filtering." },
    ],
    tech: ["PTZ Auto-Tracking", "Thermal Camera Analytics", "Boundary tripwires"],
    techExpertise: surveillanceTechExpertise,
    extraSection: SecuritySection,
    extraSectionImage: "/homeCaseStudy/surveillance-intrusion.png",
    faqs: [
      { q: "Does it work in complete darkness?", a: "Yes, when integrated with infrared or thermal cameras." },
      { q: "How long is the fence line range?", a: "Depending on camera optics, the system can detect human shapes up to 300 meters away." },
    ],
    siblingLinks: [
      { to: "/solutions/intrusion-detection", label: "Intrusion Detection" },
      { to: "/solutions/fire-smoke-detection", label: "Fire & Smoke Detection" },
    ],
  },
};

export const surveillanceSlugs = Object.keys(surveillanceSolutions);
