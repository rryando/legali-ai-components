import * as React from "react";

export interface UseCursorGlowOptions {
  /** Size of the glow in pixels */
  glowSize?: number;
  /** Color of the glow */
  glowColor?: string;
  /** Opacity of the glow */
  glowOpacity?: number;
  /** Whether to enable trail effect (multiple glow points) */
  enableTrail?: boolean;
  /** Number of trail points */
  trailLength?: number;
  /** Fade duration in ms */
  fadeDuration?: number;
}

export interface GlowPoint {
  x: number;
  y: number;
  opacity: number;
  id: number;
}

export interface UseCursorGlowReturn {
  /** Current glow position */
  position: { x: number; y: number };
  /** Whether cursor is within the container */
  isActive: boolean;
  /** Trail points for trail effect */
  trailPoints: GlowPoint[];
  /** Style for the main glow */
  glowStyle: React.CSSProperties;
  /** Event handlers to attach to container */
  handlers: {
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

let glowIdCounter = 0;

/**
 * Hook for creating a cursor glow effect.
 * Tracks mouse position and creates ambient glow that follows cursor.
 *
 * @example
 * ```tsx
 * const { glowStyle, handlers, isActive } = useCursorGlow();
 * return (
 *   <div {...handlers} style={{ position: 'relative' }}>
 *     {isActive && <div style={glowStyle} />}
 *     Content
 *   </div>
 * );
 * ```
 */
export function useCursorGlow(
  options: UseCursorGlowOptions = {}
): UseCursorGlowReturn {
  const {
    glowSize = 400,
    glowColor = "rgba(78, 174, 208, 0.15)",
    glowOpacity = 1,
    enableTrail = false,
    trailLength = 5,
    fadeDuration = 300,
  } = options;

  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = React.useState(false);
  const [trailPoints, setTrailPoints] = React.useState<GlowPoint[]>([]);

  const containerRef = React.useRef<HTMLElement | null>(null);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const element = e.currentTarget;
      containerRef.current = element;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      if (enableTrail) {
        const newPoint: GlowPoint = {
          x,
          y,
          opacity: 1,
          id: ++glowIdCounter,
        };

        setTrailPoints((prev) => {
          const updated = [...prev, newPoint].slice(-trailLength);
          // Apply decreasing opacity to trail points
          return updated.map((point, index) => ({
            ...point,
            opacity: ((index + 1) / updated.length) * glowOpacity,
          }));
        });
      }
    },
    [enableTrail, trailLength, glowOpacity]
  );

  const handleMouseEnter = React.useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsActive(false);
    setTrailPoints([]);
  }, []);

  // Cleanup old trail points
  React.useEffect(() => {
    if (!enableTrail || trailPoints.length === 0) return;

    const timer = setTimeout(() => {
      setTrailPoints((prev) => prev.slice(1));
    }, fadeDuration / trailLength);

    return () => clearTimeout(timer);
  }, [trailPoints, enableTrail, fadeDuration, trailLength]);

  const glowStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x - glowSize / 2,
    top: position.y - glowSize / 2,
    width: glowSize,
    height: glowSize,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
    opacity: isActive ? glowOpacity : 0,
    transition: `opacity ${fadeDuration}ms ease`,
    pointerEvents: "none",
    zIndex: 0,
  };

  return {
    position,
    isActive,
    trailPoints,
    glowStyle,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
