import { motion } from "motion/react";
import type { HTMLAttributes, MouseEvent } from "react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type InteractiveStatsCardProps = {
  /** Main statistic value */
  value: string | number;
  /** Label describing the stat */
  label: string;
  /** Optional prefix (e.g., "$") */
  prefix?: string;
  /** Optional suffix (e.g., "%", "K+") */
  suffix?: string;
  /** Color accent for the card */
  accentColor?: string;
  /** Enable sparkline on hover */
  showSparkline?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Enhanced stat card with hover effects and optional sparkline.
 * Features glassmorphism and 3D lift on hover.
 *
 * @example
 * ```tsx
 * <InteractiveStatsCard
 *   value={50}
 *   suffix="K+"
 *   label="Cases Analyzed"
 * />
 * ```
 */
const InteractiveStatsCard = forwardRef<
  HTMLDivElement,
  InteractiveStatsCardProps
>(
  (
    {
      className,
      value,
      label,
      prefix = "",
      suffix = "",
      accentColor = "#4eaed0",
      showSparkline = true,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }, []);

    // Simple sparkline data (would be real data in production)
    const sparklinePoints =
      "M0,20 L10,15 L20,18 L30,10 L40,12 L50,5 L60,8 L70,3 L80,6 L90,4 L100,2";

    return (
      <motion.div
        animate={{
          y: isHovered ? -4 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        className={cn(
          "group relative overflow-hidden rounded-2xl p-6",
          "border border-white/40 bg-white/60 backdrop-blur-xl",
          "shadow-lg transition-shadow duration-300",
          isHovered && "shadow-2xl shadow-slate-200/50",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        ref={ref}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, ${accentColor}15, transparent 60%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-baseline gap-1">
            {prefix && (
              <span className="font-semibold text-lg text-slate-400">
                {prefix}
              </span>
            )}
            <span
              className="font-bold text-4xl tabular-nums"
              style={{ color: isHovered ? accentColor : "#0f172a" }}
            >
              {value}
            </span>
            {suffix && (
              <span className="font-semibold text-lg text-slate-400">
                {suffix}
              </span>
            )}
          </div>
          <p className="mt-1 text-slate-500 text-sm">{label}</p>

          {/* Sparkline on hover */}
          {showSparkline && (
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? 24 : 0,
              }}
              className="mt-3 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="h-6 w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 24"
              >
                <defs>
                  <linearGradient
                    id={`sparkline-gradient-${label}`}
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={accentColor}
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor={accentColor}
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                {/* Fill area */}
                <path
                  d={`${sparklinePoints} L100,24 L0,24 Z`}
                  fill={`url(#sparkline-gradient-${label})`}
                />
                {/* Line */}
                <path
                  d={sparklinePoints}
                  fill="none"
                  stroke={accentColor}
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Bottom accent line */}
        <motion.div
          animate={{ scaleX: isHovered ? 1 : 0 }}
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left"
          initial={{ scaleX: 0 }}
          style={{ backgroundColor: accentColor }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }
);

InteractiveStatsCard.displayName = "InteractiveStatsCard";

export { InteractiveStatsCard };
export type { InteractiveStatsCardProps };
