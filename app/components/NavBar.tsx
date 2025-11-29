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

      // 2. Theme Logic
      const sections = document.querySelectorAll("[data-theme]");
      let foundSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          const theme = section.getAttribute("data-theme");
          setIsLightMode(theme === "light");
          foundSection = true;
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

  // --- DIMENSIONS & CONSTANTS ---
  const navHeight = 60; 
  const desktopBtnWidth = 140;
  
  // Mobile specific dimensions
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

  // --- DESKTOP THEME (Glassy & Elegant) ---
  const desktopText = isLightMode ? "text-p-grey-dark" : "text-p-cream";
  const desktopBorder = isLightMode ? "border-p-grey-dark/10" : "border-p-cream/10";
  const desktopBtnBorder = isLightMode ? "border-p" : "border-p";

  // --- MOBILE THEME (Bold & Visible) ---
  // You can make this completely different. Here I used a solid background style.
  const mobileBg = isLightMode ? "bg-p-grey-dark" : "bg-p-cream";
  const mobileText = isLightMode ? "text-p-cream" : "text-p-grey-dark";

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
            displace={10}
            distortionScale={-50}
            redOffset={1}
            greenOffset={1}
            blueOffset={5}
            brightness={isLightMode ? 0.6 : 0.3}
            opacity={1}
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
        // Fixed at BOTTOM-6
        className={`md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none transition-all duration-500
          ${showNavButton ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        {/* MOBILE BUTTON: 
           - Smaller Size (48px height)
           - Solid Background Color (No Glass) to distinguish it
           - Different Shadow
        */}
        <div className="pointer-events-auto shadow-2xl shadow-black/40 rounded-full overflow-hidden ">
             {/* Note: I removed GlassSurface here to show a completely 'different theme' */}
             <button
               className={`rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center transition-colors duration-300 ${mobileBg} ${mobileText}`}
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