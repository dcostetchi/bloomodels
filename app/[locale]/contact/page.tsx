import Image from "next/image";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { MessageCircle, Send, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig, getWhatsappLink } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

interface ContactPageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return buildPageMetadata({
    locale: locale as AppLocale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({
  params,
}: ContactPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h1 className="font-serif text-4xl italic text-charcoal sm:text-5xl">
            {t("title")}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-charcoal/60">{t("sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <Reveal className="space-y-4">
            <div className="relative mb-2 h-48 w-full overflow-hidden">
              <Image
                src="/images/studio-lounge.jpg"
                alt=""
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover brand-photo"
              />
            </div>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 bg-charcoal px-6 py-4 font-medium text-cream transition-colors hover:bg-charcoal-light"
            >
              <MessageCircle className="h-5 w-5 text-gold" />
              {t("whatsapp")}
            </a>
            <div className="flex items-center gap-3 border border-charcoal/10 px-6 py-4 text-charcoal">
              <Send className="h-5 w-5 text-rose-dark" />
              <span className="font-medium">{t("telegram")}</span>
              <span className="text-charcoal/50">@{siteConfig.telegramHandle}</span>
            </div>
            <div className="flex items-center gap-3 border border-charcoal/10 px-6 py-4 text-charcoal">
              <Mail className="h-5 w-5 text-rose-dark" />
              <span className="font-medium">{t("email")}</span>
              <span className="text-charcoal/50">{siteConfig.email}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest2 text-rose-dark">
              {t("formTitle")}
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
