"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function Hero(): React.JSX.Element {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-cream px-4 py-24 text-center sm:px-6 sm:py-36">
      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-widest2 text-rose-dark"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 font-serif text-4xl italic leading-[1.15] text-charcoal sm:text-6xl"
        >
          {t("h1")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-7 h-px w-16 bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-charcoal/60"
        >
          {t("sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="w-full rounded-none bg-charcoal px-8 text-xs font-medium uppercase tracking-widest2 text-cream hover:bg-charcoal-light sm:w-auto"
          >
            <Link href="/apply">{t("ctaPrimary")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-none border-charcoal/20 bg-transparent px-8 text-xs font-medium uppercase tracking-widest2 text-charcoal hover:bg-charcoal/5 sm:w-auto"
          >
            <Link href="/how-it-works">{t("ctaSecondary")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
