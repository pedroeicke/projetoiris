/**
 * Presets de motion compartilhados (fonte: docs/design-system.md).
 * Easing padrão cubic-bezier(.22,.61,.36,1); durações 250–800ms.
 * O respeito a prefers-reduced-motion é tratado no componente <Reveal />.
 */
import type { Variants, Transition } from "motion/react";

export const EASE_WARM: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const transitionWarm: Transition = {
  duration: 0.7,
  ease: EASE_WARM,
};

/** fade + translateY(24px), com stagger nos filhos. */
export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionWarm,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: transitionWarm },
};
