import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ConsultationTimerProps = {
  isRunning?: boolean;
  startTime?: number;
  className?: string;
};

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

const ConsultationTimer = forwardRef<HTMLDivElement, ConsultationTimerProps>(
  ({ className, isRunning = true, startTime = 0 }, ref) => {
    const [elapsed, setElapsed] = useState(startTime);

    useEffect(() => {
      if (!isRunning) return;
      const interval = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [isRunning]);

    return (
      <div
        className={cn("inline-flex items-center gap-2 font-mono text-sm text-slate-600", className)}
        ref={ref}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            isRunning ? "animate-pulse bg-red-400 shadow-sm shadow-red-400/50" : "bg-slate-300"
          )}
        />
        <span>{formatDuration(elapsed)}</span>
      </div>
    );
  }
);

ConsultationTimer.displayName = "ConsultationTimer";

export { ConsultationTimer };
export type { ConsultationTimerProps };
