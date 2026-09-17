"use client"

import { useState } from "react"; 
import { Plus, Minus } from "lucide-react";
import { inter, robotoMono } from "@/utils/fonts"
import "./style.css"

function FAQComponent({ faqData }) {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const divFaqClasses = `absolute top-0 mb-6 transition-height duration-300 z-0 relative
  h-0 overflow-hidden peer-checked:h-min peer-checked:py-10 ${robotoMono.className}`;

  const labelFaqClasses = `text-2xl md:text-3xl z-20 translate-y-8 transition-all text-white font-light relative   
  h-[70px] flex items-center justify-start ${inter.className}`;

  // divide array em 2 colunas
  const middle = Math.ceil(faqData.length / 2);
  const leftFaq = faqData.slice(0, middle);
  const rightFaq = faqData.slice(middle);

  const renderItem = (item, index) => {
    const isOpen = openItems[index];

    return (
      <div key={index} className="relative w-full mb-12">
        <button
          onClick={() => handleToggle(index)}
          className={`${labelFaqClasses} w-full text-left group`}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
        >
          <p className={`text-2xl md:text-3xl text-accentGreen/60 font-bold mr-12 group-hover:text-accentGreen transition-all duration-500 ${robotoMono.className}`}>
            {(index + 1).toString().padStart(2, "0")}
          </p>

          <p className="mr-10 text-[#F8F8F8] transition-all duration-500">
            {item.titulo}
          </p>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
            <Plus
              className={`absolute w-full h-full text-accentGreen transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <Minus
              className={`absolute w-full h-full text-accentGreen transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>

        <div
          id={`faq-content-${index}`}
          className={`origin-top overflow-hidden transition-all duration-500 ${
            isOpen
              ? "opacity-100 scale-y-100 max-h-[1000px] pt-8"
              : "opacity-0 scale-y-0 max-h-0"
          }`}
        >
          <p className={`text-gray text-[1.5rem] font-light leading-[1.8] tracking-wide ${robotoMono.className}`}>
            {item.texto}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-32 w-full mt-8">
      <div className="flex-1 flex flex-col">
        {leftFaq.map((item, i) => renderItem(item, i))}
      </div>

      <div className="flex-1 flex flex-col">
        {rightFaq.map((item, i) => renderItem(item, i + middle))}
      </div>
    </div>
  );
}

export default FAQComponent;