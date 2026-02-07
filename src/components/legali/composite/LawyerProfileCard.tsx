import { motion } from "motion/react";
import { MessageCircle, Star } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { GradientText } from "../atomic/GradientText";
import { LawyerAvatar } from "../atomic/LawyerAvatar";
import { SpotlightCard } from "../atomic/SpotlightCard";
import type { Lawyer } from "../data/marketplace-types";

type LawyerProfileCardProps = {
  lawyer: Lawyer;
  onStartConsultation?: () => void;
  className?: string;
};

const LawyerProfileCard = forwardRef<HTMLDivElement, LawyerProfileCardProps>(
  ({ className, lawyer, onStartConsultation }, ref) => {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      >
        <SpotlightCard className={cn("p-6", className)} ref={ref}>
          <div className="flex items-start gap-4">
            <LawyerAvatar
              alt={lawyer.name}
              isVerified={lawyer.isVerified}
              size="xl"
              src={lawyer.avatar}
              status={lawyer.isOnline ? "online" : "offline"}
            />
            <div className="flex-1">
              <GradientText as="h3" className="font-bold text-lg">
                {lawyer.name}
              </GradientText>
              <p className="text-sm text-slate-500">{lawyer.title}</p>
              <p className="text-xs text-slate-400">{lawyer.firm}</p>

              <div className="mt-2 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-sm">{lawyer.rating}</span>
                  <span className="text-xs text-slate-400">({lawyer.reviewCount})</span>
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="font-medium text-sm text-[#4eaed0]">
                  ${lawyer.consultationFee}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {lawyer.specializations.map((spec) => (
              <span
                className="rounded-full bg-[#4eaed0]/10 px-2.5 py-0.5 text-xs font-medium text-[#4eaed0]"
                key={spec}
              >
                {spec}
              </span>
            ))}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">{lawyer.bio}</p>

          <Button
            className="mt-5 w-full rounded-xl"
            onClick={onStartConsultation}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Start Consultation
          </Button>
        </SpotlightCard>
      </motion.div>
    );
  }
);

LawyerProfileCard.displayName = "LawyerProfileCard";

export { LawyerProfileCard };
export type { LawyerProfileCardProps };
