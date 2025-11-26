"use client";
import React from "react";

const Footer = () => {
  return (
    <section id="#about">
    <footer className="w-full bg-black text-p-cream py-12 border-t border-white/10" data-theme="dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-extrabold text-2xl tracking-tight">
            printerQ
          </p>
          <p className="text-sm opacity-50 mt-2">
            © 2025 PrinterQ Technologies Pvt Ltd.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-bold opacity-70">
          <a href="#" className="hover:text-p hover:opacity-100 transition-colors">Twitter</a>
          <a href="#" className="hover:text-p hover:opacity-100 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-p hover:opacity-100 transition-colors">Email</a>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;