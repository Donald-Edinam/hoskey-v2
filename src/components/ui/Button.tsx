import React from "react";
import Link from "next/link";

export type ButtonVariant = "red" | "line" | "white";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonAsAnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button({
  variant = "red",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "red"
      ? "btn--red"
      : variant === "white"
      ? "btn--line border-white/40 text-white hover:bg-white hover:text-[var(--ink)]"
      : "btn--line";
  const combinedClassName = `btn ${variantClass} ${className}`.trim();

  if (href !== undefined) {
    const isExternal = href.startsWith("http") || href.startsWith("wa.me") || href.startsWith("tel:") || href.startsWith("mailto:");
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClassName}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonProps.type || "button"}
      className={combinedClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
