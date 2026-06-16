import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export type CareerFormData = {
  title: string;
  team: string;
  location: string;
  type: string;
  tag: string;
  blurb: string;
  accent: string;
  durationDays: number;
};

const DEFAULT_FORM: CareerFormData = {
  title: "",
  team: "",
  location: "Pune",
  type: "Full-time",
  tag: "",
  blurb: "",
  accent: "var(--brand-blue)",
  durationDays: 30,
};

const ACCENT_OPTIONS = [
  { label: "Brand Blue", value: "var(--brand-blue)" },
  { label: "Brand Green", value: "var(--brand-green)" },
  { label: "Brand Orange", value: "var(--brand-orange)" },
  { label: "Brand Pink", value: "var(--brand-pink)" },
  { label: "Brand Red", value: "var(--brand-red)" },
  { label: "Brand Yellow", value: "var(--brand-yellow)" },
  { label: "Brand Purple", value: "var(--brand-purple)" },
];

const TYPE_OPTIONS = ["Full-time", "Part-time", "Contract", "Internship"];

export function CareerForm({
  initialData,
  onSubmit,
  loading,
  title,
}: {
  initialData?: Partial<CareerFormData>;
  onSubmit: (data: CareerFormData) => Promise<void>;
  loading: boolean;
  title: string;
}) {
  const [formData, setFormData] = useState<CareerFormData>({
    ...DEFAULT_FORM,
    ...initialData,
    durationDays: Number(initialData?.durationDays) || 30,
  });

  function handleChange(field: keyof CareerFormData, value: any) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit({ ...formData, durationDays: Number(formData.durationDays) });
  }

  // Compute preview expiry date
  const previewExpiry = new Date(Date.now() + formData.durationDays * 24 * 60 * 60 * 1000);
  const previewExpiryStr = previewExpiry.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to="/admin/careers"
          className="p-2 border border-border bg-surface hover:bg-secondary rounded-xl text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </Link>
        <h1 className="text-3xl font-display font-bold">{title}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ── Main Details ── */}
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold border-b border-border pb-3">Job Opening Details</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-foreground">Job Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. .NET Fresher"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
            </div>

            {/* Team */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Team / Department *</label>
              <input
                type="text"
                required
                placeholder="e.g. Product Engineering"
                value={formData.team}
                onChange={(e) => handleChange("team", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Location *</label>
              <input
                type="text"
                required
                placeholder="e.g. Pune"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
            </div>

            {/* Employment Type */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Employment Type *</label>
              <select
                value={formData.type}
                onChange={(e) => handleChange("type", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              >
                {TYPE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Skill Tag */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Skill / Domain Tag *</label>
              <input
                type="text"
                required
                placeholder="e.g. .NET Development"
                value={formData.tag}
                onChange={(e) => handleChange("tag", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
            </div>

            {/* Accent Color */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Accent Color</label>
              <div className="flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-xl border border-border shrink-0"
                  style={{ background: formData.accent }}
                />
                <select
                  value={formData.accent}
                  onChange={(e) => handleChange("accent", e.target.value)}
                  className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                >
                  {ACCENT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-foreground">Job Description *</label>
              <textarea
                required
                rows={4}
                placeholder="Describe the role, responsibilities, and what candidates can expect..."
                value={formData.blurb}
                onChange={(e) => handleChange("blurb", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
              />
            </div>
          </div>
        </div>

        {/* ── Listing Timer ── */}
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-5">
          <div>
            <h3 className="text-lg font-bold">Listing Timer</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Set how many days this opening stays active. After that the "Apply Now" button
              is automatically disabled and the position shows as closed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Active for (days) *</label>
              <input
                type="number"
                required
                min={1}
                max={365}
                value={formData.durationDays}
                onChange={(e) => handleChange("durationDays", Number(e.target.value))}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
              <p className="text-xs text-muted-foreground">Between 1 and 365 days.</p>
            </div>

            <div className="flex flex-col justify-end space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Preview
              </p>
              <div className="rounded-2xl border border-border bg-background/60 px-4 py-3 flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1"
                  style={{
                    background: `color-mix(in oklab, ${formData.accent} 15%, transparent)`,
                    color: formData.accent,
                    border: `1px solid color-mix(in oklab, ${formData.accent} 30%, transparent)`,
                  }}
                >
                  Closes in {formData.durationDays} day{formData.durationDays !== 1 ? "s" : ""}
                </span>
                <span className="text-xs text-muted-foreground">Expires {previewExpiryStr}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/admin/careers"
            className="px-6 py-3.5 border border-border bg-surface text-foreground rounded-2xl text-sm font-semibold hover:bg-secondary transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 bg-foreground text-background rounded-2xl text-sm font-semibold hover:opacity-90 shadow-soft transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Saving..." : "Save Opening"}
          </button>
        </div>
      </form>
    </div>
  );
}
