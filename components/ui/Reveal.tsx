"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { revealContainer, revealItem, fadeUp } from "@/lib/motion";

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  header: motion.header,
  article: motion.article,
} as const;

type Tag = keyof typeof MOTION_TAGS;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** quando true, escalona a revelação dos filhos diretos (use <Reveal.Item />) */
  stagger?: boolean;
  as?: Tag;
  variants?: Variants;
};

/**
 * Reveal por IntersectionObserver. Respeita prefers-reduced-motion:
 * quando reduzido, renderiza estático (sem fade/translate).
 */
export function Reveal({
  children,
  className,
  stagger = false,
  as = "div",
  variants,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();

  if (reduce) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const MotionTag = MOTION_TAGS[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants ?? (stagger ? revealContainer : fadeUp)}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Filho escalonado. Exportado como componente próprio (não como `Reveal.Item`):
 * acessar propriedade estática de um client component a partir de um Server
 * Component falha na fronteira RSC (a referência não carrega o membro).
 */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }
  const MotionTag = MOTION_TAGS[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={revealItem}>
      {children}
    </MotionTag>
  );
}
