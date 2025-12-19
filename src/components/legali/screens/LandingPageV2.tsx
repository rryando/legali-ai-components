import * as React from "react"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  Search,
  ArrowRight,
  Sparkles,
  Check,
  AlertTriangle,
  FileText,
  Building2,
  Users,
  DollarSign,
  Scale,
  HelpCircle,
  Menu,
  X,
  Play,
  Shield,
  Zap,
  Clock,
  Star,
  ArrowUpRight,
  Gavel,
  BookOpen,
  Bell,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Button } from "@/components/button"
import { GlassCard } from "../atomic/GlassCard"
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot/LegaliMascot"
import {
  useTypingAnimation,
  useCountUp,
  useInView,
  useScrollProgress,
  useCurrentSection,
  useIdleDetection,
  useParallax,
} from "../hooks/useAnimations"

// ============================================================================
// Asset URLs
// ============================================================================

const ASSETS = {
  logo: "/assets/landing/logo-legali.png",
  trustLogos: [
    { src: "/assets/landing/trust-logo-1.png", alt: "Partner Logo", width: 57, height: 60 },
    { src: "/assets/landing/trust-logo-2.png", alt: "Colorado Law", width: 259, height: 60 },
    { src: "/assets/landing/trust-logo-3.png", alt: "Partner Logo", width: 87, height: 40 },
    { src: "/assets/landing/trust-logo-4.png", alt: "Partner Logo", width: 60, height: 60 },
    { src: "/assets/landing/trust-logo-5.png", alt: "Partner Logo", width: 122, height: 60 },
    { src: "/assets/landing/trust-logo-6.png", alt: "Partner Logo", width: 275, height: 28 },
    { src: "/assets/landing/trust-logo-7.png", alt: "Access to Justice Network", width: 81, height: 32 },
    { src: "/assets/landing/trust-logo-8.png", alt: "IAALS", width: 318, height: 28 },
  ],
  toolIcons: {
    caseBuilder: "/assets/landing/tool-icon-case-builder.png",
    fileOrg: "/assets/landing/tool-icon-file-org.png",
    lawyers: "/assets/landing/tool-icon-lawyers.png",
    investing: "/assets/landing/tool-icon-investing.png",
  },
}

// ============================================================================
// Types
// ============================================================================

export interface LandingPageV2Props extends React.HTMLAttributes<HTMLDivElement> {
  onGetStarted?: () => void
  onWatchDemo?: () => void
}

// ============================================================================
// Animated Gradient Background with Parallax
// ============================================================================

const AnimatedBackground = ({ enableParallax = false }: { enableParallax?: boolean }) => {
  const offset = useParallax(0.3)
  const transform = enableParallax ? `translateY(${offset}px)` : undefined

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#667eea]/20 via-[#764ba2]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', transform }} />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#4eaed0]/25 via-[#06b6d4]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s', transform }} />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#f472b6]/15 via-[#ec4899]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s', transform }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#a78bfa]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s', transform }} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
    </div>
  )
}

// ============================================================================
// Scroll Progress Indicator
// ============================================================================

const ScrollProgressIndicator = () => {
  const progress = useScrollProgress()
  
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2">
      <div className="w-1 h-32 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-[#4eaed0] to-[#764ba2] rounded-full transition-all duration-150"
          style={{ height: `${progress}%` }}
        />
      </div>
      <span className="text-xs text-slate-400 font-medium">{Math.round(progress)}%</span>
    </div>
  )
}

// ============================================================================
// Floating Section-Aware Mascot
// ============================================================================

