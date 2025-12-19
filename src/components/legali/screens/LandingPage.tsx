import {
  AlertTriangle,
  Building2,
  Check,
  ChevronDown,
  DollarSign,
  FileText,
  HelpCircle,
  Menu,
  Scale,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  X,
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

export interface LandingPageProps extends React.HTMLAttributes<HTMLDivElement> {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

// ============================================================================
// Sub-components
// ============================================================================

// Navigation Dropdown Item
const NavDropdown = ({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-[#14213d] text-sm outline-none transition-colors hover:text-[#4eaed0]">
      {label}
      <ChevronDown className="h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-[200px] rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
      {items.map((item) => (
        <DropdownMenuItem asChild key={item.label}>
          <a
            className="block rounded-md px-4 py-2 text-[#535769] text-sm transition-colors hover:bg-slate-50 hover:text-[#14213d]"
            href={item.href}
          >
            {item.label}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

// Header Component
const Header = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-white/20 border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            alt="Legali"
            className="h-8 w-auto object-contain"
            src={ASSETS.logo}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavDropdown
            items={[
              { label: "Getting Started", href: "#" },
              { label: "Legal Basics", href: "#" },
              { label: "Court Procedures", href: "#" },
            ]}
            label="Litigation 101"
          />
          <NavDropdown
            items={[
              { label: "For Individuals", href: "#" },
              { label: "For Lawyers", href: "#" },
              { label: "For Enterprises", href: "#" },
            ]}
            label="Solutions"
          />
          <a
            className="font-medium text-[#14213d] text-sm transition-colors hover:text-[#4eaed0]"
            href="#"
          >
            Integration
          </a>
          <a
            className="font-medium text-[#14213d] text-sm transition-colors hover:text-[#4eaed0]"
            href="#"
          >
            Resources
          </a>
          <a
            className="font-medium text-[#14213d] text-sm transition-colors hover:text-[#4eaed0]"
            href="#"
          >
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            className="font-semibold text-[#14213d] hover:bg-transparent hover:text-[#4eaed0]"
            variant="ghost"
          >
            Log In
          </Button>
          <Button
            className="rounded-full bg-[#14213d] px-6 text-white hover:bg-[#1a2a4d]"
            onClick={onGetStarted}
          >
            Try Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-[#14213d] lg:hidden"
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
        <div className="border-slate-100 border-t bg-white px-6 py-4 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            <a className="font-medium text-[#14213d] text-sm" href="#">
              Litigation 101
            </a>
            <a className="font-medium text-[#14213d] text-sm" href="#">
              Solutions
            </a>
            <a className="font-medium text-[#14213d] text-sm" href="#">
              Integration
            </a>
            <a className="font-medium text-[#14213d] text-sm" href="#">
              Resources
            </a>
            <a className="font-medium text-[#14213d] text-sm" href="#">
              Pricing
            </a>
            <div className="flex flex-col gap-2 border-slate-100 border-t pt-4">
              <Button className="w-full rounded-full bg-[#14213d] text-white">
                Log In
              </Button>
              <Button
                className="w-full rounded-full border-[#14213d] text-[#14213d]"
                onClick={onGetStarted}
                variant="outline"
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

// Feature Pill Component
const FeaturePill = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#648f9e]/20 bg-white/50 px-4 py-2 font-medium text-[#14213d] text-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
    <div className="text-[#4eaed0] transition-transform group-hover:scale-110">
      {icon}
    </div>
    <span>{label}</span>
  </div>
);

// Hero Section
const HeroSection = ({ onGetStarted }: { onGetStarted?: () => void }) => {
  const [activeTab, setActiveTab] = React.useState<"mylegali" | "teamlegali">(
    "mylegali"
  );

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      {/* Background gradients - soft pink and blue corners */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#fce4ec]/40 via-[#f8bbd9]/20 to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-bl from-[#e3f2fd]/50 via-[#bbdefb]/30 to-transparent blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tl from-[#e8f5e9]/30 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* MyLegali / TeamLegali Tabs */}
        <div className="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur-md">
          <button
            className={cn(
              "rounded-full px-6 py-2 font-semibold text-sm transition-all",
              activeTab === "mylegali"
                ? "bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white shadow-md"
                : "text-[#535769] hover:text-[#14213d]"
            )}
            onClick={() => setActiveTab("mylegali")}
          >
            MyLegali
          </button>
          <button
            className={cn(
              "rounded-full px-6 py-2 font-semibold text-sm transition-all",
              activeTab === "teamlegali"
                ? "bg-gradient-to-r from-[#648f9e] to-[#4eaed0] text-white shadow-md"
                : "text-[#535769] hover:text-[#14213d]"
            )}
            onClick={() => setActiveTab("teamlegali")}
          >
            TeamLegali
          </button>
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-bold text-4xl text-[#14213d] leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Accessible legal guidance
          <br />
          <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
            powered by AI
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mb-8 max-w-2xl text-[#535769] text-lg leading-relaxed">
          Navigate the legal system with AI-powered guidance. Get answers to
          your legal questions, understand court documents, and prepare for your
          case—all in one place.
        </p>

        {/* Chat Input Box */}
        <div className="mx-auto mb-12 max-w-[920px]">
          <GlassCard
            className="flex items-center gap-3 rounded-2xl p-2 shadow-blue-900/5 shadow-xl"
            intensity="high"
          >
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full bg-transparent py-4 pr-4 pl-12 text-[#14213d] text-base outline-none placeholder:text-slate-400"
                placeholder="How can Legali help you today?"
                type="text"
              />
            </div>
            <Button
              className="h-auto rounded-xl bg-gradient-to-r from-[#648f9e] to-[#4eaed0] px-6 py-3 font-semibold text-white shadow-blue-500/20 shadow-lg transition-opacity hover:opacity-90"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
          </GlassCard>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FeaturePill
            icon={<AlertTriangle className="h-4 w-4" />}
            label="Red Flag Analysis"
          />
          <FeaturePill
            icon={<FileText className="h-4 w-4" />}
            label="Smart Legal Drafter"
          />
          <FeaturePill
            icon={<Building2 className="h-4 w-4" />}
            label="Litigation Case Builder"
          />
          <FeaturePill
            icon={<Users className="h-4 w-4" />}
            label="Lawyers Marketplace"
          />
          <FeaturePill
            icon={<DollarSign className="h-4 w-4" />}
            label="Fund Your Litigation"
          />
          <FeaturePill
            icon={<TrendingUp className="h-4 w-4" />}
            label="Invest in Litigation"
          />
        </div>
      </div>
    </section>
  );
};

// Trust Logos Section
const TrustLogos = () => (
  <section className="border-slate-50 border-y bg-white px-6 py-12">
    <div className="mx-auto max-w-7xl">
      <p className="mb-12 text-center font-semibold text-3xl text-[#14213d] tracking-tight md:text-4xl">
        Empowering{" "}
        <span className="bg-gradient-to-r from-[#3d849e] to-[#4eaed0] bg-clip-text text-transparent">
          legal equity
        </span>{" "}
        leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-12">
        {ASSETS.trustLogos.map((logo, index) => (
          <img
            alt={logo.alt}
            className="h-8 w-auto object-contain md:h-12"
            key={index}
            src={logo.src}
          />
        ))}
      </div>
    </div>
  </section>
);

// Statistics Section
const StatsSection = () => {
  const stats = [
    { value: "15M", label: "navigate legal system alone every year" },
    { value: "75%", label: "civil cases involve self-represented parties" },
    { value: "3%", label: "win rate without proper representation" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/50 px-6 py-20">
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-semibold text-3xl text-[#14213d] tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              Addressing the "justice gap"
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-[#535769] text-lg leading-relaxed md:text-xl">
            <span className="inline-flex items-center font-bold text-[#14213d]">
              Legali
            </span>{" "}
            is here to bridge that gap and transform these statistics.
            <br className="hidden md:block" />
            We utilize technology to empower everyone to pursue justice,
            simplify legal hurdles, and revolutionize our legal system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map(({ value, label }) => (
            <GlassCard
              className="group relative overflow-hidden rounded-3xl p-12 text-center transition-transform duration-300 hover:-translate-y-1"
              intensity="medium"
              key={value}
            >
              <div className="relative z-10">
                <div className="mb-3 font-bold text-5xl text-[#14213d] tracking-tight transition-transform duration-300 group-hover:scale-105 md:text-6xl">
                  {value}
                </div>
                <p className="font-medium text-[#535769] text-lg">{label}</p>
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#4eaed0]/20 to-transparent blur-2xl transition-transform duration-500 group-hover:scale-150" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pain Points Section
const PainPointsSection = () => {
  const painPoints = [
    {
      title: "Self-represented litigants",
      description:
        "Over 15 million Americans navigate the legal system without professional help each year, often overwhelmed by complex procedures and legal jargon.",
      icon: <Users className="h-8 w-8 text-white" />,
    },
    {
      title: "Stuck in the middle",
      description:
        "Many people earn too much to qualify for legal aid but too little to afford traditional attorney fees, leaving them without adequate representation.",
      icon: <HelpCircle className="h-8 w-8 text-white" />,
    },
    {
      title: "Settle for less",
      description:
        "Without proper guidance, individuals often accept unfair settlements or lose cases they could have won, simply because they didn't know their rights.",
      icon: <Scale className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background with soft pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fce4ec]/30 via-white to-[#e3f2fd]/20" />
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#f8bbd9]/30 to-transparent blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] translate-x-1/3 rounded-full bg-gradient-to-l from-[#bbdefb]/30 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-semibold text-3xl text-[#14213d] tracking-tight md:text-4xl">
            The challenges people face
          </h2>
          <p className="mx-auto max-w-2xl text-[#535769] text-lg">
            Understanding the barriers to justice helps us build better
            solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {painPoints.map(({ title, description, icon }) => (
            <GlassCard
              className="group rounded-3xl p-8 transition-all duration-300 hover:shadow-xl"
              intensity="high"
              key={title}
            >
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#648f9e] to-[#4eaed0] p-4 shadow-blue-500/20 shadow-lg transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="mb-3 font-bold text-[#14213d] text-xl">{title}</h3>
              <p className="text-[#535769] leading-relaxed">{description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Legal Toolkit Section
const LegalToolkitSection = () => {
  const [activeTab, setActiveTab] = React.useState<"individuals" | "lawyers">(
    "individuals"
  );

  const tools = [
    {
      icon: (
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14213d] shadow-blue-900/20 shadow-lg">
          <Scale className="h-5 w-5 text-white" />
        </div>
      ),
      title: "Red Flag Analysis",
      intro: "Start here.",
      description:
        "Upload documents or describe your case. Get an instant analysis of legal risks and deadlines in plain language. We'll show you what matters and what to do next.",
      featured: true,
    },
    {
      icon: (
        <img
          alt=""
          className="h-9 w-9 drop-shadow-md"
          src={ASSETS.toolIcons.caseBuilder}
        />
      ),
      title: "Litigation Case Builder",
      intro: "Build your case.",
      description:
        "Turn your story into a court-ready case. We organize evidence, build timelines, draft legal arguments, and prepare attorney-ready dossiers. File yourself, hand it to a lawyer, or we'll file it for you.",
    },
    {
      icon: (
        <img
          alt=""
          className="h-9 w-9 drop-shadow-md"
          src={ASSETS.toolIcons.fileOrg}
        />
      ),
      title: "File Organization & Workflows",
      intro: "Stay organized.",
      description:
        "Keep every document and task on track with auto-sorting, attorney-ready summaries, and deadline management. Enterprise clients get secure collaboration with role-based access and encryption.",
    },
    {
      icon: (
        <img
          alt=""
          className="h-9 w-9 drop-shadow-md"
          src={ASSETS.toolIcons.lawyers}
        />
      ),
      title: "Lawyers Marketplace",
      intro: "Find the right lawyer.",
      description:
        "Browse verified attorneys by location and practice area, share your case instantly through seamless integration, and get upfront pricing with built-in messaging for quick consultations.",
    },
    {
      icon: (
        <img
          alt=""
          className="h-9 w-9 drop-shadow-md"
          src={ASSETS.toolIcons.investing}
        />
      ),
      title: "Investing in Litigation",
      intro: "Fund your fight.",
      description:
        "Launch transparent campaigns for Lawyers can launch transparent campaigns for investors or public supporters. Investors can access this emerging asset class and track milestones in real time.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-semibold text-3xl text-[#14213d] tracking-tight md:text-4xl">
            Your complete legal tool kit.{" "}
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              One platform
            </span>
            , every legal need.
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              className={cn(
                "rounded-lg px-6 py-3 font-semibold text-base transition-all",
                activeTab === "individuals"
                  ? "bg-gradient-to-r from-[#33809b] to-[#255f73] text-white shadow-md"
                  : "text-[#14213d] hover:bg-slate-50"
              )}
              onClick={() => setActiveTab("individuals")}
            >
              For individuals
            </button>
            <button
              className={cn(
                "rounded-lg px-6 py-3 font-semibold text-base transition-all",
                activeTab === "lawyers"
                  ? "bg-gradient-to-r from-[#33809b] to-[#255f73] text-white shadow-md"
                  : "text-[#14213d] hover:bg-slate-50"
              )}
              onClick={() => setActiveTab("lawyers")}
            >
              For lawyers
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="space-y-6">
          {/* Featured Tool */}
          {tools
            .filter((t) => t.featured)
            .map((tool) => (
              <GlassCard
                className="rounded-2xl border-2 border-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                intensity="high"
                key={tool.title}
              >
                <div className="mb-4 flex items-center gap-4">
                  {tool.icon}
                  <h3 className="font-bold text-2xl text-[#14213d] tracking-tight">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-[#535769] text-lg leading-relaxed">
                  <span className="font-bold text-[#14213d]">{tool.intro}</span>{" "}
                  {tool.description}
                </p>
              </GlassCard>
            ))}

          {/* Regular Tools */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {tools
              .filter((t) => !t.featured)
              .map((tool) => (
                <GlassCard
                  className="rounded-2xl border border-white/50 p-6 transition-all duration-300 hover:shadow-lg"
                  intensity="medium"
                  key={tool.title}
                >
                  <div className="mb-3 flex items-center gap-4">
                    {tool.icon}
                    <h3 className="font-bold text-[#14213d] text-lg tracking-tight">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-[#535769] text-sm leading-relaxed">
                    <span className="font-bold text-[#14213d]">
                      {tool.intro}
                    </span>{" "}
                    {tool.description}
                  </p>
                </GlassCard>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Value Proposition (kept as additional content per user request)
const ValueProposition = () => (
  <section className="relative overflow-hidden py-24">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0f9ff]/50 to-white" />

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4eaed0]/20 bg-[#4eaed0]/10 px-3 py-1 font-medium text-[#4eaed0] text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Why Choose Legali</span>
          </div>

          <h2 className="font-bold text-4xl text-[#14213d] leading-tight md:text-5xl">
            Master Legal Concepts <br />
            <span className="bg-gradient-to-r from-[#4eaed0] to-[#3b82f6] bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Our AI-powered platform adapts to your learning style, breaking down
            complex legal theories into digestible, interactive lessons that
            stick.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Smart Adaptation",
                desc: "Curriculum that evolves with your progress",
              },
              {
                title: "Real-world Scenarios",
                desc: "Practice with actual case studies",
              },
              {
                title: "Instant Feedback",
                desc: "Get detailed explanations immediately",
              },
            ].map((item, i) => (
              <div className="flex gap-4" key={i}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4eaed0] to-[#3b82f6] text-white shadow-blue-500/20 shadow-lg">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#14213d] text-xl">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[#4eaed0]/20 to-[#3b82f6]/20 blur-2xl" />
          <GlassCard
            className="relative rounded-[2rem] border-white/40 p-8"
            intensity="high"
          >
            <div className="space-y-6">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-bold text-[#14213d] text-xl">
                  Learning Progress
                </h3>
                <div className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 text-sm">
                  On Track
                </div>
              </div>

              {[
                { label: "Contract Law", progress: 75, color: "bg-[#4eaed0]" },
                { label: "Torts", progress: 45, color: "bg-[#3b82f6]" },
                { label: "Criminal Law", progress: 90, color: "bg-[#14213d]" },
              ].map((stat, i) => (
                <div className="space-y-2" key={i}>
                  <div className="flex justify-between font-medium text-[#14213d] text-sm">
                    <span>{stat.label}</span>
                    <span>{stat.progress}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 border-slate-100 border-t pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"
                        key={i}
                      />
                    ))}
                  </div>
                  <div className="text-slate-600 text-sm">
                    Join{" "}
                    <span className="font-bold text-[#14213d]">2,000+</span>{" "}
                    students learning today
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
);

// How We Empower Section (5 steps)
const HowWeEmpower = () => {
  const steps = [
    {
      number: "01",
      title: "Start with Red Flag Analysis",
      description:
        "Upload any legal document or describe your situation. Our AI instantly identifies risks, deadlines, and key issues in plain language.",
      gradient: "from-[#ca3bbd] to-[#e468d9]",
    },
    {
      number: "02",
      title: "Take one of three actions",
      description:
        "Based on your analysis, choose to: handle it yourself with our guides, prepare materials for a lawyer, or let us file on your behalf.",
      gradient: "from-[#4eaed0] to-[#648f9e]",
    },
    {
      number: "03",
      title: "Access Premium Tools",
      description:
        "Use our Case Builder to organize evidence, create timelines, draft documents, and manage deadlines—all in one secure workspace.",
      gradient: "from-[#d39bfd] to-[#9b59b6]",
    },
    {
      number: "04",
      title: "Connect with Lawyers Marketplace",
      description:
        "Browse verified attorneys, share your prepared case instantly, get upfront pricing, and communicate directly through our platform.",
      gradient: "from-[#648f9e] to-[#4eaed0]",
    },
    {
      number: "05",
      title: "Fund or Invest in Litigation",
      description:
        "Launch transparent funding campaigns or invest in cases. Track progress in real-time with complete transparency.",
      gradient: "from-[#ca3bbd] to-[#e468d9]",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24" id="how-it-works">
      {/* Background decorative gradients */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[#e8d5f9]/40 to-transparent blur-3xl" />
      <div className="absolute right-0 bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-[#d4f1f9]/40 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/4 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#fce4ec]/30 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-semibold text-3xl text-[#14213d] tracking-tight md:text-4xl">
            How We{" "}
            <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
              Empower
            </span>{" "}
            You
          </h2>
          <p className="mx-auto max-w-2xl text-[#535769] text-lg">
            A simple, powerful process to navigate your legal journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <GlassCard
              className="group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              intensity="medium"
              key={step.number}
            >
              <div
                className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${step.gradient} rounded-tr-3xl rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20`}
              />

              <div
                className={`bg-gradient-to-br font-bold text-5xl ${step.gradient} mb-6 bg-clip-text text-transparent opacity-50 transition-opacity group-hover:opacity-100`}
              >
                {step.number}
              </div>

              <h3 className="mb-3 font-bold text-[#14213d] text-xl transition-colors group-hover:text-[#4eaed0]">
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
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "Is Legali a law firm?",
      answer:
        "No, Legali is an AI-powered legal intelligence platform. We provide information, tools, and connections to lawyers, but we do not provide legal advice or representation directly.",
    },
    {
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI is trained on millions of legal documents and case laws. While highly accurate for identifying risks and issues, it should be used as a starting point and verified by a qualified attorney.",
    },
    {
      question: "Can I use Legali for any type of case?",
      answer:
        "Legali currently specializes in civil litigation, contract disputes, and personal injury. We are constantly expanding our capabilities to cover more practice areas.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer a free tier for basic analysis and document organization. Premium features like advanced case building and lawyer matching are available with a subscription.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0f9ff]/50 to-white" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-semibold text-3xl text-[#14213d] tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-[#535769] text-lg">
            Everything you need to know about Legali
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              className="overflow-hidden rounded-2xl transition-all duration-300 hover:bg-white/60"
              intensity="low"
              key={index}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                  <h3 className="pr-8 font-medium text-[#14213d] text-lg">
                    {faq.question}
                  </h3>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4eaed0]/10 text-[#4eaed0] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-5 w-5" />
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
  );
};

// Footer CTA Section
const FooterCTA = ({ onGetStarted }: { onGetStarted?: () => void }) => (
  <section className="relative overflow-hidden bg-[#14213d] px-6 py-24">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-center bg-cover opacity-5 mix-blend-overlay" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#14213d] via-transparent to-[#14213d]" />

    <div className="relative z-10 mx-auto max-w-4xl text-center">
      <div className="mb-8">
        <img
          alt="Legali"
          className="mx-auto mb-8 h-12 opacity-80 brightness-0 invert"
          src={ASSETS.logo}
        />
      </div>
      <h2 className="mb-6 font-semibold text-3xl text-white leading-tight tracking-tight md:text-4xl lg:text-5xl">
        Legali puts the law
        <br />
        on{" "}
        <span className="bg-gradient-to-r from-[#648f9e] to-[#4eaed0] bg-clip-text text-transparent">
          your side
        </span>
        .
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
        Join thousands of users who are taking control of their legal journey
        today.
      </p>
      <Button
        className="h-14 rounded-full bg-gradient-to-r from-[#648f9e] to-[#4eaed0] px-8 font-semibold text-lg shadow-blue-500/20 shadow-lg transition-all hover:opacity-90"
        onClick={onGetStarted}
      >
        Get Started, legali →
      </Button>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="border-slate-800 border-t bg-[#0f172a] px-6 py-16 text-slate-400">
    <div className="mx-auto mb-12 grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
      <div>
        <h3 className="mb-4 font-semibold text-white">Product</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Case Studies
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Reviews
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-white">Company</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-white">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Legal Guide
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Help Center
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Terms of Service
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#4eaed0]" href="#">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-white">Connect</h3>
        <div className="flex gap-4">
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-[#4eaed0] hover:text-white"
            href="#"
          >
            <span className="sr-only">Twitter</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-[#4eaed0] hover:text-white"
            href="#"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-slate-800 border-t pt-8 md:flex-row">
      <p className="text-sm">© 2024 Legali AI. All rights reserved.</p>
      <div className="flex gap-6 text-sm">
        <a className="transition-colors hover:text-white" href="#">
          Privacy
        </a>
        <a className="transition-colors hover:text-white" href="#">
          Terms
        </a>
        <a className="transition-colors hover:text-white" href="#">
          Cookies
        </a>
      </div>
    </div>
  </footer>
);

// ============================================================================
// Main Component
// ============================================================================

const LandingPage = React.forwardRef<HTMLDivElement, LandingPageProps>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => (
    <div
      className={cn("min-h-screen bg-white font-sans", className)}
      ref={ref}
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
);

LandingPage.displayName = "LandingPage";

export { LandingPage };
