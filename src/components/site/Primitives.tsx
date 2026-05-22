import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import type { CaseStudy } from "@/lib/case-study";
import { brandIconGradient } from "@/lib/brand-colors";

/** Rounded icon tile — same gradient treatment as the homepage delivery cards. */
export function BrandIconBox({
  color,
  children,
  size = "md",
  className = "",
}: {
  color: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-8 w-8 rounded-lg",
    md: "h-11 w-11 rounded-xl",
    lg: "h-12 w-12 rounded-2xl",
  };
  return (
    <span
      className={`grid place-items-center text-white ${sizes[size]} ${className}`}
      style={{ background: brandIconGradient(color) }}
    >
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-3 py-1 text-xs font-medium text-foreground/80 animate-fade-up">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-up">
            {description}
          </p>
        )}
        {children && <div className="mt-9 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}

export function PrimaryButton({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function GhostButton({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
    >
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span
            className="h-1 w-6 rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="glass-card rounded-2xl px-5 py-6">
      <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-brand">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const logoStrip = [
  {
    name: "Principal Controller of Defense Accounts",
    logo: "/logos/defensel llooio.png",
  },
  {
    name: "Schlier",
    logo: "/logos/schlier.png",
  },
  {
    name: "A & Associate",
    logo: "/logos/a and associate.png",
  },
  {
    name: "Bajaj",
    logo: "/logos/bajaj logo.png",
  },
  {
    name: "Bridgestone",
    logo: "/logos/bridgestone logoooo.png",
  },
  {
    name: "Defense Logistics",
    logo: "/logos/defensel llooio.png",
  },
  {
    name: "Dy Patil",
    logo: "/logos/dy atuoipo.png",
  },
  {
    name: "Kohler",
    logo: "/logos/kohlerr.png",
  },
  {
    name: "Sakal Money",
    logo: "/logos/sakal money.png",
  },
  {
    name: "Schlier",
    logo: "/logos/schlier.png",
  },
  {
    name: "Snapwork",
    logo: "/logos/snapwork.png",
  },
  {
    name: "Tata Motors",
    logo: "/logos/tata motorrs.png",
  },
];

export function ClientMarquee() {
  return (
    <section className="py-14 border-y border-border bg-surface-muted/60">
      <div className="mx-auto max-w-10xl px-5 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground text-center">
          Trusted by engineering teams across India & beyond
        </p>
        <div className="mt-8 overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-14 w-max animate-marquee items-center">
  {[...logoStrip, ...logoStrip].map((item, i) => (
    <div
      key={i}
      className="flex items-center justify-center min-w-[140px]"
    >
      <img
        src={item.logo}
        alt={item.name}
        className="h-20 sm:h-24 lg:h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
      />
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}

export function Testimonial({
  quote,
  name,
  role,
  company,
  initials,
  accent = "var(--brand-blue)",
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent?: string;
}) {
  return (
    <figure className="glass-card rounded-3xl p-7 h-full flex flex-col">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-foreground/30"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.17A2 2 0 0 1 7.17 9V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-3.66A2 2 0 0 1 17.17 9V6Z" />
      </svg>
      <blockquote className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/90 flex-1">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className="grid h-11 w-11 place-items-center rounded-full font-display font-semibold text-white"
          style={{ background: brandIconGradient(accent) }}
        >
          {initials}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-foreground">{name}</span>
          <span className="block text-muted-foreground">
            {role} · {company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function CaseStudyCard({
  client,
  industry,
  challenge,
  outcome,
  metrics,
  accent = "var(--brand-blue)",
}: CaseStudy) {
  return (
    <article className="relative glass-card rounded-3xl p-7 overflow-hidden">
      <div
        className="absolute -top-12 -right-12 h-44 w-44 rounded-full opacity-25 blur-3xl"
        style={{ background: accent }}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Case study · {industry}
          </span>
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: accent }}
          />
        </div>
        <h3 className="mt-3 text-2xl font-display font-bold">{client}</h3>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/85">
          <p>
            <span className="font-semibold text-foreground">Challenge — </span>
            {challenge}
          </p>
          <p>
            <span className="font-semibold text-foreground">What we did — </span>
            {outcome}
          </p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-surface/70 px-3 py-3 text-center"
            >
              <div
                className="text-xl font-display font-bold"
                style={{ color: accent }}
              >
                {m.value}
              </div>
              <div className="text-[11px] mt-0.5 text-muted-foreground leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function CTASection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="relative mx-auto max-w-7xl rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_20%,white,transparent_60%)] opacity-30" />
        <div className="relative px-8 sm:px-14 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/90 transition-colors"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
