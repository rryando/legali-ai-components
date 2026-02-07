import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChatInput } from "../atomic/ChatInput";
import { SuggestionChip } from "../atomic/SuggestionChip";
import type { ChatMessage, ContactInfo, IntakeChatScriptStep } from "../data/marketplace-types";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot";
import { ChatWindow } from "./ChatWindow";
import { ContactInfoForm } from "./ContactInfoForm";

type IntakeChatPanelProps = {
  script: IntakeChatScriptStep[];
  onComplete?: (messages: ChatMessage[], contactInfo: ContactInfo | null) => void;
  className?: string;
};

function createMessage(
  sender: ChatMessage["sender"],
  text: string,
  id?: string
): ChatMessage {
  return {
    id: id ?? `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    sender,
    text,
    timestamp: new Date(),
  };
}

const IntakeChatPanel = forwardRef<HTMLDivElement, IntakeChatPanelProps>(
  ({ className, script, onComplete }, ref) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [scriptIndex, setScriptIndex] = useState(0);
    const [isAiTyping, setIsAiTyping] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);
    const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [mascotMotion, setMascotMotion] = useState<MascotMotionType>(MascotMotion.WAVING);
    const [inputDisabled, setInputDisabled] = useState(true);
    const completedRef = useRef(false);

    // Fire the current script step (AI message)
    const fireStep = useCallback(
      (index: number) => {
        if (index >= script.length) return;
        const step = script[index];
        setIsAiTyping(true);
        setInputDisabled(true);
        setSuggestions([]);
        if (step.mascotMotion) setMascotMotion(step.mascotMotion);

        const delay = step.delayMs ?? 1200;
        const timer = setTimeout(() => {
          setMessages((prev) => [...prev, createMessage("ai", step.aiMessage)]);
          setIsAiTyping(false);

          if (step.showContactForm) {
            setShowContactForm(true);
            setInputDisabled(true);
          } else {
            setInputDisabled(false);
          }

          if (step.suggestions) {
            setSuggestions(step.suggestions);
          }
        }, delay);

        return () => clearTimeout(timer);
      },
      [script]
    );

    // Initial greeting
    useEffect(() => {
      return fireStep(0);
    }, [fireStep]);

    const advanceScript = useCallback(() => {
      const nextIndex = scriptIndex + 1;
      if (nextIndex >= script.length) {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.(messages, contactInfo);
        }
        return;
      }
      setScriptIndex(nextIndex);
      fireStep(nextIndex);
    }, [scriptIndex, script.length, fireStep, onComplete, messages, contactInfo]);

    const handleUserMessage = useCallback(
      (text: string) => {
        setMessages((prev) => [...prev, createMessage("user", text)]);
        setSuggestions([]);
        // Small delay before advancing
        setTimeout(advanceScript, 300);
      },
      [advanceScript]
    );

    const handleSuggestionClick = useCallback(
      (text: string) => {
        handleUserMessage(text);
      },
      [handleUserMessage]
    );

    const handleContactSubmit = useCallback(
      (info: ContactInfo) => {
        setContactInfo(info);
        setShowContactForm(false);
        setMessages((prev) => [
          ...prev,
          createMessage(
            "system",
            `Contact details submitted: ${info.firstName} ${info.lastName}`
          ),
        ]);
        setTimeout(advanceScript, 300);
      },
      [advanceScript]
    );

    return (
      <div
        className={cn(
          "flex h-[600px] flex-col overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-b from-slate-50/80 to-white/60 backdrop-blur-xl",
          className
        )}
        ref={ref}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-200/40 px-4 py-3">
          <div className="h-10 w-10">
            <LegaliMascot height={40} motion={mascotMotion} width={40} />
          </div>
          <div>
            <p className="font-semibold text-sm text-slate-800">Legali AI Assistant</p>
            <p className="text-xs text-slate-400">Your legal advisor</p>
          </div>
        </div>

        {/* Chat area */}
        <ChatWindow isTyping={isAiTyping} messages={messages} />

        {/* Contact form (slides in when needed) */}
        {showContactForm && <ContactInfoForm onSubmit={handleContactSubmit} />}

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-slate-200/40 px-4 py-2">
            {suggestions.map((s, i) => (
              <SuggestionChip
                animationDelay={i * 0.1}
                key={s}
                label={s}
                onClick={() => handleSuggestionClick(s)}
              />
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-slate-200/40 p-3">
          <ChatInput disabled={inputDisabled || isAiTyping} onSend={handleUserMessage} />
        </div>
      </div>
    );
  }
);

IntakeChatPanel.displayName = "IntakeChatPanel";

export { IntakeChatPanel };
export type { IntakeChatPanelProps };
