/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-payout-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-payout-screen.json"
 */
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "../atomic/StepIndicator";
import { PayoutSummary } from "../composite/PayoutSummary";
import type { PayoutData } from "../data/marketplace-types";
import { LegaliMascot, MascotMotion } from "../mascot";

export type LawyerPayoutScreenProps = {
  payout: PayoutData;
  onReturnHome?: () => void;
  className?: string;
};

const STEPS = [
  { label: "Dashboard" },
  { label: "Review" },
  { label: "Consultation" },
  { label: "Assessment" },
  { label: "Payout" },
];

const LawyerPayoutScreen = forwardRef<HTMLDivElement, LawyerPayoutScreenProps>(
  ({ className, payout, onReturnHome }, ref) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-indigo-50 via-purple-50/30 to-white px-4 py-8",
          className
        )}
        ref={ref}
      >
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] animate-pulse rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6 flex justify-center">
            <StepIndicator currentStep={4} steps={STEPS} />
          </div>

          <div className="mb-6 flex justify-center">
            <LegaliMascot height={100} motion={MascotMotion.CELEBRATE} width={100} />
          </div>

          <PayoutSummary onReturnHome={onReturnHome} payout={payout} />
        </div>
      </div>
    );
  }
);

LawyerPayoutScreen.displayName = "LawyerPayoutScreen";

export { LawyerPayoutScreen };
