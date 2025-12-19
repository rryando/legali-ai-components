import * as React from "react"
import { cn } from "@/lib/utils"
import { useCountUp, useInView } from "../hooks/useAnimations"
import { SpotlightCard } from "./SpotlightCard"

export interface AnimatedCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Target number to count up to */
  target: number
  /** Text to display before the number */
  prefix?: string
  /** Text to display after the number */
  suffix?: string
  /** Label text below the counter */
  label: string
  /** Animation duration in milliseconds */
  duration?: number
  /** Whether to use a spotlight card wrapper */
  useCard?: boolean
}

/**
 * An animated counter that counts up when scrolled into view.
 * Supports prefix, suffix, and label text.
 */
const AnimatedCounter = React.forwardRef<HTMLDivElement, AnimatedCounterProps>(
  (
    {
      className,
      target,
      prefix = "",
      suffix = "",
      label,
      duration = 2000,
      useCard = true,
      ...props
    },
    ref
  ) => {
    const { ref: inViewRef, isInView } = useInView()
    const { count, start } = useCountUp(target, duration, true)

    React.useEffect(() => {
      if (isInView) start()
    }, [isInView, start])

    const content = (
      <>
        <div
          ref={inViewRef}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 group-hover:scale-105 transition-transform"
        >
          {prefix}
          {count}
          {suffix}
        </div>
        <div className="text-sm text-slate-600">{label}</div>
      </>
    )

    if (useCard) {
      return (
        <SpotlightCard
          ref={ref}
          className={cn("p-6 rounded-2xl text-center", className)}
          {...props}
        >
          {content}
        </SpotlightCard>
      )
    }

    return (
      <div ref={ref} className={cn("text-center", className)} {...props}>
        {content}
      </div>
    )
  }
)

AnimatedCounter.displayName = "AnimatedCounter"

export { AnimatedCounter }
