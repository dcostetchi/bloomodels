"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }): React.JSX.Element {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={cn(
            "rounded-full px-2 py-1 text-xs uppercase tracking-widest2 transition-colors",
            loc === locale
              ? "bg-charcoal text-cream"
              : "text-current/60 hover:text-current"
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
