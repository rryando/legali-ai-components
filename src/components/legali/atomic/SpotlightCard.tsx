import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the spotlight effect (CSS color value) */
  spotlightColor?: string
  /** Size of the spotlight radius in pixels */
  spotlightSize?: number
}

/**
 * A card component with a mouse-follow spotlight effect.
 * Creates an interactive glow that follows the cursor.
 */
const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  (
    {
      children,
      className,
      spotlightColor = "rgba(78, 174, 208, 0.15)",
      spotlightSize = 600,
      ...props
    },
    ref
  ) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = React.useState(0)

    // Merge refs
    React.useImperativeHandle(ref, () => divRef.current as HTMLDivElement)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return
      const rect = divRef.current.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      setOpacity(1)
    }

    const handleMouseEnter = () => setOpacity(1)
    const handleMouseLeave = () => setOpacity(0)

    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-xl transition-all duration-300",
          "shadow-lg hover:shadow-xl hover:border-slate-300/50",
          className
        )}
        {...props}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />
        <div className="relative">{children}</div>
      </div>
    )
  }
)

SpotlightCard.displayName = "SpotlightCard"

export { SpotlightCard }
