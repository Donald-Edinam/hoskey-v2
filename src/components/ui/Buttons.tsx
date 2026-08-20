import React from "react";

export interface ButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Buttons({ children, className = "", ...props }: ButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-[12px] ${className}`} {...props}>
      {children}
    </div>
  );
}
