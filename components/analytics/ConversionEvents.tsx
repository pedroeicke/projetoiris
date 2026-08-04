"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/gtag";

/**
 * Escuta global de cliques em CTAs marcados com `data-conversion-event`
 * (WhatsApp, Doctoralia). Um listener só, em vez de onClick espalhado —
 * qualquer link novo com esses atributos passa a ser medido sem alterar código.
 */
export function ConversionEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("[data-conversion-event]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const eventName = link.dataset.conversionEvent;
      if (!eventName) return;

      const location = link.dataset.conversionLocation;
      const method = link.dataset.conversionMethod;

      // dataLayer/CustomEvent: úteis para GTM ou depuração no console
      const payload: Record<string, string> = {
        event: eventName,
        link_url: link.href,
      };
      if (location) payload.conversion_location = location;
      if (method) payload.conversion_method = method;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
      window.dispatchEvent(
        new CustomEvent("iris:conversion-click", { detail: payload }),
      );

      /**
       * Só adiamos a navegação quando ela aconteceria na mesma aba. Em links
       * `target="_blank"` (todos os CTAs de WhatsApp hoje) reabrir por script
       * cairia no bloqueador de pop-up, porque o clique já teria sido
       * consumido — pior que a eventual subcontagem que estamos evitando.
       */
      const opensNewTab =
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.hasAttribute("download");

      if (opensNewTab) {
        trackConversion(eventName, { location, method, url: link.href });
        return;
      }

      const href = link.href;
      event.preventDefault();
      trackConversion(eventName, {
        location,
        method,
        url: href,
        onSettled: () => {
          window.location.href = href;
        },
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
