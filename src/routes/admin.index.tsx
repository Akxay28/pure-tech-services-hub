import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { getCaseStudiesAction, deleteCaseStudyAction } from "@/lib/admin-actions";
import { Plus, Edit2, Trash2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/")({
  loader: async () => {
    return { studies: await getCaseStudiesAction() };
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const { studies } = Route.useLoaderData();
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string, clientName: string) {
    if (!window.confirm(`Are you sure you want to delete the case study for "${clientName}"?`)) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await deleteCaseStudyAction({ data: id });
      if (res?.success) {
        toast.success(`Deleted case study for "${clientName}" successfully.`);
        router.invalidate();
      } else {
        toast.error("Could not delete the case study.");
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
          <h1 className="text-3xl font-display font-bold">Case Studies</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage client case studies, view metrics, and publish new outcomes
          </p>
        </div>
        <Link
          to="/admin/new"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-5 py-3 rounded-2xl shadow-soft hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" />
          Add Case Study
        </Link>
      </div>

      <div className="glass-card border border-border bg-surface/50 rounded-3xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/50 text-muted-foreground font-semibold">
                <th className="p-5">Client / Project</th>
                <th className="p-5">Industry</th>
                <th className="p-5">Metrics</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {studies.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-10 text-center text-muted-foreground">
                    No case studies found. Click "Add Case Study" to create one.
                  </td>
                </tr>
              ) : (
                studies.map((s) => (
                  <tr key={s._id} className="hover:bg-surface-muted/20 transition-colors">
                    <td className="p-5 max-w-sm">
                      <div className="font-semibold text-foreground text-base">{s.client}</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono tracking-tight line-clamp-1">
                        /{s.slug}
                      </div>
                    </td>
                    <td className="p-5 text-foreground/80 font-medium">
                      {s.industry || (s as any).sector || "N/A"}
                    </td>
                    <td className="p-5">
                      <div className="flex flex-wrap gap-1.5">
                        {s.metrics?.slice(0, 3).map((m: any, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-[11px] font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                          >
                            {m.value || m.v}: {m.label || m.l}
                          </span>
                        ))}
                        {s.metrics && s.metrics.length > 3 && (
                          <span className="inline-flex items-center text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                            +{s.metrics.length - 3} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <Link
                          to="/case-studies/$slug"
                          params={{ slug: s.slug }}
                          target="_blank"
                          className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all"
                          title="View Live Page"
                        >
                          <ExternalLink className="h-4.5 w-4.5" />
                        </Link>
                        <Link
                          to="/admin/edit/$id"
                          params={{ id: s._id }}
                          className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all"
                          title="Edit"
                        >
                          <Edit2 className="h-4.5 w-4.5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(s._id, s.client)}
                          disabled={deletingId === s._id}
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
      </div>
    </div>
  );
}
