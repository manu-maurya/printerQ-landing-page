"use client";

import ComingSoonBadge from "./ComingSoonBadge";
import HeroFloatingElements from "./HeroFloatingElements";

const Hero = () => {
  return (
    // 1. 'relative' allows us to position children absolutely inside this container
    <div className="relative flex items-center justify-center bg-p-grey-dark h-screen w-full">
      <HeroFloatingElements/>
      {/* Middle Content */}
      <section className="z-10 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <ComingSoonBadge/>
          <h1 className="lg:text-8xl md:text-7xl text-6xl font-extrabold text-p-cream mb-4">
            printerQ
          </h1>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold bg-linear-to-r from-p-cream to-text-secondary-light bg-clip-text text-transparent mb-4">
            Printer on Wheels
          </h1>
          <p className="lg:text-2xl md:text-xl text-lg font-medium text-text-secondary-light">
            Print documents anywhere, anytime with printerQ's mobile printing
            service.
          </p>
          <button className="mt-8 px-6 py-3 bg-linear-to-br from-p to-p-dark hover:scale-105 hover:border border-p-cream transition-transform text-white text-lg font-bold rounded-full relative">
            Join Waitlist
          </button>
        </div>
      </section>
      <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary-light font-medium animate-bounce whitespace-nowrap">
        Scroll down to explore &darr;
      </h3>
    </div>
  );
};

export default Hero;
