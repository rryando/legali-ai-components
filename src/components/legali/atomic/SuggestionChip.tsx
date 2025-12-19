import { motion } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SuggestionChipProps = {
  /** Icon to display before label */
  icon?: ReactNode;
  /** Label text */
  label: string;
  /** Whether chip is selected/active */
  isSelected?: boolean;
  /** Animation delay for staggered entrance */
  animationDelay?: number;
  /** Click handler */
  onClick?: () => void;
} & Omit<HTMLAttributes<HTMLButtonElement>, "onClick">;

/**
 * Animated suggestion pill with staggered entrance animation.
 * Used in SmartSuggestionsDropdown for search suggestions.
 *
 * @example
 * ```tsx
 * <SuggestionChip
 *   icon={<FileText className="h-4 w-4" />}
 *   label="Review a contract"
 *   onClick={() => setInput("Review a contract")}
 * />
 * ```
 */
const SuggestionChip = forwardRef<HTMLButtonElement, SuggestionChipProps>(
  ({ className, icon, label, isSelected = false, animationDelay = 0, onClick }, ref) => (
    <motion.button
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-4 py-2",
        "border border-slate-200/60 bg-white/80 backdrop-blur-sm",
        "font-medium text-slate-700 text-sm",
        "transition-all duration-200",
        "hover:border-[#4eaed0]/40 hover:bg-white hover:shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-[#4eaed0]/30",
        isSelected && "border-[#4eaed0] bg-[#4eaed0]/10 text-[#4eaed0]",
        className
      )}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      onClick={onClick}
      ref={ref}
      transition={{
        duration: 0.3,
        delay: animationDelay,
        ease: [0.4, 0, 0.2, 1],
      }}
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && (
        <span className="text-[#4eaed0] transition-transform group-hover:scale-110">{icon}</span>
      )}
      <span>{label}</span>
    </motion.button>
  )
);

SuggestionChip.displayName = "SuggestionChip";

export { SuggestionChip };
export type { SuggestionChipProps };
