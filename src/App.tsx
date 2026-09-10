import { useEffect, useState } from "react";
import { CONTACT } from "./data";
import { cn } from "./utils/cn";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Products } from "./components/Products";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ArrowRight, Bolt, WhatsApp } from "./components/Icons";

function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating stack */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 sm:flex">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={cn(
            "pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
            show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          )}
        >
          <ArrowRight className="h-5 w-5 -rotate-90" />
        </button>

        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group pointer-events-auto inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 py-3.5 pl-4 pr-5 text-sm font-bold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute h-full w-full rounded-full bg-white/30 animate-pulse-ring" />
            <WhatsApp className="relative h-5 w-5" />
          </span>
          Pre-order
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-white/85 px-4 py-3 backdrop-blur-xl transition-transform duration-500 sm:hidden",
          show ? "translate-y-0" : "translate-y-full"
        )}
      >
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 py-3.5 text-sm font-bold text-white shadow-glow"
        >
          <Bolt className="h-4 w-4" />
          Pre-order fresh for tomorrow
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <Features />
        <Products />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
