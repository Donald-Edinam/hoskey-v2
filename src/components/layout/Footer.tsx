import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "./SocialIcons";
import { FullLogo } from "./FullLogo";
import { SITE } from "@/lib/config";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`ftr ${className}`}>
      <Container className="ftr__in flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3">
          <FullLogo showTagline />
          <p className="text-xs text-[var(--on-dark-2)]">
            © {currentYear} Hoskey Production Company Limited - Where Stories Come Alive
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--on-dark-2)]">
            {SITE.email && <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>}
            {SITE.phone && <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:underline">{SITE.phone}</a>}
            {SITE.address && <span>{SITE.address}</span>}
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
        <SocialIcons />
      </Container>
    </footer>
  );
}
