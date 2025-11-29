"use client";
import React, { useState, useEffect } from "react";
import GlassSurface from "../../components/GlassSurface";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const triggerPoint = 60;

      // 1. Visibility Logic
      setShowNavButton(window.scrollY > heroHeight * 0.8);

      // 2. Theme Logic (For Desktop Only)
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

  // --- DIMENSIONS ---
  const navHeight = 60; 
  const desktopBtnWidth = 140;
  const mobileBtnHeight = 48; 
  const mobileBtnWidth = 150;

  // Calculation for the Desktop Navbar width
  const gap = 12;
  const widthToSubtract = showNavButton ? desktopBtnWidth + gap + 48 : 48;
  const maxNavWidth = 800;
  const availableWidthForNav = windowWidth - widthToSubtract;
  const finalNavWidth =
    windowWidth > 0
      ? Math.min(Math.max(availableWidthForNav, 200), maxNavWidth)
      : maxNavWidth;

  if (windowWidth === 0) return null;

  // --- DESKTOP THEME COLORS (Dynamic) ---
  const desktopText = isLightMode ? "text-p-grey-dark" : "text-p-cream";
  const desktopBorder = isLightMode ? "border-p-grey-dark/30" : "border-p-cream/30";
  const desktopBtnBorder = isLightMode ? "border-p" : "border-p";

  return (
    <>
      {/* ======================================= */}
      {/* 1. DESKTOP VIEW (Hidden on Mobile)      */}
      {/* ======================================= */}
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
              <a href="#">
                <div className="flex items-center gap-2 cursor-pointer select-none">
                  <p className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${desktopText}`}>
                    printerQ
                  </p>
                </div>
              </a>
              <div className={`flex items-center gap-8 font-bold text-sm tracking-wide transition-colors duration-300 opacity-80 ${desktopText}`}>
                {["Details", "Features", "Printer", "About"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </GlassSurface>
        </div>

        {/* Desktop Button (Dynamic Theme) */}
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
            >
              Join Waitlist
            </button>
          </GlassSurface>
        </div>
      </div>

      {/* ======================================= */}
      {/* 2. MOBILE VIEW (Hidden on Desktop)      */}
      {/* ======================================= */}
      <div 
        className={`md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none transition-all duration-500
          ${showNavButton ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        {/* MOBILE BUTTON (STATIC THEME) */}
        <div className="pointer-events-auto rounded-full overflow-hidden">
             {/* UPDATED: 
                - bg-p (Primary color)
                - text-white (Always white text)
                - No dynamic theme variables here 
             */}
             <button
               className="bg-p text-p-cream rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center transition-colors duration-300"
               style={{ width: mobileBtnWidth, height: mobileBtnHeight }}
             >
               Join Waitlist
             </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;