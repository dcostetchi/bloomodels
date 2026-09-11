import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { statConfigs } from "@/lib/home-data";

export function Numbers(): React.JSX.Element {
  const t = useTranslations("home.numbers");
  const items = t.raw("items") as ReadonlyArray<{
    display?: string;
    suffix: string;
    label: string;
  }>;

  return (
    <section className="border-y border-charcoal/10 bg-cream-dark px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl divide-y divide-charcoal/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {items.map((item, index) => {
          const config = statConfigs[index];
          return (
            <Reveal
              key={item.label}
              delay={index * 0.1}
              className="px-4 py-6 text-center first:pt-6 sm:py-0"
            >
              <div className="font-serif text-4xl italic text-charcoal sm:text-5xl">
                {config?.countTo != null ? (
                  <AnimatedCounter target={config.countTo} suffix={item.suffix} />
                ) : (
                  <span>
                    {item.display}
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest2 text-charcoal/50">
                {item.label}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
