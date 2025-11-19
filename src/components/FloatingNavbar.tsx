import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun } from "lucide-react";

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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out pt-4 pointer-events-none">
      <nav
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto",
          isScrolled
            ? "w-[90%] md:w-[700px] rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md border border-white/20 shadow-lg py-3 px-6 mt-2"
            : "w-full bg-transparent py-6 px-8 mt-0 border-transparent",
          className
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            L
          </div>
          <span
            className={cn(
              "font-bold text-lg transition-opacity duration-300",
              isScrolled ? "opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto" : "opacity-100"
            )}
          >
            Legali
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-accent transition-colors">
            <Sun className="w-4 h-4" />
          </button>
          <button
            className={cn(
              "bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all",
              isScrolled ? "h-9 px-4" : "h-10 px-6"
            )}
          >
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay (Simple implementation for demo) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b p-4 md:hidden pointer-events-auto shadow-xl animate-in slide-in-from-top-5">
           <div className="flex flex-col gap-4">
            {["Features", "Solutions", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              >
                {item}
              </a>
            ))}
           </div>
        </div>
      )}
    </div>
  );
};
