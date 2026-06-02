import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Divisor de marca: íris horizontal. A arte tem fundo creme igual ao da seção
 * Abordagem, então não precisa de máscara — o retângulo é invisível. O creme
 * "vazio" em cima/embaixo da arte é absorvido pela sobreposição das caixas
 * (acima) e dos pilares (abaixo), feita no componente Approach.
 */
export function IrisDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex justify-center", className)}>
      <Image
        src="/abordagem.png"
        alt=""
        width={1916}
        height={821}
        sizes="(min-width: 768px) 48rem, 92vw"
        className="h-auto w-full max-w-3xl"
      />
    </div>
  );
}
