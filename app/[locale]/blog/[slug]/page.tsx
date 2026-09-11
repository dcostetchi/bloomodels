import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";
import { buildPageMetadata, localizedUrl } from "@/lib/seo";
import { routing, type AppLocale } from "@/i18n/routing";

interface BlogPostPageProps {
  readonly params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams(): Array<{ locale: string; slug: string }> {
  return routing.locales.flatMap((locale) =>
    getBlogSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }
  const currentLocale = locale as AppLocale;
  return buildPageMetadata({
    locale: currentLocale,
    path: `/blog/${slug}`,
    title: post.title[currentLocale],
    description: post.excerpt[currentLocale],
  });
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps): Promise<React.JSX.Element> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations("blogPage");
  const currentLocale = locale as AppLocale;
  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[currentLocale],
    description: post.excerpt[currentLocale],
    datePublished: post.date,
    url: localizedUrl(currentLocale, `/blog/${slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Link
              href="/blog"
              className="text-xs font-medium uppercase tracking-widest2 text-rose-dark"
            >
              {t("backToBlog")}
            </Link>
            <p className="mt-6 text-xs font-medium uppercase tracking-widest2 text-charcoal/40">
              {post.date} · {post.readTime}
            </p>
            <h1 className="mt-3 font-serif text-3xl italic text-charcoal sm:text-4xl">
              {post.title[currentLocale]}
            </h1>
          </Reveal>

          <div className="mt-10 space-y-5">
            {post.body[currentLocale].map((paragraph, index) => (
              <Reveal key={index} delay={Math.min(index * 0.03, 0.3)}>
                <p className="leading-relaxed text-charcoal/75">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-charcoal px-4 py-20 text-center text-cream sm:px-6">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl italic sm:text-4xl">
            {t("ctaTitle")}
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-none bg-rose px-8 text-xs font-medium uppercase tracking-widest2 text-charcoal hover:bg-rose-light"
          >
            <Link href="/apply">{t("ctaButton")}</Link>
          </Button>
        </Reveal>
      </section>

      {otherPosts.length > 0 && (
        <section className="bg-cream-dark px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group block"
                >
                  <p className="text-xs font-medium uppercase tracking-widest2 text-rose-dark">
                    {t("readMore")}
                  </p>
                  <h3 className="mt-2 font-serif text-xl italic text-charcoal transition-colors group-hover:text-rose-dark">
                    {other.title[currentLocale]}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
