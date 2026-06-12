import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { createBlogAction } from "@/lib/admin-actions";
import { BlogForm, BlogFormData } from "@/components/admin/BlogForm";

export const Route = createFileRoute("/admin/blogs/new")({
  component: AddNewBlogPostPage,
});

function AddNewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: BlogFormData) {
    setLoading(true);
    try {
      const res = await createBlogAction({ data });
      if (res?.success) {
        if (data.status === "draft") {
          toast.success("Saved blog post as draft!");
        } else if (data.status === "scheduled") {
          toast.success("Scheduled blog post successfully!");
        } else {
          toast.success("Published blog post successfully!");
        }
        router.navigate({ to: "/admin/blogs" });
      } else {
        toast.error("Could not publish the blog post.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred while publishing.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <BlogForm onSubmit={handleSubmit} loading={loading} title="Add New Blog Post" />
    </div>
  );
}
