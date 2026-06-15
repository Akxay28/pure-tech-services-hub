import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/pure-tech-logo.png";

const SOCIAL_LINKS = [
  // {
  //   label: "Pure Technology on Facebook",
  //   href: "https://www.facebook.com/puretechnologypune",
  //   Icon: Facebook,
  // },
  {
    label: "Pure Technology on LinkedIn",
    href: "https://www.linkedin.com/company/pure-technology",
    Icon: Linkedin,
  },
] as const;

const CONTACT_NUMBERS = [
  { label: "For HR & Carrers", number: "+91 73875 81577", href: "tel:+917387581577" },
  { label: "For Support", number: "+91 83298 49726", href: "tel:+918329849726" },
  { label: "For AI Project", number: "+91 99701 11283", href: "tel:+919970111283" },
  { label: "For Hire Resource", number: "+91 73854 55380", href: "tel:+7385455380" },
] as const;

const FOOTER_FLAGS = [
  {
    label: "India",
    flag: "india",
    address:
      "603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase 1, Hinjawadi, Pune, Maharashtra 411057",
  },
  {
    label: "UAE",
    flag: "uae",
    address:
      "PURE TECHNOLOGY - FZE, Premises Number: Office-C1-1F-SF5944, Ajman Free Zone C1 Building, Business District: Ajman Free Zone, Makani No. 4442612247",
  },
  {
    label: "USA",
    flag: "usa",
    address: "286 Racquet Club Road, Apt 202, Weston, Florida 33326",
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface-muted">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-70" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-5">
            <img src={logo} alt="Pure Technology" className="h-20 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Pure Technology is a global AI and digital engineering company helping startups,
              enterprises, and fast-growing businesses build scalable technology products with speed
              and precision. Headquartered in Pune, the company specializes in AI-powered solutions,
              SaaS product engineering, enterprise application development, cloud infrastructure,
              cybersecurity, and IT staff augmentation.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-black text-white hover:bg-zinc-800 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Services"
              items={[
                { label: "AI Solutions", to: "/services/ai-solutions" },
                {
                  label: "Global Capability Center",
                  to: "/services/global-capability-center",
                },
                {
                  label: "Offshore Development",
                  to: "/services/offshore-development",
                },
                { label: "Cloud Computing", to: "/services/cloud-computing" },
                { label: "IT Outsourcing", to: "/services/it-outsourcing" },
                { label: "IT Staffing", to: "/services/it-staffing" },
                {
                  label: "Product Engineering",
                  to: "/services/product-engineering",
                },
                { label: "All services", to: "/services" },
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                { label: "About", to: "/about" },
                { label: "Team", to: "/team" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Gallery", to: "/gallery" },
              ]}
            />
            <div className="space-y-3 text-sm">
              <div className="font-semibold text-foreground">Reach us</div>
              <a
                href="mailto:contact@puretechnology.in"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                contact@puretechnology.in
              </a>
              {CONTACT_NUMBERS.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                      {contact.label}
                    </span>
                    {contact.number}
                  </span>
                </a>
              ))}
              <div className="flex items-center gap-2 pt-1" aria-label="Office countries">
                {FOOTER_FLAGS.map((item) => (
                  <span
                    key={item.flag}
                    className="group relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface ring-1 ring-border transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    tabIndex={0}
                    aria-label={`${item.label} office address`}
                  >
                    <span className="grid h-full w-full place-items-center overflow-hidden rounded-full">
                      <FlagIcon flag={item.flag} />
                    </span>
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 rounded-lg border border-border bg-background px-4 py-3 text-left text-xs leading-relaxed text-foreground opacity-0 shadow-xl shadow-black/10 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 group-focus-within:-translate-y-1 group-focus-within:opacity-100">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label} Office
                      </span>
                      <span className="block normal-case tracking-normal text-muted-foreground">
                        {item.address}
                      </span>
                      <span className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-border bg-background" />
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-muted-foreground">
          <div>© Pure Technology Pvt. Ltd. All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FlagIcon({ flag }: { flag: (typeof FOOTER_FLAGS)[number]["flag"] }) {
  if (flag === "india") {
    return (
      <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
        <rect width="60" height="20" fill="#ff671f" />
        <rect y="20" width="60" height="20" fill="#ffffff" />
        <rect y="40" width="60" height="20" fill="#046a38" />
        <circle cx="30" cy="30" r="7" fill="none" stroke="#06038d" strokeWidth="1.4" />
        <circle cx="30" cy="30" r="1.2" fill="#06038d" />
        {Array.from({ length: 24 }).map((_, index) => (
          <line
            key={index}
            x1="30"
            y1="30"
            x2="30"
            y2="23"
            stroke="#06038d"
            strokeWidth="0.55"
            transform={`rotate(${index * 15} 30 30)`}
          />
        ))}
      </svg>
    );
  }

  if (flag === "uae") {
    return (
      <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
        <rect width="60" height="20" fill="#00843d" />
        <rect y="20" width="60" height="20" fill="#ffffff" />
        <rect y="40" width="60" height="20" fill="#000000" />
        <rect width="15" height="60" fill="#ce1126" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: 13 }).map((_, index) => (
        <rect
          key={index}
          y={(index * 60) / 13}
          width="60"
          height={60 / 13}
          fill={index % 2 === 0 ? "#b31942" : "#ffffff"}
        />
      ))}
      <rect width="28" height="32" fill="#0a3161" />
      {Array.from({ length: 30 }).map((_, index) => {
        const row = Math.floor(index / 6);
        const col = index % 6;
        return (
          <circle
            key={index}
            cx={4 + col * 4.3 + (row % 2 ? 2 : 0)}
            cy={4 + row * 5}
            r="1"
            fill="#ffffff"
          />
        );
      })}
    </svg>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div className="space-y-3 text-sm">
      <div className="font-semibold text-foreground">{title}</div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.to}>
            <Link
              to={i.to as never}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
