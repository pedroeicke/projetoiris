# íris — pacote de orquestração (Next.js + agentes)

Time de agentes para construir o site da **íris** com Claude Code: um orquestrador (a sessão principal) que comanda especialistas de UX, UI, Next.js, conteúdo, SEO e QA, todos lendo a mesma fonte da verdade.

## Estrutura
```
CLAUDE.md                      # cérebro do orquestrador (lido em toda sessão)
.claude/agents/                # subagentes especialistas
  ux-architect.md  ui-designer.md  nextjs-engineer.md
  content-writer.md  seo-specialist.md  qa-accessibility.md
docs/                          # fonte da verdade (todos os agentes leem)
  brand.md  design-system.md  content.md  architecture.md  seo.md
```

## Como usar (Claude Code)
1. Coloque estes arquivos na **raiz do repositório** do projeto Next.js (o `CLAUDE.md` e as pastas `.claude/` e `docs/`).
2. Rode `/agents` para confirmar que os seis subagentes aparecem (escopo *project*).
3. Inicie a sessão e descreva a rodada. O orquestrador (sessão principal) delega seguindo o fluxo do `CLAUDE.md`. Você também pode chamar explicitamente:
   - `Use the ux-architect subagent para estruturar a landing`
   - `Use the ui-designer subagent na seção hero`
   - `Use the nextjs-engineer subagent para implementar o Header`
4. **Checkpoints humanos:** aprove após a IA, após a copy e após o primeiro corte visual de cada seção.

## Ordem recomendada da 1ª rodada
IA (`ux-architect`) → copy (`content-writer`) → design system aplicado/specs (`ui-designer`) → scaffold + seções (`nextjs-engineer`) → metadados/schema (`seo-specialist`) → auditoria (`qa-accessibility`) → polimento.

## Outros runners (Cursor etc.)
Os subagentes são Markdown portável: use o corpo de cada `.md` como system prompt do papel correspondente e mantenha `docs/` como contexto compartilhado. O `CLAUDE.md` vira o briefing do orquestrador.

## Regras que valem pra todos
Veja `CLAUDE.md` §5 (guardrails) e `docs/brand.md` (lista negra). Resumo: aconchegante e orgânico; sem arco-íris/contador/autoajuda/clichê; conformidade CFP; WCAG AA; acento de "íris" sempre.

> Observação: o HTML de validação anterior era um protótipo. A meta aqui é elevar para algo realmente acolhedor e orgânico — ilustração botânica vetorizada, máscaras orgânicas, textura, luz com parallax, motion suave.
