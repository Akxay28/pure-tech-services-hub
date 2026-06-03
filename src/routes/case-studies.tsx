import { createFileRoute, Outlet, useMatchRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  SectionHeader,
  CaseStudyCard,
  CTASection,
} from "@/components/site/Primitives";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real outcomes from Pure Technology" },
      {
        name: "description",
        content:
          "Measurable results from recent Pure Technology engagements — AI, product engineering, and IT staffing across BFSI, healthcare, retail, and SaaS.",
      },
      { property: "og:title", content: "Case Studies — Pure Technology" },
      {
        property: "og:description",
        content:
          "Numbers, not narratives. Read how senior Pure Tech teams shipped production AI, modern platforms, and dedicated squads.",
      },
    ],
  }),
  component: CaseStudiesLayout,
});

const studies = [

  // Schlinder - ware house management system - software development
  {
    "client": "Warehouse Management System",
    "sector": "Manufacturing / Logistics",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/Warehouse Management System.png",
    "headline": "Integrated Warehouse Management System achieved 91% verification accuracy and 100% seamless data traceability.",
    "body": "Built a comprehensive Warehouse Management System for Schindler digitizing material verification and production data management. Features machine integration, Bar/QR code automation, dual-portal architecture, and production linkage — bridging the gap between physical measurements and digital records to ensure every production order is backed by accurate, real-time data.",
    "metrics": [
      { "v": "91%", "l": "High Accuracy Verification" },
      { "v": "100%", "l": " " },
      { "v": "70%", "l": "Optimized Rework Tracking" }
    ],
    "related": "/services/schindler-warehouse-management-system",
  
    "projectName": "Warehouse Management System – Integrated Material Verification & Data Platform",
    "objective": "Schindler partnered with Pure Technology to develop a comprehensive Warehouse Management System (WMS) designed to digitize material verification and production data management. The goal was to bridge the gap between physical measurements and digital records, ensuring every production order is backed by accurate, real-time data.",
    "solutions": [
      "Machine Integration for direct connection between measuring machines and central data records.",
      "Bar/QR Code Automation for efficient inventory and production order label generation.",
      "Dual-Portal Architecture for separate yet unified access across management levels.",
      "Production Linkage to ensure real-time synchronization between production orders and material specs."
    ],
    "challenges": [
      "Manual and fragmented material verification processes prone to human error.",
      "Lack of direct integration between measuring machines and central data records.",
      "Difficulty in tracking rework jobs and maintaining standards for material specs.",
      "Inefficient manual label generation for inventory and production orders."
    ],
    "keyBenefits": [
      { "value": "91%", "label": "High Accuracy Verification" },
      { "value": "100%", "label": "Seamless Data Traceability" },
      { "value": "70%", "label": "Optimized Rework Tracking" },
      { "value": "35%", "label": "Unified Management" }
    ],
    "results": [
      "Enhanced Quality Control",
      "Improved Operational Speed",
      "Data Integrity",
      "Resource Accountability"
    ],
    "techStack": [
      { "category": "Frameworks", "items": "ASP.NET Core", "icon": "ti-layout" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Specialized", "items": "Measuring Machine Integration API", "icon": "ti-plug" }
    ],
    "conclusion": "The Schindler Warehouse Management System serves as a robust digital foundation for material integrity and production efficiency. By centralizing measurements and automating the verification-to-labeling workflow, Pure Technology delivered a solution that ensures Schindler maintains its high standards for precision and data-driven manufacturing."
  },

  // tata autocomp - software development
  {
    "client": "Quick Response Board",
    "sector": "Automotive Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/Quick Response Board - tata autocomp.png",
    "headline": "Digital 8D Problem Solving Platform achieved 100% digital adoption and 90% real-time complaint visibility.",
    "body": "Built a Quick Response Board (QRB) platform for TATA AutoComp digitizing the Eight Disciplines (8D) problem-solving methodology. Features centralized complaint dashboards, role-based access for Admins, Users, and Repairmen, automated resolution tracking, and Power BI integration — transforming manual complaint management into a structured, data-driven quality improvement system.",
    "metrics": [
      { "v": "100%", "l": "Digital 8D Adoption" },
      { "v": "90%", "l": "Real-Time Visibility" },
      { "v": "55%", "l": "Enhanced Quality Control" }
    ],
    "related": "/services/quick-response-board-8d-problem-solving",
  
    "projectName": "Quick Response Board (QRB) – Digital 8D Problem Solving Platform",
    "objective": "TATA AutoComp partnered with Pure Technology to digitize and streamline its complaint management process through the Quick Response Board (QRB). The system is built on the Eight Disciplines (8D) methodology, designed to identify root causes, implement short-term fixes, and establish long-term solutions to prevent recurring quality issues.",
    "solutions": [
      "Digital 8D Workflow: A structured system to utilize all 8D principles for efficient problem-solving.",
      "Centralized Complaint Dashboard: Real-time tracking of complaints received from the TATA AutoComp CD Department.",
      "Role-Based Access: Dedicated interfaces for Admins, Users, and Repairmen to manage tasks.",
      "Automated Tracking: Efficiently update, manage, and track progress throughout the resolution cycle."
    ],
    "challenges": [
      "Difficulty in manually tracking customer complaints and their resolution status.",
      "Lack of a standardized, digital framework for the 8D problem-solving process.",
      "Challenges in identifying root causes and ensuring long-term prevention of defects.",
      "Inconsistent visibility into the problem-solving journey across departments."
    ],
    "keyBenefits": [
      { "value": "100%", "label": "Digital 8D Adoption" },
      { "value": "55%", "label": "Enhanced Quality Control" },
      { "value": "90%", "label": "Real-Time Visibility" },
      { "value": "35%", "label": "Faster Root Cause Analysis" }
    ],
    "results": [
      "Systematic Problem Solving",
      "Increased Accountability",
      "Operational Reliability",
      "Simplified Auditing"
    ],
    "techStack": [
      { "category": "Languages", "items": "PHP, JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-cloud" },
      { "category": "Frameworks", "items": "Laravel, Vue.js", "icon": "ti-layout" },
      { "category": "Integrations", "items": "REST APIs, Secure Authentication Modules", "icon": "ti-plug" }
    ],
    "conclusion": "The TATA Quick Response Board stands as a vital tool in TATA AutoComp's commitment to manufacturing excellence. By digitalizing the 8D methodology, Pure Technology has provided a robust framework that transforms customer complaints into opportunities for continuous improvement and long-term reliability."
  },

  // Bridgestone safety dashboard system - Software development
  {
    "client": "Safety Dashboard System",
    "sector": "Industrial Safety / Manufacturing Automation",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/Safety Dashboard System bridgestone.png",
    "headline": "Centralized Safety Dashboard System digitized 90% of safety observations and cut manual reporting effort by 60%.",
    "body": "Built a centralized, real-time Safety Dashboard System for Bridgestone replacing manual safety observation and reporting practices. Features digital observation modules, automated email notification engine, approval workflows, and instant Excel/PDF export delivering cross-department visibility, stronger compliance, and a live incident tracking platform",
    "metrics": [
      { "v": "60%", "l": "Reduction in Manual Reporting" },
      { "v": "90%", "l": "Digitization of Safety Observations" },
      { "v": "80%", "l": "Faster Reporting  & Excel/PDF Export" }
    ],
    "related": "/services/safety-dashboard-system-compliance-portal",
  
    "projectName": "Safety Dashboard System – Centralized Digital Platform for Safety Observation, Compliance & Incident Prevention",
    "objective": "Bridgestone partnered with Pure Technology Solutions to transform its manual safety observation and reporting practices into a centralized, digital, real-time Safety Dashboard System. The goal was to eliminate manual entry gaps, strengthen compliance, automate reporting, ensure visibility across departments, and empower the safety team with live insights to support the mission of achieving a zero-incident environment.",
    "solutions": [
      "Digital Safety Observation Module for structured, consistent safety reporting.",
      "Real-Time Dashboard & Analytics for live visibility of open, in-progress, and closed observations.",
      "Automated Email Notification Engine for escalations and reminders on open issues.",
      "Approval & Verification Workflow for accountable multi-level sign-off processes."
    ],
    "challenges": [
      "Manual safety observation entries led to inconsistent reporting and data gaps.",
      "Lack of unified visibility across different departments and contractors.",
      "Absence of an automated escalation mechanism or reminder system for open issues.",
      "Difficulty tracking the status of open, in-progress, and closed observations.",
      "Variation in data formats caused errors and inefficiencies during audits."
    ],
    "keyBenefits": [
      { "value": "60%", "label": "Reduction in Manual Reporting Effort via Automation" },
      { "value": "30%", "label": "Real-Time Visibility of Open vs Closed Issues" },
      { "value": "90%", "label": "Digitization of Safety Observations and Preventive Actions" },
      { "value": "80%", "label": "Faster Reporting Cycles with Instant Excel/PDF Export" }
    ],
    "results": [
      "Improved Safety Compliance",
      "Higher Accountability",
      "Data-Driven Decision-Making",
      "Stronger Contractor Safety Monitoring",
      "Audit Readiness"
    ],
    "techStack": [
      { "category": "Frameworks", "items": "ASP.NET Core", "icon": "ti-layout" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "On-Premises", "icon": "ti-server" }
    ],
    "conclusion": "The Bridgestone Safety Dashboard System stands as a powerful digital transformation initiative that enhances workplace safety, strengthens compliance, and empowers management with actionable insights. By centralizing safety observations, automating communication, and enabling real-time analytics, Pure Technology Solutions successfully delivered a future-ready platform that aligns with Bridgestone's zero-incident commitment."
  },

  // Sandvik Vehicle Access Management System - Software development
  {
    "client": "Vehicle Access Management System",
    "sector": "Industrial Automation / Corporate Security",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/Vehicle Access Management System - sandvik.png",
    "headline": "Smart Vehicle Access Management System achieved 90% automated FastTag authentication and 80% real-time gate visibility.",
    "body": "Built a unified, intelligent Vehicle Access Management System for Sandvik Coromant integrating UHF Reader-based FastTag scanning, boom barrier control, SSO authentication, and automated alert engine. Delivers 100% digital vehicle documentation & fully automated security workflows across multiple locations.",
    "metrics": [
      { "v": "90%", "l": "Automated Vehicle Authentication via FastTag Scanning" },
      { "v": "80%", "l": "Real-Time Visibility of Vehicle Movement Across All Gates" },
      { "v": "10%", "l": "Manual Logging Required by Security Teams (Fully Automated)" }
    ],
    "related": "/services/vehicle-access-management-system",
  
    "projectName": "Vehicle Access Management System – A Smart, Secure & Automated Access Control Solution",
    "objective": "Sandvik Coromant partnered with Pure Technology to modernize and automate its vehicle entry and parking management operations across multiple locations. The goal was to create a unified, secure, and intelligent system that seamlessly integrates with existing boom barriers, supports employee authentication, and enhances overall access control efficiency.",
    "solutions": [
      "Integration with Existing Infrastructure including boom barriers from different vendors.",
      "UHF Reader-Based FastTag Scanning for automated vehicle authentication.",
      "Real-Time Dashboards for multi-gate vehicle movement visibility.",
      "Automated Alert Engine for escalations and parking time limit violations.",
      "Single Sign-On (SSO) for streamlined employee authentication.",
      "Emergency Override for manual control in exceptional situations."
    ],
    "challenges": [
      "Existing UHF readers were in poor condition and required replacement.",
      "Complexities in multi-location mapping and entity-level separation.",
      "Ensuring seamless integration with boom barriers from different vendors.",
      "Managing duplicate vehicles and ensuring only one vehicle is allowed at a time.",
      "Difficulty tracking vehicles parked beyond time limits with automated escalations."
    ],
    "keyBenefits": [
      { "value": "100%", "label": "Digital Record of Vehicle Documentation with Secure Uploads" },
      { "value": "90%", "label": "Automated Vehicle Authentication via FastTag Scanning" },
      { "value": "10%", "label": "Manual Logging Required by Security Teams (Fully Automated)" },
      { "value": "80%", "label": "Real-Time Visibility of Vehicle Movement Across All Gates" }
    ],
    "results": [
      "Improved Security & Compliance",
      "Reduced Manual Workload",
      "Centralized Control",
      "Better Parking Discipline",
      "Complete Audit Trails"
    ],
    "techStack": [
      { "category": "Frameworks", "items": "ASP.NET Core", "icon": "ti-layout" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Hosting", "items": "On-Premises", "icon": "ti-server" }
    ],
    "conclusion": "Pure Technology successfully designed and implemented a robust Vehicle Access Management System tailored specifically for Sandvik Coromant. The solution ensures high security, reduces manual intervention, and offers real-time visibility into access patterns. With integrated UHF scanning, automated notifications, and seamless boom barrier control, Sandvik now operates a future-ready, highly secure, and fully automated access management system."
  },

  // Bridgestone - Bladder Inventory Management  - Mobile app development
  {
    "client": "Bladder Inventory System",
    "sector": "Manufacturing / Tire Production & Inventory Management",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/Bladder Inventory System - bridgestone.png",
    "headline": "Bladder Inventory Management mobile app improved inventory accuracy by 75% and stock checking efficiency by 90%.",
    "body": "Built a comprehensive mobile application for bladder inventory tracking, inward/outward movement management, stock checking, and consumption recording across Bridgestones. Features supervisor-wise shift dashboards, multi-location stock search, barcode management, and real-time consumption tracking.",
    "metrics": [
      { "v": "75%", "l": "Improvement in Bladder Inventory Accuracy" },
      { "v": "90%", "l": "Better Stock Checking Efficiency with Search Functionality" },
      { "v": "65%", "l": "Faster Inward/Outward Processing" }
    ],
    "related": "/services/bladder-inventory-management-mobile-app",
  
    "projectName": "Bladder Inventory Management System – Comprehensive Bladder Tracking & Stock Control Mobile Application",
    "objective": "The Bladder Inventory Management System is a comprehensive mobile application designed to facilitate bladder inventory tracking, inward/outward movement management, stock checking, hold area monitoring, and consumption recording for Bridgestone's tire manufacturing operations. The solution provides dashboard with date, time, shift details, supervisor information, bladder inventory access, profile management, recent activity tracking, and bladder consumed monitoring with complete inward/outward processing capabilities.",
    "solutions": [
      "Comprehensive Dashboard with date, time, shift details, and supervisor information.",
      "Inward/Outward Management for bladder movement with rack, bin, and size specifications.",
      "Stock Checking System with multi-location search and maker date filtering.",
      "Bladder Consumed Tracking with machine assignment and barcode management."
    ],
    "challenges": [
      "Manual bladder inventory tracking causing stock discrepancies and production delays in tire manufacturing.",
      "Difficulty in managing inward/outward movements with rack, bin, and bladder size specifications.",
      "Lack of real-time stock checking system for multiple bladder locations and maker dates.",
      "No centralized consumption tracking with cutting machine assignments and barcode management."
    ],
    "keyBenefits": [
      { "value": "75%", "label": "Improvement in Bladder Inventory Accuracy and Tracking" },
      { "value": "65%", "label": "Faster Inward/Outward Processing and Stock Updates" },
      { "value": "90%", "label": "Better Stock Checking Efficiency with Search Functionality" },
      { "value": "55%", "label": "Reduction in Bladder Consumption Tracking Errors" }
    ],
    "results": [
      "Enhanced Inventory Accuracy",
      "Improved Stock Management",
      "Streamlined Inward/Outward Process",
      "Better Consumption Tracking",
      "Real-Time Stock Visibility"
    ],
    "techStack": [
      { "category": "Languages", "items": "Kotlin", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Frameworks", "items": "Flutter", "icon": "ti-layout" },
      { "category": "Cloud/Hosting", "items": "AWS, Google Cloud", "icon": "ti-cloud" }
    ],
    "conclusion": "The Bladder Inventory Management System provides a complete mobile platform for Bridgestone, offering supervisor-wise shift tracking, inward/outward bladder processing, multi-location stock search, and detailed consumption tracking with machine assignment — greatly improving manufacturing efficiency and inventory accuracy."
  },

  // Visitor Pass Admin Pannel - web application
  {
    "client": "VisitorPass",
    "sector": "Security & Access Management / Visitor Tracking Platform",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/visitor pass.png",
    "headline": "Comprehensive Visitor Pass admin panel improved visitor tracking by 70% and cut check-in time by 60%.",
    "body": "Built a full-featured client admin panel for visitor management, member tracking, guard coordination, and departmental analytics. Features multi-metric dashboards, MOM/WOW trend analysis, pie chart visualizations, and multi-module navigation — eliminating manual logs and delivering real-time security and access insights.",
    "metrics": [
      { "v": "70%", "l": "Improvement in Visitor Tracking and Security Management" },
      { "v": "85%", "l": "Better Departmental Visitor Analytics and Insights" },
      { "v": "50%", "l": "Reduction in Manual Visitor Log Maintenance" }
    ],
    "related": "/services/visitorpass-client-admin-panel",
  
    "projectName": "Visitor Pass – Comprehensive Client Admin Panel & Visitor Management System",
    "objective": "Visitor Pass is a comprehensive client admin panel designed to facilitate visitor management, member tracking, guard coordination, and departmental visitor analytics for organizations. The solution provides dashboard overview showing total users, total members, total guards, total visitors, department-based visitor summary with pie chart visualization, recent visitors list with timestamps, MOM (Month-over-Month) visitors tracking, and WOW (Week-over-Week) visitors trend analysis with complete user, member, and visitor management modules.",
    "solutions": [
      "Multi-Metric Dashboard for real-time overview of users, members, guards, and visitors.",
      "Department Visitor Analytics with pie chart visualization and trend insights.",
      "Recent Visitors Tracking with timestamps and MOM/WOW trend analysis.",
      "Multi-Module Navigation covering users, members, visitor lists, purposes, luggage, and settings."
    ],
    "challenges": [
      "Manual visitor tracking causing security gaps and entry/exit management issues.",
      "Lack of centralized dashboard for user, member, guard, and visitor statistics.",
      "Difficulty in analyzing departmental visitor patterns and trends over time.",
      "No unified system for purpose tracking, luggage management, and recent visitor monitoring."
    ],
    "keyBenefits": [
      { "value": "70%", "label": "Improvement in Visitor Tracking and Security Management" },
      { "value": "60%", "label": "Faster Visitor Check-in and Approval Processes" },
      { "value": "85%", "label": "Better Departmental Visitor Analytics and Insights" },
      { "value": "50%", "label": "Reduction in Manual Visitor Log Maintenance" }
    ],
    "results": [
      "Enhanced Security Management",
      "Improved Visitor Tracking",
      "Streamlined Check-In Process",
      "Better Departmental Analytics",
      "Comprehensive Admin Control"
    ],
    "techStack": [
      { "category": "Languages", "items": "JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Frameworks", "items": "Laravel", "icon": "ti-layout" }
    ],
    "conclusion": "The Visitor Pass admin panel delivers a complete visitor management platform with real-time dashboards for users, guards, and monthly visitors. It includes department-wise analytics, recent visitor logs, MOM/WOW trend insights, and modules for users, members, visitor lists, purposes, luggage, and settings — greatly improving security, tracking efficiency, and administrative control."
  },

  // Bridgestone IOT & MTR Digitalization - Software Development
  {
    "client": "MTR Raw Material Report Digitalization",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/MTR Raw Material Report Digitalization - Bridgestone.png",
    "headline": "IoT and AI-driven MTR digitalization cut report generation time by 70% and reduced test errors by 90%.",
    "body": "Built a web-based MTR raw material report digitalization system with IoT-enabled real-time data capture, AI-driven predictive quality analytics, and cloud-based remote monitoring. Eliminates manual data entry, drastically reduces test report errors, and enables smarter, faster quality decisions across manufacturing operations.",
    "metrics": [
      { "v": "70%", "l": "Reduction in Report Generation Time" },
      { "v": "90%", "l": "Fewer Errors in Test Reports" },
      { "v": "50%", "l": "Better Data Traceability" }
    ],
    "related": "/services/mtr-raw-material-report-digitalization",
  
    "projectName": "MTR Raw Material Report Digitalization",
    "objective": "To digitize the MTR raw material testing process by implementing IoT-enabled data capture, AI-driven analytics, and cloud-based reporting, aiming to eliminate manual errors, enhance operational efficiency, and enable real-time quality monitoring for faster and smarter decision-making.",
    "solutions": [
      "Implemented IoT devices to capture real-time test data.",
      "Developed a web-based system for automatic report generation.",
      "Leveraged AI-driven analytics for predictive quality insights.",
      "Enabled cloud-based access for remote monitoring."
    ],
    "challenges": [
      "Manual recording of test data from MTR devices.",
      "Time-consuming report generation process.",
      "High risk of human errors in data entry.",
      "Delays in accessing and analyzing test results.",
      "Lack of real-time visibility and remote monitoring."
    ],
    "keyBenefits": [
      { "value": "70%", "label": "Reduction in Report Generation Time" },
      { "value": "30%", "label": "Increase in Operational Efficiency" },
      { "value": "90%", "label": "Fewer Errors in Test Reports" },
      { "value": "50%", "label": "Better Data Traceability" }
    ],
    "results": [
      "Significantly faster report generation",
      "Improved operational efficiency",
      "Drastically reduced errors in test reports",
      "Real-time quality monitoring enabled",
      "Enhanced data traceability and audit readiness"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python", "icon": "ti-code" },
      { "category": "Database", "items": "PostgreSQL", "icon": "ti-database" },
      { "category": "Hosting", "items": "On-Premises", "icon": "ti-server" },
      { "category": "Frameworks", "items": "React.js", "icon": "ti-layout" }
    ],
    "conclusion": "By digitalizing the MTR raw material testing process, the client achieved faster, more accurate, and reliable operations. The integrated IoT and AI-driven solution not only streamlined workflows but also empowered real-time decision-making, setting the foundation for scalable and intelligent manufacturing."
  },
  // Bridgestone 3d cad powered MME Trolly system - Software development
  {
    "client": "MHE Trolly ",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/MHE Trolly Bridgestone.png",
    "headline": "3D CAD-powered MHE Trolly system achieved 100% paperless operations and cut response time by 50%.",
    "body": "Built a digital trolley maintenance platform replacing paper-based workflows with 3D CAD visualization, predictive defect analytics, and automated MHE service center alerts. Fully paperless job card creation and cloud infrastructure ensure scalability, security, and 40% productivity gains across maintenance operations.",
    "metrics": [
      { "v": "50%", "l": "Faster Response Time" },
      { "v": "100%", "l": "Paperless Operations" },
      { "v": "40%", "l": "Productivity Boost" }
    ],
    "related": "/services/mhe-trolly-digital-transformation",
  
    "projectName": "MHE Trolly – Digital Transformation in Trolley Maintenance",
    "objective": "The goal of MHE Trolly is to digitize and streamline trolley maintenance by replacing paper-based workflows with a user-friendly system. It aims to improve defect detection through 3D CAD visualization, reduce response time with automated alerts, boost productivity, and cut costs. By leveraging cloud infrastructure, the solution ensures scalability, security, and 100% paperless operations.",
    "solutions": [
      "Defect Identification: Predictive analytics for proactive maintenance.",
      "3D CAD Trolley Model: Interactive interface for accurate defect marking.",
      "Automated Notifications: Instant alerts to MHE service center.",
      "Paperless Digital Workflow: Fully automated job card creation."
    ],
    "challenges": [
      "Complex paper-based defect reporting system.",
      "Difficulty in locating defective trolleys.",
      "Need for user-friendly system for non-tech workers.",
      "Requirement for 3D CAD visualization for precise defect marking."
    ],
    "keyBenefits": [
      { "value": "50%", "label": "Faster Response Time" },
      { "value": "30%", "label": "Cost Savings" },
      { "value": "40%", "label": "Productivity Boost" },
      { "value": "100%", "label": "Paperless Operations" }
    ],
    "results": [
      "Significantly faster response time, reducing maintenance delays",
      "Noticeable cost savings through optimized repair workflows",
      "Increased productivity with quicker and more accurate defect reporting",
      "Fully paperless operations leading to better efficiency and compliance"
    ],
    "techStack": [
      { "category": "Languages", "items": ".Net Core", "icon": "ti-code" },
      { "category": "Database", "items": "SQL Server", "icon": "ti-database" },
      { "category": "Technology", "items": "B-Rep", "icon": "ti-cube" }
    ],
    "conclusion": "By leveraging 3D CAD technology, MHETrolly has redefined MHE trolley maintenance, ensuring faster repairs, cost reductions, and seamless digital tracking. A game-changer in material handling automation."
  },

  // Bridgestone KPI dashboard - software development
  {
    "client": "KPI Dashboard for Manufacturing",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/KPI Dashboard bridgestone.png",
    "headline": "Power BI KPI Dashboard boosted production efficiency by 20% and delivered 40% faster reporting.",
    "body": "Developed a centralized Power BI-based KPI Dashboard integrating SQL Server data aggregation, AI-powered defect trend analysis, and predictive analytics for power consumption. Enables real-time plant management insights — reducing wastage, accelerating decisions, and improving resource utilization.",
    "metrics": [
      { "v": "20%", "l": "Increase in Production" },
      { "v": "40%", "l": "Faster Reporting  Dashboards" },
      { "v": "35%", "l": "Improvement in Resource Utilization" }
    ],
    "related": "/services/kpi-dashboard-industrial-manufacturing",
  
    "projectName": "KPI Dashboard Implementation for Industrial Manufacturing",
    "objective": "Develop a Power BI-based KPI Dashboard to streamline production tracking, defect analysis, power consumption, and overall plant efficiency.",
    "solutions": [
      "Developed a centralized KPI Dashboard using Power BI.",
      "Integrated SQL Server for automated data aggregation.",
      "Implemented AI-powered defect trend analysis for proactive quality control.",
      "Designed predictive analytics models to optimize power consumption."
    ],
    "challenges": [
      "Complex data collection from multiple departments.",
      "Manual reporting inefficiencies leading to delayed decision-making.",
      "Lack of real-time insights for plant management."
    ],
    "keyBenefits": [
      { "value": "20%", "label": "Increase in Production Efficiency" },
      { "value": "15%", "label": "Reduction in Wastage" },
      { "value": "40%", "label": "Faster Reporting with Automated Dashboards" },
      { "value": "35%", "label": "Improvement in Resource Utilization" }
    ],
    "results": [
      "Reduced reporting time through automated dashboards",
      "Minimized material wastage with optimized resource planning",
      "Accelerated decision-making using real-time insights",
      "Improved data accuracy and consistency"
    ],
    "techStack": [
      { "category": "Frameworks", "items": "Power BI", "icon": "ti-layout" },
      { "category": "Database", "items": "MongoDB", "icon": "ti-database" },
      { "category": "AI/ML", "items": "TensorFlow", "icon": "ti-brain" }
    ],
    "conclusion": "The Bridgestone KPI Dashboard project revolutionized operations, driving a 20% efficiency boost and 40% faster reporting. By automating data collection, the solution empowered the organization with real-time insights and proactive quality control."
  },

  // Bridgestone TMA usage monitoring - software development
  {
    "client": "TMA usage monitoring",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/TMA usage monitoring - bridgestone.png",
    "headline": "Power BI and AI-driven TMA project cut reporting time by 60% and boosted data accuracy by 40%.",
    "body": "Built a smart TMA usage monitoring solution powered by automated Power BI dashboards, structured data validation, and AI/ML predictive analytics. Replaces manual reporting with real-time insights — reducing material wastage, cutting IT dependency, and enabling proactive, data-driven decision-making.",
    "metrics": [
      { "v": "60%", "l": "Reduction in Reporting Time" },
      { "v": "40%", "l": "Increase in Data Accuracy" },
      { "v": "25%", "l": "Reduction in IT Support" }
    ],
    "related": "/services/tma-project-powerbi-ai",
  
    "projectName": "TMA Project",
    "objective": "The project aimed to automate manual reporting using Power BI, improve data accuracy through validation and cleaning, and enable real-time monitoring of TMA usage. By integrating AI and ML for predictive analytics, the goal was to enhance decision-making, reduce material wastage, and drive operational efficiency and cost savings.",
    "solutions": [
      "Deployed automated Power BI dashboards to streamline data collection and reporting.",
      "Implemented structured data cleaning and validation processes.",
      "Integrated AI & ML models to enable predictive analytics and proactive planning.",
      "Used data-driven insights to optimize resource allocation and reduce waste."
    ],
    "challenges": [
      "Manual data entry leading to inefficiencies.",
      "High risk of data inconsistencies and errors.",
      "Delayed insights and reactive decision-making.",
      "Ineffective resource planning causing material wastage."
    ],
    "keyBenefits": [
      { "value": "60%", "label": "Reduction in Reporting Time" },
      { "value": "15%", "label": "Decrease in Material Wastage" },
      { "value": "40%", "label": "Increase in Data Accuracy" },
      { "value": "25%", "label": "Reduction in IT Support Dependency" }
    ],
    "results": [
      "Significant reduction in reporting time through automation",
      "Noticeable decrease in material wastage with optimized planning",
      "Faster, data-driven decision-making enabled by real-time insights",
      "Improved accuracy and consistency in reporting"
    ],
    "techStack": [
      { "category": "Frameworks", "items": "Power BI", "icon": "ti-layout" },
      { "category": "Database", "items": "MongoDB", "icon": "ti-database" },
      { "category": "AI/ML", "items": "TensorFlow", "icon": "ti-brain" }
    ],
    "conclusion": "The TMA Project replaced manual processes with a smart, data-driven solution using Power BI, AI, and ML. It improved data accuracy, enabled real-time insights, and enhanced operational efficiency — delivering clear cost savings and better decision-making across the organization."
  },
  // Bridgestone dot serial code case - web development
  {
    "client": "AI-powered Dot Serial Code Generation",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/AI-powered Dot Serial Code Generation - bridgestone.png",
    "headline": "AI-powered Dot Serial Code Generation delivered 100% accuracy and cut process time by 50%.",
    "body": "Built an AI-driven Dot Serial Code Generation system seamlessly integrated with PDA devices for real-time data validation. Automates code generation with error-flagging algorithms and instant report outputs — eliminating manual effort, reducing costs by 25%, and boosting team productivity and saving all the Team time.",
    "metrics": [
      { "v": "50%", "l": "Time Savings often" },
      { "v": "100%", "l": "Accuracy with 100% based accuracy" },
      { "v": "25%", "l": "Cost Reduction" }
    ],
    "related": "/services/dot-serial-code-generation-ai-automation",
  
    "projectName": "Dot Serial Code Generation – AI-Powered Automation for 100% Accuracy",
    "objective": "The goal was to automate the Dot Serial Code Generation process to eliminate manual errors, reduce dependency on resources, and enhance operational efficiency. By leveraging AI and integrating with PDA devices, the solution aimed to streamline data retrieval and ensure real-time accuracy in code generation.",
    "solutions": [
      "AI-driven Automation – Seamless integration with PDA devices for real-time data validation.",
      "Error-Free Reporting – AI algorithms flag inconsistencies before code generation.",
      "Instant Dot Code Report Generation – Automated process ensures real-time accuracy."
    ],
    "challenges": [
      "Data Retrieval Complexity – Manual extraction from Production & BOSS DB.",
      "High Resource Dependency – 2-3 users required for Dot Serial Code generation.",
      "Error-Prone Process – Manual checks caused inaccuracies."
    ],
    "keyBenefits": [
      { "value": "50%", "label": "Time Savings" },
      { "value": "100%", "label": "Accuracy" },
      { "value": "25%", "label": "Cost Reduction" },
      { "value": "30%", "label": "Productivity Boost" }
    ],
    "results": [
      "Reduced process time from hours to minutes",
      "Eliminated manual effort, freeing up multiple team members",
      "Achieved complete accuracy with AI-driven validation",
      "Improved reporting with real-time, error-free outputs",
      "Increased overall productivity and operational efficiency",
      "Delivered strong return on investment through time and cost savings"
    ],
    "techStack": [
      { "category": "Languages", "items": ".Net Core", "icon": "ti-code" },
      { "category": "Database", "items": "SQL Server", "icon": "ti-database" }
    ],
    "conclusion": "The AI-powered Dot Serial Code Generation System has transformed accuracy, efficiency, and productivity. With automation eliminating manual efforts and ensuring real-time validation, the system delivers exceptional ROI, saving time and resources while boosting operational performance."
  },

  // CEAT - SD
  {
    "client": "AIML-powered tire verification system",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/IML-powered tire verification system - ceat.png",
    "headline": "AI-powered tire verification system achieved 99% barcode accuracy and cut inspection time by 80%.",
    "body": "Built an AI and ML-powered tire verification system integrated with IoT-enabled PDA devices and a cloud-based reporting platform. Automates tire size consistency checks, barcode validation, and real-time data logging — eliminating manual paperwork and significantly reducing labor costs.",
    "metrics": [
      { "v": "80%", "l": "Reduction in Inspection Time" },
      { "v": "99%", "l": "Accuracy in Barcode Verification" },
      { "v": "60%", "l": "Increase in Productivity" }
    ],
    "related": "/services/ai-tire-verification-doping-project",
  
    "projectName": "AI-Powered Tire Verification System (Doping Project)",
    "objective": "The objective was to automate the tire verification process using AI to reduce manual errors, inspection time, and labor costs. By integrating IoT-enabled PDA devices and a cloud-based reporting system, the goal was to ensure real-time data logging, improve compliance, eliminate paperwork, and boost overall productivity.",
    "solutions": [
      "AI-powered automated verification system to ensure tire size consistency.",
      "ML-based barcode scanning to validate serial number and barcode alignment.",
      "IoT-enabled PDA devices for real-time alerts and data logging.",
      "Cloud-based reporting system for compliance tracking."
    ],
    "challenges": [
      "Manual inspection led to errors and inefficiencies.",
      "Time-consuming verification process for tire sizes and barcode alignment.",
      "No digital record-keeping, making audits difficult.",
      "High dependency on paperwork."
    ],
    "keyBenefits": [
      { "value": "80%", "label": "Reduction in Inspection Time" },
      { "value": "99%", "label": "Accuracy in Barcode Verification" },
      { "value": "60%", "label": "Increase in Productivity" },
      { "value": "30%", "label": "Cost Savings in Labor Expenses" }
    ],
    "results": [
      "Significant reduction in inspection time",
      "Reduced labor costs through automation",
      "Noticeable improvement in overall productivity",
      "Complete elimination of manual paperwork",
      "Enhanced compliance and audit readiness",
      "Streamlined and digitized verification workflow"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python", "icon": "ti-code" },
      { "category": "Database", "items": "PostgreSQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "On Premise", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Django", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "TensorFlow", "icon": "ti-brain" }
    ],
    "conclusion": "The AI-powered verification system transformed manual tire inspections into an efficient, automated process — boosting accuracy, reducing costs, and streamlining operations. This project highlights the impact of smart technologies in modernizing manufacturing workflows."
  },

  // Bridgestone tyre manufacturing - Mobile application
  {
    "client": "IoT-Diesel consumption system",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/IoT-Diesel consumption system - bridgestone.png",
    "headline": "IoT and Power BI-driven diesel management reduced fuel wastage by 30% and accelerated fuel decisions by 50%.",
    "body": "Built an IoT-powered diesel consumption monitoring system integrated with Power BI dashboards and AI/ML forecasting models. Enables real-time fuel tracking, accurate consumption analytics, and smarter procurement decisions — significantly reducing wastage and operational costs which help to grow and manage your business.",
    "metrics": [
      { "v": "30%", "l": "Reduction in Diesel" },
      { "v": "40%", "l": "Increase in Fuel Data" },
      { "v": "50%", "l": "Faster Fuel" }
    ],
    "related": "/services/diesel-consumption-iot-powerbi",
  
    "projectName": "Optimizing Diesel Consumption with IoT & Power BI",
    "objective": "The objective of the Diesel Project was to optimize diesel consumption by using IoT for real-time monitoring and Power BI for data analysis, enabling accurate tracking, reduced wastage, and improved operational efficiency.",
    "solutions": [
      "IoT sensors installed for real-time monitoring.",
      "Power BI dashboards for in-depth analytics.",
      "AI/ML models for forecasting diesel requirements."
    ],
    "challenges": [
      "Inefficient manual tracking of diesel usage.",
      "Difficulty in enrolling new forklifts into the system."
    ],
    "keyBenefits": [
      { "value": "30%", "label": "Reduction in Diesel Wastage" },
      { "value": "15%", "label": "Cost Savings on Procurement" },
      { "value": "40%", "label": "Increase in Fuel Data Accuracy" },
      { "value": "50%", "label": "Faster Fuel Decisions" }
    ],
    "results": [
      "Significant reduction in diesel wastage",
      "Noticeable cost savings on fuel procurement",
      "Improved accuracy in fuel data tracking",
      "Faster and more informed fuel-related decisions",
      "Streamlined operations with real-time monitoring",
      "Better forecasting for diesel requirements"
    ],
    "techStack": [
      { "category": "Languages", "items": "Dart", "icon": "ti-code" },
      { "category": "Database", "items": "PostgreSQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "On Premise", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Flutter", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "TensorFlow", "icon": "ti-brain" }
    ],
    "conclusion": "With IoT-enabled automation and AI-driven analytics, the Diesel Project has streamlined fuel tracking, enhanced operational efficiency, and reduced costs significantly."
  },

  // Tata Taco - SD
  {
    "client": "TQM-powered digital portal",
    "sector": "Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/TQM-powered digital portal - tata taco.png",
    "headline": "TQM-powered digital portal reduced repetitive task defects by 40% and boosted Kaizen participation by 60%.",
    "body": "Built an advanced digital portal embedding TQM principles and lean methodologies to streamline operational management. Covers Abnormality Management, Kaizen, Safety Walks, and Near Miss tracking — with custom KPI dashboards and lean tool integrations including 5S, VSM, and Poka-Yoke.",
    "metrics": [
      { "v": "40%", "l": "Faster changeovers" },
      { "v": "60%", "l": "Increase in Kaizen" },
      { "v": "35%", "l": "safety compliance" }
    ],
    "related": "/services/tqm-operational-excellence-portal",
  
    "projectName": "Streamlining Operational Excellence with Total Quality Management (TQM)",
    "objective": "An advanced digital portal was implemented to drive structured operational management and workflow optimization. The solution embedded TQM principles and lean methodologies to improve key areas: Abnormality Management, Near Miss Management, Suggestion Management, Safety Walks, and Kaizen Management.",
    "solutions": [
      "Abnormality Management with structured workflows for issue tracking and resolution.",
      "Kaizen Management for digital submission and management of employee suggestions.",
      "Safety Walk modules for scheduling, documenting, and real-time compliance.",
      "Custom dashboards for rapid KPI monitoring.",
      "Lean tools integration, including 5S, VSM, Poka-Yoke, SMED, Andon alerts."
    ],
    "challenges": [
      "Fragmented operations across departments led to inefficiencies.",
      "Limited proactive tools for tracking and reporting safety issues.",
      "Missed opportunities due to unsystematic capture of improvement ideas.",
      "Variable standards in workflows hindered productivity."
    ],
    "keyBenefits": [
      { "value": "40%", "label": "Faster changeovers enabled through SMED" },
      { "value": "60%", "label": "Increase in Kaizen participation" },
      { "value": "40%", "label": "Reduction in repetitive task defects" },
      { "value": "35%", "label": "Improvement in safety compliance & incident prevention" }
    ],
    "results": [
      "Significant reduction in operational downtime and error rates",
      "Notable improvement in employee engagement in continuous improvement",
      "Enhanced safety compliance with real-time incident tracking",
      "Fostered a culture of innovation and operational excellence"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python", "icon": "ti-code" },
      { "category": "Database", "items": "MongoDB", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS S3", "icon": "ti-cloud" },
      { "category": "Frameworks", "items": "Django", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "TensorFlow, Scikit-learn", "icon": "ti-brain" }
    ],
    "conclusion": "Integrating TQM tools and lean methodology into a centralized web portal transformed operational practices and safety, driving continuous improvement. This solution sets a benchmark for organizations seeking operational excellence and innovation."
  },

  // Bridgestone - chemical inventory - Software development  
  {
    "client": "Chemical Inventory & Management",
    "sector": "Tire Manufacturing",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/Chemical Inventory & Management - bridgestone.png",
    "headline": "AI-powered Chemical Inventory FIFO Management System reduced chemical waste by 25% and boosted compliance by 70%.",
    "body": "Built a Chemical Inventory FIFO Management System with IoT and RFID-based real-time tracking, smart alert systems, and an AI/ML-powered cloud dashboard. Ensures FIFO compliance, minimizes waste, and automates supervisor notifications for non-compliant actions.",
    "metrics": [
      { "v": "25%", "l": "Reduction in Chemical Wastage" },
      { "v": "40%", "l": "Improvement in Inventory Tracking Efficiency" },
      { "v": "60%", "l": "Reduction in Manual Efforts" }
    ],
    "related": "/services/chemical-inventory-fifo-management",
  
    "projectName": "Chemical Inventory FIFO Management System",
    "objective": "The project aimed to ensure FIFO compliance, automate chemical tracking using IoT and RFID, and reduce manual efforts through smart alerts. It focused on improving safety, minimizing waste, and providing real-time insights via a cloud dashboard powered by AI and ML.",
    "solutions": [
      "AI-Powered Tracking: Automated real-time tracking with IoT and RFID.",
      "Smart Alerts: Hooter and buzzer alert system to prevent incorrect material movement.",
      "Supervisor Notification: Automated image-based alerts for non-compliant actions.",
      "Cloud Dashboard: Real-time monitoring of chemical inventory (Pro and Non-Pro)."
    ],
    "challenges": [
      "Difficulty in tracking chemical storage and FIFO compliance.",
      "Inefficient monitoring of trolley movement.",
      "Risk of expired materials affecting production quality."
    ],
    "keyBenefits": [
      { "value": "25%", "label": "Reduction in Chemical Wastage" },
      { "value": "40%", "label": "Improvement in Inventory Tracking Efficiency" },
      { "value": "60%", "label": "Reduction in Manual Efforts" },
      { "value": "70%", "label": "Boost in Compliance & Safety" }
    ],
    "results": [
      "Reduced chemical waste and costs",
      "Improved inventory accuracy",
      "Lower manual effort",
      "Faster issue detection",
      "Better safety and compliance",
      "Smarter, data-driven decisions"
    ],
    "techStack": [
      { "category": "Languages", "items": ".Net Core", "icon": "ti-code" },
      { "category": "Database", "items": "SQL Server", "icon": "ti-database" },
      { "category": "Hardware", "items": "IOT Device", "icon": "ti-device-desktop" },
      { "category": "AI/ML", "items": "Predictive Analytics", "icon": "ti-brain" }
    ],
    "conclusion": "The implementation of this solution significantly reduced chemical waste, enhanced tracking accuracy, and ensured compliance with FIFO standards, demonstrating the power of AI-driven inventory management in manufacturing."
  },
  {
    // Questa AI
    "client": "Global Recruitment & Talent Development Organization",
    "sector": "Human Resources & Career Development",
    "accent": "var(--brand-blue)",
    "image": "/homeCaseStudy/2 case study.png",
    "headline": "AI-powered interview simulation platform improved candidate success rates by 78%.",
    "body": "Built an AI interview preparation platform with GPT-based simulations, real-time speech analytics, and smart proctoring. Delivers role-specific training and performance scoring while eliminating fraudulent hiring practices.",
    "metrics": [
      { "v": "78%", "l": "Increase in interview success rates" },
      { "v": "85%", "l": "Improvement in speech confidence" },
      { "v": "70%", "l": "Cost savings" }
    ],
    "related": "/services/ai-interview-platform",
  
    "projectName": "Questa AI Interviewer – Interview Simulation Platform",
    "objective": "AI-powered interview preparation platform transforming candidate training. Delivers simulations, speech analytics, and proctoring—improving success rates by 78%.",
    "solutions": [
      "AI Interview Simulation: GPT-based system generating role-specific questions.",
      "Real-Time Speech Analytics: Voice recognition analyzing fluency and confidence.",
      "Smart Proctoring: Video monitoring with behavior detection ensuring integrity.",
      "Analytics Dashboard: Performance scoring with skill gap identification."
    ],
    "challenges": [
      "Candidates underperforming due to inadequate practice.",
      "Delayed, subjective feedback from traditional methods.",
      "Expensive career coaching creating barriers.",
      "Remote hiring vulnerabilities and fraudulent practices."
    ],
    "keyBenefits": [
      { "value": "78%", "label": "Increase in interview success rates" },
      { "value": "60%", "label": "Reduction in preparation time" },
      { "value": "85%", "label": "Improvement in speech confidence" },
      { "value": "70%", "label": "Cost savings" }
    ],
    "results": [
      "78% higher pass rates",
      "65% fewer filler words",
      "$250K annual savings",
      "Scaled 50 to 1,500+ candidates monthly"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python", "icon": "ti-code" },
      { "category": "Database", "items": "PostgreSQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "On-Premises", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Django", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "Wav2Vec 2.0", "icon": "ti-brain" }
    ],
    "conclusion": "Questa AI revolutionized interview preparation by creating an intelligent, data-driven training platform that empowers candidates with personalized learning experiences, real-time feedback, and measurable skill development, while enabling organizations to conduct standardized and reliable talent assessments at scale."
  },
  // Cloud wise
  {
    "client": "Local GPT for Secure Financial Operations",
    "sector": "Financial Services & Banking",
    "accent": "#1D8EBA",
    "image": "/homeCaseStudy/cloudwise-local-gpt.png",
    "headline": "Fully on-premises AI platform achieved 300%+ ROI while maintaining zero-breach security.",
    "body": "Implemented a fully on-premises AI platform with offline LLMs, secure document intelligence, SQL-based analytics, and workflow automation. Strict regulatory requirements prevented external data sharing.",
    "metrics": [
      { "v": "85%", "l": "Faster document processing" },
      { "v": "95%", "l": "Data retrieval accuracy" },
      { "v": "300%+", "l": "First-year ROI" }
    ],
    "related": "/services/cloud-infrastructure",
  
    "projectName": "Local GPT – On-Premises AI Platform",
    "objective": "On-premises AI platform delivering enterprise capabilities without internet dependency. Enables document processing, workflow automation, and analytics while maintaining data sovereignty and encryption.",
    "solutions": [
      "Offline AI Infrastructure: Autonomous AI with LLMs in air-gapped environments.",
      "Zero-Trust Document Processing: Encrypted system with secure queries and multi-format processing.",
      "Intelligent SQL Agent: Natural language database querying for instant analytics.",
      "AI Workflow Automation: AI agents for compliance and regulatory reporting."
    ],
    "challenges": [
      "Regulatory compliance prohibiting external data transmission.",
      "Zero internet access requiring offline capabilities.",
      "Sensitive financial records needing data sovereignty.",
      "Legacy system integration with fragmented databases."
    ],
    "keyBenefits": [
      { "value": "85%", "label": "Reduction in document processing time" },
      { "value": "70%", "label": "Increase in operational efficiency" },
      { "value": "95%", "label": "Improvement in data retrieval accuracy" },
      { "value": "60%", "label": "Cost savings eliminating cloud subscriptions" }
    ],
    "results": [
      "10x processing capacity increase",
      "300%+ ROI first year",
      "Zero-breach security",
      "Scaled 50 to 5,000+ users"
    ],
    "techStack": [
      { "category": "Languages", "items": "JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "Postgres", "icon": "ti-database" },
      { "category": "Cloud", "items": "On-Premises", "icon": "ti-server" },
      { "category": "Frameworks", "items": "React.js & Node.js", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "Langchain, LangGraph, LLMs, Vector Databases", "icon": "ti-brain" }
    ],
    "conclusion": "Cloudwise AI established secure on-premises infrastructure eliminating internet dependencies while enabling unprecedented operational efficiencies and maintaining highest security standards."
  },
  // QgenX
  {
    "client": "Global E-Learning & Digital Marketing Agency - QgenX",
    "sector": "Digital Marketing, E-Learning & E-Commerce",
    "accent": "var(--brand-green)",
    "image": "/homeCaseStudy/QgenX.png",
    "headline": "AI-powered content suite scaled article production from 50 to 200+ monthly with 75% cost reduction.",
    "body": "Built an AI content that assessment questions, product descriptions, and visual assets. Eliminated freelancer dependency while boosting SEO performance and brand consistency across platforms.",
    "metrics": [
      { "v": "75%", "l": "Reduction in content creation time" },
      { "v": "80%", "l": "Improvement in conversion rates" },
      { "v": "60%", "l": "Increase in organic search traffic" }
    ],
    "related": "/services/ai-chatbot-development",
  
    "projectName": "Enterprise Content Acceleration with QgenX.ai",
    "objective": "AI-powered content creation suite revolutionizing digital content production. Generates articles, questions, product descriptions, and AI imagery—reducing costs by 75%.",
    "solutions": [
      "Intelligent Question Generation: AI creating contextually relevant assessment questions.",
      "Advanced Article Writing: Content framework producing structured articles with customizable parameters.",
      "SEO Product Descriptions: Intelligent copywriting generating conversion-focused descriptions.",
      "AI Visual Content: Generative AI enabling custom visual assets creation."
    ],
    "challenges": [
      "Overwhelming content demand creating unsustainable workloads.",
      "Poor SEO performance with inadequate keyword integration.",
      "Difficulty maintaining brand consistency across platforms.",
      "High production costs from freelancers and agencies."
    ],
    "keyBenefits": [
      { "value": "75%", "label": "Reduction in content creation time" },
      { "value": "60%", "label": "Increase in organic search traffic" },
      { "value": "80%", "label": "Improvement in conversion rates" },
      { "value": "65%", "label": "Cost savings" }
    ],
    "results": [
      "50 to 200+ articles monthly",
      "70% first-page rankings",
      "$180K annual savings",
      "10,000+ questions generated"
    ],
    "techStack": [
      { "category": "Languages", "items": "JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Bootstrap", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "Stable Diffusion", "icon": "ti-brain" }
    ],
    "conclusion": "QgenX.ai established scalable production framework eliminating bottlenecks and delivering measurable SEO improvements at unprecedented scale."
  },
  // AI Calling BOT
  {
    "client": "Global Real Estate & B2B Sales Organization",
    "sector": "Real Estate, B2B SaaS & Sales",
    "accent": "var(--brand-orange)",
    "image": "/homeCaseStudy/ai calling bot.png",
    "headline": "Intelligent voice automation scaled daily calls from 500 to 5,000+ while boosting conversions from 12% to 65%.",
    "body": "Built an AI voice automation platform that autonomously initiates calls, schedules meetings, and updates CRM in real-time. Eliminated repetitive manual calling while solving after-hours response gaps and scaling outreach capacity 10x.",
    "metrics": [
      { "v": "90%", "l": "Reduction in manual calling time" },
      { "v": "65%", "l": "Increase in conversion rates" },
      { "v": "10X", "l": "Multiplication of outreach capacity" }
    ],
    "related": "/services/ai-integration",
  
    "projectName": "Sales Acceleration with AI Calling Bot",
    "objective": "Intelligent voice automation platform revolutionizing lead engagement. Autonomously initiates calls, schedules meetings, and updates CRM—increasing conversions by 65%.",
    "solutions": [
      "AI Voice Calling: Conversational AI conducting authentic phone conversations.",
      "Real-Time Intent Recognition: ML analyzing responses and generating contextual follow-ups.",
      "Automated Scheduling: Bidirectional calendar integration handling meeting coordination.",
      "CRM Integration: Real-time synchronization updating lead statuses automatically."
    ],
    "challenges": [
      "Sales teams spending 70-80% time on repetitive calling.",
      "Inconsistent follow-up causing revenue leakage.",
      "Inability to scale without expanding headcount.",
      "After-hours response gaps causing 60%+ abandonment."
    ],
    "keyBenefits": [
      { "value": "90%", "label": "Reduction in manual calling time" },
      { "value": "65%", "label": "Increase in conversion rates" },
      { "value": "10X", "label": "Multiplication of outreach capacity" },
      { "value": "85%", "label": "Improvement in contact rates" }
    ],
    "results": [
      "500 to 5,000+ daily calls",
      "12% to 65% conversion rates",
      "$450K annual savings",
      "40-75% revenue growth"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python", "icon": "ti-code" },
      { "category": "Database", "items": "PostgreSQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Django", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "TTS, LLM, STT Pipeline", "icon": "ti-brain" }
    ],
    "conclusion": "AI Calling Bot transformed sales operations establishing intelligent automation ecosystem dramatically multiplying capacity while reducing costs and improving satisfaction."
  },
  // Astrology AI 
  {
    "client": "Global Wellness & Spiritual Guidance Platform",
    "sector": "Wellness, Spirituality & Personal Development",
    "accent": "var(--brand-purple)",
    "image": "/homeCaseStudy/astrologyAi.png",
    "headline": "AI Vedic astrology platform serves 100,000+ users across 45 countries with 95% satisfaction rate.",
    "body": "Built an AI platform merging Vedic wisdom with technology delivering personalized astrological guidance. Reduced consultation wait time from 45-90 minutes to 3-5 minutes while saving users $200-300 monthly on consultation costs.",
    "metrics": [
      { "v": "95%", "l": "User satisfaction rate" },
      { "v": "99%", "l": "Reduction in wait time" },
      { "v": "92%", "l": "Calculation accuracy" }
    ],
    "related": "/services/custom-ai-development",
  
    "projectName": "Astrology AI – Vedic Astrology Consultation Platform",
    "objective": "AI platform merging Vedic wisdom with technology delivering personalized astrological guidance. Provides instant consultations—serving 100,000+ users with 95% satisfaction.",
    "solutions": [
      "Precision Kundli Generation: Astronomical calculations delivering accurate birth charts instantly.",
      "AI Vedic Consultation: Conversational AI trained on classical texts interpreting planetary yogas.",
      "Intelligent Query Processing: NLP understanding diverse life questions for personalized guidance.",
      "Personalized Remedy Engine: System suggesting customized Vedic remedies and lifestyle modifications."
    ],
    "challenges": [
      "Limited astrologer access with 2-7 day waiting periods.",
      "Frustration with superficial sun-sign horoscopes.",
      "Traditional interpretation requiring years of study.",
      "High consultation costs restricting access."
    ],
    "keyBenefits": [
      { "value": "95%", "label": "User satisfaction rate" },
      { "value": "99%", "label": "Reduction in wait time" },
      { "value": "92%", "label": "Calculation accuracy" },
      { "value": "85%", "label": "Cost savings" }
    ],
    "results": [
      "100,000+ users across 45 countries",
      "3-5 minutes vs. 45-90 minutes consultation time",
      "78% monthly retention",
      "$200-300 monthly savings per user"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "On-Premises", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Django", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "Custom Vedic Models, BERT", "icon": "ti-brain" }
    ],
    "conclusion": "Astrology AI bridged ancient Vedic wisdom and modern accessibility creating authentic personalized guidance system democratizing expert-level consultation globally."
  },
  // find my face 
  {
    "client": "Professional Event Photography Organization",
    "sector": "Photography, Events & Digital Media",
    "accent": "var(--brand-red)",
    "image": "/homeCaseStudy/findmyface.png",
    "headline": "AI facial recognition platform reduced post-production time from 25 to 3 hours while scaling discovery rates from 30% to 94%.",
    "body": "Built an AI-powered facial recognition platform enabling event guests to instantly retrieve all their photos via selfie upload. Eliminated manual sorting bottlenecks, ensured GDPR compliance, and enabled same-day gallery delivery.",
    "metrics": [
      { "v": "85%", "l": "Reduction in post-production time" },
      { "v": "92%", "l": "Increase in client satisfaction" },
      { "v": "98%", "l": "Facial recognition accuracy" }
    ],
    "related": "/services/generative-ai-development",
  
    "projectName": "FindMyFace – AI Facial Recognition Platform",
    "objective": "AI-powered facial recognition platform transforming event photo discovery. Guests upload selfies to instantly retrieve all photos—reducing post-production time by 85%.",
    "solutions": [
      "Advanced Facial Recognition: Deep learning models identifying individuals across varying conditions.",
      "Multi-Face Detection: Algorithms processing entire galleries with sub-10-second response times.",
      "Privacy-First Architecture: Zero-knowledge framework with encryption and GDPR compliance.",
      "Client Management System: Comprehensive portal for event creation and gallery organization."
    ],
    "challenges": [
      "Photographers spending 15-40 hours manually sorting photos.",
      "Guests forced to scroll through thousands causing 70% abandonment.",
      "Privacy concerns regarding facial recognition technology.",
      "Gallery delivery delays of 5-14 days frustrating clients."
    ],
    "keyBenefits": [
      { "value": "85%", "label": "Reduction in post-production time" },
      { "value": "92%", "label": "Increase in client satisfaction" },
      { "value": "98%", "label": "Facial recognition accuracy" },
      { "value": "10X", "label": "Event capacity multiplication" }
    ],
    "results": [
      "25 to 3 hours per event",
      "40-65% revenue increase",
      "30% to 94% discovery rates",
      "Same-day gallery delivery"
    ],
    "techStack": [
      { "category": "Languages", "items": "JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Bootstrap", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "Custom CNNs, dlib, OpenCV, TensorFlow", "icon": "ti-brain" }
    ],
    "conclusion": "FindMyFace revolutionized event photography establishing intelligent discovery ecosystem eliminating manual bottlenecks while maintaining privacy standards and enhancing experiences."
  },
  // Paint Minds
  {
    "client": "PaintMinds",
    "sector": "HR Tech / Recruitment Solutions",
    "accent": "var(--brand-green)",
    "image": "/homeCaseStudy/paintminds.png",
    "headline": "AI-powered resume parsing platform improved hiring efficiency by 85% while achieving 100% response speed.",
    "body": "Built an AI resume parsing and candidate matching platform replacing manual JD validation with high-precision NLP and ML. Streamlined recruitment processes, improved candidate matching accuracy, and enhanced overall hiring efficiency for HR professionals and job seekers.",
    "metrics": [
      { "v": "50%", "l": "Candidate success" },
      { "v": "85%", "l": "Hiring efficiency" },
      { "v": "90%", "l": "Data-driven insights" }
    ],
    "related": "/services/ai-integration",
  
    "projectName": "AI-Powered Resume Parsing & Candidate Matching",
    "objective": "To revolutionize resume parsing with AI technology to streamline recruitment processes, improve candidate matching accuracy, and enhance overall hiring efficiency. The goal is to solve the complex task of validating resume relevancy against job descriptions for both HR professionals and job seekers.",
    "solutions": [
      "Intuitive User Interface: Seamless experience for both HR professionals and job seekers.",
      "Advanced NLP & ML: High-precision natural language processing for accurate resume analysis.",
      "Automated Extraction: Structured data extraction from unstructured resume formats.",
      "JD Matching Engine: Intelligent engine validating resume relevancy against job descriptions."
    ],
    "challenges": [
      "Manual Validation: The difficult and time-consuming task of manually checking if a resume meets the requirements of a Job Description (JD).",
      "Data Fragmentation: Difficulty in extracting structured data from unstructured resume formats.",
      "Matching Accuracy: Ensuring job seekers understand how to align their profiles with what employers are actually seeking."
    ],
    "keyBenefits": [
      { "value": "50%", "label": "Candidate success" },
      { "value": "100%", "label": "Response speed" },
      { "value": "85%", "label": "Hiring efficiency" },
      { "value": "90%", "label": "Data-driven insights" }
    ],
    "results": [
      "Massive employment impact",
      "High conversion rate",
      "User empowerment",
      "Process optimization"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python, JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Live Streaming API & Push Notification Engine", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "NLP, Machine Learning, JD Matching Engine", "icon": "ti-brain" }
    ],
    "conclusion": "The PaintMinds AI Resume Parser has successfully transformed the hiring landscape by bridging the gap between job seekers and employers. By replacing manual validation with high-precision AI and NLP, the platform has created a faster, more accurate, and highly successful recruitment ecosystem that scales effortlessly."
  },

  // Enterprise Software Solutions - Generative ai development 
  {
    "client": "Enterprise Software Solutions",
    "sector": "Software & IT Services / Customer Success",
    "accent": "var(--brand-red)",
    "image": "/homeCaseStudy/enterprisesoftwaresolutions.png",
    "headline": "AI-powered Q&A platform reduced support by 50% while achieving 100% response on documentation.",
    "body": "Built a scalable AI-driven Q&A web application enabling users to query complex product documentation using natural language. Transformed static manuals into an interactive knowledge experience, significantly reducing manual support & enhancing  efficiency.",
    "metrics": [
      { "v": "50%", "l": "overhead reduction" },
      { "v": "100%", "l": "Response speed" },
      { "v": "90%", "l": "Data-driven insights" }
    ],
    "related": "/services/generative-ai-development",
  
    "projectName": "AI-Powered Product Knowledge Assistant",
    "objective": "To build a scalable, AI-driven Q&A web application that enables users to query complex product documentation using natural language. This solution aims to significantly reduce manual support overhead and enhance internal efficiency by providing instant, accurate technical answers.",
    "solutions": [
      "Context-Aware Q&A: Intelligent system understanding and answering complex product queries contextually.",
      "Scalable Architecture: Built to handle thousands of documentation pages with near real-time responses.",
      "Optimized Performance: High-speed query processing delivering instant accurate technical answers.",
      "Cross-Platform Accessibility: Seamless experience across desktop and mobile devices.",
      "Enterprise-Grade Deployment: Robust infrastructure supporting large-scale organizational use."
    ],
    "challenges": [
      "Support Bottlenecks: High volume of repetitive manual support queries slowing down technical teams.",
      "Information Silos: Difficulty for internal teams and customers to quickly find specific answers within massive, complex documentation.",
      "System Latency: Need for a system that can parse thousands of pages and deliver answers in near real-time."
    ],
    "keyBenefits": [
      { "value": "50%", "label": "Support overhead reduction" },
      { "value": "100%", "label": "Response speed" },
      { "value": "85%", "label": "User experience improvement" },
      { "value": "90%", "label": "Data-driven insights" }
    ],
    "results": [
      "Massive query deflection",
      "Performance excellence",
      "Data-driven monitoring",
      "Rapid deployment"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python, JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Live Streaming API & Push Notification Engine", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "NLP, RAG, Vector Search, LLMs", "icon": "ti-brain" }
    ],
    "conclusion": "This AI-Powered Knowledge Assistant successfully bridged the gap between complex technical documentation and user needs. By transforming static manuals into an interactive Q&A experience, the project delivered measurable improvements in both customer satisfaction and internal operational efficiency."
  },

  // Global Financial Instruction

  {
    "client": "Global Financial Institution",
    "sector": "Banking & Financial Services (BFSI)",
   "accent": "#4ED8CC",
    "image": "/homeCaseStudy/global financial institution.png",
    "headline": "AI fraud detection system achieved 80% faster response time with 100% operational speed on bank statement verification.",
    "body": "Built a scalable intelligent system detecting fraud in both scanned and digital bank statements. Transformed manual verification into aspeed forensic operation by combining vision-based checks with analysis, defending against digital tampering while accelerating operational workflows.",
    "metrics": [
      { "v": "80%", "l": "time improvement" },
      { "v": "30%", "l": "Faster decision" },
      { "v": "100%", "l": "Operational speed" }
    ],
    "related": "/services/ai-strategy-consulting",
  
    "projectName": "AI-Powered Fraud Detection in Bank Statements",
    "objective": "To build a scalable, intelligent system capable of detecting fraud and tampering in both scanned and digital bank statements—improving detection accuracy, significantly reducing the need for manual review, and ensuring high-level data security.",
    "solutions": [
      "Vision-Based Analysis: Deep learning models detecting visual anomalies and tampering in scanned documents.",
      "OCR + Semantic Parsing: Accurate text extraction combined with semantic understanding for digital statements.",
      "Custom Fine-Tuning: Domain-specific model training optimized for financial document forensics.",
      "Intelligent Caching: High-speed processing architecture enabling real-time verification at scale."
    ],
    "challenges": [
      "Manual Review Bottlenecks: High operational costs and delays due to human-led verification of thousands of documents.",
      "Sophisticated Tampering: Digital edits (font/formatting changes) that are often invisible to the naked eye.",
      "Processing Speed: The need for real-time verification without compromising on deep forensic analysis."
    ],
    "keyBenefits": [
      { "value": "80%", "label": "Response time improvement" },
      { "value": "30%", "label": "Faster decision-making" },
      { "value": "25%", "label": "Improvement in operational efficiency" },
      { "value": "100%", "label": "Operational speed" }
    ],
    "results": [
      "Forensic precision at scale",
      "Efficiency gains across verification workflows",
      "Reduced operational costs",
      "Scalable security for high-volume document processing"
    ],
    "techStack": [
      { "category": "Languages", "items": "React.js, Python", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL, PostgreSQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Node.js", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "TensorFlow", "icon": "ti-brain" }
    ],
    "conclusion": "This AI-powered system transformed bank statement verification from a slow, manual process into a high-speed forensic operation. By combining vision-based checks with semantic analysis, the solution provides the bank with a robust defense against digital tampering while accelerating operational workflows."
  },

  // Enterprise Talent Solutions	ai agent development

  {
    "client": "Enterprise Talent Solutions",
    "sector": "Human Resources / Recruitment Technology",
    "accent": "#334A84",
    // "accent": "#4ED8CC",
    "image": "/homeCaseStudy/enterprisetalentsolutions.png",
    "headline": "AI voice agent automated HR screening achieving 70% faster screening velocity and 100% candidate handling.",
    "body": "Built an AI voice agent eliminating manual bottlenecks in early-stage hiring by automating candidate screening, interview coordination, and communication assessment. Transformed the recruitment funnel from a manual time-intensive process into a high-speed data-driven operation ensuring only best-fit candidates reach human recruiters.",
    "metrics": [
      { "v": "70%", "l": "Screening velocity" },
      { "v": "100%", "l": "Candidate handling" },
      { "v": "85%", "l": "Assessment quality" }
    ],
    "related": "/services/ai-agents-development",
  
    "projectName": "AI Voice Agent: Automated HR Screening & Interview Scheduling",
    "objective": "To eliminate manual bottlenecks in early-stage hiring by deploying an AI voice agent that automates candidate screening, interview coordination, and communication assessment—boosting speed, consistency, and scalability across the recruitment lifecycle.",
    "solutions": [
      "AI Profile Screening: Automated evaluation of candidate profiles against job requirements at scale.",
      "Voice-Based Scheduling: AI agent handling interview coordination through natural voice conversations.",
      "Presence Evaluation: Automated assessment of candidate communication and soft skills.",
      "Multimodal Assessment: Comprehensive evaluation combining voice, text, and behavioral signals.",
      "Structured Reporting: Data-driven insights and standardized candidate scorecards for recruiters."
    ],
    "challenges": [
      "Manual Bottlenecks: Slow, repetitive early-stage screening tasks causing significant hiring delays.",
      "Subjective Bias: Inconsistent human evaluation of candidate communication and soft skills.",
      "Scheduling Friction: Constant back-and-forth communication needed to coordinate interview slots."
    ],
    "keyBenefits": [
      { "value": "70%", "label": "Screening velocity" },
      { "value": "100%", "label": "Candidate handling" },
      { "value": "85%", "label": "Assessment quality" },
      { "value": "90%", "label": "Data-driven insights" }
    ],
    "results": [
      "Drastic time savings in early-stage recruitment",
      "Consistent hiring bar across all candidates",
      "Improved candidate experience throughout screening",
      "Resource optimization for human recruiters"
    ],
    "techStack": [
      { "category": "Languages", "items": "Python, JavaScript", "icon": "ti-code" },
      { "category": "Database", "items": "MySQL", "icon": "ti-database" },
      { "category": "Cloud", "items": "AWS", "icon": "ti-server" },
      { "category": "Frameworks", "items": "Live Streaming API & Push Notification Engine", "icon": "ti-layout" },
      { "category": "AI/ML", "items": "NLP, Voice AI, LLMs, STT, TTS", "icon": "ti-brain" }
    ],
    "conclusion": "The AI Voice Agent successfully transformed the recruitment funnel from a manual, time-intensive process into a high-speed, data-driven operation. By automating the first leg of hiring, the solution ensures that only the best-fit, highly-vetted candidates reach human recruiters, maximizing efficiency and hiring quality."
  }
];

function CaseStudiesLayout() {
  const matchRoute = useMatchRoute();
  const isSlug = matchRoute({ to: "/case-studies/$slug" });

  if (isSlug) return <Outlet />;

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Numbers, <span className="text-gradient-brand">not narratives.</span>
          </>
        }
        description="Every engagement we publish has a defined success metric agreed on day one — and reported every Friday. These are six of the most recent."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton to="/contact">Start your engagement</PrimaryButton>
          <GhostButton to="/services">Explore services</GhostButton>
        </div>
      </PageHero>

      <section className="px-5 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Recent work"
            title="Outcomes worth writing down."
            description="Anonymised where the client requires it — numbers are always real."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {studies.map((s) => (
              <div key={s.client} className="space-y-3">
                <CaseStudyCard
                  client={s.client}
                  industry={s.sector}
                  image={s.image}
                  accent={s.accent}
                  challenge={s.headline}
                  outcome={s.body}
                  metrics={s.metrics.map((m) => ({ value: m.v, label: m.l }))}
                  // ── detail fields ──
                  projectName={s.projectName}
                  objective={s.objective}
                  solutions={s.solutions}
                  challenges={s.challenges}
                  keyBenefits={s.keyBenefits}
                  results={s.results}
                  techStack={s.techStack}
                  conclusion={s.conclusion}
                />
                <Link
                  to={s.related as never}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: s.accent }}
                >
                  Related service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be the next case study?"
        description="Bring us a problem with a number attached. We'll come back with a plan to move it — and a Friday demo schedule to prove it."
      />
    </>
  );
}
