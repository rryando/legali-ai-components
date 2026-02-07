import type { Meta, StoryObj } from "@storybook/react";
import {
  Activity,
  CheckCircle2,
  FileSearch,
  FileText,
  Gavel,
  HelpCircle,
  Layout,
  MessageSquare,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { LandingPage } from "../screens/LandingPage";
import { MascotMotion } from "../mascot/LegaliMascot";

const meta: Meta<typeof LandingPage> = {
  title: "Legali/Screens/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-landing-page.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { LandingPage } from "@/components/ui/legali/screens/LandingPage"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<LandingPage onGetStarted={() => {}} onWatchDemo={() => {}} />\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
  },
};

export const StagingCopy: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
    textConfig: {
      hero: {
        badgeText: "Meet your first AI-law firm",
        headline: (
          <>
            Handle your case
            <br />
            with confidence
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                Guided by legal intelligence
              </span>
            </span>
          </>
        ),
        subtitle:
          "Legali helps you build your case, organize evidence, draft legal documents, connect with the right attorneys — and even secure funding for your litigation. All in one secured platform.",
        analyzeButtonText: "Build your case",
        defaultInputPlaceholder: "What happened? Describe your situation...",
      },
      problem: {
        badgeLabel: "The Justice Gap",
        title: "Bridging the justice gap for the 'missing middle'",
        subtitle:
          "Millions of us in the middle-income bracket face an impossible choice: we earn too much to qualify for free legal aid, yet spending $100k/year on attorneys isn't justifiable. Legali uses technology to empower the 'missing middle'.",
        problems: [
          {
            stat: "63M",
            title: "Cases filed alone",
            description:
              "15 million Americans navigate the legal system alone each year with just a 3% win rate.",
            icon: <Users className="h-6 w-6" />,
            gradient: "from-rose-500 to-pink-500",
          },
          {
            stat: "75%",
            title: "Civil cases self-represented",
            description:
              "Three-quarters of civil cases involve parties who are forced to navigate complex systems without professional help.",
            icon: <HelpCircle className="h-6 w-6" />,
            gradient: "from-amber-500 to-orange-500",
          },
          {
            stat: "3%",
            title: "Win rate",
            description:
              "The current success rate for self-represented litigants without proper legal intelligence tools.",
            icon: <Scale className="h-6 w-6" />,
            gradient: "from-red-500 to-rose-500",
          },
        ],
      },
      features: {
        badgeLabel: "Our Features",
        title: "Explore our useful features",
        features: [
          {
            id: 0,
            icon: <FileSearch className="h-6 w-6" />,
            title: "Legal Risk Spotter",
            subtitle: "Identify potential risks",
            description:
              "Our AI reviews your situation to identify potential risks, manipulation tactics, and other legal 'danger zones' before they escalate.",
            mascotMotion: MascotMotion.READING,
            gradient: "from-rose-500 to-pink-500",
            highlights: ["Risk scoring", "Tactical analysis", "Early warning", "Strategy tips"],
          },
          {
            id: 1,
            icon: <FileText className="h-6 w-6" />,
            title: "Smart Legal Drafter",
            subtitle: "Generate court-ready forms",
            description:
              "Generate court-ready forms for small claims or civil litigation cases, guided by jurisdiction-specific requirements.",
            mascotMotion: MascotMotion.WRITING,
            gradient: "from-[#4eaed0] to-[#667eea]",
            highlights: ["Jurisdiction aware", "Auto-formatting", "Plain language", "Validation"],
          },
          {
            id: 2,
            icon: <Layout className="h-6 w-6" />,
            title: "Litigation Case Builder",
            subtitle: "Organize your evidence",
            description:
              "Watch your events, documents, and evidence come together as an interactive timeline with drag-and-drop ease.",
            mascotMotion: MascotMotion.LAPTOP,
            gradient: "from-violet-500 to-purple-500",
            highlights: [
              "Interactive timeline",
              "Evidence vault",
              "Document linking",
              "Case summary",
            ],
          },
          {
            id: 3,
            icon: <Users className="h-6 w-6" />,
            title: "Lawyers Marketplace",
            subtitle: "Connect with experts",
            description:
              "Access fixed-fee lawyers who can step in prepared, having already reviewed your organized legal dossier.",
            mascotMotion: MascotMotion.SPEAKING,
            gradient: "from-emerald-500 to-teal-500",
            highlights: ["Fixed-fee", "Dossier review", "Expert matching", "Verified pros"],
          },
          {
            id: 4,
            icon: <Target className="h-6 w-6" />,
            title: "Litigation Funding",
            subtitle: "Secure support",
            description:
              "Connect with investors or crowdfund your litigation to ensure you have the resources to stay in the game.",
            mascotMotion: MascotMotion.CELEBRATE,
            gradient: "from-blue-500 to-indigo-500",
            highlights: ["Investor matching", "Crowdfunding", "Resource planning", "Fair shot"],
          },
        ],
      },
      howItWorks: {
        title: "How we empower you",
        steps: [
          {
            number: "01",
            title: "Tell your story, your way",
            description:
              "Share what happened through text, voice, or photos. We securely capture every detail.",
            icon: <MessageSquare className="h-6 w-6" />,
            gradient: "from-[#4eaed0] to-[#667eea]",
          },
          {
            number: "02",
            title: "We build your case",
            description:
              "Watch your events and documents come together as an interactive timeline.",
            icon: <Activity className="h-6 w-6" />,
            gradient: "from-[#667eea] to-[#764ba2]",
          },
          {
            number: "03",
            title: "Get your risk report",
            description:
              "Identifying potential risks and tactics so you can take action before escalation.",
            icon: <ShieldCheck className="h-6 w-6" />,
            gradient: "from-[#764ba2] to-[#f472b6]",
          },
          {
            number: "04",
            title: "Download your dossier",
            description:
              "A complete, organized packet ready for court, mediation, or attorney review.",
            icon: <CheckCircle2 className="h-6 w-6" />,
            gradient: "from-[#f472b6] to-orange-500",
          },
          {
            number: "05",
            title: "File confidently",
            description:
              "We guide you through jurisdiction-specific forms to help you submit correctly the first time.",
            icon: <Gavel className="h-6 w-6" />,
            gradient: "from-orange-500 to-amber-500",
          },
          {
            number: "06",
            title: "Lawyers Marketplace",
            description:
              "Choose to reach out to fixed-fee lawyers when you feel professional guidance might help.",
            icon: <Users className="h-6 w-6" />,
            gradient: "from-amber-500 to-[#4eaed0]",
          },
        ],
      },
      cta: {
        title: "Skip the complexity. Get real solutions.",
        subtitle: "The legaltech that finally works. Get a fair shot at justice.",
      },
      footer: {
        description:
          "Legali empowers the 'missing middle' to pursue justice with confidence through technology.",
        copyright: "© 2024 Legali AI. All rights reserved.",
        disclaimer: "Legali is not a law firm and does not provide legal advice.",
      },
    },
  },
};

export const WithCustomText: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
    textConfig: {
      hero: {
        badgeText: "Powered by AI",
        headline: "Your Legal Partner",
        subtitle: "Get instant legal guidance with our AI-powered platform.",
        analyzeButtonText: "Get Started",
      },
      header: {
        loginLabel: "Sign In",
        ctaLabel: "Start Free Trial",
      },
      cta: {
        subtitle: "Start your free trial today. No credit card required.",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    onGetStarted: () => console.log("Starting your legal journey with Legali AI!"),
    onWatchDemo: () => console.log("Demo video would play here"),
  },
};
