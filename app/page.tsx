"use client";
import Hero from "./components/Hero";
import GlassNavbar from "./components/NavBar";
import HowItWorks from "./components/HowItWorks";
import { useEffect } from "react";
import Features from "./components/Features";
import PrinterSection from "./components/PrinterSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <main className="w-full relative bg-p-grey-dark">
      <GlassNavbar />

      {/* 1. HERO (Base Layer) */}
      <section
        id="hero"
        data-theme="dark"
        className="
          sticky top-0 z-0 h-screen 
          md:static md:h-auto md:z-auto
          flex flex-col justify-center bg-p-cream 
        "
      >
        <Hero />
      </section>

      {/* 2. DETAILS (Slides over Hero) */}
      <section
        id="details"
        data-theme="light"
        className="
          sticky top-0 z-10 min-h-screen shadow-[0_-10px_40px_rgba(0,0,0,0.2)]
          rounded-t-[2.5rem] overflow-hidden
          md:static md:h-auto md:shadow-none md:z-auto md:rounded-none md:overflow-visible
          flex flex-col justify-start md:justify-center md:pt-0 
          bg-p-cream
        "
      >
        <HowItWorks />
      </section>

      {/* 3. FEATURES (Slides over Details) */}
      <section
        id="features"
        data-theme="light"
        className="
          sticky top-0 z-20 min-h-screen shadow-[0_-10px_40px_rgba(0,0,0,0.2)]
          rounded-t-[2.5rem] overflow-hidden
          md:static md:h-auto md:shadow-none md:z-auto md:rounded-none md:overflow-visible
          flex flex-col justify-start md:justify-center md:pt-0
          bg-p-cream
        "
      >
        <Features />
      </section>

      {/* 4. & 5. FINAL GROUP (Printer + Footer) */}
      <div 
        className="
          relative z-30 bg-p-grey-dark shadow-[0_-10px_40px_rgba(0,0,0,0.3)]
          rounded-t-[2.5rem] overflow-hidden
          md:static md:bg-transparent md:shadow-none md:z-auto md:rounded-none md:overflow-visible
        "
      >
        <section
          id="printer"
          data-theme="dark"
          // Added pt-20 for mobile visual breathing room
          className="flex flex-col justify-center bg-p-grey-dark pt-20 md:pt-0"
        >
          <PrinterSection />
        </section>

        <section
          id="about"
          className="bg-black"
        >
          <Footer />
        </section>
      </div>

    </main>
  );
}