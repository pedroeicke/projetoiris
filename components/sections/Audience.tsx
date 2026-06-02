import { Compass, Home, HandHeart, CloudRain, Users } from "lucide-react";
import { audience } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

// Ícone temático por situação (mesma ordem de audience.situations)
const situationIcons = [Compass, Home, HandHeart, CloudRain, Users];

export function Audience() {
  return (
    <Section
      id="para-quem"
      tone="creamDeep"
      aria-labelledby="audience-title"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Para quem</Eyebrow>
          <h2
            id="audience-title"
            className="mt-4 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-light leading-tight"
          >
            {audience.title}
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
            {audience.intro}
          </p>
          <p className="mt-6 max-w-prose border-l-2 border-ochre/60 pl-5 font-display text-lg italic leading-relaxed text-teal">
            {audience.note}
          </p>
        </Reveal>

        <Reveal stagger as="ul" className="flex flex-col justify-center gap-1">
          {audience.situations.map((s, i) => {
            const Icon = situationIcons[i] ?? Compass;
            return (
              <RevealItem
                key={s}
                as="li"
                className="flex items-center gap-4 border-b border-ink/10 py-4 last:border-0"
              >
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-paper text-teal shadow-warm ring-1 ring-ochre/25"
                >
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <span className="text-lg leading-snug text-ink/90">{s}</span>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
