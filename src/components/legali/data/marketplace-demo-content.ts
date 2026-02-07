import { MascotMotion } from "../mascot";
import type {
  AssessmentWritingScriptStep,
  CaseAssessment,
  CaseDetails,
  CaseRequest,
  ConsultationScriptStep,
  IntakeChatScriptStep,
  Lawyer,
  LawyerConsultationScriptStep,
  PayoutData,
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
    suggestions: ["Yes, I have relevant documents", "No documents yet", "I'm not sure"],
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

// ─── Lawyer-Side Demo Content ───────────────────────────────────────────────

export const demoCaseRequests: CaseRequest[] = [
  {
    id: "case-req-1",
    clientName: "John Smith",
    caseDetails: {
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
    },
    status: "new",
    submittedAt: new Date(Date.now() - 1000 * 60 * 15),
    platformFee: 17,
  },
  {
    id: "case-req-2",
    clientName: "Emily Davis",
    caseDetails: {
      category: "Family Law",
      summary:
        "Child custody modification request. Primary custody parent relocating for work and needs to adjust the existing custody arrangement.",
      keyFacts: [
        "Existing custody agreement in place",
        "1 child (age 11)",
        "Relocation for employment",
        "Both parents cooperative",
      ],
      complexity: "low",
      urgency: "urgent",
      recommendedSpecialization: "Family Law",
      attachments: [],
      contactInfo: {
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.davis@example.com",
        phone: "+1 555 987 6543",
      },
    },
    status: "pending",
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    platformFee: 17,
  },
  {
    id: "case-req-3",
    clientName: "Michael Chen",
    caseDetails: {
      category: "Family Law",
      summary:
        "Prenuptial agreement drafting. Couple with significant assets seeking a comprehensive prenuptial agreement before marriage.",
      keyFacts: [
        "Both parties have pre-existing assets",
        "Combined net worth over $500k",
        "Wedding planned in 4 months",
        "Both have prior marriages",
      ],
      complexity: "high",
      urgency: "normal",
      recommendedSpecialization: "Family Law",
      attachments: [],
      contactInfo: {
        firstName: "Michael",
        lastName: "Chen",
        email: "michael.chen@example.com",
        phone: "+1 555 456 7890",
      },
    },
    status: "in_progress",
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    platformFee: 17,
  },
];

export const lawyerConsultationScript: LawyerConsultationScriptStep[] = [
  {
    sender: "lawyer",
    message:
      "Hello John, I'm Dr. Sarah Fischer. I've reviewed your case details submitted through Legali AI. Thank you for the thorough summary.",
    delayMs: 1500,
    mascotMotion: MascotMotion.SPEAKING,
  },
  {
    sender: "user",
    message:
      "Thank you, Dr. Fischer. We're hoping to keep this as amicable as possible for the kids.",
    delayMs: 2000,
  },
  {
    sender: "lawyer",
    message:
      "That's great to hear. An amicable approach is always best, especially with children involved. I'd like to ask about the real estate — is the property jointly owned?",
    delayMs: 2500,
    mascotMotion: MascotMotion.THINKING,
  },
  {
    sender: "user",
    message: "Yes, we bought it together 6 years ago. We've been making equal mortgage payments.",
    delayMs: 2000,
  },
  {
    sender: "lawyer",
    message:
      "Good, that simplifies the asset division considerably. For the custody arrangement, are you both considering shared custody with equal time?",
    delayMs: 2500,
    mascotMotion: MascotMotion.READING,
  },
  {
    sender: "user",
    message:
      "Yes, we'd like a 50/50 arrangement. We live close to each other and the kids' school.",
    delayMs: 2000,
  },
  {
    sender: "lawyer",
    message:
      "Excellent. Based on everything we've discussed, I have a very positive outlook on your case. Let me prepare my formal assessment now.",
    delayMs: 2500,
    mascotMotion: MascotMotion.IDEA,
    showAssessmentForm: true,
  },
];

export const assessmentWritingScript: AssessmentWritingScriptStep[] = [
  {
    fieldKey: "summary",
    value:
      "The case has good prospects for an amicable resolution. The willingness of both parties to cooperate is a decisive positive factor.",
    delayMs: 1500,
    mascotMotion: MascotMotion.SPEAKING,
  },
  {
    fieldKey: "strengths",
    value:
      "Mutual agreement between both parties\nClear financial situation\nBoth parents cooperative regarding custody\nNo contentious alimony issues",
    delayMs: 2000,
    mascotMotion: MascotMotion.THINKING,
  },
  {
    fieldKey: "concerns",
    value:
      "Property valuation may become complex\nTax implications of asset division need attention\nVisitation rights must be defined in detail",
    delayMs: 1800,
    mascotMotion: MascotMotion.READING,
  },
  {
    fieldKey: "recommendedSteps",
    value:
      "Prepare asset inventory for both parties\nCommission property appraisal\nDraft divorce settlement agreement\nWork out custody and visitation arrangement\nPrepare notarization of agreements",
    delayMs: 2000,
    mascotMotion: MascotMotion.SPEAKING,
  },
  {
    fieldKey: "timeline",
    value: "3-6 months",
    delayMs: 1000,
  },
  {
    fieldKey: "costRange",
    value: "$2,500 - $4,500",
    delayMs: 1000,
  },
  {
    fieldKey: "decision",
    value: "accepted",
    delayMs: 1500,
    mascotMotion: MascotMotion.CELEBRATE,
  },
];

export const demoPayout: PayoutData = {
  lawyer: demoLawyers[0],
  caseDetails: demoCaseDetails,
  assessment: demoCaseAssessment,
  duration: 32,
  lineItems: [
    { label: "Initial consultation (30 min)", amount: 190 },
    { label: "Platform fee (10%)", amount: -19, isDeduction: true },
    { label: "Payment processing (2%)", amount: -3.8, isDeduction: true },
    { label: "Insurance contribution", amount: -9.5, isDeduction: true },
  ],
  grossAmount: 190,
  deductions: 32.3,
  netPayout: 157.7,
  nextSteps: [
    "Payout will be processed within 3 business days",
    "Schedule follow-up appointment with client",
    "Upload finalized assessment to case file",
    "Review next pending case in your dashboard",
  ],
  referenceNumber: "LEG-PAY-2025-001847",
  payoutDate: "2025-02-10",
};

export const dashboardAutoPlayDelayMs = 3000;
