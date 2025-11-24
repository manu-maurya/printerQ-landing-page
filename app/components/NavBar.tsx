'use client';
import React, { useState, useEffect } from 'react';
import GlassSurface from '../../components/GlassSurface'; 
import { Home, FileText, Atom } from 'lucide-react'; // Assuming you use Lucide or similar icons

const GlassNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Slimmer Height (approx 64px based on image)
  const navHeight = 64;
  
  // 2. Floating width (leaves space on sides)
  const marginX = 100; // Wider margins to make it look like a pill in the center
  const finalWidth = Math.min(windowWidth - 32, 900); // Max width constraint creates the 'compact' look

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* pointer-events-none on wrapper allows clicking things next to the nav, 
          we re-enable pointer-events-auto on the nav itself. */}
      
      <div className="pointer-events-auto rounded-full shadow-2xl shadow-black/50">
        <GlassSurface
          width={finalWidth}
          height={navHeight}
          borderRadius={50} 
          
          // DARK GLASS SETTINGS
          displace={10}
          distortionScale={-50}
          redOffset={1}
          greenOffset={1}
          blueOffset={5}
          brightness={0.3} 
          opacity={1}      
          mixBlendMode="normal"
          
          // The thin white border is CRITICAL for this look
          className="border border-white/10 rounded-full" 
        >
          <div 
            className="flex items-center justify-between w-full h-full px-8 text-white"
            style={{ width: finalWidth, height: navHeight }}
          >
              {/* Left: Icon (React Logo style) */}
              <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                  <Atom size={24} className="text-white" /> {/* Or your logo */}
              </div>

              {/* Right: Links */}
              <div className="flex items-center gap-8 font-medium text-sm tracking-wide">
                  <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
                  <a href="#docs" className="hover:text-gray-300 transition-colors">Docs</a>
              </div>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
};

export default GlassNavbar;