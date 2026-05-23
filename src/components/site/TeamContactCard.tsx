import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { testimonialAccentAt } from "@/lib/brand-colors";
import type { TeamContact } from "@/lib/team-contacts";
import { buildMailtoLink } from "@/lib/team-contact-links";

type TeamContactCardProps = {
  member: TeamContact;
  accentIndex: number;
  /** `mega` = Company nav Connect tab; `page` = full /team page */
  variant?: "mega" | "page";
};

export function TeamContactCard({
  member,
  accentIndex,
  variant = "mega",
}: TeamContactCardProps) {
  const accent = testimonialAccentAt(accentIndex);
  const isPage = variant === "page";

  return (
    <motion.article
      layout
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`group relative flex items-stretch gap-3 overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_8px_28px_-12px_rgba(46,11,125,0.14)] transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(46,11,125,0.22)] ${
        isPage ? "p-5 gap-5" : "p-3 gap-3"
      }`}
    >
      <div
        className="absolute inset-y-0 right-0 w-1 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
        style={{ background: accent }}
        aria-hidden
      />

      <div
        className={`relative shrink-0 overflow-hidden rounded-xl ${
          isPage ? "h-28 w-24" : "h-[72px] w-[60px]"
        }`}
        style={{ background: `color-mix(in oklab, ${accent} 18%, white)` }}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1 py-0.5">
        <p
          className={`font-semibold leading-tight text-[color:var(--brand-purple)] ${
            isPage ? "text-lg" : "text-[13px]"
          }`}
        >
          {member.name}
        </p>
        <p
          className={`mt-0.5 font-medium ${isPage ? "text-sm" : "text-xs"}`}
          style={{ color: accent }}
        >
          {member.role}
        </p>
        <p
          className={`mt-1 leading-relaxed text-[color:var(--brand-purple)]/65 ${
            isPage ? "text-sm" : "text-[11px] line-clamp-2"
          }`}
        >
          {member.bio}
        </p>
      </div>

      <div
        className={`flex shrink-0 flex-col justify-center gap-2 ${
          isPage ? "pr-2" : "pr-1"
        }`}
      >
        <a
          href={buildMailtoLink(member.email)}
          title={`Email ${member.name}`}
          aria-label={`Email ${member.name}`}
          className="grid place-items-center rounded-full border border-border/80 bg-white text-[color:var(--brand-purple)] transition-all duration-200 hover:scale-110 hover:border-transparent hover:text-white"
          style={{ width: isPage ? 40 : 32, height: isPage ? 40 : 32 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "";
          }}
        >
          <Mail className={isPage ? "h-4 w-4" : "h-3.5 w-3.5"} />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title={`${member.name} on LinkedIn`}
          aria-label={`${member.name} on LinkedIn`}
          className="grid place-items-center rounded-full border border-border/80 bg-white text-[color:var(--brand-purple)] transition-all duration-200 hover:scale-110 hover:border-transparent hover:text-white"
          style={{ width: isPage ? 40 : 32, height: isPage ? 40 : 32 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "";
          }}
        >
          <Linkedin className={isPage ? "h-4 w-4" : "h-3.5 w-3.5"} />
        </a>
      </div>
    </motion.article>
  );
}
