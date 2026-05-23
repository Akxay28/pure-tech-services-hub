import { TEAM_EMAIL_BODY, TEAM_EMAIL_SUBJECT } from "@/lib/team-contacts";

/** Opens the user's default mail client */
export function buildMailtoLink(email: string) {
  const params = new URLSearchParams({
    subject: TEAM_EMAIL_SUBJECT,
    body: TEAM_EMAIL_BODY,
  });
  return `mailto:${email}?${params.toString()}`;
}

/** Opens Gmail compose in the browser */
export function buildGmailComposeLink(email: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: TEAM_EMAIL_SUBJECT,
    body: TEAM_EMAIL_BODY,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}
