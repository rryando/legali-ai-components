import { motion } from "motion/react";
import { Calendar, CheckCircle2, Download, ExternalLink, Receipt } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { GradientText } from "../atomic/GradientText";
import { LawyerAvatar } from "../atomic/LawyerAvatar";
import { SpotlightCard } from "../atomic/SpotlightCard";
import type { ReceiptData } from "../data/marketplace-types";

type ConsultationReceiptProps = {
  receipt: ReceiptData;
  onDownload?: () => void;
  onShare?: () => void;
  onReturnHome?: () => void;
  className?: string;
};

const ConsultationReceipt = forwardRef<HTMLDivElement, ConsultationReceiptProps>(
  ({ className, receipt, onDownload, onShare, onReturnHome }, ref) => {
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
              <Receipt className="h-5 w-5 text-[#4eaed0]" />
              <GradientText as="h3" className="font-bold text-lg">
                Beratungsbeleg
              </GradientText>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-500">
              {receipt.referenceNumber}
            </span>
          </div>

          {/* Lawyer Info */}
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-slate-50/80 px-4 py-3">
            <LawyerAvatar
              alt={receipt.lawyer.name}
              isVerified={receipt.lawyer.isVerified}
              size="md"
              src={receipt.lawyer.avatar}
              status="offline"
            />
            <div>
              <p className="font-semibold text-sm text-slate-800">{receipt.lawyer.name}</p>
              <p className="text-xs text-slate-400">{receipt.lawyer.title}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs text-slate-400">Dauer</p>
              <p className="font-semibold text-sm">{receipt.duration} Min.</p>
            </div>
          </div>

          {/* Line Items */}
          <div className="mb-4 space-y-2">
            {receipt.lineItems.map((item) => (
              <div className="flex justify-between text-sm" key={item.label}>
                <span className="text-slate-600">{item.label}</span>
                <span className="font-medium text-slate-800">
                  {item.amount === 0 ? "Kostenlos" : `€${item.amount.toFixed(2)}`}
                </span>
              </div>
            ))}
            <div className="border-t border-slate-200 pt-2">
              <div className="flex justify-between">
                <span className="font-bold text-sm text-slate-800">Gesamt</span>
                <span className="font-bold text-lg text-[#4eaed0]">
                  €{receipt.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-5">
            <p className="mb-2 flex items-center gap-1.5 font-semibold text-xs text-slate-500 uppercase tracking-wider">
              <Calendar className="h-3.5 w-3.5" />
              Nächste Schritte
            </p>
            <ul className="space-y-2">
              {receipt.nextSteps.map((step) => (
                <li className="flex items-start gap-2 text-sm text-slate-700" key={step}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              className="flex-1 rounded-xl"
              onClick={onDownload}
              size="sm"
              variant="outline"
            >
              <Download className="mr-1 h-4 w-4" />
              Herunterladen
            </Button>
            <Button
              className="flex-1 rounded-xl"
              onClick={onShare}
              size="sm"
              variant="outline"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Teilen
            </Button>
          </div>

          {onReturnHome && (
            <Button
              className="mt-3 w-full rounded-xl"
              onClick={onReturnHome}
              size="sm"
            >
              Zurück zur Startseite
            </Button>
          )}
        </SpotlightCard>
      </motion.div>
    );
  }
);

ConsultationReceipt.displayName = "ConsultationReceipt";

export { ConsultationReceipt };
export type { ConsultationReceiptProps };
