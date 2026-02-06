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
    title: "Fachanwältin für Familienrecht",
    firm: "Fischer & Partner Rechtsanwälte",
    specializations: ["Family Law", "Divorce", "Child Custody", "Prenuptial Agreements"],
    rating: 4.9,
    reviewCount: 127,
    consultationFee: 190,
    bio: "Über 15 Jahre Erfahrung im Familienrecht. Spezialisiert auf einvernehmliche Scheidungen und Sorgerechtsvereinbarungen. Bekannt für empathische und lösungsorientierte Beratung.",
    isVerified: true,
    isOnline: true,
  },
  {
    id: "lawyer-2",
    name: "Thomas Müller, LL.M.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Thomas&backgroundColor=c0aede",
    title: "Fachanwalt für Arbeitsrecht",
    firm: "Müller & Kollegen",
    specializations: ["Employment Law", "Wrongful Termination", "Discrimination", "Labor Disputes"],
    rating: 4.8,
    reviewCount: 93,
    consultationFee: 220,
    bio: "Spezialist für Arbeitnehmerrechte und Kündigungsschutz. Vertritt seit über 12 Jahren Mandanten in komplexen arbeitsrechtlichen Streitigkeiten vor deutschen Arbeitsgerichten.",
    isVerified: true,
    isOnline: false,
  },
];

// ─── Intake Chat Script ──────────────────────────────────────────────────────

export const intakeChatScript: IntakeChatScriptStep[] = [
  {
    aiMessage:
      "Willkommen bei Legali AI! 👋 Ich bin Ihr KI-Rechtsassistent. Ich helfe Ihnen, den passenden Anwalt für Ihr Anliegen zu finden. Was beschäftigt Sie?",
    suggestions: [
      "Ich brauche Hilfe bei meiner Scheidung",
      "Mein Arbeitgeber hat mir ungerechtfertigt gekündigt",
      "Ich möchte einen Vertrag prüfen lassen",
    ],
    mascotMotion: MascotMotion.WAVING,
    delayMs: 1000,
  },
  {
    aiMessage:
      "Verstehe, das klingt belastend. Können Sie mir mehr über Ihre Situation erzählen? Zum Beispiel: Seit wann besteht das Problem und was haben Sie bereits unternommen?",
    suggestions: [
      "Es geht seit ca. 3 Monaten",
      "Ich habe noch nichts unternommen",
      "Ich habe bereits einen Brief erhalten",
    ],
    mascotMotion: MascotMotion.THINKING,
    delayMs: 1500,
  },
  {
    aiMessage:
      "Danke für die Details. Gibt es Dokumente oder Unterlagen, die für Ihren Fall relevant sein könnten? Das hilft mir, die Komplexität besser einzuschätzen.",
    suggestions: [
      "Ja, ich habe relevante Dokumente",
      "Nein, noch keine Dokumente",
      "Ich bin mir nicht sicher",
    ],
    mascotMotion: MascotMotion.READING,
    delayMs: 1500,
  },
  {
    aiMessage:
      "Sehr gut. Um Sie mit dem passenden Anwalt zu verbinden, brauche ich noch Ihre Kontaktdaten. Bitte füllen Sie das folgende Formular aus.",
    mascotMotion: MascotMotion.SPEAKING,
    delayMs: 1200,
    showContactForm: true,
  },
  {
    aiMessage:
      "Vielen Dank! Ich habe jetzt ein gutes Bild von Ihrem Fall. Lassen Sie mich mein Verständnis zusammenfassen — bitte bestätigen Sie, ob alles korrekt ist.",
    mascotMotion: MascotMotion.IDEA,
    delayMs: 1000,
  },
];

// ─── Consultation Script ─────────────────────────────────────────────────────

