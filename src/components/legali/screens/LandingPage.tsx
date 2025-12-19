import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  ChevronDown,
  Search,
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
  Sparkles,
  Check,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Button } from "@/components/button"
import { GlassCard } from "../atomic/GlassCard"

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
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-white/20">
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
          <Button variant="ghost" className="text-[#14213d] hover:text-[#4eaed0] hover:bg-transparent font-semibold">
            Log In
          </Button>
          <Button 
            onClick={onGetStarted}
            className="bg-[#14213d] hover:bg-[#1a2a4d] text-white rounded-full px-6"
          >
            Try Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-[#14213d]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm font-medium text-[#14213d]">Litigation 101</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Solutions</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Integration</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Resources</a>
            <a href="#" className="text-sm font-medium text-[#14213d]">Pricing</a>
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <Button className="w-full bg-[#14213d] text-white rounded-full">
                Log In
              </Button>
              <Button 
                onClick={onGetStarted}
                variant="outline"
                className="w-full border-[#14213d] text-[#14213d] rounded-full"
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

// Feature Pill Component
const FeaturePill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-[#648f9e]/20 rounded-full text-sm font-medium text-[#14213d] hover:bg-white hover:shadow-md transition-all cursor-pointer group">
    <div className="text-[#4eaed0] group-hover:scale-110 transition-transform">
      {icon}
    </div>
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
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* MyLegali / TeamLegali Tabs */}
        <div className="inline-flex items-center p-1 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('mylegali')}
            className={cn(
              "px-6 py-2 text-sm font-semibold rounded-full transition-all",
              activeTab === 'mylegali' 
                ? "bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white shadow-md" 
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
                ? "bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white shadow-md" 
                : "text-[#535769] hover:text-[#14213d]"
            )}
          >
            TeamLegali
          </button>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14213d] leading-tight mb-6 tracking-tight">
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
        <div className="max-w-[920px] mx-auto mb-12">
          <GlassCard intensity="high" className="rounded-2xl p-2 flex items-center gap-3 shadow-xl shadow-blue-900/5">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="How can Legali help you today?"
                className="w-full pl-12 pr-4 py-4 text-base text-[#14213d] placeholder:text-slate-400 bg-transparent outline-none"
              />
            </div>
            <Button 
              onClick={onGetStarted}
              className="h-auto py-3 px-6 bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Button>
          </GlassCard>
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
  <section className="py-12 px-6 bg-white border-y border-slate-50">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-3xl md:text-4xl font-semibold text-[#14213d] mb-12 tracking-tight">
        Empowering{" "}
        <span className="bg-gradient-to-r from-[#3d849e] to-[#4eaed0] bg-clip-text text-transparent">
          legal equity
        </span>
        {" "}leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {ASSETS.trustLogos.map((logo, index) => (
          <img 
            key={index}
            src={logo.src} 
            alt={logo.alt}
            className="h-8 md:h-12 w-auto object-contain"
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
    <section className="relative py-20 px-6 overflow-hidden bg-slate-50/50">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[#14213d]">
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              Addressing the "justice gap"
            </span>
          </h2>
          <p className="text-[#535769] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="inline-flex items-center font-bold text-[#14213d]">
              Legali
            </span>
            {" "}is here to bridge that gap and transform these statistics.
            <br className="hidden md:block" />
            We utilize technology to empower everyone to pursue justice, simplify legal hurdles, and revolutionize our legal system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ value, label }) => (
            <GlassCard 
              key={value} 
              intensity="medium"
              className="relative p-12 rounded-3xl overflow-hidden text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#14213d] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {value}
                </div>
                <p className="text-lg text-[#535769] font-medium">{label}</p>
              </div>
              
              {/* Decorative gradient blob */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#4eaed0]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </GlassCard>
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
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Stuck in the middle",
      description: "Many people earn too much to qualify for legal aid but too little to afford traditional attorney fees, leaving them without adequate representation.",
      icon: <HelpCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Settle for less",
      description: "Without proper guidance, individuals often accept unfair settlements or lose cases they could have won, simply because they didn't know their rights.",
      icon: <Scale className="w-8 h-8 text-white" />
    },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with soft pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fce4ec]/30 via-white to-[#e3f2fd]/20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#f8bbd9]/30 to-transparent rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-[#bbdefb]/30 to-transparent rounded-full blur-3xl translate-x-1/3" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#14213d] tracking-tight mb-4">
            The challenges people face
          </h2>
          <p className="text-[#535769] text-lg max-w-2xl mx-auto">
            Understanding the barriers to justice helps us build better solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map(({ title, description, icon }) => (
            <GlassCard 
              key={title}
              intensity="high"
              className="rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#648f9e] to-[#4eaed0] shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-[#14213d] mb-3">{title}</h3>
              <p className="text-[#535769] leading-relaxed">{description}</p>
            </GlassCard>
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
        <div className="w-9 h-9 bg-[#14213d] rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20">
          <Scale className="w-5 h-5 text-white" />
        </div>
      ),
      title: "Red Flag Analysis",
      intro: "Start here.",
      description: "Upload documents or describe your case. Get an instant analysis of legal risks and deadlines in plain language. We'll show you what matters and what to do next.",
      featured: true,
    },
    {
      icon: <img src={ASSETS.toolIcons.caseBuilder} alt="" className="w-9 h-9 drop-shadow-md" />,
      title: "Litigation Case Builder",
      intro: "Build your case.",
      description: "Turn your story into a court-ready case. We organize evidence, build timelines, draft legal arguments, and prepare attorney-ready dossiers. File yourself, hand it to a lawyer, or we'll file it for you.",
    },
    {
      icon: <img src={ASSETS.toolIcons.fileOrg} alt="" className="w-9 h-9 drop-shadow-md" />,
      title: "File Organization & Workflows",
      intro: "Stay organized.",
      description: "Keep every document and task on track with auto-sorting, attorney-ready summaries, and deadline management. Enterprise clients get secure collaboration with role-based access and encryption.",
    },
    {
      icon: <img src={ASSETS.toolIcons.lawyers} alt="" className="w-9 h-9 drop-shadow-md" />,
      title: "Lawyers Marketplace",
      intro: "Find the right lawyer.",
      description: "Browse verified attorneys by location and practice area, share your case instantly through seamless integration, and get upfront pricing with built-in messaging for quick consultations.",
    },
    {
      icon: <img src={ASSETS.toolIcons.investing} alt="" className="w-9 h-9 drop-shadow-md" />,
      title: "Investing in Litigation",
      intro: "Fund your fight.",
      description: "Launch transparent campaigns for Lawyers can launch transparent campaigns for investors or public supporters. Investors can access this emerging asset class and track milestones in real time.",
    },
  ]

  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden">
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
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 bg-white rounded-xl shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('individuals')}
              className={cn(
                "px-6 py-3 text-base font-semibold rounded-lg transition-all",
                activeTab === 'individuals' 
                  ? "bg-gradient-to-r from-[#33809b] to-[#255f73] text-white shadow-md" 
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
                  ? "bg-gradient-to-r from-[#33809b] to-[#255f73] text-white shadow-md" 
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
            <GlassCard
              key={tool.title}
              intensity="high"
              className="rounded-2xl p-8 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {tool.icon}
                <h3 className="text-2xl font-bold text-[#14213d] tracking-tight">{tool.title}</h3>
              </div>
              <p className="text-[#535769] text-lg leading-relaxed">
                <span className="font-bold text-[#14213d]">{tool.intro}</span>{" "}
                {tool.description}
              </p>
            </GlassCard>
          ))}

          {/* Regular Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.filter(t => !t.featured).map((tool) => (
              <GlassCard
                key={tool.title}
                intensity="medium"
                className="rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  {tool.icon}
                  <h3 className="text-lg font-bold text-[#14213d] tracking-tight">{tool.title}</h3>
                </div>
                <p className="text-sm text-[#535769] leading-relaxed">
                  <span className="font-bold text-[#14213d]">{tool.intro}</span>{" "}
                  {tool.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Value Proposition (kept as additional content per user request)
const ValueProposition = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0f9ff]/50 to-white" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4eaed0]/10 border border-[#4eaed0]/20 text-[#4eaed0] text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Why Choose Legali</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#14213d] leading-tight">
            Master Legal Concepts <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] to-[#3b82f6]">
              Faster Than Ever
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Our AI-powered platform adapts to your learning style, breaking down complex legal theories into digestible, interactive lessons that stick.
          </p>
          
          <div className="space-y-6">
            {[
              {
                title: "Smart Adaptation",
                desc: "Curriculum that evolves with your progress"
              },
              {
                title: "Real-world Scenarios",
                desc: "Practice with actual case studies"
              },
              {
                title: "Instant Feedback",
                desc: "Get detailed explanations immediately"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4eaed0] to-[#3b82f6] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#14213d] mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#4eaed0]/20 to-[#3b82f6]/20 rounded-[2rem] blur-2xl" />
          <GlassCard intensity="high" className="relative p-8 rounded-[2rem] border-white/40">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-[#14213d]">Learning Progress</h3>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  On Track
                </div>
              </div>
              
              {[
                { label: "Contract Law", progress: 75, color: "bg-[#4eaed0]" },
                { label: "Torts", progress: 45, color: "bg-[#3b82f6]" },
                { label: "Criminal Law", progress: 90, color: "bg-[#14213d]" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-[#14213d]">
                    <span>{stat.label}</span>
                    <span>{stat.progress}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-600">
                    Join <span className="font-bold text-[#14213d]">2,000+</span> students learning today
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
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
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <GlassCard 
              key={step.number}
              intensity="medium"
              className="relative p-8 rounded-3xl group hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.gradient} opacity-10 rounded-bl-full rounded-tr-3xl transition-opacity group-hover:opacity-20`} />
              
              <div className={`text-5xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent mb-6 opacity-50 group-hover:opacity-100 transition-opacity`}>
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-[#14213d] mb-3 group-hover:text-[#4eaed0] transition-colors">
                {step.title}
              </h3>
              
              <p className="text-[#535769] leading-relaxed">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "Is Legali a law firm?",
      answer: "No, Legali is an AI-powered legal intelligence platform. We provide information, tools, and connections to lawyers, but we do not provide legal advice or representation directly."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI is trained on millions of legal documents and case laws. While highly accurate for identifying risks and issues, it should be used as a starting point and verified by a qualified attorney."
    },
    {
      question: "Can I use Legali for any type of case?",
      answer: "Legali currently specializes in civil litigation, contract disputes, and personal injury. We are constantly expanding our capabilities to cover more practice areas."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free tier for basic analysis and document organization. Premium features like advanced case building and lawyer matching are available with a subscription."
    }
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0f9ff]/50 to-white" />
      
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#14213d] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#535769] text-lg">
            Everything you need to know about Legali
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard 
              key={index}
              intensity="low"
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/60"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-[#14213d] pr-8">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#4eaed0]/10 flex items-center justify-center text-[#4eaed0] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-[#535769] leading-relaxed">
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

// Footer CTA Section
const FooterCTA = ({ onGetStarted }: { onGetStarted?: () => void }) => (
  <section className="py-24 px-6 bg-[#14213d] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#14213d] via-transparent to-[#14213d]" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="mb-8">
        <img src={ASSETS.logo} alt="Legali" className="h-12 mx-auto mb-8 brightness-0 invert opacity-80" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
        Legali puts the law
        <br />
        on{" "}
        <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
          your side
        </span>
        .
      </h2>
      <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
        Join thousands of users who are taking control of their legal journey today.
      </p>
      <Button 
        onClick={onGetStarted}
        className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-[#648f9e] to-[#4eaed0] hover:opacity-90 rounded-full transition-all shadow-lg shadow-blue-500/20"
      >
        Get Started, legali →
      </Button>
    </div>
  </section>
)

// Footer
const Footer = () => (
  <footer className="bg-[#0f172a] text-slate-400 py-16 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 className="text-white font-semibold mb-4">Product</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Reviews</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">About</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Legal Guide</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-[#4eaed0] transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Connect</h3>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4eaed0] hover:text-white transition-all">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4eaed0] hover:text-white transition-all">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm">© 2024 Legali AI. All rights reserved.</p>
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </footer>
)

// ============================================================================
// Main Component
// ============================================================================

const LandingPage = React.forwardRef<HTMLDivElement, LandingPageProps>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-h-screen bg-white font-sans", className)}
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
