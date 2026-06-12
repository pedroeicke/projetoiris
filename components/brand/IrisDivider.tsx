import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Divisor de marca: Íris horizontal. O fundo da seção Abordagem é a mesma cor
 * do creme da arte (#F5EDDD), então as laterais somem. Topo/base recebem uma
 * máscara em gradiente que esfuma a borda, dissolvendo o retângulo da imagem.
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
        className="h-auto w-full max-w-3xl [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_14%,#000_86%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_14%,#000_86%,transparent_100%)]"
      />
    </div>
  );
}
