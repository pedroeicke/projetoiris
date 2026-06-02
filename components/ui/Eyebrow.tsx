import { cn } from "@/lib/cn";

/** Eyebrow: caixa-alta, tracking largo, em terracota (docs/design-system.md). */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[0.72rem] font-semibold uppercase tracking-eyebrow text-terracotta",
        className,
      )}
    >
      {children}
    </span>
  );
}
