import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in milliseconds before the element animates in */
  delay?: number;
  /** vertical travel distance in px */
  y?: number;
  as?: ElementType;
  style?: CSSProperties;
};

/**
 * Scroll-triggered entrance animation. Elements fade + rise into place
 * once they enter the viewport. Works with the `.reveal` CSS primitives
 * and honours `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--reveal-y": `${y}px`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
