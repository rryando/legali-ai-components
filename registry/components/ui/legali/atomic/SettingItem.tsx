import * as React from "react"
import { Switch } from "@/components/ui/legali/switch"
import { ChevronRight, LucideIcon } from "lucide-react"

export interface SettingItemProps {
  icon: LucideIcon
  label: string
  type?: "switch" | "arrow"
  value?: boolean
  onValueChange?: (checked: boolean) => void
  onClick?: () => void
}

const SettingItem = ({ 
  icon: Icon, 
  label, 
  type = "switch", 
  value = false, 
  onValueChange,
  onClick 
}: SettingItemProps) => {
  return (
    <div 
      className="flex items-center justify-between p-4 border-b border-slate-100/50 last:border-0 hover:bg-white/30 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-medium text-slate-700">{label}</span>
      </div>
      {type === "switch" ? (
        <Switch checked={value} onCheckedChange={onValueChange} />
      ) : (
        <ChevronRight className="w-5 h-5 text-slate-400" />
      )}
    </div>
  )
}

export { SettingItem }
