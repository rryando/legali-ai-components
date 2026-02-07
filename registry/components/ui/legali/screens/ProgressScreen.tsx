import { ArrowUpRight, BookOpen, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import type * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/legali/chart";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";

export interface ProgressScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  weeklyActivity?: { day: string; xp: number }[];
  skills?: { name: string; progress: number; color: string }[];
  recentActivity?: { title: string; date: string; score: number }[];
}

const chartConfig = {
  xp: {
    label: "XP Earned",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

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
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl text-slate-800">Your Progress</h1>
          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-600">
            <TrendingUp className="h-4 w-4" />
            <span className="font-bold text-sm">+12% this week</span>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <GlassCard className="rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="font-bold text-lg text-slate-800">Weekly Activity</h2>
            <p className="text-slate-500 text-sm">XP earned over the last 7 days</p>
          </div>
          <div className="h-[300px] w-full">
            <ChartContainer className="h-full w-full" config={chartConfig}>
              <BarChart data={weeklyActivity}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  axisLine={false}
                  dataKey="day"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  tickLine={false}
                  tickMargin={10}
                />
                <YAxis
                  axisLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  tickFormatter={(value) => `${value}`}
                  tickLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar barSize={40} dataKey="xp" fill="var(--color-xp)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Skill Breakdown */}
          <GlassCard className="rounded-2xl p-6">
            <div className="mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h2 className="font-bold text-lg text-slate-800">Skill Breakdown</h2>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div className="space-y-2" key={skill.name}>
                  <div className="flex justify-between font-medium text-sm">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500 ease-out",
                        skill.color
                      )}
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Recent Activity */}
          <GlassCard className="rounded-2xl p-6">
            <div className="mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="font-bold text-lg text-slate-800">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div
                  className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-blue-100 hover:bg-white/50"
                  key={i}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-bold text-slate-800">{activity.title}</h3>
                    <p className="text-slate-500 text-xs">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600">{activity.score}%</div>
                    <div className="font-bold text-[10px] text-slate-400 uppercase">Score</div>
                  </div>
                </div>
              ))}
              <button className="group flex w-full items-center justify-center gap-1 py-2 font-medium text-blue-600 text-sm hover:text-blue-700">
                View All History
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
