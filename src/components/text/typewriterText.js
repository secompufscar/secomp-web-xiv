'use client'

import { useEffect, useState } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function TypewriterText({
  text,
  className = "",
  startDelay = 0,
  charSpeed = 45,
  onComplete,
}) {
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(text);
      setTyping(false);
      if (onComplete) onComplete();
      return;
    }

    let cancelled = false;
    setDisplay("");
    setTyping(true);

    async function run() {
      await sleep(startDelay);
      if (cancelled) return;

      let current = "";
      for (let i = 0; i < text.length; i++) {
        if (cancelled) return;
        current += text[i];
        setDisplay(current);
        await sleep(charSpeed);
      }

      if (!cancelled) {
        setTyping(false);
        if (onComplete) onComplete();
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [text, startDelay]);

  return (
    <span className={className}>
      {display}
      <span className={`inline-block w-[0.06em] border-r-2 ml-1 ${typing ? "animate-pulse border-current" : "border-transparent"}`}>
        &nbsp;
      </span>
    </span>
  );
}
