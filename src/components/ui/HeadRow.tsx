import React from "react";
import { Eyebrow } from "./Eyebrow";
import { Display } from "./Typography";

export interface HeadRowProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  split?: boolean;
  className?: string;
}

export function HeadRow({
  eyebrow,
  heading,
  lede,
  split = false,
  className = "",
  ...props
}: HeadRowProps) {
  return (
    <div
      className={`head ${split ? "head--split" : ""} ${className}`}
      {...props}
    >
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {typeof heading === "string" ? <Display>{heading}</Display> : heading}
      </div>
      {lede && (typeof lede === "string" ? <p className="lede">{lede}</p> : lede)}
    </div>
  );
}
