import { CONTACT, PLANS } from "../data";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, Check, Sparkle } from "./Icons";

export function Pricing() {
  return (
    <section id="plans" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-citrus-200/40 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Plans & pricing"
          title={
            <>
              Simple plans that make eating clean{" "}
              <span className="font-serif italic text-gradient">automatic</span>
            </>
          }
          subtitle="Start with a single bowl or let us run your whole week of meals. No contracts, no lock-in — pause, swap or cancel anytime."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-[1.75rem] p-7 transition-all duration-500 hover:-translate-y-2",
                  plan.featured
                    ? "border border-transparent bg-gradient-to-b from-brand-600 to-brand-800 text-white shadow-[0_40px_80px_-40px_rgba(31,128,68,0.85)] lg:scale-[1.045]"
                    : "border border-white/70 bg-white/65 text-ink shadow-sm backdrop-blur hover:shadow-soft"
                )}
              >
                {plan.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-citrus-400/30 blur-3xl"
                  />
                )}

                <div className="relative flex items-center justify-between gap-3">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {plan.name}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest",
                      plan.featured
                        ? "bg-white/15 text-white"
                        : "bg-brand-100 text-brand-700"
                    )}
                  >
                    {plan.featured && <Sparkle className="h-3 w-3" />}
                    {plan.badge}
                  </span>
                </div>

                <p
                  className={cn(
                    "relative mt-3 text-sm leading-relaxed",
                    plan.featured ? "text-white/75" : "text-ink/60"
                  )}
                >
                  {plan.blurb}
                </p>

                <div className="relative mt-6 flex items-end gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "pb-1 text-sm font-semibold",
                      plan.featured ? "text-white/65" : "text-ink/50"
                    )}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <ul className="relative mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-medium">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.featured
                            ? "bg-white/20 text-white"
                            : "bg-brand-100 text-brand-700"
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className={plan.featured ? "text-white/85" : "text-ink/70"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group/btn relative mt-8 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5",
                    plan.featured
                      ? "bg-white text-brand-800"
                      : "bg-ink text-white"
                  )}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm font-medium text-ink/55">
            All plans include chilled doorstep delivery in &amp; around Anna Nagar, seasonal menus and a
            real human on WhatsApp. Need something bespoke?{" "}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-brand-700 underline decoration-brand-300 underline-offset-4 transition hover:text-brand-600"
            >
              Chat with us
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
