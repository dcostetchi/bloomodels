import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/shared/reveal";
import { getAllBlogPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

interface BlogPageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.blog" });
  return buildPageMetadata({
    locale: locale as AppLocale,
    path: "/blog",
    title: t("title"),
    description: t("description"),
  });
}

export default async function BlogPage({
  params,
}: BlogPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogPage");
  const currentLocale = locale as AppLocale;
  const posts = getAllBlogPosts();

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h1 className="font-serif text-4xl italic text-charcoal sm:text-5xl">
            {t("title")}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-charcoal/60">{t("sub")}</p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block border-t border-charcoal/10 pt-8">
                <p className="text-xs font-medium uppercase tracking-widest2 text-rose-dark">
                  {post.date} · {post.readTime}
                </p>
                <h2 className="mt-3 font-serif text-2xl italic text-charcoal transition-colors group-hover:text-rose-dark">
                  {post.title[currentLocale]}
                </h2>
                <p className="mt-2 text-charcoal/60">{post.excerpt[currentLocale]}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
