import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  assessmentWritingScript,
  demoCaseRequests,
  demoPayout,
  lawyerConsultationScript,
} from "../data/marketplace-demo-content";
import type { CaseAssessment, CaseRequest } from "../data/marketplace-types";
import { useLawyerMarketplaceFlow } from "../hooks/useLawyerMarketplaceFlow";
import { LawyerAssessmentScreen } from "./LawyerAssessmentScreen";
import { LawyerCaseReviewScreen } from "./LawyerCaseReviewScreen";
import { LawyerConsultationScreen } from "./LawyerConsultationScreen";
import { LawyerDashboardScreen } from "./LawyerDashboardScreen";
import { LawyerPayoutScreen } from "./LawyerPayoutScreen";

export type LawyerMarketplaceFlowProps = {
  className?: string;
};

const LawyerMarketplaceFlow = forwardRef<HTMLDivElement, LawyerMarketplaceFlowProps>(
  ({ className }, ref) => {
    const flow = useLawyerMarketplaceFlow(demoCaseRequests);
    const { state } = flow;

    const handleSelectCase = useCallback(
      (caseRequest: CaseRequest) => {
        flow.selectCase(caseRequest);
        flow.nextStep();
      },
      [flow]
    );

    const handleAcceptCase = useCallback(() => {
      flow.nextStep();
    }, [flow]);

    const handleConsultationComplete = useCallback(() => {
      flow.nextStep();
    }, [flow]);

    const handleAssessmentComplete = useCallback(
      (assessment: CaseAssessment) => {
        flow.setAssessment(assessment);
        flow.setPayout(demoPayout);
        flow.nextStep();
      },
      [flow]
    );

    const handleReturnHome = useCallback(() => {
      flow.reset();
    }, [flow]);

    return (
      <div className={cn("relative min-h-screen", className)} ref={ref}>
        <AnimatePresence mode="wait">
          {state.currentStep === "dashboard" && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              initial={{ opacity: 0, x: 50 }}
              key="dashboard"
              transition={{ duration: 0.4 }}
            >
              <LawyerDashboardScreen
                caseRequests={state.caseRequests}
                lawyer={state.currentLawyer}
                onSelectCase={handleSelectCase}
              />
            </motion.div>
          )}

          {state.currentStep === "case-review" && state.selectedCase && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              initial={{ opacity: 0, x: 50 }}
              key="case-review"
              transition={{ duration: 0.4 }}
            >
              <LawyerCaseReviewScreen
                caseRequest={state.selectedCase}
                onAccept={handleAcceptCase}
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
              <LawyerConsultationScreen
                lawyer={state.currentLawyer}
                onConsultationComplete={handleConsultationComplete}
                script={lawyerConsultationScript}
              />
            </motion.div>
          )}

          {state.currentStep === "assessment" && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              initial={{ opacity: 0, x: 50 }}
              key="assessment"
              transition={{ duration: 0.4 }}
            >
              <LawyerAssessmentScreen
                onAssessmentComplete={handleAssessmentComplete}
                script={assessmentWritingScript}
              />
            </motion.div>
          )}

          {state.currentStep === "payout" && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              initial={{ opacity: 0, x: 50 }}
              key="payout"
              transition={{ duration: 0.4 }}
            >
              <LawyerPayoutScreen
                onReturnHome={handleReturnHome}
                payout={state.payout ?? demoPayout}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

LawyerMarketplaceFlow.displayName = "LawyerMarketplaceFlow";

export { LawyerMarketplaceFlow };
