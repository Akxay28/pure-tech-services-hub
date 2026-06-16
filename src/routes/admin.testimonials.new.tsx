import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createTestimonialAction } from "@/lib/admin-actions";
import { TestimonialForm, type TestimonialFormData } from "@/components/admin/TestimonialForm";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/testimonials/new")({
  component: AdminTestimonialsNew,
});

function AdminTestimonialsNew() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: TestimonialFormData) {
    setLoading(true);
    try {
      const res = await createTestimonialAction({ data });
      if (res?.success) {
        toast.success(`Testimonial from "${data.name}" added successfully.`);
        await router.invalidate();
        router.navigate({ to: "/admin/testimonials" });
      } else {
        toast.error("Failed to create the testimonial.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return <TestimonialForm title="Add Testimonial" onSubmit={handleSubmit} loading={loading} />;
}
