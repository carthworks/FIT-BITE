import { IMAGES } from "../assets";
import { CONTACT } from "../data";
import { Reveal } from "./Reveal";
import { ArrowRight, Check, Phone, WhatsApp } from "./Icons";

const POINTS = ["Fresh daily", "Chilled delivery", "Pause anytime"];

export function CTA() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-brand-700 via-brand-800 to-ink px-6 py-14 text-white shadow-[0_50px_100px_-50px_rgba(11,31,20,0.9)] sm:px-12 sm:py-16 lg:px-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-20 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl animate-drift" />
              <div className="absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-citrus-500/30 blur-3xl animate-drift [animation-delay:-7s]" />
              <div className="grain absolute inset-0 opacity-[0.06]" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
                  Ready when you are
                </span>
                <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.06] tracking-tight sm:text-4xl lg:text-5xl">
                  Your healthiest meal of the week is{" "}
                  <span className="font-serif italic text-citrus-300">
                    one message away
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  Pre-order overnight oats, salad bowls and cold-pressed juices
                  for tomorrow morning. Real food, real care — no cooking, no
                  clean-up, no compromise.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <WhatsApp className="h-4 w-4" />
                    Pre-order on WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    {CONTACT.phone}
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-white/65">
                  {POINTS.map((p) => (
                    <span key={p} className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-brand-300" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating product photo */}
              <div className="relative mx-auto hidden w-full max-w-xs lg:block">
                <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 shadow-2xl rotate-3 transition-transform duration-700 hover:rotate-0">
                  <img
                    src={IMAGES.juicePour}
                    alt="Fresh cold-pressed orange juice being poured"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 animate-float rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl">
                  <p className="text-sm font-extrabold leading-none">
                    Cold-pressed
                  </p>
                  <p className="text-[0.68rem] font-medium text-white/65">
                    made fresh today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
