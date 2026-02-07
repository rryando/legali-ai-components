import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, FileEdit } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { GradientText } from "../atomic/GradientText";
import { SpotlightCard } from "../atomic/SpotlightCard";

type AssessmentField = {
  key: string;
  label: string;
  value: string;
  isComplete: boolean;
};

type AssessmentWritingFormProps = {
  fields: AssessmentField[];
  activeFieldKey?: string;
  className?: string;
};

const fieldLabels: Record<string, string> = {
  summary: "Case Summary",
  strengths: "Strengths",
  concerns: "Concerns",
  recommendedSteps: "Recommended Steps",
  timeline: "Estimated Timeline",
  costRange: "Cost Estimate",
  decision: "Decision",
};

const AssessmentWritingForm = forwardRef<HTMLDivElement, AssessmentWritingFormProps>(
  ({ className, fields, activeFieldKey }, ref) => {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SpotlightCard className={cn("p-6", className)} ref={ref}>
          <div className="mb-5 flex items-center gap-2">
            <FileEdit className="h-5 w-5 text-[#667eea]" />
            <GradientText as="h3" className="font-bold text-lg">
              Case Assessment
            </GradientText>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {fields.map((field) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0, y: 8 }}
                  key={field.key}
                  layout
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={cn(
                      "rounded-xl border px-4 py-3 transition-all duration-300",
                      activeFieldKey === field.key
                        ? "border-[#667eea]/30 bg-indigo-50/50 shadow-sm"
                        : field.isComplete
                          ? "border-slate-200/50 bg-slate-50/50"
                          : "border-slate-200/30 bg-white/50"
                    )}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      {field.isComplete ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                      ) : activeFieldKey === field.key ? (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#667eea]" />
                      ) : null}
                      <p className="font-semibold text-slate-500 text-xs uppercase tracking-wider">
                        {fieldLabels[field.key] ?? field.label}
                      </p>
                    </div>

                    {field.value ? (
                      <div className="text-slate-700 text-sm leading-relaxed">
                        {field.value.includes("\n") ? (
                          <ul className="space-y-1">
                            {field.value.split("\n").map((line) => (
                              <li className="flex items-start gap-2" key={line}>
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                                {line}
                              </li>
                            ))}
                          </ul>
                        ) : field.key === "decision" ? (
                          <span
                            className={cn(
                              "inline-flex rounded-full px-3 py-1 font-semibold text-xs",
                              field.value === "accepted"
                                ? "bg-green-100 text-green-700"
                                : field.value === "declined"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                            )}
                          >
                            {field.value === "accepted"
                              ? "Case Accepted"
                              : field.value === "declined"
                                ? "Case Declined"
                                : "Referred"}
                          </span>
                        ) : (
                          <p>{field.value}</p>
                        )}
                      </div>
                    ) : (
                      <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200/50" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </SpotlightCard>
      </motion.div>
    );
  }
);

AssessmentWritingForm.displayName = "AssessmentWritingForm";

export { AssessmentWritingForm };
export type { AssessmentWritingFormProps, AssessmentField };
