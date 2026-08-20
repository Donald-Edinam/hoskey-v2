import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Mark } from "./Mark";
import { SocialIcons } from "./SocialIcons";
import { MobileNav } from "@/components/interactive/MobileNav";

export interface HeaderProps {
  isDarkHero?: boolean;
  activePath?: string;
  className?: string;
}

const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "What we do", href: "/#services" },
  { label: "Our work", href: "/#work" },
  { label: "The studios", href: "/#studios" },
  { label: "Let's talk", href: "/#contact" },
];

export function Header({
  isDarkHero = true,
  activePath = "/",
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`hdr ${!isDarkHero ? "bg-[var(--dark)] relative" : ""} ${className}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-[var(--card)] focus:text-[var(--ink)] font-bold"
      >
        Skip to main content
      </a>
      <Container className="hdr__in">
        <Mark />
        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href || (link.href === "/#top" && activePath === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <SocialIcons />
        <MobileNav navItems={NAV_LINKS} />
      </Container>
    </header>
  );
}
