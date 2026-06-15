import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, Images, PlayCircle, X } from "lucide-react";
import { CTASection, PageHero, SectionHeader } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Pure Technology" },
      {
        name: "description",
        content:
          "A look at the people, milestones, partnerships, and delivery culture behind Pure Technology.",
      },
      { property: "og:title", content: "Gallery - Pure Technology" },
    ],
  }),
  component: GalleryPage,
});

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  /** Section name — images with the same category are grouped automatically. */
  category: string;
  type?: "image" | "video";
};

/**
 * Add images here (place files in `public/gallery` or any public folder).
 * Set `category` to an existing section name or a new one — new sections appear on the page automatically.
 *
 * Optional: list section names in `categoryOrder` to control display order.
 */
const galleryImages: GalleryImage[] = [
  {
    src: "/team/anuj-bajaj.jpg",
    alt: "Anuj Bajaj — Pure Technology leadership",
    title: "Anuj Bajaj",
    category: "Leadership",
  },
  {
    src: "/team/govindInnani.png",
    alt: "Govind Innani - Pure Technology leadership",
    title: "Govind Innani",
    category: "Leadership",
  },
  {
    src: "/team/jalindrashinde.png",
    alt: "Jalindra Shinde - Pure Technology leadership",
    title: "Jalindra Shinde",
    category: "Leadership",
  },
  {
    src: "/team/parag-thakur.jpg",
    alt: "Parag Thakur — Pure Technology leadership",
    title: "Parag Thakur",
    category: "Leadership",
  },
  {
    src: "/team/rajashreeGandhi.jpg",
    alt: "Rajashree Gandhi - Pure Technology leadership",
    title: "Rajashree Gandhi",
    category: "Leadership",
  },
  {
    src: "/team/rajesh-munde.jpg",
    alt: "Rajesh Munde — Pure Technology leadership",
    title: "Rajesh Munde",
    category: "Leadership",
  },
  {
    src: "/team/Shirish Vispute.jpg",
    alt: "Shirish Vispute - Pure Technology leadership",
    title: "Shirish Vispute",
    category: "Leadership",
  },
  {
    src: "/team/Sumit-G.webp",
    alt: "Sumit G - Pure Technology leadership",
    title: "Sumit G",
    category: "Leadership",
  },
  {
    src: "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781511706/ganesh_chaturti_2025_cgqaae.jpg",
    alt: "Pure Technology Ganesh Chaturthi 2025 celebration",
    title: "Ganesh Chaturthi 2025",
    category: "Festivals - 2024",
  },
  {
    src: "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781511701/ganesh_chaturti_2025_-_2_fg7rkf.jpg",
    alt: "Team gathering during Ganesh Chaturthi 2025 at Pure Technology",
    title: "Ganesh Chaturthi Team Celebration",
    category: "Festivals - 2024",
  },
  {
    src: "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781511701/ganesh_chaturti_2025_-_3_kocodm.jpg",
    alt: "Ganesh Chaturthi 2025 festive moment at Pure Technology",
    title: "Festive Moments At Pure Technology",
    category: "Festivals - 2024",
  },
  {
    src: "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781511702/holi_one_j6xxru.jpg",
    alt: "Pure Technology Holi celebration",
    title: "Holi Celebration",
    category: "Festivals - 2024",
  },
  {
    src: "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781511701/holi_2_hbbtly.jpg",
    alt: "Team celebrating Holi at Pure Technology",
    title: "Holi Team Celebration",
    category: "Festivals - 2024",
  },
  {
    src: "https://res.cloudinary.com/dra0hwsh4/video/upload/v1781511700/holi_video_hllyqd.mp4",
    alt: "Pure Technology Holi celebration video",
    title: "Holi Celebration Video",
    category: "Festivals - 2024",
    type: "video",
  },
];

/** Optional: section display order. Categories not listed appear alphabetically after these. */
const categoryOrder: string[] = ["Festivals - 2024", "Company"];

type GalleryCategory = {
  name: string;
  images: GalleryImage[];
  cover: GalleryImage;
};

function buildCategories(images: GalleryImage[], order: string[]): GalleryCategory[] {
  const grouped = new Map<string, GalleryImage[]>();
  for (const image of images) {
    if (image.category === "Leadership") continue;

    const list = grouped.get(image.category) ?? [];
    list.push(image);
    grouped.set(image.category, list);
  }

  const allNames = [...grouped.keys()];
  const ordered = [
    ...order.filter((name) => grouped.has(name)),
    ...allNames.filter((name) => !order.includes(name)).sort(),
  ];

  return ordered.map((name) => {
    const categoryImages = grouped.get(name)!;
    return { name, images: categoryImages, cover: categoryImages[0] };
  });
}

const categoryColor: Record<string, string> = {
  Company: "bg-violet-500/20 text-violet-200 border-violet-400/30",
  "Festivals - 2024": "bg-orange-500/20 text-orange-100 border-orange-300/30",
};

function categoryBadgeClass(category: string) {
  return categoryColor[category] ?? "bg-white/10 text-white border-white/20";
}

function isVideo(item: GalleryImage) {
  return item.type === "video";
}

