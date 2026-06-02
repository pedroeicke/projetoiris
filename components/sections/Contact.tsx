import { contact, site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { isLinkReady } from "@/lib/links";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="sun-glow relative overflow-hidden scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/praqueme.png')] bg-cover bg-center bg-no-repeat opacity-[0.08]"
      />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <Eyebrow>Primeiro passo</Eyebrow>
        <h2
          id="contact-title"
          className="mt-4 font-display text-[clamp(2rem,5.5vw,3.2rem)] font-light leading-tight"
        >
          {contact.title}
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
          {contact.sub}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={site.whatsapp}
            external={isLinkReady(site.whatsapp)}
            variant="primary"
          >
            {contact.ctaWhatsapp}
          </Button>
          {isLinkReady(site.doctoralia) && (
            <Button href={site.doctoralia} external variant="secondary">
              {contact.ctaDoctoralia}
            </Button>
          )}
        </div>
        <p className="mt-6 text-sm text-inkSoft">
          {site.founder} · {site.crp}
        </p>
      </Reveal>
    </section>
  );
}
