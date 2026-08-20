import React from "react";

export interface MarqueeProps {
  text?: string;
  className?: string;
}

export function Marquee({
  text = "Our work · Where stories come alive · Our work · Where stories come alive · ",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`marq ${className}`} aria-hidden="true">
      <div className="marq__in">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
