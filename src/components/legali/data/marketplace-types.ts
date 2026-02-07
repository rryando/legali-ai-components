import type { MascotMotionType } from "../mascot";

// ─── Chat Types ───────────────────────────────────────────────────────────────

export type ChatSender = "user" | "ai" | "lawyer" | "system";

export interface ChatAttachment {
  id: string;
  type: "image" | "document" | "pdf";
  name: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: Date;
  attachments?: ChatAttachment[];
}

// ─── Contact / Case Types ─────────────────────────────────────────────────────

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export type CaseComplexity = "low" | "medium" | "high";
export type CaseUrgency = "low" | "normal" | "urgent";

export interface CaseDetails {
  category: string;
  summary: string;
  keyFacts: string[];
  complexity: CaseComplexity;
  urgency: CaseUrgency;
  recommendedSpecialization: string;
  attachments: ChatAttachment[];
  contactInfo: ContactInfo;
}

// ─── Lawyer Types ─────────────────────────────────────────────────────────────

export interface Lawyer {
  id: string;
  name: string;
  avatar: string;
  title: string;
  firm: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  consultationFee: number;
  bio: string;
  isVerified: boolean;
  isOnline: boolean;
}

export interface MatchingCriteria {
  caseCategory: string;
  specialization: string;
  urgency: CaseUrgency;
}

// ─── Assessment Types ─────────────────────────────────────────────────────────

export type CaseDecision = "accepted" | "declined" | "referred";

export interface CaseAssessment {
  summary: string;
  strengths: string[];
  concerns: string[];
  recommendedSteps: string[];
  timeline: string;
  costRange: string;
  decision: CaseDecision;
}

// ─── Receipt Types ────────────────────────────────────────────────────────────

export interface ReceiptLineItem {
  label: string;
  amount: number;
}

export interface ReceiptData {
  lawyer: Lawyer;
  caseDetails: CaseDetails;
  assessment: CaseAssessment;
  duration: number;
  lineItems: ReceiptLineItem[];
  total: number;
  nextSteps: string[];
  referenceNumber: string;
}

// ─── Script Types ─────────────────────────────────────────────────────────────

export interface IntakeChatScriptStep {
  aiMessage: string;
  suggestions?: string[];
  mascotMotion?: MascotMotionType;
  delayMs?: number;
  showContactForm?: boolean;
}

export interface ConsultationScriptStep {
  lawyerMessage: string;
  delayMs?: number;
  showAssessment?: boolean;
}

// ─── Flow Types ───────────────────────────────────────────────────────────────

export type MarketplaceStep = "intake" | "matching" | "consultation" | "receipt";

export interface MarketplaceFlowState {
  currentStep: MarketplaceStep;
  caseDetails: CaseDetails | null;
  selectedLawyer: Lawyer | null;
  assessment: CaseAssessment | null;
  receipt: ReceiptData | null;
  chatMessages: ChatMessage[];
  consultationMessages: ChatMessage[];
}

// ─── Lawyer-Side Marketplace Types ───────────────────────────────────────────

export type CaseRequestStatus = "new" | "pending" | "in_progress";

export interface CaseRequest {
  id: string;
  clientName: string;
  caseDetails: CaseDetails;
  status: CaseRequestStatus;
  submittedAt: Date;
  platformFee: number;
}

export interface LawyerConsultationScriptStep {
  sender: "lawyer" | "user";
  message: string;
  delayMs?: number;
  mascotMotion?: MascotMotionType;
  showAssessmentForm?: boolean;
}

export interface AssessmentWritingScriptStep {
  fieldKey: string;
  value: string;
  delayMs?: number;
  mascotMotion?: MascotMotionType;
}

export interface PayoutLineItem {
  label: string;
  amount: number;
  isDeduction?: boolean;
}

export interface PayoutData {
  lawyer: Lawyer;
  caseDetails: CaseDetails;
  assessment: CaseAssessment;
  duration: number;
  lineItems: PayoutLineItem[];
  grossAmount: number;
  deductions: number;
  netPayout: number;
  nextSteps: string[];
  referenceNumber: string;
  payoutDate: string;
}

export type LawyerMarketplaceStep =
  | "dashboard"
  | "case-review"
  | "consultation"
  | "assessment"
  | "payout";

export interface LawyerMarketplaceFlowState {
  currentStep: LawyerMarketplaceStep;
  caseRequests: CaseRequest[];
  selectedCase: CaseRequest | null;
  assessment: CaseAssessment | null;
  payout: PayoutData | null;
  consultationMessages: ChatMessage[];
  currentLawyer: Lawyer;
}
