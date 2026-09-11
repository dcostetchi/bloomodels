import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function CtaFinal(): React.JSX.Element {
  const t = useTranslations("home.ctaFinal");

  return (
    <section className="bg-charcoal px-4 py-24 text-center text-cream sm:px-6">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl italic sm:text-4xl">{t("title")}</h2>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        <Button
          asChild
          size="lg"
          className="mt-10 rounded-none bg-rose px-8 text-xs font-medium uppercase tracking-widest2 text-charcoal hover:bg-rose-light"
        >
          <Link href="/apply">{t("button")}</Link>
        </Button>
      </Reveal>
    </section>
  );
}
