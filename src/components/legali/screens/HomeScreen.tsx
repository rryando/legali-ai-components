import * as React from "react"
import { cn } from "@/lib/utils"
import { UserStatsBar } from "../composite/UserStatsBar"
import { ProgressSection } from "../composite/ProgressSection"
import { ModuleCard, type ModuleStatus, type Lesson } from "../composite/ModuleCard"
import { NavigationBar } from "../composite/NavigationBar"
import { BookOpen, BarChart2, User } from "lucide-react"
import { ProfileScreen } from "./ProfileScreen"
import { ProgressScreen } from "./ProgressScreen"
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot"

export interface Module {
  id: string | number
  icon: React.ReactNode
  title: string
  subtitle: string
  mascotCopy?: string
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
    const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(MascotMotion.IDLE)

    const mascotTimersRef = React.useRef<number[]>([])
    const clearMascotTimers = React.useCallback(() => {
      mascotTimersRef.current.forEach((t) => clearTimeout(t))
      mascotTimersRef.current = []
    }, [])

    const currentModule = React.useMemo(() => {
      return modules.find((m) => m.status === "current") ?? modules[0]
    }, [modules])

    const progressFromStatus = React.useMemo(() => {
      if (!currentModule) return 0
      switch (currentModule.status) {
        case "completed":
          return 100
        case "current":
          return 45
        case "locked":
        default:
          return 0
      }
    }, [currentModule])

    const mascotText = React.useMemo(() => {
      if (!currentModule) return ""
      return currentModule.mascotCopy ?? currentModule.subtitle
    }, [currentModule])

    React.useEffect(() => {
      if (activeTab !== "learn") {
        clearMascotTimers()
        setMascotMotion(MascotMotion.IDLE)
        return
      }

      clearMascotTimers()

      setMascotMotion(MascotMotion.WAVING)
      const toSpeaking = window.setTimeout(() => setMascotMotion(MascotMotion.SPEAKING), 900)
      // Longer speaking window for the hero companion
      const toIdle = window.setTimeout(() => setMascotMotion(MascotMotion.IDLE), 5200)

      mascotTimersRef.current = [toSpeaking, toIdle]

      return () => {
        clearMascotTimers()
      }
    }, [activeTab, clearMascotTimers])

    const handleModuleClick = React.useCallback((id: string | number) => {
      clearMascotTimers()
      setMascotMotion(MascotMotion.THINKING)
      const toSpeaking = window.setTimeout(() => setMascotMotion(MascotMotion.SPEAKING), 450)
      const toIdle = window.setTimeout(() => setMascotMotion(MascotMotion.IDLE), 4200)

      mascotTimersRef.current = [toSpeaking, toIdle]

      onModuleClick(id)
    }, [clearMascotTimers, onModuleClick])

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
                    title={currentModule?.title ?? "Learning"}
                    progress={progressFromStatus}
                  />

                  {/* Mascot Companion (Sticky Hero) */}
                  <div
                    className={cn(
                      "mt-4 rounded-3xl overflow-hidden relative",
                      "border border-blue-200/40",
                      "bg-white/45 backdrop-blur-xl",
                      "shadow-xl shadow-blue-900/5",
                      "animate-border-glow",
                      // Subtle outer glow to make it feel like a hero card
                      "shadow-[0_0_25px_rgba(59,130,246,0.18),inset_0_0_15px_rgba(59,130,246,0.08)]"
                    )}
                  >
                    {/* Glow accents */}
                    <div className="absolute -top-16 -left-16 w-64 h-64 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                      <div className="shrink-0">
                        <LegaliMascot
                          motion={mascotMotion}
                          width={240}
                          height={240}
                          className="mx-auto"
                        />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="font-bold text-lg md:text-xl text-slate-800 tracking-tight">
                            {currentModule?.title ?? "Let’s learn"}
                          </h2>

                        </div>
                        <div className="mt-3 rounded-2xl border border-white/50 bg-white/55 backdrop-blur-md px-4 py-3">
                          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                            {mascotText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        onModuleClick={() => handleModuleClick(module.id)}
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
