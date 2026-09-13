import { Resend } from "resend";
import type { StoredApplication } from "@/lib/applications";
import type { ContactFormValues } from "@/lib/validations";

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
}

function getRecipient(): string | null {
  return process.env.EMAIL_TO ?? null;
}

export async function sendApplicationEmail(
  application: StoredApplication
): Promise<boolean> {
  const resend = getResendClient();
  const to = getRecipient();

  // Env vars unset in local/dev — skip silently rather than failing the submission.
  if (!resend || !to) {
    return false;
  }

  const { error } = await resend.emails.send({
    from: "Bloom Models Applications <apply@bloomodels.ro>",
    to,
    subject: `New application: ${application.firstName} (${application.city})`,
    text: [
      `First name: ${application.firstName}`,
      `Age range: ${application.age}`,
      `City: ${application.city}`,
      `WhatsApp: ${application.whatsapp}`,
      `Device: ${application.device}`,
      `Internet: ${application.internetSpeed}`,
      `Hours/day: ${application.hoursPerDay}`,
      `Weekends: ${application.weekends}`,
      `Source: ${application.source}`,
      `Questions: ${application.questions ?? "-"}`,
      `Submitted: ${application.submittedAt}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend failed to send application email:", error);
    return false;
  }

  return true;
}

export async function sendContactEmail(
  values: ContactFormValues
): Promise<boolean> {
  const resend = getResendClient();
  const to = getRecipient();

  if (!resend || !to) {
    return false;
  }

  const { error } = await resend.emails.send({
    from: "Bloom Models Contact <contact@bloomodels.ro>",
    to,
    subject: `New contact message from ${values.name}`,
    text: `Name: ${values.name}\nContact: ${values.contact}\n\n${values.message}`,
  });

  if (error) {
    console.error("Resend failed to send contact email:", error);
    return false;
  }

  return true;
}
