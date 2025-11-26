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
    <main className="w-full relative">
      <GlassNavbar />

      <section id="hero" data-theme="dark">
        <Hero />
      </section>

      <section id="details" data-theme="light">
        <HowItWorks />
      </section>

      <section id="features" data-theme="light">
        <Features />
      </section>

      <section id="printer" data-theme="dark">
        <PrinterSection />
      </section>
      <section id="about">
      <Footer/>
      </section>
    </main>
  );
}
