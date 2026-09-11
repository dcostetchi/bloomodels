import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";

export function StudioShowcase(): React.JSX.Element {
  const t = useTranslations("home.studioShowcase");

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <Image
        src="/images/studio-bedroom.jpg"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover brand-photo"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/10" />
      <div className="relative flex h-full items-end px-4 pb-16 sm:px-6">
        <Reveal className="mx-auto max-w-6xl w-full">
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-serif text-3xl italic text-cream sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
            {t("text")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
