"use client";
import React from "react";
import { UploadCloud, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload & Customize",
    desc: "Select your document, choose paper type (A4, A3) and other configurations, and set color preferences instantly via the app.",
    icon: UploadCloud,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Select Neaerest Printer",
    desc: "Choose your desired, nearest printers available and submit your job. And choose payment of your preference.",
    icon: MapPin,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    title: "Delivery / Pickup",
    desc: "Meet the rider at your pinned location and collect your fresh, high-quality prints within minutes or manually pickup from the printer.",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      // 1. bg-[#F5F1DC]: Matches the 'Light Mode' logic of your Navbar
      // 2. py-32: Huge top padding ensures visual separation from Hero
      // 3. scroll-mt-32: CRITICAL. Prevents Navbar from covering the title when scrolling via links
      className="relative py-32 bg-p-cream scroll-mt-32 overflow-hidden"
    >
      {/* Background Pattern (Subtle Engineering Grid) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-7xl md:text-8xl lg:9xl font-extrabold text-p mb-6">
            How printerQ Works
          </h1>
          <h2 className="text-p-grey font-bold tracking-widest uppercase text-xs mb-4">
            The Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-p-grey mb-6">
            From Screen to Paper in{" "}
            <span className="text-s">Minutes</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Forget finding a cyber café or a printer shop. We bring the printer to your doorstep
            using our decentralized mobile fleet.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop Only) */}
          {/* This sits behind the cards to connect them */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-p-grey-dark/10 -z-10 rounded-full"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Big Background Number (Visual Depth) */}
              <div className="absolute -top-12 text-[140px] font-black text-p-grey-dark/5 leading-none select-none z-0 group-hover:-translate-y-15 transition-transform duration-500">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black/5 transition-transform duration-300 group-hover:scale-110 border border-gray-100">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${step.color} bg-opacity-20`}
                >
                  <step.icon size={32} strokeWidth={2.5} />
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 w-full relative z-10">
                <h4 className="text-xl font-bold text-p-grey-dark mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
