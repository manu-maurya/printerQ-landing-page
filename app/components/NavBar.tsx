"use client";
import React, { useState, useEffect } from "react";
import GlassSurface from "../../components/GlassSurface";

const GlassNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // DIMENSION CONFIGURATION
  const navHeight = 64;
  const btnWidth = 140;
  const gap = 12;

  const maxNavWidth = 800;
  const availableWidthForNav = windowWidth - btnWidth - gap - 48;

  const finalNavWidth =
    windowWidth > 0
      ? Math.min(Math.max(availableWidthForNav, 200), maxNavWidth)
      : maxNavWidth;

  if (windowWidth === 0) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none gap-3 px-6">
      {/* --- 1. MAIN NAVBAR PILL (Neutral Style) --- */}
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
          brightness={0.3}
          opacity={1}
          mixBlendMode="normal"
          // Neutral white border for the main bar
          className="border border-white/10 rounded-full"
        >
          <div
            className="flex items-center justify-between w-full h-full px-8 text-white"
            style={{ width: finalNavWidth, height: navHeight }}
          >
            <div className="flex items-center gap-2 cursor-pointer select-none">
              {/* Added text-primary to the dot for branding */}
              <p className="font-extrabold text-lg tracking-tight">
                printerQ<span className="text-primary">.</span>
              </p>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide text-white/80">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#docs" className="hover:text-white transition-colors">
                Docs
              </a>
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* --- 2. SEPARATE GLASS BUTTON (Accented Style) --- */}
      {/* UPDATED: Changed shadow to primary color for a blue glow */}
      <div className="pointer-events-auto rounded-full shadow-2xl shadow-primary/40 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
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
          // UPDATED: Changed border to use your primary brand color (at 50% opacity)
          className="border-2 border-s/50 rounded-full"
        >
          <button
            // Added text-primary-light for a subtle blue tint to the text too
            className="w-full h-full flex items-center justify-center text-p-cream font-bold text-xs tracking-widest uppercase"
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
