"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Img } from "@/lib/content";

export interface LightboxProps {
  images: Img[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function Lightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  triggerRef,
}: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
    if (triggerRef && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [onClose, triggerRef]);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, handleNext, handlePrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[index] || images[0];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[var(--dark)]/95 text-[var(--on-dark)] flex flex-col justify-between p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox gallery"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between text-xs font-bold tracking-[0.14em] uppercase text-[var(--on-dark-2)]">
        <span>
          Image {index + 1} of {images.length}
        </span>
        <button
          type="button"
          onClick={handleClose}
          className="p-2 text-[var(--on-dark)] hover:text-white"
          aria-label="Close lightbox"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 my-4 flex items-center justify-center">
        {currentImg && (
          <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
            <Image
              src={currentImg.src}
              alt={currentImg.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        )}
      </div>

      {/* Controls & Caption */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="p-3 text-[var(--on-dark)] hover:text-white border border-[var(--rule-dark)] rounded-full"
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {currentImg && (
          <p className="text-xs text-center text-[var(--on-dark-2)] max-w-md">
            {currentImg.alt}
          </p>
        )}

        <button
          type="button"
          onClick={handleNext}
          className="p-3 text-[var(--on-dark)] hover:text-white border border-[var(--rule-dark)] rounded-full"
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
