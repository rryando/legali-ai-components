import { useCallback, useState } from "react";
import type {
  CaseAssessment,
  CaseRequest,
  ChatMessage,
  LawyerMarketplaceFlowState,
  LawyerMarketplaceStep,
  PayoutData,
} from "../data/marketplace-types";
import { demoLawyers } from "../data/marketplace-demo-content";

const STEP_ORDER: LawyerMarketplaceStep[] = [
  "dashboard",
  "case-review",
  "consultation",
  "assessment",
  "payout",
];

const initialState: LawyerMarketplaceFlowState = {
  currentStep: "dashboard",
  caseRequests: [],
  selectedCase: null,
  assessment: null,
  payout: null,
  consultationMessages: [],
  currentLawyer: demoLawyers[0],
};

export function useLawyerMarketplaceFlow(caseRequests?: CaseRequest[]) {
  const [state, setState] = useState<LawyerMarketplaceFlowState>({
    ...initialState,
    caseRequests: caseRequests ?? [],
  });

  const goToStep = useCallback((step: LawyerMarketplaceStep) => {
    setState((prev) => ({ ...prev, currentStep: step }));
  }, []);

  const nextStep = useCallback(() => {
    setState((prev) => {
      const currentIndex = STEP_ORDER.indexOf(prev.currentStep);
      if (currentIndex < STEP_ORDER.length - 1) {
        return { ...prev, currentStep: STEP_ORDER[currentIndex + 1] };
      }
      return prev;
    });
  }, []);

  const setCaseRequests = useCallback((requests: CaseRequest[]) => {
    setState((prev) => ({ ...prev, caseRequests: requests }));
  }, []);

  const selectCase = useCallback((caseRequest: CaseRequest) => {
    setState((prev) => ({ ...prev, selectedCase: caseRequest }));
  }, []);

  const setAssessment = useCallback((assessment: CaseAssessment) => {
    setState((prev) => ({ ...prev, assessment }));
  }, []);

  const setPayout = useCallback((payout: PayoutData) => {
    setState((prev) => ({ ...prev, payout }));
  }, []);

  const setConsultationMessages = useCallback((messages: ChatMessage[]) => {
    setState((prev) => ({ ...prev, consultationMessages: messages }));
  }, []);

  const reset = useCallback(() => {
    setState({
      ...initialState,
      caseRequests: caseRequests ?? [],
    });
  }, [caseRequests]);

  const stepIndex = STEP_ORDER.indexOf(state.currentStep);

  return {
    state,
    stepIndex,
    goToStep,
    nextStep,
    setCaseRequests,
    selectCase,
    setAssessment,
    setPayout,
    setConsultationMessages,
    reset,
  };
}
