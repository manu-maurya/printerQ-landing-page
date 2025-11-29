"use client";
import React from "react";
import Link from "next/link";
import { Bike, Map, Wallet, ArrowRight } from "lucide-react";
import GlassNavbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function DeliveryPartnerPage() {
  return (
    <main className="min-h-screen bg-p-grey-dark text-p-cream selection:bg-p selection:text-white">
      <GlassNavbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-bold tracking-widest uppercase mb-8">
            For Delivery Partners
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Earn money on <br />
            <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              your daily commute.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Going from campus to the hostel? Or office to home? Pick up a print on the way and get paid instantly.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
               href="/#waitlist" 
               className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full text-lg transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2"
            >
              Start Delivering <ArrowRight size={20}/>
            </Link>
            <Link 
               href="/delivery/apps" 
               className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-full text-lg transition-all"
            >
              Get the App
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-yellow-500/50 transition-colors group">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 text-yellow-400 group-hover:scale-110 transition-transform">
                <Bike size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">No fixed hours</h3>
              <p className="text-text-secondary-light leading-relaxed">
                Log in whenever you are free. No shifts, no bosses. Ideally suited for students who want pocket money.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-yellow-500/50 transition-colors group">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                <Map size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hyperlocal Trips</h3>
              <p className="text-text-secondary-light leading-relaxed">
                Most deliveries are within 1-2 kms (e.g., inside college campuses or office parks). Quick trips, quick money.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-yellow-500/50 transition-colors group">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Payouts</h3>
              <p className="text-text-secondary-light leading-relaxed">
                Track your earnings in real-time. Withdraw your balance directly to your UPI ID whenever you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}