import { useState } from "react";
import { CONTACT, FAQS } from "../data";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { ArrowRight, Plus, WhatsApp } from "./Icons";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-citrus-400" />
                Good to know
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl">
                Questions? We've got{" "}
                <span className="font-serif italic text-gradient">answers</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-4 text-base leading-relaxed text-ink/60">
                Everything about freshness, delivery, customisation and plans —
                all in one place.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 rounded-3xl border border-white/70 bg-gradient-to-br from-white/80 to-brand-50/70 p-6 shadow-sm backdrop-blur">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <WhatsApp className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">
                  Still curious? Just ask.
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  Message us on WhatsApp and a real person from the kitchen will
                  help you build the perfect order.
                </p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition hover:text-brand-600"
                >
                  Chat with FIT BITE
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              const buttonId = `faq-btn-${i}`;
              const panelId = `faq-panel-${i}`;
              return (
                <Reveal key={item.q} delay={i * 70}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-3xl border bg-white/60 backdrop-blur transition-all duration-300",
                      isOpen
                        ? "border-brand-200 shadow-soft"
                        : "border-white/70 hover:border-brand-200/70"
                    )}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-bold tracking-tight text-ink sm:text-[1.05rem]">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                          isOpen
                            ? "rotate-45 bg-brand-600 text-white"
                            : "bg-ink/5 text-ink"
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={cn(
                        "grid px-6 transition-all duration-500 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] pb-5 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-ink/60">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
