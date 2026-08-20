import React from "react";
import Image, { ImageProps } from "next/image";
import { Frame, AspectRatioVariant } from "./Frame";

export interface MediaProps extends Omit<ImageProps, "alt" | "src"> {
  src?: string | null;
  alt: string; // mandatory required alt prop
  ratio?: AspectRatioVariant;
  label?: string;
  className?: string;
}

export function Media({
  src,
  alt,
  ratio = "r169",
  label,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 70,
  ...props
}: MediaProps) {
  if (!src) {
    return <Frame ratio={ratio} label={label || alt} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        className="object-cover"
        {...props}
      />
      {label && <span className="frame__lbl">{label}</span>}
    </div>
  );
}
