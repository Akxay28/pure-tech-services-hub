import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { getBlogByIdAction, updateBlogAction } from "@/lib/admin-actions";
import { BlogForm, BlogFormData } from "@/components/admin/BlogForm";

export const Route = createFileRoute("/admin/blogs/edit/$id")({
  loader: async ({ params }) => {
    const blog = await getBlogByIdAction({ data: params.id });
    return { blog };
  },
  component: EditBlogPostPage,
});

function EditBlogPostPage() {
  const { blog } = Route.useLoaderData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (!blog) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Blog post not found or dynamic ID is invalid.
      </div>
    );
  }

  async function handleSubmit(data: BlogFormData) {
    setLoading(true);
    try {
      const res = await updateBlogAction({
        data: {
          id: blog._id,
          blog: data,
        },
      });
      if (res?.success) {
        toast.success(`Updated blog post successfully!`);
        router.navigate({ to: "/admin/blogs" });
      } else {
        toast.error("Could not update the blog post.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred while updating.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <BlogForm
        initialData={blog}
        onSubmit={handleSubmit}
        loading={loading}
        title="Edit Blog Post"
      />
    </div>
  );
}
