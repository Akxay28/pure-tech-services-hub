export interface BlogPost {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  imageTop: string;
  imageMiddle: string;
  descriptionTop: string;
  descriptionBottom: string;
  accent: string;
}

export const seedBlogs: BlogPost[] = [
  {
    slug: "vibe-coding-paradigm",
    metaTitle: "Vibe Coding: Ship Software Products at AI Speed",
    metaDescription: "Learn how AI-first IDEs and agentic coding workflows help product teams prototype, validate, and ship software faster.",
    metaKeywords: "vibe coding, AI coding, agentic workflows, software engineering, product engineering",
    title: "The Paradigm Shift of Vibe Coding: Shipping Products at AI Speed",
    excerpt: "Discover how AI-first IDEs and agentic workflows are redefining software engineering, enabling teams to build at the speed of thought.",
    date: "June 11, 2026",
    author: "Arjun Mehta, Head of AI Research",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    imageTop: "/blogs/vibe-coding-top.png",
    imageMiddle: "/blogs/vibe-coding-mid.png",
    accent: "var(--brand-pink)",
    descriptionTop: "Software engineering is experiencing its most radical shift since the transition from punch cards to compilers. We call it 'Vibe Coding'—a new developer experience where the primary task shifts from writing line-by-line syntax to directing agentic workflows. By leveraging advanced IDEs and agentic coding platforms (like Cursor, Lovable, and Google Antigravity), engineers are acting more like software architects, specifying goals, reviewing generated code, and handling exceptions rather than spending hours chasing semicolons.\n\nIn this new paradigm, developer productivity is no longer measured by lines of code, but by the velocity of validation. An engineer can prototype a fully functional dashboard, test it with dummy data, and iterate on user feedback within a single afternoon. The cognitive load of boilerplate setup, routing configurations, and basic styling is absorbed by the AI model, freeing creative space for solving complex business logic, optimizing database structures, and designing seamless user experiences.",
    descriptionBottom: "However, Vibe Coding is not a replacement for traditional computer science foundations; rather, it amplifies them. The role of the engineer transitions from a 'builder' to an 'editor' and 'orchestrator.' System design, architecture planning, security auditing, and performance profiling are more critical than ever. An AI might write code quickly, but a human engineer must ensure that the generated microservices don't form a fragile monolith or leak sensitive data.\n\nAt Pure Technology, we have integrated AI coding assistants into our daily development loops. This integration has resulted in a 40% reduction in time-to-market for our clients' MVP products. By training our teams in prompt design, codebase grounding, and agentic error-resolution, we are setting new benchmarks for high-velocity software engineering."
  },
  {
    slug: "gcc-evolution-2026",
    metaTitle: "How Global Capability Centers Are Evolving in 2026",
    metaDescription: "Explore how modern GCCs in India are becoming strategic hubs for AI, engineering leadership, cybersecurity, and product ownership.",
    metaKeywords: "global capability centers, GCC India, engineering teams, AI innovation, offshore development",
    title: "Unlocking Scale: How Global Capability Centers (GCC) Are Evolving in 2026",
    excerpt: "GCCs in India are no longer just support offices—they are driving global innovation, advanced R&D, and engineering leadership.",
    date: "May 28, 2026",
    author: "Priya Sharma, VP of Engineering Operations",
    readTime: "6 min read",
    category: "Global Capability Centers",
    imageTop: "/blogs/gcc-top.png",
    imageMiddle: "/blogs/gcc-mid.png",
    accent: "var(--brand-blue)",
    descriptionTop: "India's Global Capability Center (GCC) ecosystem is undergoing a dramatic evolution. Traditionally viewed as low-cost talent extensions for transaction processing, GCCs have morphed into strategic hubs for high-value engineering, global product ownership, and digital transformation. In 2026, foreign enterprises are setting up GCCs not just to reduce payroll costs, but to lead international AI integration, manage global cybersecurity command centers, and design next-generation SaaS architectures.\n\nThis shift is fueled by a maturing engineering workforce. The Indian tech talent pool now boasts deep expertise in machine learning, distributed cloud systems, and product management. GCCs are given end-to-end ownership of core products, meaning design, development, deployment, and operation are managed locally from hubs in cities like Pune, Bengaluru, and Hyderabad.",
    descriptionBottom: "Setting up a GCC, however, comes with operational complexities. Navigating regional compliance, securing state-of-the-art infrastructure, implementing localized employee benefit programs, and maintaining cultural alignment with the global headquarters are significant challenges.\n\nPure Technology's GCC-in-12-Weeks model addresses these challenges by offering a turnkey solution. We manage everything from legal entity formation and talent acquisition to custom office setup and compliance, allowing companies to scale their engineering footprint rapidly while focusing solely on product development. By combining local operational agility with top-tier technical vetting, we help enterprises establish world-class engineering teams seamlessly."
  },
  {
    slug: "cloud-security-ai",
    metaTitle: "Cloud Security for Generative AI Applications",
    metaDescription: "Discover cloud security practices for generative AI apps, including secure data pipelines, vector databases, and zero-trust controls.",
    metaKeywords: "cloud security, generative AI, vector databases, zero trust, AI application security",
    title: "Securing Next-Gen Cloud Infrastructure for Generative AI Applications",
    excerpt: "Learn how to protect data pipelines, secure vector databases, and implement robust access controls for enterprise AI systems.",
    date: "April 15, 2026",
    author: "Vikram Malhotra, Lead Cloud Architect",
    readTime: "7 min read",
    category: "Cloud & Security",
    imageTop: "/blogs/cloud-top.png",
    imageMiddle: "/blogs/cloud-mid.png",
    accent: "var(--brand-green)",
    descriptionTop: "As Generative AI moves from experimental sandboxes to production enterprise applications, the surface area for security threats has expanded exponentially. Standard web application firewalls and perimeter security are no longer sufficient to protect models that process massive amounts of proprietary data. Today, secure AI architecture requires a zero-trust model applied directly to data ingestion pipelines, vector databases, and model orchestration layers.\n\nOne of the most critical challenges is data leakage. When enterprise applications use Retrieval-Augmented Generation (RAG) to feed database files and customer records into an LLM context, they must ensure strict data access boundaries. A user querying an AI chatbot should never be shown search results derived from documents they do not have the permissions to read in the underlying file systems.",
    descriptionBottom: "Moreover, prompt injection attacks and insecure output handling present novel application security vulnerabilities. If an AI system acts on external unverified data, malicious prompts could instruct the agent to run unauthorized shell commands or export sensitive client data.\n\nTo safeguard these systems, organizations must adopt robust practices: isolating vector databases within private subnets, using encrypted API endpoints with strict rate limiting, and implementing real-time sanitization of both inputs and outputs. At Pure Technology, our security framework builds deep guardrails into the core infrastructure, ensuring that clients can deploy cutting-edge AI features without exposing their valuable IP or customer records."
  }
];

export const staticBlogs: BlogPost[] = seedBlogs;
