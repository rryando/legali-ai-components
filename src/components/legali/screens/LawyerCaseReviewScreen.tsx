import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "../atomic/StepIndicator";
import { CaseReviewPanel } from "../composite/CaseReviewPanel";
import type { CaseRequest } from "../data/marketplace-types";
import { LegaliMascot, MascotMotion } from "../mascot";

export type LawyerCaseReviewScreenProps = {
  caseRequest: CaseRequest;
  onAccept?: () => void;
  onDecline?: () => void;
  onRefer?: () => void;
  className?: string;
};

const STEPS = [
  { label: "Dashboard" },
  { label: "Review" },
  { label: "Consultation" },
  { label: "Assessment" },
  { label: "Payout" },
];

const LawyerCaseReviewScreen = forwardRef<HTMLDivElement, LawyerCaseReviewScreenProps>(
  ({ className, caseRequest, onAccept, onDecline, onRefer }, ref) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-indigo-50 via-purple-50/30 to-white px-4 py-8",
          className
        )}
        ref={ref}
      >
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6 flex justify-center">
            <StepIndicator currentStep={1} steps={STEPS} />
          </div>

          <div className="mb-6 flex justify-center">
            <LegaliMascot height={80} motion={MascotMotion.READING} width={80} />
          </div>

          <CaseReviewPanel
            caseRequest={caseRequest}
            onAccept={onAccept}
            onDecline={onDecline}
            onRefer={onRefer}
          />
        </div>
      </div>
    );
  }
);

LawyerCaseReviewScreen.displayName = "LawyerCaseReviewScreen";

export { LawyerCaseReviewScreen };
