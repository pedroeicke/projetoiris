import { cn } from "@/lib/cn";

/** Card em papel, raio orgânico, sombra quente. */
export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-organic bg-paper p-7 shadow-warm ring-1 ring-ink/5 transition-transform duration-300 ease-warm sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
