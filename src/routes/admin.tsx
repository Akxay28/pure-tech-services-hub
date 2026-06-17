import { createFileRoute, redirect, Outlet, Link } from "@tanstack/react-router";
import { LayoutDashboard, LogOut, BookOpen, Briefcase, MessageSquare, Inbox } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { checkAuthAction, logoutAction } from "@/lib/admin-actions";

import React from "react";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-destructive/10 border border-destructive/20 text-destructive rounded-2xl">
          <h2 className="text-lg font-bold">Something went wrong rendering this section:</h2>
          <p className="text-sm font-mono mt-2">{this.state.error?.toString()}</p>
          <pre className="text-xs font-mono mt-4 overflow-auto max-w-full p-4 bg-surface-muted rounded-xl border border-border">
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export const Route = createFileRoute("/admin")({
  loader: async ({ location }) => {
    const isLoginPage = location.pathname === "/admin/login";
    const auth = await checkAuthAction();

    if (!auth.authenticated && !isLoginPage) {
      throw redirect({
        to: "/admin/login",
      });
    }

    if (auth.authenticated && isLoginPage) {
      throw redirect({
        to: "/admin",
      });
    }

    return { auth };
  },
  component: AdminLayout,
});

function AdminLayout() {
  const { auth } = Route.useLoaderData();

  async function handleLogout() {
    await logoutAction();
    window.location.href = "/admin/login";
  }

  // If not logged in and on login page, just render without header/nav
  if (!auth.authenticated) {
    return (
      <>
        <Outlet />
        <Toaster richColors />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Toaster richColors />
      {/* Admin Navbar */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/admin"
                activeOptions={{ exact: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <LayoutDashboard className="h-4 w-4" />
                Case Studies
              </Link>
              <Link
                to="/admin/blogs"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <BookOpen className="h-4 w-4" />
                Blogs
              </Link>
              <Link
                to="/admin/careers"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <Briefcase className="h-4 w-4" />
                Careers
              </Link>
              <Link
                to="/admin/career-applications"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <Inbox className="h-4 w-4" />
                Applications
              </Link>
              <Link
                to="/admin/testimonials"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <MessageSquare className="h-4 w-4" />
                Testimonials
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:inline-block bg-surface px-3 py-1.5 rounded-full border border-border">
              Logged in as <strong className="text-foreground">{auth.username}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white px-4.5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Admin Content Area */}
      <main className="flex-1 bg-surface-muted/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}
