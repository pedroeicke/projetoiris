import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import {
  editorialArticles,
  getEditorialArticle,
  type EditorialArticle,
} from "@/content/editorial";
import { site } from "@/content/site";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return editorialArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getEditorialArticle(slug);

  if (!article) {
    return {};
  }

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url,
      siteName: SITE_NAME,
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [site.founder],
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [OG_IMAGE.url],
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function ArticleJsonLd({ article }: { article: EditorialArticle }) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: site.founder,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function EditorialArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getEditorialArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd article={article} />
      <Header />
      <main id="conteudo" className="bg-cream">
        <article className="px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
          <Reveal className="mx-auto max-w-[48rem]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-tealDeep focus-visible:outline-teal"
            >
              <ArrowLeft className="size-4" strokeWidth={1.8} />
              Editorial
            </Link>

            <header className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-terracotta">
                {article.category}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.35rem,6vw,4.1rem)] font-light leading-tight text-teal">
                {article.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                {article.description}
              </p>
              <time
                dateTime={article.datePublished}
                className="mt-8 block text-xs uppercase tracking-eyebrow text-inkSoft"
              >
                {dateFormatter.format(new Date(article.datePublished))}
              </time>
            </header>
          </Reveal>

          <div className="mx-auto mt-12 max-w-[48rem] sm:mt-16">
            {article.sections.map((section) => (
              <Reveal key={section.heading} className="mt-12 first:mt-0">
                <h2 className="font-display text-[clamp(1.55rem,4vw,2.2rem)] font-normal leading-snug text-teal">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-lg leading-[1.8] text-ink/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </article>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
