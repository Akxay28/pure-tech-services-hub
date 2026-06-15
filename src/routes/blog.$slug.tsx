import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { getBlogBySlugAction } from "@/lib/admin-actions";
import { CTASection } from "@/components/site/Primitives";

type BlogContentBlock =
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function cleanContentLine(line: string) {
  return line.replace(/\u00a0/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isHtmlContent(value: string) {
  return /<\/?(p|h2|h3|ul|ol|li|strong|b|em|i|u|a|br)\b/i.test(value);
}

function sanitizeBlogHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
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

function getListItem(line: string) {
  const unordered = line.match(/^[\s]*[-*\u2022]\s+(.+)$/);
  if (unordered) return { type: "ul" as const, text: unordered[1].trim() };

  const ordered = line.match(/^[\s]*\d+[.)]\s+(.+)$/);
  if (ordered) return { type: "ol" as const, text: ordered[1].trim() };

  return null;
}

function getHeading(line: string, isFirstBlock: boolean) {
  const markdownHeading = line.match(/^(#{2,3})\s+(.+)$/);
  if (markdownHeading) {
    return {
      level: markdownHeading[1].length === 2 ? 2 : 3,
      text: markdownHeading[2].trim(),
    } as const;
  }

  const boldHeading = line.match(/^\*\*(.+)\*\*$/);
  if (boldHeading) return { level: 2, text: boldHeading[1].trim() } as const;

  const looksLikeTitle =
    line.length <= 90 &&
    !/[.!?:;]$/.test(line) &&
    /[A-Z]/.test(line[0] ?? "") &&
    line.split(/\s+/).length <= 12;

  if (!isFirstBlock && looksLikeTitle) return { level: 2, text: line } as const;

  return null;
}

function parseBlogContent(content: string): BlogContentBlock[] {
  const blocks: BlogContentBlock[] = [];
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  let paragraphLines: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let listItems: string[] = [];

  const flushParagraph = () => {
    const text = paragraphLines.map(cleanContentLine).filter(Boolean).join(" ");
    paragraphLines = [];
    if (!text) return;

    const heading = getHeading(text, blocks.length === 0);
    if (heading) {
      blocks.push({ type: "heading", level: heading.level, text: heading.text });
      return;
    }

    blocks.push({ type: "paragraph", text });
  };

  const flushList = () => {
    if (listType && listItems.length) {
      blocks.push({ type: listType, items: listItems });
    }
    listType = null;
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = cleanContentLine(rawLine);

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const listItem = getListItem(rawLine);
    if (listItem) {
      flushParagraph();
      if (listType && listType !== listItem.type) flushList();
      listType = listItem.type;
      listItems.push(listItem.text);
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function renderInlineFormatting(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function BlogContent({ content }: { content: string }) {
  if (isHtmlContent(content)) {
    return (
      <div
        className="space-y-6 [&_a]:text-primary [&_a]:underline [&_h2]:pt-5 [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-foreground [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:text-foreground [&_li]:pl-2 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:marker:font-semibold [&_ol]:marker:text-primary [&_strong]:font-bold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-primary"
        dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(content) }}
      />
    );
  }

  const blocks = parseBlogContent(content);

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const HeadingTag = block.level === 2 ? "h2" : "h3";
          return (
            <HeadingTag
              key={index}
              className="pt-5 text-2xl sm:text-3xl font-display font-bold leading-snug text-foreground"
            >
              {renderInlineFormatting(block.text)}
            </HeadingTag>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6 marker:text-primary">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-2">
                  {renderInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol
              key={index}
              className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-2">
                  {renderInlineFormatting(item)}
                </li>
              ))}
            </ol>
          );
        }

        return <p key={index}>{renderInlineFormatting(block.text)}</p>;
      })}
    </>
  );
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getBlogBySlugAction({ data: params.slug });
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const title = post.metaTitle || `${post.title} - Pure Technology`;
    const description = post.metaDescription || post.excerpt;
    const canonicalPath = `/blog/${post.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: post.metaKeywords || "" },
        { name: "author", content: post.author },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: post.imageTop },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalPath },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: post.imageTop },
      ],
      links: [{ rel: "canonical", href: canonicalPath }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-5 py-32">
      <h1 className="text-3xl font-display font-bold text-gradient-brand">Article not found</h1>
      <p className="text-muted-foreground max-w-md">
        The article you are looking for does not exist or has been relocated.
      </p>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog list
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const accentColor = post.accent;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 pt-8 flex items-center justify-between border-b border-border/40 pb-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        <button
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: post.title,
                  text: post.metaDescription || post.excerpt,
                  url: window.location.href,
                })
                .catch(console.error);
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }
          }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <Share2 className="h-4 w-4" />
          Share article
        </button>
      </div>

      <article className="mx-auto max-w-4xl px-5 lg:px-8 pt-10">
        <header className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2">
            <span
              className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm"
              style={{ background: accentColor }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight text-foreground">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 pt-3 text-sm text-muted-foreground font-semibold">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
          </div>
        </header>

        <div className="mt-10 rounded-[32px] overflow-hidden h-[250px] sm:h-[380px] lg:h-[450px] shadow-glass border border-white/10 relative">
          <img src={post.imageTop} alt={post.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="mt-12 text-base sm:text-lg leading-relaxed text-foreground/80 font-sans space-y-6">
          <BlogContent content={post.descriptionTop} />
        </div>

        <div className="my-14 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-glass border border-white/20 hover:scale-[1.01] transition-transform duration-500">
          <img
            src={post.imageMiddle}
            alt="Supporting illustration"
            className="w-full h-auto object-cover max-h-[350px]"
          />
          <div className="bg-surface/90 px-6 py-4 border-t border-border/50 text-center text-xs text-muted-foreground font-medium italic">
            Visualizing the integration of advanced technologic systems & workflows.
          </div>
        </div>

        <div className="text-base sm:text-lg leading-relaxed text-foreground/80 font-sans space-y-6">
          <BlogContent content={post.descriptionBottom} />
        </div>
      </article>

      <div className="mt-20">
        <CTASection
          title="Looking to accelerate your technology roadmap?"
          description="Let's build a dedicated squad or design an enterprise AI implementation strategy. Reach out to coordinate an initial consultation."
        />
      </div>
    </div>
  );
}
