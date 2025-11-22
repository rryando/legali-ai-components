import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Lock, PlayCircle } from "lucide-react"
import { LessonDot } from "../atomic/LessonDot"
import { GlassCard } from "../atomic/GlassCard"

export type ModuleStatus = "completed" | "current" | "locked"

export interface Lesson {
  id: string | number
  completed: boolean
}

export interface ModuleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  subtitle: string
  status: ModuleStatus
  lessons: Lesson[]
  onModuleClick?: () => void
}

const ModuleCard = React.forwardRef<HTMLDivElement, ModuleCardProps>(
  ({ className, icon, title, subtitle, status, lessons, onModuleClick, ...props }, ref) => {
    const isLocked = status === "locked"
    const isCompleted = status === "completed"
    const isCurrent = status === "current"

    return (
      <GlassCard
        ref={ref}
        variant={!isLocked ? "interactive" : "default"}
        intensity={isLocked ? "low" : "medium"}
        onClick={!isLocked ? onModuleClick : undefined}
        className={cn(
          "p-5 rounded-2xl transition-all duration-300",
          // Status specific styles
          isCurrent && "ring-2 ring-indigo-400/50 shadow-indigo-200/50",
          isCompleted && "bg-emerald-50/40 border-emerald-100/50",
          isLocked && "opacity-60 grayscale-[0.5]",
          className
        )}
        role={!isLocked ? "button" : undefined}
        aria-disabled={isLocked}
        {...props}
      >
        <div className="flex items-start gap-4">
          {/* Icon Container */}
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110",
            // Colorful Gradients for Icons
            isCurrent && "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-indigo-500/30",
            isCompleted && "bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-emerald-500/30",
            isLocked && "bg-slate-100 text-slate-400 shadow-inner"
          )}>
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className={cn(
                "font-bold text-lg leading-tight truncate pr-2 tracking-tight",
                isLocked ? "text-slate-500" : "text-slate-800"
              )}>
                {title}
              </h3>
              
              {/* Status Icon */}
              <div className="shrink-0">
                {isCompleted && <Check className="w-6 h-6 text-emerald-500 drop-shadow-sm" strokeWidth={3} />}
                {isCurrent && <PlayCircle className="w-6 h-6 text-indigo-500 fill-indigo-100" />}
                {isLocked && <Lock className="w-4 h-4 text-slate-400" />}
              </div>
            </div>
            
            <p className={cn(
              "text-sm mb-4 truncate font-medium",
              isLocked ? "text-slate-400" : "text-slate-500"
            )}>
              {subtitle}
            </p>

            {/* Lesson Progress */}
            <div className="flex items-center gap-2">
              {lessons.map((lesson, index) => (
                <LessonDot
                  key={lesson.id}
                  status={
                    lesson.completed ? "completed" :
                    (isCurrent && !lesson.completed && (index === 0 || lessons[index - 1].completed)) ? "current" :
                    isLocked ? "locked" : "pending"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    )
  }
)
ModuleCard.displayName = "ModuleCard"

export { ModuleCard }
