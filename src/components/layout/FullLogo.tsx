import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface FullLogoProps {
  className?: string;
  href?: string;
  showTagline?: boolean;
}

export function FullLogo({ className = "", href = "/" }: FullLogoProps) {
  return (
    <Link
      href={href}
      className={`inline-block group ${className}`}
      aria-label="Hoskey Production Company Limited, home"
    >
      <Image
        src="/logo.svg"
        alt="Hoskey Production Company Limited - Capture. Create. Inspire."
        width={240}
        height={80}
        className="h-16 w-auto object-contain group-hover:scale-[1.02] transition-transform"
        priority
      />
    </Link>
  );
}
