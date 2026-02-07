import { MascotMotion } from "../mascot";
import type {
  CaseAssessment,
  CaseDetails,
  ConsultationScriptStep,
  IntakeChatScriptStep,
  Lawyer,
  ReceiptData,
} from "./marketplace-types";

// ─── Demo Lawyers ─────────────────────────────────────────────────────────────

export const demoLawyers: Lawyer[] = [
  {
    id: "lawyer-1",
    name: "Dr. Sarah Fischer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
    title: "Family Law Specialist",
    firm: "Fischer & Partners Law Firm",
    specializations: ["Family Law", "Divorce", "Child Custody", "Prenuptial Agreements"],
    rating: 4.9,
    reviewCount: 127,
    consultationFee: 190,
    bio: "Over 15 years of experience in family law. Specialized in amicable divorces and custody agreements. Known for empathetic and solution-oriented counseling.",
    isVerified: true,
    isOnline: true,
  },
  {
    id: "lawyer-2",
    name: "Thomas Miller, LL.M.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Thomas&backgroundColor=c0aede",
    title: "Employment Law Specialist",
    firm: "Miller & Associates",
    specializations: ["Employment Law", "Wrongful Termination", "Discrimination", "Labor Disputes"],
    rating: 4.8,
    reviewCount: 93,
    consultationFee: 220,
    bio: "Specialist in employee rights and wrongful termination protection. Has represented clients in complex employment disputes for over 12 years.",
    isVerified: true,
    isOnline: false,
  },
];

// ─── Intake Chat Script ──────────────────────────────────────────────────────

export const intakeChatScript: IntakeChatScriptStep[] = [
  {
    aiMessage:
      "Welcome to Legali AI! I'm your AI legal assistant. I'll help you find the right lawyer for your situation. What's on your mind?",
    suggestions: [
      "I need help with my divorce",
      "My employer fired me unfairly",
      "I'd like to have a contract reviewed",
    ],
    mascotMotion: MascotMotion.WAVING,
    delayMs: 1000,
  },
  {
    aiMessage:
      "I understand, that sounds stressful. Can you tell me more about your situation? For example: how long has this been going on and what steps have you taken so far?",
    suggestions: [
      "It's been going on for about 3 months",
      "I haven't taken any steps yet",
      "I've already received a letter",
    ],
    mascotMotion: MascotMotion.THINKING,
    delayMs: 1500,
  },
  {
    aiMessage:
      "Thanks for the details. Do you have any documents or records that might be relevant to your case? This will help me better assess the complexity.",
    suggestions: [
      "Yes, I have relevant documents",
      "No documents yet",
      "I'm not sure",
    ],
    mascotMotion: MascotMotion.READING,
    delayMs: 1500,
  },
  {
    aiMessage:
      "Great. To connect you with the right lawyer, I'll need your contact details. Please fill out the form below.",
    mascotMotion: MascotMotion.SPEAKING,
    delayMs: 1200,
    showContactForm: true,
  },
  {
    aiMessage:
      "Thank you! I now have a good picture of your case. Let me summarize my understanding — please confirm whether everything is correct.",
    mascotMotion: MascotMotion.IDEA,
    delayMs: 1000,
  },
];

// ─── Consultation Script ─────────────────────────────────────────────────────

export const consultationScript: ConsultationScriptStep[] = [
  {
    lawyerMessage:
      "Hello! I've received the summary of your case from Legali AI. Let's discuss your situation in detail.",
    delayMs: 1500,
  },
  {
    lawyerMessage:
      "Based on the information so far, I see several important aspects we should clarify. Do you have any questions before we begin?",
    delayMs: 2000,
  },
  {
    lawyerMessage:
      "I've now prepared an initial assessment of your case. Let me present my analysis to you.",
    delayMs: 2500,
    showAssessment: true,
  },
];

// ─── Pre-built Case Details ──────────────────────────────────────────────────

export const demoCaseDetails: CaseDetails = {
  category: "Family Law",
  summary:
    "Amicable divorce after 8 years of marriage. Both parties seek a fair division of shared assets and a custody agreement for two minor children.",
  keyFacts: [
    "Marriage duration: 8 years",
    "2 children together (ages 6 and 9)",
    "Shared real estate property",
    "Both parties employed",
    "Amicable separation desired",
  ],
  complexity: "medium",
  urgency: "normal",
  recommendedSpecialization: "Family Law",
  attachments: [],
  contactInfo: {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "+1 555 123 4567",
  },
};

// ─── Pre-built Case Assessment ───────────────────────────────────────────────

export const demoCaseAssessment: CaseAssessment = {
  summary:
    "The case has good prospects for an amicable resolution. The willingness of both parties to cooperate is a decisive positive factor.",
  strengths: [
    "Mutual agreement between both parties",
    "Clear financial situation",
    "Both parents cooperative regarding custody",
    "No contentious alimony issues",
  ],
  concerns: [
    "Property valuation may become complex",
    "Tax implications of asset division need attention",
    "Visitation rights must be defined in detail",
  ],
  recommendedSteps: [
    "Prepare asset inventory for both parties",
    "Commission property appraisal",
    "Draft divorce settlement agreement",
    "Work out custody and visitation arrangement",
    "Prepare notarization of agreements",
  ],
  timeline: "3-6 months",
  costRange: "$2,500 - $4,500",
  decision: "accepted",
};

// ─── Pre-built Receipt ───────────────────────────────────────────────────────

export const demoReceipt: ReceiptData = {
  lawyer: demoLawyers[0],
  caseDetails: demoCaseDetails,
  assessment: demoCaseAssessment,
  duration: 32,
  lineItems: [
    { label: "Initial consultation (30 min)", amount: 190 },
    { label: "Platform fee", amount: 0 },
    { label: "Tax", amount: 36.1 },
  ],
  total: 226.1,
  nextSteps: [
    "Prepare asset inventory before the next appointment",
    "Gather relevant documents (property deed, income records)",
    "Confirm follow-up appointment in 2 weeks",
    "For questions, contact directly through the platform",
  ],
  referenceNumber: "LEG-2025-001847",
};

// ─── Matching Search Messages ────────────────────────────────────────────────

export const matchingSearchMessages: string[] = [
  "Analyzing your legal needs...",
  "Searching for specialized lawyers...",
  "Checking availability and ratings...",
  "Optimizing compatibility...",
  "Perfect match found!",
];
