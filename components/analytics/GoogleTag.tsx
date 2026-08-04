import Script from "next/script";
import { GOOGLE_ADS_ID } from "@/lib/gtag";

/**
 * Carrega o gtag.js apenas para medir a conversão do Google Ads.
 *
 * `afterInteractive`: sai do caminho crítico do LCP, mas carrega cedo o
 * suficiente para registrar os cliques. Sem ID configurado, não renderiza nada
 * — nenhum script de terceiro entra na página.
 *
 * Os dois `allow_*: false` desativam, na origem, os sinais de publicidade
 * personalizada e o Google Signals (listas de remarketing / cross-device).
 * Num site de psicoterapia afirmativa, personalização por inferência de saúde
 * ou identidade de gênero é vedada pelas políticas do Google — e o travamento
 * fica aqui, não só no console, para não depender de ninguém lembrar.
 */
export function GoogleTag() {
  if (!GOOGLE_ADS_ID) return null;

  return (
    <>
      <Script
        id="google-tag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {[
          "window.dataLayer = window.dataLayer || [];",
          "function gtag(){dataLayer.push(arguments);}",
          "window.gtag = gtag;",
          "gtag('js', new Date());",
          `gtag('config', '${GOOGLE_ADS_ID}', {`,
          "  allow_google_signals: false,",
          "  allow_ad_personalization_signals: false",
          "});",
        ].join("\n")}
      </Script>
    </>
  );
}
