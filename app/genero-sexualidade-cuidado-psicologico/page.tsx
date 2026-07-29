import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { generoPage, site } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

const DESCRIPTION =
  "Psicoterapia online e presencial em Florianópolis, com escuta ética e sensível às experiências LGBTQIA+, sem reduzir a pessoa à sua identidade.";

const TAGS = ["Psicoterapia", "Gênero e sexualidade", "Saúde mental", "LGBTQIA+"];
const PUBLISHED = "12/06/2026"; // data de publicação (editável)

export const metadata: Metadata = {
  title: { absolute: "Psicoterapia afirmativa LGBTQIA+ | Carolina Franco Brito" },
  description: DESCRIPTION,
  alternates: { canonical: generoPage.slug },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${SITE_URL}${generoPage.slug}`,
    siteName: site.name,
    title: "Psicoterapia afirmativa LGBTQIA+ | Carolina Franco Brito",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicoterapia afirmativa LGBTQIA+ | Carolina Franco Brito",
    description: DESCRIPTION,
  },
};

export default function GeneroSexualidadePage() {
  return (
    <>
      <Header />

      {/* Botão circular de voltar (flutuante à esquerda, desktop) */}
      <Link
        href="/"
        aria-label="Voltar ao início"
        className="fixed left-5 top-28 z-40 hidden size-12 place-items-center rounded-full bg-paper text-teal shadow-warm ring-1 ring-ink/10 transition-transform duration-300 ease-warm hover:-translate-y-0.5 hover:text-tealDeep focus-visible:outline-teal lg:grid xl:left-10"
      >
        <ArrowLeft className="size-5" strokeWidth={1.8} />
      </Link>

      <main id="conteudo" className="bg-cream">
        <article className="px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
          {/* Cabeçalho do artigo (centralizado) */}
          <header className="mx-auto max-w-4xl text-center">
            <Reveal>
              <ul className="flex flex-wrap items-center justify-center gap-2">
                {TAGS.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70 ring-1 ring-ink/10"
                  >
                    <span className="size-1.5 rounded-full bg-ochre" />
                    {tag}
                  </li>
                ))}
              </ul>

              <h1 className="mx-auto mt-7 max-w-[20ch] font-display text-[clamp(2.4rem,6.5vw,4.4rem)] font-light leading-[1.04] text-teal">
                {generoPage.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                {generoPage.lead}
              </p>
            </Reveal>

            {/* meta: autora à esquerda · data à direita */}
            <div className="mx-auto mt-8 flex items-center justify-between text-xs uppercase tracking-eyebrow text-inkSoft">
              <span>{site.founder}</span>
              <span>{PUBLISHED}</span>
            </div>
          </header>

          {/* Capa (larga e arredondada) */}
          <Reveal className="mx-auto mt-8 max-w-5xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-organic bg-creamDeep shadow-warm-lg ring-1 ring-ink/10 sm:rounded-[28px]">
              <Image
                src="/cover-genero.jpg"
                alt="Sala de atendimento acolhedora, com duas poltronas, uma planta e luz natural pela janela"
                fill
                sizes="(min-width: 1024px) 64rem, 92vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* Corpo do artigo */}
          <div className="mx-auto mt-12 max-w-[48rem] sm:mt-16">
            <Reveal>
              {generoPage.intro.map((para, i) => (
                <p
                  key={i}
                  className="mt-6 text-lg leading-[1.8] text-ink/90 first:mt-0"
                >
                  {para}
                </p>
              ))}
            </Reveal>

            {generoPage.sections.map((sec) => (
              <Reveal key={sec.heading} className="mt-12">
                <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-normal leading-snug text-teal">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((para, i) => (
                  <p key={i} className="mt-5 text-lg leading-[1.8] text-ink/90">
                    {para}
                  </p>
                ))}
              </Reveal>
            ))}

            {/* Autora */}
            <Reveal className="mt-20 border-t border-ink/10 pt-12">
              <div className="flex items-center gap-6 rounded-organic bg-paper p-7 shadow-warm ring-1 ring-ink/5 sm:gap-7 sm:p-8">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-creamDeep ring-1 ring-ink/10">
                  <Image
                    src="/carolsentada2.png"
                    alt={site.founder}
                    fill
                    sizes="96px"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-terracotta">
                    Quem escreve
                  </p>
                  <p className="mt-1 font-display text-xl text-teal">
                    {site.founder}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-inkSoft">
                    Psicóloga, Mestre e Doutora em Psicologia pela UFSC ·{" "}
                    {site.crp}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </article>

        {/* CTA — idêntico ao da página inicial */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
