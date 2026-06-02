import { cn } from "@/lib/cn";

type Tone = "cream" | "creamDeep" | "teal";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  creamDeep: "bg-creamDeep text-ink",
  teal: "bg-tealDeep text-cream",
};

export function Section({
  id,
  tone = "cream",
  className,
  children,
  bgImage,
  bgClassName,
  bgPosition = "center",
  bgSize = "cover",
  "aria-labelledby": labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
  bgClassName?: string;
  bgPosition?: React.CSSProperties["backgroundPosition"];
  bgSize?: React.CSSProperties["backgroundSize"];
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-28",
        tones[tone],
        className,
      )}
    >
      {bgImage && (
        <div
          aria-hidden="true"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: bgPosition,
            backgroundSize: bgSize,
          }}
          className={cn(
            "pointer-events-none absolute inset-0 select-none bg-no-repeat",
            bgClassName,
          )}
        />
      )}
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
