/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-dashboard-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-dashboard-screen.json"
 */
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { GradientText } from "../atomic/GradientText";
import { LawyerAvatar } from "../atomic/LawyerAvatar";
import { StepIndicator } from "../atomic/StepIndicator";
import { CaseRequestCard } from "../composite/CaseRequestCard";
import type { CaseRequest, Lawyer } from "../data/marketplace-types";
import { LegaliMascot, MascotMotion } from "../mascot";

export type LawyerDashboardScreenProps = {
  lawyer: Lawyer;
  caseRequests: CaseRequest[];
  onSelectCase?: (caseRequest: CaseRequest) => void;
  className?: string;
};

const STEPS = [
  { label: "Dashboard" },
  { label: "Review" },
  { label: "Consultation" },
  { label: "Assessment" },
  { label: "Payout" },
];

const LawyerDashboardScreen = forwardRef<HTMLDivElement, LawyerDashboardScreenProps>(
  ({ className, lawyer, caseRequests, onSelectCase }, ref) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSelect = useCallback(
      (caseRequest: CaseRequest) => {
        setSelectedId(caseRequest.id);
        onSelectCase?.(caseRequest);
      },
      [onSelectCase]
    );

    const newCount = caseRequests.filter((c) => c.status === "new").length;

    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center bg-gradient-to-br from-indigo-50 via-purple-50/30 to-white px-4 py-8",
          className
        )}
        ref={ref}
      >
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] animate-pulse rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6 flex justify-center">
            <StepIndicator currentStep={0} steps={STEPS} />
          </div>

          {/* Lawyer Header */}
          <div className="mb-6 flex items-center gap-4 rounded-2xl bg-white/60 px-5 py-4 shadow-sm backdrop-blur-xl">
            <LawyerAvatar
              alt={lawyer.name}
              isVerified={lawyer.isVerified}
              size="lg"
              src={lawyer.avatar}
              status={lawyer.isOnline ? "online" : "offline"}
            />
            <div className="flex-1">
              <p className="font-bold text-lg text-slate-800">{lawyer.name}</p>
              <p className="text-slate-500 text-sm">{lawyer.title}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center">
              <LegaliMascot height={40} motion={MascotMotion.WAVING} width={40} />
            </div>
          </div>

          {/* Dashboard Title */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-[#667eea]" />
              <GradientText as="h2" className="font-bold text-xl">
                Case Requests
              </GradientText>
            </div>
            {newCount > 0 && (
              <motion.span
                animate={{ scale: 1 }}
                className="flex items-center gap-1 rounded-full bg-cyan-100 px-2.5 py-1 font-semibold text-cyan-700 text-xs"
                initial={{ scale: 0.8 }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                {newCount} new
              </motion.span>
            )}
          </div>

          {/* Case List */}
          <div className="space-y-3">
            {caseRequests.map((caseRequest, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                key={caseRequest.id}
                transition={{ delay: index * 0.1 }}
              >
                <CaseRequestCard
                  caseRequest={caseRequest}
                  isSelected={selectedId === caseRequest.id}
                  onSelect={handleSelect}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

LawyerDashboardScreen.displayName = "LawyerDashboardScreen";

export { LawyerDashboardScreen };
