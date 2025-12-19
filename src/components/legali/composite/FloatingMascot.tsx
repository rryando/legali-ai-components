import * as React from "react";
import { cn } from "@/lib/utils";
import { useCurrentSection, useIdleDetection } from "../hooks/useAnimations";
import {
  LegaliMascot,
  MascotMotion,
  type MascotMotionType,
} from "../mascot/LegaliMascot";

export interface FloatingMascotProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** List of section IDs to track */
  sections?: string[];
  /** Callback when section changes */
  onSectionChange?: (section: string) => void;
  /** Idle timeout in milliseconds */
  idleTimeout?: number;
  /** Size of the mascot */
  size?: number;
  /** Number of clicks to trigger easter egg */
  easterEggClicks?: number;
}

const sectionMotionMap: Record<string, MascotMotionType> = {
  hero: MascotMotion.WAVING,
  problem: MascotMotion.THINKING,
  features: MascotMotion.LAPTOP,
  "how-it-works": MascotMotion.IDEA,
  testimonials: MascotMotion.THUMBSUP,
  faq: MascotMotion.READING,
  cta: MascotMotion.CELEBRATE,
};

/**
 * A floating mascot that changes pose based on the current section.
 * Includes idle detection and easter egg functionality.
 */
const FloatingMascot = React.forwardRef<HTMLDivElement, FloatingMascotProps>(
  (
    {
      className,
      sections = [
        "hero",
        "problem",
        "features",
        "how-it-works",
        "testimonials",
        "faq",
        "cta",
      ],
      onSectionChange,
      idleTimeout = 5000,
      size = 80,
      easterEggClicks = 5,
      ...props
    },
    ref
  ) => {
    const currentSection = useCurrentSection(sections);
    const isIdle = useIdleDetection(idleTimeout);
    const [clickCount, setClickCount] = React.useState(0);
    const [showEasterEgg, setShowEasterEgg] = React.useState(false);

    React.useEffect(() => {
      if (currentSection && onSectionChange) {
        onSectionChange(currentSection);
      }
    }, [currentSection, onSectionChange]);

    const getMascotMotion = (): MascotMotionType => {
      if (showEasterEgg) return MascotMotion.CELEBRATE;
      if (isIdle) return MascotMotion.WAVING;

      return sectionMotionMap[currentSection || "hero"] || MascotMotion.IDLE;
    };

    const handleClick = () => {
      setClickCount((prev) => prev + 1);
      if (clickCount >= easterEggClicks - 1) {
        setShowEasterEgg(true);
        setTimeout(() => {
          setShowEasterEgg(false);
          setClickCount(0);
        }, 3000);
      }
    };

    return (
      <div
        className={cn(
          "fixed right-6 bottom-6 z-40 hidden cursor-pointer transition-transform duration-300 hover:scale-110 lg:block",
          className
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4eaed0]/30 to-[#764ba2]/30 blur-xl" />
          <LegaliMascot
            className="relative z-10 drop-shadow-lg"
            height={size}
            motion={getMascotMotion()}
            width={size}
          />
          {showEasterEgg && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-white px-3 py-1 font-bold text-[#4eaed0] text-xs shadow-lg">
              🎉 Yay!
            </div>
          )}
        </div>
      </div>
    );
  }
);

FloatingMascot.displayName = "FloatingMascot";

export { FloatingMascot };
