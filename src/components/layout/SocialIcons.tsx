import React from "react";
import { waLink } from "@/lib/whatsapp";

export interface SocialIconsProps {
  className?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
}

export function SocialIcons({
  className = "",
  youtubeUrl = "#",
  instagramUrl = "#",
  tiktokUrl = "#",
}: SocialIconsProps) {
  return (
    <div className={`socials ${className}`}>
      {youtubeUrl && (
        <a
          className="soc"
          href={youtubeUrl}
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M23 12s0-3.9-.5-5.8a3 3 0 00-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5A3 3 0 001.5 6.2C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8zM9.9 15.5v-7l6.1 3.5-6.1 3.5z" />
          </svg>
        </a>
      )}
      {instagramUrl && (
        <a
          className="soc"
          href={instagramUrl}
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 6.8a3 3 0 100 6 3 3 0 000-6zm0-1.9a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm6.2-.2a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z" />
          </svg>
        </a>
      )}
      {tiktokUrl && (
        <a
          className="soc"
          href={tiktokUrl}
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M16.5 2h-3v13.2a2.6 2.6 0 11-2.2-2.6V9.4a5.9 5.9 0 105.2 5.8V8.9a6.8 6.8 0 003.9 1.2V7a3.9 3.9 0 01-3.9-3.9V2z" />
          </svg>
        </a>
      )}
      <a
        className="soc"
        href={waLink("general")}
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8L7 20.5A10 10 0 1012 2zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5 0-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3 0 .6.3.5 1.2 2 2.7 3.3 1.8 1.6 3.3 2.1 3.8 2.3.4.2.7.2.9-.1l1.1-1.3c.2-.3.5-.2.8-.1l2.2 1c.3.2.5.2.6.4.1.2.1.7-.1 1.3z" />
        </svg>
      </a>
    </div>
  );
}
