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
