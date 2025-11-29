"use client";
import React from "react";
import GlassSurface from "../../components/GlassSurface";

const Features = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-linear-to-t from-p-cream to-s/90 text-p-grey-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-extrabold mb-16 tracking-tight">
          Everything you need.
        </h2>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* CARD 1: LARGE DARK CARD (Triggers Navbar Switch) */}
          <div 
            className="md:col-span-2 row-span-2 relative rounded-[40px] overflow-hidden p-10 flex flex-col justify-between group transition-all duration-500 hover:scale-[0.99]"
            style={{ backgroundColor: "#1c1b21" }} // Explicit Dark Hex
            data-theme="dark" // <--- THE MAGIC ATTRIBUTE
          >
             {/* Background Gradient */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-p/20 blur-[100px] rounded-full pointer-events-none" />
             
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-p/20 flex items-center justify-center text-p mb-6">
                  {/* Lock Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-4xl font-bold text-p-cream mb-4">
                  Zero-Touch Privacy.
                </h3>
                <p className="text-p-cream/60 text-lg max-w-md">
                   Your files are end-to-end encrypted. The shop owner never sees your file, 
                   they only see a "Print Job" request. The printer processes it automatically.
                </p>
             </div>

             {/* Visual Decor */}
             <div className="w-full h-32 bg-p-grey-dark/50 border border-p-cream/10 rounded-2xl mt-8 flex items-center gap-4 px-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-auto font-mono text-xs text-p-cream/40">ENCRYPTED_STREAM_V2</div>
             </div>
          </div>

          {/* CARD 2: LIGHT CARD */}
          <div className="bg-white border border-p-grey-dark/5 rounded-[40px] p-8 flex flex-col justify-center hover:shadow-xl transition-shadow duration-500">
             <h3 className="text-2xl font-bold mb-2">Live Tracking</h3>
             <p className="opacity-60">See exactly when your pages are printing.</p>
             {/* Simple progress bar visual */}
             <div className="w-full h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
                <div className="w-[70%] h-full bg-p rounded-full" />
             </div>
          </div>

          {/* CARD 3: LIGHT CARD */}
          <div className="bg-white border border-p-grey-dark/5 rounded-[40px] p-8 flex flex-col justify-center hover:shadow-xl transition-shadow duration-500">
             <h3 className="text-2xl font-bold mb-2">Smart Pricing</h3>
             <p className="opacity-60">Automatic bulk discounts for students.</p>
             <div className="mt-4 text-4xl font-extrabold text-p">
                ₹2<span className="text-lg text-black/40">/page</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;