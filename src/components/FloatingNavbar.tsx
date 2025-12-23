import { Menu, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the FloatingNavbar component.
 */
interface FloatingNavbarProps {
  /**
   * Optional class name to override styles.
   */
  className?: string;
}

/**
 * A responsive navbar that transforms from a full-width header to a floating pill on scroll.
 *
 * @component
 * @example
 * ```tsx
 * <FloatingNavbar />
 * ```
 */
export const FloatingNavbar = ({ className }: FloatingNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center pt-4 transition-all duration-300 ease-in-out">
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isScrolled
            ? "mt-2 w-[90%] rounded-full border border-white/20 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md md:w-[700px] dark:bg-black/70"
            : "mt-0 w-full border-transparent bg-transparent px-8 py-6",
          className
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
            L
          </div>
          <span
            className={cn(
              "font-bold text-lg transition-opacity duration-300",
              isScrolled ? "w-0 overflow-hidden opacity-0 md:w-auto md:opacity-100" : "opacity-100"
            )}
          >
            Legali
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {["Features", "Solutions", "Pricing", "About"].map((item) => (
            <a
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 transition-colors hover:bg-accent">
            <Sun className="h-4 w-4" />
          </button>
          <button
            className={cn(
              "rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-all hover:bg-primary/90",
              isScrolled ? "h-9 px-4" : "h-10 px-6"
            )}
          >
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button className="p-2 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Simple implementation for demo) */}
      {isMobileMenuOpen && (
        <div className="slide-in-from-top-5 pointer-events-auto absolute top-full right-0 left-0 animate-in border-b bg-background p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {["Features", "Solutions", "Pricing", "About"].map((item) => (
              <a className="rounded-md p-2 font-medium text-sm hover:bg-accent" href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
