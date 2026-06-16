import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createCareerAction } from "@/lib/admin-actions";
import { CareerForm, type CareerFormData } from "@/components/admin/CareerForm";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/careers/new")({
  component: AdminCareersNew,
});

function AdminCareersNew() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: CareerFormData) {
    setLoading(true);
    try {
      const res = await createCareerAction({ data });
      if (res?.success) {
        toast.success(`Opening "${data.title}" created successfully.`);
        router.navigate({ to: "/admin/careers" });
      } else {
        toast.error("Failed to create the opening.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <CareerForm
      title="Add New Opening"
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}
