import React from "react";

export type AspectRatioVariant = "r169" | "r43" | "r45" | "r11";

export interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: AspectRatioVariant;
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Frame({
  ratio = "r169",
  label,
  children,
  className = "",
  ...props
}: FrameProps) {
  return (
    <div className={`frame ${ratio} ${className}`} {...props}>
      {children}
      {label && <span className="frame__lbl">{label}</span>}
    </div>
  );
}
