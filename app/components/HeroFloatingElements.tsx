"use client";

// import { motion } from "framer-motion"; // Optional: Use if you want smooth animations, otherwise standard CSS works too.
import { StickyNote, Printer, FileText, Send } from "lucide-react"; // I'm using icons, but you should replace these with <img /> tags

const HeroFloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* 1. Top Left: A Yellow Sticky Note */}
      {/* Replacing whitespaces with a messy, realistic note */}
      <div className="absolute top-[15%] left-[5%] md:left-[10%] animate-float-slow">
        <div className="bg-yellow-200 text-gray-800 p-4 w-40 h-40 shadow-xl -rotate-6 flex flex-col items-center justify-center font-handwriting rounded-sm">
          <span className="text-4xl mb-2">🖨️</span>
          <p className="font-bold text-sm text-center leading-tight">
            Need this printed ASAP!
          </p>
        </div>
      </div>

      {/* 2. Top Right: A Flying Paper Plane (Delivery concept) */}
      <div className="absolute top-[20%] right-[5%] md:right-[15%] animate-float-medium">
        {/* Replace this div with your <img src="/assets/paper-plane.png" /> */}
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-2xl rotate-12">
             <Send size={48} className="text-p-cream" />
        </div>
      </div>

      {/* 3. Bottom Left: A Stack of Papers */}
      <div className="absolute bottom-[20%] left-[8%] animate-float-fast">
         {/* Replace with <img src="/assets/paper-stack.png" /> */}
         <div className="relative">
            <div className="absolute top-2 left-2 w-24 h-32 bg-gray-200 rounded-md shadow-md rotate-[-10deg]"></div>
            <div className="absolute top-1 left-1 w-24 h-32 bg-gray-100 rounded-md shadow-md rotate-[-5deg]"></div>
            <div className="w-24 h-32 bg-white rounded-md shadow-lg flex items-center justify-center rotate-[5deg]">
                <FileText className="text-gray-400" />
            </div>
         </div>
      </div>

      {/* 4. Bottom Right: The Printer or Delivery Bike */}
      <div className="absolute bottom-[25%] right-[5%] md:right-[10%] animate-float-slow">
        {/* Replace with <img src="/assets/3d-printer.png" /> */}
        <div className="bg-linear-to-br from-p-dark to-black p-6 rounded-3xl border border-p-cream/20 shadow-2xl rotate-[-12deg]">
            <Printer size={64} className="text-p-cream" />
        </div>
      </div>
      
    </div>
  );
};

export default HeroFloatingElements;