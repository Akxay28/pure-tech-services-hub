import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getTestimonialByIdAction, updateTestimonialAction } from "@/lib/admin-actions";
import { TestimonialForm, type TestimonialFormData } from "@/components/admin/TestimonialForm";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/testimonials/edit/$id")({
  loader: async ({ params }) => {
    const testimonial = await getTestimonialByIdAction({ data: params.id });
    if (!testimonial) throw new Error("Testimonial not found.");
    return { testimonial };
  },
  staleTime: 0,
  component: AdminTestimonialsEdit,
});

function AdminTestimonialsEdit() {
  const { testimonial } = Route.useLoaderData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: TestimonialFormData) {
    setLoading(true);
    try {
      const res = await updateTestimonialAction({
        data: { id: testimonial._id, testimonial: data },
      });
      if (res?.success) {
        toast.success(`Testimonial from "${data.name}" updated.`);
        await router.invalidate();
        router.navigate({ to: "/admin/testimonials" });
      } else {
        toast.error("Failed to update the testimonial.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <TestimonialForm
      key={testimonial._id}
      title="Edit Testimonial"
      initialData={{
        quote: testimonial.quote,
        name: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        initials: testimonial.initials,
        accent: testimonial.accent,
        project: testimonial.project,
        avatar: testimonial.avatar,
        active: testimonial.active !== false,
        order: testimonial.order ?? 0,
      }}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}
