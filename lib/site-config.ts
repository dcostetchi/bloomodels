export interface SiteConfig {
  readonly name: string;
  readonly email: string;
  readonly whatsappNumber: string;
  readonly telegramHandle: string;
  readonly url: string;
}

// [PLACEHOLDER] override every value via env vars — see .env.example
export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_AGENCY_NAME ?? "Bloom Models",
  email: process.env.NEXT_PUBLIC_AGENCY_EMAIL ?? "contact@bloomodels.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "40731836462",
  telegramHandle: process.env.NEXT_PUBLIC_TELEGRAM_HANDLE ?? "bloomodels",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bloomodels.com",
};

export function getWhatsappLink(prefilledMessage?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return prefilledMessage
    ? `${base}?text=${encodeURIComponent(prefilledMessage)}`
    : base;
}
