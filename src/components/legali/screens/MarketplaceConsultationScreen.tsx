import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "../atomic/StepIndicator";
import { CallInterface } from "../composite/CallInterface";
import { CaseAssessmentCard } from "../composite/CaseAssessmentCard";
import { ConsultationChat, type ConsultationMode } from "../composite/ConsultationChat";
import type {
  CaseAssessment,
  ChatMessage,
  ConsultationScriptStep,
  Lawyer,
} from "../data/marketplace-types";

export type MarketplaceConsultationScreenProps = {
  lawyer: Lawyer;
  script: ConsultationScriptStep[];
  assessment: CaseAssessment;
  onViewReceipt?: () => void;
  className?: string;
};

const STEPS = [
  { label: "Aufnahme" },
  { label: "Matching" },
  { label: "Beratung" },
  { label: "Beleg" },
];

function createLawyerMessage(text: string, id?: string): ChatMessage {
  return {
    id: id ?? `lawyer-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    sender: "lawyer",
    text,
    timestamp: new Date(),
  };
}

const MarketplaceConsultationScreen = forwardRef<
  HTMLDivElement,
  MarketplaceConsultationScreenProps
>(({ className, lawyer, script, assessment, onViewReceipt }, ref) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLawyerTyping, setIsLawyerTyping] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [mode, setMode] = useState<ConsultationMode>("text");
  const scriptIndexRef = useRef(0);

  // Auto-play lawyer script
  useEffect(() => {
    if (scriptIndexRef.current >= script.length) return;

    const step = script[scriptIndexRef.current];
    setIsLawyerTyping(true);

    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, createLawyerMessage(step.lawyerMessage)]);
      setIsLawyerTyping(false);

      if (step.showAssessment) {
        setTimeout(() => setShowAssessment(true), 500);
      }

      scriptIndexRef.current += 1;
    }, step.delayMs ?? 1500);

    return () => clearTimeout(timer);
  }, [script, messages.length]);

  const handleSendMessage = useCallback(
    (_text: string) => {
      // Trigger next script step when user sends a message
      if (scriptIndexRef.current < script.length) {
        const step = script[scriptIndexRef.current];
        setIsLawyerTyping(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, createLawyerMessage(step.lawyerMessage)]);
          setIsLawyerTyping(false);
          if (step.showAssessment) {
            setTimeout(() => setShowAssessment(true), 500);
          }
          scriptIndexRef.current += 1;
        }, step.delayMs ?? 1500);
      }
    },
    [script]
  );

  const handleCallEnd = useCallback(() => {
    setMode("text");
  }, []);

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-sky-50 via-blue-50 to-white px-4 py-8",
        className
      )}
      ref={ref}
    >
      <div className="relative z-10 w-full max-w-2xl">
        <div className="mb-6 flex justify-center">
          <StepIndicator
            currentStep={showAssessment ? 2 : 2}
            steps={STEPS}
          />
        </div>

        {mode === "text" ? (
          <ConsultationChat
            activeMode={mode}
            isLawyerTyping={isLawyerTyping}
            lawyer={lawyer}
            messages={messages}
            onModeChange={setMode}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <CallInterface
            lawyer={lawyer}
            mode={mode === "video" ? "video" : "call"}
            onEnd={handleCallEnd}
          />
        )}

        <AnimatePresence>
          {showAssessment && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
              exit={{ opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 24 }}
            >
              <CaseAssessmentCard
                assessment={assessment}
                onViewReceipt={onViewReceipt}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

MarketplaceConsultationScreen.displayName = "MarketplaceConsultationScreen";

export { MarketplaceConsultationScreen };
