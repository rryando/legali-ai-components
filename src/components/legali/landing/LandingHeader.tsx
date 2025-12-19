import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/button"
import { NavDropdown, type NavDropdownItem } from "../composite/NavDropdown"

export interface LandingHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image source */
  logoSrc?: string
  /** Callback when Get Started is clicked */
  onGetStarted?: () => void
  /** Navigation dropdown items */
  navigationItems?: {
    litigation101?: NavDropdownItem[]
    solutions?: NavDropdownItem[]
  }
  /** Simple navigation links */
  navLinks?: { label: string; href: string }[]
}

const defaultNavItems = {
  litigation101: [
    { label: "Getting Started", href: "#", description: "Begin your legal journey" },
    { label: "Legal Basics", href: "#", description: "Understand fundamental concepts" },
    { label: "Court Procedures", href: "#", description: "Navigate the court system" },
  ],
  solutions: [
    { label: "For Individuals", href: "#", description: "Personal legal assistance" },
    { label: "For Lawyers", href: "#", description: "Streamline your practice" },
    { label: "For Enterprises", href: "#", description: "Scale legal operations" },
  ],
}

const defaultNavLinks = [
  { label: "Integration", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
]

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
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      <header
        ref={ref}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "top-4 w-[90%] max-w-5xl rounded-full bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 border border-white/20 px-6 py-3"
            : "top-0 w-full rounded-none bg-transparent px-6 py-5",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logoSrc}
              alt="Legali"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                scrolled ? "h-8" : "h-10"
              )}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.litigation101 && (
              <NavDropdown label="Litigation 101" items={navigationItems.litigation101} />
            )}
            {navigationItems.solutions && (
              <NavDropdown label="Solutions" items={navigationItems.solutions} />
            )}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#4eaed0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              variant="ghost"
              className="text-slate-700 hover:text-[#4eaed0] hover:bg-[#4eaed0]/5 font-medium rounded-xl"
            >
              Log In
            </Button>
            <Button
              onClick={onGetStarted}
              className="relative overflow-hidden bg-gradient-to-r from-[#14213d] via-[#1a2a4d] to-[#14213d] bg-[length:200%_100%] hover:bg-right text-white rounded-xl px-6 py-2.5 font-medium shadow-lg shadow-slate-900/20 transition-all duration-500 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col p-6 gap-4">
              <a href="#" className="text-base font-medium text-slate-800 py-2">
                Litigation 101
              </a>
              <a href="#" className="text-base font-medium text-slate-800 py-2">
                Solutions
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-slate-800 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-slate-100">
                <Button variant="outline" className="w-full rounded-xl border-slate-200">
                  Log In
                </Button>
                <Button
                  onClick={onGetStarted}
                  className="w-full bg-gradient-to-r from-[#14213d] to-[#1a2a4d] text-white rounded-xl"
                >
                  Try Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    )
  }
)

LandingHeader.displayName = "LandingHeader"

export { LandingHeader }
