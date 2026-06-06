import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/site/Primitives";
import { submitContactForm } from "@/lib/contact-submit";

const CONTACT_EMAIL = "contact@puretechnology.in";
const CONTACT_NUMBERS = [
  {
    label: "HR & Carrers",
    number: "+91 73875 81577",
    href: "tel:+917387581577",
    color: "var(--brand-purple)",
  },
  {
    label: "For Support",
    number: "+91 83298 49726",
    href: "tel:+918329849726",
    color: "var(--brand-orange)",
  },
  {
    label: "For Project",
    number: "+91 99701 11283",
    href: "tel:+919970111283",
    color: "var(--brand-red)",
  },
] as const;

const EXPLORING_OPTIONS = [
  "IT Staff Augmentation",
  "AI Solutions & Development",
  "Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud & Infrastructure",
  "Product Engineering",
  "Offshore Development",
  "Global Capability Center",
  "IT Outsourcing",
  "Cybersecurity",
  "Data Engineering",
  "Other / Not sure yet",
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pure Technology | Pune, India" },
      {
        name: "description",
        content:
          "Talk to Pure Technology about AI, software development, IT staffing, or product engineering. We respond to every enquiry within 24 hours.",
      },
      { property: "og:title", content: "Contact — Pure Technology" },
      {
        property: "og:description",
        content:
          "Reach the Pure Technology team in Pune. We respond within 24 hours with a real human, not an automated reply.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's Build Something{" "}
            <span className="text-gradient-brand">Great Together.</span>
          </>
        }
        description="Tell us about your project, your team, or the challenge you're trying to solve. We'll get back to you within 24 hours — with a real response, not an automated reply."
      />

      <section className="px-5 mt-25 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>

      <section className="px-5 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Where we work"
            title="Pune is home. We deliver from everywhere."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                city: "Pune (HQ)",
                addr: "603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase 1, Hinjawadi, Pune, Maharashtra 411057",
              },
              {
                city: "Remote Teams",
                addr: "Developers and consultants working across India, Middle East, Europe & North America",
              },
            ].map((o) => (
              <div key={o.city} className="glass-card rounded-2xl p-6">
                <div className="font-display font-semibold text-lg">{o.city}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {o.addr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="lg:col-span-7 glass-card rounded-3xl p-10 flex flex-col items-start gap-4">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl text-white"
          style={{ background: "var(--gradient-brand)" }}
        >
          <Check className="h-6 w-6" />
        </span>
        <h2 className="text-2xl font-display font-bold">Thanks — we've got it.</h2>
        <p className="text-muted-foreground max-w-md">
          A senior member of our team will get back to you within 24 hours, usually
          faster. In the meantime, feel free to write to us at{" "}
          <a
            className="text-foreground underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-10 space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
          const formData = new FormData(e.currentTarget);
          await submitContactForm({
            ...Object.fromEntries(formData),
            formSource: "Contact page",
          });
          setSubmitted(true);
        } catch (sendError) {
          setError(
            sendError instanceof Error
              ? sendError.message
              : "Could not send your enquiry. Please try again.",
          );
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Company" name="company" />
        <Field label="Role" name="role" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="interest">
          What are you exploring?
        </label>
        <select
          id="interest"
          name="interest"
          className="rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
        >
          {EXPLORING_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="message">
          A paragraph about what you'd like help with
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          placeholder="Where you are, where you'd like to be, and the constraints in between."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
      >
        {submitting ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4 w-4" />
      </button>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <p className="text-xs text-muted-foreground">
        We respond to every enquiry within 24 hours. By submitting, you agree to
        be contacted regarding your message.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
      />
    </div>
  );
}

function ContactIcon({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <span
      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white"
      style={{ background: color }}
    >
      {children}
    </span>
  );
}

function ContactSidebar() {
  return (
    <aside className="lg:col-span-5 space-y-4">
      <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-5">
        <h3 className="font-display font-semibold text-lg">Reach us directly</h3>
        <div className="space-y-4 text-sm">
          <a
            className="flex items-start gap-3 text-foreground/85 hover:text-foreground"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            <ContactIcon color="var(--brand-blue)">
              <Mail className="h-4 w-4" />
            </ContactIcon>
            <span>
              <span className="block text-xs text-muted-foreground">Email</span>
              {CONTACT_EMAIL}
            </span>
          </a>
          {CONTACT_NUMBERS.map((contact) => (
            <a
              key={contact.label}
              className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface-muted/60 p-3 text-foreground/85 hover:text-foreground"
              href={contact.href}
            >
              <ContactIcon color={contact.color}>
                <Phone className="h-4 w-4" />
              </ContactIcon>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {contact.label}
                </span>
                <span className="text-base font-display font-bold text-foreground">
                  {contact.number}
                </span>
              </span>
            </a>
          ))}
          <div className="flex items-start gap-3 text-foreground/85">
            <ContactIcon color="var(--brand-green)">
              <MapPin className="h-4 w-4" />
            </ContactIcon>
            <span className="min-w-0 flex-1 leading-relaxed">
              <span className="block text-xs text-muted-foreground">
                Headquartered at
              </span>
              603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase
              1, Hinjawadi, Pune, Maharashtra 411057
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface-muted/70 p-6 sm:p-7 space-y-3">
        <h3 className="font-display font-semibold text-lg">For media & press</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For interviews, partnerships, or media enquiries about Pure Technology,
          write to us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-foreground underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-surface-muted/70 p-6 sm:p-7 space-y-3">
        <h3 className="font-display font-semibold text-lg">Working hours</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Mon–Sat · 09:30 to 18:30 IST. We support client teams across India,
          the Middle East, Europe, and North America with flexible overlap hours
          on request.
        </p>
      </div>
    </aside>
  );
}
