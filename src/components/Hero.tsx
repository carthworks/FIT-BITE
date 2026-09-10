import { IMAGES } from "../assets";
import { CONTACT, STATS } from "../data";
import { Reveal } from "./Reveal";
import { ArrowRight, Bolt, Check, Leaf, Star, WhatsApp } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      {/* Ambient gradient field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-16 h-[34rem] w-[34rem] rounded-full bg-brand-300/40 blur-[110px] animate-drift" />
        <div className="absolute right-[-6rem] top-24 h-[30rem] w-[30rem] rounded-full bg-citrus-300/40 blur-[120px] animate-drift [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-berry-400/20 blur-[120px] animate-drift [animation-delay:-11s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.85),transparent_55%)]" />
        <div className="grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Smart fuel · Effortless mornings
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl lg:text-[4.1rem]">
              Fresh, healthy &amp;{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-gradient">delicious</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-citrus-400/70"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8c40-6 92-7 196-4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              — made with care.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink/65 sm:text-lg lg:mx-0">
              Overnight oats, vibrant salad bowls and cold-pressed juices —
              prepped fresh every morning and delivered chilled across Chennai.
              Real ingredients, generous portions, zero fuss.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <WhatsApp className="h-4 w-4" />
                Pre-order on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#menu"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/70 px-7 py-3.5 text-sm font-bold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white sm:w-auto"
              >
                Explore the menu
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["#2d9e56", "#fd7e14", "#e11d48", "#53bb76"].map((c, i) => (
                    <span
                      key={c}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-[0.65rem] font-bold text-white shadow-sm"
                      style={{ backgroundColor: c }}
                    >
                      {["AR", "KS", "DN", "FM"][i]}
                    </span>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-citrus-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-ink">4.9</span>
                  </div>
                  <p className="text-xs font-medium text-ink/55">
                    Loved by 2,400+ health-focused locals
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-ink/55 lg:justify-start">
              {[
                { icon: Leaf, text: "No preservatives" },
                { icon: Bolt, text: "High-protein options" },
                { icon: Check, text: "Vegan friendly" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-brand-600" />
                  {text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} y={40} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-2 shadow-soft backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={IMAGES.hero}
                  alt="Fresh FIT BITE spread with a healthy salad bowl, overnight oats and cold-pressed juice"
                  className="h-[24rem] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105 sm:h-[30rem] lg:h-[34rem]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-ink/40 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-white/70">
                      Today's fresh batch
                    </p>
                    <p className="text-sm font-bold text-white">
                      Tossed at 6:30am · Chilled &amp; sealed
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-full bg-brand-500/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white sm:block">
                    Fresh
                  </span>
                </div>
              </div>
            </div>

            {/* Floating glass cards */}
            <div className="absolute -left-3 top-8 animate-float rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Leaf className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold leading-none text-ink">
                    18 fresh
                  </p>
                  <p className="text-[0.68rem] font-medium text-ink/55">
                    ingredients daily
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 bottom-24 animate-float-slow rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-citrus-100 text-citrus-600">
                  <Bolt className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold leading-none text-ink">
                    From ₹40
                  </p>
                  <p className="text-[0.68rem] font-medium text-ink/55">
                    cold-pressed juice
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-6 hidden animate-float rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl [animation-delay:-3s] sm:block">
              <p className="text-sm font-extrabold leading-none text-ink">
                8 min
              </p>
              <p className="text-[0.68rem] font-medium text-ink/55">
                fridge → ready
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stat strip */}
      <div className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6">
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group rounded-2xl border border-white/70 bg-white/60 px-5 py-5 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <dt className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink/50">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
