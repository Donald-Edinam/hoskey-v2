import React from "react";

export type SectionVariant = "default" | "card" | "dark" | "flush";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  variant = "default",
  children,
  className = "",
  id,
  ...props
}: SectionProps) {
  const variantClass = {
    default: "sec",
    card: "sec sec--card",
    dark: "sec sec--dark",
    flush: "sec--flush",
  }[variant];

  return (
    <section id={id} className={`${variantClass} ${className}`} {...props}>
      {children}
    </section>
  );
}
