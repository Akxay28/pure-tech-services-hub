import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Brain, Users, Boxes, ArrowRight } from "lucide-react";
import logo from "@/assets/pure-tech-logo.png";

const services = [
  {
    to: "/services/ai-solutions" as const,
    title: "AI Solutions",
    blurb: "Production-grade GenAI, ML pipelines, agentic automation.",
    Icon: Brain,
    color: "var(--brand-blue)",
  },
  {
    to: "/services/it-staffing" as const,
    title: "IT Staffing",
    blurb: "Vetted Indian engineers — contract, contract-to-hire, full-time.",
    Icon: Users,
    color: "var(--brand-orange)",
  },
  {
    to: "/services/product-engineering" as const,
    title: "Product Engineering",
    blurb: "End-to-end product squads building SaaS that scales globally.",
    Icon: Boxes,
    color: "var(--brand-green)",
  },
];

const nav = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/services" as const, label: "Services", hasDropdown: true },
  { to: "/careers" as const, label: "Careers" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
  }, [location.pathname]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[color-mix(in_oklab,white_72%,transparent)] border-b border-border/70 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Pure Technology"
            className="h-9 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  activeProps={{ className: "text-foreground" }}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                {servicesOpen && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="w-[520px] glass-card rounded-2xl p-3 animate-fade-up">
                      <Link
                        to="/services"
                        className="flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:bg-secondary/60 transition-colors"
                      >
                        All services
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <div className="mt-1 grid gap-1">
                        {services.map(({ to, title, blurb, Icon, color }) => (
                          <Link
                            key={to}
                            to={to}
                            className="group flex items-start gap-3 rounded-xl p-3 hover:bg-secondary/70 transition-colors"
                          >
                            <span
                              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-soft"
                              style={{
                                background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 60%, white))`,
                              }}
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                            <span className="min-w-0">
                              <span className="block font-semibold text-foreground">
                                {title}
                              </span>
                              <span className="block text-xs text-muted-foreground leading-relaxed mt-0.5">
                                {blurb}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
          >
            Book a discovery call
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/70 backdrop-blur"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-surface/90 backdrop-blur-xl animate-fade-up">
          <div className="mx-auto max-w-7xl px-5 py-5 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="pl-3 border-l-2 border-border/70 ml-3 space-y-1">
              {services.map(({ to, title }) => (
                <Link
                  key={to}
                  to={to}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
                >
                  {title}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
