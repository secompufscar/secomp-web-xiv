"use client";

import { robotoMono } from "@/utils/fonts"
import AnimatedContent from "@/components/animation/animatedContent";

const sponsors = [
    {
        img: "/patrocinio/giraffas.png",    
        alt: "Giraffas"
    },
    {
        img: "/patrocinio/casa-do-codigo.png",
        alt: "Casa do Código"
    },
    {
        img: "/patrocinio/monks.png",
        alt: "Monks"
    },
    {
        img: "/patrocinio/onovolab.png",
        alt: "Onovolab"
    },
    {
        img: "/patrocinio/draiven.png",
        alt: "Draiven"
    },
    {
        img: "/patrocinio/parqtec.png",
        alt: "ParqTec"
    },
    {
        img: "/patrocinio/vinteum.png",
        alt: "Vinteum"
    },
    {
        img: "/patrocinio/instituto-onovolab.png",
        alt: "Instituto Onovolab"
    },
    {
        img: "/patrocinio/code-synergy.png",  
        alt: "Code Synergy"
    },
    {
        img: "/patrocinio/9kings.webp",
        alt: "9kings"
    },
    {
        img: "/patrocinio/finops.svg",
        alt: "Finops"
    },
    {
        img: "/patrocinio/jau.webp",
        alt: "Jaú Serve"
    },
    {
        img: "/patrocinio/suqueria.png",
        alt: "La Suqueria"
    },
];

export default function Patrocinadores() {
    return (
        <div className={`w-full flex flex-col mt-12 text-white ${robotoMono.className}`}>
            {sponsors.length &&
                <AnimatedContent
                    distance={70}
                    direction="vertical"
                    reverse={false}
                    duration={1.5}
                    initialOpacity={0.6}
                    animateOpacity
                    scale={1.01}
                    threshold={0.1}
                    delay={0.1}
                >
                    <div className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-24">
                        {sponsors.map((src, i) => (
                            <div
                                key={i}
                                className="basis-[140px] flex-grow flex items-center justify-center"
                            >
                                <img
                                    src={src.img}
                                    alt={src.alt}
                                    className="w-full max-w-[120px] md:max-w-[140px] h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedContent>
            }
        </div>
    );
}
