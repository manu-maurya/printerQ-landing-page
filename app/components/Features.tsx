"use client";
import React from "react";
import { Printer, Zap, ShieldCheck, Wallet, ArrowUpRight } from "lucide-react";

const FEATURE_ITEMS = [
  {
    title: "Instant Print",
    desc: "Print to any network printer instantly.",
    icon: <Printer className="w-6 h-6" />,
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    title: "Hyper Delivery",
    desc: "Doorstep delivery in minutes.",
    icon: <Zap className="w-6 h-6" />,
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
  },
  {
    title: "Secure Cloud",
    desc: "End-to-end encrypted files.",
    icon: <ShieldCheck className="w-6 h-6" />,
    bg: "bg-green-500/10",
    text: "text-green-400",
  },
  {
    title: "Partner Earn",
    desc: "Monetize your idle printer.",
    icon: <Wallet className="w-6 h-6" />,
    bg: "bg-purple-500/10",
    text: "text-purple-400",
  },
];

const Features = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-linear-to-t from-p-cream to-s/90 text-p-grey-dark relative md:rounded-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center md:text-left text-p-grey-dark">
          Everything you need.
        </h2>

        <div className="flex flex-col gap-6 h-full mt-10">
          {/* --- CONTAINER 1: FEATURES BENTO GRID --- */}
          <div
            className="w-full bg-p-grey-dark rounded-[2.5rem] p-3 md:p-5 relative overflow-hidden shadow-2xl shadow-black/20"
            data-theme="dark"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-p/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 relative z-10">
              {FEATURE_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 rounded-3xl p-6 flex flex-col gap-4 group"
                >
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-9 h-9 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <ArrowUpRight
                      className="text-white/20 group-hover:text-white/60 transition-colors"
                      size={20}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-p-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CONTAINER 2: VISUAL --- */}
          <div className="w-full bg-white rounded-[2.5rem] p-4 md:p- shadow-xl border border-white/40 overflow-hidden group">
            <div className="relative  w-full rounded-4xl overflow-hidden bg-gray-50">
              <img
                src="/one.png"
                alt="Delivery Process from Shop to Home"
                className="w-full h-auto block transition-transform duration-700 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;