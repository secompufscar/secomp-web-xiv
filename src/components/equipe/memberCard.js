"use client";

import { robotoMono, inter } from "@/utils/fonts";
import SpotlightCard from "@/components/animation/spotlight";

export default function MemberCard({ name, departmentLabel, photo, accent = "green" }) {
    const isGreen = accent === "green";

    return (
        <SpotlightCard
            className={`group w-full border border-[#F8F8F8]/10 rounded-2xl flex flex-col items-center justify-start p-8 text-center transition-all duration-300 hover:scale-[1.03] ${isGreen ? "hover:border-accentGreen/80" : "hover:border-[#2C19FF]/80"}`}
            spotlightColor={isGreen ? "rgba(0, 255, 102, 0.3)" : "rgba(21, 0, 255, 0.3)"}
        >
            <div
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 bg-[#121218] transition-colors duration-300 ${isGreen ? "border-accentGreen/40 group-hover:border-accentGreen" : "border-[#2C19FF]/40 group-hover:border-[#2C19FF]"}`}
            >
                <img
                    src={photo}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <h3 className={`mt-6 text-white text-[1.3rem] font-medium leading-tight ${inter.className}`}>
                {name}
            </h3>

            <span
                className={`mt-4 text-base px-4 py-1.5 rounded-full border uppercase tracking-widest ${robotoMono.className} ${isGreen ? "text-accentGreen border-accentGreen/30" : "text-[#2C19FF] border-[#2C19FF]/30"}`}
            >
                {departmentLabel}
            </span>
        </SpotlightCard>
    );
}
