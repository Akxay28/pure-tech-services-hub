import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  Code2,
  Brain,
  Globe,
  Sparkles,
  Building2,
  UserCog,
  Network,
  Cloud,
  Boxes,
  Smartphone,
  MonitorSmartphone,
  Database,
  ShieldCheck,
  Layers,
  MessageSquareCode,
  Wand2,
  Bot,
  Plug,
  type LucideIcon,
} from "lucide-react";
import logo from "@/assets/pure-tech-logo.png";
import megaVisual from "@/assets/mega-menu-visual.jpg";

type ServiceItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  to: string;
};

type TabKey = "team" | "offering" | "ai";

const tabs: { key: TabKey; label: string; icon: LucideIcon }[] = [
  { key: "team", label: "By Team Expertise", icon: Users },
  { key: "offering", label: "Offering", icon: Code2 },
  { key: "ai", label: "Artificial Intelligence", icon: Brain },
];

const serviceItems: Record<TabKey, ServiceItem[]> = {
  team: [
    { title: "Global Capability Center", subtitle: "Empowering Global Teams", icon: Globe, to: "/services/global-capability-center" },
    { title: "AI Solutions", subtitle: "AI that Drives Progress", icon: Sparkles, to: "/services/ai-solutions" },
    { title: "Offshore Development", subtitle: "Cost-Effective Solutions", icon: Building2, to: "/services/offshore-development" },
    { title: "IT Staff Augmentation", subtitle: "Scale Your Tech Team", icon: UserCog, to: "/services/it-staffing" },
    { title: "IT Outsourcing", subtitle: "Efficient IT Solutions", icon: Network, to: "/services/it-outsourcing" },
    { title: "Product Engineering", subtitle: "Innovating Your Products", icon: Boxes, to: "/services/product-engineering" },
    { title: "Cloud Computing", subtitle: "Scalable Cloud Services", icon: Cloud, to: "/services/cloud-computing" },
  ],
  offering: [
    { title: "Software Development", subtitle: "Get world-class software solutions", icon: Code2, to: "/services/software-development" },
    { title: "Remote Teams", subtitle: "Hire pre-vetted development team", icon: Users, to: "/services/remote-teams" },
    { title: "Web Application Development", subtitle: "Build modern, intuitive & seamless web apps", icon: Layers, to: "/services/web-application-development" },
    { title: "Mobile App Development", subtitle: "Get custom and responsive mobile apps", icon: Smartphone, to: "/services/mobile-app-development" },
    { title: "Cloud & Infrastructure", subtitle: "Scale securely with cloud and infrastructure", icon: Cloud, to: "/services/cloud-infrastructure" },
    { title: "Front End Development", subtitle: "Get perfect UI/UX for flawless experience", icon: MonitorSmartphone, to: "/services/front-end-development" },
    { title: "Data Engineering", subtitle: "Modernize data pipelines for real-time insights", icon: Database, to: "/services/data-engineering" },
    { title: "Cybersecurity", subtitle: "Secure your digital assets with confidence", icon: ShieldCheck, to: "/services/cybersecurity" },
  ],
  ai: [
    { title: "AI Strategy & Consulting", subtitle: "Get future-proof operations with advanced AI", icon: Sparkles, to: "/services/ai-strategy-consulting" },
    { title: "Custom AI Development", subtitle: "Building AI solutions tailored to your business", icon: Wand2, to: "/services/custom-ai-development" },
    { title: "AI Chatbot Development", subtitle: "Designing chatbots for smarter customer support", icon: MessageSquareCode, to: "/services/ai-chatbot-development" },
    { title: "Generative AI Development", subtitle: "Creating AI tools for content and ideas", icon: Brain, to: "/services/generative-ai-development" },
    { title: "AI Agents Development", subtitle: "Enhance operations through advanced AI agents", icon: Bot, to: "/services/ai-agents-development" },
    { title: "AI Integration", subtitle: "Integrating AI seamlessly into your stack", icon: Plug, to: "/services/ai-integration" },
  ],
};

