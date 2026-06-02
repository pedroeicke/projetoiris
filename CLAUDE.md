# CLAUDE.md — íris · orquestração do projeto

> Este arquivo é lido no início de toda sessão. A **sessão principal age como orquestradora**: ela planeja, delega aos subagentes especialistas (`.claude/agents/`) e integra o resultado. Subagentes NÃO se invocam entre si — quem coordena é esta sessão.

---

## 1. O que estamos construindo

Site institucional da **íris** — clínica de psicologia especializada em **gênero, sexualidade e identidade**. Stack: **Next.js (App Router) + TypeScript + Tailwind + Motion**. Público: adolescentes (12+) e adultos, comunidade LGBTQIA+ no centro mas não exclusivamente.

**Estrela-guia de design:** *aconchegante e orgânico*. A pessoa tem que sentir que **chegou numa casa** — creme quente, luz natural, ilustração botânica, textura de papel, muito ar, motion suave. Editorial e com substância, **nunca** template genérico, arco-íris, contador de números ou frase de autoajuda.

**Fase (contexto de negócio):** este é o site da marca íris (lançamento previsto set–out/2026), construído em paralelo enquanto a fundadora atende solo. Não precisa ir ao ar amanhã — precisa ficar excelente.

---

## 2. Fonte da verdade (LER ANTES DE AGIR)

Todo agente lê os docs relevantes antes de produzir. Nunca improvise sobre marca, cor, copy ou stack:

- `docs/brand.md` — nome, conceito, posicionamento, tom de voz, personas, o que evitar
- `docs/design-system.md` — tokens (cor, tipo, espaço, motion), princípios orgânicos, ilustração, imagem
- `docs/content.md` — arquitetura de informação, copy de cada seção, FAQ
- `docs/architecture.md` — stack, estrutura de pastas, convenções, deploy
- `docs/seo.md` — palavras-chave, metadados, schema, SEO local

---

## 3. O time (quando delegar)

| Subagente | Aciona quando |
|---|---|
| `ux-architect` | definir IA, fluxos, jornada de agendamento, hierarquia, wireframe-spec |
| `ui-designer` | traduzir design-system em layout/composição, motion, uso de ilustração, specs visuais |
| `nextjs-engineer` | implementar componentes/páginas em Next.js, performance, build |
| `content-writer` | escrever/revisar qualquer texto no tom da marca, FAQ, blog, conformidade CFP |
| `seo-specialist` | metadados, schema, palavras-chave, SEO local, Core Web Vitals |
| `qa-accessibility` | auditoria de acessibilidade (WCAG AA), responsivo, performance, consistência de marca |

Delegação explícita: `Use the ui-designer subagent on a seção hero`. Pode rodar especialistas em paralelo quando as tarefas são independentes (ex.: `seo-specialist` + `content-writer`).

---

## 4. Fluxo de orquestração

1. **Descoberta** → confirmar escopo da rodada com o humano (Pedro).
2. **IA & jornada** (`ux-architect`) → estrutura e fluxo aprovados antes de qualquer pixel.
3. **Conteúdo** (`content-writer`) → copy real antes do design (design serve o conteúdo, não o contrário).
4. **Design system → UI** (`ui-designer`) → specs visuais e composição por seção.
5. **Implementação** (`nextjs-engineer`) → código seguindo tokens e specs.
6. **SEO** (`seo-specialist`) → metadados/schema integrados, não colados no fim.
7. **QA** (`qa-accessibility`) → audita; volta pro engineer/designer corrigir.
8. **Polimento** → micro-interações, detalhes, revisão de marca.

**Checkpoints humanos (HITL):** depois de IA, depois de copy, e depois do primeiro corte visual de cada seção. Não avance fases sem aprovação nesses pontos.

---

## 5. Guardrails inegociáveis (valem pra todos os agentes)

- **Marca:** sem arco-íris/bandeira, sem glitter, sem contador de stats, sem frase motivacional, sem ilustração "pessoinhas diversas" (Corporate Memphis), sem banco de imagem genérico. Acento de **"íris"** sempre preservado.
- **Conformidade CFP:** nada de promessa de resultado, sensacionalismo ou superlativos clínicos; exibir CRP onde couber; linguagem sóbria.
- **Acessibilidade:** WCAG 2.2 AA. Contraste, foco visível, navegação por teclado, `prefers-reduced-motion` respeitado.
- **Performance:** orçamento de Core Web Vitals (ver `docs/architecture.md`). LCP < 2.5s, CLS < 0.1.
- **Honestidade:** comunicar o que a clínica entrega hoje vs. o que está em construção (ex.: laudos/afirmação de gênero = em breve).

## 6. Definition of Done (rodada)
Código compila e passa no lint/typecheck · responsivo (360→1440) · QA de a11y sem erro crítico · tom de voz e tokens conferidos · sem placeholder esquecido sem aviso.
