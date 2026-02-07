/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-avatar.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-avatar.json"
 */
import { cva, type VariantProps } from "class-variance-authority";
import { BadgeCheck } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const lawyerAvatarVariants = cva("relative inline-flex shrink-0 rounded-full", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-14 w-14",
      xl: "h-20 w-20",
    },
    status: {
      online: "",
      offline: "",
      busy: "",
    },
  },
  defaultVariants: {
    size: "md",
    status: "offline",
  },
});

const statusDotColors: Record<string, string> = {
  online: "bg-green-400 shadow-green-400/50",
  offline: "bg-slate-300",
  busy: "bg-amber-400 shadow-amber-400/50",
};

const statusDotSizes: Record<string, string> = {
  sm: "h-2 w-2 border",
  md: "h-2.5 w-2.5 border-[1.5px]",
  lg: "h-3 w-3 border-2",
  xl: "h-3.5 w-3.5 border-2",
};

const badgeSizes: Record<string, string> = {
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-4 w-4",
  xl: "h-5 w-5",
};

type LawyerAvatarProps = {
  src: string;
  alt: string;
  isVerified?: boolean;
  className?: string;
} & VariantProps<typeof lawyerAvatarVariants>;

const LawyerAvatar = forwardRef<HTMLDivElement, LawyerAvatarProps>(
  ({ className, src, alt, size = "md", status = "offline", isVerified = false }, ref) => {
    const sizeKey = size ?? "md";
    const statusKey = status ?? "offline";

    return (
      <div className={cn(lawyerAvatarVariants({ size, status }), className)} ref={ref}>
        <img
          alt={alt}
          className="h-full w-full rounded-full border-2 border-white object-cover shadow-sm"
          src={src}
        />

        {/* Status dot */}
        <span
          className={cn(
            "absolute right-0 bottom-0 rounded-full border-white shadow-sm",
            statusDotColors[statusKey],
            statusDotSizes[sizeKey],
            statusKey === "online" && "shadow-sm"
          )}
        />

        {/* Verified badge */}
        {isVerified && (
          <span className="absolute -top-0.5 -right-0.5">
            <BadgeCheck className={cn("fill-[#4eaed0] text-white", badgeSizes[sizeKey])} />
          </span>
        )}
      </div>
    );
  }
);

LawyerAvatar.displayName = "LawyerAvatar";

export { LawyerAvatar, lawyerAvatarVariants };
export type { LawyerAvatarProps };
