import { useEffect, useState } from "react";

const DEFAULT_VIDEO_ID = "4DpEGb4HG7w";

type YouTubeEmbedProps = {
  videoId?: string;
  title: string;
  className?: string;
  /** Background loop — muted autoplay (hero-style embeds) */
  autoplay?: boolean;
};

function buildEmbedSrc(videoId: string, origin?: string, autoplay = true) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
  });

  if (autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("loop", "1");
    params.set("playlist", videoId);
    params.set("controls", "0");
    params.set("fs", "0");
  }

  if (origin) {
    params.set("origin", origin);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/**
 * YouTube iframe tuned for production (Cloudflare etc.).
 * Error 153 happens when Referer is missing — nocookie domain + referrerPolicy + origin fix that.
 */
export function YouTubeEmbed({
  videoId = DEFAULT_VIDEO_ID,
  title,
  className = "absolute inset-0 h-full w-full",
  autoplay = true,
}: YouTubeEmbedProps) {
  const [src, setSrc] = useState(() => buildEmbedSrc(videoId, undefined, autoplay));

  useEffect(() => {
    setSrc(buildEmbedSrc(videoId, window.location.origin, autoplay));
  }, [videoId, autoplay]);

  return (
    <iframe
      src={src}
      title={title}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
