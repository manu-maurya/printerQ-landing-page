"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const FEATURE_ITEMS = [
  {
    title: "Instant Print",
    desc: "Send documents to any printer shop from your mobile.",
    iconSrc: "/assets/copy.png",
    gridClass: "col-span-1 md:col-span-1",
  },
  {
    title: "No waiting in Queue",
    desc: "Printouts will be delivered to your Doorstep.",
    iconSrc: "/assets/delivery.png",
    gridClass: "col-span-1 md:col-span-1",
  },
  {
    title: "Lowest cost",
    desc: "Pay only for your printouts. No extra charges. And pay from any prefered payment methods.",
    iconSrc: "/assets/coin.png",
    gridClass: "col-span-2 md:col-span-1 md:row-span-2",
  },
  {
    title: "Your files, your customization",
    desc: "Choose between any supported formats(pdf,png,jpg,etc.,) and customize the configurations according to your needs.",
    iconSrc: "/assets/paper.png",
    gridClass: "col-span-2 md:col-span-2",
  },
];

const Features = () => {
  return (
    <div className="w-full py-8 md:py-24 bg-linear-to-t from-p-cream to-s/60 text-p-grey-dark relative md:rounded-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 text-center md:text-left text-p-grey-dark shrink-0">
          Everything you need.
        </h2>
        <h1 className=" text-4xl md:text-7xl font-extrabold mb-2 text-center md:text-left bg-linear-to-br from-p to-p-dark bg-clip-text text-transparent shrink-0'">
          We Deliver
        </h1>

        <div className="flex flex-col gap-4 md:gap-6 h-full mt-10 md:mt-10">
          {/* --- CONTAINER 1: FEATURES BENTO GRID --- */}
          <div
            className="w-full bg-linear-to-br from-p-grey to-p-grey-light rounded-2xl md:rounded-[2.5rem] p-2 md:p-10 relative overflow-hidden shadow-2xl shadow-black/20 flex flex-col justify-center"
            data-theme="dark"
          >
            <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px]  blur-[60px] md:blur-[80px] rounded-4xl pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 relative z-10 w-full">
              {FEATURE_ITEMS.map((item, index) => (
                <div
                  key={index}
                  // Added 'min-h-[130px]' to force cards to be taller on mobile
                  className={`bg-p-cream/5 border border-p-cream/5 hover:bg-p-cream/10 transition-all duration-300 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-row items-center justify-between gap-3 md:gap-6 group relative overflow-hidden min-h-[100px] md:min-h-0 ${item.gridClass}`}
                >
                  {/* Text Container */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
                    <h3 className="text-sm md:text-3xl font-bold text-p-cream mb-1 md:mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg text-gray-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="w-16 h-16 md:w-32 md:h-32 shrink-0 self-center md:self-auto">
                    <img
                      src={item.iconSrc}
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-150"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CONTAINER 2: VISUAL --- */}
          {/* Removed margin top, let gap handle spacing. Standard height. */}
          <div className="w-full bg-white rounded-4xl md:rounded-[2.5rem] p-3 md:p-6 shadow-xl border border-white/40 overflow-hidden group shrink-0">
            <div className="relative w-full rounded-2xl md:rounded-4xl overflow-hidden bg-gray-50">
              <img
                src="/assets/one.png"
                alt="Delivery Process"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
