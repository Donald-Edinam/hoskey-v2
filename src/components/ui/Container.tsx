import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`wrap ${className}`} {...props}>
      {children}
    </div>
  );
}
