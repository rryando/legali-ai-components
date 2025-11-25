import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { GlassCard } from "../atomic/GlassCard"
import { ProfileStatCard } from "../atomic/ProfileStatCard"
import { SettingItem } from "../atomic/SettingItem"
import { Trophy, Flame, Target, Zap, Bell, Moon, Volume2, LogOut, Shield, BookOpen } from "lucide-react"

export interface ProfileScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: {
    name: string
    handle: string
    avatarUrl?: string
    level: number
    title: string
    joinDate: string
  }
  stats?: {
    xp: number
    streak: number
    lessonsCompleted: number
    accuracy: number
  }
}

export const ProfileScreen = ({ 
  className,
  user = {
    name: "Ryan Ryn",
    handle: "@ryanryn",
    level: 5,
    title: "Legal Scholar",
    joinDate: "November 2025"
  },
  stats = {
    xp: 1250,
    streak: 5,
    lessonsCompleted: 12,
    accuracy: 92
  },
  ...props 
}: ProfileScreenProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto px-5 py-8 pb-24 md:pb-8", className)} {...props}>
      <div className="max-w-4xl mx-auto w-full space-y-8">
        
        {/* Header Profile Card */}
        <GlassCard className="p-6 md:p-8 relative overflow-hidden rounded-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-sky-400 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500" />
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-xl">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-white text-blue-600 text-3xl font-bold">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white" />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <h1 className="text-3xl font-bold text-slate-800">{user.name}</h1>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Lvl {user.level}
                </Badge>
              </div>
              <p className="text-slate-500 font-medium mb-4">{user.handle} • {user.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-slate-200 text-slate-600 py-1 px-3">
                  Member since {user.joinDate}
                </Badge>
              </div>
            </div>

            <Button variant="outline" className="bg-white/50 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
              Edit Profile
            </Button>
          </div>
        </GlassCard>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProfileStatCard 
            icon={Zap} 
            label="Total XP" 
            value={stats.xp} 
            colorClass="text-amber-500 bg-amber-50" 
          />
          <ProfileStatCard 
            icon={Flame} 
            label="Day Streak" 
            value={stats.streak} 
            colorClass="text-rose-500 bg-rose-50" 
          />
          <ProfileStatCard 
            icon={Target} 
            label="Lessons" 
            value={stats.lessonsCompleted} 
            colorClass="text-emerald-500 bg-emerald-50" 
          />
          <ProfileStatCard 
            icon={Trophy} 
            label="Accuracy" 
            value={`${stats.accuracy}%`} 
            colorClass="text-purple-500 bg-purple-50" 
          />
        </div>

        {/* Achievements Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 px-1">Achievements</h2>
          <GlassCard className="p-6 rounded-2xl">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { icon: Shield, label: "First Win", color: "text-blue-500", unlocked: true },
                { icon: Flame, label: "3 Day Streak", color: "text-rose-500", unlocked: true },
                { icon: Zap, label: "Speedster", color: "text-amber-500", unlocked: true },
                { icon: BookOpen, label: "Scholar", color: "text-emerald-500", unlocked: false },
                { icon: Trophy, label: "Champion", color: "text-purple-500", unlocked: false },
              ].map((badge, i) => (
                <div key={i} className={cn("flex flex-col items-center gap-2 group", !badge.unlocked && "opacity-40 grayscale")}>
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br shadow-lg transition-transform group-hover:scale-110",
                    badge.unlocked ? "from-white to-slate-50 border border-white/60" : "from-slate-100 to-slate-200"
                  )}>
                    <badge.icon className={cn("w-8 h-8", badge.color)} />
                  </div>
                  <span className="text-xs font-bold text-slate-600 text-center">{badge.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Settings Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 px-1">Settings</h2>
          <GlassCard className="overflow-hidden rounded-2xl">
            <SettingItem icon={Bell} label="Notifications" value={true} />
            <SettingItem icon={Volume2} label="Sound Effects" value={true} />
            <SettingItem icon={Moon} label="Dark Mode" value={false} />
            <SettingItem icon={Shield} label="Privacy & Security" type="arrow" />
            <div className="p-4 border-t border-slate-100/50 hover:bg-rose-50/30 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 text-rose-600">
                <div className="p-2 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                  <LogOut className="w-5 h-5" />
                </div>
                <span className="font-medium">Sign Out</span>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  )
}
