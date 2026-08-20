"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  { label: "Home", href: "/#top" },
  { label: "What we do", href: "/#services" },
  { label: "Our work", href: "/#work" },
  { label: "The studios", href: "/#studios" },
  { label: "Let's talk", href: "/#contact" },
];

export function MobileNav({ navItems = DEFAULT_NAV_ITEMS }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => {
    setIsOpen(false);
    toggleBtnRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="flex items-center min-[1000px]:hidden">
      <button
        ref={toggleBtnRef}
        type="button"
        className="p-2.5 text-[var(--on-dark)] hover:text-white"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => (isOpen ? closeMenu() : openMenu())}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          {isOpen ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          ) : (
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-nav-drawer"
          ref={menuRef}
          className="fixed inset-0 z-50 bg-[var(--dark)] text-[var(--on-dark)] flex flex-col justify-between p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight">Hoskey Production</span>
            <button
              type="button"
              className="p-2.5 text-[var(--on-dark)] hover:text-white"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto py-8" aria-label="Mobile Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[clamp(32px,5.4vw,64px)] font-bold tracking-tight hover:text-[var(--navy-lift)] transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[var(--rule-dark)]">
            <Button
              variant="red"
              href={waLink("general")}
              className="w-full justify-center text-center"
              onClick={closeMenu}
            >
              Start a project on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
