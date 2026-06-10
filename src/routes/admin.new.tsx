import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { createCaseStudyAction } from "@/lib/admin-actions";
import { CaseStudyForm, type CaseStudyFormData } from "@/components/admin/CaseStudyForm";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/new")({
  component: AddCaseStudyPage,
});

function AddCaseStudyPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleAddCaseStudy(data: CaseStudyFormData) {
    setLoading(true);
    try {
      const res = await createCaseStudyAction({ data });
      if (res?.success) {
        toast.success(`Published case study for "${data.client}" successfully!`);
        router.invalidate();
        router.navigate({ to: "/admin" as any });
      } else {
        toast.error("Could not save the case study.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred while saving.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <CaseStudyForm
        title="Add New Case Study"
        onSubmit={handleAddCaseStudy}
        loading={loading}
      />
    </div>
  );
}
