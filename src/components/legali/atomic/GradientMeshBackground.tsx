import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GradientMeshBackgroundProps = {
  /** Enable parallax effect */
  enableParallax?: boolean;
  /** Animation speed multiplier */
  animationSpeed?: number;
  /** Show noise texture overlay */
  showNoise?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Dynamic morphing gradient mesh background.
 * More fluid and modern than static gradients.
 *
 * @example
 * ```tsx
 * <GradientMeshBackground enableParallax>
 *   <div className="relative z-10">Content</div>
 * </GradientMeshBackground>
 * ```
 */
const GradientMeshBackground = forwardRef<
  HTMLDivElement,
  GradientMeshBackgroundProps
>(
  (
    {
      className,
      children,
      enableParallax = false,
      animationSpeed = 1,
      showNoise = true,
      ...props
    },
    ref
  ) => {
    const baseAnimDuration = 20 / animationSpeed;

    return (
      <div
        className={cn("relative overflow-hidden", className)}
        ref={ref}
        {...props}
      >
        {/* Gradient mesh blobs */}
        <div className="pointer-events-none absolute inset-0">
          {/* Primary blob - top left */}
          <div
            className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(78, 174, 208, 0.4), transparent 70%)",
              animation: `meshFloat1 ${baseAnimDuration}s ease-in-out infinite`,
            }}
          />

          {/* Secondary blob - top right */}
          <div
            className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(102, 126, 234, 0.35), transparent 70%)",
              animation: `meshFloat2 ${baseAnimDuration * 0.8}s ease-in-out infinite`,
              animationDelay: "-5s",
            }}
          />

          {/* Tertiary blob - bottom left */}
          <div
            className="absolute -bottom-40 -left-20 h-[550px] w-[550px] rounded-full opacity-45"
            style={{
              background:
                "radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent 70%)",
              animation: `meshFloat3 ${baseAnimDuration * 1.2}s ease-in-out infinite`,
              animationDelay: "-10s",
            }}
          />

          {/* Quaternary blob - bottom right */}
          <div
            className="absolute -right-40 -bottom-20 h-[450px] w-[450px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(244, 114, 182, 0.25), transparent 70%)",
              animation: `meshFloat4 ${baseAnimDuration * 0.9}s ease-in-out infinite`,
              animationDelay: "-3s",
            }}
          />

          {/* Center accent blob */}
          <div
            className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)",
              animation: `meshPulse ${baseAnimDuration * 0.7}s ease-in-out infinite`,
            }}
          />
        </div>

        {/* Noise texture overlay */}
        {showNoise && (
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Keyframe animations */}
        <style>{`
          @keyframes meshFloat1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(50px, 30px) scale(1.05); }
            50% { transform: translate(20px, 60px) scale(0.95); }
            75% { transform: translate(-30px, 20px) scale(1.02); }
          }
          @keyframes meshFloat2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-40px, 40px) scale(0.98); }
            50% { transform: translate(-60px, 10px) scale(1.03); }
            75% { transform: translate(-20px, -30px) scale(0.97); }
          }
          @keyframes meshFloat3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(30px, -40px) scale(1.04); }
            50% { transform: translate(60px, -20px) scale(0.96); }
            75% { transform: translate(40px, 30px) scale(1.01); }
          }
          @keyframes meshFloat4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-50px, -30px) scale(0.97); }
            50% { transform: translate(-30px, 40px) scale(1.05); }
            75% { transform: translate(20px, 50px) scale(0.99); }
          }
          @keyframes meshPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.15; }
          }
        `}</style>
      </div>
    );
  }
);

GradientMeshBackground.displayName = "GradientMeshBackground";

export { GradientMeshBackground };
export type { GradientMeshBackgroundProps };
