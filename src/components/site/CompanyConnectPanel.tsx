import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { NAV_TEAM_CONTACTS } from "@/lib/team-contacts";
import { TeamContactCard } from "@/components/site/TeamContactCard";

export function CompanyConnectPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-3"
    >
      {NAV_TEAM_CONTACTS.map((member, index) => (
        <TeamContactCard
          key={member.id}
          member={member}
          accentIndex={index}
          variant="mega"
        />
      ))}
      <Link
        to="/team"
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold text-[color:var(--brand-purple)]/80 transition-colors hover:bg-[color:var(--brand-pink-soft)]/50 hover:text-[color:var(--brand-pink)]"
      >
        View full team page
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
