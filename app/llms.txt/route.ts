import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";
import { localizedUrl } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";
import { domainByLocale, type AppLocale } from "@/i18n/routing";
import enMessages from "@/messages/en.json";
import roMessages from "@/messages/ro.json";

const messagesByLocale: Record<AppLocale, typeof enMessages> = {
  en: enMessages,
  ro: roMessages,
};

function localeForHost(host: string): AppLocale {
  return host.includes(domainByLocale.ro) ? "ro" : "en";
}

const introByLocale: Record<AppLocale, string> = {
  en: `> ${siteConfig.name} is a boutique creator management agency. We handle technical setup, audience growth, and monetization for live content creators so they can focus on creating.`,
  ro: `> ${siteConfig.name} este o agentie boutique de management pentru creatori. Ne ocupam de setup tehnic, cresterea audientei si monetizare pentru creatori de continut live, ca ei sa se concentreze pe creat.`,
};

const sectionTitles: Record<AppLocale, { pages: string; blog: string }> = {
  en: { pages: "Pages", blog: "Blog" },
  ro: { pages: "Pagini", blog: "Blog" },
};

export function GET(request: Request): NextResponse {
  const host = request.headers.get("host") ?? domainByLocale.en;
  const locale = localeForHost(host);
  const t = messagesByLocale[locale];
  const titles = sectionTitles[locale];

  const pages: ReadonlyArray<{ path: string; title: string; description: string }> = [
    { path: "/", title: t.seo.home.title, description: t.seo.home.description },
    { path: "/how-it-works", title: t.seo.howItWorks.title, description: t.seo.howItWorks.description },
    { path: "/faq", title: t.seo.faq.title, description: t.seo.faq.description },
    { path: "/apply", title: t.seo.apply.title, description: t.seo.apply.description },
    { path: "/contact", title: t.seo.contact.title, description: t.seo.contact.description },
    { path: "/privacy", title: t.seo.privacy.title, description: t.seo.privacy.description },
  ];

  const pageLines = pages
    .map((page) => `- [${page.title}](${localizedUrl(locale, page.path)}): ${page.description}`)
    .join("\n");

  const blogLines = getAllBlogPosts()
    .map(
      (post) =>
        `- [${post.title[locale]}](${localizedUrl(locale, `/blog/${post.slug}`)}): ${post.excerpt[locale]}`
    )
    .join("\n");

  const body = [
    `# ${siteConfig.name}`,
    "",
    introByLocale[locale],
    "",
    `## ${titles.pages}`,
    pageLines,
    "",
    `## ${titles.blog}`,
    blogLines,
    "",
  ].join("\n");

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
