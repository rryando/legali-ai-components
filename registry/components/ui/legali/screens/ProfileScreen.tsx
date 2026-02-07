/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-profile-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-profile-screen.json"
 */
import {
  Bell,
  BookOpen,
  Flame,
  LogOut,
  Moon,
  Shield,
  Target,
  Trophy,
  Volume2,
  Zap,
} from "lucide-react";
import type * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/legali/avatar";
import { Badge } from "@/components/ui/legali/badge";
import { Button } from "@/components/ui/legali/button";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { ProfileStatCard } from "../atomic/ProfileStatCard";
import { SettingItem } from "../atomic/SettingItem";

export interface ProfileScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: {
    name: string;
    handle: string;
    avatarUrl?: string;
    level: number;
    title: string;
    joinDate: string;
  };
  stats?: {
    xp: number;
    streak: number;
    lessonsCompleted: number;
    accuracy: number;
  };
}

export const ProfileScreen = ({
  className,
  user = {
    name: "Ryan Ryn",
    handle: "@ryanryn",
    level: 5,
    title: "Legal Scholar",
    joinDate: "November 2025",
  },
  stats = {
    xp: 1250,
    streak: 5,
    lessonsCompleted: 12,
    accuracy: 92,
  },
  ...props
}: ProfileScreenProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto px-5 py-8 pb-24 md:pb-8", className)} {...props}>
      <div className="mx-auto w-full max-w-4xl space-y-8">
        {/* Header Profile Card */}
        <GlassCard className="relative overflow-hidden rounded-2xl p-6 md:p-8">
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 opacity-40 blur transition duration-500 group-hover:opacity-70" />
              <Avatar className="h-24 w-24 border-4 border-white shadow-xl md:h-32 md:w-32">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-white font-bold text-3xl text-blue-600">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute right-0 bottom-0 h-6 w-6 rounded-full border-4 border-white bg-emerald-500" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="mb-1 flex items-center justify-center gap-3 md:justify-start">
                <h1 className="font-bold text-3xl text-slate-800">{user.name}</h1>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200" variant="secondary">
                  Lvl {user.level}
                </Badge>
              </div>
              <p className="mb-4 font-medium text-slate-500">
                {user.handle} • {user.title}
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge
                  className="border-slate-200 bg-white/50 px-3 py-1 text-slate-600 backdrop-blur-sm"
                  variant="outline"
                >
                  Member since {user.joinDate}
                </Badge>
              </div>
            </div>

            <Button
              className="border-blue-200 bg-white/50 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              variant="outline"
            >
              Edit Profile
            </Button>
          </div>
        </GlassCard>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProfileStatCard
            colorClass="text-amber-500 bg-amber-50"
            icon={Zap}
            label="Total XP"
            value={stats.xp}
          />
          <ProfileStatCard
            colorClass="text-rose-500 bg-rose-50"
            icon={Flame}
            label="Day Streak"
            value={stats.streak}
          />
          <ProfileStatCard
            colorClass="text-emerald-500 bg-emerald-50"
            icon={Target}
            label="Lessons"
            value={stats.lessonsCompleted}
          />
          <ProfileStatCard
            colorClass="text-purple-500 bg-purple-50"
            icon={Trophy}
            label="Accuracy"
            value={`${stats.accuracy}%`}
          />
        </div>

        {/* Achievements Section */}
        <div className="space-y-4">
          <h2 className="px-1 font-bold text-slate-800 text-xl">Achievements</h2>
          <GlassCard className="rounded-2xl p-6">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
              {[
                {
                  icon: Shield,
                  label: "First Win",
                  color: "text-blue-500",
                  unlocked: true,
                },
                {
                  icon: Flame,
                  label: "3 Day Streak",
                  color: "text-rose-500",
                  unlocked: true,
                },
                {
                  icon: Zap,
                  label: "Speedster",
                  color: "text-amber-500",
                  unlocked: true,
                },
                {
                  icon: BookOpen,
                  label: "Scholar",
                  color: "text-emerald-500",
                  unlocked: false,
                },
                {
                  icon: Trophy,
                  label: "Champion",
                  color: "text-purple-500",
                  unlocked: false,
                },
              ].map((badge, i) => (
                <div
                  className={cn(
                    "group flex flex-col items-center gap-2",
                    !badge.unlocked && "opacity-40 grayscale"
                  )}
                  key={i}
                >
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform group-hover:scale-110",
                      badge.unlocked
                        ? "border border-white/60 from-white to-slate-50"
                        : "from-slate-100 to-slate-200"
                    )}
                  >
                    <badge.icon className={cn("h-8 w-8", badge.color)} />
                  </div>
                  <span className="text-center font-bold text-slate-600 text-xs">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Settings Section */}
        <div className="space-y-4">
          <h2 className="px-1 font-bold text-slate-800 text-xl">Settings</h2>
          <GlassCard className="overflow-hidden rounded-2xl">
            <SettingItem icon={Bell} label="Notifications" value={true} />
            <SettingItem icon={Volume2} label="Sound Effects" value={true} />
            <SettingItem icon={Moon} label="Dark Mode" value={false} />
            <SettingItem icon={Shield} label="Privacy & Security" type="arrow" />
            <div className="group cursor-pointer border-slate-100/50 border-t p-4 transition-colors hover:bg-rose-50/30">
              <div className="flex items-center gap-3 text-rose-600">
                <div className="rounded-lg bg-rose-50 p-2 transition-colors group-hover:bg-rose-100">
                  <LogOut className="h-5 w-5" />
                </div>
                <span className="font-medium">Sign Out</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
