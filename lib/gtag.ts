/**
 * Google tag (gtag.js) — apenas Google Ads, apenas conversão.
 *
 * Os IDs vêm de variáveis de ambiente públicas. Sem elas, nada é carregado e
 * nenhum evento é enviado — o site funciona normalmente, só não mede.
 *
 * ─── RESTRIÇÕES DESTA CONTA (não são preferência, são política) ───────────
 * O Google proíbe publicidade personalizada baseada em inferência de saúde ou
 * identidade de gênero. Um site de psicoterapia afirmativa é exatamente o caso
 * vedado. Por isso, nesta implementação:
 *
 *   1. NÃO ativar remarketing / listas de público (nem aqui, nem no console).
 *   2. NÃO ativar conversões aprimoradas — nenhum dado pessoal (e-mail,
 *      telefone), nem hasheado, é enviado ao Google.
 *   3. Contagem da ação de conversão = "Uma", não "Todas" (console do Ads).
 *      Uma pessoa que clica no botão flutuante e depois no do rodapé é um
 *      lead, não dois.
 *
 * Os itens 1 e 2 estão travados também em código, abaixo, via
 * `allow_google_signals` / `allow_ad_personalization_signals`.
 *
 * Onde pegar cada valor no Google Ads:
 *   Ferramentas > Conversões > [ação] > "Configurar a tag"
 *   - ID de conversão .......... AW-XXXXXXXXXX  → NEXT_PUBLIC_GOOGLE_ADS_ID
 *   - Rótulo de conversão ...... abcDEFghiJKL   → NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
 */

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";

/** `send_to` da ação de conversão (AW-XXXXXXXXXX/RÓTULO). */
export const CONVERSION_SEND_TO =
  GOOGLE_ADS_ID && GOOGLE_ADS_CONVERSION_LABEL
    ? `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`
    : "";

/** Tempo máximo de espera pelo envio antes de liberar a navegação (ms). */
export const CONVERSION_TIMEOUT_MS = 300;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConversionPayload = {
  /** de onde partiu o clique (hero, footer, botão flutuante…) */
  location?: string;
  /** canal do contato (whatsapp, doctoralia…) */
  method?: string;
  /** URL de destino do link */
  url?: string;
  /**
   * Chamado quando o envio termina — ou quando estoura o timeout.
   * Usado para liberar a navegação em links que abrem na mesma aba.
   * Garantidamente chamado uma única vez.
   */
  onSettled?: () => void;
};

/**
 * Dispara a conversão do Google Ads.
 *
 * Transporte por `beacon`: no mobile, o `wa.me` costuma sequestrar a navegação
 * para abrir o app e a página é congelada/descartada no meio do envio. O
 * `navigator.sendBeacon` é feito exatamente para sobreviver a isso — sem ele,
 * há subcontagem no mobile, que é a maior parte do tráfego.
 *
 * `event_callback` + timeout de 300ms cobrem o caso de link na mesma aba, onde
 * a navegação precisa ser adiada até o envio sair.
 */
export function trackConversion(
  _eventName: string,
  { location, method, onSettled }: ConversionPayload = {},
) {
  // Sem gtag ou sem ação configurada: libera a navegação na hora.
  if (
    typeof window === "undefined" ||
    typeof window.gtag !== "function" ||
    !CONVERSION_SEND_TO
  ) {
    onSettled?.();
    return;
  }

  let settled = false;
  const settle = () => {
    if (settled) return;
    settled = true;
    onSettled?.();
  };

  window.gtag("event", "conversion", {
    send_to: CONVERSION_SEND_TO,
    conversion_location: location,
    conversion_method: method,
    transport_type: "beacon",
    event_callback: settle,
    event_timeout: CONVERSION_TIMEOUT_MS,
  });

  // Rede de segurança: se o callback não vier, não seguramos o clique.
  window.setTimeout(settle, CONVERSION_TIMEOUT_MS);
}
