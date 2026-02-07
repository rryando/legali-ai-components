/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-case-status-badge.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-case-status-badge.json"
 */
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { CaseRequestStatus } from "../data/marketplace-types";

const caseStatusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium text-xs",
  {
    variants: {
      status: {
        new: "bg-cyan-100 text-cyan-700",
        pending: "bg-amber-100 text-amber-700",
        in_progress: "bg-green-100 text-green-700",
      },
    },
    defaultVariants: {
      status: "new",
    },
  }
);

const statusLabels: Record<CaseRequestStatus, string> = {
  new: "New",
  pending: "Pending",
  in_progress: "In Progress",
};

type CaseStatusBadgeProps = {
  status: CaseRequestStatus;
  className?: string;
} & Omit<VariantProps<typeof caseStatusBadgeVariants>, "status">;

const CaseStatusBadge = forwardRef<HTMLSpanElement, CaseStatusBadgeProps>(
  ({ className, status }, ref) => {
    return (
      <span className={cn(caseStatusBadgeVariants({ status }), className)} ref={ref}>
        {status === "new" && (
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
        )}
        {statusLabels[status]}
      </span>
    );
  }
);

CaseStatusBadge.displayName = "CaseStatusBadge";

export { CaseStatusBadge, caseStatusBadgeVariants };
export type { CaseStatusBadgeProps };
