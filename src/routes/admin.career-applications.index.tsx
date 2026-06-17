import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Inbox, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteCareerApplicationAction, getCareerApplicationsAction } from "@/lib/admin-actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/admin/career-applications/")({
  loader: async () => {
    return { applications: await getCareerApplicationsAction({ data: {} }) };
  },
  component: AdminCareerApplicationsDashboard,
});

type CareerApplication = {
  _id: string;
  roleTitle: string;
  team?: string;
  fullName: string;
  email: string;
  phone: string;
  currentCompany?: string;
  experience: string;
  location: string;
  linkedin: string;
  portfolio?: string;
  noticePeriod?: string;
  message: string;
  createdAt: string | null;
};

function formatDate(value: string | null) {
  if (!value) return "-";
  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function normalizeLink(value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^(www\.|linkedin\.com|github\.com)/i.test(trimmed)) return `https://${trimmed}`;
  return "";
}

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground break-words">{value || "-"}</p>
    </div>
  );
}

function AdminCareerApplicationsDashboard() {
  const { applications } = Route.useLoaderData() as { applications: CareerApplication[] };
  const router = useRouter();
  const [selected, setSelected] = useState<CareerApplication | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Delete application from "${name}"?`)) return;

    setDeletingId(id);
    try {
      const res = await deleteCareerApplicationAction({ data: id });
      if (res?.success) {
        toast.success("Application deleted successfully.");
        if (selected?._id === id) setSelected(null);
        router.invalidate();
      } else {
        toast.error("Could not delete the application.");
      }
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "An error occurred during deletion.");
    } finally {
      setDeletingId(null);
    }
  }

  const selectedLinkedIn = normalizeLink(selected?.linkedin);
  const selectedPortfolio = normalizeLink(selected?.portfolio);

  return (
    <div className="space-y-8 animate-fade-in">
      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-3xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {selected?.fullName || "Application details"}
            </DialogTitle>
            <DialogDescription>
              {selected?.roleTitle || "Career application"} submitted on{" "}
              {formatDate(selected?.createdAt || null)}
            </DialogDescription>
          </DialogHeader>

          {selected ? (
            <div className="space-y-6">
              <div className="grid gap-4 rounded-2xl border border-border bg-surface-muted/40 p-4 sm:grid-cols-2">
                <Field label="Role" value={selected.roleTitle} />
                <Field label="Team" value={selected.team} />
                <Field label="Email" value={selected.email} />
                <Field label="Phone" value={selected.phone} />
                <Field label="Location" value={selected.location} />
                <Field label="Experience" value={selected.experience} />
                <Field label="Current company" value={selected.currentCompany} />
                <Field label="Notice period" value={selected.noticePeriod} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {selectedLinkedIn ? (
                  <a
                    href={selectedLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold hover:bg-secondary"
                  >
                    Open LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <Field label="LinkedIn" value={selected.linkedin} />
                )}
                {selectedPortfolio ? (
                  <a
                    href={selectedPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold hover:bg-secondary"
                  >
                    Open resume / portfolio
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <Field label="Resume / portfolio" value={selected.portfolio} />
                )}
              </div>

              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Candidate note
                </p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground/85">
                  {selected.message}
                </p>
              </div>

              <div className="flex justify-end border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => handleDelete(selected._id, selected.fullName)}
                  disabled={deletingId === selected._id}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive hover:text-white disabled:opacity-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <div>
        <h1 className="text-3xl font-display font-bold">Career Applications</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          View candidate form submissions from the careers page.
        </p>
      </div>

      <div className="glass-card border border-border bg-surface/50 rounded-3xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/50 text-muted-foreground font-semibold">
                <th className="p-5">Candidate</th>
                <th className="p-5">Role</th>
                <th className="p-5">Contact</th>
                <th className="p-5">Applied</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-muted-foreground">
                    <Inbox className="mx-auto mb-3 h-9 w-9 opacity-40" />
                    No applications yet.
                  </td>
                </tr>
              ) : (
                applications.map((application) => (
                  <tr key={application._id} className="hover:bg-surface-muted/20 transition-colors">
                    <td className="p-5">
                      <div className="font-semibold text-foreground">{application.fullName}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {application.experience} experience
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="font-medium text-foreground">{application.roleTitle}</div>
                      {application.team ? (
                        <div className="mt-1 text-xs text-muted-foreground">{application.team}</div>
                      ) : null}
                    </td>
                    <td className="p-5">
                      <div className="text-xs font-medium text-foreground">{application.email}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{application.phone}</div>
                    </td>
                    <td className="p-5 text-xs text-muted-foreground">
                      {formatDate(application.createdAt)}
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <button
                          type="button"
                          onClick={() => setSelected(application)}
                          className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(application._id, application.fullName)}
                          disabled={deletingId === application._id}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-xl transition-all disabled:opacity-50"
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
