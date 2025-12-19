import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element is in viewport
 */
export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!hasAnimated) setHasAnimated(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, options]);

  return { ref, isInView, hasAnimated };
}

/**
 * Hook for animated counter
 */
export function useCountUp(
  target: number,
  duration = 2000,
  startOnView = true
) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(!startOnView);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const start = useCallback(() => setIsActive(true), []);

  useEffect(() => {
    if (!isActive) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );

      // Easing function (ease-out-cubic)
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, target, duration]);

  return { count, start, isActive };
}

/**
 * Hook for typing animation effect
 */
export function useTypingAnimation(
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
      setIsPaused(true);
    } else if (displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(timer);
    } else {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsTyping(true);
    }
  }, [
    displayText,
    isTyping,
    isPaused,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}

/**
 * Hook for idle detection
 */
export function useIdleDetection(timeout = 5000) {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsIdle(false);
      timeoutRef.current = setTimeout(() => setIsIdle(true), timeout);
    };

    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // Start initial timer

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [timeout]);

  return isIdle;
}

/**
 * Hook for scroll progress
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

/**
 * Hook for current section detection
 */
export function useCurrentSection(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return currentSection;
}

/**
 * Hook for mouse position (for cursor glow)
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

/**
 * Hook for parallax effect
 */
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
}

/**
 * Hook for staggered animations
 */
export function useStaggeredAnimation(itemCount: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView && visibleItems.length === 0) {
      const timers: NodeJS.Timeout[] = [];
      for (let i = 0; i < itemCount; i++) {
        timers.push(
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, i]);
          }, i * delay)
        );
      }
      return () => timers.forEach(clearTimeout);
    }
  }, [isInView, itemCount, delay, visibleItems.length]);

  return { ref, visibleItems, isInView };
}

/**
 * Hook for tracking mouse position relative to an element
 */
export function useLocalMousePosition(ref: { current: HTMLElement | null }) {
  const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setLocalPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => {
      setIsInside(true);
    };
    const handleMouseLeave = () => {
      setIsInside(false);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return { localPosition, isInside };
}
