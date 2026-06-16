import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { getCaseStudyByIdAction, updateCaseStudyAction } from "@/lib/admin-actions";
import { CaseStudyForm, type CaseStudyFormData } from "@/components/admin/CaseStudyForm";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/edit/$id")({
  loader: async ({ params }) => {
    const study = await getCaseStudyByIdAction({ data: params.id });
    if (!study) {
      throw new Error("Case study not found.");
    }
    return { study, id: params.id };
  },
  // Always re-fetch fresh data — never serve cached content
  staleTime: 0,
  component: EditCaseStudyPage,
});

function EditCaseStudyPage() {
  const { study, id } = Route.useLoaderData();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleEditCaseStudy(data: CaseStudyFormData) {
    setLoading(true);
    try {
      const res = await updateCaseStudyAction({ data: { id, study: data } });
      if (res?.success) {
        toast.success(`Updated case study for "${data.client}" successfully!`);
        // Flush all cached loader data BEFORE navigating
        await router.invalidate();
        router.navigate({ to: "/admin" as any });
      } else {
        toast.error("Could not update the case study.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred while updating.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <CaseStudyForm
        key={id}
        title={`Edit Case Study: ${study.client}`}
        initialData={study}
        onSubmit={handleEditCaseStudy}
        loading={loading}
      />
    </div>
  );
}
