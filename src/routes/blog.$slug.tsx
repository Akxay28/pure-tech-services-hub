import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { getBlogBySlugAction } from "@/lib/admin-actions";
import { CTASection } from "@/components/site/Primitives";

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
          <img
            src={post.imageTop}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="mt-12 text-base sm:text-lg leading-relaxed text-foreground/80 font-sans space-y-6">
          {post.descriptionTop.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-primary"
            >
              {para}
            </p>
          ))}
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
          {post.descriptionBottom.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
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
