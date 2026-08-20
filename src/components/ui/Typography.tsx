import React from "react";

interface PolymorphicProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

export function Display<T extends React.ElementType = "h2">({
  as,
  children,
  className = "",
  ...props
}: PolymorphicProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || "h2";
  return (
    <Component className={`font-bold tracking-[-0.032em] leading-[1.02] text-[clamp(32px,5.4vw,64px)] text-balance ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Heading<T extends React.ElementType = "h3">({
  as,
  children,
  className = "",
  ...props
}: PolymorphicProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || "h3";
  return (
    <Component className={`font-bold tracking-[-0.02em] leading-[1.2] text-[20px] ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Lede({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`lede ${className}`} {...props}>
      {children}
    </p>
  );
}

export function Body({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`body-text ${className}`} {...props}>
      {children}
    </p>
  );
}

export function Label({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`text-[12px] font-bold tracking-[0.14em] uppercase ${className}`} {...props}>
      {children}
    </span>
  );
}
