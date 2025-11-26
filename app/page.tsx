"use client";
import Hero from "./components/Hero";
import GlassNavbar from "./components/NavBar"; // or wherever it is
import HowItWorks from "./components/HowItWorks";
import { useEffect } from "react";
import Features from "./components/Features";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }, []);
  return (
    <main className="w-full relative">
      <GlassNavbar />
      <section id="">
        <Hero />
      </section>
      <section id="details">
        <HowItWorks />
      </section>
      <section id="features">
        <Features  />
      </section>
    </main>
  );
}
