"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface VideoFacadeProps {
  videoId?: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function VideoFacade({
  videoId,
  poster,
  title = "Play video",
  className = "",
}: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoId) return null;

  if (isPlaying) {
    const isYouTube = /^[a-zA-Z0-9_-]{11}$/.test(videoId);
    const iframeSrc = isYouTube
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${videoId}?autoplay=1`;

    return (
      <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
        <iframe
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden bg-[var(--dark-2)] cursor-pointer group ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
    >
      {poster && (
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/20">
        <div className="w-16 h-16 rounded-full bg-[var(--red)] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
