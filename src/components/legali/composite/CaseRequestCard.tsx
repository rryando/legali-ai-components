import { motion } from "motion/react";
import { Clock, FileText, User } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CaseStatusBadge } from "../atomic/CaseStatusBadge";
import { SpotlightCard } from "../atomic/SpotlightCard";
import type { CaseRequest } from "../data/marketplace-types";

type CaseRequestCardProps = {
  caseRequest: CaseRequest;
  onSelect?: (caseRequest: CaseRequest) => void;
  isSelected?: boolean;
  className?: string;
};

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

const CaseRequestCard = forwardRef<HTMLDivElement, CaseRequestCardProps>(
  ({ className, caseRequest, onSelect, isSelected }, ref) => {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.3 }}
      >
        <SpotlightCard
          className={cn(
            "cursor-pointer p-4 transition-all duration-200",
            isSelected && "ring-2 ring-[#4eaed0] ring-offset-2",
            className
          )}
          onClick={() => onSelect?.(caseRequest)}
          ref={ref}
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-slate-400" />
              <span className="font-semibold text-slate-800 text-sm">{caseRequest.clientName}</span>
            </div>
            <CaseStatusBadge status={caseRequest.status} />
          </div>

          <div className="mb-3 flex items-start gap-2">
            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <p className="line-clamp-2 text-slate-600 text-sm">{caseRequest.caseDetails.summary}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-500 text-xs">
                {caseRequest.caseDetails.category}
              </span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  caseRequest.caseDetails.complexity === "high"
                    ? "bg-red-50 text-red-600"
                    : caseRequest.caseDetails.complexity === "medium"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-green-50 text-green-600"
                )}
              >
                {caseRequest.caseDetails.complexity}
              </span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              <Clock className="h-3.5 w-3.5" />
              {formatTimeAgo(caseRequest.submittedAt)}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    );
  }
);

CaseRequestCard.displayName = "CaseRequestCard";

export { CaseRequestCard };
export type { CaseRequestCardProps };
