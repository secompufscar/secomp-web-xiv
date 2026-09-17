import React from 'react';
import { robotoMono } from "@/utils/fonts"

function CustomButton({ text, href, className }) {

  return (
    <a href={href} target="_blank">
      <p 
        className={`
          min-w-[120px] py-6 px-12 text-accentGreen text-center border border-accentGreen rounded-md text-xl md:text-2xl uppercase 
          ${robotoMono.className} transition-all duration-300 hover:bg-accentGreen hover:text-black ${className}
        `}
      >
        <span className="opacity-60">&gt;</span> {text}<span className="animate-pulse">_</span>
      </p>
    </a>
  )
}

export default CustomButton;
