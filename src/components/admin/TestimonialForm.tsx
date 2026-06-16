import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export type TestimonialFormData = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: string;
  project: string;
  avatar: string;
  active: boolean;
  order: number;
};

const DEFAULT_FORM: TestimonialFormData = {
  quote: "",
  name: "",
  role: "",
  company: "",
  initials: "",
  accent: "var(--brand-blue)",
  project: "",
  avatar: "",
  active: true,
  order: 0,
};

const ACCENT_OPTIONS = [
  { label: "Brand Blue", value: "var(--brand-blue)" },
  { label: "Brand Red", value: "var(--brand-red)" },
  { label: "Brand Orange", value: "var(--brand-orange)" },
  { label: "Brand Green", value: "var(--brand-green)" },
  { label: "Brand Yellow", value: "var(--brand-yellow)" },
  { label: "Brand Purple", value: "var(--brand-purple)" },
  { label: "Brand Pink", value: "var(--brand-pink)" },
];

export function TestimonialForm({
  initialData,
  onSubmit,
  loading,
  title,
}: {
  initialData?: Partial<TestimonialFormData>;
  onSubmit: (data: TestimonialFormData) => Promise<void>;
  loading: boolean;
  title: string;
}) {
  const [form, setForm] = useState<TestimonialFormData>({
    ...DEFAULT_FORM,
    ...initialData,
  });

  function set(field: keyof TestimonialFormData, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  // Auto-generate initials from name
  function handleNameChange(value: string) {
    set("name", value);
    if (!initialData?.initials) {
      const parts = value.trim().split(/\s+/);
      const auto = parts
        .filter(Boolean)
        .map((w) => w[0].toUpperCase())
        .slice(0, 2)
        .join("");
      set("initials", auto);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit({ ...form, order: Number(form.order) });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to="/admin/testimonials"
          className="p-2 border border-border bg-surface hover:bg-secondary rounded-xl text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </Link>
        <h1 className="text-3xl font-display font-bold">{title}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ── Quote ── */}
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold border-b border-border pb-3">Testimonial Content</h3>

          <div className="space-y-2">
            <label className="text-sm font-semibold">Quote *</label>
            <textarea
              required
              rows={4}
              placeholder="What did the client say..."
              value={form.quote}
              onChange={(e) => set("quote", e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold">Project / Engagement Tag</label>
            <input
              type="text"
              placeholder="e.g. AI Calling with Zoho Integration"
              value={form.project}
              onChange={(e) => set("project", e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
            />
          </div>
        </div>

        {/* ── Person ── */}
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold border-b border-border pb-3">Person Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rajendra Patel"
                value={form.name}
                onChange={(e) => handleNameChange(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Initials *</label>
              <input
                type="text"
                required
                maxLength={3}
                placeholder="e.g. RP"
                value={form.initials}
                onChange={(e) => set("initials", e.target.value.toUpperCase())}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
              <p className="text-xs text-muted-foreground">Auto-filled from name. Max 3 chars.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Role / Designation *</label>
              <input
                type="text"
                required
                placeholder="e.g. Engineering Lead"
                value={form.role}
                onChange={(e) => set("role", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Company *</label>
              <input
                type="text"
                required
                placeholder="e.g. Bridgestone"
                value={form.company}
                onChange={(e) => set("company", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Avatar URL</label>
              <input
                type="text"
                placeholder="/testimonial/photo.jpg or https://..."
                value={form.avatar}
                onChange={(e) => set("avatar", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
              <p className="text-xs text-muted-foreground">Leave empty to show initials instead.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Accent Color</label>
              <div className="flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-xl border border-border shrink-0"
                  style={{ background: form.accent }}
                />
                <select
                  value={form.accent}
                  onChange={(e) => set("accent", e.target.value)}
                  className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
                >
                  {ACCENT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Display Settings ── */}
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold border-b border-border pb-3">Display Settings</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Display Order</label>
              <input
                type="number"
                min={1}
                value={form.order}
                onChange={(e) => set("order", Number(e.target.value))}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
              <p className="text-xs text-muted-foreground">Lower number appears first in the carousel.</p>
            </div>

            <div className="flex flex-col justify-center space-y-3">
              <label className="text-sm font-semibold">Status</label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${form.active ? "bg-primary" : "bg-border"}`}
                  onClick={() => set("active", !form.active)}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${form.active ? "translate-x-5" : "translate-x-0"}`}
                  />
                </div>
                <span className="text-sm font-medium">
                  {form.active ? "Active — shown on website" : "Hidden — not shown on website"}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/admin/testimonials"
            className="px-6 py-3.5 border border-border bg-surface text-foreground rounded-2xl text-sm font-semibold hover:bg-secondary transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 bg-foreground text-background rounded-2xl text-sm font-semibold hover:opacity-90 shadow-soft transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Saving..." : "Save Testimonial"}
          </button>
        </div>
      </form>
    </div>
  );
}
