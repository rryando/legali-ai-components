import {
  AlertTriangle,
  FileText,
  HelpCircle,
  Scale,
  Shield,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SuggestionChip } from "../atomic/SuggestionChip";

type Suggestion = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

type SmartSuggestionsDropdownProps = {
  /** Whether dropdown is open */
  isOpen?: boolean;
  /** Suggestions to display */
  suggestions?: Suggestion[];
  /** Callback when suggestion is clicked */
  onSelect?: (suggestion: Suggestion) => void;
  /** Maximum suggestions to show */
  maxSuggestions?: number;
} & HTMLAttributes<HTMLDivElement>;

const defaultSuggestions: Suggestion[] = [
  {
    id: "red-flag",
    icon: <AlertTriangle className="h-4 w-4" />,
    label: "Analyze contract red flags",
  },
  {
    id: "tenant",
    icon: <Shield className="h-4 w-4" />,
    label: "Know my tenant rights",
  },
  {
    id: "small-claims",
    icon: <Scale className="h-4 w-4" />,
    label: "File a small claims case",
  },
  {
    id: "review",
    icon: <FileText className="h-4 w-4" />,
    label: "Review a document",
  },
  {
    id: "general",
    icon: <HelpCircle className="h-4 w-4" />,
    label: "Ask a legal question",
  },
];

/**
 * Animated dropdown showing suggestion chips when search is focused.
 * Suggestions appear with staggered animation.
 *
 * @example
 * ```tsx
 * <SmartSuggestionsDropdown
 *   isOpen={isFocused}
 *   onSelect={(s) => setInput(s.label)}
 * />
 * ```
 */
const SmartSuggestionsDropdown = forwardRef<
  HTMLDivElement,
  SmartSuggestionsDropdownProps
>(
  (
    {
      className,
      isOpen = false,
      suggestions = defaultSuggestions,
      onSelect,
      maxSuggestions = 5,
      ...props
    },
    ref
  ) => {
    const [shouldRender, setShouldRender] = useState(isOpen);

    useEffect(() => {
      if (isOpen) {
        setShouldRender(true);
      }
    }, [isOpen]);

    const displaySuggestions = suggestions.slice(0, maxSuggestions);

    return (
      <AnimatePresence
        onExitComplete={() => {
          setShouldRender(false);
        }}
      >
        {shouldRender && isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className={cn(
              "mt-3 overflow-hidden rounded-2xl",
              "border border-slate-200/60 bg-white/90 backdrop-blur-xl",
              "shadow-slate-200/50 shadow-xl",
              "p-4",
              className
            )}
            exit={{ opacity: 0, y: -10, height: 0 }}
            initial={{ opacity: 0, y: -10, height: 0 }}
            ref={ref}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="mb-3 font-medium text-slate-500 text-xs uppercase tracking-wider">
              Suggestions
            </p>
            <div className="flex flex-wrap gap-2">
              {displaySuggestions.map((suggestion, index) => (
                <SuggestionChip
                  animationDelay={index * 0.05}
                  icon={suggestion.icon}
                  key={suggestion.id}
                  label={suggestion.label}
                  onClick={() => onSelect?.(suggestion)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

SmartSuggestionsDropdown.displayName = "SmartSuggestionsDropdown";

export { SmartSuggestionsDropdown };
export type { SmartSuggestionsDropdownProps, Suggestion };
