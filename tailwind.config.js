const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      textColor: "#F2F0E8",   // Amarelo Claro
      white: "#FFFFFF",
      black: "#0B0B0F",       // Azul Acinzentado (fundo)
      gray: "#a0a0a0",
      primary: "#00FF66",     // Verde Vívido (accent principal)
      secondary: "#1400FF",   // Azul Vívido
      vibrantBlue: "#1400FF", // alias de secondary
      accentGreen: "#00FF66", // alias de primary
      accentPurple: "#0033CC",// realocado: azul profundo 
    },
    screens: {
      xsm: "425px",
      sm8: "480px",
      sm9: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        "title-xxl": ["44px", "55px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-xsm": ["18px", "24px"],
      },
    },
  },
  plugins: [],
}