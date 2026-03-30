import { motion, animate } from "motion/react";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursor = false,
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setDone(false);
    setIsTyping(false);

    const duration = (text.length * speed) / 1000;
    const cb = onComplete;

    const controls = animate(0, text.length, {
      delay,
      duration,
      ease: "linear",
      onPlay: () => setIsTyping(true),
      onUpdate: (latest) => {
        setDisplayText(text.slice(0, Math.round(latest)));
      },
      onComplete: () => {
        setDisplayText(text);
        setIsTyping(false);
        setDone(true);
        cb?.();
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, speed]);

  const showBlinkingCursor = showCursor && (isTyping || done);

  return (
    <span className={className}>
      {displayText}
      {showBlinkingCursor && (
        <motion.span
          aria-hidden
          className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-[2px]"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
          }}
        />
      )}
    </span>
  );
}
