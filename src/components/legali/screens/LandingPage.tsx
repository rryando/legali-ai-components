import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  ChevronDown,
  Search,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
  AlertTriangle,
  FileText,
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Scale,
  HelpCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

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

export interface LandingPageProps extends React.HTMLAttributes<HTMLDivElement> {
  onGetStarted?: () => void
  onWatchDemo?: () => void
}

// ============================================================================
// Sub-components
// ============================================================================

// Navigation Dropdown Item
const NavDropdown = ({ 
  label, 
  items 
}: { 
  label: string
  items: { label: string; href: string }[] 
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[#14213d] hover:text-[#4eaed0] transition-colors outline-none">
      {label}
      <ChevronDown className="w-4 h-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-white rounded-lg shadow-lg border border-slate-200 p-2 min-w-[200px]">
      {items.map((item) => (
        <DropdownMenuItem key={item.label} asChild>
          <a 
            href={item.href}
            className="block px-4 py-2 text-sm text-[#535769] hover:text-[#14213d] hover:bg-slate-50 rounded-md transition-colors"
          >
            {item.label}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)

// Header Component
const Header = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={ASSETS.logo} 
            alt="Legali" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavDropdown 
            label="Litigation 101" 
            items={[
              { label: "Getting Started", href: "#" },
              { label: "Legal Basics", href: "#" },
              { label: "Court Procedures", href: "#" },
            ]}
          />
          <NavDropdown 
            label="Solutions" 
            items={[
              { label: "For Individuals", href: "#" },
              { label: "For Lawyers", href: "#" },
              { label: "For Enterprises", href: "#" },
            ]}
          />
          <a href="#" className="text-sm font-medium text-[#14213d] hover:text-[#4eaed0] transition-colors">
            Integration
          </a>
          <a href="#" className="text-sm font-medium text-[#14213d] hover:text-[#4eaed0] transition-colors">
            Resources
          </a>
          <a href="#" className="text-sm font-medium text-[#14213d] hover:text-[#4eaed0] transition-colors">
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#14213d] hover:bg-[#1a2a4d] rounded-full transition-colors">
            Log In
          </button>
          <button 
            onClick={onGetStarted}
            className="px-4 py-2 text-sm font-semibold text-[#14213d] border-2 border-[#14213d] hover:bg-[#14213d] hover:text-white rounded-full transition-colors"
          >
            Try Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm font-medium text-[#14213d]">Litigation 101</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Solutions</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Integration</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Resources</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Pricing</a>
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-[#14213d] rounded-full">
                Log In
              </button>
              <button 
                onClick={onGetStarted}
                className="w-full px-4 py-2 text-sm font-semibold text-[#14213d] border-2 border-[#14213d] rounded-full"
              >
                Try Free
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

// Feature Pill Component
const FeaturePill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#648f9e]/10 to-[#4eaed0]/10 border border-[#648f9e]/20 rounded-full text-sm font-medium text-[#14213d] hover:from-[#648f9e]/20 hover:to-[#4eaed0]/20 transition-all cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
)

// Hero Section
const HeroSection = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [activeTab, setActiveTab] = React.useState<'mylegali' | 'teamlegali'>('mylegali')

  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      {/* Background gradients - soft pink and blue corners */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#fce4ec]/40 via-[#f8bbd9]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#e3f2fd]/50 via-[#bbdefb]/30 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#e8f5e9]/30 to-transparent rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* MyLegali / TeamLegali Tabs */}
        <div className="inline-flex items-center p-1 bg-white rounded-full shadow-sm border border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('mylegali')}
            className={cn(
              "px-6 py-2 text-sm font-semibold rounded-full transition-all",
              activeTab === 'mylegali' 
                ? "bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white" 
                : "text-[#535769] hover:text-[#14213d]"
            )}
          >
            MyLegali
          </button>
          <button
            onClick={() => setActiveTab('teamlegali')}
            className={cn(
              "px-6 py-2 text-sm font-semibold rounded-full transition-all",
              activeTab === 'teamlegali' 
                ? "bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white" 
                : "text-[#535769] hover:text-[#14213d]"
            )}
          >
            TeamLegali
          </button>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#14213d] leading-tight mb-6 tracking-tight">
          Accessible legal guidance
          <br />
          <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
            powered by AI
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg text-[#535769] mb-8 leading-relaxed">
          Navigate the legal system with AI-powered guidance. Get answers to your legal questions, 
          understand court documents, and prepare for your case—all in one place.
        </p>

        {/* Chat Input Box */}
        <div className="max-w-[920px] mx-auto mb-8">
          <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-2">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="How can Legali help you today?"
                  className="w-full pl-12 pr-4 py-4 text-base text-[#14213d] placeholder:text-slate-400 bg-transparent outline-none"
                />
              </div>
              <button 
                onClick={onGetStarted}
                className="px-6 py-3 bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FeaturePill 
            icon={<AlertTriangle className="w-4 h-4" />}
            label="Red Flag Analysis"
          />
          <FeaturePill 
            icon={<FileText className="w-4 h-4" />}
            label="Smart Legal Drafter"
          />
          <FeaturePill 
            icon={<Building2 className="w-4 h-4" />}
            label="Litigation Case Builder"
          />
          <FeaturePill 
            icon={<Users className="w-4 h-4" />}
            label="Lawyers Marketplace"
          />
          <FeaturePill 
            icon={<DollarSign className="w-4 h-4" />}
            label="Fund Your Litigation"
          />
          <FeaturePill 
            icon={<TrendingUp className="w-4 h-4" />}
            label="Invest in Litigation"
          />
        </div>
      </div>
    </section>
  )
}

// Trust Logos Section
const TrustLogos = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-3xl md:text-4xl font-semibold text-[#14213d] mb-12 tracking-tight">
        Empowering{" "}
        <span className="bg-gradient-to-r from-[#3d849e] to-[#4eaed0] bg-clip-text text-transparent">
          legal equity
        </span>
        {" "}leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {ASSETS.trustLogos.map((logo, index) => (
          <img 
            key={index}
            src={logo.src} 
            alt={logo.alt}
            className="h-8 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  </section>
)

// Statistics Section
const StatsSection = () => {
  const stats = [
    { value: "15M", label: "navigate legal system alone every year" },
    { value: "75%", label: "civil cases involve self-represented parties" },
    { value: "3%", label: "win rate without proper representation" },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              Addressing the "justice gap"
            </span>
          </h2>
          <p className="text-[#535769] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="inline-flex items-center">
              <img src={ASSETS.logo} alt="Legali" className="h-5 inline mx-1" />
            </span>
            {" "}is here to bridge that gap and transform these statistics.
            <br className="hidden md:block" />
            We utilize technology to empower everyone to pursue justice, simplify legal hurdles, and revolutionize our legal system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ value, label }) => (
            <div 
              key={value} 
              className="relative p-12 rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-sm"
            >
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: "linear-gradient(147deg, rgba(52, 148, 230, 0.5) 0%, rgba(154, 217, 242, 0.3) 40%, rgba(255, 255, 255, 0) 80%)"
                }}
              />
              <div className="relative text-center">
                <div className="text-5xl md:text-6xl font-semibold text-[#14213d] mb-3 tracking-tight">
                  {value}
                </div>
                <p className="text-lg text-[#535769]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pain Points Section
const PainPointsSection = () => {
  const painPoints = [
    {
      title: "Self-represented litigants",
      description: "Over 15 million Americans navigate the legal system without professional help each year, often overwhelmed by complex procedures and legal jargon.",
      icon: <Users className="w-12 h-12 text-[#4eaed0]" />
    },
    {
      title: "Stuck in the middle",
      description: "Many people earn too much to qualify for legal aid but too little to afford traditional attorney fees, leaving them without adequate representation.",
      icon: <HelpCircle className="w-12 h-12 text-[#4eaed0]" />
    },
    {
      title: "Settle for less",
      description: "Without proper guidance, individuals often accept unfair settlements or lose cases they could have won, simply because they didn't know their rights.",
      icon: <Scale className="w-12 h-12 text-[#4eaed0]" />
    },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background with soft pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fce4ec]/30 via-white to-[#e3f2fd]/20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#f8bbd9]/30 to-transparent rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-[#bbdefb]/30 to-transparent rounded-full blur-3xl translate-x-1/3" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#14213d] tracking-tight mb-4">
            The challenges people face
          </h2>
          <p className="text-[#535769] text-lg max-w-2xl mx-auto">
            Understanding the barriers to justice helps us build better solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map(({ title, description, icon }) => (
            <div 
              key={title}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold text-[#14213d] mb-3">{title}</h3>
              <p className="text-[#535769] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Legal Toolkit Section
const LegalToolkitSection = () => {
  const [activeTab, setActiveTab] = React.useState<'individuals' | 'lawyers'>('individuals')

  const tools = [
    {
      icon: (
        <div className="w-9 h-9 bg-black rounded-md flex items-center justify-center">
          <Scale className="w-5 h-5 text-white" />
        </div>
      ),
      title: "Red Flag Analysis",
      intro: "Start here.",
      description: "Upload documents or describe your case. Get an instant analysis of legal risks and deadlines in plain language. We'll show you what matters and what to do next.",
      featured: true,
    },
    {
      icon: <img src={ASSETS.toolIcons.caseBuilder} alt="" className="w-9 h-9" />,
      title: "Litigation Case Builder",
      intro: "Build your case.",
      description: "Turn your story into a court-ready case. We organize evidence, build timelines, draft legal arguments, and prepare attorney-ready dossiers. File yourself, hand it to a lawyer, or we'll file it for you.",
    },
    {
      icon: <img src={ASSETS.toolIcons.fileOrg} alt="" className="w-9 h-9" />,
      title: "File Organization & Workflows",
      intro: "Stay organized.",
      description: "Keep every document and task on track with auto-sorting, attorney-ready summaries, and deadline management. Enterprise clients get secure collaboration with role-based access and encryption.",
    },
    {
      icon: <img src={ASSETS.toolIcons.lawyers} alt="" className="w-9 h-9" />,
      title: "Lawyers Marketplace",
      intro: "Find the right lawyer.",
      description: "Browse verified attorneys by location and practice area, share your case instantly through seamless integration, and get upfront pricing with built-in messaging for quick consultations.",
    },
    {
      icon: <img src={ASSETS.toolIcons.investing} alt="" className="w-9 h-9" />,
      title: "Investing in Litigation",
      intro: "Fund your fight.",
      description: "Launch transparent campaigns for Lawyers can launch transparent campaigns for investors or public supporters. Investors can access this emerging asset class and track milestones in real time.",
    },
  ]

  return (
    <section id="features" className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#14213d] tracking-tight mb-4">
            Your complete legal tool kit.{" "}
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              One platform
            </span>
            , every legal need.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 bg-white rounded-lg shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('individuals')}
              className={cn(
                "px-6 py-3 text-base font-semibold rounded-lg transition-all",
                activeTab === 'individuals' 
                  ? "bg-gradient-to-r from-[#33809b] to-[#255f73] text-white" 
                  : "text-[#14213d] hover:bg-slate-50"
              )}
            >
              For individuals
            </button>
            <button
              onClick={() => setActiveTab('lawyers')}
              className={cn(
                "px-6 py-3 text-base font-semibold rounded-lg transition-all",
                activeTab === 'lawyers' 
                  ? "bg-gradient-to-r from-[#33809b] to-[#255f73] text-white" 
                  : "text-[#14213d] hover:bg-slate-50"
              )}
            >
              For lawyers
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="space-y-6">
          {/* Featured Tool */}
          {tools.filter(t => t.featured).map((tool) => (
            <div
              key={tool.title}
              className="bg-white rounded-lg p-6 border-4 border-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                {tool.icon}
                <h3 className="text-xl font-semibold text-[#14213d] tracking-tight">{tool.title}</h3>
              </div>
              <p className="text-[#535769] leading-relaxed">
                <span className="font-bold">{tool.intro}</span>{" "}
                {tool.description}
              </p>
            </div>
          ))}

          {/* Regular Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.filter(t => !t.featured).map((tool) => (
              <div
                key={tool.title}
                className="bg-white rounded-lg p-4 border-4 border-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-3">
                  {tool.icon}
                  <h3 className="text-lg font-semibold text-black tracking-tight">{tool.title}</h3>
                </div>
                <p className="text-sm text-[#535769] leading-relaxed">
                  <span className="font-bold">{tool.intro}</span>{" "}
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Value Proposition (kept as additional content per user request)
const ValueProposition = () => (
  <section className="relative py-20 px-6 overflow-hidden">
    {/* Soft gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#fce4ec]/20 via-white to-[#e3f2fd]/20" />
    <div className="relative max-w-4xl mx-auto text-center">
      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#14213d] leading-relaxed">
        "The legal system shouldn't only work for those
        <br className="hidden md:block" />
        who can afford a lawyer. With{" "}
        <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent font-bold">
          legali
        </span>,
        <br className="hidden md:block" />
        everyone can navigate justice with confidence."
      </blockquote>
    </div>
  </section>
)

// How We Empower Section (5 steps)
const HowWeEmpower = () => {
  const steps = [
    {
      number: "01",
      title: "Start with Red Flag Analysis",
      description: "Upload any legal document or describe your situation. Our AI instantly identifies risks, deadlines, and key issues in plain language.",
      gradient: "from-[#ca3bbd] to-[#e468d9]",
    },
    {
      number: "02",
      title: "Take one of three actions",
      description: "Based on your analysis, choose to: handle it yourself with our guides, prepare materials for a lawyer, or let us file on your behalf.",
      gradient: "from-[#4eaed0] to-[#648f9e]",
    },
    {
      number: "03",
      title: "Access Premium Tools",
      description: "Use our Case Builder to organize evidence, create timelines, draft documents, and manage deadlines—all in one secure workspace.",
      gradient: "from-[#d39bfd] to-[#9b59b6]",
    },
    {
      number: "04",
      title: "Connect with Lawyers Marketplace",
      description: "Browse verified attorneys, share your prepared case instantly, get upfront pricing, and communicate directly through our platform.",
      gradient: "from-[#648f9e] to-[#4eaed0]",
    },
    {
      number: "05",
      title: "Fund or Invest in Litigation",
      description: "Launch transparent funding campaigns or invest in cases. Track progress in real-time with complete transparency.",
      gradient: "from-[#ca3bbd] to-[#e468d9]",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 px-6 overflow-hidden">
      {/* Background decorative gradients */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#e8d5f9]/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#d4f1f9]/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-[#fce4ec]/30 to-transparent rounded-full blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#14213d] tracking-tight mb-4">
            How We{" "}
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              Empower
            </span>
            {" "}You
          </h2>
          <p className="text-[#535769] text-lg max-w-2xl mx-auto">
            A simple, powerful process to navigate your legal journey
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div 
                  className={cn(
                    "w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br",
                    step.gradient
                  )}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                "flex-1 text-center md:text-left",
                index % 2 !== 0 && "md:text-right"
              )}>
                <h3 className="text-2xl font-semibold text-[#14213d] mb-3">{step.title}</h3>
                <p className="text-[#535769] text-lg leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "Is Legali replacing lawyers?",
      answer: "No, Legali is not a replacement for attorneys. We help you understand your legal situation, prepare documents, and know when it's time to seek professional legal help. Our Lawyers Marketplace even helps you find and connect with qualified attorneys when you need them.",
    },
    {
      question: "Who is Legali for?",
      answer: "Legali is for anyone navigating the legal system—whether you're a self-represented litigant, someone who wants to be better prepared before meeting with a lawyer, or a legal professional looking for efficient tools. We serve individuals, small businesses, and law firms alike.",
    },
    {
      question: "What about attorney-client privilege?",
      answer: "When you work with an attorney through our Lawyers Marketplace, standard attorney-client privilege applies to those communications. For our AI-powered tools, we maintain strict confidentiality and security, but it's important to understand that AI assistance is not the same as legal representation.",
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free tier that includes basic Red Flag Analysis and access to educational resources. Premium features like the Litigation Case Builder, File Organization, and Lawyers Marketplace access are available through our subscription plans. Visit our Pricing page for detailed information.",
    },
  ]

  return (
    <section id="faq" className="relative py-20 px-6 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7fa] via-white to-[#f0f4f8]" />
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#14213d] tracking-tight mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[#14213d] text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#4eaed0] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#535769] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer CTA Section
const FooterCTA = ({ onGetStarted }: { onGetStarted?: () => void }) => (
  <section className="py-24 px-6 bg-[#14213d]">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <img src={ASSETS.logo} alt="Legali" className="h-12 mx-auto mb-8 brightness-0 invert" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-tight">
        Legali puts the law
        <br />
        on{" "}
        <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
          your side
        </span>
        .
      </h2>
      <p className="text-lg text-slate-300 mb-8">
        Your path to legal confidence starts here.
      </p>
      <button 
        onClick={onGetStarted}
        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#648f9e] to-[#4eaed0] hover:opacity-90 rounded-full transition-all"
      >
        Get Started, legali →
      </button>
    </div>
  </section>
)

// Footer
const Footer = () => {
  const footerLinks = {
    resources: [
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#faq" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Disclaimer", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="py-16 px-6 bg-[#14213d] border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <img src={ASSETS.logo} alt="Legali" className="h-8 mb-6 brightness-0 invert" />
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (duplicate as per Figma) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label + '-2'}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-700">
          <p className="text-center text-slate-500 text-sm">
            Copyright © 2025 Legali Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// Main Component
// ============================================================================

const LandingPage = React.forwardRef<HTMLDivElement, LandingPageProps>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]", className)}
        {...props}
      >
        <Header onGetStarted={onGetStarted} />
        <HeroSection onGetStarted={onGetStarted} />
        <TrustLogos />
        <StatsSection />
        <PainPointsSection />
        <LegalToolkitSection />
        <ValueProposition />
        <HowWeEmpower />
        <FAQSection />
        <FooterCTA onGetStarted={onGetStarted} />
        <Footer />
      </div>
    )
  }
)

LandingPage.displayName = "LandingPage"

export { LandingPage }
