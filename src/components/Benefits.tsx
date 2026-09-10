import { IMAGES } from "../assets";
import { BENEFITS } from "../data";
import { Reveal } from "./Reveal";
import { Check, Heart, Shield, Sparkle } from "./Icons";

export function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image composition */}
          <Reveal y={40} className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-2 shadow-soft backdrop-blur">
                <img
                  src={IMAGES.ingredients}
                  alt="A colourful flat lay of fresh whole ingredients used by FIT BITE"
                  className="h-[24rem] w-full rounded-[1.6rem] object-cover transition-transform duration-[1.4s] ease-out hover:scale-105 sm:h-[30rem]"
                  loading="lazy"
                />
              </div>

              <div className="absolute -left-3 top-10 animate-float rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-xl sm:-left-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Shield className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold leading-none text-ink">
                      Clean label
                    </p>
                    <p className="text-[0.68rem] font-medium text-ink/55">
                      nothing artificial
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-2 animate-float-slow rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-soft backdrop-blur-xl sm:right-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-berry-500/15 text-berry-600">
                    <Heart className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-lg font-extrabold leading-none text-ink">
                      2,400+
                    </p>
                    <p className="text-[0.68rem] font-medium text-ink/55">
                      happy regulars
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-700 backdrop-blur">
                <Sparkle className="h-3.5 w-3.5 text-citrus-500" />
                The FIT BITE difference
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl">
                Fuel your body without giving up on{" "}
                <span className="font-serif italic text-gradient">flavour</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={120 + i * 100}>
                  <div className="group flex gap-5 rounded-3xl border border-white/70 bg-white/55 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="shrink-0 text-center">
                      <p className="text-2xl font-extrabold tracking-tight text-brand-600">
                        {b.stat}
                      </p>
                      <p className="mt-0.5 w-20 text-[0.62rem] font-semibold uppercase leading-tight tracking-wider text-ink/45">
                        {b.statLabel}
                      </p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-transform duration-300 group-hover:scale-110">
                          <Check className="h-3 w-3" />
                        </span>
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {b.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
