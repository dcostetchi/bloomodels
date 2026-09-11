import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ro", "en"],
  defaultLocale: "ro",
  localePrefix: "as-needed",
  // Locale is pinned per domain below — disable cookie/Accept-Language
  // detection so a stale NEXT_LOCALE cookie can't fight the domain's fixed
  // locale into a redirect loop.
  localeDetection: false,
  domains: [
    {
      domain: "bloomodels.ro",
      defaultLocale: "ro",
      locales: ["ro"],
    },
    {
      domain: "bloomodels.com",
      defaultLocale: "en",
      locales: ["en"],
    },
  ],
});

export type AppLocale = (typeof routing.locales)[number];

export const domainByLocale: Record<AppLocale, string> = {
  ro: "bloomodels.ro",
  en: "bloomodels.com",
};
