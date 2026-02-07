import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "../atomic/StepIndicator";
import { ConsultationReceipt } from "../composite/ConsultationReceipt";
import type { ReceiptData } from "../data/marketplace-types";
import { LegaliMascot, MascotMotion } from "../mascot";

export type MarketplaceReceiptScreenProps = {
  receipt: ReceiptData;
  onReturnHome?: () => void;
  className?: string;
};

const STEPS = [
  { label: "Intake" },
  { label: "Matching" },
  { label: "Consultation" },
  { label: "Receipt" },
];

const MarketplaceReceiptScreen = forwardRef<HTMLDivElement, MarketplaceReceiptScreenProps>(
  ({ className, receipt, onReturnHome }, ref) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-sky-50 via-blue-50 to-white px-4 py-8",
          className
        )}
        ref={ref}
      >
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] animate-pulse rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6 flex justify-center">
            <StepIndicator currentStep={3} steps={STEPS} />
          </div>

          <div className="mb-6 flex justify-center">
            <LegaliMascot height={100} motion={MascotMotion.CELEBRATE} width={100} />
          </div>

          <ConsultationReceipt
            onReturnHome={onReturnHome}
            receipt={receipt}
          />
        </div>
      </div>
    );
  }
);

MarketplaceReceiptScreen.displayName = "MarketplaceReceiptScreen";

export { MarketplaceReceiptScreen };
