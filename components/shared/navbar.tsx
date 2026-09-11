"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { BrandMark } from "@/components/shared/brand-mark";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar(): React.JSX.Element {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const wordmark = siteConfig.name.split(" ")[0];

  useEffect(() => {
    function onScroll(): void {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/how-it-works", label: t("howItWorks") },
    { href: "/faq", label: t("faq") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,44,44,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-charcoal"
        >
          <BrandMark className="h-6 w-6 text-gold-dark" />
          <span className="font-serif text-2xl italic tracking-wide">
            {wordmark}
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest2 text-charcoal/70 transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <LocaleSwitcher className="text-charcoal/60" />
          <Button
            asChild
            className="rounded-none bg-charcoal px-6 text-xs font-medium uppercase tracking-widest2 text-cream hover:bg-charcoal-light"
          >
            <Link href="/apply">{t("applyNow")}</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
          className="text-charcoal md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream px-6 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-serif text-2xl italic text-charcoal">
              <BrandMark className="h-6 w-6 text-gold-dark" />
              {wordmark}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="text-charcoal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-14 flex flex-col gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl italic text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <LocaleSwitcher className="text-charcoal/60" />
            <Button
              asChild
              size="lg"
              className="w-full rounded-none bg-charcoal text-xs font-medium uppercase tracking-widest2 text-cream hover:bg-charcoal-light"
            >
              <Link href="/apply" onClick={() => setMenuOpen(false)}>
                {t("applyNow")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
