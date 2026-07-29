"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { isLinkReady } from "@/lib/links";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar o menu mobile com Escape e devolver o foco ao botão (WCAG 2.1.2)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-500 ease-warm",
        scrolled
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        {/* Marca */}
        <Link
          href="/#top"
          className="group flex items-center focus-visible:outline-2"
          aria-label="Início"
        >
          <Image
            src="/LOGOIRIS.png"
            alt="Logo"
            width={1536}
            height={1024}
            priority
            sizes="128px"
            className="h-14 w-auto transition-transform duration-500 ease-warm group-hover:scale-[1.03] sm:h-16"
          />
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-6">
            {nav.map((item) => {
              const isRoute = item.href.startsWith("/") && !item.href.includes("#");
              const cls =
                "link-grow text-sm font-medium text-ink/80 hover:text-teal";
              return (
                <li key={item.href}>
                  {isRoute ? (
                    <Link href={item.href} className={cls}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={cls}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/#contato"
            variant="primary"
            className="hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Agendar
          </Button>

          {/* Toggle mobile */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-full text-teal ring-1 ring-ink/15 focus-visible:outline-2 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Nav mobile */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Menu de navegação"
          className="border-t border-ink/10 bg-cream/95 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => {
              const isRoute = item.href.startsWith("/") && !item.href.includes("#");
              const cls =
                "block border-b border-ink/8 py-3.5 text-base font-medium text-ink/85 hover:text-teal";
              return (
                <li key={item.href}>
                  {isRoute ? (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cls}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cls}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
            <li className="pt-4">
              <Button
                href={site.whatsapp}
                external={isLinkReady(site.whatsapp)}
                variant="primary"
                className="w-full"
              >
                Agendar primeira conversa
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
