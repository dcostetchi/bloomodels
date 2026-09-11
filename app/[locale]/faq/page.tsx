import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/reveal";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

interface FaqPageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: FaqPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.faq" });
  return buildPageMetadata({
    locale: locale as AppLocale,
    path: "/faq",
    title: t("title"),
    description: t("description"),
  });
}

interface FaqItem {
  readonly q: string;
  readonly a: string;
}

interface FaqCategory {
  readonly title: string;
  readonly items: readonly FaqItem[];
}

export default async function FaqPage({
  params,
}: FaqPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faqPage");
  const categories = t.raw("categories") as readonly FaqCategory[];

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h1 className="font-serif text-4xl italic text-charcoal sm:text-5xl">
            {t("title")}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-charcoal/60">{t("sub")}</p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {categories.map((category, catIndex) => (
            <Reveal key={category.title} delay={catIndex * 0.05}>
              <h2 className="text-xs font-medium uppercase tracking-widest2 text-rose-dark">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="mt-3">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={item.q}
                    value={`${catIndex}-${itemIndex}`}
                    className="border-charcoal/10"
                  >
                    <AccordionTrigger className="text-charcoal hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/60">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
