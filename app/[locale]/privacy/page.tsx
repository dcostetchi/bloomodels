import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

interface PrivacyPageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacy" });
  return buildPageMetadata({
    locale: locale as AppLocale,
    path: "/privacy",
    title: t("title"),
    description: t("description"),
  });
}

interface PrivacySection {
  readonly title: string;
  readonly text: string;
}

const LAST_UPDATED = "2025-01-01";

export default async function PrivacyPage({
  params,
}: PrivacyPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");
  const sections = t.raw("sections") as readonly PrivacySection[];

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h1 className="font-serif text-3xl italic text-charcoal sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-sm text-charcoal/40">
            {t("updated", { date: LAST_UPDATED })}
          </p>
          <p className="mt-6 text-charcoal/70">
            {t("intro", { brand: siteConfig.name })}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.05}>
              <h2 className="border-t border-gold/40 pt-4 text-lg font-medium text-charcoal">
                {section.title}
              </h2>
              <p className="mt-2 text-charcoal/70">
                {section.text.replace(
                  "contact@[domain]",
                  siteConfig.email
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
