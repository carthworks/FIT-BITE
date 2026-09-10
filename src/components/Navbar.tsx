import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS } from "../data";
import { cn } from "../utils/cn";
import { ArrowRight, Close, Logo, Menu, WhatsApp } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("#menu");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = NAV_LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-citrus-400 transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6",
          scrolled
            ? "my-2 rounded-2xl py-2.5 sm:my-3"
            : "my-3 rounded-2xl py-3 sm:my-4",
          scrolled && "glass shadow-[0_18px_50px_-30px_rgba(11,31,20,0.55)]"
        )}
      >
        <a
          href="#top"
          className="group flex items-center transition-transform duration-300 hover:scale-[1.03]"
          aria-label="FIT BITE home"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === link.href
                  ? "text-brand-700"
                  : "text-ink/70 hover:text-ink"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-500 to-citrus-400 transition-transform duration-300",
                  active === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(11,31,20,0.9)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <WhatsApp className="h-4 w-4" />
            Pre-order now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink backdrop-blur transition hover:bg-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-20 origin-top rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft backdrop-blur-xl transition-all duration-300",
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-95 opacity-0"
          )}
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-3 text-lg font-semibold text-ink transition-colors last:border-none hover:text-brand-600"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3.5 text-sm font-bold text-white"
          >
            <WhatsApp className="h-4 w-4" />
            Pre-order on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-center text-xs font-medium text-ink/50">
            {CONTACT.instagramHandle} · {CONTACT.phone}
          </p>
        </div>
      </div>
    </header>
  );
}
