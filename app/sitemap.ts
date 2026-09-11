import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";
import { getBlogSlugs } from "@/lib/blog";

const STATIC_PATHS = [
  "/",
  "/how-it-works",
  "/faq",
  "/apply",
  "/contact",
  "/privacy",
  "/blog",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: new Date(),
      alternates: {
        languages: {
          ro: localizedUrl("ro", path),
          en: localizedUrl("en", path),
        },
      },
    }))
  );

  const blogEntries = getBlogSlugs().flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, `/blog/${slug}`),
      lastModified: new Date(),
      alternates: {
        languages: {
          ro: localizedUrl("ro", `/blog/${slug}`),
          en: localizedUrl("en", `/blog/${slug}`),
        },
      },
    }))
  );

  return [...staticEntries, ...blogEntries];
}
