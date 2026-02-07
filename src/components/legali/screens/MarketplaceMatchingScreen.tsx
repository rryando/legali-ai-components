/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-matching-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-matching-screen.json"
 */
import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "../atomic/StepIndicator";
import { LawyerProfileCard } from "../composite/LawyerProfileCard";
import { MatchingAnimation } from "../composite/MatchingAnimation";
import type { Lawyer } from "../data/marketplace-types";

export type MarketplaceMatchingScreenProps = {
  searchMessages: string[];
  matchedLawyer: Lawyer;
  matchDelayMs?: number;
  onStartConsultation?: () => void;
  className?: string;
};

const STEPS = [
  { label: "Intake" },
  { label: "Matching" },
  { label: "Consultation" },
  { label: "Receipt" },
];

const MarketplaceMatchingScreen = forwardRef<HTMLDivElement, MarketplaceMatchingScreenProps>(
  ({ className, searchMessages, matchedLawyer, matchDelayMs = 5000, onStartConsultation }, ref) => {
    const [showLawyer, setShowLawyer] = useState(false);

    const handleMatchComplete = useCallback(() => {
      setShowLawyer(true);
    }, []);

    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-sky-50 via-blue-50 to-white px-4 py-8",
          className
        )}
        ref={ref}
      >
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6 flex justify-center">
            <StepIndicator currentStep={1} steps={STEPS} />
          </div>

          <MatchingAnimation
            matchDelayMs={matchDelayMs}
            onMatchComplete={handleMatchComplete}
            searchMessages={searchMessages}
          />

          <AnimatePresence>
            {showLawyer && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
                exit={{ opacity: 0, y: 20 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.3 }}
              >
                <LawyerProfileCard
                  lawyer={matchedLawyer}
                  onStartConsultation={onStartConsultation}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

MarketplaceMatchingScreen.displayName = "MarketplaceMatchingScreen";

export { MarketplaceMatchingScreen };
