# docs/design-system.md — íris

## Norte estético
**Clínica-casa brasileira:** aconchegante, orgânica, editorial, com luz natural entrando. Sensorial e calorosa, com respiração (muito ar). Refinamento vem da execução, não do enfeite. O "feio" a evitar está mapeado: template Wix/Elementor, arco-íris, contador, autoajuda.

---

## Cores (tokens + hierarquia)
Use como CSS vars / tema do Tailwind. **Hierarquia importa:** âncora domina, secundárias aquecem, espectral é pontual.

**Âncora**
- `--cream` `#F3E8D5` (fundo base) · `--cream-deep` `#EEDFC6` (seções alternadas) · `--paper` `#FBF5EA` (cards)
- `--teal` `#0A5A5E` (tinta primária, títulos) · `--teal-deep` `#06474B`
- `--ink` `#37322A` (corpo de texto) · `--ink-soft` `#6A6356` (texto secundário)
- `--ochre` `#C98A3C` (acento principal: links hover, barba da íris, fios)

**Secundárias quentes (calor + vegetal)**
- `--terracotta` `#BE5F3C` · `--sage` `#A6A06B` · `--olive` `#76713A` · `--salmon` `#E0A088`

**Acento espectral (SÓ momentos de conceito — abertura, faixas escuras, divisores; nunca como base)**
- `--amber` `#E8C07A` · `--sky` `#9FB6BE` · `--blush` `#E6A8B0`

Regra: texto de corpo em `--ink` sobre creme. Títulos em `--teal`. `--ochre` é acento, **não** corpo de texto (contraste insuficiente).

---

## Tipografia
- **Display/títulos:** **Fraunces** (variável; explorar eixos `opsz` e `SOFT`/`wght` baixos para calor editorial). Itálico da Fraunces para pull-quotes e ênfases.
- **Corpo/UI:** humanista de boa legibilidade — **Mulish** (ou Hanken Grotesk). Carregar via `next/font/google` (self-host, sem CLS).
- Escala fluida (clamp): h1 2.6→4.5rem (peso 300) · h2 1.9→2.9rem · h3 1.4rem · corpo 1.05rem/1.65 · eyebrow 0.72rem caixa-alta `letter-spacing .18em` em terracota.
- **Proibido:** Inter, Arial, system-ui como fonte de marca; sans geométrico fofo.

---

## Forma, espaço, profundidade
- **Espaçamento:** escala generosa (8/12/16/24/32/48/64/92/120). Seções respiram (`padding-block` ~92px desktop).
- **Raios:** orgânicos e amplos (cards 16–20px; imagens com **máscaras orgânicas** — arcos, blobs suaves assimétricos, não retângulos secos).
- **Sombras quentes:** tingidas de marrom/petróleo, nunca cinza neutro (`box-shadow:0 18px 34px -22px rgba(55,50,42,.4)`).
- **Textura:** grão de papel sutil global (`feTurbulence` SVG, opacity ~.05) para tirar a "frieza de tela".
- **Luz:** gradiente radial âmbar quente ("sol entrando") em heros e faixas; *sliver* de luz refratada (amber→blush→sky) raríssimo, como assinatura.

---

## Sistema de ilustração (o que deixa orgânico)
- **Botânica de linha:** íris (flor) + folhas, no estilo aprovado (linha fina humanista, leve assimetria, barba ocre). Usar como: marca, divisores de seção, watermark de fundo, acento em cards. Vetorizar a flor aprovada — **não** usar raster do gerador.
- **Disciplina:** poucos elementos, intencionais, com ar. Nada de "confete boho" espalhado.
- **Máscaras orgânicas** para fotos (arco/pétala/blob), com leve sobreposição de elementos (grid-breaking editorial).

## Imagem / fotografia (direção)
Luz natural, tons quentes, plantas, mãos, interiores domésticos suaves, foco suave, pele real. **Evitar:** stock de "diversidade" clichê, bandeiras, escritório corporativo, sorriso de banco de imagem.

---

## Motion (Motion/Framer)
- Page-load: revelação escalonada (stagger 60–90ms), fade+translateY(24px).
- Scroll: reveal por IntersectionObserver; **parallax sutil** em elementos botânicos e na luz.
- Hover: micro-interações calorosas (sublinhado ocre que cresce, leve `translateY(-1px)` em botões/cards).
- Easing padrão `cubic-bezier(.22,.61,.36,1)`; durações 250–800ms.
- **`prefers-reduced-motion`: desligar parallax e grandes transições.**

---

## Componentes (inventário inicial)
Nav (sticky, blur, marca + menu + CTA "Agendar") · Hero (luz + flor + headline editorial) · Faixa-conceito (petróleo, spectrum rule) · Cards de anti-posicionamento (duo) · Pilares (grid) · "Para quem" (lista com marcador floral) · Fundadora (foto em máscara orgânica + bio) · Atendimento/valores (cards + bloco de acesso) · FAQ (`<details>` acessível) · Contato (CTA WhatsApp/Doctoralia) · Footer caloroso.

## Mapeamento Tailwind (theme.extend)
```js
colors:{ cream:'#F3E8D5', creamDeep:'#EEDFC6', paper:'#FBF5EA',
  teal:'#0A5A5E', tealDeep:'#06474B', ink:'#37322A', inkSoft:'#6A6356',
  ochre:'#C98A3C', terracotta:'#BE5F3C', sage:'#A6A06B', olive:'#76713A',
  salmon:'#E0A088', amber:'#E8C07A', sky:'#9FB6BE', blush:'#E6A8B0' },
fontFamily:{ display:['var(--font-fraunces)','serif'], sans:['var(--font-mulish)','system-ui'] },
borderRadius:{ organic:'20px' },
```
