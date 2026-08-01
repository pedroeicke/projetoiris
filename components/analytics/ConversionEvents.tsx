"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

export function ConversionEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("[data-conversion-event]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const eventName = link.dataset.conversionEvent;
      if (!eventName) return;

      const payload: Record<string, string> = {
        event: eventName,
        link_url: link.href,
      };

      if (link.dataset.conversionLocation) {
        payload.conversion_location = link.dataset.conversionLocation;
      }
      if (link.dataset.conversionMethod) {
        payload.conversion_method = link.dataset.conversionMethod;
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
      window.dispatchEvent(new CustomEvent("iris:conversion-click", { detail: payload }));
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
