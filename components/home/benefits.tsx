import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";

export function Benefits(): React.JSX.Element {
  const t = useTranslations("home.benefits");
  const items = t.raw("items") as readonly string[];

  return (
    <section className="bg-cream px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-rose-dark">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center">
          <Reveal className="hidden lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/anon-hands.jpg"
                alt=""
                fill
                sizes="320px"
                className="object-cover brand-photo"
              />
            </div>
          </Reveal>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <Reveal key={item} delay={(index % 2) * 0.1}>
                <div className="flex items-baseline gap-4 border-b border-charcoal/10 pb-4">
                  <span className="font-serif text-sm italic text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-charcoal/80">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
