import React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "", ...props }: EyebrowProps) {
  return (
    <p className={`eyebrow ${className}`} {...props}>
      {children}
    </p>
  );
}
