import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { getBlogsAction, deleteBlogAction } from "@/lib/admin-actions";
import { Plus, Edit2, Trash2, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/blogs/")({
  loader: async () => {
    return { blogs: await getBlogsAction() };
  },
  component: AdminBlogsDashboard,
});

function AdminBlogsDashboard() {
  const { blogs } = Route.useLoaderData();
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  async function handleDelete(id: string, title: string) {
    if (id.startsWith("static-")) {
      toast.error("Static demo posts cannot be deleted. Try adding a custom blog post first!");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete the blog post "${title}"?`)) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await deleteBlogAction({ data: id });
      if (res?.success) {
        toast.success(`Deleted blog post "${title}" successfully.`);
        router.invalidate();
      } else {
        toast.error("Could not delete the blog post.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred during deletion.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Blog Posts</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your blog articles, SEO settings, post views, and publish updates
          </p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-5 py-3 rounded-2xl shadow-soft hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" />
          Add Blog Post
        </Link>
      </div>

      <div className="glass-card border border-border bg-surface/50 rounded-3xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/50 text-muted-foreground font-semibold">
                <th className="p-5">Title / Slug</th>
                <th className="p-5">Category</th>
                <th className="p-5">Author</th>
                <th className="p-5">Views</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-muted-foreground">
                    No blog posts found. Click "Add Blog Post" to create one.
                  </td>
                </tr>
              ) : (
                paginatedBlogs.map((b) => (
                  <tr key={b._id} className="hover:bg-surface-muted/20 transition-colors">
                    <td className="p-5 max-w-sm">
                      <div className="font-semibold text-foreground text-base line-clamp-1">{b.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono tracking-tight line-clamp-1">
                        /blog/{b.slug}
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="inline-flex items-center text-[11px] font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {b.category}
                      </span>
                    </td>
                    <td className="p-5 text-foreground/80 font-medium">{b.author.split(",")[0]}</td>
                    <td className="p-5 text-muted-foreground font-semibold">
                      {Number(b.views || 0).toLocaleString()}
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <Link
                          to="/blog/$slug"
                          params={{ slug: b.slug }}
                          target="_blank"
                          className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all"
                          title="View Live Page"
                        >
                          <ExternalLink className="h-4.5 w-4.5" />
                        </Link>
                        <Link
                          to="/admin/blogs/edit/$id"
                          params={{ id: b._id }}
                          className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all"
                          title="Edit"
                        >
                          <Edit2 className="h-4.5 w-4.5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(b._id, b.title)}
                          disabled={deletingId === b._id}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-xl transition-all cursor-pointer disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border bg-surface/60 px-5 py-4">
            <p className="text-xs font-medium text-muted-foreground">
              Showing {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, blogs.length)} of {blogs.length}
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold text-foreground hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-9 w-9 rounded-xl text-xs font-bold transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold text-foreground hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
