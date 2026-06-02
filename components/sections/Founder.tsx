import Image from "next/image";
import { founder } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <Section
      id="quem-atende"
      tone="cream"
      aria-labelledby="founder-title"
      bgImage="/fundocarol.png"
      bgClassName="opacity-45"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Foto da Carolina em máscara orgânica */}
        <Reveal className="order-2 lg:order-1">
          <figure className="relative mx-auto max-w-sm">
            <div className="mask-petal relative z-10 aspect-[4/5] w-full overflow-hidden bg-creamDeep shadow-warm-lg ring-1 ring-ink/10">
              <Image
                src="/carolsentada2.png"
                alt={founder.photoAlt}
                fill
                sizes="384px"
                className="object-cover object-[50%_30%]"
                priority={false}
              />
            </div>
          </figure>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <Eyebrow>Quem atende</Eyebrow>
          <h2
            id="founder-title"
            className="mt-4 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-light leading-tight"
          >
            {founder.title}
          </h2>
          {/* Quebras só no desktop (lg+) para o texto não cair sobre as
              flores do fundo no canto direito; no mobile o <br> some. */}
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
            íris é fundada e conduzida por Carolina Franco Brito, psicóloga e
            doutoranda em Psicologia pela UFSC, com produção acadêmica em gênero,{" "}
            <br className="hidden lg:inline" />
            sexualidades e identidade. Une o rigor de quem estuda o tema a{" "}
            <br className="hidden lg:inline" />
            fundo à escuta de quem acolhe sem julgamento.
          </p>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
            O cuidado é construído com responsabilidade: supervisão{" "}
            <br className="hidden lg:inline" />
            clínica regular e formação contínua acompanham{" "}
            <br className="hidden lg:inline" />
            cada passo.
          </p>
          <p className="mt-7 font-display text-xl text-teal">
            {founder.name}
            <span className="ml-3 align-middle text-sm font-sans uppercase tracking-eyebrow text-inkSoft">
              {founder.crp}
            </span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
