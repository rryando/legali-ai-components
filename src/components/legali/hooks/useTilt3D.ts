import * as React from "react";

export interface UseTilt3DOptions {
  /** Maximum tilt angle in degrees */
  maxTilt?: number;
  /** Perspective distance in pixels */
  perspective?: number;
  /** Transition speed in ms */
  transitionSpeed?: number;
  /** Enable glare effect */
  enableGlare?: boolean;
  /** Glare maximum opacity */
  glareMaxOpacity?: number;
}

export interface Tilt3DState {
  tiltX: number;
  tiltY: number;
  glarePosition: { x: number; y: number };
  isHovering: boolean;
}

export interface UseTilt3DReturn {
  /** Current tilt state */
  state: Tilt3DState;
  /** Style object to apply to the element */
  style: React.CSSProperties;
  /** Glare style object */
  glareStyle: React.CSSProperties;
  /** Event handlers to attach to the element */
  handlers: {
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

/**
 * Hook for creating a 3D tilt effect on elements.
 * Tracks mouse position relative to element center and
 * calculates smooth rotateX/rotateY transforms.
 *
 * @example
 * ```tsx
 * const { style, handlers } = useTilt3D({ maxTilt: 15 });
 * return <div style={style} {...handlers}>Content</div>;
 * ```
 */
export function useTilt3D(options: UseTilt3DOptions = {}): UseTilt3DReturn {
  const {
    maxTilt = 15,
    perspective = 1000,
    transitionSpeed = 300,
    enableGlare = false,
    glareMaxOpacity = 0.2,
  } = options;

  const [state, setState] = React.useState<Tilt3DState>({
    tiltX: 0,
    tiltY: 0,
    glarePosition: { x: 50, y: 50 },
    isHovering: false,
  });

  const elementRef = React.useRef<HTMLElement | null>(null);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const element = e.currentTarget;
      elementRef.current = element;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center (-1 to 1)
      const relativeX = (e.clientX - centerX) / (rect.width / 2);
      const relativeY = (e.clientY - centerY) / (rect.height / 2);

      // Calculate tilt (inverted for natural feel)
      const tiltX = relativeY * -maxTilt;
      const tiltY = relativeX * maxTilt;

      // Calculate glare position
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

  const handleMouseEnter = React.useCallback(() => {
    setState((prev) => ({ ...prev, isHovering: true }));
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setState({
      tiltX: 0,
      tiltY: 0,
      glarePosition: { x: 50, y: 50 },
      isHovering: false,
    });
  }, []);

  const style: React.CSSProperties = {
    transform: `perspective(${perspective}px) rotateX(${state.tiltX}deg) rotateY(${state.tiltY}deg)`,
    transition: state.isHovering
      ? `transform ${transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
      : `transform ${transitionSpeed * 2}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    transformStyle: "preserve-3d",
    willChange: "transform",
  };

  const glareStyle: React.CSSProperties = enableGlare
    ? {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: `radial-gradient(
          circle at ${state.glarePosition.x}% ${state.glarePosition.y}%,
          rgba(255, 255, 255, ${state.isHovering ? glareMaxOpacity : 0}),
          transparent 60%
        )`,
        transition: `opacity ${transitionSpeed}ms ease`,
        borderRadius: "inherit",
      }
    : {};

  return {
    state,
    style,
    glareStyle,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
