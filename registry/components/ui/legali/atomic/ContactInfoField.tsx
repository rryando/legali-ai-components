/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-contact-info-field.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-contact-info-field.json"
 */
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
        <label className="block font-medium text-slate-600 text-xs">{label}</label>
        <div className="relative">
          <input
            className={cn(
              "w-full rounded-xl border bg-white/60 px-3 py-2.5 text-slate-800 text-sm backdrop-blur-sm",
              "transition-all duration-200 placeholder:text-slate-400",
              "focus:outline-none focus:ring-2 focus:ring-offset-1",
              validation === "idle" &&
                "border-slate-200/60 focus:border-[#4eaed0]/40 focus:ring-[#4eaed0]/20",
              validation === "valid" && "border-green-300 focus:ring-green-200",
              validation === "invalid" && "border-red-300 focus:ring-red-200"
            )}
            ref={ref}
            {...props}
          />

          {validation === "valid" && (
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-green-500">
              <Check className="h-4 w-4" />
            </span>
          )}
          {validation === "invalid" && (
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-400">
              <AlertCircle className="h-4 w-4" />
            </span>
          )}
        </div>

        {validation === "invalid" && errorMessage && (
          <p className="text-red-500 text-xs">{errorMessage}</p>
        )}
      </div>
    );
  }
);

ContactInfoField.displayName = "ContactInfoField";

export { ContactInfoField };
export type { ContactInfoFieldProps, ValidationState };
