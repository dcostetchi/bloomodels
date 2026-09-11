import Image from "next/image";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ApplyForm } from "@/components/apply/apply-form";
import { Reveal } from "@/components/shared/reveal";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

interface ApplyPageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ApplyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.apply" });
  return buildPageMetadata({
    locale: locale as AppLocale,
    path: "/apply",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ApplyPage({
  params,
}: ApplyPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apply");

  return (
    <section className="grid min-h-[calc(100vh-76px)] bg-cream-dark lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <Image
          src="/images/studio-setup.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover brand-photo"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
      </div>

      <div className="flex items-center px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto w-full max-w-xl">
          <Reveal className="mb-10 text-center">
            <h1 className="font-serif text-3xl italic text-charcoal sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-3 text-charcoal/60">{t("sub")}</p>
          </Reveal>
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}
