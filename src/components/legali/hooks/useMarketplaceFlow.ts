import { useCallback, useState } from "react";
import type {
  CaseAssessment,
  CaseDetails,
  ChatMessage,
  Lawyer,
  MarketplaceFlowState,
  MarketplaceStep,
  ReceiptData,
} from "../data/marketplace-types";

const STEP_ORDER: MarketplaceStep[] = ["intake", "matching", "consultation", "receipt"];

const initialState: MarketplaceFlowState = {
  currentStep: "intake",
  caseDetails: null,
  selectedLawyer: null,
  assessment: null,
  receipt: null,
  chatMessages: [],
  consultationMessages: [],
};

export function useMarketplaceFlow() {
  const [state, setState] = useState<MarketplaceFlowState>(initialState);

  const goToStep = useCallback((step: MarketplaceStep) => {
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

  const setCaseDetails = useCallback((caseDetails: CaseDetails) => {
    setState((prev) => ({ ...prev, caseDetails }));
  }, []);

  const setSelectedLawyer = useCallback((lawyer: Lawyer) => {
    setState((prev) => ({ ...prev, selectedLawyer: lawyer }));
  }, []);

  const setAssessment = useCallback((assessment: CaseAssessment) => {
    setState((prev) => ({ ...prev, assessment }));
  }, []);

  const setReceipt = useCallback((receipt: ReceiptData) => {
    setState((prev) => ({ ...prev, receipt }));
  }, []);

  const setChatMessages = useCallback((messages: ChatMessage[]) => {
    setState((prev) => ({ ...prev, chatMessages: messages }));
  }, []);

  const setConsultationMessages = useCallback((messages: ChatMessage[]) => {
    setState((prev) => ({ ...prev, consultationMessages: messages }));
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const stepIndex = STEP_ORDER.indexOf(state.currentStep);

  return {
    state,
    stepIndex,
    goToStep,
    nextStep,
    setCaseDetails,
    setSelectedLawyer,
    setAssessment,
    setReceipt,
    setChatMessages,
    setConsultationMessages,
    reset,
  };
}
