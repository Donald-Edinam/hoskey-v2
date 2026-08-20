import React from "react";

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CardGrid({ children, className = "", ...props }: CardGridProps) {
  return (
    <div className={`cards ${className}`} {...props}>
      {children}
    </div>
  );
}
