import * as React from "react";
import { cn } from "@/lib/utils";
import { useParallax } from "../hooks/useAnimations";

export interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable parallax scrolling effect */
  enableParallax?: boolean;
  /** Parallax intensity (0-1) */
  parallaxIntensity?: number;
  /** Show noise texture overlay */
  showNoise?: boolean;
}

/**
 * Animated gradient background with floating orbs.
 * Supports parallax scrolling and noise texture overlay.
 */
const AnimatedBackground = React.forwardRef<HTMLDivElement, AnimatedBackgroundProps>(
  (
    { className, enableParallax = false, parallaxIntensity = 0.3, showNoise = true, ...props },
    ref
  ) => {
    const offset = useParallax(parallaxIntensity);
    const transform = enableParallax ? `translateY(${offset}px)` : undefined;

    return (
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        ref={ref}
        {...props}
      >
        {/* Animated gradient orbs */}
        <div
          className="absolute top-0 left-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-gradient-to-br from-[#667eea]/20 via-[#764ba2]/10 to-transparent blur-3xl"
          style={{ animationDuration: "8s", transform }}
        />
        <div
          className="absolute top-1/3 right-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-bl from-[#4eaed0]/25 via-[#06b6d4]/15 to-transparent blur-3xl"
          style={{ animationDuration: "6s", animationDelay: "2s", transform }}
        />
        <div
          className="absolute bottom-0 left-0 h-[700px] w-[700px] animate-pulse rounded-full bg-gradient-to-tr from-[#f472b6]/15 via-[#ec4899]/10 to-transparent blur-3xl"
          style={{ animationDuration: "10s", animationDelay: "1s", transform }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-[#a78bfa]/15 to-transparent blur-3xl"
          style={{ animationDuration: "7s", animationDelay: "3s", transform }}
        />

        {/* Noise texture overlay */}
        {showNoise && (
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />
        )}

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 8s linear infinite;
          }
        `}</style>
      </div>
    );
  }
);

AnimatedBackground.displayName = "AnimatedBackground";

export { AnimatedBackground };
