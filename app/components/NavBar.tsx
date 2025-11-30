"use client";
import React, { useState, useEffect } from "react";
import GlassSurface from "../../components/GlassSurface"; // Ensure path is correct

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const triggerPoint = 60;

      setShowNavButton(window.scrollY > heroHeight * 0.8);

      const sections = document.querySelectorAll("[data-theme]");
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          const theme = section.getAttribute("data-theme");
          setIsLightMode(theme === "light");
        }
      });
    };

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navHeight = 60; 
  const desktopBtnWidth = 140;
  const mobileBtnHeight = 60; 
  const mobileBtnWidth = 180;

  const gap = 12;
  const widthToSubtract = showNavButton ? desktopBtnWidth + gap + 48 : 48;
  const maxNavWidth = 800;
  const availableWidthForNav = windowWidth - widthToSubtract;
  const finalNavWidth =
    windowWidth > 0
      ? Math.min(Math.max(availableWidthForNav, 200), maxNavWidth)
      : maxNavWidth;

  if (windowWidth === 0) return null;

  const desktopText = isLightMode ? "text-p-grey-dark" : "text-p-cream";
  const desktopBorder = isLightMode ? "border-p-grey-dark/30" : "border-p-cream/30";
  const desktopBtnBorder = isLightMode ? "border-p" : "border-p";

  return (
    <>

      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center items-center pointer-events-none gap-3 px-6 transition-all duration-500">
        
        {/* Main Glass Navbar */}
        <div className="pointer-events-auto rounded-full shadow-2xl shadow-black/20 transition-all duration-300">
          <GlassSurface
            width={finalNavWidth}
            height={navHeight}
            borderRadius={50}
            backgroundOpacity={0.1}
            saturation={1}
            blur={11}
            borderWidth={0.07}
            displace={0.5}
            distortionScale={-180}
            redOffset={0}
            greenOffset={1}
            blueOffset={2}
            brightness={isLightMode ? 0.6 : 0.3}
            opacity={0.93}
            mixBlendMode="normal"
            className={`transition-colors duration-300 border rounded-full ${desktopBorder}`}
          >
            <div
              className="flex items-center justify-between w-full h-full px-8"
              style={{ width: finalNavWidth, height: navHeight }}
            >
              {/* Logo */}
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, "hero")} 
              >
                <div className="flex items-center gap-2 cursor-pointer select-none">
                  <p className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${desktopText}`}>
                    printerQ
                  </p>
                </div>
              </a>

              {/* Navigation Links */}
              <div className={`flex items-center gap-8 font-bold text-sm tracking-wide transition-colors duration-300 opacity-80 ${desktopText}`}>
                {["Details", "Features", "Printer", "About"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => handleNavClick(e, item.toLowerCase())} // Stops URL change
                    className="hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </GlassSurface>
        </div>

        {/* Desktop Button */}
        <div
          className={`pointer-events-auto rounded-full shadow-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden 
            ${showNavButton ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 w-0"}
            ${isLightMode ? "shadow-black/10" : "shadow-p/40"}
          `}
          style={{ width: showNavButton ? desktopBtnWidth : 0 }}
        >
          <GlassSurface
            width={desktopBtnWidth}
            height={navHeight}
            borderRadius={50}
            backgroundOpacity={0.1}
            saturation={1}
            blur={11}
            borderWidth={0.07}
            displace={0.5}
            distortionScale={-180}
            redOffset={0}
            greenOffset={1}
            blueOffset={2}
            brightness={isLightMode ? 0.6 : 0.3}
            opacity={1}
            className={`transition-colors duration-300 border-2 rounded-full cursor-pointer ${desktopBtnBorder}`}
          >
            <button
              className={`w-full h-full flex items-center justify-center font-extrabold text-md tracking-widest whitespace-nowrap transition-colors duration-300 ${desktopText}`}
              style={{ width: desktopBtnWidth, height: navHeight }}
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </button>
          </GlassSurface>
        </div>
      </div>
      <div 
        className={`md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none transition-all duration-500
          ${showNavButton ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        <div className="pointer-events-auto rounded-full overflow-hidden shadow-2xl ">
             <button
               className="bg-linear-to-br from-p to-p-dark text-p-cream rounded-full font-bold text-lg tracking-widest flex items-center justify-center transition-colors duration-300"
               style={{ width: mobileBtnWidth, height: mobileBtnHeight }}
               onClick={scrollToWaitlist}
             >
               Join Waitlist
             </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;