import type { SVGProps } from "react";

/** FIT BITE wordmark + smiling-bowl logo mark */
export function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <span className={cnLogo(className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-label="FIT BITE logo"
      >
        <defs>
          <linearGradient id="fbBowl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#53bb76" />
            <stop offset="100%" stopColor="#1f8044" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="23" fill="#f1faf3" />
        <circle cx="24" cy="24" r="23" fill="none" stroke="#d7eede" strokeWidth="1.5" />
        <path
          d="M8 24h32c0 8.5-7.2 15-16 15S8 32.5 8 24Z"
          fill="url(#fbBowl)"
        />
        <path
          d="M10 24h28"
          stroke="#0b1f14"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M18 31.5c1.7 1.8 3.9 2.8 6 2.8s4.3-1 6-2.8"
          stroke="#f1faf3"
          strokeWidth="2.1"
          strokeLinecap="round"
          fill="none"
        />
        {/* leaf sprig */}
        <path
          d="M24 18c0-4 2.6-7 6.5-7-.2 4.3-2.9 7-6.5 7Z"
          fill="#53bb76"
        />
        <circle cx="15.5" cy="19.5" r="2" fill="#fd7e14" />
        <circle cx="24" cy="17.6" r="1.7" fill="#f43f5e" />
        <circle cx="31.5" cy="19.8" r="1.9" fill="#ffc071" />
      </svg>
      {!markOnly && (
        <span className="text-[1.15rem] font-extrabold tracking-tight">
          <span className="text-brand-600">FIT</span>
          <span className="text-ink">BITE</span>
        </span>
      )}
    </span>
  );
}

function cnLogo(className?: string) {
  return ["inline-flex items-center gap-2", className]
    .filter(Boolean)
    .join(" ");
}

type IconProps = SVGProps<SVGSVGElement>;

export const Leaf = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 10-4 16-9 16Z" />
    <path d="M4 20c3-5 7-8 12-9" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const Bowl = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 11h18a9 9 0 0 1-18 0Z" />
    <path d="M6 11c0-3 2.7-5 6-5s6 2 6 5" />
    <path d="M12 3v1.5" />
  </svg>
);

export const Juice = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Z" />
    <path d="M8 8V4h8v4" />
    <path d="M9.5 14h5" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 20s-7-4.4-9.2-8.6C1.2 8.2 2.6 5 5.8 5 8 5 9.4 6.6 12 9c2.6-2.4 4-4 6.2-4 3.2 0 4.6 3.2 3 6.4C19 15.6 12 20 12 20Z" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Truck = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 7h10v9H3z" />
    <path d="M13 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18.5" r="1.6" />
    <circle cx="17" cy="18.5" r="1.6" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="m6.5 6.5 3 3M14.5 14.5l3 3M17.5 6.5l-3 3M9.5 14.5l-3 3" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.6l2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.9 6.4 19.8l1.3-6.3-4.8-4.3 6.4-.7L12 2.6Z" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 5c0 8 7 15 15 15l1-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5-4 1Z" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.2A9.7 9.7 0 0 0 3.7 17l-1.3 4.8 4.9-1.3A9.7 9.7 0 1 0 12 2.2Zm5.5 13.6c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4.1-4.8-4.3-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.4c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1.2.1 1.5.7 1.7.8.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" />
  </svg>
);
