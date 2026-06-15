import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bold,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  RemoveFormatting,
} from "lucide-react";

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

const META_DESCRIPTION_MAX_LENGTH = 1000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isHtmlContent(value: string) {
  return /<\/?(p|h2|h3|ul|ol|li|strong|b|em|i|br)\b/i.test(value);
}

function inlineMarkdownToHtml(value: string) {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function plainTextToEditorHtml(value: string) {
  const lines = value.replace(/\r\n?/g, "\n").split("\n");
  const html: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const closeList = () => {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      const nextListType = unordered ? "ul" : "ol";
      if (listType !== nextListType) {
        closeList();
        html.push(`<${nextListType}>`);
        listType = nextListType;
      }
      html.push(`<li>${inlineMarkdownToHtml((unordered || ordered)?.[1] || "")}</li>`);
      continue;
    }

    closeList();

    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      html.push(
        `<${heading[1].length === 2 ? "h2" : "h3"}>${inlineMarkdownToHtml(heading[2])}</${heading[1].length === 2 ? "h2" : "h3"}>`,
      );
      continue;
    }

    const strongHeading = line.match(/^\*\*(.+)\*\*$/);
    if (strongHeading) {
      html.push(`<h2>${inlineMarkdownToHtml(strongHeading[1])}</h2>`);
      continue;
    }

    html.push(`<p>${inlineMarkdownToHtml(line)}</p>`);
  }

  closeList();
  return html.join("");
}

function cleanGoogleDocsHtml(html: string) {
  if (typeof window === "undefined") return "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const output: string[] = [];

  const textFrom = (node: Node) => (node.textContent || "").replace(/\u00a0/g, " ").trim();

  const inlineHtml = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) return escapeHtml(node.textContent || "");
    if (!(node instanceof HTMLElement)) return "";

    const tag = node.tagName.toLowerCase();
    const childHtml = Array.from(node.childNodes).map(inlineHtml).join("");
    const fontWeight = node.style.fontWeight;
    const fontStyle = node.style.fontStyle;
    const textDecoration = node.style.textDecoration;
    const isBold =
      tag === "b" || tag === "strong" || fontWeight === "bold" || Number(fontWeight) >= 600;
    const isItalic = tag === "i" || tag === "em" || fontStyle === "italic";
    const isUnderline = tag === "u" || textDecoration.includes("underline");

    if (tag === "br") return "<br>";
    if (tag === "a") {
      const href = node.getAttribute("href") || "";
      const safeHref = /^(https?:|mailto:|tel:|\/)/i.test(href) ? href : "";
      return safeHref ? `<a href="${escapeHtml(safeHref)}">${childHtml}</a>` : childHtml;
    }

    let wrapped = childHtml;
    if (isBold) wrapped = `<strong>${wrapped}</strong>`;
    if (isItalic) wrapped = `<em>${wrapped}</em>`;
    if (isUnderline) wrapped = `<u>${wrapped}</u>`;
    return wrapped;
  };

  const blocks = Array.from(doc.body.querySelectorAll("h1,h2,h3,p,li,div")).filter(
    (element) => !element.parentElement?.closest("h1,h2,h3,p,li,div"),
  );
  let listType: "ul" | "ol" | null = null;

  const closeList = () => {
    if (!listType) return;
    output.push(`</${listType}>`);
    listType = null;
  };

  for (const element of blocks) {
    const text = textFrom(element);
    if (!text) continue;

    const tag = element.tagName.toLowerCase();
    if (tag === "li") {
      const parentTag = element.closest("ol") ? "ol" : "ul";
      if (listType !== parentTag) {
        closeList();
        output.push(`<${parentTag}>`);
        listType = parentTag;
      }
      output.push(`<li>${inlineHtml(element)}</li>`);
      continue;
    }

    closeList();
    const isLarge =
      tag === "h1" ||
      tag === "h2" ||
      tag === "h3" ||
      Number.parseFloat(window.getComputedStyle(element).fontSize || "0") >= 20;
    const blockTag = isLarge ? "h2" : "p";
    output.push(`<${blockTag}>${inlineHtml(element)}</${blockTag}>`);
  }

  closeList();
  return output.join("");
}

function sanitizeEditorHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<div\b[^>]*>/gi, "<p>")
    .replace(/<\/div>/gi, "</p>")
    .replace(/\s(?:on\w+|style)=("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/<(?!\/?(?:p|h2|h3|ul|ol|li|strong|b|em|i|u|a|br)\b)[^>]*>/gi, "")
    .replace(/<a\b([^>]*)>/gi, (_tag, attrs: string) => {
      const href = attrs.match(/\shref=(["'])(.*?)\1/i)?.[2] || "";
      if (!/^(https?:|mailto:|tel:|\/)/i.test(href)) return "<a>";
      return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">`;
    });
}

function htmlToPlainText(html: string) {
  if (typeof window === "undefined") return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(sanitizeEditorHtml(html), "text/html");
  const lines: string[] = [];

  const inlineMarkdown = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent || "";
    if (!(node instanceof HTMLElement)) return "";

    const tag = node.tagName.toLowerCase();
    const childText = Array.from(node.childNodes).map(inlineMarkdown).join("");

    if (tag === "strong" || tag === "b") return `**${childText}**`;
    if (tag === "em" || tag === "i") return `*${childText}*`;
    if (tag === "br") return "\n";

    return childText;
  };

  const walk = (node: Element) => {
    const tag = node.tagName.toLowerCase();
    const text = inlineMarkdown(node)
      .replace(/\u00a0/g, " ")
      .trim();
    if (!text) return;

    if (tag === "h2") {
      lines.push(`## ${text}`);
      return;
    }
    if (tag === "h3") {
      lines.push(`### ${text}`);
      return;
    }
    if (tag === "li") {
      const marker = node.closest("ol") ? "1." : "-";
      lines.push(`${marker} ${text}`);
      return;
    }
    if (tag === "p") {
      lines.push(text);
    }
  };

  Array.from(doc.body.querySelectorAll("h2,h3,p,li")).forEach(walk);
  return lines.join("\n\n");
}

function RichContentEditor({
  label,
  value,
  onChange,
  onRegisterSync,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onRegisterSync?: (sync: () => string) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    const nextHtml = isHtmlContent(value)
      ? sanitizeEditorHtml(value)
      : plainTextToEditorHtml(value);
    if (editor.innerHTML !== nextHtml) editor.innerHTML = nextHtml;
  }, [value]);

  function updateValue() {
    const editor = editorRef.current;
    if (!editor) return;
    onChange(sanitizeEditorHtml(editor.innerHTML));
  }

  useEffect(() => {
    onRegisterSync?.(() => {
      const editor = editorRef.current;
      const nextValue = sanitizeEditorHtml(editor?.innerHTML || "");
      onChange(nextValue);
      return nextValue;
    });
  }, [onChange, onRegisterSync]);

  function runCommand(command: string, commandValue?: string) {
    editorRef.current?.focus();
    document.execCommand("defaultParagraphSeparator", false, "p");
    document.execCommand(command, false, commandValue);
    updateValue();
  }

  function handlePaste(event: React.ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const html = event.clipboardData.getData("text/html");
    const text = event.clipboardData.getData("text/plain");
    const pastedHtml = html ? cleanGoogleDocsHtml(html) : plainTextToEditorHtml(text);
    document.execCommand("insertHTML", false, sanitizeEditorHtml(pastedHtml));
    updateValue();
  }

  const buttonClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground";

  return (
    <div className="space-y-2 md:col-span-2">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <div className="overflow-hidden rounded-2xl border border-input bg-surface focus-within:ring-2 focus-within:ring-ring/50 focus-within:border-ring">
        <div className="flex flex-wrap items-center gap-2 border-b border-border bg-background/70 p-2">
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("formatBlock", "h2")}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("formatBlock", "h3")}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("bold")}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("italic")}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("insertUnorderedList")}
            title="Bulleted list"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("insertOrderedList")}
            title="Numbered list"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => runCommand("removeFormat")}
            title="Clear formatting"
          >
            <RemoveFormatting className="h-4 w-4" />
          </button>
        </div>
        <div
          ref={editorRef}
          contentEditable
          role="textbox"
          aria-multiline="true"
          onInput={updateValue}
          onBlur={updateValue}
          onPaste={handlePaste}
          className="min-h-[260px] w-full px-4 py-3 text-sm leading-relaxed outline-none [&_a]:text-primary [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-xl [&_h3]:font-bold [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-3 [&_ul]:list-disc [&_ul]:pl-6"
          suppressContentEditableWarning
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Paste from Google Docs here, or use the toolbar to format headings, bold, italic, and lists.
      </p>
    </div>
  );
}

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
  const syncDescriptionTopRef = useRef<(() => string) | null>(null);
  const syncDescriptionBottomRef = useRef<(() => string) | null>(null);
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
    const descriptionTop = syncDescriptionTopRef.current?.() ?? formData.descriptionTop;
    const descriptionBottom = syncDescriptionBottomRef.current?.() ?? formData.descriptionBottom;
    await onSubmit({
      ...formData,
      descriptionTop: htmlToPlainText(descriptionTop),
      descriptionBottom: htmlToPlainText(descriptionBottom),
    });
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
                    <span className="text-xs text-muted-foreground">
                      {formData.metaTitle.length}/60
                    </span>
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
                    <label className="text-sm font-semibold text-foreground">
                      Meta Description*
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {formData.metaDescription.length}/{META_DESCRIPTION_MAX_LENGTH}
                    </span>
                  </div>
                  <textarea
                    required
                    rows={5}
                    maxLength={META_DESCRIPTION_MAX_LENGTH}
                    placeholder="Write a clear search result description with the main keyword and value of this article."
                    value={formData.metaDescription}
                    onChange={(e) => handleFieldChange("metaDescription", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Search engines usually display around 150-160 characters, but longer
                    descriptions can now be saved.
                  </p>
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
                <label className="text-sm font-semibold text-foreground">
                  Publish Date & Time*
                </label>
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
              <label className="text-sm font-semibold text-foreground">
                Excerpt (Brief card description)*
              </label>
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
              <h4 className="text-base font-bold text-foreground">
                1. Hero Section (Start of Blog)
              </h4>
              <label className="text-sm font-semibold text-foreground">Hero Image Path / URL</label>
              <input
                type="text"
                placeholder="e.g. /blogs/vibe-coding-top.png"
                value={formData.imageTop}
                onChange={(e) => handleFieldChange("imageTop", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-mono"
              />
            </div>

            <RichContentEditor
              label="Content - First Block (Before Middle Image)*"
              value={formData.descriptionTop}
              onChange={(value) => handleFieldChange("descriptionTop", value)}
              onRegisterSync={(sync) => {
                syncDescriptionTopRef.current = sync;
              }}
            />

            {/* 2. Middle Image */}
            <div className="space-y-2 md:col-span-2 pt-4 border-t border-border">
              <h4 className="text-base font-bold text-foreground">2. Middle Image Section</h4>
              <label className="text-sm font-semibold text-foreground">
                Middle Image Path / URL
              </label>
              <input
                type="text"
                placeholder="e.g. /blogs/vibe-coding-mid.png"
                value={formData.imageMiddle}
                onChange={(e) => handleFieldChange("imageMiddle", e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-mono"
              />
            </div>

            <RichContentEditor
              label="Content - Second Block (After Middle Image)*"
              value={formData.descriptionBottom}
              onChange={(value) => handleFieldChange("descriptionBottom", value)}
              onRegisterSync={(sync) => {
                syncDescriptionBottomRef.current = sync;
              }}
            />
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
