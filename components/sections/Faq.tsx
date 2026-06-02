import { faq } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Details } from "@/components/ui/Details";
import { FaqJsonLd } from "@/lib/jsonld";

export function Faq() {
  return (
    <Section id="faq" tone="cream" aria-labelledby="faq-title">
      <FaqJsonLd />
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Dúvidas</Eyebrow>
          <h2
            id="faq-title"
            className="mt-4 font-display text-[clamp(1.9rem,5vw,2.7rem)] font-light leading-tight"
          >
            {faq.title}
          </h2>
        </Reveal>

        <Reveal>
          <div className="border-t border-ink/12">
            {faq.items.map((item) => (
              <Details key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
