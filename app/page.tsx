// app/page.js
import Hero from "./components/Hero";
import GlassNavbar from "./components/NavBar"; // or wherever it is
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main className="w-full relative">
      
      {/* Navbar sits on top (z-50) */}
      <GlassNavbar />
      
      {/* Hero takes full viewport height (h-screen) */}
      {/* id="home" allows the Navbar 'Home' link to scroll here */}
      <section id="home">
        <Hero />
      </section>

      {/* How It Works comes next */}
      {/* Because we added scroll-mt-32, the navbar won't cover the title */}
      <HowItWorks />

    </main>
  );
}