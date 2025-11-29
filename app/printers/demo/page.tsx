"use client";
import React from "react";
import Link from "next/link";
import { Banknote, Clock, ShieldCheck, ArrowRight } from "lucide-react";
// Adjust imports based on your actual path
import GlassNavbar from "@/app/components/NavBar"; 
import Footer from "@/app/components/Footer";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-p-grey-dark text-p-cream selection:bg-p selection:text-white">
      {/* <GlassNavbar /> */}

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-p/30 bg-p/10 text-p text-sm font-bold tracking-widest uppercase mb-8">
            For Printer Owners
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Turn your printer into a <br />
            <span className="bg-linear-to-r from-p to-white bg-clip-text text-transparent">
              passive income machine.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the printerQ network. Monetize your idle hardware, help your local community print instantly, and get paid weekly.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
               href="/#waitlist" 
               className="px-8 py-4 bg-p hover:bg-p-dark text-white font-bold rounded-full text-lg transition-all shadow-lg shadow-p/20 flex items-center gap-2"
            >
              Join the Network <ArrowRight size={20}/>
            </Link>
            <Link 
               href="/printers/apps" 
               className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-full text-lg transition-all"
            >
              Download App
            </Link>
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-p/50 transition-colors group">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <Banknote size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn on every page</h3>
              <p className="text-text-secondary-light leading-relaxed">
                Set your own prices per page. We take a minimal commission, you keep the majority of the profit. Payouts are automated every week.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-p/50 transition-colors group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Work when you want</h3>
              <p className="text-text-secondary-light leading-relaxed">
                Toggle your status to "Online" only when you are available. You have full control over your schedule and workload.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-p/50 transition-colors group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
              <p className="text-text-secondary-light leading-relaxed">
                No cash handling. All payments are processed securely through the app before the print job even starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STEPS SECTION --- */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
            
            <div className="space-y-12">
                <div className="flex md:items-center gap-8">
                    <div className="text-5xl font-black text-white/10">01</div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Sign up & Verify</h3>
                        <p className="text-text-secondary-light">Create an account, list your printer specs (B&W, Color, Laser), and verify your location.</p>
                    </div>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                
                <div className="flex md:items-center gap-8">
                    <div className="text-5xl font-black text-white/10">02</div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Receive Orders</h3>
                        <p className="text-text-secondary-light">Get notifications when a user nearby needs a print. Accept the job with one tap.</p>
                    </div>
                </div>
                <div className="w-full h-px bg-white/10"></div>

                <div className="flex md:items-center gap-8">
                    <div className="text-5xl font-black text-white/10">03</div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Print & Handover</h3>
                        <p className="text-text-secondary-light">Print the document. A delivery partner will arrive to pick it up, or the user will collect it.</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}