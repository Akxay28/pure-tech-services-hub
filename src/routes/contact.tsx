import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pure Technology | Bengaluru, India" },
      {
        name: "description",
        content:
          "Talk to Pure Technology about AI, IT staffing, or product engineering. We respond to every enquiry within 48 hours.",
      },
      { property: "og:title", content: "Contact — Pure Technology" },
      {
        property: "og:description",
        content:
          "Reach the Pure Technology team in Bengaluru. We respond within 48 hours.",
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
            Let's start with{" "}
            <span className="text-gradient-brand">an honest conversation.</span>
          </>
        }
        description="Tell us where you are, where you'd like to be, and what's getting in the way. We'll respond within 48 hours with a real human, not a tracking number."
      />

      <section className="px-5 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>

      <section className="px-5 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Where we work"
            title="Bengaluru is home. We collaborate from everywhere."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                city: "Bengaluru (HQ)",
                addr: "Prestige Atrium, MG Road, Bengaluru 560001",
              },
              { city: "Hyderabad", addr: "Cyber Towers, HITEC City, Hyderabad 500081" },
              { city: "Pune", addr: "World Trade Center, Kharadi, Pune 411014" },
            ].map((o) => (
              <div
                key={o.city}
                className="glass-card rounded-2xl p-6"
              >
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
          A senior member of our team will get back to you within 48 hours, usually faster. In the meantime, feel free to write to us at <a className="text-foreground underline" href="mailto:hello@puretechnology.in">hello@puretechnology.in</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-10 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
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
          <option>AI Solutions</option>
          <option>IT Staffing</option>
          <option>Product Engineering</option>
          <option>Not sure yet — let's talk</option>
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
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition-opacity shadow-soft"
      >
        Send enquiry
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-xs text-muted-foreground">
        We respond to every enquiry within 48 hours. By submitting, you agree to be contacted regarding your message.
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

function ContactSidebar() {
  return (
    <aside className="lg:col-span-5 space-y-4">
      <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-5">
        <h3 className="font-display font-semibold text-lg">Reach us directly</h3>
        <div className="space-y-4 text-sm">
          <a className="flex items-start gap-3 text-foreground/85 hover:text-foreground" href="mailto:hello@puretechnology.in">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-white"
              style={{ background: "var(--brand-blue)" }}
            >
              <Mail className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs text-muted-foreground">Email</span>
              hello@puretechnology.in
            </span>
          </a>
          <a className="flex items-start gap-3 text-foreground/85 hover:text-foreground" href="tel:+918040000000">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-white"
              style={{ background: "var(--brand-orange)" }}
            >
              <Phone className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs text-muted-foreground">Phone</span>
              +91 80 4000 0000
            </span>
          </a>
          <div className="flex items-start gap-3 text-foreground/85">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-white"
              style={{ background: "var(--brand-green)" }}
            >
              <MapPin className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs text-muted-foreground">Headquartered at</span>
              Prestige Atrium, MG Road, Bengaluru 560001
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface-muted/70 p-6 sm:p-7 space-y-3">
        <h3 className="font-display font-semibold text-lg">For media & press</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For interviews, quotes, or background on Pure Technology, write to
          <a href="mailto:press@puretechnology.in" className="text-foreground underline ml-1">press@puretechnology.in</a>.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-surface-muted/70 p-6 sm:p-7 space-y-3">
        <h3 className="font-display font-semibold text-lg">Working hours</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Mon–Fri · 09:30 to 19:00 IST. We also keep overlap windows with
          North America (PT/ET) and EMEA (CET) for client teams.
        </p>
      </div>
    </aside>
  );
}