const FloatingMascot = () => {
  const currentSection = useCurrentSection(['hero', 'problem', 'features', 'how-it-works', 'testimonials', 'faq', 'cta'])
  const isIdle = useIdleDetection(5000)
  const [clickCount, setClickCount] = React.useState(0)
  const [showEasterEgg, setShowEasterEgg] = React.useState(false)

  const getMascotMotion = (): MascotMotionType => {
    if (showEasterEgg) return MascotMotion.CELEBRATE
    if (isIdle) return MascotMotion.WAVING
    
    switch (currentSection) {
      case 'hero': return MascotMotion.WAVING
      case 'problem': return MascotMotion.THINKING
      case 'features': return MascotMotion.LAPTOP
      case 'how-it-works': return MascotMotion.IDEA
      case 'testimonials': return MascotMotion.THUMBSUP
      case 'faq': return MascotMotion.READING
      case 'cta': return MascotMotion.CELEBRATE
      default: return MascotMotion.IDLE
    }
  }

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount >= 4) {
      setShowEasterEgg(true)
      setTimeout(() => {
        setShowEasterEgg(false)
        setClickCount(0)
      }, 3000)
    }
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 cursor-pointer hover:scale-110 transition-transform duration-300 hidden lg:block"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4eaed0]/30 to-[#764ba2]/30 rounded-full blur-xl" />
        <LegaliMascot
          motion={getMascotMotion()}
          width={80}
          height={80}
          className="relative z-10 drop-shadow-lg"
        />
        {showEasterEgg && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 text-xs font-bold text-[#4eaed0] shadow-lg animate-bounce">
            🎉 Yay!
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================================
// Live Ticker Notifications
// ============================================================================

const LiveTicker = () => {
  const [currentNotification, setCurrentNotification] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)

  const notifications = [
    { name: "Sarah M.", location: "Colorado", action: "analyzed a contract" },
    { name: "David C.", location: "New York", action: "found a lawyer" },
    { name: "Marcus J.", location: "Texas", action: "built their case" },
    { name: "Emily R.", location: "California", action: "analyzed a lease" },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentNotification(prev => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [notifications.length])

  const notification = notifications[currentNotification]

  return (
    <div className={cn(
      "fixed bottom-6 left-6 z-40 transition-all duration-500 hidden md:block",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      <GlassCard intensity="high" className="px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg">
        <Bell className="w-4 h-4 text-[#4eaed0]" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold">{notification.name}</span>
          <span className="text-slate-500"> from {notification.location}</span>
          <span className="text-slate-600"> just {notification.action}</span>
        </p>
      </GlassCard>
    </div>
  )
}

// ============================================================================
// Animated Counter Component
// ============================================================================

const AnimatedCounter = ({ 
  target, 
  suffix = "", 
  prefix = "",
  label 
}: { 
  target: number
  suffix?: string
  prefix?: string
  label: string 
}) => {
  const { ref, isInView } = useInView()
  const { count, start } = useCountUp(target, 2000, true)

  React.useEffect(() => {
    if (isInView) start()
  }, [isInView, start])

  return (
    <GlassCard ref={ref} intensity="medium" className="p-6 rounded-2xl text-center group hover:-translate-y-1 transition-transform duration-300">
      <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 group-hover:scale-105 transition-transform">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-slate-600">{label}</div>
    </GlassCard>
  )
}

// ============================================================================
// Navigation Components
// ============================================================================

const NavDropdown = ({
  label,
  items
}: {
  label: string
  items: { label: string; href: string; description?: string }[]
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#4eaed0] transition-colors outline-none group">
      {label}
      <ChevronDown className="w-3.5 h-3.5 group-data-[state=open]:rotate-180 transition-transform duration-200" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/50 p-3 min-w-[280px]">
      {items.map((item) => (
        <DropdownMenuItem key={item.label} asChild>
          <a
            href={item.href}
            className="flex flex-col gap-1 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#4eaed0]/5 hover:to-transparent transition-all group"
          >
            <span className="font-medium text-slate-800 group-hover:text-[#4eaed0] transition-colors">{item.label}</span>
            {item.description && (
              <span className="text-xs text-slate-500">{item.description}</span>
            )}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)

const HeaderV2 = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
      scrolled 
        ? "top-4 w-[90%] max-w-5xl rounded-full bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 border border-white/20 px-6 py-3" 
        : "top-0 w-full rounded-none bg-transparent px-6 py-5"
    )}>
      <div className="flex items-center justify-between w-full h-full">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={ASSETS.logo}
            alt="Legali"
            className={cn(
              "w-auto object-contain transition-all duration-500",
              scrolled ? "h-8" : "h-10"
            )}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavDropdown
            label="Litigation 101"
            items={[
              { label: "Getting Started", href: "#", description: "Begin your legal journey" },
              { label: "Legal Basics", href: "#", description: "Understand fundamental concepts" },
              { label: "Court Procedures", href: "#", description: "Navigate the court system" },
            ]}
          />
          <NavDropdown
            label="Solutions"
            items={[
              { label: "For Individuals", href: "#", description: "Personal legal assistance" },
              { label: "For Lawyers", href: "#", description: "Streamline your practice" },
              { label: "For Enterprises", href: "#", description: "Scale legal operations" },
            ]}
          />
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-[#4eaed0] transition-colors">
            Integration
          </a>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-[#4eaed0] transition-colors">
            Resources
          </a>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-[#4eaed0] transition-colors">
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button variant="ghost" className="text-slate-700 hover:text-[#4eaed0] hover:bg-[#4eaed0]/5 font-medium rounded-xl">
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
            <a href="#" className="text-base font-medium text-slate-800 py-2">Litigation 101</a>
            <a href="#" className="text-base font-medium text-slate-800 py-2">Solutions</a>
            <a href="#" className="text-base font-medium text-slate-800 py-2">Integration</a>
            <a href="#" className="text-base font-medium text-slate-800 py-2">Resources</a>
            <a href="#" className="text-base font-medium text-slate-800 py-2">Pricing</a>
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

// ============================================================================
// Hero Section with Mascot
// ============================================================================

const HeroSectionV2 = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(MascotMotion.WAVING)
  const [inputValue, setInputValue] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)
  
  // Typing animation for placeholder
  const typingText = useTypingAnimation([
    "I received an eviction notice...",
    "My employer didn't pay overtime...",
    "I need to review a contract...",
    "How do I file a small claims case?",
    "What are my rights as a tenant?",
  ], 60, 30, 2500)

  // Initial waving, then settle to idle
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFocused && !inputValue) {
        setMascotMotion(MascotMotion.IDLE)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [isFocused, inputValue])

  const handleInputFocus = () => {
    setIsFocused(true)
    setMascotMotion(MascotMotion.THINKING)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    if (!inputValue) {
      setMascotMotion(MascotMotion.IDLE)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    
    if (value.length > 20) {
      setMascotMotion(MascotMotion.READING)
    } else if (value.length > 0) {
      setMascotMotion(MascotMotion.THINKING)
    }
  }

  const handleAnalyzeClick = () => {
    setMascotMotion(MascotMotion.CELEBRATE)
    setTimeout(() => {
      onGetStarted?.()
    }, 500)
  }

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <AnimatedBackground enableParallax />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4eaed0]/10 to-[#667eea]/10 border border-[#4eaed0]/20 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-[#4eaed0]" />
              <span className="text-sm font-medium text-slate-700">AI-Powered Legal Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Legal guidance
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                  reimagined
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 250 2 298 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#4eaed0" />
                      <stop offset="0.5" stopColor="#667eea" />
                      <stop offset="1" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Navigate the legal system with confidence. Get instant AI-powered analysis, 
              build your case, and connect with qualified attorneys—all in one platform.
            </p>

            {/* Search Input */}
            <div className="max-w-xl mx-auto lg:mx-0 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <GlassCard intensity="high" className="rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border-white/60 hover:shadow-3xl transition-shadow duration-500">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder={inputValue ? "" : typingText || "Describe your legal situation..."}
                      className="w-full pl-12 pr-4 py-4 text-base text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
                      value={inputValue}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <Button
                    onClick={handleAnalyzeClick}
                    className="h-auto py-3.5 px-6 bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-[length:200%_100%] hover:bg-right text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-500"
                  >
                    Analyze
                  </Button>
                </div>
              </GlassCard>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              {[
                { icon: <AlertTriangle className="w-4 h-4" />, label: "Red Flag Analysis" },
                { icon: <FileText className="w-4 h-4" />, label: "Document Review" },
                { icon: <Scale className="w-4 h-4" />, label: "Case Builder" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl text-sm font-medium text-slate-700 hover:bg-white hover:border-[#4eaed0]/30 hover:text-[#4eaed0] hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group"
                >
                  <span className="text-[#4eaed0] group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Mascot */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
            <div className="relative">
              {/* Glow effect behind mascot */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 rounded-full blur-3xl scale-110" />
              
              {/* Floating elements around mascot */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                <Scale className="w-8 h-8 text-[#4eaed0]" />
              </div>
              <div className="absolute -bottom-4 -left-12 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <FileText className="w-7 h-7 text-[#667eea]" />
              </div>
              <div className="absolute top-1/4 -right-8 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Sparkles className="w-6 h-6 text-[#764ba2]" />
              </div>
              <div className="absolute bottom-1/3 -right-6 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1.5s' }}>
                <Gavel className="w-5 h-5 text-[#4eaed0]" />
              </div>
              <div className="absolute top-1/2 -left-6 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>
                <BookOpen className="w-5 h-5 text-[#f472b6]" />
              </div>

              {/* Mascot */}
              <LegaliMascot
                motion={mascotMotion}
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Row with Animated Counters */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <AnimatedCounter target={50} suffix="K+" label="Cases Analyzed" />
          <AnimatedCounter target={98} suffix="%" label="Accuracy Rate" />
          <AnimatedCounter target={500} suffix="+" label="Partner Attorneys" />
          <AnimatedCounter target={49} prefix="" suffix="" label="User Rating" />
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Trust Logos with Marquee Effect
// ============================================================================

const TrustLogosV2 = () => (
  <section className="py-16 px-6 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-12">
        Trusted by leading legal organizations
      </p>
      
      {/* Marquee container */}
      <div className="relative">
        <div className="flex gap-12 items-center justify-center flex-wrap opacity-60 hover:opacity-100 transition-opacity duration-500">
          {ASSETS.trustLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  </section>
)

// ============================================================================
// Problem Section with Mascot
// ============================================================================

const ProblemSectionV2 = () => {
  const problems = [
    {
      stat: "15M",
      title: "Americans navigate courts alone",
      description: "Every year, millions face the legal system without guidance, overwhelmed by complex procedures.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      stat: "75%",
      title: "Civil cases self-represented",
      description: "Three-quarters of civil cases involve people who can't afford traditional legal representation.",
      icon: <HelpCircle className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      stat: "3%",
      title: "Win rate without help",
      description: "Without proper guidance, people often accept unfair settlements or lose winnable cases.",
      icon: <Scale className="w-6 h-6" />,
      gradient: "from-red-500 to-rose-500",
    },
  ]

  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Justice Gap
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            The legal system wasn't built
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">for everyone</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Millions of people are denied justice every year simply because they can't afford—or access—proper legal help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <GlassCard
              key={problem.title}
              intensity="high"
              className="relative p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${problem.gradient} opacity-10 rounded-bl-[100px] rounded-tr-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {problem.icon}
              </div>
              
              <div className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                {problem.stat}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {problem.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Mascot with speech bubble */}
        <div className="mt-16 flex justify-center items-end gap-4">
          <LegaliMascot
            motion={MascotMotion.IDEA}
            width={200}
            height={200}
          />
          <GlassCard intensity="high" className="p-6 rounded-2xl max-w-md relative">
            {/* Speech bubble tail */}
            <div className="absolute left-0 bottom-4 -translate-x-2 w-4 h-4 bg-white/80 rotate-45" />
            <p className="text-slate-700 font-medium relative z-10">
              "That's why we built Legali—to level the playing field and give everyone 
              <span className="text-[#4eaed0] font-bold"> equal access to justice</span>."
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Features Section
// ============================================================================

const FeaturesSectionV2 = () => {
  const [activeFeature, setActiveFeature] = React.useState(0)
  const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(MascotMotion.LAPTOP)

  const features = [
    {
      id: 0,
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Red Flag Analysis",
      subtitle: "Instant Risk Assessment",
      description: "Upload any document or describe your situation. Our AI instantly identifies legal risks, critical deadlines, and key issues in plain language.",
      mascotMotion: MascotMotion.READING,
      gradient: "from-rose-500 to-pink-500",
      highlights: ["Document scanning", "Deadline detection", "Risk scoring", "Plain language explanations"],
    },
    {
      id: 1,
      icon: <Building2 className="w-6 h-6" />,
      title: "Case Builder",
      subtitle: "Build Your Legal Strategy",
      description: "Transform your story into a court-ready case with organized evidence, timelines, legal arguments, and attorney-ready dossiers.",
      mascotMotion: MascotMotion.WRITING,
      gradient: "from-[#4eaed0] to-[#667eea]",
      highlights: ["Evidence organization", "Timeline creation", "Legal drafting", "Filing assistance"],
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: "Lawyer Marketplace",
      subtitle: "Find Your Perfect Match",
      description: "Browse verified attorneys by expertise, share your case instantly, get upfront pricing, and communicate directly through our platform.",
      mascotMotion: MascotMotion.SPEAKING,
      gradient: "from-violet-500 to-purple-500",
      highlights: ["Verified attorneys", "Transparent pricing", "Instant sharing", "Direct messaging"],
    },
    {
      id: 3,
      icon: <DollarSign className="w-6 h-6" />,
      title: "Litigation Funding",
      subtitle: "Fund Your Fight",
      description: "Launch transparent campaigns for funding or invest in meritorious cases. Track progress and milestones in real-time.",
      mascotMotion: MascotMotion.CELEBRATE,
      gradient: "from-emerald-500 to-teal-500",
      highlights: ["Transparent campaigns", "Milestone tracking", "Investor matching", "Real-time updates"],
    },
  ]

  React.useEffect(() => {
    setMascotMotion(features[activeFeature].mascotMotion)
  }, [activeFeature])

  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden bg-slate-50/50">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4eaed0]/10 border border-[#4eaed0]/20 text-[#4eaed0] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Complete Legal Toolkit
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Everything you need,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] to-[#667eea]">one platform</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-500",
                  activeFeature === index
                    ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100"
                    : "bg-transparent hover:bg-white/50 border border-transparent"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                    activeFeature === index
                      ? `bg-gradient-to-br ${feature.gradient} text-white shadow-lg`
                      : "bg-slate-100 text-slate-500"
                  )}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={cn(
                        "font-bold text-lg transition-colors",
                        activeFeature === index ? "text-slate-900" : "text-slate-700"
                      )}>
                        {feature.title}
                      </h3>
                      {activeFeature === index && (
                        <ArrowRight className="w-4 h-4 text-[#4eaed0] animate-in slide-in-from-left" />
                      )}
                    </div>
                    <p className={cn(
                      "text-sm transition-colors",
                      activeFeature === index ? "text-slate-600" : "text-slate-500"
                    )}>
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top duration-300">
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
                            "bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700"
                          )}
                        >
                          <Check className="w-3 h-3 text-emerald-500" />
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
              <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} opacity-20 rounded-full blur-3xl scale-110 transition-all duration-500`} />
              
              {/* Feature card behind mascot */}
              <GlassCard
                intensity="high"
                className="absolute inset-x-0 bottom-0 p-6 rounded-2xl -z-10 transform translate-y-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center text-white`}>
                    {features[activeFeature].icon}
                  </div>
                  <span className="font-bold text-slate-800">{features[activeFeature].title}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${features[activeFeature].gradient} rounded-full transition-all duration-500`} style={{ width: '75%' }} />
                </div>
              </GlassCard>

              <LegaliMascot
                motion={mascotMotion}
                width={350}
                height={350}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// How It Works Section
// ============================================================================

const HowItWorksSectionV2 = () => {
  const steps = [
    {
      number: "01",
      title: "Describe Your Situation",
      description: "Upload documents or tell us about your legal matter. Our AI understands context and complexity.",
      icon: <Search className="w-6 h-6" />,
      gradient: "from-[#4eaed0] to-[#667eea]",
    },
    {
      number: "02", 
      title: "Get Instant Analysis",
      description: "Receive a comprehensive risk assessment in plain language with actionable recommendations.",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-[#667eea] to-[#764ba2]",
    },
    {
      number: "03",
      title: "Choose Your Path",
      description: "Handle it yourself with our tools, connect with an attorney, or let us file on your behalf.",
      icon: <ArrowUpRight className="w-6 h-6" />,
      gradient: "from-[#764ba2] to-[#f472b6]",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Three simple steps to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2]">legal clarity</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <GlassCard
                  intensity="high"
                  className="p-8 rounded-3xl text-center hover:-translate-y-2 transition-all duration-500 group"
                >
                  {/* Step number */}
                  <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} mb-2`}>
                    Step {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </GlassCard>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full shadow-lg items-center justify-center z-10 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mascot */}
        <div className="mt-16 flex justify-center">
          <LegaliMascot
            motion={MascotMotion.THUMBSUP}
            width={180}
            height={180}
          />
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Testimonials Section
// ============================================================================

const TestimonialsSectionV2 = () => {
  const testimonials = [
    {
      quote: "Legali helped me understand my contract dispute in minutes. I felt empowered to negotiate a fair settlement.",
      author: "Sarah M.",
      role: "Small Business Owner",
      avatar: "SM",
      rating: 5,
    },
    {
      quote: "As a solo practitioner, Legali has transformed how I handle initial case assessments. It's like having a research team.",
      author: "David Chen, Esq.",
      role: "Attorney",
      avatar: "DC",
      rating: 5,
    },
    {
      quote: "I couldn't afford a lawyer for my landlord dispute, but Legali walked me through every step. I won my case!",
      author: "Marcus J.",
      role: "Teacher",
      avatar: "MJ",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Loved by thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard
              key={testimonial.author}
              intensity="high"
              className="p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4eaed0] to-[#667eea] flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ Section
// ============================================================================

const FAQSectionV2 = () => {
  const faqs = [
    {
      question: "Is Legali a law firm?",
      answer: "No, Legali is an AI-powered legal intelligence platform. We provide information, tools, and connections to lawyers, but we do not provide legal advice or representation directly."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI is trained on millions of legal documents and case laws. While highly accurate for identifying risks and issues, it should be used as a starting point and verified by a qualified attorney for important decisions."
    },
    {
      question: "Can I use Legali for any type of case?",
      answer: "Legali currently specializes in civil litigation, contract disputes, employment law, and personal injury. We are constantly expanding our capabilities to cover more practice areas."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free tier for basic analysis and document organization. Premium features like advanced case building and lawyer matching are available starting at $29/month."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption, are SOC 2 Type II compliant, and never share your data with third parties. Your legal information stays completely private."
    }
  ]

  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about Legali
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              intensity="high"
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <div className="w-10 h-10 rounded-xl bg-[#4eaed0]/10 flex items-center justify-center text-[#4eaed0] transition-all duration-300 group-open:rotate-180 group-open:bg-[#4eaed0] group-open:text-white">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA Section
// ============================================================================

const CTASectionV2 = ({ onGetStarted }: { onGetStarted?: () => void }) => (
  <section id="cta" className="relative py-32 px-6 overflow-hidden">
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
    
    {/* Animated gradient orbs */}
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4eaed0]/30 to-transparent rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#764ba2]/30 to-transparent rounded-full blur-3xl" />
    
    <div className="relative max-w-4xl mx-auto text-center">
      {/* Mascot */}
      <div className="mb-12">
        <LegaliMascot
          motion={MascotMotion.CELEBRATE}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
        Ready to take control of your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2]">
          legal journey?
        </span>
      </h2>
      
      <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
        Join thousands of users who are navigating the legal system with confidence. 
        Start free today—no credit card required.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          onClick={onGetStarted}
          className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-[length:200%_100%] hover:bg-right text-white rounded-2xl shadow-2xl shadow-purple-500/30 transition-all duration-500 group"
        >
          <span className="flex items-center gap-2">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
        
        <Button
          variant="ghost"
          className="h-14 px-8 text-lg font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-2xl transition-all group"
        >
          <span className="flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </span>
        </Button>
      </div>
      
      {/* Trust badges */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          <span className="text-sm">SOC 2 Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span className="text-sm">24/7 Support</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5" />
          <span className="text-sm">4.9/5 Rating</span>
        </div>
      </div>
    </div>
  </section>
)

// ============================================================================
// Footer
// ============================================================================

const FooterV2 = () => (
  <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-8 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Main footer content */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        {/* Brand column */}
        <div className="col-span-2">
          <img
            src={ASSETS.logo}
            alt="Legali"
            className="h-10 mb-6 brightness-0 invert opacity-80"
          />
          <p className="text-sm text-slate-500 mb-6 max-w-xs">
            Making legal guidance accessible to everyone through AI-powered intelligence.
          </p>
          <div className="flex gap-3">
            {['twitter', 'linkedin', 'facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#4eaed0] flex items-center justify-center transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-current rounded-sm" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Links columns */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-sm">
            {['Features', 'Pricing', 'Case Studies', 'API'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#4eaed0] transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {['About', 'Blog', 'Careers', 'Press'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#4eaed0] transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-sm">
            {['Privacy', 'Terms', 'Security', 'Cookies'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#4eaed0] transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © 2024 Legali AI. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Legali is not a law firm and does not provide legal advice.
        </p>
      </div>
    </div>
  </footer>
)

// ============================================================================
// Main Component
// ============================================================================

const LandingPageV2 = React.forwardRef<HTMLDivElement, LandingPageV2Props>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-h-screen bg-white font-sans antialiased", className)}
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
    )
  }
)

LandingPageV2.displayName = "LandingPageV2"

export { LandingPageV2 }
