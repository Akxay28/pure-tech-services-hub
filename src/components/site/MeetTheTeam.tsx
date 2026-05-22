import { Mail, Linkedin } from "lucide-react";
import { brandIconGradient, BRAND, testimonialAccentAt } from "@/lib/brand-colors";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Mr. Anuj Bajaj",
    role: "AI Consultant",
    image: "/team/anuj-bajaj.jpg",
    email: "anuj@puretechnology.in",
    linkedin: "https://www.linkedin.com/in/anuj-bajajptc/",
  },
  {
    name: "Mr. Rajesh Munde",
    role: "Staff Augmentation",
    image: "/team/rajesh-munde.jpg",
    email: "rajesh@puretechnology.in",
    linkedin: "https://linkedin.com/in/rajeshmunde",
  },
  {
    name: "Mr. Parag Thakur",
    role: "Sales Director",
    image: "/team/parag-thakur.jpg",
    email: "parag.thakur@puretechnology.in",
    linkedin: "https://linkedin.com/in/paragthakur",
  },
];

const EMAIL_SUBJECT = "Inquiry — Pure Technology";

const EMAIL_BODY = "Hello,\n\nI would like to get in touch regarding:\n\n";

/** Opens Gmail compose in the browser */
function buildGmailComposeLink(email: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: EMAIL_SUBJECT,
    body: EMAIL_BODY,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function MeetTheTeam() {
  return (
    <section className="px-5 lg:px-8 py-20 bg-surface">
      <div className="mx-auto max-w-5xl text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight"
        >
          We're here to answer{" "}
          <span
            // style={{
            //   background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 45%, orange))`,
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}

            style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            all your questions.
          </span>
        </h2>

        {/* Underline accent */}
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full"
          style={{ background: BRAND.gradientBrand }}
        />

        {/* Cards */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {TEAM.map((member, i) => {
            const accent = testimonialAccentAt(i);
            return (
            <div key={member.name} className="group flex flex-col items-center w-56">

              {/* Photo with layered border */}
              <div className="relative" >
                {/* Offset shadow block */}
                <div
                  className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  style={{ background: accent, opacity: 0.25 }}
                />
                {/* Bottom-right accent (matches homepage testimonial cards) */}
                <div
                  className="absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-br-2xl"
                  style={{ background: accent, opacity: 0.7 }}
                />
                <div className="relative overflow-hidden rounded-2xl border-2 border-border w-44 h-52">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to initials if image missing
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Initials fallback */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
                    style={{ background: brandIconGradient(accent) }}
                  >
                    {member.name.split(" ").slice(1).map(n => n[0]).join("")}
                  </div>
                  {/* Real image sits on top of fallback */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name & role */}
              <div className="mt-6 text-center">
                <p className="font-display font-semibold text-lg tracking-tight">
                  {member.name}
                </p>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: accent }}
                >
                  {member.role}
                </p>
              </div>

              {/* Contact icons */}
              <div className="mt-3 flex items-center justify-center gap-3">
                {member.email && (
                  <a
                    href={buildGmailComposeLink(member.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Email ${member.name} (Gmail)`}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface-muted transition-all duration-200 hover:border-transparent hover:text-white"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "";
                    }}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={14} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface-muted transition-all duration-200 hover:border-transparent hover:text-white"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "";
                    }}
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin size={14} />
                  </a>
                )}
              </div>

            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}