import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MatchingPulse } from "../atomic/MatchingPulse";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot";

type MatchingAnimationProps = {
  searchMessages: string[];
  matchDelayMs?: number;
  onMatchComplete?: () => void;
  className?: string;
};

const MatchingAnimation = forwardRef<HTMLDivElement, MatchingAnimationProps>(
  ({ className, searchMessages, matchDelayMs = 5000, onMatchComplete }, ref) => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [mascotMotion, setMascotMotion] = useState<MascotMotionType>(MascotMotion.THINKING);

    // Cycle through search messages
    useEffect(() => {
      if (isComplete) return;

      const messageInterval = matchDelayMs / searchMessages.length;
      const timer = setInterval(() => {
        setMessageIndex((prev) => {
          const next = prev + 1;
          if (next >= searchMessages.length) {
            clearInterval(timer);
            return prev;
          }
          return next;
        });
      }, messageInterval);

      return () => clearInterval(timer);
    }, [isComplete, matchDelayMs, searchMessages.length]);

    // Completion timer
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsComplete(true);
        setMascotMotion(MascotMotion.CELEBRATE);
        onMatchComplete?.();
      }, matchDelayMs);

      return () => clearTimeout(timer);
    }, [matchDelayMs, onMatchComplete]);

    // Mascot transitions
    useEffect(() => {
      if (isComplete) return;
      const halfway = matchDelayMs * 0.6;
      const timer = setTimeout(() => {
        setMascotMotion(MascotMotion.IDEA);
      }, halfway);
      return () => clearTimeout(timer);
    }, [isComplete, matchDelayMs]);

    return (
      <div
        className={cn("flex flex-col items-center justify-center gap-8 py-12", className)}
        ref={ref}
      >
        <div className="relative flex items-center justify-center">
          <MatchingPulse ringCount={isComplete ? 0 : 4} size={280} />
          <div className="absolute">
            <LegaliMascot height={120} motion={mascotMotion} width={120} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className={cn("text-center font-medium text-slate-600", isComplete && "text-[#4eaed0]")}
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: 8 }}
            key={messageIndex}
            transition={{ duration: 0.3 }}
          >
            {searchMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>

        {!isComplete && (
          <div className="flex gap-1.5">
            {searchMessages.map((_, i) => (
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                  i <= messageIndex ? "bg-[#4eaed0]" : "bg-slate-200"
                )}
                key={`dot-${searchMessages[i]}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

MatchingAnimation.displayName = "MatchingAnimation";

export { MatchingAnimation };
export type { MatchingAnimationProps };
