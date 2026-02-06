import type * as React from "react";
import { cn } from "@/lib/utils";

export type GradientTextVariant = "primary" | "danger" | "secondary" | "custom";

export interface GradientTextProps {
  /** Predefined gradient variant or 'custom' for customGradient */
  variant?: GradientTextVariant;
  /** Custom gradient CSS (used when variant is 'custom') */
  customGradient?: string;
  /** HTML element to render as */
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /** Additional class names */
  className?: string;
  /** Children to render */
  children?: React.ReactNode;
}

const variantGradients: Record<Exclude<GradientTextVariant, "custom">, string> = {
  primary: "from-[#4eaed0] via-[#667eea] to-[#764ba2]",
  secondary: "from-[#4eaed0] to-[#667eea]",
  danger: "from-rose-500 to-pink-500",
};

/**
 * Text component with gradient coloring.
 * Supports predefined gradients or custom CSS gradients.
 */
const GradientText = ({
  className,
  variant = "primary",
  customGradient,
  as: Component = "span",
  children,
}: GradientTextProps) => {
  const gradientClass = variant === "custom" ? "" : `bg-gradient-to-r ${variantGradients[variant]}`;

  const customStyle =
    variant === "custom" && customGradient ? { backgroundImage: customGradient } : undefined;

  return (
    <Component
      className={cn("bg-clip-text text-transparent", gradientClass, className)}
      style={customStyle}
    >
      {children}
    </Component>
  );
};

GradientText.displayName = "GradientText";

export { GradientText };
