import Image from "next/image";
import Link from "next/link";
import { footer, site, generoPage } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tealDeep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca + frase */}
          <div>
            <Image
              src="/LOGOIRISB.png"
              alt="Íris"
              width={1536}
              height={1024}
              sizes="240px"
              className="h-16 w-auto sm:h-20"
            />
            <p className="mt-4 max-w-xs font-display text-lg italic leading-snug text-cream/85">
              “{footer.quote}”
            </p>
          </div>

          {/* Sobre */}
          <div className="text-sm leading-relaxed text-cream/80">
            <p className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-amber">
              A clínica
            </p>
            <p>{footer.tagline}</p>
            <p className="mt-2">{site.location}</p>
            <p className="mt-2">
              {site.founder} · {site.crp}
            </p>
            <p className="mt-3">
              <Link
                href={generoPage.slug}
                className="link-grow inline-block py-1 !text-cream hover:!text-amber focus-visible:outline-paper"
              >
                Gênero, sexualidade e cuidado psicológico
              </Link>
            </p>
          </div>

          {/* Contato */}
          <div className="text-sm leading-relaxed text-cream/80">
            <p className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-amber">
              Contato
            </p>
            <ul className="space-y-1">
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow inline-block py-2 !text-cream hover:!text-amber focus-visible:outline-paper"
                >
                  WhatsApp
                </a>
              </li>
              {/* e-mail e Instagram entram depois (placeholders pendentes) */}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Íris · {site.founder}. Todos os
            direitos reservados.
          </p>
          <p>
            Atendimento psicológico conforme as diretrizes do Conselho Federal
            de Psicologia.
          </p>
        </div>
      </div>
    </footer>
  );
}
