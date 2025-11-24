import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import GlassNavbar from "./components/NavBar";

export default function Home(){
  return(
    <div className="relative min-h-screen bg-p-cream w-full">
      <GlassNavbar/>
      <Hero/>
      <HowItWorks/>
    </div>
  )
}