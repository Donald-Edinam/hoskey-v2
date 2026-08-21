import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface MarkProps {
  className?: string;
  href?: string;
}

export function Mark({ className = "", href = "/" }: MarkProps) {
  return (
    <Link
      href={href}
      className={`mark relative flex items-center justify-center ${className}`}
      aria-label="Hoskey Production, home"
    >
      <Image
        src="/logo-mark.svg"
        alt="Hoskey Production"
        width={44}
        height={44}
        className="w-full h-full object-contain"
        priority
      />
    </Link>
  );
}
