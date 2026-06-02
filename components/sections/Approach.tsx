import {
  HandHeart,
  Layers,
  BookOpen,
  Hourglass,
  Flower2,
  DoorOpen,
} from "lucide-react";
import { approach } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { IrisDivider } from "@/components/brand/IrisDivider";

// Ícones na ordem do conteúdo (approach.duo / approach.pillars)
const duoIcons = [HandHeart, Layers];
const pillarIcons = [BookOpen, Hourglass, Flower2, DoorOpen];

export function Approach() {
  return (
    <Section
      id="abordagem"
      tone="cream"
      aria-labelledby="approach-title"
      className="bg-[#F5ECDD]"
    >
      <Reveal className="max-w-2xl">
        <Eyebrow>A abordagem</Eyebrow>
        <h2
          id="approach-title"
          className="mt-4 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-light leading-tight"
        >
          {approach.title}
        </h2>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
          {approach.intro}
        </p>
      </Reveal>

      {/* Duo de anti-posicionamento (fica na frente do divisor) */}
      <Reveal stagger className="relative z-10 mt-12 grid gap-6 md:grid-cols-2">
        {approach.duo.map((d, i) => {
          const Icon = duoIcons[i] ?? HandHeart;
          return (
            <RevealItem key={d.title} as="article">
              <Card className="h-full border-l-4 border-l-ochre/70">
                <span
                  aria-hidden="true"
                  className="mb-4 grid size-12 place-items-center rounded-full bg-cream text-teal ring-1 ring-ochre/25"
                >
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-2xl font-normal text-teal">
                  {d.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/85">{d.body}</p>
              </Card>
            </RevealItem>
          );
        })}
      </Reveal>

      {/* Divisor de marca — íris grande; topo some atrás das caixas (z-0) */}
      <IrisDivider className="relative z-0 -mt-6 lg:-mt-12" />

      {/* Pilares — sobem sobre o creme vazio de baixo do divisor */}
      <Reveal
        stagger
        className="relative z-[1] -mt-4 grid gap-5 sm:grid-cols-2 lg:-mt-10 lg:grid-cols-4"
      >
        {approach.pillars.map((p, i) => {
          const Icon = pillarIcons[i] ?? Flower2;
          return (
            <RevealItem key={p.n} as="article">
              <div className="group h-full rounded-organic bg-paper/70 p-6 ring-1 ring-ink/8 transition-all duration-300 ease-warm hover:-translate-y-1 hover:shadow-warm">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-cream text-teal ring-1 ring-ochre/25"
                  >
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-light text-terracotta"
                  >
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-normal text-teal">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft">
                  {p.body}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
