/**
 * Sliver de luz refratada (amber→salmon→blush→sky) — assinatura espectral.
 * Uso raríssimo: abertura, faixas escuras, divisores. Nunca como base (brand.md).
 */
type Props = {
  className?: string;
  /** id único do gradiente — evita colisão quando há várias instâncias no DOM */
  id?: string;
};

export function LightSliver({ className, id = "iris-spectrum" }: Props) {
  const gradientId = `${id}-grad`;
  return (
    <svg
      viewBox="0 0 320 12"
      fill="none"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="320"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--amber)" />
          <stop offset="0.4" stopColor="var(--salmon)" />
          <stop offset="0.7" stopColor="var(--blush)" />
          <stop offset="1" stopColor="var(--sky)" />
        </linearGradient>
      </defs>
      <rect width="320" height="3" y="4.5" rx="1.5" fill={`url(#${gradientId})`} />
    </svg>
  );
}
