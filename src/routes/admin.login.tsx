import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Lock, User, AlertCircle } from "lucide-react";
import { getCaptchaConfigAction, loginAction } from "@/lib/admin-actions";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
    grecaptcha?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
    hcaptcha?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type CaptchaProvider = "recaptcha" | "turnstile" | "hcaptcha";
type CaptchaWidgetId = string | number;

const captchaScripts: Record<CaptchaProvider, string> = {
  recaptcha: "https://www.google.com/recaptcha/api.js?render=explicit",
  turnstile: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
  hcaptcha: "https://js.hcaptcha.com/1/api.js?render=explicit",
};

export const Route = createFileRoute("/admin/login")({
  loader: async () => getCaptchaConfigAction(),
  component: AdminLogin,
});

function AdminLogin() {
  const captchaConfig = Route.useLoaderData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<CaptchaWidgetId | undefined>(undefined);

  useEffect(() => {
    const provider = captchaConfig.provider as CaptchaProvider;
    if (!captchaConfig.enabled || !captchaConfig.siteKey || !provider) return;

    const renderCaptcha = () => {
      if (!captchaRef.current || widgetIdRef.current) return;
      const captchaApi =
        provider === "recaptcha"
          ? window.grecaptcha
          : provider === "turnstile"
            ? window.turnstile
            : window.hcaptcha;

      if (!captchaApi) return;

      widgetIdRef.current = captchaApi.render(captchaRef.current, {
        sitekey: captchaConfig.siteKey,
        callback: setCaptchaToken,
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    };

    const existingScript = document.querySelector(
      `script[data-captcha-provider="${provider}"]`,
    ) as HTMLScriptElement | null;
    if (existingScript) {
      renderCaptcha();
      return;
    }

    const script = document.createElement("script");
    script.src = captchaScripts[provider];
    script.dataset.captchaProvider = provider;
    script.async = true;
    script.defer = true;
    script.onload = renderCaptcha;
    document.head.appendChild(script);
  }, [captchaConfig.enabled, captchaConfig.provider, captchaConfig.siteKey]);

  function resetCaptcha() {
    const provider = captchaConfig.provider as CaptchaProvider;
    if (provider === "recaptcha" && typeof widgetIdRef.current === "number") {
      window.grecaptcha?.reset(widgetIdRef.current);
    } else if (provider === "turnstile" && typeof widgetIdRef.current === "string") {
      window.turnstile?.reset(widgetIdRef.current);
    } else if (provider === "hcaptcha" && typeof widgetIdRef.current === "string") {
      window.hcaptcha?.reset(widgetIdRef.current);
    }
    setCaptchaToken("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (captchaConfig.enabled && !captchaToken) {
      setError("Please complete the captcha.");
      return;
    }

    setLoading(true);

    try {
      await loginAction({ data: { username, password, captchaToken } });
      window.location.href = "/admin";
    } catch (err: any) {
      const message = err?.message || "";
      const canShowServerMessage =
        message.includes("Too many failed login attempts") || message.includes("Captcha");
      setError(canShowServerMessage ? message : "Invalid username or password.");
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs for premium feel */}
      <div className="absolute inset-0 bg-gradient-soft opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-orange/20 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold leading-tight">
            Pure Technology <span className="text-gradient-brand block">Admin Portal</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Please log in with your administrator credentials
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl border border-border bg-surface/50 p-8 shadow-soft space-y-6"
        >
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm px-4 py-3 rounded-2xl flex items-center gap-3 animate-shake">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-muted-foreground">
                <User className="h-4 w-4" />
              </span>
              <input
                id="username"
                type="text"
                required
                autoComplete="username"
                disabled={loading}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full pl-11 pr-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-muted-foreground">
                <Lock className="h-4 w-4" />
              </span>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-11 pr-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all"
              />
            </div>
          </div>

          {captchaConfig.enabled && (
            <div className="min-h-[65px]">
              <div ref={captchaRef} />
            </div>
          )}

          <button
            type="submit"
            disabled={loading || (captchaConfig.enabled && !captchaToken)}
            className="w-full bg-foreground text-background font-semibold py-3.5 rounded-2xl shadow-soft hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <a
            href="/"
            className="block text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Go to website
          </a>
        </form>
      </div>
    </div>
  );
}
