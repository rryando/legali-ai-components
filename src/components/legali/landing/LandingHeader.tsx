import { ArrowRight, Menu, X } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { NavDropdown, type NavDropdownItem } from "../composite/NavDropdown";

export interface LandingHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image source */
  logoSrc?: string;
  /** Callback when Get Started is clicked */
  onGetStarted?: () => void;
  /** Navigation dropdown items */
  navigationItems?: {
    litigation101?: NavDropdownItem[];
    solutions?: NavDropdownItem[];
  };
  /** Simple navigation links */
  navLinks?: { label: string; href: string }[];
}

const defaultNavItems = {
  litigation101: [
    {
      label: "Getting Started",
      href: "#",
      description: "Begin your legal journey",
    },
    {
      label: "Legal Basics",
      href: "#",
      description: "Understand fundamental concepts",
    },
    {
      label: "Court Procedures",
      href: "#",
      description: "Navigate the court system",
    },
  ],
  solutions: [
    {
      label: "For Individuals",
      href: "#",
      description: "Personal legal assistance",
    },
    {
      label: "For Lawyers",
      href: "#",
      description: "Streamline your practice",
    },
    {
      label: "For Enterprises",
      href: "#",
      description: "Scale legal operations",
    },
  ],
};

const defaultNavLinks = [
  { label: "Integration", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
];

/**
 * Landing page header with scroll-aware styling.
 * Includes navigation dropdowns, links, and CTA buttons.
 */
const LandingHeader = React.forwardRef<HTMLElement, LandingHeaderProps>(
  (
    {
      className,
      logoSrc = "/assets/landing/logo-legali.png",
      onGetStarted,
      navigationItems = defaultNavItems,
      navLinks = defaultNavLinks,
      ...props
    },
    ref
  ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header
        className={cn(
          "fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "top-4 w-[90%] max-w-5xl rounded-full border border-white/20 bg-white/80 px-6 py-3 shadow-lg shadow-slate-200/20 backdrop-blur-xl"
            : "top-0 w-full rounded-none bg-transparent px-6 py-5",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex h-full w-full items-center justify-between">
          {/* Logo */}
          <a className="group flex shrink-0 items-center gap-3" href="/">
            <img
              alt="Legali"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                scrolled ? "h-8" : "h-10"
              )}
              src={logoSrc}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigationItems.litigation101 && (
              <NavDropdown items={navigationItems.litigation101} label="Litigation 101" />
            )}
            {navigationItems.solutions && (
              <NavDropdown items={navigationItems.solutions} label="Solutions" />
            )}
            {navLinks.map((link) => (
              <a
                className="font-medium text-slate-700 text-sm transition-colors hover:text-[#4eaed0]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button
              className="rounded-xl font-medium text-slate-700 hover:bg-[#4eaed0]/5 hover:text-[#4eaed0]"
              variant="ghost"
            >
              Log In
            </Button>
            <Button
              className="group relative overflow-hidden rounded-xl bg-[length:200%_100%] bg-gradient-to-r from-[#14213d] via-[#1a2a4d] to-[#14213d] px-6 py-2.5 font-medium text-white shadow-lg shadow-slate-900/20 transition-all duration-500 hover:bg-right"
              onClick={onGetStarted}
            >
              <span className="relative z-10 flex items-center gap-2">
                Try Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="slide-in-from-top-4 absolute top-full right-0 left-0 mt-4 animate-in overflow-hidden rounded-3xl border border-slate-100 bg-white/95 shadow-2xl backdrop-blur-2xl duration-300 lg:hidden">
            <nav className="flex flex-col gap-4 p-6">
              <a className="py-2 font-medium text-base text-slate-800" href="#">
                Litigation 101
              </a>
              <a className="py-2 font-medium text-base text-slate-800" href="#">
                Solutions
              </a>
              {navLinks.map((link) => (
                <a
                  className="py-2 font-medium text-base text-slate-800"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-slate-100 border-t pt-4">
                <Button className="w-full rounded-xl border-slate-200" variant="outline">
                  Log In
                </Button>
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-[#14213d] to-[#1a2a4d] text-white"
                  onClick={onGetStarted}
                >
                  Try Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
  }
);

LandingHeader.displayName = "LandingHeader";

export { LandingHeader };
