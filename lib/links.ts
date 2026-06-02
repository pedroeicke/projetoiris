/**
 * Pré-lançamento: alguns links são placeholders (docs/content.md usa `[ … ]`).
 * Evita CTAs quebrados — abrir aba em branco para "#" ou WhatsApp sem número.
 */
export function isLinkReady(href: string): boolean {
  if (!href) return false;
  if (href.includes("[")) return false; // placeholder textual
  if (href === "#" || href === "") return false;
  if (href === "https://wa.me/55") return false; // WhatsApp sem número
  return true;
}
