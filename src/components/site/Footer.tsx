import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/pure-tech-logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface-muted">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-70" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-5">
            <img src={logo} alt="Pure Technology" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Pure Technology is an India-headquartered engineering partner
              helping enterprises ship AI products, hire vetted tech talent,
              and build SaaS that scales — with a delivery model rooted in
              craft, accountability, and long-term partnership.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface hover:bg-secondary transition-colors"
                  aria-label="Social link"
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
                { label: "IT Staffing", to: "/services/it-staffing" },
                { label: "Product Engineering", to: "/services/product-engineering" },
                { label: "All services", to: "/services" },
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                { label: "About", to: "/about" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <div className="space-y-3 text-sm">
              <div className="font-semibold text-foreground">Reach us</div>
              <a
                href="mailto:hello@puretechnology.in"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4 mt-0.5" />
                hello@puretechnology.in
              </a>
              <a
                href="tel:+918040000000"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4 mt-0.5" />
                +91 80 4000 0000
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Prestige Atrium, MG Road
                  <br />
                  Bengaluru 560001, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Pure Technology Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
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
              to={i.to}
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
