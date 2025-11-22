import * as React from "react"
import { cn } from "@/lib/utils"
import { UserStatsBar } from "../composite/UserStatsBar"
import { ProgressSection } from "../composite/ProgressSection"
import { ModuleCard, type ModuleStatus, type Lesson } from "../composite/ModuleCard"
import { NavigationBar } from "../composite/NavigationBar"

export interface Module {
  id: string | number
  icon: React.ReactNode
  title: string
  subtitle: string
  status: ModuleStatus
  lessons: Lesson[]
}

export interface HomeScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  modules: Module[]
  onModuleClick: (id: string | number) => void
  streak?: number
  points?: number
  hearts?: number
}

const HomeScreen = React.forwardRef<HTMLDivElement, HomeScreenProps>(
  ({ className, modules, onModuleClick, streak = 5, points = 1250, hearts = 5, ...props }, ref) => {
    const [activeTab, setActiveTab] = React.useState('learn')

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-full min-h-screen relative overflow-hidden",
          // Mesh Gradient Background
          "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-purple-100 to-white",
          className
        )}
        {...props}
      >
        {/* Decorative Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header Area */}
        <div className="sticky top-0 z-10 px-5 pt-6 pb-4 backdrop-blur-md bg-white/30 border-b border-white/20">
          <UserStatsBar
            streak={streak}
            points={points}
            hearts={hearts}
            className="mb-6"
          />
          
          <ProgressSection
            title="Civil Procedure"
            progress={45}
          />
        </div>

        {/* Modules Scroll Area */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 pb-24">
          <h2 className="font-bold text-2xl text-slate-800 mb-4 tracking-tight">
            Learning Path
          </h2>
          
          <div className="space-y-4">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                icon={module.icon}
                title={module.title}
                subtitle={module.subtitle}
                status={module.status}
                lessons={module.lessons}
                onModuleClick={() => onModuleClick(module.id)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-20 p-4">
          <NavigationBar
            items={[
              { id: 'learn', label: 'Learn', icon: 'learn' },
              { id: 'progress', label: 'Progress', icon: 'progress' },
              { id: 'profile', label: 'Profile', icon: 'profile' },
            ]}
            activeItem={activeTab}
            onItemClick={setActiveTab}
            className="rounded-2xl shadow-2xl shadow-indigo-500/20 border-white/50 bg-white/80 backdrop-blur-xl mx-auto max-w-md"
          />
        </div>
      </div>
    )
  }
)
HomeScreen.displayName = "HomeScreen"

export { HomeScreen }