export const consultationScript: ConsultationScriptStep[] = [
  {
    lawyerMessage:
      "Guten Tag! Ich habe die Zusammenfassung Ihres Falles von Legali AI erhalten. Lassen Sie uns Ihre Situation im Detail besprechen.",
    delayMs: 1500,
  },
  {
    lawyerMessage:
      "Basierend auf den bisherigen Informationen sehe ich hier einige wichtige Aspekte, die wir klären sollten. Haben Sie Fragen, bevor wir beginnen?",
    delayMs: 2000,
  },
  {
    lawyerMessage:
      "Ich habe nun eine erste Einschätzung Ihres Falles vorbereitet. Lassen Sie mich Ihnen meine Analyse vorstellen.",
    delayMs: 2500,
    showAssessment: true,
  },
];

// ─── Pre-built Case Details ──────────────────────────────────────────────────

export const demoCaseDetails: CaseDetails = {
  category: "Familienrecht",
  summary:
    "Einvernehmliche Scheidung nach 8 Jahren Ehe. Beide Parteien wünschen eine faire Aufteilung des gemeinsamen Vermögens und eine Sorgerechtsvereinbarung für zwei minderjährige Kinder.",
  keyFacts: [
    "Ehedauer: 8 Jahre",
    "2 gemeinsame Kinder (6 und 9 Jahre)",
    "Gemeinsame Immobilie vorhanden",
    "Beide Parteien berufstätig",
    "Einvernehmliche Trennung angestrebt",
  ],
  complexity: "medium",
  urgency: "normal",
  recommendedSpecialization: "Family Law",
  attachments: [],
  contactInfo: {
    firstName: "Max",
    lastName: "Mustermann",
    email: "max.mustermann@example.com",
    phone: "+49 170 1234567",
  },
};

// ─── Pre-built Case Assessment ───────────────────────────────────────────────

export const demoCaseAssessment: CaseAssessment = {
  summary:
    "Der Fall hat gute Aussichten auf eine einvernehmliche Lösung. Die Bereitschaft beider Parteien zur Kooperation ist ein entscheidender positiver Faktor.",
  strengths: [
    "Einvernehmliche Einigung beider Parteien",
    "Klare Vermögensverhältnisse",
    "Beide Elternteile kooperationsbereit beim Sorgerecht",
    "Keine strittigen Unterhaltsfragen",
  ],
  concerns: [
    "Immobilienbewertung kann komplex werden",
    "Steuerliche Aspekte bei Vermögensaufteilung beachten",
    "Umgangsrecht muss im Detail geregelt werden",
  ],
  recommendedSteps: [
    "Vermögensaufstellung beider Parteien erstellen",
    "Immobiliengutachten in Auftrag geben",
    "Entwurf einer Scheidungsfolgenvereinbarung",
    "Sorgerechts- und Umgangsregelung ausarbeiten",
    "Notarielle Beurkundung vorbereiten",
  ],
  timeline: "3-6 Monate",
  costRange: "€2.500 – €4.500",
  decision: "accepted",
};

// ─── Pre-built Receipt ───────────────────────────────────────────────────────

export const demoReceipt: ReceiptData = {
  lawyer: demoLawyers[0],
  caseDetails: demoCaseDetails,
  assessment: demoCaseAssessment,
  duration: 32,
  lineItems: [
    { label: "Erstberatung (30 Min.)", amount: 190 },
    { label: "Plattformgebühr", amount: 0 },
    { label: "MwSt. (19%)", amount: 36.1 },
  ],
  total: 226.1,
  nextSteps: [
    "Vermögensaufstellung bis zum nächsten Termin vorbereiten",
    "Relevante Dokumente (Grundbuchauszug, Einkommensnachweise) zusammenstellen",
    "Folgetermin in 2 Wochen bestätigen",
    "Bei Fragen direkt über die Plattform Kontakt aufnehmen",
  ],
  referenceNumber: "LEG-2025-001847",
};

// ─── Matching Search Messages ────────────────────────────────────────────────

export const matchingSearchMessages: string[] = [
  "Analysiere Ihren Rechtsbedarf…",
  "Suche Fachanwälte für Familienrecht…",
  "Prüfe Verfügbarkeit und Bewertungen…",
  "Optimiere Kompatibilität…",
  "Perfekte Übereinstimmung gefunden!",
];
