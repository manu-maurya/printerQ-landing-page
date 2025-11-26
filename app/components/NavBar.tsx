"use client";
import React, { useState, useEffect } from "react";
import GlassSurface from "../../components/GlassSurface";

const GlassNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      // 1. VISIBILITY LOGIC (Button appears after 80% scroll)
      if (window.scrollY > heroHeight * 0.8) {
        setShowNavButton(true);
      } else {
        setShowNavButton(false);
      }

      // 2. THEME LOGIC (Switches to Light Mode after 90% scroll)
      if (window.scrollY > heroHeight * 0.9) {
        setIsLightMode(true);
      } else {
        setIsLightMode(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dimensions
  const navHeight = 60;
  const btnWidth = 140;
  const gap = 12;
  const widthToSubtract = showNavButton ? btnWidth + gap + 48 : 48;
  const maxNavWidth = 800;
  const availableWidthForNav = windowWidth - widthToSubtract;
  const finalNavWidth =
    windowWidth > 0
      ? Math.min(Math.max(availableWidthForNav, 200), maxNavWidth)
      : maxNavWidth;

  if (windowWidth === 0) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none gap-3 px-6 transition-all duration-500">
      {/* --- 1. MAIN NAVBAR --- */}
      <div className="pointer-events-auto rounded-full shadow-2xl shadow-black/50 transition-all duration-300">
        <GlassSurface
          width={finalNavWidth}
          height={navHeight}
          borderRadius={50}
          displace={10}
          distortionScale={-50}
          redOffset={1}
          greenOffset={1}
          blueOffset={5}
          // Adjust brightness slightly based on mode
          brightness={isLightMode ? 0.4 : 0.3}
          opacity={1}
          mixBlendMode="normal"
          className={`${
            isLightMode
              ? "border border-p-grey-dark/10 rounded-full"
              : "border border-p-cream/10 rounded-full"
          }`}
        >
          <div
            className="flex items-center justify-between w-full h-full px-8"
            style={{ width: finalNavWidth, height: navHeight }}
          >
            {/* LOGO */}
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <p
                className={`font-extrabold text-lg tracking-tight transition-colors duration-500 ${
                  isLightMode ? "text-p-grey-dark" : "text-p-cream"
                }`}
              >
                printerQ<span className="text-primary">.</span>
              </p>
            </div>

            {/* LINKS */}
            <div
              className={`hidden md:flex items-center gap-8 font-bold text-sm tracking-wide transition-colors duration-500 ${
                isLightMode ? "text-p-grey-dark/80" : "text-p-cream/80"
              }`}
            >
              <a
                href="#details"
                className={`hover:opacity-100 transition-opacity ${
                  isLightMode ? "hover:text-p-grey-dark" : "hover:text-p-cream"
                }`}
              >
                Details
              </a>
              <a
                href="#printer"
                className={`hover:opacity-100 transition-opacity ${
                  isLightMode ? "hover:text-p-grey-dark" : "hover:text-p-cream"
                }`}
              >
                Printer
              </a>
              <a
                href="#about"
                className={`hover:opacity-100 transition-opacity ${
                  isLightMode ? "hover:text-p-grey-dark" : "hover:text-p-cream"
                }`}
              >
                About
              </a>
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* --- 2. DYNAMIC THEMED BUTTON --- */}
      <div
        className={`pointer-events-auto rounded-full shadow-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden
          ${
            showNavButton
              ? "opacity-100 translate-x-0 w-[140px]"
              : "opacity-0 translate-x-10 w-0"
          }
          
          /* DYNAMIC SHADOW: Blue Glow in Dark Mode, Subtle Dark Shadow in Light Mode */
          ${isLightMode ? "shadow-black/20" : "shadow-primary/40"}
        `}
      >
        <GlassSurface
          width={btnWidth}
          height={navHeight}
          borderRadius={50}
          displace={10}
          distortionScale={-50}
          redOffset={1}
          greenOffset={1}
          blueOffset={5}
          brightness={0.3}
          opacity={1}
          mixBlendMode="normal"
          /* DYNAMIC BORDER: Primary Blue in Dark Mode, Dark Grey in Light Mode */
          className={`transition-colors duration-500 border-2 rounded-full hover:scale-105 ${
            isLightMode ? "border-p" : "border-p"
          }`}
        >
          <button
            /* DYNAMIC TEXT: Cream in Dark Mode, Dark Grey in Light Mode */
            className={`w-full h-full flex items-center justify-center font-extrabold text-md tracking-widest whitespace-nowrap transition-colors duration-500
              ${
                isLightMode
                  ? "bg-transparent text-p-grey-dark"
                  : "bg-transparent text-p-cream"
              }
            `}
            style={{ width: btnWidth, height: navHeight }}
          >
            Join Waitlist
          </button>
        </GlassSurface>
      </div>
    </div>
  );
};

export default GlassNavbar;
