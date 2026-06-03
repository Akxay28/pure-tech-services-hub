export type ContactPayload = Record<string, FormDataEntryValue | null | undefined>;

export async function submitContactForm(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Could not send your enquiry. Please try again.";
    try {
      const data = (await response.json()) as { message?: string };
      if (data.message) message = data.message;
    } catch {
      // Keep the default user-facing message.
    }
    throw new Error(message);
  }
}
