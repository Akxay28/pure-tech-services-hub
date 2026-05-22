import { getHireRole, type HireRoleSlug, type hireRoles } from "@/lib/hire-roles";

export type { HireRoleSlug };
export type HireRoleEntry = (typeof hireRoles)[HireRoleSlug];

export function getHireRoleProps(slug: HireRoleSlug): HireRoleEntry {
  const entry = getHireRole(slug);
  if (!entry) {
    throw new Error(`Unknown hire role slug: ${slug}`);
  }
  return entry;
}
