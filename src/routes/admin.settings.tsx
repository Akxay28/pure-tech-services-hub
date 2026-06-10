import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { getAdminCaptchaSettingsAction, updateCaptchaSettingsAction } from "@/lib/admin-actions";
import { toast } from "sonner";

type CaptchaProvider = "" | "recaptcha" | "turnstile" | "hcaptcha";

export const Route = createFileRoute("/admin/settings")({
  loader: async () => getAdminCaptchaSettingsAction(),
  component: AdminSettingsPage,
});

const providerHelp: Record<Exclude<CaptchaProvider, "">, string> = {
  recaptcha: "Google reCAPTCHA",
  turnstile: "Cloudflare Turnstile",
  hcaptcha: "hCaptcha",
};

function AdminSettingsPage() {
  const settings = Route.useLoaderData();
  const router = useRouter();
  const [provider, setProvider] = useState<CaptchaProvider>(settings.provider as CaptchaProvider);
  const [siteKey, setSiteKey] = useState(settings.siteKey || "");
  const [secretKey, setSecretKey] = useState(settings.secretKey || "");
  const [saving, setSaving] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await updateCaptchaSettingsAction({
        data: { provider, siteKey, secretKey },
      });
      if (res?.success) {
        toast.success("Captcha settings saved.");
        router.invalidate();
      } else {
        toast.error("Could not save captcha settings.");
      }
    } catch (err: any) {
      toast.error(err?.message || "Could not save captcha settings.");
    } finally {
      setSaving(false);
    }
  }

  const captchaEnabled = Boolean(provider);

  return (
    <div className="max-w-3xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-display font-bold">Captcha</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage captcha security for the admin portal.
        </p>
      </div>

      <form
        onSubmit={handleSave}
        className="glass-card border border-border bg-surface/50 rounded-3xl p-6 shadow-soft space-y-6"
      >
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">Captcha</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Select a provider and add the site key and secret key. The login page updates
              automatically.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="captcha-provider">
              Provider
            </label>
            <select
              id="captcha-provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value as CaptchaProvider)}
              className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all"
            >
              <option value="">Disabled</option>
              <option value="recaptcha">Google reCAPTCHA</option>
              <option value="turnstile">Cloudflare Turnstile</option>
              <option value="hcaptcha">hCaptcha</option>
            </select>
            {captchaEnabled && (
              <p className="text-xs text-muted-foreground">
                Active provider: {providerHelp[provider as Exclude<CaptchaProvider, "">]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="captcha-site-key">
              Site key
            </label>
            <input
              id="captcha-site-key"
              type="text"
              value={siteKey}
              onChange={(e) => setSiteKey(e.target.value)}
              disabled={!captchaEnabled || saving}
              placeholder="Enter site key"
              className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="captcha-secret-key">
              Secret key
            </label>
            <input
              id="captcha-secret-key"
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              disabled={!captchaEnabled || saving}
              placeholder="Enter secret key"
              className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all disabled:opacity-50"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-5 py-3 rounded-2xl shadow-soft hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Captcha"}
          </button>
        </div>
      </form>
    </div>
  );
}
