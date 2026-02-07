import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2, Clock, FileText, Shield } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { GradientText } from "../atomic/GradientText";
import type { CaseAssessment, CaseDecision } from "../data/marketplace-types";

type CaseAssessmentCardProps = {
  assessment: CaseAssessment;
  onViewReceipt?: () => void;
  className?: string;
};

const decisionConfig: Record<CaseDecision, { label: string; color: string; icon: typeof Shield }> =
  {
    accepted: {
      label: "Case Accepted",
      color: "bg-green-100 text-green-700 border-green-200",
      icon: CheckCircle2,
    },
    declined: {
      label: "Case Declined",
      color: "bg-red-100 text-red-700 border-red-200",
      icon: AlertTriangle,
    },
    referred: {
      label: "Referral Recommended",
      color: "bg-amber-100 text-amber-700 border-amber-200",
      icon: FileText,
    },
  };

const CaseAssessmentCard = forwardRef<HTMLDivElement, CaseAssessmentCardProps>(
  ({ className, assessment, onViewReceipt }, ref) => {
    const decision = decisionConfig[assessment.decision];
    const DecisionIcon = decision.icon;

    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <GlassCard className={cn("rounded-2xl p-6", className)} intensity="medium" ref={ref}>
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <GradientText as="h3" className="font-bold text-lg">
              Case Assessment
            </GradientText>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-medium text-xs",
                decision.color
              )}
            >
              <DecisionIcon className="h-3.5 w-3.5" />
              {decision.label}
            </span>
          </div>

          <p className="mb-5 text-slate-600 text-sm leading-relaxed">{assessment.summary}</p>

          {/* Strengths */}
          <div className="mb-4">
            <p className="mb-2 flex items-center gap-1.5 font-semibold text-green-600 text-xs uppercase tracking-wider">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Strengths
            </p>
            <ul className="space-y-1.5">
              {assessment.strengths.map((s) => (
                <li className="flex items-start gap-2 text-slate-700 text-sm" key={s}>
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Concerns */}
          <div className="mb-4">
            <p className="mb-2 flex items-center gap-1.5 font-semibold text-amber-600 text-xs uppercase tracking-wider">
              <AlertTriangle className="h-3.5 w-3.5" />
              Concerns
            </p>
            <ul className="space-y-1.5">
              {assessment.concerns.map((c) => (
                <li className="flex items-start gap-2 text-slate-700 text-sm" key={c}>
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Steps */}
          <div className="mb-4">
            <p className="mb-2 flex items-center gap-1.5 font-semibold text-[#4eaed0] text-xs uppercase tracking-wider">
              <FileText className="h-3.5 w-3.5" />
              Recommended Steps
            </p>
            <ol className="space-y-1.5">
              {assessment.recommendedSteps.map((step, i) => (
                <li className="flex items-start gap-2 text-slate-700 text-sm" key={step}>
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4eaed0]/10 font-bold text-[#4eaed0] text-xs">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Timeline & Cost */}
          <div className="mb-5 flex gap-4 rounded-xl bg-slate-50/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase">Timeline</p>
                <p className="font-semibold text-sm">{assessment.timeline}</p>
              </div>
            </div>
            <div className="h-auto w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase">Cost Range</p>
                <p className="font-semibold text-sm">{assessment.costRange}</p>
              </div>
            </div>
          </div>

          {onViewReceipt && (
            <button
              className="w-full rounded-xl bg-gradient-to-r from-[#4eaed0] to-[#667eea] py-2.5 text-center font-medium text-sm text-white transition-opacity hover:opacity-90"
              onClick={onViewReceipt}
              type="button"
            >
              View Receipt
            </button>
          )}
        </GlassCard>
      </motion.div>
    );
  }
);

CaseAssessmentCard.displayName = "CaseAssessmentCard";

export { CaseAssessmentCard };
export type { CaseAssessmentCardProps };
