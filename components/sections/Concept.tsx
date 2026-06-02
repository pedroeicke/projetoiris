import { concept } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { LightSliver } from "@/components/brand/LightSliver";

/** Faixa-conceito em petróleo, com a assinatura espectral. */
export function Concept() {
  return (
    <section
      id="conceito"
      aria-labelledby="concept-title"
      className="relative overflow-hidden scroll-mt-24 bg-tealDeep px-5 py-24 text-cream sm:px-8 sm:py-28 lg:py-32"
    >
      {/* sol suave entrando no canto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-amber/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <LightSliver id="concept-sliver" className="mx-auto mb-9 h-3 w-44" />
          <h2
            id="concept-title"
            className="font-display text-[clamp(1.9rem,5vw,3rem)] font-light leading-tight text-paper"
          >
            {concept.titleLead}{" "}
            <em className="italic text-amber">{concept.titleEmphasis}</em>
            {concept.titleTrail}
          </h2>
          <p className="mx-auto mt-7 max-w-prose text-lg leading-relaxed text-cream/85">
            {concept.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
