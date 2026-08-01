import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { editorial, editorialArticles } from "@/content/editorial";
import { OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Editorial",
  description: editorial.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/blog`,
    title: "Editorial",
    description: editorial.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial",
    description: editorial.description,
    images: [OG_IMAGE.url],
  },
};

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="conteudo" className="bg-cream">
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <Reveal className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-terracotta">
                Psicoterapia e cuidado clínico
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,4.6rem)] font-light leading-tight text-teal">
                {editorial.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                {editorial.intro}
              </p>
            </div>
          </Reveal>

          <Reveal
            stagger
            as="ul"
            className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3"
          >
            {editorialArticles.map((article) => (
              <RevealItem key={article.slug} as="li" className="list-none">
                <Card className="h-full">
                  <article className="flex h-full flex-col">
                    <p className="text-xs font-semibold uppercase tracking-eyebrow text-terracotta">
                      {article.category}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-normal leading-snug text-teal">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="focus-visible:outline-teal"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                      {article.description}
                    </p>
                    <time
                      dateTime={article.datePublished}
                      className="mt-6 text-xs uppercase tracking-eyebrow text-inkSoft"
                    >
                      {dateFormatter.format(new Date(article.datePublished))}
                    </time>
                  </article>
                </Card>
              </RevealItem>
            ))}
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
