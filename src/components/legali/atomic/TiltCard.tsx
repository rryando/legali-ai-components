import type { HTMLAttributes, MouseEvent } from "react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type Tilt3DState = {
  tiltX: number;
  tiltY: number;
  glarePosition: { x: number; y: number };
  isHovering: boolean;
};

type TiltCardProps = {
  /** Maximum tilt angle in degrees */
  maxTilt?: number;
  /** Perspective distance */
  perspective?: number;
  /** Enable glare effect */
  enableGlare?: boolean;
  /** Glare opacity */
  glareMaxOpacity?: number;
  /** Transition speed in ms */
  transitionSpeed?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Card with smooth 3D perspective tilt that follows cursor.
 * Creates a premium, Apple-like interactive effect.
 *
 * @example
 * ```tsx
 * <TiltCard maxTilt={15} enableGlare>
 *   <div className="p-8">Hover me!</div>
 * </TiltCard>
 * ```
 */
const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  (
    {
      className,
      children,
      maxTilt = 10,
      perspective = 1000,
      enableGlare = true,
      glareMaxOpacity = 0.15,
      transitionSpeed = 300,
      ...props
    },
    ref
  ) => {
    const [state, setState] = useState<Tilt3DState>({
      tiltX: 0,
      tiltY: 0,
      glarePosition: { x: 50, y: 50 },
      isHovering: false,
    });

    const handleMouseMove = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const relativeX = (e.clientX - centerX) / (rect.width / 2);
        const relativeY = (e.clientY - centerY) / (rect.height / 2);

        const tiltX = relativeY * -maxTilt;
        const tiltY = relativeX * maxTilt;

        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;

        setState({
          tiltX,
          tiltY,
          glarePosition: { x: glareX, y: glareY },
          isHovering: true,
        });
      },
      [maxTilt]
    );

    const handleMouseLeave = useCallback(() => {
      setState({
        tiltX: 0,
        tiltY: 0,
        glarePosition: { x: 50, y: 50 },
        isHovering: false,
      });
    }, []);

    const cardStyle = {
      transform: `perspective(${perspective}px) rotateX(${state.tiltX}deg) rotateY(${state.tiltY}deg)`,
      transition: state.isHovering
        ? `transform ${transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
        : `transform ${transitionSpeed * 2}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      transformStyle: "preserve-3d" as const,
      willChange: "transform" as const,
    };

    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "transition-shadow duration-300",
          state.isHovering && "shadow-2xl",
          className
        )}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={ref}
        style={cardStyle}
        {...props}
      >
        {enableGlare && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: state.isHovering ? 1 : 0,
              background: `radial-gradient(
                circle at ${state.glarePosition.x}% ${state.glarePosition.y}%,
                rgba(255, 255, 255, ${glareMaxOpacity}),
                transparent 60%
              )`,
              borderRadius: "inherit",
            }}
          />
        )}
        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </div>
    );
  }
);

TiltCard.displayName = "TiltCard";

export { TiltCard };
export type { TiltCardProps };
