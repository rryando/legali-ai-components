import * as React from "react"
import { cn } from "@/lib/utils"
import { UserStatsBar } from "../composite/UserStatsBar"
import { ProgressSection } from "../composite/ProgressSection"
import { ModuleCard, type ModuleStatus, type Lesson } from "../composite/ModuleCard"
import { NavigationBar } from "../composite/NavigationBar"
import { BookOpen, BarChart2, User } from "lucide-react"
import { ProfileScreen } from "./ProfileScreen"
import { ProgressScreen } from "./ProgressScreen"

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
          "flex flex-col md:flex-row h-full min-h-screen relative overflow-hidden",
          // New Bluish Gradient Background
          "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
          className
        )}
        {...props}
      >
        {/* Decorative Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none animate-pulse delay-700" />

        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-white/60 backdrop-blur-xl border-r border-blue-100 p-6 z-20 shadow-xl shadow-blue-900/5">
          <div className="mb-8">
            <img
              src="/logo/logo.png"
              alt="Legali AI Logo"
              className="h-auto w-auto" // Adjust height and width as needed
            />
          </div>

          {/* <div className="mt-auto border-t border-slate-200/50">
             <UserStatsBar
                streak={streak}
                points={points}
                hearts={hearts}
                className="mb-6"
              />
          </div> */}
          <nav className="space-y-2 flex-1">
            {[
              { id: 'learn', label: 'Learn', icon: BookOpen },
              { id: 'progress', label: 'Progress', icon: BarChart2 },
              { id: 'profile', label: 'Profile', icon: User },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group",
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                )}
              >
                <item.icon className={cn("w-5 h-5 transition-transform duration-300", activeTab === item.id ? "animate-pulse" : "group-hover:scale-110")} />
                <span className="font-bold">{item.label}</span>
              </button>
            ))}
          </nav>

          
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          {activeTab === 'learn' && (
            <>
              {/* Header Area (Mobile Only for Stats) */}
              <div className="sticky top-0 z-10 px-5 pt-6 pb-4 backdrop-blur-md bg-white/30 border-b border-white/20 md:bg-transparent md:border-none md:backdrop-blur-none">
                <div className="md:hidden">
                  <UserStatsBar
                    streak={streak}
                    points={points}
                    hearts={hearts}
                    className="mb-6"
                  />
                </div>
                
                <div className="max-w-4xl mx-auto w-full">
                  <ProgressSection
                    title="Civil Procedure"
                    progress={45}
                  />
                </div>
              </div>

              {/* Modules Scroll Area */}
              <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 md:pb-6">
                <div className="max-w-4xl mx-auto w-full space-y-6">
                  <h2 className="font-bold text-2xl text-slate-800 mb-4 tracking-tight">
                    Learning Path
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0">
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
              </div>
            </>
          )}

          {activeTab === 'progress' && <ProgressScreen />}
          {activeTab === 'profile' && <ProfileScreen />}
        </div>

        {/* Bottom Navigation (Mobile Only) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-20 p-4">
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
