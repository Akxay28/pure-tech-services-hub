/**
 * Team contacts data.
 *
 * - NAV_TEAM_CONTACTS: exactly the 3 profiles in Company → Connect (nav) and Meet the Team.
 * - TEAM_PAGE_EXTRA_CONTACTS: add new members here — they appear on /team only, not in the nav.
 */
export type TeamContact = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
};

/** Fixed trio for navigation (Company → Connect) and Meet the Team — keep at 3. */
export const NAV_TEAM_CONTACTS: TeamContact[] = [
  {
    id: "anuj-bajaj",
    name: "Mr. Anuj Bajaj",
    role: "AI Consultant",
    bio: "Leading AI initiatives and helping businesses transform through intelligent solutions.",
    image: "/team/anuj-bajaj.jpg",
    email: "anuj@puretechnology.in",
    linkedin: "https://www.linkedin.com/in/anuj-bajajptc/",
  },
  {
    id: "rajesh-munde",
    name: "Mr. Rajesh Munde",
    role: "Staff Augmentation",
    bio: "Experts in building and scaling high-performing engineering teams for global success.",
    image: "/team/rajesh-munde.jpg",
    email: "rajesh@puretechnology.in",
    linkedin: "https://www.linkedin.com/in/rajeshmunde",
  },
  {
    id: "parag-thakur",
    name: "Mr. Parag Thakur",
    role: "Sales Director",
    bio: "Driving strategic partnerships and delivering value-driven solutions to our clients.",
    image: "/team/parag-thakur.jpg",
    email: "parag.thakur@puretechnology.in",
    linkedin: "https://www.linkedin.com/in/paragthakur",
  },
];

//  Additional team members for /team only — not shown in the navigation.

export const TEAM_PAGE_EXTRA_CONTACTS: TeamContact[] = [
  // Example:
  {
    id: "new-member",
    name: "Ms. Example Name",
    role: "Role Title",
    bio: "Short description.",
    image: "/team/example.jpg",
    email: "example@puretechnology.in",
    linkedin: "https://www.linkedin.com/in/example",
  },
];

/** Full roster on the /team page (nav trio + extras above). */
export const TEAM_PAGE_CONTACTS: TeamContact[] = [
  ...NAV_TEAM_CONTACTS,
  ...TEAM_PAGE_EXTRA_CONTACTS,
];

export const TEAM_EMAIL_SUBJECT = "Inquiry — Pure Technology";

export const TEAM_EMAIL_BODY =
  "Hello,\n\nI would like to get in touch regarding:\n\n";
