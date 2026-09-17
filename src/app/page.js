"use client"

import { useState, useEffect } from "react";
import { inter, oswald, robotoMono, poppins } from "@/utils/fonts"
import { faq } from "@/data/faq";
import { content } from "@/data/content";
import Lenis from "@studio-freight/lenis";
import AnimatedContent from "@/components/animation/animatedContent";
import TextType from "@/components/text/textType";
import TypewriterText from "@/components/text/typewriterText";
import SpotlightCard from "@/components/animation/spotlight";
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import FAQ from "../components/faq/FaqComponent"
import Patrocinadores from "../components/patrocinadores/page"
import Countdown from '../components/countdown'
import Downloads from "@/components/download";
import CustomButton from "@/components/buttons/buttons";
import TerminalLog from "@/components/terminal";
import { eventStart, eventEnd } from "@/data/eventDate";
import "./gradient.css"

export default function Page() {
  const [mainText, setMainText] = useState("COMPILANDO A");
  const [heroStep, setHeroStep] = useState(0);
  const words = ["SECOMP XIV", "•", "UFSCAR", "•"];

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05, wheelMultiplier: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const today = new Date();

    if (today < eventStart) {
      setMainText("COMPILANDO A");
    } else if (today >= eventStart && today <= eventEnd) {
      setMainText("ESTÁ NO AR A");
    } else {
      setMainText("COMPILANDO A");
    }
  }, []);

  return (
    <>
      <NavBar />

      <div className={`gradient relative flex justify-center items-start min-h-screen pt-[250px] overflow-hidden`}>
        <TerminalLog className="hidden md:block absolute top-28 left-8 lg:left-16 text-lg lg:text-2xl text-white/70 pointer-events-none select-none z-0" />

        <div className={`relative z-10 px-16 pt-28 max-w-[1200px] text-white flex flex-col text-[2rem] text-center justify-center items-center flex-1 flex-grow flex-shrink-4 ${oswald.className}`}>
          <TypewriterText
            text={mainText}
            startDelay={200}
            onComplete={() => setHeroStep(1)}
            className="block text-[#ededed] text-7xl/[1.5] sm:text-9xl/[1.5] xl:text-[9rem]/[1.5] mb-4 font-bold uppercase tracking-wide"
          />

          <div className="flex flex-col items-center justify-center">
            <h2 className={`text-6xl sm:text-8xl xl:text-[8rem] font-bold uppercase tracking-wide text-[#ededed] mt-4 ${oswald.className}`}>
              {heroStep >= 1 && (
                <TypewriterText text="SECOMP" onComplete={() => setHeroStep(2)} />
              )}
            </h2>
            <span 
              className={`block text-6xl sm:text-8xl xl:text-[8rem] font-bold tracking-widest text-center uppercase my-2 text-primary drop-shadow-[0_0_15px_rgba(0,255,102,0.6)] ${oswald.className}`}
            >
              {heroStep >= 2 && (
                <TypewriterText text={new Date() < eventEnd ? "XIV" :  `${new Date().getFullYear()+1}`} />
              )}
            </span>
          </div>

          <Countdown />
        </div>
      </div>

      <div className="bg-black">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full overflow-hidden text-white py-8 px-4">
            <div className={`flex whitespace-nowrap ${robotoMono.className}`}>
              {Array(30).fill(null).map((_, i) => (
                <span key={i} className={`px-4 text-2xl ${i % 2 === 0 ? "text-accentGreen" : "text-secondary"}`}>
                  {words[i % words.length]}
                </span>
              ))}
            </div>
          </div>

          <div id="sobre" className="w-full pt-24 sm:pt-40 px-8 sm8:px-16 lg:px-48">
            <div className="flex flex-col 2xl:flex-row justify-between items-start gap-16 md:gap-24 2xl:gap-32 w-full mt-16">
              <div className="flex-1">
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
                  <img src="/mesa-redonda.png" loading="lazy" alt="Participantes no Auditório" className="min-h-[260px] max-h-[380px] h-full w-full rounded-lg object-cover object-center" />
                </AnimatedContent>
              </div>

              <div className="flex-1 w-full">
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
                  <div className="relative rounded-2xl border border-white/10 bg-[#121218] overflow-hidden shadow-2xl shadow-black/60">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #F2F0E8 0, #F2F0E8 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, #F2F0E8 0, #F2F0E8 1px, transparent 1px, transparent 14px)",
                      }}
                    />

                    {/* barra de título estilo macOS */}
                    <div className="relative flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.03]">
                      <span className="w-3 h-3 rounded-full bg-[#FF0000]" />
                      <span className="w-3 h-3 rounded-full bg-accentGreen" />
                      <span className="w-3 h-3 rounded-full bg-secondary" />
                      <span className={`ml-4 text-xs tracking-wide text-white/40 ${robotoMono.className}`}>
                        secomp@ufscar: ~/sobre
                      </span>
                    </div>

                    <div className={`relative flex flex-col justify-between text-gray text-[1.4rem] font-light leading-[1.8] tracking-wide sm8:text-justify p-8 md:p-12 ${robotoMono.className}`}>
                      <p className="mb-6 text-accentGreen text-base">
                        <span className="opacity-70">$</span> cat sobre.txt
                      </p>

                      <TextType
                        text={["O QUE É A SECOMP"]}
                        typingSpeed={80}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="?"
                        startOnVisible={true}
                        cursorBlinkDuration={0.8}
                        className={`glitch-hover text-[#F2F0E8] text-4xl md:text-6xl font-bold text-start leading-none mb-12 ${oswald.className}`}
                      />

                      <p className="mb-8">
                        A Semana Acadêmica da Computação da UFSCar (SECOMP) nasceu com o <b className="text-white">propósito de trazer temas relevantes para a comunidade acadêmica
                          e para entusiastas da área</b>. Todos os anos, estudantes se mobilizam para realizar esse grande evento, que reúne convidados de diferentes
                        áreas para compartilhar experiências, discutir novidades e promover inovação.
                      </p>

                      <p>
                        A programação é diversa e feita para todos os gostos: <b className="text-white">palestras</b> e <b className="text-white"> minicursos </b>
                        práticos para ampliar conhecimentos, <b className="text-white">competições</b> como Hackathon, Desafio de Programadores e CTF para testar habilidades,
                        além da tradicional <b className="text-white">Gamenight</b> para relaxar e se divertir. Uma experiência completa, cheia de aprendizado, desafios e novas conexões!
                      </p>
                    </div>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>

          <div id="conteudo" className="w-full mt-36 md:mt-64 px-8 sm8:px-16 lg:px-48">
            <TextType
              text={["CONTEÚDO"]}
              typingSpeed={80}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
              startOnVisible={true}
              cursorBlinkDuration={0.8}
              className={`glitch-hover text-white text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
            />

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
              <div className="w-full mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-6">
                {content.map((item, i) => (
                  <SpotlightCard
                    key={i}
                    className={`
                      group w-full aspect-square border border-[#F8F8F8]/10 rounded-2xl flex flex-col items-start justify-end p-[40px] sm9:p-8 
                      text-white text-[1.5rem] font-medium ${inter.className} transition-all duration-300 hover:scale-105 
                      ${i % 2 === 0 ? "hover:border-accentGreen/80" : "hover:border-secondary/80"}
                    `}
                    spotlightColor={i % 2 === 0 ? "rgba(0, 255, 102, 0.3)" : "rgba(20, 0, 255, 0.3)"}
                  >
                    <div className={i % 2 === 0 ? "text-accentGreen" : "text-secondary"}>{item.icon}</div>
                    <span className="mt-6">{item.label}</span>

                    <p
                      className={`
                        text-gray font-light leading-[1.8] tracking-wide leading-[1.6] ${robotoMono.className}
                        mt-8 
                        md:mt-0 md:max-h-0 md:opacity-0 md:translate-y-2 md:overflow-hidden
                        md:transition-all md:duration-700
                        md:group-hover:mt-6 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-hover:translate-y-0
                      `}
                    >
                      {item.text}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </AnimatedContent>
          </div>

          <div id="patrocinadores" className="w-full mt-36 md:mt-64 px-8 sm8:px-16 lg:px-48">
            <div className="flex flex-row flex-wrap items-center gap-12">
              <TextType
                text={["PATROCINADORES"]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="."
                startOnVisible={true}
                cursorBlinkDuration={0.8}
                className={`glitch-hover text-[#F2F0E8] text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
              />

              <CustomButton text="Começar parceria" href="mailto:coordenacao@secompufscar.com.br" />
            </div>

            <p className={`mt-12 text-gray text-[1.5rem] font-light leading-[1.8] tracking-wide ${robotoMono.className}`}>Empresas que confiam em nós e fazem o evento acontecer</p>

            <Patrocinadores />
          </div>

          <div id="faq" className="w-full mt-36 md:mt-56 px-8 sm8:px-16 lg:px-48">
            <TextType
              text={["FAQ"]}
              typingSpeed={80}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
              startOnVisible={true}
              cursorBlinkDuration={0.8}
              className={`glitch-hover text-white text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
            />

            <FAQ faqData={faq} />
          </div>

          {/* <div id="downloads" className="w-full mt-36 md:mt-56 px-8 sm8:px-16 lg:px-48">
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
              <Downloads /> 
            </AnimatedContent>
          </div> */}

          <div id="contato" className="flex items-center justify-end py-24 w-full text-black mt-32 md:mt-64 px-8 sm:px-16 bg-[url('/estande-magalu.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-[460px] w-full h-full bg-[#F8F8F8] p-[3.7rem] sm:p-20 rounded-xl">
              <TextType
                text={["CONTATO"]}
                typingSpeed={80}
                pauseDuration={1500}
                cursorCharacter=""
                startOnVisible={true}
                cursorBlinkDuration={0.8}
                textColors={"#000000"}
                className={`text-4xl md:text-5xl font-bold text-start ${oswald.className}`}
              />

              <p className={`mt-8 text-black text-[1.6rem] font-extralight ${inter.className}`}>Entre em contato com a nossa equipe</p>
              <p className={`mt-3 text-[#000] text-[1.6rem] break-words ${robotoMono.className}`}>coordenacao@secompufscar.com.br</p>

              <p className={`mt-12 text-black text-[1.6rem] font-extralight ${inter.className}`}>Você pode nos encontrar aqui</p>
              <p className={`mt-3 text-[#000] text-[1.6rem] break-words ${robotoMono.className}`}>Departamento de Computação - DC</p>

              <p className={`mt-12 text-black text-[1.6rem] font-extralight ${inter.className}`}>UFSCar</p>
              <p className={`mt-3 text-[#000] text-[1.6rem] break-words ${robotoMono.className}`}>Rodovia Washington Luís, km 235, São Carlos - SP, CEP 13565-905</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* <FloatingButton /> */}
    </>
  );
}

