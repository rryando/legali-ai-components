import { Check, Lock, PlayCircle } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { LessonDot } from "../atomic/LessonDot";

export type ModuleStatus = "completed" | "current" | "locked";

export interface Lesson {
  id: string | number;
  completed: boolean;
}

export interface ModuleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  status: ModuleStatus;
  lessons: Lesson[];
  onModuleClick?: () => void;
}

const ModuleCard = React.forwardRef<HTMLDivElement, ModuleCardProps>(
  (
    {
      className,
      icon,
      title,
      subtitle,
      status,
      lessons,
      onModuleClick,
      ...props
    },
    ref
  ) => {
    const isLocked = status === "locked";
    const isCompleted = status === "completed";
    const isCurrent = status === "current";

    return (
      <GlassCard
        aria-disabled={isLocked}
        className={cn(
          "group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1",
          // Status specific styles
          isCurrent &&
            "animate-border-glow border-blue-400/50 bg-gradient-to-br from-white/90 via-white/70 to-blue-50/30 shadow-[0_0_25px_rgba(59,130,246,0.2),inset_0_0_15px_rgba(59,130,246,0.1)]",
          isCompleted &&
            "border-sky-200/50 bg-gradient-to-br from-sky-50/60 to-sky-100/30",
          isLocked &&
            "bg-gradient-to-br from-slate-50/50 to-slate-100/20 opacity-60 grayscale-[0.5]",
          className
        )}
        intensity={isLocked ? "low" : "medium"}
        onClick={isLocked ? undefined : onModuleClick}
        ref={ref}
        role={isLocked ? undefined : "button"}
        variant={isLocked ? "default" : "interactive"}
        {...props}
      >
        <div className="flex items-start gap-4">
          {/* Icon Container */}
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110",
              // Colorful Gradients for Icons
              isCurrent &&
                "bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-blue-500/30",
              isCompleted &&
                "bg-gradient-to-br from-sky-400 to-teal-400 text-white shadow-sky-500/30",
              isLocked && "bg-slate-100 text-slate-400 shadow-inner"
            )}
          >
            {icon}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1 pt-1">
            <div className="mb-1 flex items-center justify-between">
              <h3
                className={cn(
                  "truncate pr-2 font-bold text-lg leading-tight tracking-tight",
                  isLocked ? "text-slate-500" : "text-slate-800"
                )}
              >
                {title}
              </h3>

              {/* Status Icon */}
              <div className="shrink-0">
                {isCompleted && (
                  <Check
                    className="h-6 w-6 text-sky-500 drop-shadow-sm"
                    strokeWidth={3}
                  />
                )}
                {isCurrent && (
                  <PlayCircle className="h-6 w-6 fill-blue-100 text-blue-500" />
                )}
                {isLocked && <Lock className="h-4 w-4 text-slate-400" />}
              </div>
            </div>

            <p
              className={cn(
                "mb-4 truncate font-medium text-sm",
                isLocked ? "text-slate-400" : "text-slate-500"
              )}
            >
              {subtitle}
            </p>

            {/* Lesson Progress */}
            <div className="flex items-center gap-2">
              {lessons.map((lesson, index) => (
                <LessonDot
                  key={lesson.id}
                  status={
                    lesson.completed
                      ? "completed"
                      : isCurrent &&
                          !lesson.completed &&
                          (index === 0 || lessons[index - 1].completed)
                        ? "current"
                        : isLocked
                          ? "locked"
                          : "pending"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    );
  }
);
ModuleCard.displayName = "ModuleCard";

export { ModuleCard };
