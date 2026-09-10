import { useState } from "react";
import { CONTACT, PRODUCTS } from "../data";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, Check, Juice, Leaf, WhatsApp } from "./Icons";

export function Products() {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];

  return (
    <section id="menu" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-200/30 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The menu"
          title={
            <>
              Three ways to eat{" "}
              <span className="font-serif italic text-gradient">really</span> well
            </>
          }
          subtitle="Every item is built around whole ingredients and honest portions. Pick a category and see what's inside the box."
        />

        {/* Tabs */}
        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Product categories"
            className="mx-auto mt-12 flex max-w-2xl gap-1.5 overflow-x-auto rounded-2xl border border-white/70 bg-white/60 p-1.5 shadow-sm backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                id={`tab-${p.id}`}
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${p.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300",
                  active === i
                    ? "text-white shadow-[0_14px_30px_-16px_rgba(31,128,68,0.9)]"
                    : "text-ink/60 hover:bg-white hover:text-ink"
                )}
              >
                {active === i && (
                  <span
                    className={cn(
                      "absolute inset-0 -z-10 rounded-xl bg-gradient-to-r",
                      p.accent
                    )}
                  />
                )}
                <span
                  className={cn(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full",
                    active === i ? "bg-white/25" : "bg-ink/5"
                  )}
                >
                  {p.id === "juices" ? (
                    <Juice className="h-3.5 w-3.5" />
                  ) : (
                    <Leaf className="h-3.5 w-3.5" />
                  )}
                </span>
                <span className="hidden sm:inline">{p.name}</span>
                <span className="sm:hidden">{p.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          key={product.id}
          id={`panel-${product.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${product.id}`}
          className="mt-12 animate-panel"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div
              className={cn(
                "relative",
                active % 2 === 1 && "lg:order-2"
              )}
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-2 shadow-soft backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[22rem] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105 sm:h-[26rem] lg:h-[32rem]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-ink backdrop-blur">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: product.dot }}
                    />
                    {product.tags[0]}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-soft backdrop-blur-xl sm:-right-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-ink/50">
                  Starting at
                </p>
                <p className="text-2xl font-extrabold leading-tight text-ink">
                  {product.price}
                  <span className="ml-1 text-xs font-semibold text-ink/50">
                    {product.unit}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
                {product.tags.join(" · ")}
              </span>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {product.name}
              </h3>
              <p className="mt-2 font-serif text-xl italic text-ink/70">
                {product.tagline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/60">
                {product.description}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {product.highlights.map((h, i) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/55 px-4 py-3 text-sm font-semibold text-ink/75 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                    style={{
                      animation: `panel-in 0.5s cubic-bezier(0.22,1,0.36,1) ${
                        i * 70
                      }ms both`,
                    }}
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <WhatsApp className="h-4 w-4" />
                  Order {product.name.split(" ").slice(-1)[0]}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/70 px-6 py-3.5 text-sm font-bold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300"
                >
                  Add to a weekly plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
