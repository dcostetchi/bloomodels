import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/shared/reveal";

export function HowItWorksPreview(): React.JSX.Element {
  const t = useTranslations("home.howItWorks");
  const steps = t.raw("steps") as ReadonlyArray<{ title: string; desc: string }>;

  return (
    <section className="bg-cream-dark px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl italic text-charcoal sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <div className="relative border-t border-gold/40 pt-6">
                <span className="font-serif text-5xl italic text-charcoal/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-medium text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-charcoal/60">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-14 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-charcoal underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-rose-dark"
          >
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
