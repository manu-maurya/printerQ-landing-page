"use client";
import React from "react";
import Link from "next/link"; // Import Next.js Link

const Footer = () => {
  return (
    <section id="about" data-theme="dark">
      <footer className="px-5 w-full bg-black text-p-cream relative overflow-hidden flex flex-col justify-between pt-10 md:pt-20 ">
        {/* --- 1. TOP SECTION (Content) --- */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 mb-20 md:mb-32 z-10 relative">
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-4 md:gap-8">
            <div>
              <p className="font-extrabold text-2xl tracking-tight">printerQ</p>
              <p className="text-sm opacity-50 mt-2 max-w-xs leading-relaxed">
                Reinventing the way you print. <br />
                From anywhere, to everywhere.
              </p>
            </div>
            <p className="text-xs opacity-30 mt-auto">
              © 2025 PrinterQ Technologies Pvt Ltd.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            
            {/* PRINTERS COLUMN */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">
                For Printers
              </h4>
              <Link
                href="/printers/partner"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Partner With Us
              </Link>
              <Link
                href="/printers/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Apps For You
              </Link>
            </div>

            {/* DELIVERY COLUMN */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">
                For Delivery Partner
              </h4>
              <Link
                href="/delivery/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Partner With Us
              </Link>
              <Link
                href="/delivery/app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Apps For You
              </Link>
            </div>

            {/* SOCIALS COLUMN */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">
                Socials
              </h4>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Instagram
              </a>
            </div>

            {/* LEGAL COLUMN */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">
                Legal
              </h4>
              <Link
                href="/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Privacy
              </Link>
              <Link
                href="/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-p opacity-80 transition-colors text-lg font-medium"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
        
        {/* BIG TEXT BG */}
        <div className="w-full flex justify-center items-end leading-[0.8] select-none pointer-events-none overflow-hidden">
          <h1 className="text-[22vw] font-black tracking-tighter translate-y-4 md:translate-y-8 bg-linear-to-b from-p-cream to-transparent bg-clip-text text-transparent pr-[1vw]">
            printerQ
          </h1>
        </div>
      </footer>
    </section>
  );
};

export default Footer;