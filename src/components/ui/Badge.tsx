import React from "react";

export interface BadgeProps {
  text?: string;
  className?: string;
}

export function Badge({
  text = "SINCE 2024 · ACCRA · SINCE 2024 · ACCRA · ",
  className = "",
}: BadgeProps) {
  return (
    <div className={`badge ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="badge-circle-path" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
        </defs>
        <text>
          <textPath href="#badge-circle-path">{text}</textPath>
        </text>
      </svg>
    </div>
  );
}
