'use client'
import { useEffect, useState } from "react";
import UseCountdown from "@/hooks/useCountdown";
import { oswald, robotoMono } from "@/utils/fonts"
import { eventStart } from "@/data/eventDate";

export default function Countdown() {
  const countdown = UseCountdown(eventStart.getTime());
  const [show, setShow] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        flex gap-8 md:gap-20 md:text-3xl mt-20 
        transition-opacity duration-1000 
        ${countdown.init && show ? "opacity-100" : "opacity-0"}
        ${robotoMono.className}
      `}
    >
      <div className="text-center flex flex-col gap-5">
        <h6 className={`py-2 text-4xl md:text-5xl font-semibold`}>{countdown.days}</h6>
        <p className={`text-3xl font-light text-accentGreen`}>[D]</p>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className={`py-2 text-4xl md:text-5xl font-semibold`}>{countdown.hours}</h6>
        <p className={`text-3xl font-light text-accentGreen`}>[H]</p>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className={`py-2 text-4xl md:text-5xl font-semibold`}>{countdown.minutes}</h6>
        <p className={`text-3xl font-light text-accentGreen`}>[M]</p>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className={`py-2 text-4xl md:text-5xl font-semibold`}>{countdown.seconds}</h6>
        <p className={`text-3xl font-light text-accentGreen`}>[S]</p>
      </div>
    </div>
  );
}
