import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

export function localizedUrl(locale: AppLocale, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${path}`;
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
