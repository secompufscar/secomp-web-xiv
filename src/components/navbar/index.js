import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { StickyNav } from "./stickyNav";
import MobileNav from "./mobileNav";

export default function NavBar({ sticky = false }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024); 
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "/#sobre" },
    { name: "CONTEÚDO", href: "/#conteudo" },
    { name: "PROGRAMAÇÃO", href: "/cronograma" },
    { name: "PATROCÍNIO", href: "/#patrocinadores" },
    { name: "FAQ", href: "/#faq" },
    // { name: "Download", href: "/#downloads" },
  ];

  return (
    <>
      {isMobile ? (
        <MagicMotion transition={{ type: "spring", stiffness: 200, damping: 30, mass: 1.05 }}>
          <MobileNav links={navLinks} />
        </MagicMotion>
      ) : (
        <StickyNav links={navLinks} sticky={sticky} />
      )}
    </>
  );
}
