import Image from "next/image";
import { founder } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <section
      id="quem-atende"
      aria-labelledby="founder-title"
      className="relative scroll-mt-24 overflow-hidden bg-[#F9EEDA] px-5 py-20 text-ink sm:px-8 sm:py-24 lg:py-28"
    >
      {/* desktop: fundo botânico completo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden select-none bg-[url('/fundocarol.png')] bg-cover bg-center bg-no-repeat opacity-45 lg:block"
      />
      {/* mobile/tablet: planta no topo e na base da seção */}
      <Image
        src="/planta1.png"
        alt=""
        aria-hidden
        width={792}
        height={941}
        sizes="12rem"
        className="pointer-events-none absolute left-0 top-0 z-0 w-[46%] max-w-[12rem] select-none opacity-60 lg:hidden"
      />
      <Image
        src="/planta2.png"
        alt=""
        aria-hidden
        width={733}
        height={941}
        sizes="12rem"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-[46%] max-w-[12rem] -scale-x-100 select-none opacity-60 lg:hidden"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Foto da Carolina em máscara orgânica */}
        <Reveal className="order-2 lg:order-1">
          <figure className="relative mx-auto max-w-sm">
            <div className="mask-petal relative z-10 aspect-[4/5] w-full overflow-hidden bg-creamDeep shadow-warm ring-1 ring-ink/10">
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
    </section>
  );
}
