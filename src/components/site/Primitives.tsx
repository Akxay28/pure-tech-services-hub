import { Link, useRouter } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import { brandIconGradient } from "@/lib/brand-colors";

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

export function BrandTitle({ children }: { children: ReactNode }) {
  if (typeof children !== "string") {
    return <>{children}</>;
  }
  const words = children.trim().split(/\s+/);
  if (words.length < 2) {
    return <span className="text-gradient-brand capitalize">{children}</span>;
  }
  const accentLength = words.length >= 7 ? 3 : 2;
  const opening = words.slice(0, -accentLength).join(" ");
  const accent = words.slice(-accentLength).join(" ");
  return (
    <span className="capitalize">
      {opening} <span className="text-gradient-brand">{accent}</span>
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
          <BrandTitle>{title}</BrandTitle>
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

export function PrimaryButton({ to, children }: { to: string; children: ReactNode }) {
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

export function GhostButton({ to, children }: { to: string; children: ReactNode }) {
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
          <span className="h-1 w-6 rounded-full" style={{ background: "var(--gradient-brand)" }} />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
        <BrandTitle>{title}</BrandTitle>
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card rounded-2xl px-5 py-6">
      <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-brand">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const logoStrip = [
  { name: "Principal Controller of Defense Accounts", logo: "/logos/defensel llooio.png" },
  { name: "Schlier", logo: "/logos/schlier.png" },
  { name: "A & Associate", logo: "/logos/a and associate.png" },
  { name: "Bajaj", logo: "/logos/bajaj logo.png" },
  { name: "Bridgestone", logo: "/logos/bridgestone logoooo.png" },
  { name: "Defense Logistics", logo: "/logos/defensel llooio.png" },
  { name: "Dy Patil", logo: "/logos/dy atuoipo.png" },
  { name: "Kohler", logo: "/logos/kohlerr.png" },
  { name: "Sakal Money", logo: "/logos/sakal money.png" },
  { name: "Schlier", logo: "/logos/schlier.png" },
  { name: "Snapwork", logo: "/logos/snapwork.png" },
  { name: "Tata Motors", logo: "/logos/tata motorrs.png" },
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
              <div key={i} className="flex items-center justify-center min-w-[140px]">
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
  project, // ← add
  email,
  avatar, // ← add
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent?: string;
  project?: string; // ← add
  email?: string;
  avatar?: string; // ← add
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
        "{quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={name} className="h-11 w-11 rounded-full object-cover shrink-0" />
        ) : (
          <span
            className="grid h-11 w-11 place-items-center rounded-full font-display font-semibold text-white shrink-0"
            style={{ background: brandIconGradient(accent) }}
          >
            {initials}
          </span>
        )}
        <span className="text-sm">
          <span className="block font-semibold text-foreground">{name}</span>
          <span className="block text-muted-foreground">
            {company ? `${role} · ${company}` : role}
          </span>
          {project && (
            <span
              className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
              style={{ background: accent }}
            >
              {project}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

// ─── CASE STUDY TYPES ─────────────────────────────────────────────────────────

type CaseStudy = {
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  accent?: string;
  image?: string;
  projectName?: string;
  objective?: string;
  solutions?: string[];
  challenges?: string[];
  keyBenefits?: { value: string; label: string }[];
  results?: string[];
  techStack?: { category: string; items: string; icon: string }[];
  conclusion?: string;
};

// ─── CASE STUDY CARD ──────────────────────────────────────────────────────────

export function CaseStudyCard({
  client,
  industry,
  challenge,
  outcome,
  metrics,
  accent = "var(--brand-blue)",
  image,
  ...rest
}: CaseStudy) {
  const router = useRouter();

  const slug = client
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const study = { client, industry, challenge, outcome, metrics, accent, image, ...rest };

  function handleExplore() {
    sessionStorage.setItem("caseStudy", JSON.stringify(study));
    router.navigate({
      to: "/case-studies/$slug",
      params: { slug },
    });
  }

  return (
    <article
      className="group relative overflow-hidden rounded-[28px] glass-card border border-white/10 transition-all duration-500 hover:-translate-y-1"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      {/* Static glow */}
      <div
        className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: accent }}
      />

      {/* Mouse follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            600px circle at var(--x) var(--y),
            color-mix(in oklab, ${accent} 20%, transparent),
            transparent 40%
          )`,
        }}
      />

      {/* Image */}
      {image && (
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={image}
            alt={client}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {industry}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Case study
          </span>
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
        </div>

        <h3 className="mt-2.5 text-xl font-display capitalize font-bold">{client}</h3>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
          <p>
            <span className="font-semibold text-foreground">Challenge — </span>
            {challenge}
          </p>
          <p>
            <span className="font-semibold text-foreground">What we did — </span>
            {outcome}
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center backdrop-blur-md"
            >
              <div className="text-lg font-display font-bold" style={{ color: accent }}>
                {m.value}
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleExplore}
            className="group flex items-center cursor-pointer gap-2 rounded-full border border-border bg-surface/60 px-6 py-2.5 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-surface hover:text-foreground"
          >
            Read More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────

export function CTASection({
  title,
  description,
  primaryLabel = "Talk To Our Team",
  primaryTo = "/contact",
  secondaryLabel = "Explore Services",
  secondaryTo = "/services",
  contactEmail,
  contactPhone,
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  contactEmail?: string;
  contactPhone?: string;
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
            {(contactEmail || contactPhone) && (
              <p className="mt-5 text-sm text-white/80 space-y-1">
                {contactEmail && (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="block hover:text-white transition-colors"
                  >
                    {contactEmail}
                  </a>
                )}
                {contactPhone && (
                  <a
                    href={`tel:${contactPhone.replace(/\s/g, "")}`}
                    className="block hover:text-white transition-colors"
                  >
                    {contactPhone}
                  </a>
                )}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              to={secondaryTo as never}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
            >
              {secondaryLabel}
            </Link>
            <Link
              to={primaryTo as never}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/90 transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
