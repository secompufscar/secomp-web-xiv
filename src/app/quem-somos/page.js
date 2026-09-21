"use client";

import { oswald, robotoMono, inter } from "@/utils/fonts";
import { departments, team } from "@/data/team";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import EquipeSection from "@/components/equipe";

export default function QuemSomos() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <NavBar sticky={true} />

            <div className="w-full flex flex-col flex-grow px-8 sm8:px-16 lg:px-48">
                <div className="w-full pt-40 sm:pt-48">
                    <p className={`text-accentGreen text-base mb-4 ${robotoMono.className}`}>
                        <span className="opacity-70">$</span> cat equipe.log
                    </p>

                    <h2 className={`glitch-hover text-5xl sm:text-7xl text-white font-bold uppercase tracking-wider ${oswald.className}`}>
                        Quem Somos
                    </h2>

                    <p className={`text-[#F8F8F8]/70 text-xl sm:text-2xl font-light leading-[1.8] mt-6 max-w-3xl ${inter.className}`}>
                        Conheça as pessoas por trás da SECOMP UFSCar: um time de estudantes voluntários
                        organizado em diferentes áreas para colocar o evento de pé, do planejamento à execução.
                    </p>
                </div>

                <div className="w-full mt-20 sm:mt-28 pb-32 sm:pb-40">
                    <EquipeSection departments={departments} team={team} />
                </div>
            </div>

            <Footer />
        </div>
    );
}
