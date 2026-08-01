import { site } from "@/content/site";

/**
 * Botão flutuante de WhatsApp — leva à conversa com a Carolina já com
 * mensagem pré-preenchida. Estilizado na marca (petróleo + acento ocre),
 * não no verde genérico. Acessível: link com rótulo, alvo ≥ 44px.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar uma conversa pelo WhatsApp"
      data-conversion-event="generate_lead"
      data-conversion-location="floating_whatsapp"
      data-conversion-method="whatsapp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-teal text-paper shadow-warm-lg ring-1 ring-tealDeep/40 transition-all duration-300 ease-warm hover:-translate-y-0.5 hover:bg-tealDeep focus-visible:outline-paper sm:bottom-7 sm:right-7"
    >
      <span className="grid size-14 place-items-center">
        <WhatsAppGlyph className="size-7" />
      </span>
      {/* rótulo que cresce no hover/foco (desktop) */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-warm group-hover:max-w-[12rem] group-hover:pr-5 group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:pr-5 group-focus-visible:opacity-100">
        Fale com a gente
      </span>
    </a>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.67.44 3.3 1.27 4.74L2.5 21.5l4.9-1.28a9.46 9.46 0 0 0 4.64 1.2h.01c5.24 0 9.5-4.26 9.5-9.5 0-2.54-.99-4.92-2.78-6.72A9.43 9.43 0 0 0 12.04 2.5Zm0 17.07h-.01a7.87 7.87 0 0 1-4-1.1l-.29-.17-2.9.76.78-2.83-.19-.29a7.86 7.86 0 0 1-1.2-4.2c0-4.36 3.54-7.9 7.91-7.9 2.11 0 4.09.82 5.58 2.31a7.84 7.84 0 0 1 2.31 5.6c0 4.36-3.55 7.9-7.9 7.9Z" />
    </svg>
  );
}
