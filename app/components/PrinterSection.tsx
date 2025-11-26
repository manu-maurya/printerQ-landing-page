"use client";
import React from "react";

const iphoneMockupImg = "/path/to/your/iphone-qr-mockup.png";

const PrinterSection = () => {
  return (
    <section
      id="printer-join"
      // 1. REMOVED 'overflow-hidden' from here so the top curve isn't cut off
      className="relative py-32 bg-p-grey-dark mt-32"
    >
      {/* --- THE FIX --- */}
      {/* We create a wrapper that is positioned UP (-top-48), 
          but strictly limits width (overflow-hidden). 
          This contains the wide curve inside it. */}
      <div className="absolute -top-24 md:-top-48 left-0 right-0 h-24 md:h-48 overflow-hidden pointer-events-none z-0" data-theme="dark">
        {/* The Curve itself (Scaled wide) */}
        <div
          className="w-full h-full bg-p-grey-dark rounded-t-[100%]"
          style={{ transform: "scaleX(1.5)" }}
          data-theme="dark"
        ></div>
      </div>
      {/* ---------------- */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- MAIN CONTENT RECTANGLE --- */}
        <div className="bg-linear-to-bl from-p to-p-dark rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-p/20">
          <div className="flex-1 text-center md:text-left space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-p-cream leading-tight">
              Printers, join the network.
            </h2>
            <p className="text-lg text-p-cream leading-relaxed max-w-lg">
              Turn your underutilized printer into a revenue stream. Sign up,
              get verified, and start accepting print jobs from users nearby.
            </p>

            <button className="inline-block px-8 py-4 bg-s text-p-cream font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              Become a Partner
            </button>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl -z-10"></div>

              <img
                src={iphoneMockupImg}
                alt="iPhone"
                className="w-[280px] md:w-[320px] drop-shadow-2xl relative z-10 rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
              />

              <div className="absolute -bottom-8 -left-8 bg-[#1C1B21] p-4 rounded-2xl shadow-xl animate-bounce-slow border border-white/10">
                <span className="text-3xl">📲</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinterSection;
