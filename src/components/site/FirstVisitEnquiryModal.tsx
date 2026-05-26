import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

const MODAL_STORAGE_KEY = "pure-technology:first-visit-enquiry-dismissed";
const MODAL_OPEN_DELAY_MS = 10_000;

const SERVICE_OPTIONS = [
  "AI Solutions & Development",
  "Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud & Infrastructure",
  "Product Engineering",
  "IT Staff Augmentation",
  "Offshore Development",
  "Global Capability Center",
  "Cybersecurity",
  "Other / Not sure yet",
] as const;

export function FirstVisitEnquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let openTimer: ReturnType<typeof window.setTimeout> | undefined;

    try {
      if (!window.sessionStorage.getItem(MODAL_STORAGE_KEY)) {
        openTimer = window.setTimeout(() => setOpen(true), MODAL_OPEN_DELAY_MS);
      }
    } catch {
      openTimer = window.setTimeout(() => setOpen(true), MODAL_OPEN_DELAY_MS);
    }

    return () => {
      if (openTimer) window.clearTimeout(openTimer);
    };
  }, []);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(MODAL_STORAGE_KEY, "true");
    } catch {
      // The modal still closes when private browsing blocks session storage.
    }
    setOpen(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      dismiss();
      return;
    }
    setOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      window.sessionStorage.setItem(MODAL_STORAGE_KEY, "true");
    } catch {
      // Showing the confirmation does not depend on storage availability.
    }
    setSubmitted(true);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-[color:var(--brand-purple)]/35 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[71] w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100vh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[28px] border border-white/70 bg-surface shadow-[0_30px_90px_-28px_rgba(46,11,125,0.45)] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95">
          <div className="modal-brand-flow h-1.5 w-full" />
          <DialogPrimitive.Close
            aria-label="Close enquiry form"
            className="absolute right-4 top-5 grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-[color:var(--brand-purple)] transition-colors hover:bg-[color:var(--brand-pink-soft)] focus:outline-none focus:ring-2 focus:ring-ring/50"
          >
            <X className="h-4 w-4" />
          </DialogPrimitive.Close>

          {submitted ? (
            <div className="px-6 py-12 sm:px-10 sm:py-14">
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-soft"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Check className="h-6 w-6" />
              </span>
              <DialogPrimitive.Title className="mt-6 text-2xl font-display font-bold text-foreground">
                Thanks, we have your request.
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Our team will review your requirement and get back to you shortly.
              </DialogPrimitive.Description>
              <button
                type="button"
                onClick={dismiss}
                className="mt-8 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <div className="px-6 pb-7 pt-8 sm:px-10 sm:pb-10 sm:pt-9">
              <div className="pr-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-pink-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--brand-purple)]">
                  <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-pink)]" />
                  Start a conversation
                </div>
                <DialogPrimitive.Title className="mt-4 text-2xl sm:text-3xl font-display font-bold leading-tight text-foreground">
                  What can we help you build?
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Tell us what you need and our team will connect with you about the right next
                  step.
                </DialogPrimitive.Description>
              </div>

              <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ModalField label="Your name" name="visitor-name" required />
                  <ModalField label="Contact number" name="visitor-phone" type="tel" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ModalField label="Work email" name="visitor-email" type="email" required />
                  <ModalField label="Company" name="visitor-company" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="visitor-service" className="text-sm font-medium text-foreground">
                    What service are you looking for?
                    <span className="ml-0.5 text-destructive">*</span>
                  </label>
                  <select
                    id="visitor-service"
                    name="service"
                    required
                    defaultValue=""
                    className="rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="visitor-description"
                    className="text-sm font-medium text-foreground"
                  >
                    Brief description
                    <span className="ml-0.5 text-destructive">*</span>
                  </label>
                  <textarea
                    id="visitor-description"
                    name="description"
                    rows={4}
                    required
                    placeholder="Tell us about your idea, timeline, or challenge."
                    className="resize-none rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                  />
                </div>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    We respond to enquiries within 24 hours.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition-opacity hover:opacity-90"
                  >
                    Send enquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function ModalField({
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
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
      />
    </div>
  );
}
