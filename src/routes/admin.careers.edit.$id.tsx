import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getCareerByIdAction, updateCareerAction } from "@/lib/admin-actions";
import { CareerForm, type CareerFormData } from "@/components/admin/CareerForm";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/careers/edit/$id")({
  loader: async ({ params }) => {
    const career = await getCareerByIdAction({ data: params.id });
    if (!career) throw new Error("Career opening not found.");
    return { career };
  },
  // Always re-fetch fresh data — never serve cached content
  staleTime: 0,
  component: AdminCareersEdit,
});

function AdminCareersEdit() {
  const { career } = Route.useLoaderData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: CareerFormData) {
    setLoading(true);
    try {
      const res = await updateCareerAction({ data: { id: career._id, career: data } });
      if (res?.success) {
        toast.success(`Opening "${data.title}" updated successfully.`);
        // Flush all cached loader data BEFORE navigating so the edit form
        // always shows fresh values on the very next visit
        await router.invalidate();
        router.navigate({ to: "/admin/careers" });
      } else {
        toast.error("Failed to update the opening.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <CareerForm
      key={career._id}
      title="Edit Opening"
      initialData={{
        title: career.title,
        team: career.team,
        location: career.location,
        type: career.type,
        tag: career.tag,
        blurb: career.blurb,
        accent: career.accent,
        durationDays: career.durationDays,
      }}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}
