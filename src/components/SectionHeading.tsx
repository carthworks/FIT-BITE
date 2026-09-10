import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-700 backdrop-blur",
              align === "center" && "mx-auto"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-citrus-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={150}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink/60 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
