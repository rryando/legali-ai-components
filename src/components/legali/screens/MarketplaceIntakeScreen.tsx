/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-intake-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-intake-screen.json"
 */
import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "../atomic/StepIndicator";
import { CaseUnderstandingCard } from "../composite/CaseUnderstandingCard";
import { IntakeChatPanel } from "../composite/IntakeChatPanel";
import type {
  CaseDetails,
  ChatMessage,
  ContactInfo,
  IntakeChatScriptStep,
} from "../data/marketplace-types";

export type MarketplaceIntakeScreenProps = {
  script: IntakeChatScriptStep[];
  caseDetails: CaseDetails;
  onConfirmCase?: (caseDetails: CaseDetails) => void;
  className?: string;
};

const STEPS = [
  { label: "Intake" },
  { label: "Matching" },
  { label: "Consultation" },
  { label: "Receipt" },
];

const MarketplaceIntakeScreen = forwardRef<HTMLDivElement, MarketplaceIntakeScreenProps>(
  ({ className, script, caseDetails, onConfirmCase }, ref) => {
    const [showUnderstanding, setShowUnderstanding] = useState(false);
    const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

    const handleChatComplete = useCallback((_messages: ChatMessage[], info: ContactInfo | null) => {
      if (info) setContactInfo(info);
      setShowUnderstanding(true);
    }, []);

    const handleConfirm = useCallback(() => {
      const finalCase: CaseDetails = {
        ...caseDetails,
        contactInfo: contactInfo ?? caseDetails.contactInfo,
      };
      onConfirmCase?.(finalCase);
    }, [caseDetails, contactInfo, onConfirmCase]);

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
            <StepIndicator currentStep={0} steps={STEPS} />
          </div>

          <IntakeChatPanel onComplete={handleChatComplete} script={script} />

          <AnimatePresence>
            {showUnderstanding && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
                exit={{ opacity: 0, y: 20 }}
                initial={{ opacity: 0, y: 20 }}
              >
                <CaseUnderstandingCard
                  caseDetails={caseDetails}
                  onConfirm={handleConfirm}
                  onEdit={() => setShowUnderstanding(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

MarketplaceIntakeScreen.displayName = "MarketplaceIntakeScreen";

export { MarketplaceIntakeScreen };
