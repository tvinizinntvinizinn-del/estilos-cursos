import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "whatsapp";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  /** Abre em nova aba (WhatsApp). O checkout abre na mesma aba. */
  newTab?: boolean;
  ariaLabel?: string;
};

export function LinkButton({ href, children, variant = "primary", size = "md", className = "", newTab = false, ariaLabel }: Props) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`btn btn-${variant} ${size === "lg" ? "btn-lg" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
