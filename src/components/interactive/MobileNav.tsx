"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";

export interface NavItem {
  label: string;
  href: string;
}

export interface MobileNavProps {
  navItems?: NavItem[];
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What we do", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "The studios", href: "/studios" },
  { label: "Let's talk", href: "/contact" },
];

export function MobileNav({ navItems = DEFAULT_NAV_ITEMS }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

  return (
    <div className="min-[1000px]:hidden">
      <button
        type="button"
        className="w-10 h-10 border border-[var(--rule-dark)] rounded-full flex items-center justify-center text-[var(--on-dark)] cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--dark)] text-[var(--on-dark)] flex flex-col justify-between p-8">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-extrabold tracking-tight">H</span>
            <button
              type="button"
              className="w-10 h-10 border border-[var(--rule-dark)] rounded-full flex items-center justify-center text-[var(--on-dark)]"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-6 my-auto" aria-label="Mobile Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold tracking-tight text-[var(--on-dark)] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom WhatsApp CTA */}
          <div className="pt-6 border-t border-[var(--rule-dark)]">
            <Button variant="red" href={waLink("general")} className="w-full justify-center">
              Message on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
