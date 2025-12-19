import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  Clock,
  DollarSign,
  FileText,
  Gavel,
  HelpCircle,
  Menu,
  Play,
  Scale,
  Search,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import {
  useCountUp,
  useCurrentSection,
  useIdleDetection,
  useInView,
  useParallax,
  useScrollProgress,
  useTypingAnimation,
} from "../hooks/useAnimations";
import {
  LegaliMascot,
  MascotMotion,
  type MascotMotionType,
} from "../mascot/LegaliMascot";

// ============================================================================
// Asset URLs
// ============================================================================

const ASSETS = {
  logo: "/assets/landing/logo-legali.png",
  trustLogos: [
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
  ],
  toolIcons: {
    caseBuilder: "/assets/landing/tool-icon-case-builder.png",
    fileOrg: "/assets/landing/tool-icon-file-org.png",
    lawyers: "/assets/landing/tool-icon-lawyers.png",
    investing: "/assets/landing/tool-icon-investing.png",
  },
};

// ============================================================================
// Types
// ============================================================================

export interface LandingPageV2Props
  extends React.HTMLAttributes<HTMLDivElement> {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

// ============================================================================
// Animated Gradient Background with Parallax
// ============================================================================

const AnimatedBackground = ({
  enableParallax = false,
}: {
  enableParallax?: boolean;
}) => {
  const offset = useParallax(0.3);
  const transform = enableParallax ? `translateY(${offset}px)` : undefined;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 left-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-gradient-to-br from-[#667eea]/20 via-[#764ba2]/10 to-transparent blur-3xl"
        style={{ animationDuration: "8s", transform }}
      />
      <div
        className="absolute top-1/3 right-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-bl from-[#4eaed0]/25 via-[#06b6d4]/15 to-transparent blur-3xl"
        style={{ animationDuration: "6s", animationDelay: "2s", transform }}
      />
      <div
        className="absolute bottom-0 left-0 h-[700px] w-[700px] animate-pulse rounded-full bg-gradient-to-tr from-[#f472b6]/15 via-[#ec4899]/10 to-transparent blur-3xl"
        style={{ animationDuration: "10s", animationDelay: "1s", transform }}
      />
      <div
        className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-[#a78bfa]/15 to-transparent blur-3xl"
        style={{ animationDuration: "7s", animationDelay: "3s", transform }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

// ============================================================================
// Scroll Progress Indicator
// ============================================================================

const ScrollProgressIndicator = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-1/2 left-4 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex">
      <div className="h-32 w-1 overflow-hidden rounded-full bg-slate-200">
        <div
          className="w-full rounded-full bg-gradient-to-b from-[#4eaed0] to-[#764ba2] transition-all duration-150"
          style={{ height: `${progress}%` }}
        />
      </div>
      <span className="font-medium text-slate-400 text-xs">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

// ============================================================================
// Floating Section-Aware Mascot
// ============================================================================

const FloatingMascot = () => {
  const currentSection = useCurrentSection([
    "hero",
    "problem",
    "features",
    "how-it-works",
    "testimonials",
    "faq",
    "cta",
  ]);
  const isIdle = useIdleDetection(5000);
  const [clickCount, setClickCount] = React.useState(0);
  const [showEasterEgg, setShowEasterEgg] = React.useState(false);

  const getMascotMotion = (): MascotMotionType => {
    if (showEasterEgg) return MascotMotion.CELEBRATE;
    if (isIdle) return MascotMotion.WAVING;

    switch (currentSection) {
      case "hero":
        return MascotMotion.WAVING;
      case "problem":
        return MascotMotion.THINKING;
      case "features":
        return MascotMotion.LAPTOP;
      case "how-it-works":
        return MascotMotion.IDEA;
      case "testimonials":
        return MascotMotion.THUMBSUP;
      case "faq":
        return MascotMotion.READING;
      case "cta":
        return MascotMotion.CELEBRATE;
      default:
        return MascotMotion.IDLE;
    }
  };

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 3000);
    }
  };

  return (
    <div
      className="fixed right-6 bottom-6 z-40 hidden cursor-pointer transition-transform duration-300 hover:scale-110 lg:block"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4eaed0]/30 to-[#764ba2]/30 blur-xl" />
        <LegaliMascot
          className="relative z-10 drop-shadow-lg"
          height={80}
          motion={getMascotMotion()}
          width={80}
        />
        {showEasterEgg && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-white px-3 py-1 font-bold text-[#4eaed0] text-xs shadow-lg">
            🎉 Yay!
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// Live Ticker Notifications
// ============================================================================

const LiveTicker = () => {
  const [currentNotification, setCurrentNotification] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  const notifications = [
    { name: "Sarah M.", location: "Colorado", action: "analyzed a contract" },
    { name: "David C.", location: "New York", action: "found a lawyer" },
    { name: "Marcus J.", location: "Texas", action: "built their case" },
    { name: "Emily R.", location: "California", action: "analyzed a lease" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [notifications.length]);

  const notification = notifications[currentNotification];

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-40 hidden transition-all duration-500 md:block",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <GlassCard
        className="flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg"
        intensity="high"
      >
        <Bell className="h-4 w-4 text-[#4eaed0]" />
        <p className="text-slate-700 text-sm">
          <span className="font-semibold">{notification.name}</span>
          <span className="text-slate-500"> from {notification.location}</span>
          <span className="text-slate-600"> just {notification.action}</span>
        </p>
      </GlassCard>
    </div>
  );
};

// ============================================================================
// Animated Counter Component
// ============================================================================

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  label,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) => {
  const { ref, isInView } = useInView();
  const { count, start } = useCountUp(target, 2000, true);

  React.useEffect(() => {
    if (isInView) start();
  }, [isInView, start]);

  return (
    <GlassCard
      className="group rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1"
      intensity="medium"
      ref={ref}
    >
      <div className="mb-1 font-bold text-3xl text-slate-900 transition-transform group-hover:scale-105 md:text-4xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-slate-600 text-sm">{label}</div>
    </GlassCard>
  );
};

// ============================================================================
// Navigation Components
// ============================================================================

const NavDropdown = ({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string; description?: string }[];
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="group flex items-center gap-1.5 font-medium text-slate-700 text-sm outline-none transition-colors hover:text-[#4eaed0]">
      {label}
      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-[280px] rounded-2xl border border-slate-200/50 bg-white/95 p-3 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
      {items.map((item) => (
        <DropdownMenuItem asChild key={item.label}>
          <a
            className="group flex flex-col gap-1 rounded-xl px-4 py-3 transition-all hover:bg-gradient-to-r hover:from-[#4eaed0]/5 hover:to-transparent"
            href={item.href}
          >
            <span className="font-medium text-slate-800 transition-colors group-hover:text-[#4eaed0]">
              {item.label}
            </span>
            {item.description && (
              <span className="text-slate-500 text-xs">{item.description}</span>
            )}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const HeaderV2 = ({ onGetStarted }: { onGetStarted?: () => void }) => {
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
          : "top-0 w-full rounded-none bg-transparent px-6 py-5"
      )}
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
            src={ASSETS.logo}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavDropdown
            items={[
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
            ]}
            label="Litigation 101"
          />
          <NavDropdown
            items={[
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
            ]}
            label="Solutions"
          />
          <a
            className="font-medium text-slate-700 text-sm transition-colors hover:text-[#4eaed0]"
            href="#"
          >
            Integration
          </a>
          <a
            className="font-medium text-slate-700 text-sm transition-colors hover:text-[#4eaed0]"
            href="#"
          >
            Resources
          </a>
          <a
            className="font-medium text-slate-700 text-sm transition-colors hover:text-[#4eaed0]"
            href="#"
          >
            Pricing
          </a>
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
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
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
            <a className="py-2 font-medium text-base text-slate-800" href="#">
              Integration
            </a>
            <a className="py-2 font-medium text-base text-slate-800" href="#">
              Resources
            </a>
            <a className="py-2 font-medium text-base text-slate-800" href="#">
              Pricing
            </a>
            <div className="mt-2 flex flex-col gap-3 border-slate-100 border-t pt-4">
              <Button
                className="w-full rounded-xl border-slate-200"
                variant="outline"
              >
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
};

// ============================================================================
// Hero Section with Mascot
// ============================================================================

const HeroSectionV2 = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(
    MascotMotion.WAVING
  );
  const [inputValue, setInputValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  // Typing animation for placeholder
  const typingText = useTypingAnimation(
    [
      "I received an eviction notice...",
      "My employer didn't pay overtime...",
      "I need to review a contract...",
      "How do I file a small claims case?",
      "What are my rights as a tenant?",
    ],
    60,
    30,
    2500
  );

  // Initial waving, then settle to idle
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!(isFocused || inputValue)) {
        setMascotMotion(MascotMotion.IDLE);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isFocused, inputValue]);

  const handleInputFocus = () => {
    setIsFocused(true);
    setMascotMotion(MascotMotion.THINKING);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    if (!inputValue) {
      setMascotMotion(MascotMotion.IDLE);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 20) {
      setMascotMotion(MascotMotion.READING);
    } else if (value.length > 0) {
      setMascotMotion(MascotMotion.THINKING);
    }
  };

  const handleAnalyzeClick = () => {
    setMascotMotion(MascotMotion.CELEBRATE);
    setTimeout(() => {
      onGetStarted?.();
    }, 500);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20"
      id="hero"
    >
      <AnimatedBackground enableParallax />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Badge */}
            <div className="fade-in slide-in-from-bottom mb-8 inline-flex animate-in items-center gap-2 rounded-full border border-[#4eaed0]/20 bg-gradient-to-r from-[#4eaed0]/10 to-[#667eea]/10 px-4 py-2 duration-700">
              <Sparkles className="h-4 w-4 text-[#4eaed0]" />
              <span className="font-medium text-slate-700 text-sm">
                AI-Powered Legal Intelligence
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in slide-in-from-bottom mb-6 animate-in font-bold text-4xl text-slate-900 leading-[1.1] tracking-tight delay-100 duration-700 md:text-5xl lg:text-6xl xl:text-7xl">
              Legal guidance
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                  reimagined
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  fill="none"
                  viewBox="0 0 300 12"
                >
                  <path
                    d="M2 10C50 2 250 2 298 10"
                    stroke="url(#underline-gradient)"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id="underline-gradient"
                      x1="0"
                      x2="300"
                      y1="0"
                      y2="0"
                    >
                      <stop stopColor="#4eaed0" />
                      <stop offset="0.5" stopColor="#667eea" />
                      <stop offset="1" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="fade-in slide-in-from-bottom mx-auto mb-10 max-w-xl animate-in text-lg text-slate-600 leading-relaxed delay-200 duration-700 md:text-xl lg:mx-0">
              Navigate the legal system with confidence. Get instant AI-powered
              analysis, build your case, and connect with qualified
              attorneys—all in one platform.
            </p>

            {/* Search Input */}
            <div className="fade-in slide-in-from-bottom mx-auto mb-8 max-w-xl animate-in delay-300 duration-700 lg:mx-0">
              <GlassCard
                className="rounded-2xl border-white/60 p-2 shadow-2xl shadow-slate-200/50 transition-shadow duration-500 hover:shadow-3xl"
                intensity="high"
              >
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      className="w-full bg-transparent py-4 pr-4 pl-12 text-base text-slate-800 outline-none placeholder:text-slate-400"
                      onBlur={handleInputBlur}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      placeholder={
                        inputValue
                          ? ""
                          : typingText || "Describe your legal situation..."
                      }
                      type="text"
                      value={inputValue}
                    />
                  </div>
                  <Button
                    className="h-auto rounded-xl bg-[length:200%_100%] bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-500 hover:bg-right"
                    onClick={handleAnalyzeClick}
                  >
                    Analyze
                  </Button>
                </div>
              </GlassCard>
            </div>

            {/* Quick Actions */}
            <div className="fade-in slide-in-from-bottom flex animate-in flex-wrap justify-center gap-3 delay-400 duration-700 lg:justify-start">
              {[
                {
                  icon: <AlertTriangle className="h-4 w-4" />,
                  label: "Red Flag Analysis",
                },
                {
                  icon: <FileText className="h-4 w-4" />,
                  label: "Document Review",
                },
                { icon: <Scale className="h-4 w-4" />, label: "Case Builder" },
              ].map((item) => (
                <button
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/60 px-4 py-2.5 font-medium text-slate-700 text-sm backdrop-blur-sm transition-all duration-300 hover:border-[#4eaed0]/30 hover:bg-white hover:text-[#4eaed0] hover:shadow-lg hover:shadow-slate-200/50"
                  key={item.label}
                >
                  <span className="text-[#4eaed0] transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Mascot */}
          <div className="fade-in zoom-in relative order-1 flex animate-in justify-center duration-1000 lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Glow effect behind mascot */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 blur-3xl" />

              {/* Floating elements around mascot */}
              <div
                className="absolute -top-8 -left-8 flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "3s" }}
              >
                <Scale className="h-8 w-8 text-[#4eaed0]" />
              </div>
              <div
                className="absolute -bottom-4 -left-12 flex h-14 w-14 animate-bounce items-center justify-center rounded-2xl bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
              >
                <FileText className="h-7 w-7 text-[#667eea]" />
              </div>
              <div
                className="absolute top-1/4 -right-8 flex h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <Sparkles className="h-6 w-6 text-[#764ba2]" />
              </div>
              <div
                className="absolute -right-6 bottom-1/3 flex h-10 w-10 animate-bounce items-center justify-center rounded-lg bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "3.2s", animationDelay: "1.5s" }}
              >
                <Gavel className="h-5 w-5 text-[#4eaed0]" />
              </div>
              <div
                className="absolute top-1/2 -left-6 flex h-10 w-10 animate-bounce items-center justify-center rounded-lg bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "4.5s", animationDelay: "0.8s" }}
              >
                <BookOpen className="h-5 w-5 text-[#f472b6]" />
              </div>

              {/* Mascot */}
              <LegaliMascot
                className="relative z-10 drop-shadow-2xl"
                height={400}
                motion={mascotMotion}
                width={400}
              />
            </div>
          </div>
        </div>

        {/* Stats Row with Animated Counters */}
        <div className="fade-in slide-in-from-bottom mt-20 grid animate-in grid-cols-2 gap-6 delay-500 duration-700 md:grid-cols-4">
          <AnimatedCounter label="Cases Analyzed" suffix="K+" target={50} />
          <AnimatedCounter label="Accuracy Rate" suffix="%" target={98} />
          <AnimatedCounter label="Partner Attorneys" suffix="+" target={500} />
          <AnimatedCounter
            label="User Rating"
            prefix=""
            suffix=""
            target={49}
          />
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Trust Logos with Marquee Effect
// ============================================================================

const TrustLogosV2 = () => (
  <section className="overflow-hidden bg-gradient-to-b from-white to-slate-50/50 px-6 py-16">
    <div className="mx-auto max-w-7xl">
      <p className="mb-12 text-center font-medium text-slate-500 text-sm uppercase tracking-wider">
        Trusted by leading legal organizations
      </p>

      {/* Marquee container */}
      <div className="relative">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 transition-opacity duration-500 hover:opacity-100">
          {ASSETS.trustLogos.map((logo, index) => (
            <img
              alt={logo.alt}
              className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-12"
              key={index}
              src={logo.src}
            />
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  </section>
);

// ============================================================================
// Problem Section with Mascot
// ============================================================================

const ProblemSectionV2 = () => {
  const problems = [
    {
      stat: "15M",
      title: "Americans navigate courts alone",
      description:
        "Every year, millions face the legal system without guidance, overwhelmed by complex procedures.",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      stat: "75%",
      title: "Civil cases self-represented",
      description:
        "Three-quarters of civil cases involve people who can't afford traditional legal representation.",
      icon: <HelpCircle className="h-6 w-6" />,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      stat: "3%",
      title: "Win rate without help",
      description:
        "Without proper guidance, people often accept unfair settlements or lose winnable cases.",
      icon: <Scale className="h-6 w-6" />,
      gradient: "from-red-500 to-rose-500",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24" id="problem">
      <AnimatedBackground />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-4 py-2 font-medium text-rose-600 text-sm">
            <AlertTriangle className="h-4 w-4" />
            The Justice Gap
          </div>
          <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
            The legal system wasn't built
            <br />
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              for everyone
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Millions of people are denied justice every year simply because they
            can't afford—or access—proper legal help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <GlassCard
              className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
              intensity="high"
              key={problem.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-br ${problem.gradient} rounded-tr-3xl rounded-bl-[100px] opacity-10 transition-opacity group-hover:opacity-20`}
              />

              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.gradient} mb-6 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {problem.icon}
              </div>

              <div className="mb-3 font-bold text-5xl text-slate-900 tracking-tight">
                {problem.stat}
              </div>

              <h3 className="mb-3 font-bold text-slate-800 text-xl">
                {problem.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Mascot with speech bubble */}
        <div className="mt-16 flex items-end justify-center gap-4">
          <LegaliMascot height={200} motion={MascotMotion.IDEA} width={200} />
          <GlassCard
            className="relative max-w-md rounded-2xl p-6"
            intensity="high"
          >
            {/* Speech bubble tail */}
            <div className="absolute bottom-4 left-0 h-4 w-4 -translate-x-2 rotate-45 bg-white/80" />
            <p className="relative z-10 font-medium text-slate-700">
              "That's why we built Legali—to level the playing field and give
              everyone
              <span className="font-bold text-[#4eaed0]">
                {" "}
                equal access to justice
              </span>
              ."
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Features Section
// ============================================================================

const FeaturesSectionV2 = () => {
  const [activeFeature, setActiveFeature] = React.useState(0);
  const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(
    MascotMotion.LAPTOP
  );

  const features = [
    {
      id: 0,
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Red Flag Analysis",
      subtitle: "Instant Risk Assessment",
      description:
        "Upload any document or describe your situation. Our AI instantly identifies legal risks, critical deadlines, and key issues in plain language.",
      mascotMotion: MascotMotion.READING,
      gradient: "from-rose-500 to-pink-500",
      highlights: [
        "Document scanning",
        "Deadline detection",
        "Risk scoring",
        "Plain language explanations",
      ],
    },
    {
      id: 1,
      icon: <Building2 className="h-6 w-6" />,
      title: "Case Builder",
      subtitle: "Build Your Legal Strategy",
      description:
        "Transform your story into a court-ready case with organized evidence, timelines, legal arguments, and attorney-ready dossiers.",
      mascotMotion: MascotMotion.WRITING,
      gradient: "from-[#4eaed0] to-[#667eea]",
      highlights: [
        "Evidence organization",
        "Timeline creation",
        "Legal drafting",
        "Filing assistance",
      ],
    },
    {
      id: 2,
      icon: <Users className="h-6 w-6" />,
      title: "Lawyer Marketplace",
      subtitle: "Find Your Perfect Match",
      description:
        "Browse verified attorneys by expertise, share your case instantly, get upfront pricing, and communicate directly through our platform.",
      mascotMotion: MascotMotion.SPEAKING,
      gradient: "from-violet-500 to-purple-500",
      highlights: [
        "Verified attorneys",
        "Transparent pricing",
        "Instant sharing",
        "Direct messaging",
      ],
    },
    {
      id: 3,
      icon: <DollarSign className="h-6 w-6" />,
      title: "Litigation Funding",
      subtitle: "Fund Your Fight",
      description:
        "Launch transparent campaigns for funding or invest in meritorious cases. Track progress and milestones in real-time.",
      mascotMotion: MascotMotion.CELEBRATE,
      gradient: "from-emerald-500 to-teal-500",
      highlights: [
        "Transparent campaigns",
        "Milestone tracking",
        "Investor matching",
        "Real-time updates",
      ],
    },
  ];

  React.useEffect(() => {
    setMascotMotion(features[activeFeature].mascotMotion);
  }, [activeFeature]);

  return (
    <section
      className="relative overflow-hidden bg-slate-50/50 px-6 py-24"
      id="features"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4eaed0]/20 bg-[#4eaed0]/10 px-4 py-2 font-medium text-[#4eaed0] text-sm">
            <Sparkles className="h-4 w-4" />
            Complete Legal Toolkit
          </div>
          <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
            Everything you need,
            <br />
            <span className="bg-gradient-to-r from-[#4eaed0] to-[#667eea] bg-clip-text text-transparent">
              one platform
            </span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                className={cn(
                  "w-full rounded-2xl p-6 text-left transition-all duration-500",
                  activeFeature === index
                    ? "border border-slate-100 bg-white shadow-slate-200/50 shadow-xl"
                    : "border border-transparent bg-transparent hover:bg-white/50"
                )}
                key={feature.id}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                      activeFeature === index
                        ? `bg-gradient-to-br ${feature.gradient} text-white shadow-lg`
                        : "bg-slate-100 text-slate-500"
                    )}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h3
                        className={cn(
                          "font-bold text-lg transition-colors",
                          activeFeature === index
                            ? "text-slate-900"
                            : "text-slate-700"
                        )}
                      >
                        {feature.title}
                      </h3>
                      {activeFeature === index && (
                        <ArrowRight className="slide-in-from-left h-4 w-4 animate-in text-[#4eaed0]" />
                      )}
                    </div>
                    <p
                      className={cn(
                        "text-sm transition-colors",
                        activeFeature === index
                          ? "text-slate-600"
                          : "text-slate-500"
                      )}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {activeFeature === index && (
                  <div className="fade-in slide-in-from-top mt-4 animate-in border-slate-100 border-t pt-4 duration-300">
                    <p className="mb-4 text-slate-600">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight) => (
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium text-xs",
                            "bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700"
                          )}
                          key={highlight}
                        >
                          <Check className="h-3 w-3 text-emerald-500" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Mascot Display */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} scale-110 rounded-full opacity-20 blur-3xl transition-all duration-500`}
              />

              {/* Feature card behind mascot */}
              <GlassCard
                className="absolute inset-x-0 bottom-0 -z-10 translate-y-8 transform rounded-2xl p-6"
                intensity="high"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-xl bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center text-white`}
                  >
                    {features[activeFeature].icon}
                  </div>
                  <span className="font-bold text-slate-800">
                    {features[activeFeature].title}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full bg-gradient-to-r ${features[activeFeature].gradient} rounded-full transition-all duration-500`}
                    style={{ width: "75%" }}
                  />
                </div>
              </GlassCard>

              <LegaliMascot
                className="relative z-10"
                height={350}
                motion={mascotMotion}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// How It Works Section
// ============================================================================

const HowItWorksSectionV2 = () => {
  const steps = [
    {
      number: "01",
      title: "Describe Your Situation",
      description:
        "Upload documents or tell us about your legal matter. Our AI understands context and complexity.",
      icon: <Search className="h-6 w-6" />,
      gradient: "from-[#4eaed0] to-[#667eea]",
    },
    {
      number: "02",
      title: "Get Instant Analysis",
      description:
        "Receive a comprehensive risk assessment in plain language with actionable recommendations.",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-[#667eea] to-[#764ba2]",
    },
    {
      number: "03",
      title: "Choose Your Path",
      description:
        "Handle it yourself with our tools, connect with an attorney, or let us file on your behalf.",
      icon: <ArrowUpRight className="h-6 w-6" />,
      gradient: "from-[#764ba2] to-[#f472b6]",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24" id="how-it-works">
      <AnimatedBackground />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
            Three simple steps to
            <br />
            <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              legal clarity
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div className="relative" key={step.number}>
                <GlassCard
                  className="group rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2"
                  intensity="high"
                >
                  {/* Step number */}
                  <div
                    className={`relative z-10 mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center font-bold text-2xl text-white shadow-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    {step.icon}
                  </div>

                  <div
                    className={`bg-gradient-to-r bg-clip-text font-bold text-sm text-transparent ${step.gradient} mb-2`}
                  >
                    Step {step.number}
                  </div>

                  <h3 className="mb-3 font-bold text-slate-900 text-xl">
                    {step.title}
                  </h3>

                  <p className="text-slate-600">{step.description}</p>
                </GlassCard>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg md:flex">
                    <ArrowRight className="h-4 w-4 text-[#667eea]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Testimonials Section
// ============================================================================

const TestimonialsSectionV2 = () => {
  const testimonials = [
    {
      quote:
        "Legali helped me understand my contract dispute in minutes. I felt empowered to negotiate a fair settlement.",
      author: "Sarah M.",
      role: "Small Business Owner",
      avatar: "SM",
      rating: 5,
    },
    {
      quote:
        "As a solo practitioner, Legali has transformed how I handle initial case assessments. It's like having a research team.",
      author: "David Chen, Esq.",
      role: "Attorney",
      avatar: "DC",
      rating: 5,
    },
    {
      quote:
        "I couldn't afford a lawyer for my landlord dispute, but Legali walked me through every step. I won my case!",
      author: "Marcus J.",
      role: "Teacher",
      avatar: "MJ",
      rating: 5,
    },
  ];

  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-slate-50/50 to-white px-6 py-24"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-4 py-2 font-medium text-amber-600 text-sm">
            <Star className="h-4 w-4 fill-current" />
            Customer Stories
          </div>
          <h2 className="font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
            Loved by thousands
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <GlassCard
              className="rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
              intensity="high"
              key={testimonial.author}
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    className="h-5 w-5 fill-current text-amber-400"
                    key={i}
                  />
                ))}
              </div>

              <blockquote className="mb-6 text-lg text-slate-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4eaed0] to-[#667eea] font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FAQ Section
// ============================================================================

const FAQSectionV2 = () => {
  const faqs = [
    {
      question: "Is Legali a law firm?",
      answer:
        "No, Legali is an AI-powered legal intelligence platform. We provide information, tools, and connections to lawyers, but we do not provide legal advice or representation directly.",
    },
    {
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI is trained on millions of legal documents and case laws. While highly accurate for identifying risks and issues, it should be used as a starting point and verified by a qualified attorney for important decisions.",
    },
    {
      question: "Can I use Legali for any type of case?",
      answer:
        "Legali currently specializes in civil litigation, contract disputes, employment law, and personal injury. We are constantly expanding our capabilities to cover more practice areas.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer a free tier for basic analysis and document organization. Premium features like advanced case building and lawyer matching are available starting at $29/month.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption, are SOC 2 Type II compliant, and never share your data with third parties. Your legal information stays completely private.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24" id="faq">
      <AnimatedBackground />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about Legali
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
              intensity="high"
              key={index}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                  <h3 className="pr-8 font-semibold text-lg text-slate-900">
                    {faq.question}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4eaed0]/10 text-[#4eaed0] transition-all duration-300 group-open:rotate-180 group-open:bg-[#4eaed0] group-open:text-white">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="fade-in slide-in-from-top-2 animate-in px-6 pb-6 text-slate-600 leading-relaxed duration-300">
                  {faq.answer}
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CTA Section
// ============================================================================

const CTASectionV2 = ({ onGetStarted }: { onGetStarted?: () => void }) => (
  <section className="relative overflow-hidden px-6 py-32" id="cta">
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

    {/* Animated gradient orbs */}
    <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4eaed0]/30 to-transparent blur-3xl" />
    <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#764ba2]/30 to-transparent blur-3xl" />

    <div className="relative mx-auto max-w-4xl text-center">
      {/* Mascot */}
      <div className="mb-12">
        <LegaliMascot
          className="mx-auto"
          height={200}
          motion={MascotMotion.CELEBRATE}
          width={200}
        />
      </div>

      <h2 className="mb-6 font-bold text-4xl text-white leading-tight tracking-tight md:text-5xl lg:text-6xl">
        Ready to take control of your
        <br />
        <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          legal journey?
        </span>
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-slate-300 text-xl">
        Join thousands of users who are navigating the legal system with
        confidence. Start free today—no credit card required.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          className="group h-14 rounded-2xl bg-[length:200%_100%] bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] px-10 font-semibold text-lg text-white shadow-2xl shadow-purple-500/30 transition-all duration-500 hover:bg-right"
          onClick={onGetStarted}
        >
          <span className="flex items-center gap-2">
            Get Started Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>

        <Button
          className="group h-14 rounded-2xl px-8 font-medium text-lg text-white/80 transition-all hover:bg-white/10 hover:text-white"
          variant="ghost"
        >
          <span className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Watch Demo
          </span>
        </Button>
      </div>

      {/* Trust badges */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <span className="text-sm">SOC 2 Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <span className="text-sm">24/7 Support</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          <span className="text-sm">4.9/5 Rating</span>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// Footer
// ============================================================================

const FooterV2 = () => (
  <footer className="bg-[#0f172a] px-6 pt-20 pb-8 text-slate-400">
    <div className="mx-auto max-w-7xl">
      {/* Main footer content */}
      <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-5">
        {/* Brand column */}
        <div className="col-span-2">
          <img
            alt="Legali"
            className="mb-6 h-10 opacity-80 brightness-0 invert"
            src={ASSETS.logo}
          />
          <p className="mb-6 max-w-xs text-slate-500 text-sm">
            Making legal guidance accessible to everyone through AI-powered
            intelligence.
          </p>
          <div className="flex gap-3">
            {["twitter", "linkedin", "facebook"].map((social) => (
              <a
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition-colors hover:bg-[#4eaed0]"
                href="#"
                key={social}
              >
                <span className="sr-only">{social}</span>
                <div className="h-5 w-5 rounded-sm bg-current" />
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Product</h3>
          <ul className="space-y-3 text-sm">
            {["Features", "Pricing", "Case Studies", "API"].map((link) => (
              <li key={link}>
                <a className="transition-colors hover:text-[#4eaed0]" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Company</h3>
          <ul className="space-y-3 text-sm">
            {["About", "Blog", "Careers", "Press"].map((link) => (
              <li key={link}>
                <a className="transition-colors hover:text-[#4eaed0]" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Legal</h3>
          <ul className="space-y-3 text-sm">
            {["Privacy", "Terms", "Security", "Cookies"].map((link) => (
              <li key={link}>
                <a className="transition-colors hover:text-[#4eaed0]" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-slate-800 border-t pt-8 md:flex-row">
        <p className="text-slate-500 text-sm">
          © 2024 Legali AI. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">
          Legali is not a law firm and does not provide legal advice.
        </p>
      </div>
    </div>
  </footer>
);

// ============================================================================
// Main Component
// ============================================================================

const LandingPageV2 = React.forwardRef<HTMLDivElement, LandingPageV2Props>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => {
    return (
      <div
        className={cn("min-h-screen bg-white font-sans antialiased", className)}
        ref={ref}
        {...props}
      >
        {/* Global Interactive Components */}
        <ScrollProgressIndicator />
        <FloatingMascot />
        <LiveTicker />

        {/* Page Sections */}
        <HeaderV2 onGetStarted={onGetStarted} />
        <HeroSectionV2 onGetStarted={onGetStarted} />
        <TrustLogosV2 />
        <ProblemSectionV2 />
        <FeaturesSectionV2 />
        <HowItWorksSectionV2 />
        <TestimonialsSectionV2 />
        <FAQSectionV2 />
        <CTASectionV2 onGetStarted={onGetStarted} />
        <FooterV2 />
      </div>
    );
  }
);

LandingPageV2.displayName = "LandingPageV2";

export { LandingPageV2 };
