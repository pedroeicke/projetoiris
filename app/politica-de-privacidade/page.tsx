import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { privacyPage, site } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

const DESCRIPTION =
  "Como este site trata cookies e medição de anúncios. Sem formulários, sem coleta de dados de saúde e sem publicidade personalizada.";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: DESCRIPTION,
  alternates: { canonical: privacyPage.slug },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${SITE_URL}${privacyPage.slug}`,
    siteName: site.name,
    title: `Política de privacidade · ${site.name}`,
    description: DESCRIPTION,
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />

      {/* Voltar (desktop) */}
      <Link
        href="/"
        aria-label="Voltar ao início"
        className="fixed left-5 top-28 z-40 hidden size-12 place-items-center rounded-full bg-paper text-teal shadow-warm ring-1 ring-ink/10 transition-transform duration-300 ease-warm hover:-translate-y-0.5 hover:text-tealDeep focus-visible:outline-teal lg:grid xl:left-10"
      >
        <ArrowLeft className="size-5" strokeWidth={1.8} />
      </Link>

      <main id="conteudo" className="bg-cream">
        <article className="px-5 pb-24 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
          <header className="mx-auto max-w-[48rem]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-terracotta">
                {privacyPage.updatedAt}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.1rem,5.5vw,3.4rem)] font-light leading-[1.06] text-teal">
                {privacyPage.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                {privacyPage.lead}
              </p>
            </Reveal>
          </header>

          <div className="mx-auto mt-12 max-w-[48rem] sm:mt-14">
            {privacyPage.sections.map((sec) => (
              <Reveal key={sec.heading} className="mt-11 first:mt-0">
                <h2 className="font-display text-[clamp(1.4rem,3.4vw,1.9rem)] font-normal leading-snug text-teal">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((para, i) => (
                  <p key={i} className="mt-4 text-lg leading-[1.8] text-ink/90">
                    {para}
                  </p>
                ))}
              </Reveal>
            ))}

            <Reveal className="mt-14 border-t border-ink/10 pt-8">
              <p className="text-sm leading-relaxed text-inkSoft">
                {site.founder} · Psicóloga · {site.crp}
              </p>
              <Link
                href="/"
                className="link-grow mt-4 inline-block text-base font-medium text-teal"
              >
                Voltar ao início
              </Link>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
