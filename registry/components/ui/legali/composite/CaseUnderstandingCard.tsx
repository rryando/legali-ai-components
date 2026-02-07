/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-case-understanding-card.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-case-understanding-card.json"
 */
import { motion } from "motion/react";
import { Check, Pencil } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/legali/button";
import { GradientText } from "../atomic/GradientText";
import { SpotlightCard } from "../atomic/SpotlightCard";
import type { CaseDetails } from "../data/marketplace-types";

type CaseUnderstandingCardProps = {
  caseDetails: CaseDetails;
  onConfirm?: () => void;
  onEdit?: () => void;
  className?: string;
};

const complexityLabels: Record<string, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const complexityColors: Record<string, string> = {
  low: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-red-100 text-red-700",
};

const CaseUnderstandingCard = forwardRef<HTMLDivElement, CaseUnderstandingCardProps>(
  ({ className, caseDetails, onConfirm, onEdit }, ref) => {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SpotlightCard className={cn("p-6", className)} ref={ref}>
          <div className="mb-4 flex items-center justify-between">
            <GradientText as="h3" className="font-bold text-lg">
              Case Understanding
            </GradientText>
            <span
              className={cn(
                "rounded-full px-2.5 py-1 font-medium text-xs",
                complexityColors[caseDetails.complexity]
              )}
            >
              {complexityLabels[caseDetails.complexity]}
            </span>
          </div>

          <p className="mb-4 text-slate-600 text-sm leading-relaxed">{caseDetails.summary}</p>

          <div className="mb-4">
            <p className="mb-2 font-semibold text-slate-500 text-xs uppercase tracking-wider">
              Key Facts
            </p>
            <ul className="space-y-1.5">
              {caseDetails.keyFacts.map((fact) => (
                <li className="flex items-start gap-2 text-slate-700 text-sm" key={fact}>
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4eaed0]" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5 rounded-xl bg-slate-50/80 px-3 py-2">
            <p className="text-slate-500 text-xs">
              <span className="font-medium">Recommended Specialization:</span>{" "}
              {caseDetails.recommendedSpecialization}
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 rounded-xl" onClick={onConfirm} size="sm">
              <Check className="mr-1 h-4 w-4" />
              Confirm
            </Button>
            <Button className="rounded-xl" onClick={onEdit} size="sm" variant="outline">
              <Pencil className="mr-1 h-4 w-4" />
              Edit
            </Button>
          </div>
        </SpotlightCard>
      </motion.div>
    );
  }
);

CaseUnderstandingCard.displayName = "CaseUnderstandingCard";

export { CaseUnderstandingCard };
export type { CaseUnderstandingCardProps };
