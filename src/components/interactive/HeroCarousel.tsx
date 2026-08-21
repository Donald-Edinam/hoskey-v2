"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { HeroSlide } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";

export interface HeroCarouselProps {
  slides: HeroSlide[];
}

function checkAutoOK(): boolean {
  if (typeof window === "undefined") return true;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  };
  const saveData = nav.connection?.saveData === true;
  const slow = Boolean(nav.connection?.effectiveType && /2g/.test(nav.connection.effectiveType));
  return !(reduced || saveData || slow);
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [autoOK] = useState<boolean>(checkAutoOK);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoOK);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex] || slides[0];

  const goToSlide = useCallback((n: number) => {
    const nextIdx = (n + totalSlides) % totalSlides;
    setCurrentIndex(nextIdx);

    if (plateRef.current) {
      plateRef.current.classList.remove("is-on");
      void plateRef.current.offsetWidth; // force reflow
      plateRef.current.classList.add("is-on");
    }
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Timer auto-advance
  useEffect(() => {
    if (!autoOK || !isPlaying) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = setTimeout(() => {
      handleNext();
    }, 7000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying, autoOK, handleNext]);

  // Page visibility & IntersectionObserver offscreen pause
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const el = heroRef.current;
    let observer: IntersectionObserver | null = null;
    if (el) {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting && timerRef.current) {
          clearTimeout(timerRef.current);
        }
      });
      observer.observe(el);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (el && observer) observer.unobserve(el);
    };
  }, []);

  // Keyboard ArrowLeft / ArrowRight navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) touchStartX.current = touch.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touch = e.changedTouches[0];
    if (touch) {
      const dx = touch.clientX - touchStartX.current;
      if (Math.abs(dx) > 50) {
        if (dx < 0) handleNext();
        else handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!currentSlide) return null;

  return (
    <div
      ref={heroRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="What Hoskey does"
      className="outline-none"
    >
      <div className="hero__grid">
        <div className="stack">
          <span className="word word--top" data-w1>
            {currentSlide.wordTop}
          </span>

          <div
            ref={plateRef}
            className={`plate ${autoOK && isPlaying ? "is-on" : ""}`}
            data-plate
          >
            {currentSlide.imageSrc ? (
              <Image
                src={currentSlide.imageSrc}
                alt={currentSlide.imageAlt || "Hoskey Production"}
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover"
                priority={currentIndex === 0}
              />
            ) : (
              <div className="plate__tex" />
            )}
            <span className="plate__lbl" data-plabel>
              Slide 0{currentIndex + 1}
            </span>
          </div>

          <span className="word word--bot" data-w2>
            {currentSlide.wordBottom}
          </span>
        </div>

        <div className="hero__side">
          <p className="lede" data-lede>
            {currentSlide.lede}
          </p>
          <div className="hero__cta">
            <Button
              variant="red"
              href={waLink(currentSlide.ctaContext)}
              data-cta
            >
              {currentSlide.ctaLabel}
            </Button>
          </div>
        </div>
      </div>

      {/* Counter & Pause Controls */}
      <div className="counter">
        <button
          className="cbtn"
          type="button"
          aria-label="Previous slide"
          onClick={handlePrev}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 5l-7 7 7 7z" />
          </svg>
        </button>

        <span data-cur>0{currentIndex + 1}</span>

        <span className="track">
          <span
            data-fill
            style={{ transform: `scaleX(${(currentIndex + 1) / totalSlides})` }}
          />
        </span>

        <span>0{totalSlides}</span>

        <button
          className="cbtn"
          type="button"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          className="cbtn"
          type="button"
          aria-label="Next slide"
          onClick={handleNext}
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7z" />
          </svg>
        </button>
      </div>

      {/* Screen Reader Status Announcement */}
      <p className="sr-only" aria-live="polite" data-status>
        Slide {currentIndex + 1} of {totalSlides}
      </p>
    </div>
  );
}
