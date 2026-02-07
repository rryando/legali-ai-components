import { Check, AlertCircle } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ValidationState = "idle" | "valid" | "invalid";

type ContactInfoFieldProps = {
  label: string;
  validation?: ValidationState;
  errorMessage?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

const ContactInfoField = forwardRef<HTMLInputElement, ContactInfoFieldProps>(
  ({ label, validation = "idle", errorMessage, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-600">{label}</label>
        <div className="relative">
          <input
            className={cn(
              "w-full rounded-xl border bg-white/60 px-3 py-2.5 text-sm text-slate-800 backdrop-blur-sm",
              "placeholder:text-slate-400 transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-1",
              validation === "idle" && "border-slate-200/60 focus:border-[#4eaed0]/40 focus:ring-[#4eaed0]/20",
              validation === "valid" && "border-green-300 focus:ring-green-200",
              validation === "invalid" && "border-red-300 focus:ring-red-200"
            )}
            ref={ref}
            {...props}
          />

          {validation === "valid" && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
              <Check className="h-4 w-4" />
            </span>
          )}
          {validation === "invalid" && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400">
              <AlertCircle className="h-4 w-4" />
            </span>
          )}
        </div>

        {validation === "invalid" && errorMessage && (
          <p className="text-xs text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

ContactInfoField.displayName = "ContactInfoField";

export { ContactInfoField };
export type { ContactInfoFieldProps, ValidationState };
