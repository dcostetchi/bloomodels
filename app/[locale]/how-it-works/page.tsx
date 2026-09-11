import { Fragment } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

interface HowItWorksPageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HowItWorksPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.howItWorks" });
  return buildPageMetadata({
    locale: locale as AppLocale,
    path: "/how-it-works",
    title: t("title"),
    description: t("description"),
  });
}

export default async function HowItWorksPage({
  params,
}: HowItWorksPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("howItWorksPage");

  const weManageItems = t.raw("weManage.items") as readonly string[];
  const youDoItems = t.raw("youDo.items") as readonly string[];
  const timelineItems = t.raw("timeline.items") as ReadonlyArray<{
    period: string;
    range: string;
    phase: string;
  }>;
  const weHandle = t.raw("table.weHandle") as readonly string[];
  const youHandle = t.raw("table.youHandle") as readonly string[];

  return (
    <>
      <section className="bg-cream px-4 py-20 text-center sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="font-serif text-4xl italic text-charcoal sm:text-5xl">
            {t("hero.title")}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-charcoal/60">{t("hero.sub")}</p>
        </Reveal>
      </section>

      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/studio-suite.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover brand-photo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
        <div className="relative flex h-full items-end px-4 pb-10 sm:px-6">
          <Reveal className="mx-auto w-full max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold">
              {t("spaceBand.eyebrow")}
            </p>
            <h2 className="mt-2 font-serif text-2xl italic text-cream sm:text-3xl">
              {t("spaceBand.title")}
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-2xl italic text-charcoal">
              {t("weManage.title")}
            </h2>
            <ul className="mt-5 space-y-3">
              {weManageItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-charcoal/10 pb-3 text-charcoal/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl italic text-charcoal">
              {t("youDo.title")}
            </h2>
            <ul className="mt-5 space-y-3">
              {youDoItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-charcoal/10 pb-3 text-charcoal/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dark px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl rounded-none bg-charcoal p-10 text-center text-cream sm:p-14">
          <h2 className="font-serif text-2xl italic sm:text-3xl">
            {t("earningsModel.title")}
          </h2>
          <p className="mt-5 text-lg text-cream/85">
            {t("earningsModel.explanation")}
          </p>
          <p className="mt-4 text-sm text-cream/45">{t("earningsModel.note")}</p>
        </Reveal>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl italic text-charcoal sm:text-3xl">
              {t("timeline.title")}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {timelineItems.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.1}>
                <div className="border-t border-gold/50 pt-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-widest2 text-rose-dark">
                    {item.period}
                  </p>
                  <p className="mt-3 font-serif text-3xl italic text-charcoal">
                    {item.range}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/60">{item.phase}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-10 text-center text-charcoal/60">
            <p>
              <span className="font-medium text-charcoal">
                {t("whatYouNeed.title")}:
              </span>{" "}
              {t("whatYouNeed.text")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dark px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl italic text-charcoal sm:text-3xl">
              {t("table.title")}
            </h2>
          </Reveal>
          <div className="mt-12 overflow-x-auto">
            <div className="grid min-w-[560px] grid-cols-2 border border-charcoal/15">
              <div className="border-b border-r border-charcoal/15 bg-charcoal p-4 text-center text-xs font-medium uppercase tracking-widest2 text-cream">
                {t("table.weHandleTitle")}
              </div>
              <div className="border-b border-charcoal/15 bg-charcoal p-4 text-center text-xs font-medium uppercase tracking-widest2 text-cream">
                {t("table.youHandleTitle")}
              </div>
              {weHandle.map((item, index) => (
                <Fragment key={item}>
                  <div className="border-b border-r border-charcoal/10 p-4 text-sm text-charcoal/70">
                    {item}
                  </div>
                  <div className="border-b border-charcoal/10 p-4 text-sm text-charcoal/70">
                    {youHandle[index]}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-24 text-center text-cream sm:px-6">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl italic sm:text-4xl">
            {t("ctaFinal.title")}
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-none bg-rose px-8 text-xs font-medium uppercase tracking-widest2 text-charcoal hover:bg-rose-light"
          >
            <Link href="/apply">{t("ctaFinal.button")}</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
