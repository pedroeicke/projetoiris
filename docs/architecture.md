# docs/architecture.md — íris

## Stack
- **Next.js (App Router)** + **TypeScript** (strict).
- **Tailwind CSS** com tema custom (tokens em `docs/design-system.md`). Sem libs de UI genéricas que imponham estética; usar **Radix primitives** só quando precisar de acessibilidade de baixo nível (dialog/accordion) com estilo 100% custom.
- **Motion** (`motion`/Framer) para animação. `next/font/google` para Fraunces + Mulish (self-host).
- **Imagens:** `next/image` (+ `sharp`), formatos AVIF/WebP, máscaras orgânicas via CSS/SVG.
- **Ícones/ilustração:** SVG próprio (íris/folhas vetorizadas). Evitar packs genéricos.

## Estrutura de pastas
```
app/
  layout.tsx        # fontes, metadata base, grão/tema
  page.tsx          # landing (compõe as sections)
  globals.css       # tokens CSS vars + base
  sitemap.ts robots.ts opengraph-image.tsx
components/
  layout/    (Header, Footer, Nav)
  sections/  (Hero, Concept, Approach, Audience, Founder, Care, Faq, Contact)
  ui/        (Button, Card, Reveal, Details)
  brand/     (Leaf, LightSliver)  # SVGs · logo real em public/LOGOIRIS(B).png
lib/         (seo.ts, motion presets, content loader)
content/     (copy em TS/MDX, fonte: docs/content.md)
public/      (fotos, og)
```

## Convenções
- Server Components por padrão; `"use client"` só onde há interação/motion.
- Tokens só via tema Tailwind / CSS vars — nada de hex solto no JSX.
- Componentes pequenos e nomeados; um arquivo por componente.
- `prefers-reduced-motion` respeitado em todo motion.
- Conteúdo separado do markup (`content/`), para facilitar edição e futuro CMS.

## Dependências base
`next react react-dom typescript tailwindcss postcss autoprefixer motion sharp clsx` (+ `@radix-ui/react-*` conforme necessidade).

## Scripts
`dev` / `build` / `start` / `lint` / `typecheck`. CI roda `lint` + `typecheck` + `build`.

## Agendamento (integração)
Fase atual: links externos (WhatsApp `wa.me`, Doctoralia). Fase 2: avaliar **Cal.com** embed ou agenda própria. Sem formulário que colete dado sensível sem necessidade (LGPD).

## Performance (orçamento)
LCP < 2.5s · CLS < 0.1 · INP < 200ms · JS inicial enxuto (preferir RSC, lazy nas seções abaixo da dobra) · fontes com `display:swap` e subset latin.

## Acessibilidade
WCAG 2.2 AA: semântica, landmarks, foco visível, contraste, teclado, `alt` significativo, `lang="pt-BR"`.

## Deploy / infra
Vercel (pt-BR, região br/gru). Analytics privacy-friendly (Plausible/Umami), sem cookies invasivos. Domínio: `[ definir ]`.
