/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-payout-summary.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-payout-summary.json"
 */
import { motion } from "motion/react";
import { Calendar, CheckCircle2, DollarSign, Download } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/legali/button";
import { GradientText } from "../atomic/GradientText";
import { LawyerAvatar } from "../atomic/LawyerAvatar";
import { SpotlightCard } from "../atomic/SpotlightCard";
import type { PayoutData } from "../data/marketplace-types";

type PayoutSummaryProps = {
  payout: PayoutData;
  onDownload?: () => void;
  onReturnHome?: () => void;
  className?: string;
};

const PayoutSummary = forwardRef<HTMLDivElement, PayoutSummaryProps>(
  ({ className, payout, onDownload, onReturnHome }, ref) => {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SpotlightCard className={cn("p-6", className)} ref={ref}>
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <GradientText as="h3" className="font-bold text-lg">
                Payout Summary
              </GradientText>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-slate-500 text-xs">
              {payout.referenceNumber}
            </span>
          </div>

          {/* Lawyer Info */}
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-slate-50/80 px-4 py-3">
            <LawyerAvatar
              alt={payout.lawyer.name}
              isVerified={payout.lawyer.isVerified}
              size="md"
              src={payout.lawyer.avatar}
              status="offline"
            />
            <div>
              <p className="font-semibold text-slate-800 text-sm">{payout.lawyer.name}</p>
              <p className="text-slate-400 text-xs">{payout.lawyer.title}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-slate-400 text-xs">Duration</p>
              <p className="font-semibold text-sm">{payout.duration} min</p>
            </div>
          </div>

          {/* Line Items */}
          <div className="mb-4 space-y-2">
            {payout.lineItems.map((item) => (
              <div className="flex justify-between text-sm" key={item.label}>
                <span className={cn("text-slate-600", item.isDeduction && "text-slate-400")}>
                  {item.label}
                </span>
                <span
                  className={cn(
                    "font-medium",
                    item.isDeduction ? "text-red-500" : "text-slate-800"
                  )}
                >
                  {item.amount < 0
                    ? `-$${Math.abs(item.amount).toFixed(2)}`
                    : `$${item.amount.toFixed(2)}`}
                </span>
              </div>
            ))}

            {/* Totals */}
            <div className="space-y-2 border-slate-200 border-t pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Gross Amount</span>
                <span className="font-medium text-slate-700">${payout.grossAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Deductions</span>
                <span className="font-medium text-red-500">-${payout.deductions.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-slate-200 border-t pt-2">
                <span className="font-bold text-slate-800 text-sm">Net Payout</span>
                <span className="font-bold text-green-600 text-lg">
                  ${payout.netPayout.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Payout Date */}
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-green-50/80 px-3 py-2">
            <Calendar className="h-3.5 w-3.5 text-green-600" />
            <p className="text-green-700 text-xs">
              Expected payout date: <span className="font-semibold">{payout.payoutDate}</span>
            </p>
          </div>

          {/* Next Steps */}
          <div className="mb-5">
            <p className="mb-2 flex items-center gap-1.5 font-semibold text-slate-500 text-xs uppercase tracking-wider">
              <Calendar className="h-3.5 w-3.5" />
              Next Steps
            </p>
            <ul className="space-y-2">
              {payout.nextSteps.map((step) => (
                <li className="flex items-start gap-2 text-slate-700 text-sm" key={step}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1 rounded-xl" onClick={onDownload} size="sm" variant="outline">
              <Download className="mr-1 h-4 w-4" />
              Download Summary
            </Button>
          </div>

          {onReturnHome && (
            <Button className="mt-3 w-full rounded-xl" onClick={onReturnHome} size="sm">
              Return to Dashboard
            </Button>
          )}
        </SpotlightCard>
      </motion.div>
    );
  }
);

PayoutSummary.displayName = "PayoutSummary";

export { PayoutSummary };
export type { PayoutSummaryProps };
