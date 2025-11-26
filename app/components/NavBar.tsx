"use client";
import React, { useState, useEffect } from "react";
import GlassSurface from "../../components/GlassSurface";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false); // Default to Dark Mode (Cream Text)

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      // --- 1. Button Visibility ---
      if (window.scrollY > heroHeight * 0.8) {
        setShowNavButton(true);
      } else {
        setShowNavButton(false);
      }

      // --- 2. Theme Detection (The Math Method) ---
      // We check a point 60px down from the top of the screen (the middle of navbar)
      const triggerPoint = 60;

      // Get all sections that have a theme defined
      const sections = document.querySelectorAll("[data-theme]");

      let foundSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // LOGIC: Is the trigger point inside this section?
        // rect.top is the distance from the top of viewport to top of section
        // rect.bottom is the distance from top of viewport to bottom of section
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          const theme = section.getAttribute("data-theme");

          // Debugging: Check your console to see what the navbar sees!
          console.log(`Navbar is inside: ${section.id} | Theme: ${theme}`);

          setIsLightMode(theme === "light");
          foundSection = true;
        }
      });

      // Optional: If we are in a "gap" between sections, default to Dark Mode
      if (!foundSection) {
        // console.log("In a gap, defaulting to dark");
        // setIsLightMode(false);
      }
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- Dimensions ---
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

  // --- COLORS (Based on your HEX codes) ---
  // Light Mode (Cream BG) -> Text is Dark Grey (#1c1b21)
  // Dark Mode (Dark BG)  -> Text is Cream (#f5f1dc)
  const textColor = isLightMode ? "text-p-grey-dark " : "text-p-cream";
  const borderColor = isLightMode
    ? "border-p-grey-dark/10"
    : "border-p-cream/10";
  const btnBorderColor = isLightMode ? "border-p" : "border-p";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none gap-3 px-6 transition-all duration-500">
      {/* --- NAVBAR --- */}
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
          // Brighter glass in light mode for contrast
          brightness={isLightMode ? 0.6 : 0.3}
          opacity={1}
          mixBlendMode="normal"
          className={`transition-colors duration-300 border rounded-full ${borderColor}`}
        >
          <div
            className="flex items-center justify-between w-full h-full px-8"
            style={{ width: finalNavWidth, height: navHeight }}
          >
            {/* LOGO */}
            <a href="#">
              <div className="flex items-center gap-2 cursor-pointer select-none">
                <p
                  className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${textColor}`}
                >
                  printerQ
                </p>
              </div>
            </a>

            {/* LINKS */}
            <div
              className={`hidden md:flex items-center gap-8 font-bold text-sm tracking-wide transition-colors duration-300 opacity-80 ${textColor}`}
            >
              {["Details", "Features", "Printer", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:opacity-100 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* --- BUTTON --- */}
      <div
        className={`pointer-events-auto rounded-full shadow-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
          ${
            showNavButton
              ? "opacity-100 translate-x-0 w-[140px]"
              : "opacity-0 translate-x-10 w-0"
          }
          ${isLightMode ? "shadow-black/10" : "shadow-p/40"}
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
          brightness={isLightMode ? 0.6 : 0.3}
          opacity={1}
          mixBlendMode="normal"
          className={`transition-colors duration-300 border-2 rounded-full cursor-pointer ${btnBorderColor}`}
        >
          <button
            className={`w-full h-full flex items-center justify-center font-extrabold text-md tracking-widest whitespace-nowrap transition-colors duration-300 cursor-pointer ${textColor}`}
            style={{ width: btnWidth, height: navHeight }}
          >
            Join Waitlist
          </button>
        </GlassSurface>
      </div>
    </div>
  );
};

export default NavBar;
