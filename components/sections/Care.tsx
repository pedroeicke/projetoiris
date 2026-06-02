import { MapPin, Clock, HeartHandshake } from "lucide-react";
import { care } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

// Ícone por item (mesma ordem de care.items: Onde, Sessões, Política de acesso)
const careIcons = [MapPin, Clock, HeartHandshake];

export function Care() {
  return (
    <Section
      id="atendimento"
      tone="creamDeep"
      aria-labelledby="care-title"
    >
      <Reveal className="max-w-2xl">
        <Eyebrow>Atendimento</Eyebrow>
        <h2
          id="care-title"
          className="mt-4 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-light leading-tight"
        >
          {care.title}
        </h2>
      </Reveal>

      <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {care.items.map((item, i) => {
          const Icon = careIcons[i] ?? MapPin;
          return (
            <RevealItem key={item.label} as="article">
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="mb-4 grid size-12 place-items-center rounded-full bg-cream text-teal ring-1 ring-ochre/25"
                >
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-terracotta">
                  {item.label}
                </p>
                <p className="mt-2 text-lg leading-relaxed text-ink/90">
                  {item.value}
                </p>
              </Card>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
