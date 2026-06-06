import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/pure-tech-logo.png";

const SOCIAL_LINKS = [
  {
    label: "Pure Technology on Facebook",
    href: "https://www.facebook.com/puretechnologypune",
    Icon: Facebook,
  },
  {
    label: "Pure Technology on LinkedIn",
    href: "https://www.linkedin.com/company/pure-technology",
    Icon: Linkedin,
  },
] as const;

const CONTACT_NUMBERS = [
  { label: "HR & Carrers", number: "+91 73875 81577", href: "tel:+917387581577" },
  { label: "For Support", number: "+91 83298 49726", href: "tel:+918329849726" },
  { label: "For Project", number: "+91 99701 11283", href: "tel:+919970111283" },
] as const;

const OFFICES = {
  pune: {
    label: "Pune",
    country: "India",
    address:
      "603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase 1, Hinjawadi, Pune, Maharashtra 411057",
  },
  dubai: {
    label: "Dubai",
    country: "UAE",
    address:
      "PURE TECHNOLOGY - FZE, Premises Number: Office-C1-1F-SF5944, Ajman Free Zone C1 Building, Business District: Ajman Free Zone, Makani No. 4442612247",
  },
} as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface-muted">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-70" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-5">
            <img src={logo} alt="Pure Technology" className="h-20 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Pure Technology is a global AI and digital engineering company
              helping startups, enterprises, and fast-growing businesses build
              scalable technology products with speed and precision.
              Headquartered in Pune, the company specializes in AI-powered
              solutions, SaaS product engineering, enterprise application
              development, cloud infrastructure, cybersecurity, and IT staff
              augmentation.
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
                { label: "Mission & Vision", to: "/mission-vision" },
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
              <div className="space-y-4 text-muted-foreground">
                {Object.values(OFFICES).map((office) => (
                  <div key={office.label} className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>
                    <span className="block font-medium text-foreground">
                      {office.label}, {office.country}
                    </span>
                    {office.address}
                    </span>
                  </div>
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

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
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
