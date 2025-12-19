import { BarChart2, BookOpen, User } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  MascotHeroCard,
  type MascotHeroScriptStep,
} from "../composite/MascotHeroCard";
import {
  type Lesson,
  ModuleCard,
  type ModuleStatus,
} from "../composite/ModuleCard";
import { NavigationBar } from "../composite/NavigationBar";
import { UserStatsBar } from "../composite/UserStatsBar";
import { MascotMotion } from "../mascot";
import { ProfileScreen } from "./ProfileScreen";
import { ProgressScreen } from "./ProgressScreen";

export interface Module {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  mascotCopy?: string;
  status: ModuleStatus;
  lessons: Lesson[];
}

export interface HomeScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  modules: Module[];
  onModuleClick: (id: string | number) => void;
  streak?: number;
  points?: number;
  hearts?: number;
}

const HomeScreen = React.forwardRef<HTMLDivElement, HomeScreenProps>(
  (
    {
      className,
      modules,
      onModuleClick,
      streak = 5,
      points = 1250,
      hearts = 5,
      ...props
    },
    ref
  ) => {
    const [activeTab, setActiveTab] = React.useState("learn");
    const [heroTrigger, setHeroTrigger] = React.useState(0);

    const currentModule = React.useMemo(
      () => modules.find((m) => m.status === "current") ?? modules[0],
      [modules]
    );

    const mascotText = React.useMemo(() => {
      if (!currentModule) return "";
      return currentModule.mascotCopy ?? currentModule.subtitle;
    }, [currentModule]);

    const heroScript = React.useMemo<MascotHeroScriptStep[]>(
      () => [
        {
          motion: MascotMotion.WAVING,
          durationMs: 2000,
          lines: [
            "Hey!",
            "Ready to learn?",
            currentModule?.title ? `Today: ${currentModule.title}` : "",
          ].filter(Boolean) as string[],
        },
        {
          motion: MascotMotion.SPEAKING,
          durationMs: 30_000,
          lines: [
            mascotText,
            currentModule?.title ? `Today: ${currentModule.title}` : "",
            "Pick a lesson and go step-by-step",
            "Watch for key terms and exceptions",
          ].filter(Boolean) as string[],
        },
        {
          motion: MascotMotion.IDLE,
          durationMs: null,
          lines: ["Tap any module to continue", "I’m here if you need a hint"],
        },
      ],
      [currentModule?.title, mascotText]
    );

    const heroInterruptScript = React.useMemo<MascotHeroScriptStep[]>(
      () => [
        {
          motion: MascotMotion.THINKING,
          durationMs: 450,
          lines: ["Hmm…", "Let me think", "One moment"],
        },
        {
          motion: MascotMotion.SPEAKING,
          durationMs: 4200,
          lines: [mascotText, "Let’s jump in"].filter(Boolean) as string[],
        },
        {
          motion: MascotMotion.IDLE,
          durationMs: null,
          lines: ["Tap a lesson to start"],
        },
      ],
      [mascotText]
    );

    const handleModuleClick = React.useCallback(
      (id: string | number) => {
        setHeroTrigger((v) => v + 1);
        onModuleClick(id);
      },
      [onModuleClick]
    );

    return (
      <div
        className={cn(
          "relative flex h-full min-h-screen flex-col overflow-hidden md:flex-row",
          // New Bluish Gradient Background
          "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Decorative Orbs */}
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-200/40 blur-3xl delay-700" />

        {/* Desktop Sidebar */}
        <div className="z-20 hidden w-64 flex-col border-blue-100 border-r bg-white/60 p-6 shadow-blue-900/5 shadow-xl backdrop-blur-xl md:flex">
          <div className="mb-8">
            <img
              alt="Legali AI Logo"
              className="h-auto w-auto"
              src="/logo/logo.png" // Adjust height and width as needed
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
          <nav className="flex-1 space-y-2">
            {[
              { id: "learn", label: "Learn", icon: BookOpen },
              { id: "progress", label: "Progress", icon: BarChart2 },
              { id: "profile", label: "Profile", icon: User },
            ].map((item) => (
              <button
                className={cn(
                  "group flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
                  activeTab === item.id
                    ? "scale-105 bg-blue-600 text-white shadow-blue-500/30 shadow-lg"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                )}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-300",
                    activeTab === item.id
                      ? "animate-pulse"
                      : "group-hover:scale-110"
                  )}
                />
                <span className="font-bold">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="relative flex h-full flex-1 flex-col overflow-hidden">
          {activeTab === "learn" && (
            <>
              {/* Header Area (Mobile Only for Stats) */}
              <div className="sticky top-0 z-10 border-white/20 border-b bg-white/30 px-5 pt-6 pb-4 backdrop-blur-md md:border-none md:bg-transparent md:backdrop-blur-none">
                <div className="md:hidden">
                  <UserStatsBar
                    className="mb-6"
                    hearts={hearts}
                    points={points}
                    streak={streak}
                  />
                </div>

                <div className="mx-auto w-full max-w-4xl">
                  {/* <ProgressSection
                    title={currentModule?.title ?? "Learning"}
                    progress={progressFromStatus}
                  /> */}

                  <MascotHeroCard
                    active={activeTab === "learn"}
                    className="mt-4"
                    heroTitle={currentModule?.title ?? "Let’s learn"}
                    interruptScript={heroInterruptScript}
                    script={heroScript}
                    stream={{
                      fitToStepDuration: true,
                      loop: true,
                      showCursor: true,
                      linePauseMs: 5000,
                    }}
                    triggerKey={heroTrigger}
                  />
                </div>
              </div>

              {/* Modules Scroll Area */}
              <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 md:pb-6">
                <div className="mx-auto w-full max-w-4xl space-y-6">
                  <h2 className="mb-4 font-bold text-2xl text-slate-800 tracking-tight">
                    Learning Path
                  </h2>

                  <div className="grid grid-cols-1 gap-4 space-y-0 md:grid-cols-2">
                    {modules.map((module) => (
                      <ModuleCard
                        icon={module.icon}
                        key={module.id}
                        lessons={module.lessons}
                        onModuleClick={() => handleModuleClick(module.id)}
                        status={module.status}
                        subtitle={module.subtitle}
                        title={module.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "progress" && <ProgressScreen />}
          {activeTab === "profile" && <ProfileScreen />}
        </div>

        {/* Bottom Navigation (Mobile Only) */}
        <div className="fixed right-0 bottom-0 left-0 z-20 p-4 md:hidden">
          <NavigationBar
            activeItem={activeTab}
            className="mx-auto max-w-md rounded-2xl border-white/50 bg-white/80 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl"
            items={[
              { id: "learn", label: "Learn", icon: "learn" },
              { id: "progress", label: "Progress", icon: "progress" },
              { id: "profile", label: "Profile", icon: "profile" },
            ]}
            onItemClick={setActiveTab}
          />
        </div>
      </div>
    );
  }
);
HomeScreen.displayName = "HomeScreen";

export { HomeScreen };
