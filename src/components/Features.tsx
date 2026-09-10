import type { ComponentType, SVGProps } from "react";
import { FEATURES } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Bolt, Heart, Leaf, Shield, Sparkle, Truck } from "./Icons";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Leaf,
  Bolt,
  Truck,
  Heart,
  Shield,
  Sparkle,
};

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why FIT BITE"
          title={
            <>
              Good food shouldn't be a{" "}
              <span className="font-serif italic text-gradient">chore</span>
            </>
          }
          subtitle="We obsess over the details — sourcing, chopping, balancing, sealing — so eating well becomes the easiest part of your day."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? Leaf;
            return (
              <Reveal key={f.title} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-6 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-200/70 to-citrus-200/60 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_14px_30px_-14px_rgba(45,158,86,0.9)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold tracking-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink/60">
                    {f.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
