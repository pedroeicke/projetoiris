import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** links externos (WhatsApp/Doctoralia) abrem em nova aba */
  external?: boolean;
  tracking?: {
    event: string;
    location: string;
    method?: string;
  };
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 ease-warm focus-visible:outline-2 focus-visible:outline-offset-3 hover:-translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-paper shadow-warm hover:bg-tealDeep hover:shadow-warm-lg",
  secondary:
    "bg-transparent text-teal ring-1 ring-inset ring-teal/30 hover:ring-ochre hover:text-tealDeep",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  tracking,
}: Props) {
  const classes = cn(base, variants[variant], className);
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const trackingProps = tracking
    ? {
        "data-conversion-event": tracking.event,
        "data-conversion-location": tracking.location,
        "data-conversion-method": tracking.method,
      }
    : {};

  return (
    <Link href={href} className={classes} {...externalProps} {...trackingProps}>
      {children}
    </Link>
  );
}
