import { motion } from "motion/react";
import { AlertTriangle, Check, FileText, Forward, X } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { GradientText } from "../atomic/GradientText";
import { SpotlightCard } from "../atomic/SpotlightCard";
import type { CaseRequest } from "../data/marketplace-types";

type CaseReviewPanelProps = {
  caseRequest: CaseRequest;
  onAccept?: () => void;
  onDecline?: () => void;
  onRefer?: () => void;
  className?: string;
};

const complexityColors: Record<string, string> = {
  low: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-red-100 text-red-700",
};

const urgencyColors: Record<string, string> = {
  low: "bg-slate-100 text-slate-600",
  normal: "bg-blue-100 text-blue-700",
  urgent: "bg-red-100 text-red-700",
};

const CaseReviewPanel = forwardRef<HTMLDivElement, CaseReviewPanelProps>(
  ({ className, caseRequest, onAccept, onDecline, onRefer }, ref) => {
    const { caseDetails } = caseRequest;

    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SpotlightCard className={cn("p-6", className)} ref={ref}>
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#667eea]" />
              <GradientText as="h3" className="font-bold text-lg">
                Case Review
              </GradientText>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 font-medium text-xs",
                  complexityColors[caseDetails.complexity]
                )}
              >
                {caseDetails.complexity}
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 font-medium text-xs",
                  urgencyColors[caseDetails.urgency]
                )}
              >
                {caseDetails.urgency}
              </span>
            </div>
          </div>

          {/* Client Info */}
          <div className="mb-4 rounded-xl bg-slate-50/80 px-4 py-3">
            <p className="mb-1 font-semibold text-slate-800 text-sm">{caseRequest.clientName}</p>
            <p className="text-slate-500 text-xs">
              {caseDetails.contactInfo.email} &middot; {caseDetails.category}
            </p>
          </div>

          {/* Summary */}
          <p className="mb-4 text-slate-600 text-sm leading-relaxed">{caseDetails.summary}</p>

          {/* Key Facts */}
          <div className="mb-4">
            <p className="mb-2 font-semibold text-slate-500 text-xs uppercase tracking-wider">
              Key Facts
            </p>
            <ul className="space-y-1.5">
              {caseDetails.keyFacts.map((fact) => (
                <li className="flex items-start gap-2 text-slate-700 text-sm" key={fact}>
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#667eea]" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Fee */}
          <div className="mb-5 flex items-center gap-2 rounded-xl bg-indigo-50/80 px-3 py-2">
            <AlertTriangle className="h-3.5 w-3.5 text-indigo-500" />
            <p className="text-indigo-600 text-xs">
              Platform fee: <span className="font-semibold">${caseRequest.platformFee}</span> will
              be deducted from your payout
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1 rounded-xl" onClick={onAccept} size="sm">
              <Check className="mr-1 h-4 w-4" />
              Accept Case
            </Button>
            <Button className="rounded-xl" onClick={onRefer} size="sm" variant="outline">
              <Forward className="mr-1 h-4 w-4" />
              Refer
            </Button>
            <Button className="rounded-xl" onClick={onDecline} size="sm" variant="outline">
              <X className="mr-1 h-4 w-4" />
              Decline
            </Button>
          </div>
        </SpotlightCard>
      </motion.div>
    );
  }
);

CaseReviewPanel.displayName = "CaseReviewPanel";

export { CaseReviewPanel };
export type { CaseReviewPanelProps };
