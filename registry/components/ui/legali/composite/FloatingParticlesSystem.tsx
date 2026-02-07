/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-floating-particles-system.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-floating-particles-system.json"
 */
import { BookOpen, FileText, Gavel, Scale, Sparkles } from "lucide-react";
import type { HTMLAttributes } from "react";
import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { FloatingParticle } from "../atomic/FloatingParticle";

type FloatingParticlesSystemProps = {
  /** Number of particles to display */
  particleCount?: number;
  /** Enable mouse interaction */
  enableMouseInteraction?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const LEGAL_ICONS = [
  { icon: Scale, color: "text-[#4eaed0]", glow: "rgba(78, 174, 208, 0.3)" },
  { icon: Gavel, color: "text-[#667eea]", glow: "rgba(102, 126, 234, 0.3)" },
  { icon: FileText, color: "text-[#764ba2]", glow: "rgba(118, 75, 162, 0.3)" },
  { icon: BookOpen, color: "text-[#f472b6]", glow: "rgba(244, 114, 182, 0.3)" },
  { icon: Sparkles, color: "text-[#06b6d4]", glow: "rgba(6, 182, 212, 0.3)" },
];

/**
 * Container that renders multiple floating particles with
 * randomized properties. Uses legal-themed icons.
 *
 * @example
 * ```tsx
 * <FloatingParticlesSystem particleCount={8} />
 * ```
 */
const FloatingParticlesSystem = forwardRef<HTMLDivElement, FloatingParticlesSystemProps>(
  ({ className, particleCount = 6, enableMouseInteraction = false, ...props }, ref) => {
    const particles = useMemo(() => {
      return Array.from({ length: particleCount }, (_, i) => {
        const iconData = LEGAL_ICONS[i % LEGAL_ICONS.length];
        const Icon = iconData.icon;

        // Distribute particles around the container edges
        const angle = (i / particleCount) * 360;
        const radius = 35 + Math.random() * 15; // 35-50% from center

        // Convert polar to cartesian coordinates
        const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;

        return {
          id: i,
          icon: <Icon className={cn("h-5 w-5", iconData.color)} />,
          size: 36 + Math.random() * 16, // 36-52px
          duration: 12 + Math.random() * 8, // 12-20s
          delay: Math.random() * 5,
          glowColor: iconData.glow,
          position: { x, y },
        };
      });
    }, [particleCount]);

    return (
      <div className={cn("pointer-events-none absolute inset-0", className)} ref={ref} {...props}>
        {particles.map((particle) => (
          <FloatingParticle
            delay={particle.delay}
            duration={particle.duration}
            glowColor={particle.glowColor}
            icon={particle.icon}
            initialPosition={particle.position}
            key={particle.id}
            size={particle.size}
          />
        ))}
      </div>
    );
  }
);

FloatingParticlesSystem.displayName = "FloatingParticlesSystem";

export { FloatingParticlesSystem };
export type { FloatingParticlesSystemProps };
