"use client";
import React from "react";
import Footer from "@/app/components/Footer";
import GlassNavbar from "@/app/components/NavBar";

const Page = () => {
  return (
    <main className="min-h-screen bg-p-grey-dark flex flex-col justify-between relative">
      <div className="flex-1 flex items-center justify-center px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-p/10 rounded-full blur-[100px] pointer-events-none"></div>
          <section className="z-10 text-center max-w-5xl mx-auto">
            <h1 className="lg:text-8xl md:text-7xl text-5xl font-extrabold text-p-cream mb-6 leading-tight">
            printerQ Delivery Partner App
          </h1>
          <h2 className="lg:text-7xl md:text-6xl text-4xl font-bold bg-linear-to-l from-s to-p bg-clip-text text-transparent mb-4 animate-pulse leading-tight">
            Coming Soon
          </h2>
          <p className="text-text-secondary-light text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            We are crafting the ultimate experience for our delivery partners. 
            Stay tuned for the launch.
          </p>
          </section>
        </div>
    </main>
  );
};

export default Page;
