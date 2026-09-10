import { Reveal } from "./Reveal";

const INGREDIENTS = [
  "Rolled Oats",
  "Grilled Paneer",
  "Baby Spinach",
  "Cold-Pressed Amla",
  "Pomegranate",
  "Chia Seeds",
  "Sweet Corn",
  "Almonds",
  "Purple Cabbage",
  "Falafel",
  "Watermelon",
  "Broccoli",
  "Greek Yogurt",
  "Blueberries",
  "Roasted Mushroom",
];

export function SocialProof() {
  return (
    <section aria-label="Trusted ingredients" className="relative py-6 sm:py-10">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-ink/45">
          Prepped daily with real, seasonal ingredients
        </p>
      </Reveal>

      <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused]">
          {[...INGREDIENTS, ...INGREDIENTS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/8 bg-white/70 px-5 py-2.5 text-sm font-semibold text-ink/70 shadow-sm backdrop-blur transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-400 to-citrus-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
