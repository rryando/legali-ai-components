/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-consultation-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-consultation-screen.json"
 */
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { forwardRef, useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { StepIndicator } from "../atomic/StepIndicator";
import { CallInterface } from "../composite/CallInterface";
import { ConsultationChat, type ConsultationMode } from "../composite/ConsultationChat";
import type { ChatMessage, Lawyer, LawyerConsultationScriptStep } from "../data/marketplace-types";

export type LawyerConsultationScreenProps = {
  lawyer: Lawyer;
  script: LawyerConsultationScriptStep[];
  onConsultationComplete?: () => void;
  className?: string;
};

const STEPS = [
  { label: "Dashboard" },
  { label: "Review" },
  { label: "Consultation" },
  { label: "Assessment" },
  { label: "Payout" },
];

function createMessage(sender: "lawyer" | "user", text: string): ChatMessage {
  return {
    id: `${sender}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    sender: sender === "user" ? "user" : "lawyer",
    text,
    timestamp: new Date(),
  };
}

const LawyerConsultationScreen = forwardRef<HTMLDivElement, LawyerConsultationScreenProps>(
  ({ className, lawyer, script, onConsultationComplete }, ref) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [mode, setMode] = useState<ConsultationMode>("text");
    const scriptIndexRef = useRef(0);
    const scriptComplete = scriptIndexRef.current >= script.length;

    const handleAdvance = useCallback(() => {
      if (scriptIndexRef.current >= script.length) return;

      const step = script[scriptIndexRef.current];
      setMessages((prev) => [...prev, createMessage(step.sender, step.message)]);
      scriptIndexRef.current += 1;
    }, [script]);

    const handleCallEnd = useCallback(() => {
      setMode("text");
    }, []);

    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-indigo-50 via-purple-50/30 to-white px-4 py-8",
          className
        )}
        ref={ref}
      >
        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6 flex justify-center">
            <StepIndicator currentStep={2} steps={STEPS} />
          </div>

          <AnimatePresence mode="wait">
            {mode === "text" ? (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="text"
              >
                <ConsultationChat
                  activeMode={mode}
                  isLawyerTyping={false}
                  lawyer={lawyer}
                  messages={messages}
                  onModeChange={setMode}
                  onSendMessage={() => {}}
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="call"
              >
                <CallInterface
                  lawyer={lawyer}
                  mode={mode === "video" ? "video" : "call"}
                  onEnd={handleCallEnd}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Click-to-advance controls */}
          {mode === "text" && (
            <div className="mt-4 flex justify-center">
              {scriptComplete ? (
                <Button className="rounded-xl" onClick={onConsultationComplete} size="sm">
                  Proceed to Assessment
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button className="rounded-xl" onClick={handleAdvance} size="sm" variant="outline">
                  Continue Conversation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

LawyerConsultationScreen.displayName = "LawyerConsultationScreen";

export { LawyerConsultationScreen };
