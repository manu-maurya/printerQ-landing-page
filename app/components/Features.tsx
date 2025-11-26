'use client';
import React from 'react';
import { ShieldCheck, Zap, Leaf, Smartphone, Lock, Globe } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-32 bg-[#F5F1DC] relative overflow-hidden">
      
      {/* Decorative Blob to break up the beige background */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-s font-bold tracking-widest uppercase text-md mb-4">
            Why printerQ?
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-p-grey-dark mb-6">
            More than just a <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-p to-p-dark">
              Printer on Wheels.
            </span>
          </h3>
          <p className="text-lg text-p-grey leading-relaxed">
            We've reimagined the entire printing infrastructure to be secure, sustainable, and insanely fast.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        {/* grid-cols-1 md:grid-cols-3 is the standard 3-column bento structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: SPEED (Span 2 cols) */}
          <div className="md:col-span-2 group relative overflow-hidden bg-p-grey rounded-4xl p-10 shadow-sm border border-black/5 hover:shadow-xl hover:shadow-p-cream/5 transition-all duration-500">
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Zap size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-p-cream mb-2">Lightning Fast Delivery</h4>
                    <p className="text-p-cream/50">Our decentralized fleet ensures a printer is never more than 10 minutes away from your location.</p>
                </div>
            </div>
            {/* Hover Decoration */}
            <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-p-grey-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card 2: SECURITY (Span 1 col) */}
          <div className="md:col-span-1 group relative overflow-hidden bg-p-grey-dark rounded-4xl p-10 shadow-sm hover:-translate-y-2 transition-all duration-500" data-theme="dark">
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-4">
                    <ShieldCheck size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white mb-2">End-to-End Encrypted</h4>
                    <p className="text-gray-400 text-sm">Your files are deleted instantly after printing. No logs kept.</p>
                </div>
            </div>
          </div>

          {/* Card 3: ECO (Span 1 col) */}
          <div className="md:col-span-1 group relative overflow-hidden bg-white rounded-4xl p-10 shadow-sm border border-black/5 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500">
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <Leaf size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-[#1C1B21] mb-2">Eco-Friendly Paper</h4>
                    <p className="text-gray-500 text-sm">We use 100% recycled paper and soy-based ink for every job.</p>
                </div>
            </div>
          </div>

          {/* Card 4: MOBILE APP (Span 2 cols) */}
          <div className="md:col-span-2 group relative overflow-hidden bg-white rounded-4xl p-10 shadow-sm border border-black/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-[#1C1B21] mb-2">Track in Real-Time</h4>
                    <p className="text-gray-500 max-w-md">Watch your document move through the city on our live map, just like ordering food.</p>
                </div>
            </div>
            {/* Visual: A mock map graphic could go here in the background */}
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                <Globe size={200} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;