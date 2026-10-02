"use client"

import React from "react";
import { inter, oswald, robotoMono } from "@/utils/fonts";
import SpotlightCard from "@/components/animation/spotlight";

export default function FeiraCard({ act }) {
    const talks = act.subActivities || [];

    return (
        <SpotlightCard
            className="group relative w-full rounded-2xl border border-accentGreen/50 bg-gradient-to-br from-secondary/20 via-black to-black flex flex-col p-6 sm8:p-10 text-white overflow-hidden shadow-[0_0_40px_rgba(0,255,102,0.12)] transition-transform duration-300 hover:scale-[1.01] hover:border-accentGreen"
            spotlightColor={"rgba(20, 0, 255, 0.35)"}
        >
            {/* Selo */}
            <span className={`self-start mb-6 px-4 py-1 text-sm uppercase tracking-widest text-black bg-accentGreen rounded-full ${robotoMono.className}`}>
                ★ Evento especial
            </span>

            {/* Cabeçalho */}
            <div className="flex flex-col sm8:flex-row sm8:items-center gap-6">
                <p className="text-center text-4xl p-8 border border-accentGreen/50 rounded-full bg-accentGreen/10 self-start">
                    {act.icon || "🏪"}
                </p>

                <div className="flex flex-col">
                    <p className={`text-[#F8F8F8]/70 text-lg ${robotoMono.className}`}>
                        {act.time || "--:--"} · {act.location}
                    </p>
                    <h3 className={`text-4xl sm9:text-5xl font-medium uppercase tracking-wider mt-2 ${oswald.className}`}>
                        {act.title}
                    </h3>
                    <p className={`text-accentGreen text-xl font-light mt-2 ${inter.className}`}>
                        {act.speaker}
                    </p>
                </div>
            </div>

            {act.desc && (
                <p className={`text-[#F8F8F8] text-xl font-light leading-[1.8] mt-8 whitespace-pre-line ${inter.className}`}>
                    {act.desc}
                </p>
            )}

            {/* Palestras */}
            {talks.length > 0 && (
                <div className="mt-10 pt-8 border-t border-accentGreen/30">
                    <p className={`text-accentGreen text-base mb-6 ${robotoMono.className}`}>
                        <span className="opacity-70">$</span> ls ./palestras
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                        {talks.map((talk, i) => (
                            <div
                                key={talk.title || i}
                                className="flex flex-row items-start gap-6 p-8 sm9:p-10 min-h-[160px] rounded-2xl border border-[#F8F8F8]/15 bg-white/[0.03] transition-colors duration-300 hover:border-accentGreen/70 hover:bg-accentGreen/5"
                            >
                                <span className={`text-6xl font-medium text-accentGreen/80 leading-none ${oswald.className}`}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="flex flex-col">
                                    <span className={`text-[#F8F8F8]/60 text-lg ${robotoMono.className}`}>
                                        🎤 {talk.time || "--:--"}
                                    </span>
                                    <span className={`text-white text-2xl sm9:text-3xl mt-2 ${robotoMono.className}`}>
                                        {talk.title}
                                    </span>
                                    <span className={`text-accentGreen text-xl font-light mt-2 ${inter.className}`}>
                                        {talk.speaker}
                                    </span>
                                    {talk.desc && (
                                        <p className={`text-[#F8F8F8]/80 text-lg font-light leading-[1.7] mt-4 whitespace-pre-line ${inter.className}`}>
                                            {talk.desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </SpotlightCard>
    );
}
