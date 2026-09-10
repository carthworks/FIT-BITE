import { TESTIMONIALS } from "../data";
import { Reveal } from "./Reveal";
import { Star } from "./Icons";

const AVATAR_INITIALS = ["AR", "KS", "DN", "FM", "SP"];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-600/25 blur-[130px] animate-drift" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-citrus-600/20 blur-[130px] animate-drift [animation-delay:-8s]" />
        <div className="grain absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-200 backdrop-blur">
              Loved in Anna Nagar, Chennai
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem]">
              Real people. Real{" "}
              <span className="font-serif italic text-citrus-300">glow-ups</span>.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
              <span className="flex items-center gap-0.5 text-citrus-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-sm font-semibold text-white/85">
                4.9 average · 800+ reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 110}
              className="break-inside-avoid"
            >
              <figure className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.09]">
                <div className="flex items-center gap-0.5 text-citrus-400">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white/95"
                    style={{ backgroundColor: t.tone }}
                  >
                    {AVATAR_INITIALS[i % AVATAR_INITIALS.length]}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs font-medium text-white/55">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
