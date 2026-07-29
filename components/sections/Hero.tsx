"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { EASE_WARM } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_WARM } },
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="sun-glow relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-24"
    >
      {/* mobile/tablet: imagem vertical da Íris (flor embaixo, topo livre) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#F3EBDC] bg-[url('/imgheromb.png')] bg-cover bg-bottom bg-no-repeat opacity-[0.12] lg:hidden"
      />
      {/* desktop: fundo da Íris com raios */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-[#F3EBDC] bg-[url('/fundohero.png')] bg-cover bg-center bg-no-repeat lg:block"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col lg:min-h-[38rem] lg:flex-row lg:items-center">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          className="relative z-10 w-full lg:max-w-[54%]"
        >
          <motion.div variants={reduce ? undefined : item}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={reduce ? undefined : item}
            className="mt-5 max-w-[15ch] font-display text-[clamp(2.6rem,7vw,4.5rem)] font-light leading-[1.04]"
          >
            {hero.titleLead}{" "}
            <em className="italic text-terracotta">{hero.titleEmphasis}</em>
            {hero.titleTrail}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-prose text-lg leading-relaxed text-ink/85"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href={hero.ctaPrimary.href} variant="primary">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Carolina, de pé na luz (cutout) — só no desktop; no mobile a Carol
            sai do hero (preferência da cliente). */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE_WARM, delay: 0.2 }}
          className="pointer-events-none absolute -bottom-36 -right-4 z-0 hidden h-[46rem] w-[34rem] lg:block xl:h-[48rem] xl:w-[36rem]"
        >
          <Image
            src="/carolsfnd.png"
            alt="Carolina Franco Brito, psicóloga"
            fill
            sizes="576px"
            className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(55,50,42,0.18)]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
