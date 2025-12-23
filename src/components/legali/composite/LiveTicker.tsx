import { Bell } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "../atomic/SpotlightCard";

export interface LiveTickerNotification {
  name: string;
  location: string;
  action: string;
}

export interface LiveTickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** List of notifications to cycle through */
  notifications?: LiveTickerNotification[];
  /** Interval between notifications in milliseconds */
  interval?: number;
  /** Icon to display */
  icon?: React.ReactNode;
  /** "from" connector text */
  fromLabel?: string;
  /** "just" connector text */
  justLabel?: string;
}

const defaultNotifications: LiveTickerNotification[] = [
  { name: "Sarah M.", location: "Colorado", action: "analyzed a contract" },
  { name: "David C.", location: "New York", action: "found a lawyer" },
  { name: "Marcus J.", location: "Texas", action: "built their case" },
  { name: "Emily R.", location: "California", action: "analyzed a lease" },
];

/**
 * A rotating notification ticker showing recent activity.
 * Displays one notification at a time with fade transitions.
 */
const LiveTicker = React.forwardRef<HTMLDivElement, LiveTickerProps>(
  (
    {
      className,
      notifications = defaultNotifications,
      interval = 4000,
      icon = <Bell className="h-4 w-4 text-[#4eaed0]" />,
      fromLabel = "from",
      justLabel = "just",
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
          setIsVisible(true);
        }, 500);
      }, interval);
      return () => clearInterval(timer);
    }, [notifications.length, interval]);

    const notification = notifications[currentIndex];

    return (
      <div
        className={cn(
          "fixed bottom-6 left-6 z-40 hidden transition-all duration-500 md:block",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          className
        )}
        ref={ref}
        {...props}
      >
        <SpotlightCard className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-lg">
          {icon}
          <p className="text-slate-700 text-sm">
            <span className="font-semibold">{notification.name}</span>
            <span className="text-slate-500">
              {" "}
              {fromLabel} {notification.location}
            </span>
            <span className="text-slate-600">
              {" "}
              {justLabel} {notification.action}
            </span>
          </p>
        </SpotlightCard>
      </div>
    );
  }
);

LiveTicker.displayName = "LiveTicker";

export { LiveTicker };
