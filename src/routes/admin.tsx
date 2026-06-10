import { createFileRoute, redirect, Outlet, Link, useRouter } from "@tanstack/react-router";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { checkAuthAction, logoutAction } from "@/lib/admin-actions";
import { ADMIN_TAB_SESSION_KEY } from "@/lib/admin-session";

export const Route = createFileRoute("/admin")({
  ssr: false,
  loader: async ({ location }) => {
    const isLoginPage = location.pathname === "/admin/login";
    const auth = await checkAuthAction();

    if (typeof window === "undefined") {
      return { auth };
    }

    const hasActiveTabSession = sessionStorage.getItem(ADMIN_TAB_SESSION_KEY) === "true";

    if ((!auth.authenticated || !hasActiveTabSession) && !isLoginPage) {
      sessionStorage.removeItem(ADMIN_TAB_SESSION_KEY);
      if (auth.authenticated) {
        await logoutAction();
      }
      throw redirect({
        to: "/admin/login" as any,
      });
    }

    if (auth.authenticated && hasActiveTabSession && isLoginPage) {
      throw redirect({
        to: "/admin" as any,
      });
    }

    return {
      auth:
        auth.authenticated && hasActiveTabSession ? auth : { authenticated: false, username: "" },
    };
  },
  component: AdminLayout,
});

function AdminLayout() {
  const { auth } = Route.useLoaderData();
  const router = useRouter();

  async function handleLogout() {
    sessionStorage.removeItem(ADMIN_TAB_SESSION_KEY);
    await logoutAction();
    router.invalidate();
    router.navigate({ to: "/admin/login" as any });
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <LayoutDashboard className="h-4 w-4" />
                Case Studies
              </Link>
              <Link
                to="/admin/settings"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                <Settings className="h-4 w-4" />
                Captcha
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
          <Outlet />
        </div>
      </main>
    </div>
  );
}
