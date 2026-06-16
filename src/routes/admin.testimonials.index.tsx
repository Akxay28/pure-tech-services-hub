import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { getTestimonialsAction, deleteTestimonialAction } from "@/lib/admin-actions";
import { Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { brandIconGradient } from "@/lib/brand-colors";

export const Route = createFileRoute("/admin/testimonials/")({
  loader: async () => ({
    testimonials: await getTestimonialsAction({ data: { admin: true } }),
  }),
  component: AdminTestimonialsDashboard,
});

function AdminTestimonialsDashboard() {
  const { testimonials } = Route.useLoaderData();
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const paginated = testimonials.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Delete testimonial from "${name}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      const res = await deleteTestimonialAction({ data: id });
      if (res?.success) {
        toast.success(`Deleted testimonial from "${name}".`);
        router.invalidate();
      } else {
        toast.error("Could not delete the testimonial.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Testimonials</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {testimonials.length} testimonial{testimonials.length !== 1 ? "s" : ""} — shown in a
            rotating carousel on the homepage
          </p>
        </div>
        <Link
          to="/admin/testimonials/new"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-5 py-3 rounded-2xl shadow-soft hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" />
          Add Testimonial
        </Link>
      </div>

      <div className="glass-card border border-border bg-surface/50 rounded-3xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/50 text-muted-foreground font-semibold">
                <th className="p-5">Person</th>
                <th className="p-5">Quote preview</th>
                <th className="p-5">Project</th>
                <th className="p-5 text-center">Order</th>
                <th className="p-5 text-center">Status</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {testimonials.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-muted-foreground">
                    No testimonials yet. Click "Add Testimonial" to get started.
                  </td>
                </tr>
              ) : (
                paginated.map((t) => (
                  <tr key={t._id} className="hover:bg-surface-muted/20 transition-colors">
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        {t.avatar ? (
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="h-10 w-10 rounded-full object-cover shrink-0 border border-border"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        ) : (
                          <span
                            className="grid h-10 w-10 place-items-center rounded-full font-display font-semibold text-white shrink-0 text-sm"
                            style={{ background: brandIconGradient(t.accent || "var(--brand-blue)") }}
                          >
                            {t.initials}
                          </span>
                        )}
                        <div>
                          <div className="font-semibold text-foreground">{t.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {t.role} · {t.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 max-w-xs">
                      <p className="line-clamp-2 text-xs text-muted-foreground italic">
                        "{t.quote}"
                      </p>
                    </td>
                    <td className="p-5">
                      {t.project ? (
                        <span
                          className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
                          style={{ background: t.accent || "var(--brand-blue)" }}
                        >
                          {t.project}
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </td>
                    <td className="p-5 text-center tabular-nums font-medium text-foreground/70">
                      {t.order ?? "—"}
                    </td>
                    <td className="p-5 text-center">
                      {t.active !== false ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                          <Eye className="h-3 w-3" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-muted text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                          <EyeOff className="h-3 w-3" />
                          Hidden
                        </span>
                      )}
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <Link
                          to="/admin/testimonials/edit/$id"
                          params={{ id: t._id }}
                          className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all"
                          title="Edit"
                        >
                          <Edit2 className="h-4.5 w-4.5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(t._id, t.name)}
                          disabled={deletingId === t._id}
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
          <div className="flex items-center justify-between gap-4 border-t border-border bg-surface/60 px-5 py-4">
            <p className="text-xs font-medium text-muted-foreground">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(currentPage * ITEMS_PER_PAGE, testimonials.length)} of{" "}
              {testimonials.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`h-9 w-9 rounded-xl text-xs font-bold transition-colors ${
                    currentPage === p
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
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
