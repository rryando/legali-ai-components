/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-trust-logos.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-trust-logos.json"
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrustLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TrustLogosProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of logo images to display */
  logos?: TrustLogo[];
  /** Title text above logos */
  title?: string;
  /** Whether to show fade edges */
  showFadeEdges?: boolean;
}

const defaultLogos: TrustLogo[] = [
  {
    src: "/assets/landing/trust-logo-1.png",
    alt: "Partner Logo",
    width: 57,
    height: 60,
  },
  {
    src: "/assets/landing/trust-logo-2.png",
    alt: "Colorado Law",
    width: 259,
    height: 60,
  },
  {
    src: "/assets/landing/trust-logo-3.png",
    alt: "Partner Logo",
    width: 87,
    height: 40,
  },
  {
    src: "/assets/landing/trust-logo-4.png",
    alt: "Partner Logo",
    width: 60,
    height: 60,
  },
  {
    src: "/assets/landing/trust-logo-5.png",
    alt: "Partner Logo",
    width: 122,
    height: 60,
  },
  {
    src: "/assets/landing/trust-logo-6.png",
    alt: "Partner Logo",
    width: 275,
    height: 28,
  },
  {
    src: "/assets/landing/trust-logo-7.png",
    alt: "Access to Justice Network",
    width: 81,
    height: 32,
  },
  {
    src: "/assets/landing/trust-logo-8.png",
    alt: "IAALS",
    width: 318,
    height: 28,
  },
];

/**
 * Trust logos section with fade edges and hover effects.
 * Displays partner and certification logos.
 */
const TrustLogos = React.forwardRef<HTMLElement, TrustLogosProps>(
  (
    {
      className,
      logos = defaultLogos,
      title = "Trusted by leading legal organizations",
      showFadeEdges = true,
      ...props
    },
    ref
  ) => {
    return (
      <section
        className={cn(
          "overflow-hidden bg-gradient-to-b from-white to-slate-50/50 px-6 py-16",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center font-medium text-slate-500 text-sm uppercase tracking-wider">
            {title}
          </p>

          <div className="relative">
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 transition-opacity duration-500 hover:opacity-100">
              {logos.map((logo, index) => (
                <img
                  alt={logo.alt}
                  className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-12"
                  key={index}
                  src={logo.src}
                />
              ))}
            </div>

            {/* Fade edges */}
            {showFadeEdges && (
              <>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
);

TrustLogos.displayName = "TrustLogos";

export { TrustLogos };
