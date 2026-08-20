import React from "react";
import { Heading } from "./Typography";

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Card({
  icon,
  title,
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <article className={`card ${className}`} {...props}>
      <div className="card__ico">
        {icon}
      </div>
      {typeof title === "string" ? <Heading as="h3">{title}</Heading> : title}
      {typeof children === "string" ? <p>{children}</p> : children}
    </article>
  );
}
