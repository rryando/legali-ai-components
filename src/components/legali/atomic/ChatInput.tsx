import { Paperclip, Send } from "lucide-react";
import type { FormEvent, KeyboardEvent } from "react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { VoiceInputButton } from "./VoiceInputButton";

type ChatInputProps = {
  onSend?: (message: string) => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
  showVoice?: boolean;
  showAttach?: boolean;
  className?: string;
};

const ChatInput = forwardRef<HTMLFormElement, ChatInputProps>(
  (
    {
      className,
      onSend,
      onAttach,
      placeholder = "Type a message...",
      disabled = false,
      showVoice = true,
      showAttach = true,
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    const handleSend = useCallback(() => {
      const trimmed = value.trim();
      if (!trimmed || disabled) return;
      onSend?.(trimmed);
      setValue("");
    }, [value, disabled, onSend]);

    const handleSubmit = useCallback(
      (e: FormEvent) => {
        e.preventDefault();
        handleSend();
      },
      [handleSend]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      },
      [handleSend]
    );

    return (
      <form
        className={cn(
          "flex items-end gap-2 rounded-2xl border border-slate-200/60 bg-white/80 px-3 py-2 backdrop-blur-sm",
          "transition-all duration-200 focus-within:border-[#4eaed0]/40 focus-within:shadow-md",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        onSubmit={handleSubmit}
        ref={ref}
      >
        {showAttach && (
          <button
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            onClick={onAttach}
            type="button"
          >
            <Paperclip className="h-4 w-4" />
          </button>
        )}

        <textarea
          className="max-h-24 min-h-[36px] flex-1 resize-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
          value={value}
        />

        {showVoice && <VoiceInputButton size="sm" />}

        <button
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200",
            value.trim()
              ? "bg-[#4eaed0] text-white shadow-sm hover:bg-[#3d9abf]"
              : "text-slate-300"
          )}
          disabled={!value.trim() || disabled}
          type="submit"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    );
  }
);

ChatInput.displayName = "ChatInput";

export { ChatInput };
export type { ChatInputProps };
