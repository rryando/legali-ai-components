import { motion } from "motion/react";
import { Mic, MicOff, Phone, PhoneOff, Video, VideoOff } from "lucide-react";
import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ConsultationTimer } from "../atomic/ConsultationTimer";
import { LawyerAvatar } from "../atomic/LawyerAvatar";
import type { Lawyer } from "../data/marketplace-types";

type CallMode = "call" | "video";

type CallInterfaceProps = {
  lawyer: Lawyer;
  mode?: CallMode;
  onEnd?: () => void;
  className?: string;
};

const CallInterface = forwardRef<HTMLDivElement, CallInterfaceProps>(
  ({ className, lawyer, mode = "call", onEnd }, ref) => {
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);

    return (
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white",
          className
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        ref={ref}
        transition={{ duration: 0.4 }}
      >
        {/* Lawyer info */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <LawyerAvatar
              alt={lawyer.name}
              size="xl"
              src={lawyer.avatar}
              status="online"
            />
            {mode === "call" && (
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                className="absolute inset-0 rounded-full border-2 border-[#4eaed0]"
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            )}
          </div>
          <h3 className="font-bold text-lg">{lawyer.name}</h3>
          <ConsultationTimer className="text-white/80" />
        </div>

        {mode === "video" && (
          <div className="flex h-48 w-full items-center justify-center rounded-xl bg-slate-700/50">
            <p className="text-sm text-slate-400">
              {isVideoOff ? "Kamera ausgeschaltet" : "Video-Vorschau"}
            </p>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4">
          <button
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full transition-colors",
              isMuted ? "bg-red-500/20 text-red-400" : "bg-white/10 text-white hover:bg-white/20"
            )}
            onClick={() => setIsMuted((v) => !v)}
            type="button"
          >
            {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>

          {mode === "video" && (
            <button
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full transition-colors",
                isVideoOff
                  ? "bg-red-500/20 text-red-400"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
              onClick={() => setIsVideoOff((v) => !v)}
              type="button"
            >
              {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
            </button>
          )}

          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
            onClick={onEnd}
            type="button"
          >
            {mode === "call" ? (
              <PhoneOff className="h-5 w-5" />
            ) : (
              <Phone className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>
    );
  }
);

CallInterface.displayName = "CallInterface";

export { CallInterface };
export type { CallInterfaceProps, CallMode };
