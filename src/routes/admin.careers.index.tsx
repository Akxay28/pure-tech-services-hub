import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { getCareersAction, deleteCareerAction } from "@/lib/admin-actions";
import { Plus, Edit2, Trash2, Clock, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/careers/")({
  loader: async () => {
    return { careers: await getCareersAction({ data: { admin: true } }) };
  },
  component: AdminCareersDashboard,
});

function getRemainingDays(expiresAt: string | null) {
  if (!expiresAt) return null;
  return Math.ceil((new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function ExpiryBadge({ expiresAt }: { expiresAt: string | null }) {
  const days = getRemainingDays(expiresAt);
  if (days === null) return <span className="text-muted-foreground text-xs">—</span>;

  if (days <= 0) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-destructive/10 text-destructive px-2.5 py-1 rounded-full border border-destructive/20">
        <Timer className="h-3 w-3" />
        Expired
      </span>
    );
  }

  const colorClass =
    days <= 3
      ? "bg-destructive/10 text-destructive border-destructive/20"
      : days <= 7
        ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
        : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border ${colorClass}`}
    >
      <Clock className="h-3 w-3" />
      {days}d left
    </span>
  );
}

function AdminCareersDashboard() {
  const { careers } = Route.useLoaderData();
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(careers.length / itemsPerPage);
  const paginatedCareers = careers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  async function handleDelete(id: string, title: string) {
    if (!window.confirm(`Are you sure you want to delete the opening for "${title}"?`)) return;

    setDeletingId(id);
    try {
      const res = await deleteCareerAction({ data: id });
      if (res?.success) {
        toast.success(`Deleted opening "${title}" successfully.`);
        router.invalidate();
      } else {
        toast.error("Could not delete the opening.");
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
          <h1 className="text-3xl font-display font-bold">Career Openings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage job listings — set timers and they auto-close on the website when they expire
          </p>
        </div>
        <Link
          to="/admin/careers/new"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-5 py-3 rounded-2xl shadow-soft hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" />
          Add Opening
        </Link>
      </div>

      <div className="glass-card border border-border bg-surface/50 rounded-3xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/50 text-muted-foreground font-semibold">
                <th className="p-5">Position / Team</th>
                <th className="p-5">Details</th>
                <th className="p-5">Duration</th>
                <th className="p-5">Expires</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {careers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-muted-foreground">
                    No openings yet. Click "Add Opening" to create one.
                  </td>
                </tr>
              ) : (
                paginatedCareers.map((c) => (
                  <tr key={c._id} className="hover:bg-surface-muted/20 transition-colors">
                    <td className="p-5 max-w-xs">
                      <div className="font-semibold text-foreground text-base line-clamp-1">
                        {c.title}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ background: c.accent || "var(--brand-blue)" }}
                        />
                        <span className="text-xs text-muted-foreground font-medium">{c.team}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center text-[11px] font-semibold bg-secondary text-foreground/70 px-2.5 py-1 rounded-full">
                          {c.location}
                        </span>
                        <span className="inline-flex items-center text-[11px] font-semibold bg-secondary text-foreground/70 px-2.5 py-1 rounded-full">
                          {c.type}
                        </span>
                        <span className="inline-flex items-center text-[11px] font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                          {c.tag}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-foreground/80 font-medium tabular-nums">
                      {c.durationDays}d
                    </td>
                    <td className="p-5">
                      <ExpiryBadge expiresAt={c.expiresAt} />
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <Link
                          to="/admin/careers/edit/$id"
                          params={{ id: c._id }}
                          className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all"
                          title="Edit"
                        >
                          <Edit2 className="h-4.5 w-4.5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(c._id, c.title)}
                          disabled={deletingId === c._id}
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
              {Math.min(currentPage * itemsPerPage, careers.length)} of {careers.length}
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold text-foreground hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
