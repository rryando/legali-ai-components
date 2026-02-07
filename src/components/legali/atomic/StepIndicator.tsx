import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const stepVariants = cva(
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
  {
    variants: {
      state: {
        completed: "bg-[#4eaed0] text-white shadow-sm shadow-[#4eaed0]/30",
        current: "bg-[#4eaed0]/10 text-[#4eaed0] ring-2 ring-[#4eaed0] ring-offset-2",
        upcoming: "bg-slate-100 text-slate-400",
      },
    },
    defaultVariants: {
      state: "upcoming",
    },
  }
);

type StepIndicatorStep = {
  label: string;
};

type StepIndicatorProps = {
  steps: StepIndicatorStep[];
  currentStep: number;
  className?: string;
};

type StepState = NonNullable<VariantProps<typeof stepVariants>["state"]>;

const StepIndicator = forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ className, steps, currentStep }, ref) => {
    const getState = (index: number): StepState => {
      if (index < currentStep) return "completed";
      if (index === currentStep) return "current";
      return "upcoming";
    };

    return (
      <div className={cn("flex items-center gap-1", className)} ref={ref}>
        {steps.map((step, i) => {
          const state = getState(i);
          const key = `step-${step.label}`;
          return (
            <div className="flex items-center gap-1" key={key}>
              <div className="flex flex-col items-center gap-1">
                <div className={cn(stepVariants({ state }))}>
                  {state === "completed" ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "max-w-[80px] text-center text-[10px] leading-tight",
                    state === "current" ? "font-semibold text-[#4eaed0]" : "text-slate-400"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "mb-4 h-0.5 w-6 rounded-full transition-colors duration-300 sm:w-10",
                    i < currentStep ? "bg-[#4eaed0]" : "bg-slate-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

StepIndicator.displayName = "StepIndicator";

export { StepIndicator, stepVariants };
export type { StepIndicatorProps, StepIndicatorStep };
