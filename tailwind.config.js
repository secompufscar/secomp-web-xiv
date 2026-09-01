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
      textColor: "#F8F8F8",
      white: "#FFFFFF",
      black: "#0a0a0a",
      gray: "#a0a0a0",
      primary: "#FF202D",
      secondary: "#FF0000",
      vibrantBlue: "#FF0000",
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