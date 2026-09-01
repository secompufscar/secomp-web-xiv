"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { inter, oswald, robotoMono } from "@/utils/fonts"
import { weekData } from "@/data/schedule";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SpotlightCard from "@/components/animation/spotlight";

export default function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrev = () => {
        if (!isAnimating && pageIndex > 0) setPageIndex(p => p - 1);
    };

    const handleNext = () => {
        if (!isAnimating && pageIndex < weekData.length - 1) setPageIndex(p => p + 1);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <NavBar sticky={true} />

            <div className="w-full flex flex-col flex-grow my-24 items-center px-8 sm8:px-16 lg:px-48">
                <div className="w-full lg:w-[80%] 2xl:w-[60%] pt-20 lg:pt-40">
                    {/* Cabeçalho com setas */}
                    <div className="flex flex-col sm9:flex-row w-full justify-between sm9:items-end mb-8 sm9:mb-12">
                        <div className="flex flex-col gap-6 mr-8">
                            <h2 className={`text-5xl text-white font-medium uppercase tracking-wider ${oswald.className}`}>
                                Cronograma
                            </h2>

                            <p className={`text-[#F8F8F8]/70 text-2xl uppercase ${robotoMono.className}`}>
                                {weekData[pageIndex].day}, {weekData[pageIndex].date}
                            </p>
                        </div>

                        <div className={`w-full sm9:w-fit flex flex-row ${pageIndex === 0 ? "justify-end" : "justify-between"} gap-6 mt-12 sm9:mt-0 ${robotoMono.className}`}>
                            {pageIndex !== 0 &&
                                <button onClick={handlePrev} className="flex items-center justify-center py-3 px-6 text-secondary/80 text-lg border border-secondary/80 rounded-full uppercase tracking-wider hover:border-secondary hover:text-secondary">
                                    Anterior
                                </button>
                            }

                            {pageIndex !== 4 &&
                                <button onClick={handleNext} className="flex items-center justify-center py-3 px-6 text-secondary/80 text-lg border border-secondary/80 rounded-full uppercase tracking-wider hover:border-secondary hover:text-secondary" >
                                    Próximo
                                </button>
                            }
                        </div>
                    </div>

                    {/* Lista de atividades */}
                    <div className="space-y-6">
                        {weekData[pageIndex].activities.length > 0 ? (
                            <AnimatePresence mode="wait">
                                {weekData[pageIndex].activities.map((act, index) => (
                                    <motion.div
                                        key={act.title || index}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        onAnimationStart={() => setIsAnimating(true)}
                                        onAnimationComplete={() => setIsAnimating(false)}
                                    >
                                        <SpotlightCard
                                            key={index}
                                            className="group w-full border border-[#F8F8F8]/10 rounded-2xl flex flex-col sm8:flex-row items-start justify-start p-10 text-white text-2xl transition-transform duration-300 hover:scale-[1.01] hover:border-secondary/80"
                                            spotlightColor="rgba(0, 170, 255, 0.3)"
                                        >
                                            <div className="flex flex-row items-center justify-start pb-8 mb-8 border-b border-[#F8F8F8]/10 self-stretch sm8:flex-col sm8:pr-10 sm8:pb-0 sm8:mr-8 sm8:mb-0 sm8:border-r sm8:border-b-0">
                                                <p className="text-center text-3xl p-8 border border-[#F8F8F8]/20 rounded-full bg-[#F8F8F8]/5">
                                                    {act.icon || "⏳"}
                                                </p>

                                                <p className={`text-[#F8F8F8]/70 text-[20px] sm8:text-[16px] font-medium leading-[1.8] ml-8 sm8:mt-8 sm8:ml-0 ${robotoMono.className}`}>
                                                    {act.time || "--:--"}
                                                </p>
                                            </div>

                                            <div className="flex flex-col items-start justify-start">
                                                <p className={`text-secondary text-xl font-light leading-[1.8] ${inter.className}`}>
                                                    {act.speaker}
                                                </p>

                                                <span className={`text-white text-2xl mt-8 ${robotoMono.className}`}>{act.title}</span>

                                                <p className={`text-[#F8F8F8] text-2xl font-light leading-[1.8] ${inter.className} mt-4`}>
                                                    {act.desc}
                                                </p>

                                                <p className={`text-[#F8F8F8]/70 text-xl font-light leading-[1.8] mt-8 ${inter.className}`}>
                                                    {act.location}
                                                </p>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        ) : (
                            <div className="w-full border border-dashed border-[#F8F8F8]/20 rounded-2xl p-16 text-center flex flex-col items-center justify-center bg-white/[0.02]">
                                <span className="text-5xl mb-6 animate-pulse">⏳</span>
                                <h3 className={`text-white text-3xl font-medium uppercase tracking-wider ${oswald.className}`}>
                                    Programação em definição
                                </h3>
                                <p className={`text-[#F8F8F8]/60 text-xl mt-4 max-w-md ${robotoMono.className}`}>
                                    Estamos finalizando a confirmação dos palestrantes e horários para este dia. Volte em breve!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Paginação (bolinhas) */}
                    <div className="flex justify-between items-center mt-10">
                        <button
                            onClick={handlePrev}
                            className={`${pageIndex !== 0 ? "opacity-100" : "opacity-0 pointer-events-none"} flex items-center justify-center py-3 px-6 text-[#F8F8F8]/70 text-lg border border-[#F8F8F8]/70 rounded-full uppercase tracking-wider hover:border-[#F8F8F8] hover:text-[#F8F8F8]`}>
                            Anterior
                        </button>

                        <div className="flex justify-between space-x-4">
                            {weekData.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPageIndex(i)}
                                    className={`w-3 h-3 rounded-full ${i === pageIndex ? "bg-white" : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className={`${pageIndex !== 4 ? "opacity-100" : "opacity-0 pointer-events-none"} flex items-center justify-center py-3 px-6 text-[#F8F8F8]/70 text-lg border border-[#F8F8F8]/70 rounded-full uppercase tracking-wider hover:border-[#F8F8F8] hover:text-[#F8F8F8]`} >
                            Próximo
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

