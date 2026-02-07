/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-cursor-glow.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-cursor-glow.json"
 */
import type { HTMLAttributes, MouseEvent } from "react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type CursorGlowProps = {
  /** Size of the glow in pixels */
  glowSize?: number;
  /** Color of the glow (CSS color value) */
  glowColor?: string;
  /** Opacity of the glow (0-1) */
  glowOpacity?: number;
  /** Blur amount for the glow */
  blurAmount?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Container with ambient glow that follows the cursor.
 * Creates a subtle, premium lighting effect.
 *
 * @example
 * ```tsx
 * <CursorGlow glowColor="rgba(78, 174, 208, 0.2)">
 *   <div className="p-8">Content with glow</div>
 * </CursorGlow>
 * ```
 */
const CursorGlow = forwardRef<HTMLDivElement, CursorGlowProps>(
  (
    {
      className,
      children,
      glowSize = 500,
      glowColor = "rgba(78, 174, 208, 0.15)",
      glowOpacity = 1,
      blurAmount = 80,
      ...props
    },
    ref
  ) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }, []);

    const handleMouseEnter = useCallback(() => {
      setIsActive(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsActive(false);
    }, []);

    return (
      <div
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={ref}
        {...props}
      >
        {/* Glow element */}
        <div
          className="pointer-events-none absolute transition-opacity duration-500"
          style={{
            left: position.x - glowSize / 2,
            top: position.y - glowSize / 2,
            width: glowSize,
            height: glowSize,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
            opacity: isActive ? glowOpacity : 0,
            filter: `blur(${blurAmount}px)`,
            zIndex: 0,
          }}
        />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

CursorGlow.displayName = "CursorGlow";

export { CursorGlow };
export type { CursorGlowProps };