type SimpleLink = { label: string; to: string; desc: string };

const simpleMenus: Record<string, SimpleLink[]> = {
  Company: [
    { label: "About", to: "/about", desc: "Who we are and how we work." },
    { label: "Careers", to: "/careers", desc: "Open roles across engineering and AI." },
    { label: "Contact", to: "/contact", desc: "Talk to a senior engineer this week." },
  ],
  Resources: [
    { label: "Case Studies", to: "/case-studies", desc: "Outcome metrics from recent engagements." },
    { label: "All Services", to: "/services", desc: "Explore the full service catalogue." },
    { label: "Careers", to: "/careers", desc: "Engineering culture and hiring process." },
  ],
};

// ── Hire Developers mega menu ────────────────────────────────
type HireTabKey = "ai" | "vibe" | "role";
type HireItem = { title: string; to: string };

const hireTabs: { key: HireTabKey; label: string; icon: LucideIcon }[] = [
  { key: "ai", label: "Artificial Intelligence", icon: Brain },
  { key: "vibe", label: "AI Vibe Coders", icon: Sparkles },
  { key: "role", label: "Hire By Role", icon: Users },
];

const hireItems: Record<HireTabKey, HireItem[]> = {
  ai: [
    { title: "Hire Chatbot Developers", to: "/hire/chatbot-developers" },
    { title: "Hire OpenAI Developers", to: "/hire/openai-developers" },
    { title: "Hire Generative AI Developers", to: "/hire/generative-ai-developers" },
    { title: "Hire Gemini Developers", to: "/hire/gemini-developers" },
    { title: "Hire Prompt Engineer", to: "/hire/prompt-engineer" },
  ],
  vibe: [
    { title: "Hire ChatGPT Developers", to: "/hire/chatgpt-developers" },
    { title: "Hire Lovable AI Developers", to: "/hire/lovable-ai-developers" },
    { title: "Hire Replit AI Developers", to: "/hire/replit-ai-developers" },
    { title: "Hire Bolt.new AI Developers", to: "/hire/bolt-new-ai-developers" },
    { title: "Hire Google Antigravity Developers", to: "/hire/google-antigravity-developers" },
    { title: "Hire Cursor AI Developers", to: "/hire/cursor-ai-developers" },
    { title: "Hire Windsurf AI Developers", to: "/hire/windsurf-ai-developers" },
  ],
  role: [
    { title: "Hire Software Developer", to: "/hire/software-developer" },
    { title: "Hire Mobile App Developer", to: "/hire/mobile-app-developer" },
    { title: "Hire Backend Developers", to: "/hire/backend-developers" },
    { title: "Hire AI Developers", to: "/hire/ai-developers" },
    { title: "Hire DevOps Developers", to: "/hire/devops-developers" },
    { title: "Hire Web App Developer", to: "/hire/web-app-developer" },
    { title: "Hire Frontend Developers", to: "/hire/frontend-developers" },
    { title: "Hire Fullstack Developers", to: "/hire/fullstack-developers" },
    { title: "Hire Android Developers", to: "/hire/android-developers" },
  ],
};

