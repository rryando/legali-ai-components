/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-setting-item.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-setting-item.json"
 */
import { ChevronRight, type LucideIcon } from "lucide-react";
import { Switch } from "@/components/ui/legali/switch";

export interface SettingItemProps {
  icon: LucideIcon;
  label: string;
  type?: "switch" | "arrow";
  value?: boolean;
  onValueChange?: (checked: boolean) => void;
  onClick?: () => void;
}

const SettingItem = ({
  icon: Icon,
  label,
  type = "switch",
  value = false,
  onValueChange,
  onClick,
}: SettingItemProps) => (
  <div
    className="flex cursor-pointer items-center justify-between border-slate-100/50 border-b p-4 transition-colors last:border-0 hover:bg-white/30"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium text-slate-700">{label}</span>
    </div>
    {type === "switch" ? (
      <Switch checked={value} onCheckedChange={onValueChange} />
    ) : (
      <ChevronRight className="h-5 w-5 text-slate-400" />
    )}
  </div>
);

export { SettingItem };
