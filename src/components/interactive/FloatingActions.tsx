"use client";

import React, { useState, useEffect } from "react";
import { waLink } from "@/lib/whatsapp";

export function FloatingActions() {
  const [hideWa, setHideWa] = useState(false);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    // 1. Hide WhatsApp button when #contact section is visible
    const contactSec = document.getElementById("contact");
    let observer: IntersectionObserver | null = null;
    if (contactSec) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            setHideWa(entry.isIntersecting);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(contactSec);
    }

    // 2. Show FAB only when user has scrolled down past 400px
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {!hideWa && (
        <a
          className="wa"
          href={waLink("general")}
          aria-label="Message Hoskey on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8L7 20.5A10 10 0 1012 2zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5 0-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3 0 .6.3.5 1.2 2 2.7 3.3 1.8 1.6 3.3 2.1 3.8 2.3.4.2.7.2.9-.1l1.1-1.3c.2-.3.5-.2.8-.1l2.2 1c.3.2.5.2.6.4.1.2.1.7-.1 1.3z" />
          </svg>
        </a>
      )}

      {showFab && (
        <button
          className="fab"
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 4l8 8h-5v8h-6v-8H4z" />
          </svg>
        </button>
      )}
    </>
  );
}
