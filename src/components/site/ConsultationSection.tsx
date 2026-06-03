import { useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Linkedin, Mail, Phone } from "lucide-react";
import { accentAt, brandIconGradient, BRAND } from "@/lib/brand-colors";
import { NAV_TEAM_CONTACTS } from "@/lib/team-contacts";
import { submitContactForm } from "@/lib/contact-submit";

const CONTACT_EMAIL = "contact@puretechnology.in";
const CONTACT_PHONE = "+91 83298 49726";

const CONSULTATION_STEPS = [
  "Drop your requirement and our expert will analyze further",
  "Outlining it, we will build roadmap and connect with you",
  "Further, finalize the approach and begin implementation",
] as const;

export function ConsultationSection({
  formSource = "Website consultation section",
}: {
  formSource?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <section className="px-5 lg:px-8 py-20 bg-surface-muted/60 border-y border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Free consultation
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold leading-tight tracking-tight">
              Got an Idea? <br />
              Get <span className="text-gradient-brand">FREE Consultation</span>
            </h2>

            <h3 className="mt-10 text-2xl sm:text-3xl font-display font-bold">What's Next?</h3>
            <ol className="mt-6 space-y-5">
              {CONSULTATION_STEPS.map((step, i) => (
                <li key={step} className="relative flex gap-5">
                  {i < CONSULTATION_STEPS.length - 1 && (
                    <span className="absolute left-6 top-12 h-[calc(100%-1rem)] w-px bg-border" />
                  )}
                  <span
                    className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full text-base font-display font-bold text-white"
                    style={{ background: brandIconGradient(accentAt(i)) }}
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-base text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <h3 className="text-xl font-display font-bold">Connect with Our Team</h3>
              <div className="mt-5 flex items-center">
                {NAV_TEAM_CONTACTS.map((member, i) => (
                  <a
                    key={member.id}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile of ${member.name}`}
                    className="group relative h-24 w-24 overflow-hidden rounded-full border-4 border-background bg-surface shadow-soft sm:h-28 sm:w-28"
                    style={{
                      marginLeft: i === 0 ? 0 : "-1.25rem",
                      zIndex: NAV_TEAM_CONTACTS.length - i,
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <span className="absolute inset-x-0 bottom-2 mx-auto grid h-10 w-10 translate-y-4 place-items-center rounded-full bg-[#0A66C2] text-white opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Linkedin className="h-5 w-5" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <ContactPill href={`mailto:${CONTACT_EMAIL}`} icon={<Mail className="h-4 w-4" />}>
                  {CONTACT_EMAIL}
                </ContactPill>
                <ContactPill
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  icon={<Phone className="h-4 w-4" />}
                >
                  {CONTACT_PHONE}
                </ContactPill>
              </div>
            </div>
          </div>
        </div>

        <form
          className="lg:col-span-7 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-12"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");
            setSubmitting(true);
            try {
              const formData = new FormData(e.currentTarget);
              await submitContactForm({
                ...Object.fromEntries(formData),
                formSource,
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
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-start justify-center">
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl text-white"
                style={{ background: BRAND.gradientBrand }}
              >
                <Check className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-3xl font-display font-bold">
                Thanks, we've got it.
              </h3>
              <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
                Our team will review your requirements and get back to you within 24
                hours with the next steps.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-3xl sm:text-4xl font-display font-bold">
                Your Tech-Powered Success is on Us
              </h3>
              <div className="mt-9 grid sm:grid-cols-2 gap-x-6 gap-y-7">
                <UnderlineField label="Your Name*" name="name" required />
                <UnderlineField label="Email Address*" name="email" type="email" required />
                <UnderlineField label="Phone Number*" name="phone" type="tel" required prefix="+91" />
                <UnderlineField label="Company" name="company" />
              </div>
              <div className="mt-8">
                <label className="text-sm text-muted-foreground" htmlFor="requirements">
                  Please describe your project requirements*
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  rows={7}
                  className="mt-3 w-full resize-none border-0 border-b border-foreground/80 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-full text-sm font-bold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: BRAND.gradientBrand }}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border-r border-white/25">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  <span className="px-10">{submitting ? "SENDING" : "SUBMIT"}</span>
                </button>
              </div>
              {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactPill({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
    >
      <span className="text-primary">{icon}</span>
      {children}
    </a>
  );
}

function UnderlineField({
  label,
  name,
  type = "text",
  required,
  prefix,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  prefix?: string;
}) {
  return (
    <label className="block text-sm text-muted-foreground" htmlFor={name}>
      {label}
      <span className="mt-3 flex items-center gap-2 border-b border-foreground/80 py-3 transition-colors focus-within:border-primary">
        {prefix && <span className="text-sm font-semibold text-foreground">{prefix}</span>}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none"
        />
      </span>
    </label>
  );
}
