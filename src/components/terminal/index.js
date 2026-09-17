'use client'

import { useEffect, useState } from "react";
import { robotoMono } from "@/utils/fonts";

const lines = [
  'system.out.println("SECOMP XIV")',
  "status: unstable",
  "trying to reconnect...",
];

const typingSpeed = 45;   
const linePause = 400;    
const fullPause = 5000;   
const cursorBlink = 500;  

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function TerminalLog({ className = "" }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function typeLoop() {
      while (!cancelled) {
        setDisplayedLines([]);
        await sleep(300);
        if (cancelled) return;

        const finished = [];

        for (let li = 0; li < lines.length; li++) {
          const line = lines[li];
          let current = "";

          for (let ci = 0; ci < line.length; ci++) {
            if (cancelled) return;
            current += line[ci];
            setDisplayedLines([...finished, current]);
            await sleep(typingSpeed);
          }

          finished.push(line);
          setDisplayedLines([...finished]);
          await sleep(linePause);
        }

        await sleep(fullPause);
      }
    }

    typeLoop();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), cursorBlink);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className={`${robotoMono.className} leading-relaxed ${className}`}>
      {displayedLines.map((line, i) => (
        <div key={i} className="whitespace-pre">
          <span className={i === 1 ? "text-[#FF0000]" : "opacity-80"}>
            {`>${line}`}
          </span>
        </div>
      ))}
      <span
        className={`transition-opacity duration-100 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        _
      </span>
    </div>
  );
}
