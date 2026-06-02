/**
 * Item de FAQ acessível usando <details>/<summary> nativo:
 * teclado e leitores de tela de graça, zero JS. (docs/design-system.md §FAQ)
 */
import { cn } from "@/lib/cn";

export function Details({
  question,
  answer,
  className,
}: {
  question: string;
  answer: string;
  className?: string;
}) {
  return (
    <details
      className={cn(
        "group border-b border-ink/12 py-2 [&_summary::-webkit-details-marker]:hidden",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-teal transition-colors duration-300 hover:text-tealDeep focus-visible:outline-2">
        <span className="font-display font-normal">{question}</span>
        <span
          aria-hidden="true"
          className="grid size-7 shrink-0 place-items-center rounded-full ring-1 ring-ochre/50 text-ochre transition-transform duration-300 ease-warm group-open:rotate-45"
        >
          {/* sinal + que vira × ao abrir */}
          <svg viewBox="0 0 14 14" className="size-3.5" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </summary>
      <div className="overflow-hidden pb-5 pr-10">
        <p className="max-w-prose leading-relaxed text-ink/85">{answer}</p>
      </div>
    </details>
  );
}
