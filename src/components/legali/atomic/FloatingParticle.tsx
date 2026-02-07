/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-floating-particle.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-floating-particle.json"
 */
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type FloatingParticleProps = {
  /** Icon or element to display */
  icon: ReactNode;
  /** Size of the particle in pixels */
  size?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** Glow color */
  glowColor?: string;
  /** Enable glow effect */
  enableGlow?: boolean;
  /** Initial position offset (x, y as percentages) */
  initialPosition?: { x: number; y: number };
} & HTMLAttributes<HTMLDivElement>;

/**
 * Single floating particle with organic motion path.
 * Used by FloatingParticlesSystem or standalone.
 *
 * @example
 * ```tsx
 * <FloatingParticle
 *   icon={<Scale className="h-6 w-6" />}
 *   size={48}
 *   glowColor="rgba(78, 174, 208, 0.4)"
 * />
 * ```
 */
const FloatingParticle = forwardRef<HTMLDivElement, FloatingParticleProps>(
  (
    {
      className,
      icon,
      size = 40,
      duration = 15,
      delay = 0,
      glowColor = "rgba(78, 174, 208, 0.3)",
      enableGlow = true,
      initialPosition = { x: 50, y: 50 },
      ...props
    },
    ref
  ) => {
    // Generate unique animation name based on position
    const animationName = `float-${Math.round(initialPosition.x)}-${Math.round(initialPosition.y)}`;

    return (
      <div
        className={cn(
          "absolute flex items-center justify-center rounded-xl",
          "bg-white/80 shadow-lg backdrop-blur-sm",
          "transition-transform duration-300 hover:scale-110",
          className
        )}
        ref={ref}
        style={{
          width: size,
          height: size,
          left: `${initialPosition.x}%`,
          top: `${initialPosition.y}%`,
          animation: `${animationName} ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          boxShadow: enableGlow ? `0 0 20px ${glowColor}` : undefined,
        }}
        {...props}
      >
        {icon}

        <style>{`
          @keyframes ${animationName} {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
            }
            25% {
              transform: translate(-50%, -50%) translateY(-15px) translateX(10px) rotate(5deg);
            }
            50% {
              transform: translate(-50%, -50%) translateY(-5px) translateX(-8px) rotate(-3deg);
            }
            75% {
              transform: translate(-50%, -50%) translateY(-20px) translateX(5px) rotate(2deg);
            }
          }
        `}</style>
      </div>
    );
  }
);

FloatingParticle.displayName = "FloatingParticle";

export { FloatingParticle };
export type { FloatingParticleProps };
