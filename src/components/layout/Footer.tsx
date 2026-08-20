import React from "react";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "./SocialIcons";
import { SITE } from "@/lib/config";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`ftr ${className}`}>
      <Container className="ftr__in">
        <div>
          <p>© {currentYear} Hoskey Production — Where Stories Come Alive</p>
          {(SITE.email || SITE.phone || SITE.address) && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-xs text-[var(--on-dark-2)]">
              {SITE.email && <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>}
              {SITE.phone && <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:underline">{SITE.phone}</a>}
              {SITE.address && <span>{SITE.address}</span>}
            </div>
          )}
        </div>
        <SocialIcons />
      </Container>
    </footer>
  );
}
