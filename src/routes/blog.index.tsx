import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CTASection, SectionHeader } from "@/components/site/Primitives";
import { getBlogsAction } from "@/lib/admin-actions";
import { ArrowRight, Calendar, Clock4, Eye, User } from "lucide-react";

function stripContentMarkup(value = "") {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_`>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type BlogCardPost = {
  readTime?: string;
  title?: string;
  excerpt?: string;
  descriptionTop?: string;
  descriptionBottom?: string;
};

function getReadTime(post: BlogCardPost) {
  if (post.readTime) return post.readTime;

  const text = [post.title, post.excerpt, post.descriptionTop, post.descriptionBottom]
    .map(stripContentMarkup)
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function formatViews(views: unknown) {
  const count = Number(views || 0);
  if (count >= 1000) return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k views`;
  return `${count} ${count === 1 ? "view" : "views"}`;
}

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    return { blogs: await getBlogsAction() };
  },
  head: () => ({
    meta: [
      { title: "Blog & Insights — Pure Technology" },
      {
        name: "description",
        content:
          "Explore industry trends, engineering best practices, Vibe Coding paradigms, and digital transformation insights from Pure Technology.",
      },
      { property: "og:title", content: "Blog & Insights — Pure Technology" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { blogs } = Route.useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      const section = document.getElementById("blog-list-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - 80; // Offset for fixed header
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }, 10);
  };

  const getPageRange = (current: number, total: number) => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l !== undefined) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Engineering & AI <span className="text-gradient-brand">Perspectives.</span>
          </>
        }
        description="Thought leadership, practical tutorials, and operational strategies for scaling modern product engineering teams and integrating generative AI."
      />

      <section
        id="blog-list-section"
        className="px-5 lg:px-8 py-20 bg-background relative overflow-hidden"
      >
        {/* Glow decorative background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-mesh opacity-30 blur-3xl pointer-events-none rounded-full" />

        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader
            eyebrow="Latest Articles"
            title="Fresh thoughts from the field."
            description="Our engineers, architects, and leaders share what they learn while building next-gen software every day."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col overflow-hidden rounded-[24px] glass-card border border-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(46,11,125,0.15)]"
              >
                {/* Visual Accent Bar */}
                <div className="h-1.5 w-full shrink-0" style={{ background: post.accent }} />

                {/* Top Image */}
                <div className="relative h-[220px] overflow-hidden bg-muted">
                  <img
                    src={post.imageTop}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md"
                      style={{
                        backgroundColor: `color-mix(in oklab, ${post.accent} 70%, transparent)`,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock4 className="h-3.5 w-3.5" />
                        {getReadTime(post)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        {formatViews(post.views)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      <Link to="/blog/$slug" params={{ slug: post.slug }}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer metadata & Link */}
                  <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-3 w-3 text-muted-foreground" />
                      </span>
                      {post.author.split(",")[0]}
                    </span>

                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:underline"
                      style={{ color: post.accent }}
                    >
                      Read Post
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-surface hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface/60 disabled:hover:border-border"
                aria-label="Previous page"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>

              {getPageRange(currentPage, totalPages).map((page, index) => {
                if (page === "...") {
                  return (
                    <span
                      key={`dots-${index}`}
                      className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground text-sm font-semibold"
                    >
                      ...
                    </span>
                  );
                }
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page as number)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[image:var(--gradient-cta)] text-white shadow-soft"
                        : "border border-border bg-surface/60 text-foreground/80 hover:border-white/20 hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-surface hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface/60 disabled:hover:border-border"
                aria-label="Next page"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Ready to build something remarkable?"
        description="Whether you need help implementing agentic AI workflows or launching a remote product engineering squad, our leadership team is ready to plan with you."
      />
    </>
  );
}
