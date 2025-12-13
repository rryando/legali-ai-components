import type { Question } from "../screens/QuizScreen"
import { MascotMotion } from "../mascot"
import type { QuizMascotScriptStep } from "../composite/QuizMascotPrompt"


export interface LegaliLessonContent {
  id: string
  title: string
  badge: string
  summary: string
  keyPoints: string[]
  quiz: Question[]
}

export interface LegaliModuleContent {
  id: string
  title: string
  subtitle: string
  description: string
  mascotCopy?: string
  lessons: LegaliLessonContent[]
}

const DEMO_QUESTION_READING_SCRIPT: QuizMascotScriptStep[] = [
  {
    motion: MascotMotion.WRITING,
    durationMs: 5400,
    lines: ["Take your time.", "Then pick the best answer."],
  },
]

const module1Lessons: LegaliLessonContent[] = [
  {
    id: "module-1-lesson-1",
    title: "Lesson 1.1: Small Claims Basics with Legali",
    badge: "Smart Claims Navigator 🧭",
    summary: "Legali quickly determines whether small claims is the right path and pinpoints the correct court before you invest time completing paperwork.",
    keyPoints: [
      "Eligibility checker reviews claim amount, dispute type, and location to confirm jurisdiction.",
      "Damage calculator guides you through losses and totals them to confirm you are under the limit.",
      "Automated alerts surface statute of limitation risks and recommend the right filing strategy.",
    ],
    quiz: [
      {
        id: "module-1-lesson-1-q1",
        question: "What's the first thing Legali helps you determine?",
        typing: { speedMs: 18, showCursor: true },
        mascot: {
          onReading: DEMO_QUESTION_READING_SCRIPT,
          script: [
            {
              motion: MascotMotion.SPEAKING,
              durationMs: 2600,
              lines: ["Start with the forum.", "Small claims first — then the right court."],
            },
            {
              motion: MascotMotion.THINKING,
              durationMs: null,
              lines: ["Ask: do I qualify?", "Ask: where do I file?", "Then: build the case."],
            },
          ],
          onRevealCorrect: [
            { motion: MascotMotion.CELEBRATE, durationMs: 2200, lines: ["Yes!", "Eligibility + court selection comes first."] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["Now we can move confidently." ] },
          ],
          onRevealIncorrect: [
            { motion: MascotMotion.CONFUSED, durationMs: 2400, lines: ["Not quite.", "First we confirm small claims + venue."] },
            { motion: MascotMotion.SPEAKING, durationMs: 2400, lines: ["First we confirm small claims + venue."] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["Then everything else follows." ] },
          ],
        },
        answers: [
          { id: "A", text: "Whether you need a lawyer", correct: false },
          { id: "B", text: "If your case qualifies for small claims court and which court to file in", correct: true },
          { id: "C", text: "How to find the defendant", correct: false },
          { id: "D", text: "What to wear to court", correct: false },
        ],
        explanation:
          "Legali's eligibility checker evaluates claim amount, location, and dispute type to instantly confirm if small claims is the right forum and identifies the right court.",
      },
      {
        id: "module-1-lesson-1-q2",
        question: "How does Legali check your claim amount eligibility?",
        typing: { speedMs: 18, showCursor: true },
        mascot: {
          onReading: DEMO_QUESTION_READING_SCRIPT,
          script: [
            {
              motion: MascotMotion.SPEAKING,
              durationMs: 2600,
              lines: ["Think: totals.", "What are your losses, in dollars?"],
            },
            {
              motion: MascotMotion.THINKING,
              durationMs: null,
              lines: ["Add damages.", "Add unpaid amounts.", "Include allowed costs."],
            },
          ],
          onRevealCorrect: [
            { motion: MascotMotion.CELEBRATE, durationMs: 2200, lines: ["Correct!", "Legali guides the math with prompts."] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["That keeps you under the limit." ] },
          ],
          onRevealIncorrect: [
            { motion: MascotMotion.CONFUSED, durationMs: 2400, lines: ["Nope.", "Legali helps calculate — it’s not guessing." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["The calculator walks you through it." ] },
          ],
        },
        answers: [
          { id: "A", text: "You have to calculate it yourself", correct: false },
          { id: "B", text: "Legali's damage calculator walks you through adding up losses with smart prompts", correct: true },
          { id: "C", text: "Legali guesses based on your story", correct: false },
          { id: "D", text: "You need an accountant", correct: false },
        ],
        explanation:
          "Targeted prompts help you enter property damage, unpaid bills, and lost wages so Legali can total everything automatically.",
      },
      {
        id: "module-1-lesson-1-q3",
        question: "What happens if Legali finds your claim is too large for small claims?",
        typing: { speedMs: 18, showCursor: true },
        mascot: {
          onReading: DEMO_QUESTION_READING_SCRIPT,
          script: [
            {
              motion: MascotMotion.SPEAKING,
              durationMs: 2600,
              lines: ["Two paths.", "Waive down, or file in civil."],
            },
            {
              motion: MascotMotion.THINKING,
              durationMs: null,
              lines: ["Is speed worth waiving?", "Or do you need full damages?"],
            },
          ],
          onRevealCorrect: [
            { motion: MascotMotion.CELEBRATE, durationMs: 2200, lines: ["That’s it.", "Reduce the claim or choose civil." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["Strategy depends on your goal." ] },
          ],
          onRevealIncorrect: [
            { motion: MascotMotion.SHRUG, durationMs: 2200, lines: ["Not exactly.", "Legali suggests options — it doesn’t reject you." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2400, lines: ["You pick: waive or switch tracks." ] },
          ],
        },
        answers: [
          { id: "A", text: "You're out of luck", correct: false },
          { id: "B", text: "Legali recommends whether to reduce your claim or use the civil litigation pathway", correct: true },
          { id: "C", text: "Legali rejects your case", correct: false },
          { id: "D", text: "Legali automatically reduces it", correct: false },
        ],
        explanation:
          "You can waive part of the claim to remain in small claims or Legali guides you to the appropriate civil filing with templates.",
      },
      {
        id: "module-1-lesson-1-q4",
        question: "How does Legali help with the statute of limitations?",
        typing: { speedMs: 18, showCursor: true },
        mascot: {
          onReading: DEMO_QUESTION_READING_SCRIPT,
          script: [
            {
              motion: MascotMotion.SPEAKING,
              durationMs: 2600,
              lines: ["Timing matters.", "Deadlines can end the case."],
            },
            {
              motion: MascotMotion.THINKING,
              durationMs: null,
              lines: ["Enter the incident date.", "Legali checks the limit.", "Then warns early."],
            },
          ],
          onRevealCorrect: [
            { motion: MascotMotion.CELEBRATE, durationMs: 2200, lines: ["Yes.", "It flags deadline risk immediately." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["No surprises on timing." ] },
          ],
          onRevealIncorrect: [
            { motion: MascotMotion.CONFUSED, durationMs: 2400, lines: ["Not quite.", "Legali can’t extend deadlines — it warns you." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["Think alerts, not magic." ] },
          ],
        },
        answers: [
          { id: "A", text: "It doesn't — you need to check yourself", correct: false },
          { id: "B", text: "Legali flags timing risks as soon as you enter your incident date", correct: true },
          { id: "C", text: "Legali files automatically", correct: false },
          { id: "D", text: "Legali extends the deadline", correct: false },
        ],
        explanation:
          "The platform knows deadlines for each claim type, so it alerts you when dates are approaching or past due and provides exact cutoffs.",
      },
      {
        id: "module-1-lesson-1-q5",
        question: "What if you're not sure what type of case you have?",
        typing: { speedMs: 18, showCursor: true },
        mascot: {
          onReading: DEMO_QUESTION_READING_SCRIPT,
          script: [
            {
              motion: MascotMotion.SPEAKING,
              durationMs: 2600,
              lines: ["Classification helps.", "The claim type drives the rules."],
            },
            {
              motion: MascotMotion.THINKING,
              durationMs: null,
              lines: ["Answer a few questions.", "Legali routes you.", "Then you build that claim."],
            },
          ],
          onRevealCorrect: [
            { motion: MascotMotion.CELEBRATE, durationMs: 2200, lines: ["Right!", "A simple classifier guides you." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["No need to guess." ] },
          ],
          onRevealIncorrect: [
            { motion: MascotMotion.SHRUG, durationMs: 2400, lines: ["Nope.", "Legali can still help by identifying the claim type." ] },
            { motion: MascotMotion.SPEAKING, durationMs: 2200, lines: ["Describe it plainly — then route." ] },
          ],
        },
        answers: [
          { id: "A", text: "Legali won't help", correct: false },
          { id: "B", text: "A case classifier asks simple questions and identifies the claim type", correct: true },
          { id: "C", text: "You must hire a lawyer", correct: false },
          { id: "D", text: "Pick randomly", correct: false },
        ],
        explanation:
          "Describe your situation in plain English and Legali's classifier routes you to breach of contract, property damage, personal injury, or the relevant pathway.",
      },
    ],
  },
  {
    id: "module-1-lesson-2",
    title: "Lesson 1.2: Legali's Case Building Interview",
    badge: "Story Teller Pro 📖",
    summary: "Gather every fact, upload evidence, and build a persuasive narrative through Legali's guided interview experience.",
    keyPoints: [
      "Conversational intake adapts to your answers so you only answer relevant questions.",
      "Progress saves automatically with reminders about missing information and documents.",
      "Smart prompts keep language factual and highlight gaps judges care about.",
    ],
    quiz: [
      {
        id: "module-1-lesson-2-q1",
        question: "How does Legali gather your case information?",
        answers: [
          { id: "A", text: "Using a 50-page form", correct: false },
          { id: "B", text: "Through a conversational interview that adapts to you", correct: true },
          { id: "C", text: "You upload everything manually", correct: false },
          { id: "D", text: "A lawyer calls you", correct: false },
        ],
        explanation:
          "Legali prompts you one question at a time, branching based on your responses to keep the process personalized.",
      },
      {
        id: "module-1-lesson-2-q2",
        question: "What if you don't have all the information during the interview?",
        answers: [
          { id: "A", text: "You can't proceed", correct: false },
          { id: "B", text: "Legali saves progress and reminds you what to gather", correct: true },
          { id: "C", text: "You must start over", correct: false },
          { id: "D", text: "It files an incomplete case", correct: false },
        ],
        explanation:
          "You can pause anytime, and Legali provides a checklist of missing details plus why each item matters.",
      },
      {
        id: "module-1-lesson-2-q3",
        question: "How does Legali help you tell your story effectively?",
        answers: [
          { id: "A", text: "It doesn't — you're on your own", correct: false },
          { id: "B", text: "Smart prompts guide you to include key facts judges need", correct: true },
          { id: "C", text: "It rewrites everything", correct: false },
          { id: "D", text: "You must use legal language", correct: false },
        ],
        explanation:
          "Prompts such as 'Have you mentioned when this happened?' ensure your statement is complete and court-ready.",
      },
      {
        id: "module-1-lesson-2-q4",
        question: "What happens if you use emotional language in your story?",
        answers: [
          { id: "A", text: "Legali keeps it as-is", correct: false },
          { id: "B", text: "The system suggests factual phrasing while keeping your meaning", correct: true },
          { id: "C", text: "Your case is rejected", correct: false },
          { id: "D", text: "A lawyer edits it", correct: false },
        ],
        explanation:
          "If you type 'He's a terrible person,' Legali offers courtroom-friendly alternatives that preserve the facts.",
      },
      {
        id: "module-1-lesson-2-q5",
        question: "Can you upload supporting documents during the interview?",
        answers: [
          { id: "A", text: "No, documents come later", correct: false },
          { id: "B", text: "Yes, and Legali auto-organizes and tags them", correct: true },
          { id: "C", text: "Only PDFs work", correct: false },
          { id: "D", text: "You can upload only one document", correct: false },
        ],
        explanation:
          "Contracts, photos, and texts drop right into the flow where Legali categorizes them and extracts key data.",
      },
    ],
  },
  {
    id: "module-1-lesson-3",
    title: "Lesson 1.3: Understanding Your Options with Legali",
    badge: "Strategy Selector 🎯",
    summary: "Legali analyzes your facts to show strengths, suggest settlement moves, and clarify costs before you file.",
    keyPoints: [
      "Personalized assessment highlights strengths, weaknesses, and win probability.",
      "Settlement tools provide demand letters, calculators, and agreement templates.",
      "Transparent cost breakdown includes filing, service, and time estimates plus fee-waiver automation.",
    ],
    quiz: [
      {
        id: "module-1-lesson-3-q1",
        question: "After you complete the interview, what does Legali provide?",
        answers: [
          { id: "A", text: "Just a completed form", correct: false },
          { id: "B", text: "A personalized case assessment with strengths, weaknesses, and win probability", correct: true },
          { id: "C", text: "Nothing", correct: false },
          { id: "D", text: "A bill", correct: false },
        ],
        explanation:
          "Legali compares your facts to prior outcomes and explains pros, cons, and confidence level.",
      },
      {
        id: "module-1-lesson-3-q2",
        question: "How does Legali help you decide whether to settle or file?",
        answers: [
          { id: "A", text: "It leaves you to guess", correct: false },
          { id: "B", text: "Shows settlement probabilities and generates a demand letter", correct: true },
          { id: "C", text: "Always recommends filing", correct: false },
          { id: "D", text: "Flips a coin", correct: false },
        ],
        explanation:
          "You see success data, get a professional demand letter, and can track responses before filing.",
      },
      {
        id: "module-1-lesson-3-q3",
        question: "What if the defendant wants to settle after seeing your demand letter?",
        answers: [
          { id: "A", text: "You're on your own", correct: false },
          { id: "B", text: "Legali provides a settlement calculator and agreement", correct: true },
          { id: "C", text: "You must accept their offer", correct: false },
          { id: "D", text: "You have to hire a mediator", correct: false },
        ],
        explanation:
          "Enter their offer to compare against filing costs and timelines, then auto-generate the agreement if you accept.",
      },
      {
        id: "module-1-lesson-3-q4",
        question: "How does Legali help you understand court costs?",
        answers: [
          { id: "A", text: "You must research fees yourself", correct: false },
          { id: "B", text: "Legali shows exact filing fees, service costs, and time investment", correct: true },
          { id: "C", text: "All cases cost the same", correct: false },
          { id: "D", text: "Costs stay hidden", correct: false },
        ],
        explanation:
          "Upfront breakdowns outline filing fee ranges, service costs, and estimated hours in court.",
      },
      {
        id: "module-1-lesson-3-q5",
        question: "What if you qualify for a fee waiver?",
        answers: [
          { id: "A", text: "Legali doesn't handle that", correct: false },
          { id: "B", text: "It detects eligibility, auto-fills the waiver, and adds it to your packet", correct: true },
          { id: "C", text: "You must apply separately", correct: false },
          { id: "D", text: "Fee waivers don't exist", correct: false },
        ],
        explanation:
          "Once you answer income questions, Legali prepares the waiver for your court and bundles it automatically.",
      },
    ],
  },
  {
    id: "module-1-lesson-4",
    title: "Lesson 1.4: Legali's Smart Document System",
    badge: "Document Master 📄",
    summary: "Auto-populated, court-specific packets with validation and guidance remove guesswork from filings.",
    keyPoints: [
      "Interview answers flow directly into county-specific small claims forms.",
      "Rule-aware validation stops you from submitting incomplete or incorrect packets.",
      "Preview mode explains each section and bundles every required form and instruction.",
    ],
    quiz: [
      {
        id: "module-1-lesson-4-q1",
        question: "How does Legali create your small claims forms?",
        answers: [
          { id: "A", text: "You fill out blank PDFs", correct: false },
          { id: "B", text: "Interview answers auto-populate official forms", correct: true },
          { id: "C", text: "A lawyer fills them", correct: false },
          { id: "D", text: "Generic templates you customize", correct: false },
        ],
        explanation:
          "Every county's form requirements are encoded so the right fields are filled without manual editing.",
      },
      {
        id: "module-1-lesson-4-q2",
        question: "What if your court uses different forms than another county?",
        answers: [
          { id: "A", text: "You have to find them", correct: false },
          { id: "B", text: "Legali automatically uses your court's specific forms", correct: true },
          { id: "C", text: "All courts use the same forms", correct: false },
          { id: "D", text: "You must manually select", correct: false },
        ],
        explanation:
          "Selecting the correct jurisdiction ensures Legali swaps in the exact packets that courthouse requires.",
      },
      {
        id: "module-1-lesson-4-q3",
        question: "How does Legali help you avoid form errors?",
        answers: [
          { id: "A", text: "It doesn't", correct: false },
          { id: "B", text: "Smart validation checks for missing info and logical issues", correct: true },
          { id: "C", text: "A lawyer reviews everything", correct: false },
          { id: "D", text: "The court catches errors", correct: false },
        ],
        explanation:
          "Legali stops you if a defendant address is missing and even offers tools to locate one.",
      },
      {
        id: "module-1-lesson-4-q4",
        question: "Can you preview your documents before filing?",
        answers: [
          { id: "A", text: "No, trust the system", correct: false },
          { id: "B", text: "Yes, with side-by-side tips explaining each section", correct: true },
          { id: "C", text: "Only after payment", correct: false },
          { id: "D", text: "Preview costs extra", correct: false },
        ],
        explanation:
          "You can review the complete packet and hover over fields for context such as how claim amounts were calculated.",
      },
      {
        id: "module-1-lesson-4-q5",
        question: "What does Legali's document packet include?",
        answers: [
          { id: "A", text: "Just the complaint", correct: false },
          { id: "B", text: "All required forms plus instructions for filing and service", correct: true },
          { id: "C", text: "Forms only", correct: false },
          { id: "D", text: "Digital files only", correct: false },
        ],
        explanation:
          "Packets include complaints, cover sheets, fee waivers, filing instructions, service steps, and proof of service forms.",
      },
    ],
  },
]

const module2Lessons: LegaliLessonContent[] = [
  {
    id: "module-2-lesson-1",
    title: "Lesson 2.1: Legali's Filing Pathways",
    badge: "Filing Navigator 🗂️",
    summary: "Whether you e-file or submit packets yourself, Legali explains costs, handles payments, and tracks confirmations.",
    keyPoints: [
      "Choose instant e-filing or download ready-to-print packets for in-person or mail filing.",
      "Direct integrations with courts return stamped documents and case numbers immediately.",
      "Fee transparency shows exact amounts and handles waivers when applicable.",
    ],
    quiz: [
      {
        id: "module-2-lesson-1-q1",
        question: "What filing options does Legali provide?",
        answers: [
          { id: "A", text: "You must file in person", correct: false },
          { id: "B", text: "E-file through Legali or download packets to file yourself", correct: true },
          { id: "C", text: "Mail only", correct: false },
          { id: "D", text: "Fax only", correct: false },
        ],
        explanation:
          "Pick the workflow that matches your court—either click-to-file or a guided DIY packet.",
      },
      {
        id: "module-2-lesson-1-q2",
        question: "How does Legali's e-filing work?",
        answers: [
          { id: "A", text: "Legali emails the court", correct: false },
          { id: "B", text: "Direct integration submits documents with one click", correct: true },
          { id: "C", text: "Legali mails it for you", correct: false },
          { id: "D", text: "E-filing isn't available", correct: false },
        ],
        explanation:
          "You review, click “File Now,” pay, and receive the case number instantly in your dashboard.",
      },
      {
        id: "module-2-lesson-1-q3",
        question: "What if your court doesn't accept e-filing?",
        answers: [
          { id: "A", text: "You can't use Legali", correct: false },
          { id: "B", text: "Legali generates a mail or in-person packet with instructions", correct: true },
          { id: "C", text: "Legali files in a different court", correct: false },
          { id: "D", text: "You must hire a lawyer", correct: false },
        ],
        explanation:
          "Packets include printed forms, courthouse directions, address labels, and checklists tailored to that court.",
      },
      {
        id: "module-2-lesson-1-q4",
        question: "How does Legali help with filing fees?",
        answers: [
          { id: "A", text: "Fees are part of the subscription", correct: false },
          { id: "B", text: "Legali shows exact fees and processes payments or waivers", correct: true },
          { id: "C", text: "Legali keeps the fee", correct: false },
          { id: "D", text: "Filing is free", correct: false },
        ],
        explanation:
          "Fees flow straight to the court, and self-filers see the precise amount to bring or mail.",
      },
      {
        id: "module-2-lesson-1-q5",
        question: "What happens immediately after e-filing through Legali?",
        answers: [
          { id: "A", text: "You wait weeks for confirmation", correct: false },
          { id: "B", text: "You receive an instant case number, stamped docs, and tracking", correct: true },
          { id: "C", text: "Nothing until the court calls", correct: false },
          { id: "D", text: "You must check manually", correct: false },
        ],
        explanation:
          "Case tracking starts automatically with documents saved in your dashboard.",
      },
    ],
  },
  {
    id: "module-2-lesson-2",
    title: "Lesson 2.2: Service Made Easy with Legali",
    badge: "Service Simplifier 📮",
    summary: "Plan, order, and monitor service of process with guided questionnaires and automated proof preparation.",
    keyPoints: [
      "Order professional service or follow detailed DIY instructions.",
      "Service questionnaires collect addresses, schedules, and descriptions to increase success.",
      "Completed service uploads auto-fill proof of service forms and trigger deadline reminders.",
    ],
    quiz: [
      {
        id: "module-2-lesson-2-q1",
        question: "How does Legali help you serve the defendant?",
        answers: [
          { id: "A", text: "You're on your own", correct: false },
          { id: "B", text: "Order a process server or follow detailed DIY instructions", correct: true },
          { id: "C", text: "Legali serves them for you", correct: false },
          { id: "D", text: "Email is enough", correct: false },
        ],
        explanation:
          "You can purchase professional service through vetted partners or follow Legali's step-by-step DIY guide.",
      },
      {
        id: "module-2-lesson-2-q2",
        question: "What information does Legali need to arrange service?",
        answers: [
          { id: "A", text: "Just the defendant's name", correct: false },
          { id: "B", text: "Address, description, and schedule details", correct: true },
          { id: "C", text: "Their Social Security Number", correct: false },
          { id: "D", text: "Nothing — Legali finds them", correct: false },
        ],
        explanation:
          "Providing schedules and work locations helps servers make successful first attempts.",
      },
      {
        id: "module-2-lesson-2-q3",
        question: "How does Legali handle tricky service situations?",
        answers: [
          { id: "A", text: "It refuses difficult cases", correct: false },
          { id: "B", text: "Identifies issues and suggests alternative methods", correct: true },
          { id: "C", text: "Gives up", correct: false },
          { id: "D", text: "Always needs court help", correct: false },
        ],
        explanation:
          "If defendants dodge service, Legali recommends workplace service, substituted service, or alternative service motions.",
      },
      {
        id: "module-2-lesson-2-q4",
        question: "What does Legali provide after service is complete?",
        answers: [
          { id: "A", text: "Nothing", correct: false },
          { id: "B", text: "Auto-filled proof of service forms and deadline tracking", correct: true },
          { id: "C", text: "Only a receipt", correct: false },
          { id: "D", text: "You create proof yourself", correct: false },
        ],
        explanation:
          "Servers upload details into Legali, which then fills the proof forms and reminds you to file them.",
      },
      {
        id: "module-2-lesson-2-q5",
        question: "How does Legali track your service deadline?",
        answers: [
          { id: "A", text: "It doesn't", correct: false },
          { id: "B", text: "Automatic countdown with reminders", correct: true },
          { id: "C", text: "You must set your own reminders", correct: false },
          { id: "D", text: "One notification only", correct: false },
        ],
        explanation:
          "Dashboards display the deadline while email/SMS nudges go out at 14, 7, and 3 days.",
      },
    ],
  },
  {
    id: "module-2-lesson-3",
    title: "Lesson 2.3: Legali's Hearing Management",
    badge: "Hearing Coordinator 📅",
    summary: "Secure hearing dates, manage continuances, and unlock courthouse intelligence without phone tag.",
    keyPoints: [
      "E-filed cases receive automatic dates while DIY filers get scripts and tracking tools.",
      "Entering a hearing date triggers a prep timeline with automated reminders.",
      "Continuance workflows and courthouse guides keep you confident on logistics.",
    ],
    quiz: [
      {
        id: "module-2-lesson-3-q1",
        question: "How does Legali help you get a hearing date?",
        answers: [
          { id: "A", text: "You must call the court", correct: false },
          { id: "B", text: "E-filed cases receive dates automatically; others get scripts and tracking", correct: true },
          { id: "C", text: "Legali calls for you", correct: false },
          { id: "D", text: "No date needed", correct: false },
        ],
        explanation:
          "If your court doesn't assign automatically, Legali gives you the clerk script and a place to log the outcome.",
      },
      {
        id: "module-2-lesson-3-q2",
        question: "What happens when you enter your hearing date in Legali?",
        answers: [
          { id: "A", text: "It's just saved", correct: false },
          { id: "B", text: "Prep timeline, reminders, and checklists activate", correct: true },
          { id: "C", text: "Nothing", correct: false },
          { id: "D", text: "System locks", correct: false },
        ],
        explanation:
          "Legali schedules milestones such as discovery deadlines, witness prep, and final review tasks.",
      },
      {
        id: "module-2-lesson-3-q3",
        question: "How does Legali help if you need to change your hearing date?",
        answers: [
          { id: "A", text: "You're stuck", correct: false },
          { id: "B", text: "It generates a continuance request with filing instructions", correct: true },
          { id: "C", text: "Legali changes it automatically", correct: false },
          { id: "D", text: "You lose your case", correct: false },
        ],
        explanation:
          "Explain the reason, and Legali drafts the continuance motion plus tracks the new date once granted.",
      },
      {
        id: "module-2-lesson-3-q4",
        question: "What courthouse information does Legali provide?",
        answers: [
          { id: "A", text: "Just the address", correct: false },
          { id: "B", text: "Address, parking, security tips, courtroom location, and judge info", correct: true },
          { id: "C", text: "Nothing", correct: false },
          { id: "D", text: "Generic info", correct: false },
        ],
        explanation:
          "With parking rates, entrances, and judge insights, you know exactly what to expect on hearing day.",
      },
      {
        id: "module-2-lesson-3-q5",
        question: "How does Legali help with multiple hearings?",
        answers: [
          { id: "A", text: "It tracks only one", correct: false },
          { id: "B", text: "Dashboard calendar shows all dates color-coded by urgency", correct: true },
          { id: "C", text: "Use your own calendar", correct: false },
          { id: "D", text: "Email reminders only", correct: false },
        ],
        explanation:
          "Every deadline appears on the Legali calendar with contextual prep materials one tap away.",
      },
    ],
  },
  {
    id: "module-2-lesson-4",
    title: "Lesson 2.4: Staying Organized with Legali",
    badge: "Organization Wizard 🗄️",
    summary: "Searchable, categorized workspaces, evidence builders, and mobile access keep your case on track.",
    keyPoints: [
      "Documents auto-file into Filed Docs, Evidence, Correspondence, and Drafts.",
      "Powerful search finds assets by keywords, date, or tags in seconds.",
      "Evidence builder, mobile app, and smart timeline ensure steady progress.",
    ],
    quiz: [
      {
        id: "module-2-lesson-4-q1",
        question: "How does Legali organize your case documents?",
        answers: [
          { id: "A", text: "One big folder", correct: false },
          { id: "B", text: "Auto-categorized folders like Filed Docs and Evidence", correct: true },
          { id: "C", text: "Manual organization", correct: false },
          { id: "D", text: "Chronological only", correct: false },
        ],
        explanation:
          "Each upload lands in the right folder automatically, keeping filings separate from evidence or correspondence.",
      },
      {
        id: "module-2-lesson-4-q2",
        question: "What if you need to find a specific document quickly?",
        answers: [
          { id: "A", text: "Scroll through everything", correct: false },
          { id: "B", text: "Use smart search to filter by keywords or tags", correct: true },
          { id: "C", text: "Download and search locally", correct: false },
          { id: "D", text: "Remember the filename", correct: false },
        ],
        explanation:
          "Search for phrases like 'damage photos' or 'March emails' to surface assets instantly.",
      },
      {
        id: "module-2-lesson-4-q3",
        question: "How does Legali help you prepare evidence?",
        answers: [
          { id: "A", text: "Just stores files", correct: false },
          { id: "B", text: "Evidence builder organizes exhibits and generates exhibit lists", correct: true },
          { id: "C", text: "Prints everything", correct: false },
          { id: "D", text: "You organize manually", correct: false },
        ],
        explanation:
          "Drag-and-drop evidence to create an ordered narrative complete with labeled exhibits.",
      },
      {
        id: "module-2-lesson-4-q4",
        question: "Can you access your case information on mobile?",
        answers: [
          { id: "A", text: "Desktop only", correct: false },
          { id: "B", text: "Yes, with a full mobile app", correct: true },
          { id: "C", text: "Mobile browser only", correct: false },
          { id: "D", text: "No mobile access", correct: false },
        ],
        explanation:
          "Upload photos, review documents, and receive push reminders from the Legali app.",
      },
      {
        id: "module-2-lesson-4-q5",
        question: "How does Legali keep you on track?",
        answers: [
          { id: "A", text: "One reminder at filing", correct: false },
          { id: "B", text: "Smart timeline with automated reminders and checklists", correct: true },
          { id: "C", text: "Weekly email only", correct: false },
          { id: "D", text: "No tracking system", correct: false },
        ],
        explanation:
          "Color-coded progress bars and to-dos show what's next and when it's due.",
      },
    ],
  },
]

const module3Lessons: LegaliLessonContent[] = [
  {
    id: "module-3-lesson-1",
    title: "Lesson 3.1: Legali's Trial Preparation System",
    badge: "Trial Prep Champion 🏆",
    summary: "Build tailored trial scripts, rehearse with AI, and structure your evidence story for court.",
    keyPoints: [
      "Scripts are generated from your facts, covering openings, exhibits, and closings.",
      "Practice mode simulates judge questions and offers feedback.",
      "Evidence sequencing recommendations keep your argument logical and compelling.",
    ],
    quiz: [
      {
        id: "module-3-lesson-1-q1",
        question: "How does Legali help you prepare what to say in court?",
        answers: [
          { id: "A", text: "Generic scripts only", correct: false },
          { id: "B", text: "Custom trial script generator based on your case", correct: true },
          { id: "C", text: "You're on your own", correct: false },
          { id: "D", text: "Pre-recorded videos only", correct: false },
        ],
        explanation:
          "Scripts reflect your defendants, facts, and requested relief so you can rehearse confidently.",
      },
      {
        id: "module-3-lesson-1-q2",
        question: "What does Legali's script include?",
        answers: [
          { id: "A", text: "Just an opening statement", correct: false },
          { id: "B", text: "Opening, evidence presentation, closing, and objection responses", correct: true },
          { id: "C", text: "A paragraph to memorize", correct: false },
          { id: "D", text: "Only what to say if you win", correct: false },
        ],
        explanation:
          "From greeting the judge to introducing exhibits and responding to objections, everything is mapped out.",
      },
      {
        id: "module-3-lesson-1-q3",
        question: "How does Legali help you practice?",
        answers: [
          { id: "A", text: "No practice tools", correct: false },
          { id: "B", text: "Interactive practice mode with AI judge", correct: true },
          { id: "C", text: "Just read the script", correct: false },
          { id: "D", text: "Schedule live coaching", correct: false },
        ],
        explanation:
          "Answer AI judge prompts about damages, timeline, and relief to refine your delivery.",
      },
      {
        id: "module-3-lesson-1-q4",
        question: "What if you're nervous about speaking in court?",
        answers: [
          { id: "A", text: "Legali can't help", correct: false },
          { id: "B", text: "Guided relaxation tips, courtroom simulations, and confidence exercises", correct: true },
          { id: "C", text: "Just get over it", correct: false },
          { id: "D", text: "Bring notes only", correct: false },
        ],
        explanation:
          "Mindfulness prompts, judge walkthroughs, and success stories keep nerves in check.",
      },
      {
        id: "module-3-lesson-1-q5",
        question: "How does Legali organize your evidence presentation?",
        answers: [
          { id: "A", text: "You decide the order", correct: false },
          { id: "B", text: "Suggests optimal sequencing to build a logical story", correct: true },
          { id: "C", text: "Alphabetical order", correct: false },
          { id: "D", text: "Random order", correct: false },
        ],
        explanation:
          "Order exhibits from strongest to supporting pieces so the judge follows your narrative easily.",
      },
    ],
  },
  {
    id: "module-3-lesson-2",
    title: "Lesson 3.2: Evidence Management with Legali",
    badge: "Evidence Organizer 📊",
    summary: "Generate polished exhibit packets with authentication scripts and multimedia support.",
    keyPoints: [
      "Printable packets include exhibit labels, lists, and presentation tips.",
      "Each exhibit entry stores description, date, and relevance to your claims.",
      "Guidance covers physical copies, authentication phrasing, and multimedia logistics.",
    ],
    quiz: [
      {
        id: "module-3-lesson-2-q1",
        question: "How does Legali help you organize physical evidence?",
        answers: [
          { id: "A", text: "Digital only", correct: false },
          { id: "B", text: "Printable evidence packet with labels and exhibit list", correct: true },
          { id: "C", text: "You must organize yourself", correct: false },
          { id: "D", text: "Evidence isn't needed", correct: false },
        ],
        explanation:
          "Click 'Prepare Evidence Packet' to receive labeled copies for the judge, defendant, and yourself.",
      },
      {
        id: "module-3-lesson-2-q2",
        question: "What does Legali's exhibit list include?",
        answers: [
          { id: "A", text: "Just exhibit letters", correct: false },
          { id: "B", text: "Exhibit ID, description, date, and relevance", correct: true },
          { id: "C", text: "A simple numbered list", correct: false },
          { id: "D", text: "Photos only", correct: false },
        ],
        explanation:
          "Each entry spells out what the exhibit proves so the judge and defendant understand instantly.",
      },
      {
        id: "module-3-lesson-2-q3",
        question: "How many copies does Legali tell you to bring?",
        answers: [
          { id: "A", text: "One for yourself", correct: false },
          { id: "B", text: "Three sets plus an extra backup", correct: true },
          { id: "C", text: "As many as possible", correct: false },
          { id: "D", text: "Judge's copy only", correct: false },
        ],
        explanation:
          "Bring packets for the judge, defendant, yourself, and an extra in case a witness or clerk needs one.",
      },
      {
        id: "module-3-lesson-2-q4",
        question: "How does Legali help you authenticate documents?",
        answers: [
          { id: "A", text: "Notarize everything", correct: false },
          { id: "B", text: "Provides scripts for explaining each document", correct: true },
          { id: "C", text: "Documents authenticate themselves", correct: false },
          { id: "D", text: "Court handles it", correct: false },
        ],
        explanation:
          "Legali suggests phrasing like 'This is Exhibit B, an email from the defendant dated March 10.'",
      },
      {
        id: "module-3-lesson-2-q5",
        question: "What if you have videos or audio recordings?",
        answers: [
          { id: "A", text: "You can't use them", correct: false },
          { id: "B", text: "Legali provides format instructions and playback tips", correct: true },
          { id: "C", text: "YouTube links are fine", correct: false },
          { id: "D", text: "Bring your phone only", correct: false },
        ],
        explanation:
          "Export to MP4, bring a laptop or adapter, and include transcripts—Legali walks you through each step.",
      },
    ],
  },
  {
    id: "module-3-lesson-3",
    title: "Lesson 3.3: Witness Preparation with Legali",
    badge: "Witness Coordinator 👥",
    summary: "Coach, coordinate, and compel witnesses with prep packets, subpoenas, and scheduling tools.",
    keyPoints: [
      "Witness prep guides outline likely questions and etiquette.",
      "Auto-generated subpoenas and declarations keep testimony admissible when attendance is an issue.",
      "Recommended testimony order maximizes persuasive impact.",
    ],
    quiz: [
      {
        id: "module-3-lesson-3-q1",
        question: "How does Legali help you prepare witnesses?",
        answers: [
          { id: "A", text: "Witnesses don't need preparation", correct: false },
          { id: "B", text: "Provides prep guides with question lists and mock testimony", correct: true },
          { id: "C", text: "Witnesses figure it out", correct: false },
          { id: "D", text: "Only lawyers can prep", correct: false },
        ],
        explanation:
          "Each witness receives a tailored packet covering questions, demeanor tips, and expectations.",
      },
      {
        id: "module-3-lesson-3-q2",
        question: "What does Legali provide for each witness?",
        answers: [
          { id: "A", text: "Nothing", correct: false },
          { id: "B", text: "Personalized prep packet with etiquette and likely questions", correct: true },
          { id: "C", text: "A script to memorize", correct: false },
          { id: "D", text: "Legal advice", correct: false },
        ],
        explanation:
          "Witness packets explain how to address the judge, pause before answering, and stay factual.",
      },
      {
        id: "module-3-lesson-3-q3",
        question: "How does Legali help with subpoenas?",
        answers: [
          { id: "A", text: "You can't subpoena in small claims", correct: false },
          { id: "B", text: "Generates small claims subpoenas with service instructions", correct: true },
          { id: "C", text: "Court handles all subpoenas", correct: false },
          { id: "D", text: "Subpoenas aren't needed", correct: false },
        ],
        explanation:
          "Enter witness info once and Legali produces court-specific subpoena forms and filing steps.",
      },
      {
        id: "module-3-lesson-3-q4",
        question: "What if your witness can't attend the hearing?",
        answers: [
          { id: "A", text: "You lose their testimony", correct: false },
          { id: "B", text: "Legali guides you through written declarations", correct: true },
          { id: "C", text: "Reschedule the trial", correct: false },
          { id: "D", text: "Defendant wins", correct: false },
        ],
        explanation:
          "Format-compliant declarations preserve testimony when in-person attendance isn't possible.",
      },
      {
        id: "module-3-lesson-3-q5",
        question: "How does Legali help you sequence witness testimony?",
        answers: [
          { id: "A", text: "Alphabetical order", correct: false },
          { id: "B", text: "Recommends strategic order so your story builds momentum", correct: true },
          { id: "C", text: "Random order", correct: false },
          { id: "D", text: "Defendant decides", correct: false },
        ],
        explanation:
          "Start with yourself, layer corroborating witnesses, and finish with the most impactful supporter.",
      },
    ],
  },
  {
    id: "module-3-lesson-4",
    title: "Lesson 3.4: Anticipating Defenses with Legali",
    badge: "Defense Predictor 🔮",
    summary: "Forecast common defenses, prep counter-evidence, and rehearse courtroom responses.",
    keyPoints: [
      "Legali lists typical defenses per claim type with suggested counters.",
      "Damage breakdowns and evidence callouts help you rebut challenges instantly.",
      "Scenario guides coach you through surprises like new evidence or cross-examination.",
    ],
    quiz: [
      {
        id: "module-3-lesson-4-q1",
        question: "How does Legali help you prepare for defendant's arguments?",
        answers: [
          { id: "A", text: "It can't predict them", correct: false },
          { id: "B", text: "Shows common defenses and how to counter each", correct: true },
          { id: "C", text: "You wing it", correct: false },
          { id: "D", text: "Ignore their side", correct: false },
        ],
        explanation:
          "For example, security deposit cases highlight claims about existing damage and suggest counter-evidence.",
      },
      {
        id: "module-3-lesson-4-q2",
        question: "What does Legali's defense anticipation tool provide?",
        answers: [
          { id: "A", text: "Just a list of defenses", correct: false },
          { id: "B", text: "Defenses plus your counter-evidence and sample responses", correct: true },
          { id: "C", text: "Generic info", correct: false },
          { id: "D", text: "Nothing specific", correct: false },
        ],
        explanation:
          "You see statements like 'Defense: I already paid' paired with bank records and suggested rebuttals.",
      },
      {
        id: "module-3-lesson-4-q3",
        question: "How does Legali help if defendant claims you're wrong about damages?",
        answers: [
          { id: "A", text: "It doesn't help", correct: false },
          { id: "B", text: "Provides damage breakdowns with receipts", correct: true },
          { id: "C", text: "Reduce your claim", correct: false },
          { id: "D", text: "Argue louder", correct: false },
        ],
        explanation:
          "Visual summaries show each cost, supporting receipt, and legal basis for recovery.",
      },
      {
        id: "module-3-lesson-4-q4",
        question: "What if defendant brings surprise evidence?",
        answers: [
          { id: "A", text: "Panic", correct: false },
          { id: "B", text: "Legali provides courtroom response scripts", correct: true },
          { id: "C", text: "Accept defeat", correct: false },
          { id: "D", text: "Argue without seeing it", correct: false },
        ],
        explanation:
          "Use prompts like 'May I review this before responding?' to stay composed.",
      },
      {
        id: "module-3-lesson-4-q5",
        question: "How does Legali prepare you for cross-examination?",
        answers: [
          { id: "A", text: "No cross-exam in small claims", correct: false },
          { id: "B", text: "Practice questions with suggested honest answers", correct: true },
          { id: "C", text: "Avoid answering", correct: false },
          { id: "D", text: "Say 'I don't know'", correct: false },
        ],
        explanation:
          "Rehearse responses to likely defendant questions so you can stay calm and credible.",
      },
    ],
  },
]

const module4Lessons: LegaliLessonContent[] = [
  {
    id: "module-4-lesson-1",
    title: "Lesson 4.1: Last-Minute Prep with Legali",
    badge: "Final Countdown Master ⏰",
    summary: "Night-before checklists, calming routines, and logistics ensure you arrive ready to present.",
    keyPoints: [
      "24-hour countdown links to print packets, review scripts, and pack essentials.",
      "Court-day checklist covers documents, attire, arrival time, and reminders.",
      "Confidence boosts include meditations, expectation-setting, and courthouse maps.",
    ],
    quiz: [
      {
        id: "module-4-lesson-1-q1",
        question: "What does Legali provide the night before your hearing?",
        answers: [
          { id: "A", text: "Nothing", correct: false },
          { id: "B", text: "Complete hearing checklist, printable materials, and motivation", correct: true },
          { id: "C", text: "Last-minute forms only", correct: false },
          { id: "D", text: "A panic button", correct: false },
        ],
        explanation:
          "You'll see exactly what to print, pack, and review so you're confident walking into court.",
      },
      {
        id: "module-4-lesson-1-q2",
        question: "What's in Legali's court day checklist?",
        answers: [
          { id: "A", text: "Just documents", correct: false },
          { id: "B", text: "Documents, evidence, notepad, dress tips, and timing", correct: true },
          { id: "C", text: "Whatever you remember", correct: false },
          { id: "D", text: "Legali app only", correct: false },
        ],
        explanation:
          "The checklist covers copies, supplies, attire, and arrival buffers for a stress-free morning.",
      },
      {
        id: "module-4-lesson-1-q3",
        question: "How does Legali help with morning-of jitters?",
        answers: [
          { id: "A", text: "It doesn't", correct: false },
          { id: "B", text: "Quick meditation, key point review, and encouragement", correct: true },
          { id: "C", text: "Tells you to calm down", correct: false },
          { id: "D", text: "Offers medical advice", correct: false },
        ],
        explanation:
          "Guided breathing and positive reminders reinforce that you're prepared and supported.",
      },
      {
        id: "module-4-lesson-1-q4",
        question: "What if you can't find the courtroom?",
        answers: [
          { id: "A", text: "You're late", correct: false },
          { id: "B", text: "Legali provides maps, department numbers, and clerk contacts", correct: true },
          { id: "C", text: "Ask random people", correct: false },
          { id: "D", text: "Give up", correct: false },
        ],
        explanation:
          "Directions include which entrance, floor, and phone number to use if you get lost.",
      },
      {
        id: "module-4-lesson-1-q5",
        question: "How does Legali remind you about courtroom rules?",
        answers: [
          { id: "A", text: "It doesn't", correct: false },
          { id: "B", text: "Push notification with etiquette reminders", correct: true },
          { id: "C", text: "Assumes you know", correct: false },
          { id: "D", text: "Court tells you", correct: false },
        ],
        explanation:
          "As you arrive, Legali reminds you to silence phones, stand for the judge, and remain respectful.",
      },
    ],
  },
  {
    id: "module-4-lesson-2",
    title: "Lesson 4.2: In the Courtroom with Legali",
    badge: "Courtroom Performer 🎭",
    summary: "Use Legali's printed prompts, evidence tracker, and scenario guides to stay composed during the hearing.",
    keyPoints: [
      "Phones stay off, but printed scripts and checklists keep you on script.",
      "Evidence tracker ensures every exhibit is introduced and logged.",
      "Bridge phrases and note templates help you handle surprise questions and keep records.",
    ],
    quiz: [
      {
        id: "module-4-lesson-2-q1",
        question: "Can you access Legali during the hearing?",
        answers: [
          { id: "A", text: "No phones allowed", correct: false },
          { id: "B", text: "Use printed materials and check the app during breaks", correct: true },
          { id: "C", text: "Stream the hearing", correct: false },
          { id: "D", text: "Keep Legali on screen", correct: false },
        ],
        explanation:
          "Printed scripts, evidence lists, and cheat sheets keep everything at your fingertips while phones stay off.",
      },
      {
        id: "module-4-lesson-2-q2",
        question: "What if you forget what to say next?",
        answers: [
          { id: "A", text: "Panic", correct: false },
          { id: "B", text: "Follow the printed script prompts", correct: true },
          { id: "C", text: "Make it up", correct: false },
          { id: "D", text: "Ask the defendant", correct: false },
        ],
        explanation:
          "Scripts include cues like 'Next: present Exhibit B and explain its relevance.'",
      },
      {
        id: "module-4-lesson-2-q3",
        question: "How does Legali help you stay organized during testimony?",
        answers: [
          { id: "A", text: "It doesn't", correct: false },
          { id: "B", text: "Evidence checklist to mark each exhibit", correct: true },
          { id: "C", text: "Memory only", correct: false },
          { id: "D", text: "Judge tracks for you", correct: false },
        ],
        explanation:
          "Check off exhibits as you present them so nothing is forgotten.",
      },
      {
        id: "module-4-lesson-2-q4",
        question: "What if the judge asks an unexpected question?",
        answers: [
          { id: "A", text: "Freeze", correct: false },
          { id: "B", text: "Use bridge phrases from your prep packet", correct: true },
          { id: "C", text: "Argue", correct: false },
          { id: "D", text: "Change the subject", correct: false },
        ],
        explanation:
          "Say 'That's a good question, Your Honor. May I refer to my documents?' to stay composed.",
      },
      {
        id: "module-4-lesson-2-q5",
        question: "How does Legali help you take notes during the hearing?",
        answers: [
          { id: "A", text: "Don't take notes", correct: false },
          { id: "B", text: "Provides note templates for claims, questions, and follow-ups", correct: true },
          { id: "C", text: "Record the hearing", correct: false },
          { id: "D", text: "Rely on memory", correct: false },
        ],
        explanation:
          "Structured note pages capture defendant claims, judge questions, and next steps for later reference.",
      },
    ],
  },
]

export const legaliDemoModules: LegaliModuleContent[] = [
  {
    id: "module-1",
    title: "Module 1: Is Small Claims Right for You?",
    subtitle: "Let Legali help you decide and get started",
    description:
      "Confirm eligibility, collect facts, weigh strategic options, and generate error-free documents before you ever step into court.",
    mascotCopy:
      "Welcome back. Let’s start by confirming small-claims eligibility and choosing the right court — it saves time later.",
    lessons: module1Lessons,
  },
  {
    id: "module-2",
    title: "Module 2: Filing Your Case with Legali",
    subtitle: "From document prep to filed case number",
    description:
      "File the way you prefer, arrange perfect service, secure hearing dates, and stay organized with automated tracking.",
    mascotCopy:
      "Next up: filing. I’ll help you prep documents, pick a filing method, and keep service and dates on track.",
    lessons: module2Lessons,
  },
  {
    id: "module-3",
    title: "Module 3: Preparing Your Case with Legali",
    subtitle: "Build a winning presentation",
    description:
      "Craft persuasive trial plans, assemble polished evidence packets, coach witnesses, and outmaneuver defenses.",
    mascotCopy:
      "Time to prepare. We’ll organize evidence, build your story, and practice the key points you’ll present.",
    lessons: module3Lessons,
  },
  {
    id: "module-4",
    title: "Module 4: Your Hearing Day with Legali",
    subtitle: "Walk in prepared and confident",
    description:
      "Execute last-minute prep, navigate courtroom logistics, and stay collected during the hearing itself.",
    mascotCopy:
      "Hearing day! I’ll keep you calm and ready — from last-minute checks to staying composed with the judge.",
    lessons: module4Lessons,
  },
]

export const legaliDemoQuiz: Question[] = module1Lessons[0].quiz
