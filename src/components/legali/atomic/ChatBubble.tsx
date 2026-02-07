import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { ChatAttachment } from "../data/marketplace-types";

const chatBubbleVariants = cva(
  "relative max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
  {
    variants: {
      sender: {
        user: "ml-auto bg-[#4eaed0] text-white rounded-br-sm",
        ai: "mr-auto bg-white/80 text-slate-800 border border-slate-200/50 backdrop-blur-sm rounded-bl-sm",
        lawyer:
          "mr-auto bg-gradient-to-br from-amber-50 to-orange-50 text-slate-800 border border-amber-200/50 rounded-bl-sm",
        system: "mx-auto bg-slate-100/80 text-slate-500 text-xs text-center rounded-xl max-w-[90%]",
      },
    },
    defaultVariants: {
      sender: "user",
    },
  }
);

type ChatBubbleProps = {
  text: string;
  timestamp?: Date;
  attachments?: ChatAttachment[];
  showTimestamp?: boolean;
  className?: string;
} & VariantProps<typeof chatBubbleVariants>;

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, sender = "user", text, timestamp, attachments, showTimestamp = false }, ref) => {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className={cn(chatBubbleVariants({ sender }), className)}
        initial={{ opacity: 0, y: 8 }}
        ref={ref}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="whitespace-pre-wrap">{text}</p>

        {attachments && attachments.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {attachments.map((att) => (
              <span
                className="inline-flex items-center gap-1 rounded-lg bg-black/5 px-2 py-1 text-xs"
                key={att.id}
              >
                📎 {att.name}
              </span>
            ))}
          </div>
        )}

        {showTimestamp && timestamp && (
          <span
            className={cn(
              "mt-1 block text-[10px] opacity-60",
              sender === "user" ? "text-right" : "text-left"
            )}
          >
            {timestamp.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          </span>
        )}
      </motion.div>
    );
  }
);

ChatBubble.displayName = "ChatBubble";

export { ChatBubble, chatBubbleVariants };
export type { ChatBubbleProps };
