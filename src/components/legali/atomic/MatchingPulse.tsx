import { motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MatchingPulseProps = {
  ringCount?: number;
  color?: string;
  size?: number;
  className?: string;
};

const MatchingPulse = forwardRef<HTMLDivElement, MatchingPulseProps>(
  ({ className, ringCount = 4, color = "rgba(78, 174, 208, 0.3)", size = 280 }, ref) => {
    return (
      <div
        className={cn("relative flex items-center justify-center", className)}
        ref={ref}
        style={{ width: size, height: size }}
      >
        {Array.from({ length: ringCount }).map((_, i) => {
          const key = `pulse-ring-${i}`;
          const scale = 0.4 + (i + 1) * (0.6 / ringCount);
          return (
            <motion.div
              animate={{
                scale: [scale, scale + 0.15, scale],
                opacity: [0.6 - i * 0.12, 0.3 - i * 0.06, 0.6 - i * 0.12],
              }}
              className="absolute inset-0 rounded-full"
              key={key}
              style={{
                border: `2px solid ${color}`,
                boxShadow: `0 0 20px ${color}`,
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    );
  }
);

MatchingPulse.displayName = "MatchingPulse";

export { MatchingPulse };
export type { MatchingPulseProps };
