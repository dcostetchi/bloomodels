import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandMark } from "@/components/shared/brand-mark";
import { siteConfig } from "@/lib/site-config";

export function Footer(): React.JSX.Element {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const wordmark = siteConfig.name.split(" ")[0];

  const links = [
    { href: "/how-it-works", label: tNav("howItWorks") },
    { href: "/faq", label: tNav("faq") },
    { href: "/blog", label: tNav("blog") },
    { href: "/apply", label: tNav("apply") },
    { href: "/contact", label: tNav("contact") },
  ] as const;

  return (
    <footer className="bg-charcoal px-4 py-16 text-cream sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
        <div>
          <span className="flex items-center gap-2 font-serif text-2xl italic text-cream">
            <BrandMark className="h-6 w-6 text-gold" />
            {wordmark}
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/50">
            {t("tagline")}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold/70">
            {t("linksTitle")}
          </p>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacy"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {t("privacy")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold/70">
            {t("social")}
          </p>
          <div className="mt-4 flex gap-5 text-sm">
            {/* [PLACEHOLDER] real social links */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-cream/70 transition-colors hover:text-cream"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-cream/70 transition-colors hover:text-cream"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-cream/10 pt-6 text-xs text-cream/30">
        {t("copyright", { brand: siteConfig.name })}
      </div>
    </footer>
  );
}
