import { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AIThinkingIndicator } from "../atomic/AIThinkingIndicator";
import { ChatBubble } from "../atomic/ChatBubble";
import type { ChatMessage } from "../data/marketplace-types";

type ChatWindowProps = {
  messages: ChatMessage[];
  isTyping?: boolean;
  typingLabel?: string;
  className?: string;
};

const ChatWindow = forwardRef<HTMLDivElement, ChatWindowProps>(
  ({ className, messages, isTyping = false, typingLabel = "AI is thinking" }, ref) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, [messages, isTyping]);

    return (
      <div
        className={cn("flex flex-1 flex-col overflow-hidden", className)}
        ref={ref}
      >
        <div
          className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4 scroll-smooth"
          ref={scrollRef}
        >
          {messages.map((msg) => (
            <ChatBubble
              attachments={msg.attachments}
              key={msg.id}
              sender={msg.sender}
              showTimestamp
              text={msg.text}
              timestamp={msg.timestamp}
            />
          ))}

          {isTyping && (
            <div className="mr-auto flex items-center gap-2 rounded-2xl border border-slate-200/50 bg-white/80 px-4 py-3 backdrop-blur-sm">
              <AIThinkingIndicator size="sm" state="thinking" />
              <span className="text-xs text-slate-400">{typingLabel}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ChatWindow.displayName = "ChatWindow";

export { ChatWindow };
export type { ChatWindowProps };
