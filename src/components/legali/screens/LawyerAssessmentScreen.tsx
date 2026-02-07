import { ChevronRight, FileEdit } from "lucide-react";
import { forwardRef, useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { StepIndicator } from "../atomic/StepIndicator";
import { AssessmentWritingForm, type AssessmentField } from "../composite/AssessmentWritingForm";
import type { AssessmentWritingScriptStep, CaseAssessment } from "../data/marketplace-types";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot";

export type LawyerAssessmentScreenProps = {
  script: AssessmentWritingScriptStep[];
  onAssessmentComplete?: (assessment: CaseAssessment) => void;
  className?: string;
};

const STEPS = [
  { label: "Dashboard" },
  { label: "Review" },
  { label: "Consultation" },
  { label: "Assessment" },
  { label: "Payout" },
];

function buildAssessment(fields: AssessmentField[]): CaseAssessment {
  const fieldMap = new Map(fields.map((f) => [f.key, f.value]));
  return {
    summary: fieldMap.get("summary") ?? "",
    strengths: (fieldMap.get("strengths") ?? "").split("\n").filter(Boolean),
    concerns: (fieldMap.get("concerns") ?? "").split("\n").filter(Boolean),
    recommendedSteps: (fieldMap.get("recommendedSteps") ?? "").split("\n").filter(Boolean),
    timeline: fieldMap.get("timeline") ?? "",
    costRange: fieldMap.get("costRange") ?? "",
    decision: (fieldMap.get("decision") ?? "accepted") as CaseAssessment["decision"],
  };
}

const LawyerAssessmentScreen = forwardRef<HTMLDivElement, LawyerAssessmentScreenProps>(
  ({ className, script, onAssessmentComplete }, ref) => {
    const [fields, setFields] = useState<AssessmentField[]>([]);
    const [activeFieldKey, setActiveFieldKey] = useState<string | undefined>();
    const [mascotMotion, setMascotMotion] = useState<MascotMotionType>(MascotMotion.THINKING);
    const scriptIndexRef = useRef(0);
    const allFieldsComplete = scriptIndexRef.current >= script.length && fields.length > 0;

    const handleAdvance = useCallback(() => {
      if (scriptIndexRef.current >= script.length) return;

      const step = script[scriptIndexRef.current];

      if (step.mascotMotion) {
        setMascotMotion(step.mascotMotion);
      }

      // Add the field with its value filled in
      setFields((prev) => {
        const exists = prev.some((f) => f.key === step.fieldKey);
        if (exists) {
          return prev.map((f) =>
            f.key === step.fieldKey ? { ...f, value: step.value, isComplete: true } : f
          );
        }
        return [
          ...prev,
          {
            key: step.fieldKey,
            label: step.fieldKey,
            value: step.value,
            isComplete: true,
          },
        ];
      });

      scriptIndexRef.current += 1;

      // Set next field as active, or clear if done
      if (scriptIndexRef.current < script.length) {
        setActiveFieldKey(script[scriptIndexRef.current].fieldKey);
      } else {
        setActiveFieldKey(undefined);
      }
    }, [script]);

    const handleComplete = useCallback(() => {
      const assessment = buildAssessment(fields);
      onAssessmentComplete?.(assessment);
    }, [fields, onAssessmentComplete]);

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
            <StepIndicator currentStep={3} steps={STEPS} />
          </div>

          <div className="mb-6 flex justify-center">
            <LegaliMascot height={80} motion={mascotMotion} width={80} />
          </div>

          <AssessmentWritingForm activeFieldKey={activeFieldKey} fields={fields} />

          {/* Click-to-advance controls */}
          <div className="mt-4 flex justify-center">
            {allFieldsComplete ? (
              <Button className="rounded-xl" onClick={handleComplete} size="sm">
                Submit Assessment
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button className="rounded-xl" onClick={handleAdvance} size="sm" variant="outline">
                <FileEdit className="mr-1 h-4 w-4" />
                {fields.length === 0 ? "Start Writing" : "Write Next Field"}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

LawyerAssessmentScreen.displayName = "LawyerAssessmentScreen";

export { LawyerAssessmentScreen };
