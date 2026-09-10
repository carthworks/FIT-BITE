import { useState } from "react";
import { CONTACT, NAV_LINKS, PRODUCTS } from "../data";
import { ArrowRight, Check, Instagram, Logo, Phone, Pin, WhatsApp } from "./Icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-600/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 sm:pb-10 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="rounded-2xl bg-white/95 px-4 py-3 inline-flex">
              <Logo />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Fresh, healthy &amp; delicious food made with care. Overnight oats,
              salad bowls and cold-pressed juices — delivered chilled across
              Chennai.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="FIT BITE on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="FIT BITE on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.phoneHref}
                aria-label="Call FIT BITE"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              On the menu
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: p.dot }}
                    />
                    {p.name}
                  </a>
                </li>
              ))}
              <li className="text-white/50">Amla immunity shot · ₹30</li>
            </ul>
          </div>

          {/* Newsletter + contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Fresh drops &amp; offers
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
              className="mt-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4 transition-colors focus-within:border-brand-400/60">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-transform duration-300 hover:scale-105"
                >
                  {sent ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="mt-2.5 text-xs text-white/45">
                {sent
                  ? "You're on the list — welcome to the FIT BITE family! 🌿"
                  : "Seasonal menus and member offers. No spam, ever."}
              </p>
            </form>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-300" />
                {CONTACT.phone}
              </a>
              <p className="flex items-center gap-2.5">
                <Pin className="h-4 w-4 text-brand-300" />
                {CONTACT.city}
              </p>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4 text-brand-300" />
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} FIT BITE. Smart fuel · Effortless
            mornings.
          </p>
          <p className="flex items-center gap-1.5">
            Made with care in Chennai
            <span className="text-brand-400">🌿</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
