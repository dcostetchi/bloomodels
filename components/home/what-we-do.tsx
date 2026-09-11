import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";

export function WhatWeDo(): React.JSX.Element {
  const t = useTranslations("home.whatWeDo");
  const items = t.raw("items") as ReadonlyArray<{ title: string; desc: string }>;

  return (
    <section className="bg-cream px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-rose-dark">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="border-t border-charcoal/15 pt-6">
                <span className="font-serif text-xl italic text-gold-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
