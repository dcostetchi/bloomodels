import type { Metadata } from "next";
import { routing, domainByLocale, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

// Each locale is pinned to its own domain (bloomodels.ro / bloomodels.com) —
// no path prefix, the domain itself is the locale signal.
export function localizedUrl(locale: AppLocale, path: string): string {
  return `https://${domainByLocale[locale]}${path}`;
}

export function buildAlternates(
  locale: AppLocale,
  path: string
): Metadata["alternates"] {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      ro: localizedUrl("ro", path),
      en: localizedUrl("en", path),
      "x-default": localizedUrl(routing.defaultLocale, path),
    },
  };
}

interface PageMetadataInput {
  readonly locale: AppLocale;
  readonly path: string;
  readonly title: string;
  readonly description: string;
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const url = localizedUrl(locale, path);

  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
