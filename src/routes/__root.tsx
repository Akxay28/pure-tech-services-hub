import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FirstVisitEnquiryModal } from "@/components/site/FirstVisitEnquiryModal";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";

const GA_MEASUREMENT_ID = "G-38WFSYMQQP";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://puretechnology.in";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "referrer",
        content: "strict-origin-when-cross-origin",
      },
      {
        name: "google-site-verification",
        content: "FNJE8ALEdzCZyVLbsSlQpSmWLmavQAytOA4Ppx-d6wg",
      },
      { title: "Pure Technology — AI Product Development & IT Staffing Services in India" },
      {
        name: "description",
        content:
          "Pure Technology is a Bengaluru-based engineering partner specialising in enterprise AI development, IT staffing, and product engineering. Hire vetted Indian engineers and ship AI products that scale.",
      },
      { name: "author", content: "Pure Technology" },
      // Open Graph
      {
        property: "og:site_name",
        content: "Pure Technology",
      },
      {
        property: "og:title",
        content: "Pure Technology — AI Product Development & IT Staffing Services in India",
      },
      {
        property: "og:description",
        content:
          "Bengaluru-headquartered engineering partner for enterprise AI development, IT staffing, and product engineering. Globally trusted.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pure Technology — AI & IT Staffing from India" },
      // Twitter / X Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@puretechnology" },
      {
        name: "twitter:title",
        content: "Pure Technology — AI Product Development & IT Staffing Services in India",
      },
      {
        name: "twitter:description",
        content:
          "Bengaluru-headquartered engineering partner for enterprise AI development, IT staffing, and product engineering.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Pure Technology",
  alternateName: "Pure Technology Pvt. Ltd.",
  url: "https://puretechnology.in",
  logo: "https://puretechnology.in/favicon-32x32.png",
  description:
    "Pure Technology is a Bengaluru-based AI product development and IT staffing company helping enterprises build scalable AI solutions, hire vetted Indian engineers, and ship SaaS products globally.",
  foundingDate: "2012",
  areaServed: ["IN", "US", "AE", "GB", "AU", "SG"],
  sameAs: [
    "https://www.linkedin.com/company/pure-technology",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-99701-11283",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-73875-81577",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase 1, Hinjawadi",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411057",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.5912",
    longitude: "73.7389",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Product Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Staffing & Staff Augmentation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Engineering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative AI Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Global Capability Center" } },
    ],
  },
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.require = window.require || function optionalBrowserRequire() {
                return {};
              };
            `,
          }}
        />
        {/* Organization + LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        {!isAdminRoute && <Header />}
        <main className={isAdminRoute ? "flex-1" : "flex-1 pt-[72px]"}>
          <Outlet />
        </main>
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && <FirstVisitEnquiryModal />}
        {!isAdminRoute && <GoogleAnalytics />}
      </div>
    </QueryClientProvider>
  );
}
