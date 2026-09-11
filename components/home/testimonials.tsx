import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

export function Testimonials(): React.JSX.Element {
  const t = useTranslations("home.testimonials");
  const items = t.raw("items") as ReadonlyArray<{ name: string; quote: string }>;

  return (
    <section className="bg-cream px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border border-gold/40">
            <Image
              src="/images/anon-hands-alt.jpg"
              alt=""
              fill
              sizes="80px"
              className="object-cover brand-photo"
            />
          </div>
          <h2 className="mt-6 font-serif text-3xl italic text-charcoal sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="flex h-full flex-col">
                <span className="font-serif text-6xl italic leading-none text-gold/50">
                  &ldquo;
                </span>
                <p className="-mt-4 flex-1 text-charcoal/75">
                  {item.quote.replace("{brand}", siteConfig.name)}
                </p>
                <p className="mt-5 text-xs font-medium uppercase tracking-widest2 text-rose-dark">
                  {item.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-14 text-center text-xs text-charcoal/40">
            {t("disclaimer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