function CategoryCard({
  section,
  onOpen,
}: {
  section: GalleryCategory;
  onOpen: (startIndex?: number) => void;
}) {
  const colorClass = categoryBadgeClass(section.name);
  const count = section.images.length;

  return (
    <button
      type="button"
      onClick={() => onOpen(0)}
      className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        {isVideo(section.cover) ? (
          <video
            src={section.cover.src}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            aria-label={section.cover.alt}
          />
        ) : (
          <img
            src={section.cover.src}
            alt={section.cover.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-sm",
              colorClass,
            )}
          >
            {section.name}
          </span>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
            {section.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/75">
            <Images className="h-4 w-4 shrink-0" aria-hidden />
            {count} {count === 1 ? "item" : "items"} — click to view
          </p>
        </div>
      </div>
    </button>
  );
}

type LightboxState = {
  category: string;
  index: number;
};

function CategoryLightbox({
  state,
  images,
  onClose,
  onIndexChange,
}: {
  state: LightboxState;
  images: GalleryImage[];
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const { index } = state;
  const current = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onIndexChange(index - 1);
  }, [hasPrev, index, onIndexChange]);

  const goNext = useCallback(() => {
    if (hasNext) onIndexChange(index + 1);
  }, [hasNext, index, onIndexChange]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, goPrev, goNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={`${state.category} gallery`}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
            {state.category}
          </p>
          <p className="truncate text-sm font-medium text-white sm:text-base">{current.title}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-sm tabular-nums text-white/70">
            {index + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-6 sm:px-16">
        <button
          type="button"
          onClick={goPrev}
          disabled={!hasPrev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30 sm:left-4 sm:p-3"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        {isVideo(current) ? (
          <video
            key={current.src}
            src={current.src}
            controls
            autoPlay
            className="max-h-full max-w-full object-contain"
            aria-label={current.alt}
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="max-h-full max-w-full object-contain"
          />
        )}

        <button
          type="button"
          onClick={goNext}
          disabled={!hasNext}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30 sm:right-4 sm:p-3"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      </div>

      {images.length > 1 && (
        <div className="shrink-0 border-t border-white/10 px-4 py-3 sm:px-6">
          <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => onIndexChange(i)}
                className={cn(
                  "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-24",
                  i === index
                    ? "border-[color:var(--brand-pink)] opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80",
                )}
                aria-label={`View ${img.title}`}
                aria-current={i === index}
              >
                {isVideo(img) ? (
                  <>
                    <video
                      src={img.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-black/25 text-white">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                  </>
                ) : (
                  <img src={img.src} alt="" className="h-full w-full object-cover" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
}

function GalleryPage() {
  const categories = useMemo(() => buildCategories(galleryImages, categoryOrder), []);

  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const lightboxImages = useMemo(() => {
    if (!lightbox) return [];
    const section = categories.find((c) => c.name === lightbox.category);
    return section?.images ?? [];
  }, [lightbox, categories]);

  const openCategory = (categoryName: string, startIndex = 0) => {
    setLightbox({ category: categoryName, index: startIndex });
  };

  const closeLightbox = () => setLightbox(null);

  const setLightboxIndex = (index: number) => {
    setLightbox((prev) => (prev ? { ...prev, index } : null));
  };

  return (
    <>
      <PageHero
        eyebrow="Company Gallery"
        title={
          <>
            Moments That Show <span className="text-gradient-brand">How We Build Together.</span>
          </>
        }
        description="A growing collection of our people, culture, delivery milestones, and partnerships."
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          About Pure Technology
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Moments"
            title="Life At Pure Technology, In Frames."
            description="Browse by section - team, leadership, culture, delivery, and more. Each section opens a slideshow you can move through with the arrows or your keyboard."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((section) => (
              <CategoryCard
                key={section.name}
                section={section}
                onOpen={(startIndex) => openCategory(section.name, startIndex)}
              />
            ))}
          </div>

          {/* <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-surface-muted/60 p-4 text-sm text-muted-foreground">
            <Camera className="h-4 w-4 shrink-0 text-[color:var(--brand-pink)]" />
            Add images in{" "}
            <code className="rounded bg-border/50 px-1.5 py-0.5 font-mono text-xs text-foreground">
              public/gallery
            </code>
            , then add an entry to{" "}
            <code className="rounded bg-border/50 px-1.5 py-0.5 font-mono text-xs text-foreground">
              galleryImages
            </code>{" "}
            with a <code className="rounded bg-border/50 px-1 py-0.5 font-mono text-xs">category</code>{" "}
            name. New categories show up automatically; use{" "}
            <code className="rounded bg-border/50 px-1 py-0.5 font-mono text-xs">categoryOrder</code>{" "}
            to sort sections.
          </div> */}
        </div>
      </section>

      {lightbox && lightboxImages.length > 0 && (
        <CategoryLightbox
          state={lightbox}
          images={lightboxImages}
          onClose={closeLightbox}
          onIndexChange={setLightboxIndex}
        />
      )}

      <CTASection
        title="A Culture Built Around Meaningful Work."
        description="Explore the people and delivery principles that turn these moments into lasting partnerships."
        primaryLabel="Meet Our Team"
        primaryTo="/contact"
        secondaryLabel="Our Mission & Vision"
        secondaryTo="/mission-vision"
      />
    </>
  );
}
