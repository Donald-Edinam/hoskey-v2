import React from "react";
import Link from "next/link";

export interface MarkProps {
  className?: string;
  href?: string;
}

export function Mark({ className = "", href = "/" }: MarkProps) {
  return (
    <Link
      href={href}
      className={`mark ${className}`}
      aria-label="Hoskey Production, home"
    >
      H
    </Link>
  );
}
