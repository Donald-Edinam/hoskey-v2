import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function IconBroadcast({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M5 16h38v24a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
      <path d="M5 16l5-8h30l-5 8M17 8l-5 8M27 8l-5 8M37 8l-5 8" />
    </svg>
  );
}

export function IconVideo({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="5" y="14" width="26" height="20" rx="2" />
      <path d="M31 21l12-6v18l-12-6" />
      <circle cx="13" cy="24" r="3" />
    </svg>
  );
}

export function IconLiveStreaming({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="24" cy="24" r="5" />
      <path d="M13 13a15.6 15.6 0 000 22M35 13a15.6 15.6 0 010 22M6 6a25 25 0 000 36M42 6a25 25 0 010 36" />
    </svg>
  );
}

export function IconPostProduction({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="5" y="10" width="38" height="28" rx="2" />
      <path d="M5 18h38M5 30h38M15 10v28M33 10v28" />
    </svg>
  );
}

export function IconContentCreation({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="16" r="3.4" />
      <circle cx="24" cy="32" r="3.4" />
      <circle cx="16" cy="24" r="3.4" />
      <circle cx="32" cy="24" r="3.4" />
    </svg>
  );
}

export function IconTechnicalStage({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M24 5v10M16 15h16l4 10H12z" />
      <path d="M18 25v8a6 6 0 0012 0v-8" />
      <path d="M24 39v4" />
    </svg>
  );
}
