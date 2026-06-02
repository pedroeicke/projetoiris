# docs/seo.md — íris

## Estratégia
Nicho de baixa concorrência qualificada (psicologia de gênero/sexualidade em Floripa + online). Combinar **SEO local** (Floripa) + **nacional** (online) + **autoridade temática** (conteúdo derivado da pesquisa da fundadora).

## Palavras-chave
**Primárias:** psicólogo gênero · psicoterapia LGBTQIA+ · psicólogo para pessoas trans · terapia gênero e sexualidade.
**Locais:** psicólogo LGBT Florianópolis · terapia LGBTQIA+ Florianópolis · psicólogo gênero Floripa.
**Online/nacionais:** terapia online gênero · psicólogo trans online · psicoterapia afirmativa online.
**Long-tail/conteúdo:** "terapia afirmativa o que é", "psicólogo que não patologiza", "terapia para pessoa trans sem pressa", "destransição", "saúde mental população LGBTQIA+".
> Evitar keyword stuffing e qualquer promessa clínica (CFP).

## Metadados (App Router Metadata API)
- `title` template: `%s · íris` | home: `íris — psicologia para gênero, sexualidade e identidade`
- `description` ≤ 155 car., humana, com 1–2 keywords naturais.
- OpenGraph + Twitter card com `opengraph-image` (marca + frase, paleta da marca).
- `canonical`, `lang=pt-BR`, `robots` index/follow.

## Dados estruturados (JSON-LD)
- `MedicalBusiness` / `Psychologist` + `LocalBusiness`: `name: íris`, `founder: Carolina Franco Brito`, `areaServed` (Florianópolis + Brasil/online), `medicalSpecialty`, `priceRange`, `address`, `sameAs` (Instagram, Doctoralia).
- `FAQPage` na seção de FAQ.
- `Person` para a fundadora (com `alumniOf` UFSC/UFF, sem inflar).

## SEO local
Google Business Profile (categoria Psicólogo), NAP consistente, reviews via Doctoralia, mesma marca/CRP em todos os perfis.

## Conteúdo / blog (autoridade — fase 2)
Cada artigo/paper da fundadora vira 1 post acessível (ex.: destransição, despatologização, terapia afirmativa). Linka termos long-tail. Tom = brand.md (substância, não autoajuda).

## Técnico
`sitemap.ts` + `robots.ts` · imagens otimizadas com `alt` · headings hierárquicos (um H1) · Core Web Vitals dentro do orçamento (ver architecture.md) · sem conteúdo duplicado.

## Entregáveis do `seo-specialist`
Objeto `metadata` por rota · componente(s) JSON-LD · brief de keywords por página · checklist de SEO local · revisão de CWV pós-build.
