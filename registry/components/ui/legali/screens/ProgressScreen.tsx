import * as React from "react"
import { cn } from "@/lib/utils"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/legali/chart"
import { GlassCard } from "../atomic/GlassCard"
import { BookOpen, CheckCircle2, Clock, TrendingUp, ArrowUpRight } from "lucide-react"

export interface ProgressScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  weeklyActivity?: { day: string; xp: number }[]
  skills?: { name: string; progress: number; color: string }[]
  recentActivity?: { title: string; date: string; score: number }[]
}

const chartConfig = {
  xp: {
    label: "XP Earned",
    color: "#3b82f6",
  },
} satisfies ChartConfig

export const ProgressScreen = ({ 
  className,
  weeklyActivity = [
    { day: "Mon", xp: 120 },
    { day: "Tue", xp: 200 },
    { day: "Wed", xp: 150 },
    { day: "Thu", xp: 300 },
    { day: "Fri", xp: 250 },
    { day: "Sat", xp: 180 },
    { day: "Sun", xp: 100 },
  ],
  skills = [
    { name: "Civil Procedure", progress: 75, color: "bg-blue-500" },
    { name: "Torts", progress: 45, color: "bg-rose-500" },
    { name: "Contracts", progress: 30, color: "bg-amber-500" },
    { name: "Criminal Law", progress: 60, color: "bg-emerald-500" },
    { name: "Constitutional Law", progress: 15, color: "bg-purple-500" },
  ],
  recentActivity = [
    { title: "Intro to Torts", date: "Today, 10:30 AM", score: 100 },
    { title: "Contract Formation", date: "Yesterday", score: 85 },
    { title: "Civil Procedure Basics", date: "2 days ago", score: 90 },
  ],
  ...props 
}: ProgressScreenProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto px-5 py-8 pb-24 md:pb-8", className)} {...props}>
      <div className="max-w-4xl mx-auto w-full space-y-8">
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">Your Progress</h1>
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-bold">+12% this week</span>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <GlassCard className="p-6 rounded-2xl">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-800">Weekly Activity</h2>
            <p className="text-slate-500 text-sm">XP earned over the last 7 days</p>
          </div>
          <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart data={weeklyActivity}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="day" 
                  tickLine={false} 
                  tickMargin={10} 
                  axisLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="xp" 
                  fill="var(--color-xp)" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skill Breakdown */}
          <GlassCard className="p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-800">Skill Breakdown</h2>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full transition-all duration-500 ease-out rounded-full", skill.color)} 
                      style={{ width: `${skill.progress}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Recent Activity */}
          <GlassCard className="p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-800">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-blue-100">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 truncate">{activity.title}</h3>
                    <p className="text-xs text-slate-500">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600">{activity.score}%</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Score</div>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1 group">
                View All History
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  )
}
