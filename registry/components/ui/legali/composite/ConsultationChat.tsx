/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-consultation-chat.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-consultation-chat.json"
 */
import { MessageCircle, Phone, Video } from "lucide-react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { ChatInput } from "../atomic/ChatInput";
import { ConsultationTimer } from "../atomic/ConsultationTimer";
import { LawyerAvatar } from "../atomic/LawyerAvatar";
import type { ChatMessage, Lawyer } from "../data/marketplace-types";
import { ChatWindow } from "./ChatWindow";

type ConsultationMode = "text" | "call" | "video";

type ConsultationChatProps = {
  lawyer: Lawyer;
  messages: ChatMessage[];
  isLawyerTyping?: boolean;
  onSendMessage?: (text: string) => void;
  onModeChange?: (mode: ConsultationMode) => void;
  activeMode?: ConsultationMode;
  className?: string;
};

const modeIcons: Record<ConsultationMode, typeof MessageCircle> = {
  text: MessageCircle,
  call: Phone,
  video: Video,
};

const ConsultationChat = forwardRef<HTMLDivElement, ConsultationChatProps>(
  (
    {
      className,
      lawyer,
      messages,
      isLawyerTyping = false,
      onSendMessage,
      onModeChange,
      activeMode = "text",
    },
    ref
  ) => {
    const [localMessages, setLocalMessages] = useState<ChatMessage[]>(messages);

    const handleSend = useCallback(
      (text: string) => {
        const msg: ChatMessage = {
          id: `user-${Date.now()}`,
          sender: "user",
          text,
          timestamp: new Date(),
        };
        setLocalMessages((prev) => [...prev, msg]);
        onSendMessage?.(text);
      },
      [onSendMessage]
    );

    // Sync external messages
    const allMessages = [...localMessages.filter((m) => m.sender === "user"), ...messages].sort(
      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
    );

    // Deduplicate by id
    const seen = new Set<string>();
    const uniqueMessages = allMessages.filter((m) => {
      if (seen.has(m.id)) return false;
      seen.add(m.id);
      return true;
    });

    return (
      <div
        className={cn(
          "flex h-[600px] flex-col overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-b from-slate-50/80 to-white/60 backdrop-blur-xl",
          className
        )}
        ref={ref}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-slate-200/40 border-b px-4 py-3">
          <div className="flex items-center gap-3">
            <LawyerAvatar
              alt={lawyer.name}
              isVerified={lawyer.isVerified}
              size="sm"
              src={lawyer.avatar}
              status={lawyer.isOnline ? "online" : "offline"}
            />
            <div>
              <p className="font-semibold text-slate-800 text-sm">{lawyer.name}</p>
              <ConsultationTimer className="text-xs" />
            </div>
          </div>

          {/* Mode switcher */}
          <div className="flex gap-1">
            {(["text", "call", "video"] as ConsultationMode[]).map((mode) => {
              const Icon = modeIcons[mode];
              return (
                <button
                  className={cn(
                    "rounded-lg p-2 transition-colors",
                    activeMode === mode
                      ? "bg-[#4eaed0]/10 text-[#4eaed0]"
                      : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  )}
                  key={mode}
                  onClick={() => onModeChange?.(mode)}
                  type="button"
                >
                  <Icon className="h-4 w-4" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat messages */}
        <ChatWindow
          isTyping={isLawyerTyping}
          messages={uniqueMessages}
          typingLabel={`${lawyer.name.split(" ")[0]} is typing...`}
        />

        {/* Input */}
        <div className="border-slate-200/40 border-t p-3">
          <ChatInput onSend={handleSend} placeholder={`Message ${lawyer.name.split(" ")[0]}...`} />
        </div>
      </div>
    );
  }
);

ConsultationChat.displayName = "ConsultationChat";

export { ConsultationChat };
export type { ConsultationChatProps, ConsultationMode };
