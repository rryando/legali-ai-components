/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-flow.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-flow.json"
 */
import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  demoCaseAssessment,
  demoCaseDetails,
  demoLawyers,
  demoReceipt,
  consultationScript,
  intakeChatScript,
  matchingSearchMessages,
} from "../data/marketplace-demo-content";
import type { CaseDetails } from "../data/marketplace-types";
import { useMarketplaceFlow } from "../hooks/useMarketplaceFlow";
import { MarketplaceConsultationScreen } from "./MarketplaceConsultationScreen";
import { MarketplaceIntakeScreen } from "./MarketplaceIntakeScreen";
import { MarketplaceMatchingScreen } from "./MarketplaceMatchingScreen";
import { MarketplaceReceiptScreen } from "./MarketplaceReceiptScreen";

export type MarketplaceFlowProps = {
  className?: string;
};

const MarketplaceFlow = forwardRef<HTMLDivElement, MarketplaceFlowProps>(({ className }, ref) => {
  const flow = useMarketplaceFlow();
  const { state } = flow;

  const handleConfirmCase = useCallback(
    (caseDetails: CaseDetails) => {
      flow.setCaseDetails(caseDetails);
      flow.setSelectedLawyer(demoLawyers[0]);
      flow.nextStep();
    },
    [flow]
  );

  const handleStartConsultation = useCallback(() => {
    flow.nextStep();
  }, [flow]);

  const handleViewReceipt = useCallback(() => {
    flow.setAssessment(demoCaseAssessment);
    flow.setReceipt(demoReceipt);
    flow.nextStep();
  }, [flow]);

  const handleReturnHome = useCallback(() => {
    flow.reset();
  }, [flow]);

  return (
    <div className={cn("relative min-h-screen", className)} ref={ref}>
      <AnimatePresence mode="wait">
        {state.currentStep === "intake" && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            initial={{ opacity: 0, x: 50 }}
            key="intake"
            transition={{ duration: 0.4 }}
          >
            <MarketplaceIntakeScreen
              caseDetails={demoCaseDetails}
              onConfirmCase={handleConfirmCase}
              script={intakeChatScript}
            />
          </motion.div>
        )}

        {state.currentStep === "matching" && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            initial={{ opacity: 0, x: 50 }}
            key="matching"
            transition={{ duration: 0.4 }}
          >
            <MarketplaceMatchingScreen
              matchedLawyer={state.selectedLawyer ?? demoLawyers[0]}
              onStartConsultation={handleStartConsultation}
              searchMessages={matchingSearchMessages}
            />
          </motion.div>
        )}

        {state.currentStep === "consultation" && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            initial={{ opacity: 0, x: 50 }}
            key="consultation"
            transition={{ duration: 0.4 }}
          >
            <MarketplaceConsultationScreen
              assessment={demoCaseAssessment}
              lawyer={state.selectedLawyer ?? demoLawyers[0]}
              onViewReceipt={handleViewReceipt}
              script={consultationScript}
            />
          </motion.div>
        )}

        {state.currentStep === "receipt" && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            initial={{ opacity: 0, x: 50 }}
            key="receipt"
            transition={{ duration: 0.4 }}
          >
            <MarketplaceReceiptScreen
              onReturnHome={handleReturnHome}
              receipt={state.receipt ?? demoReceipt}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

MarketplaceFlow.displayName = "MarketplaceFlow";

export { MarketplaceFlow };