type NavItem = { label: string; to?: string; type: "mega" | "simple" | "hire" };
const nav: NavItem[] = [
  { label: "Services", to: "/services", type: "mega" },
  { label: "Hire Developers", type: "hire" },
  { label: "Company", type: "simple" },
  { label: "Resources", type: "simple" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<TabKey>("team");
  const [activeHireTab, setActiveHireTab] = useState<HireTabKey>("ai");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 160);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 border-b border-border/60 shadow-[0_8px_30px_-12px_rgba(46,11,125,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Pure Technology"
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const isOpen = activeMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  {item.to ? (
                    <Link
                      to={item.to as never}
                      className="relative flex items-center gap-1 px-4 py-2.5 text-[15px] font-semibold tracking-tight text-[color:var(--brand-purple)] hover:text-[color:var(--brand-pink)] transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-[image:var(--gradient-cta)] origin-left transition-transform duration-300 ${
                          isOpen ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="relative flex items-center gap-1 px-4 py-2.5 text-[15px] font-semibold tracking-tight text-[color:var(--brand-purple)] hover:text-[color:var(--brand-pink)] transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-[image:var(--gradient-cta)] origin-left transition-transform duration-300 ${
                          isOpen ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(255,77,141,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(255,122,0,0.55)]"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              <span className="uppercase">Contact</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(95deg, rgba(255,255,255,0.18), rgba(255,255,255,0))" }}
              />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 backdrop-blur"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mega/Simple dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block absolute left-0 right-0 top-full px-5 lg:px-8 pt-3"
              onMouseEnter={() => openMenu(activeMenu)}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto max-w-7xl">
                {activeMenu === "Services" ? (
                  <ServicesMega activeTab={activeTab} setActiveTab={setActiveTab} />
                ) : activeMenu === "Hire Developers" ? (
                  <HireDevelopersMega activeTab={activeHireTab} setActiveTab={setActiveHireTab} />
                ) : (
                  <SimpleMega items={simpleMenus[activeMenu] ?? []} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Blur backdrop */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block fixed inset-0 top-[78px] z-40 bg-[color:var(--brand-purple)]/10 backdrop-blur-[2px] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-x-0 top-[78px] z-40 border-t border-border bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-5 space-y-2 max-h-[80vh] overflow-y-auto">
              <MobileAccordion title="Services" items={serviceItems.team.concat(serviceItems.ai)} />
              <MobileAccordion title="Hire Developers" items={[...hireItems.ai, ...hireItems.vibe, ...hireItems.role].map(h => ({ title: h.title, subtitle: "", icon: Users, to: h.to }))} />
              <MobileAccordion title="Company" items={simpleMenus["Company"].map(s => ({ title: s.label, subtitle: s.desc, icon: Building2, to: s.to }))} />
              <MobileAccordion title="Resources" items={simpleMenus["Resources"].map(s => ({ title: s.label, subtitle: s.desc, icon: Layers, to: s.to }))} />
              <Link
                to="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase text-white shadow-soft"
                style={{ backgroundImage: "var(--gradient-cta)" }}
              >
                Contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ServicesMega({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabKey;
  setActiveTab: (t: TabKey) => void;
}) {
  const items = serviceItems[activeTab];
  return (
    <div className="rounded-[24px] border border-white/60 bg-white/85 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(46,11,125,0.25)] overflow-hidden">
      <div className="grid grid-cols-12 gap-0">
        {/* Left intro */}
        <div className="col-span-3 p-7 border-r border-border/60 bg-[color:var(--brand-pink-soft)]/30">
          <h3 className="text-xl font-bold text-[color:var(--brand-purple)]">Services</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-purple)]/70">
            Discover our range of services designed to drive business transformation.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl shadow-soft">
            <img
              src={megaVisual}
              alt="Pure Technology services"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-44 w-full object-cover"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="col-span-3 p-5 border-r border-border/60 space-y-2">
          {tabs.map(({ key, label, icon: Icon }) => {
            const isActive = key === activeTab;
            return (
              <button
                key={key}
                type="button"
                onMouseEnter={() => setActiveTab(key)}
                onFocus={() => setActiveTab(key)}
                className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[color:var(--brand-pink-soft)] text-[color:var(--brand-purple)] shadow-[0_8px_24px_-12px_rgba(255,77,141,0.4)]"
                    : "text-[color:var(--brand-purple)]/80 hover:bg-[color:var(--brand-pink-soft)]/50"
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                    isActive ? "bg-white text-[color:var(--brand-pink)]" : "bg-white/70 text-[color:var(--brand-purple)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Right content */}
        <div className="col-span-6 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {items.map(({ title, subtitle, icon: Icon, to }) => (
                <Link
                  key={title}
                  to={to as never}
                  className="group flex items-start gap-3 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand-pink-soft)]/40 hover:shadow-[0_12px_30px_-12px_rgba(46,11,125,0.18)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--brand-pink-soft)] text-[color:var(--brand-pink)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14.5px] font-semibold leading-tight text-[color:var(--brand-purple)]">
                      {title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-[color:var(--brand-purple)]/65">
                      {subtitle}
                    </span>
                  </span>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function HireDevelopersMega({
  activeTab,
  setActiveTab,
}: {
  activeTab: HireTabKey;
  setActiveTab: (t: HireTabKey) => void;
}) {
  const items = hireItems[activeTab];
  return (
    <div className="rounded-[24px] border border-white/60 bg-white/85 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(46,11,125,0.25)] overflow-hidden">
      <div className="grid grid-cols-12 gap-0">
        {/* Left intro */}
        <div className="col-span-3 p-7 border-r border-border/60 bg-[color:var(--brand-pink-soft)]/30">
          <h3 className="text-xl font-bold text-[color:var(--brand-purple)]">Hire Developers</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-purple)]/70">
            Discover our range of Hire Developers Services to drive business transformation.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl shadow-soft">
            <img
              src={megaVisual}
              alt="Hire Developers"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-44 w-full object-cover"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="col-span-3 p-5 border-r border-border/60 space-y-2">
          {hireTabs.map(({ key, label, icon: Icon }) => {
            const isActive = key === activeTab;
            return (
              <button
                key={key}
                type="button"
                onMouseEnter={() => setActiveTab(key)}
                onFocus={() => setActiveTab(key)}
                className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[color:var(--brand-pink-soft)] text-[color:var(--brand-purple)] shadow-[0_8px_24px_-12px_rgba(255,77,141,0.4)]"
                    : "text-[color:var(--brand-purple)]/80 hover:bg-[color:var(--brand-pink-soft)]/50"
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                    isActive ? "bg-white text-[color:var(--brand-pink)]" : "bg-white/70 text-[color:var(--brand-purple)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Right content */}
        <div className="col-span-6 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-x-6 gap-y-1"
            >
              {items.map(({ title, to }) => (
                <Link
                  key={title}
                  to={to as never}
                  className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-[15px] font-semibold text-[color:var(--brand-purple)] transition-all hover:bg-[color:var(--brand-pink-soft)]/40 hover:text-[color:var(--brand-pink)]"
                >
                  <span>{title}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 text-[color:var(--brand-pink)] transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SimpleMega({ items }: { items: SimpleLink[] }) {
  return (
    <div className="ml-auto w-[520px] rounded-[24px] border border-white/60 bg-white/85 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(46,11,125,0.25)] p-3">
      {items.map((s) => (
        <Link
          key={s.label}
          to={s.to as never}
          className="group flex items-start justify-between gap-4 rounded-2xl p-4 transition-all hover:bg-[color:var(--brand-pink-soft)]/50"
        >
          <span className="min-w-0">
            <span className="block text-[15px] font-semibold text-[color:var(--brand-purple)]">{s.label}</span>
            <span className="mt-0.5 block text-xs text-[color:var(--brand-purple)]/65">{s.desc}</span>
          </span>
          <ArrowRight className="h-4 w-4 mt-1 text-[color:var(--brand-pink)] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </Link>
      ))}
    </div>
  );
}

function MobileAccordion({
  title,
  items,
}: {
  title: string;
  items: ServiceItem[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border/60 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-[color:var(--brand-purple)]"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[color:var(--brand-pink-soft)]/30"
          >
            <div className="p-2 space-y-1">
              {items.map((it) => (
                <Link
                  key={it.title}
                  to={it.to as never}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-white"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-[color:var(--brand-pink)]">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-[color:var(--brand-purple)]">{it.title}</span>
                    <span className="block text-xs text-[color:var(--brand-purple)]/65">{it.subtitle}</span>
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
