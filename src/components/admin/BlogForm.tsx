import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export type BlogFormData = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  category: string;
  author: string;
  accent: string;
  excerpt: string;
  imageTop: string;
  descriptionTop: string;
  imageMiddle: string;
  descriptionBottom: string;
  status: "published" | "draft" | "scheduled";
  publishDate?: string;
};

const DEFAULT_FORM: BlogFormData = {
  title: "",
  slug: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  category: "Artificial Intelligence",
  author: "",
  accent: "var(--brand-pink)",
  excerpt: "",
  imageTop: "",
  descriptionTop: "",
  imageMiddle: "",
  descriptionBottom: "",
  status: "published",
  publishDate: "",
};

const formatToDatetimeLocal = (dateInput: any) => {
  if (!dateInput) return "";
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "";
  const tzOffset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tzOffset).toISOString().slice(0, 16);
};

export function BlogForm({
  initialData,
  onSubmit,
  loading,
  title,
}: {
  initialData?: any;
  onSubmit: (data: BlogFormData) => Promise<void>;
  loading: boolean;
  title: string;
}) {
  const [formData, setFormData] = useState<BlogFormData>({
    ...DEFAULT_FORM,
    ...initialData,
    slug: initialData?.slug || "",
    metaTitle: initialData?.metaTitle || initialData?.title || "",
    metaDescription: initialData?.metaDescription || initialData?.excerpt || "",
    metaKeywords: initialData?.metaKeywords || "",
    status: initialData?.status || "published",
    publishDate: initialData?.publishDate ? formatToDatetimeLocal(initialData.publishDate) : "",
  });

  function formatSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function handleFieldChange(field: keyof BlogFormData, value: any) {
    setFormData((prev) => {
      if (field === "title") {
        return {
          ...prev,
          title: value,
          slug: prev.slug ? prev.slug : formatSlug(value),
          metaTitle: prev.metaTitle ? prev.metaTitle : value,
        };
      }

      if (field === "excerpt") {
        return {
          ...prev,
          excerpt: value,
          metaDescription: prev.metaDescription ? prev.metaDescription : value,
        };
      }

      if (field === "slug") {
        return { ...prev, slug: formatSlug(value) };
      }

      return { ...prev, [field]: value };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit(formData);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to="/admin/blogs"
          className="p-2 border border-border bg-surface hover:bg-secondary rounded-xl text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </Link>
        <h1 className="text-3xl font-display font-bold">{title}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold border-b border-border pb-3">Blog Post Information</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-foreground">Blog Title*</label>
              <input
                type="text"
                required
                placeholder="e.g. The Paradigm Shift of Vibe Coding"
                value={formData.title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
            </div>

            <div className="md:col-span-2 rounded-2xl border border-border bg-background/60 p-5 space-y-5">
              <div>
                <h4 className="text-base font-bold text-foreground">SEO Settings</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Required fields for search snippets, social sharing, and clean blog URLs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">URL Slug*</label>
                  <div className="flex rounded-2xl border border-input bg-surface focus-within:ring-2 focus-within:ring-ring/50 focus-within:border-ring">
                    <span className="shrink-0 px-4 py-3 text-sm text-muted-foreground border-r border-border">
                      /blog/
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="vibe-coding-paradigm"
                      value={formData.slug}
                      onChange={(e) => handleFieldChange("slug", e.target.value)}
                      className="min-w-0 flex-1 px-4 py-3 bg-transparent text-sm focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-sm font-semibold text-foreground">Meta Title*</label>
                    <span className="text-xs text-muted-foreground">{formData.metaTitle.length}/60</span>
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={70}
                    placeholder="SEO title shown in Google"
                    value={formData.metaTitle}
                    onChange={(e) => handleFieldChange("metaTitle", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-sm font-semibold text-foreground">Meta Description*</label>
                    <span className="text-xs text-muted-foreground">{formData.metaDescription.length}/160</span>
                  </div>
                  <textarea
                    required
                    rows={3}
                    maxLength={180}
                    placeholder="Write a clear search result description with the main keyword and value of this article."
                    value={formData.metaDescription}
                    onChange={(e) => handleFieldChange("metaDescription", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Meta Keywords*</label>
                  <input
                    type="text"
                    required
                    placeholder="ai coding, vibe coding, software development, product engineering"
                    value={formData.metaKeywords}
                    onChange={(e) => handleFieldChange("metaKeywords", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  />
                  <p className="text-xs text-muted-foreground">Separate keywords with commas.</p>
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Author Name & Title*</label>
              <input
                type="text"
                required
                placeholder="e.g. Arjun Mehta, Head of AI Research"
                value={formData.author}
                onChange={(e) => handleFieldChange("author", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Category*</label>
              <select
                value={formData.category}
                onChange={(e) => handleFieldChange("category", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              >
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Global Capability Centers">Global Capability Centers</option>
                <option value="Cloud & Security">Cloud & Security</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Technology & Trends">Technology & Trends</option>
              </select>
            </div>

            {/* Accent Color */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Accent Theme Color*</label>
              <select
                value={formData.accent}
                onChange={(e) => handleFieldChange("accent", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              >
                <option value="var(--brand-pink)">Brand Pink</option>
                <option value="var(--brand-blue)">Brand Blue</option>
                <option value="var(--brand-green)">Brand Green</option>
                <option value="var(--brand-orange)">Brand Orange</option>
                <option value="var(--brand-red)">Brand Red</option>
                <option value="var(--brand-yellow)">Brand Yellow</option>
                <option value="var(--brand-purple)">Brand Purple</option>
              </select>
            </div>

            {/* Publish Status */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Publish Status*</label>
              <select
                value={formData.status}
                onChange={(e) => handleFieldChange("status", e.target.value as any)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
              >
                <option value="published">Publish Immediately</option>
                <option value="scheduled">Schedule Post</option>
                <option value="draft">Save as Draft</option>
              </select>
            </div>

            {/* Publish Date & Time (Conditional) */}
            {formData.status === "scheduled" && (
              <div className="space-y-2 animate-fade-in md:col-span-2">
                <label className="text-sm font-semibold text-foreground">Publish Date & Time*</label>
                <input
                  type="datetime-local"
                  required
                  value={formData.publishDate || ""}
                  onChange={(e) => handleFieldChange("publishDate", e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                />
              </div>
            )}

            {/* Excerpt */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-foreground">Excerpt (Brief card description)*</label>
              <textarea
                required
                rows={3}
                placeholder="Provide a concise description of the blog to be displayed on listing cards..."
                value={formData.excerpt}
                onChange={(e) => handleFieldChange("excerpt", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
              />
            </div>

            {/* 1. Top Image */}
            <div className="space-y-2 md:col-span-2 pt-4 border-t border-border">
              <h4 className="text-base font-bold text-foreground">1. Hero Section (Start of Blog)</h4>
              <label className="text-sm font-semibold text-foreground">Hero Image Path / URL</label>
              <input
                type="text"
                placeholder="e.g. /blogs/vibe-coding-top.png"
                value={formData.imageTop}
                onChange={(e) => handleFieldChange("imageTop", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-mono"
              />
            </div>

            {/* descriptionTop */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-foreground">Content - First Block (Before Middle Image)*</label>
              <textarea
                required
                rows={8}
                placeholder="Enter the first half of your blog post contents. Separate paragraphs with double enter spacing."
                value={formData.descriptionTop}
                onChange={(e) => handleFieldChange("descriptionTop", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-sans"
              />
            </div>

            {/* 2. Middle Image */}
            <div className="space-y-2 md:col-span-2 pt-4 border-t border-border">
              <h4 className="text-base font-bold text-foreground">2. Middle Image Section</h4>
              <label className="text-sm font-semibold text-foreground">Middle Image Path / URL</label>
              <input
                type="text"
                placeholder="e.g. /blogs/vibe-coding-mid.png"
                value={formData.imageMiddle}
                onChange={(e) => handleFieldChange("imageMiddle", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-mono"
              />
            </div>

            {/* descriptionBottom */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-foreground">Content - Second Block (After Middle Image)*</label>
              <textarea
                required
                rows={8}
                placeholder="Enter the continuing content of the blog post to be shown below the middle image."
                value={formData.descriptionBottom}
                onChange={(e) => handleFieldChange("descriptionBottom", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-sans"
              />
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/admin/blogs"
            className="px-6 py-3.5 border border-border bg-surface text-foreground rounded-2xl text-sm font-semibold hover:bg-secondary transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 bg-foreground text-background rounded-2xl text-sm font-semibold hover:opacity-90 shadow-soft transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Saving..." : "Save Blog Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
