'use client'

import { useState, useEffect } from "react";
import { MagicMotion } from "react-magic-motion";
import { robotoMono, poppins } from "@/utils/fonts"
import Link from "next/link";

export function StickyNav({ links, sticky }) {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <MagicMotion>
            <header className={`hidden lg:block fixed top-0 left-0 z-50 w-full`}>
                <div className={`flex w-full py-3 justify-between transition-all duration-300 items-center px-12 border-b ${scrolled ? "bg-black/40 border-accentGreen/20" : "border-transparent"} backdrop-blur-md`}>
                    <Link className={`flex items-center text-white text-[16px] uppercase tracking-wider ${poppins.className} hover:text-accentGreen transition-colors duration-300`} href={"/"}>
                        Secomp UFSCar
                        <span className="text-accentGreen animate-pulse ml-1">_</span>
                    </Link>

                    <div className="my-5 mb-6">
                        <div className={`flex items-center ${robotoMono.className}`}>
                            {links.map((nav, index) => (
                            <Link
                                key={index}
                                href={nav.href}
                                className="md:ml-10 text-[14px] text-white/90 tracking-widest uppercase hover:text-accentGreen transition-colors duration-300"
                            >
                                <span className="text-secondary/80">[</span>{nav.name}<span className="text-secondary/80">]</span>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </MagicMotion>
    );
}
