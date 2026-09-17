import { Rajdhani, Roboto_Mono, Big_Shoulders_Display } from "next/font/google";
import localFont from "next/font/local";

export const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const oswald = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"] });
export const inter = localFont({
  src: [
    { path: "../assets/fonts/GlacialIndifference-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/GlacialIndifference-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const poppins = Big_Shoulders_Display({ subsets: ["latin"], weight: ["700"] });
