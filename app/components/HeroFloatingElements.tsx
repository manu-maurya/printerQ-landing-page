"use client";
import React from "react";
// 1. Import 'LucideIcon' type from the library
import {
  FileText,
  Printer,
  Truck,
  MapPin,
  Paperclip,
  FileStack,
  LucideIcon,
} from "lucide-react";

// 2. Define the interface for your props
interface GlassCardProps {
  icon: LucideIcon;
  text: string;
  className?: string;
  animationDelay?: string;
}

// 3. Apply the interface to the component
const GlassCard = ({
  icon: Icon,
  text,
  className = "",
  animationDelay = "0s",
}: GlassCardProps) => (
  <div
    className={`flex items-center gap-3 p-3 pr-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl animate-float ${className}`}
    style={{ animationDelay }}
  >
    <div className="p-2 bg-white/10 rounded-lg text-primary-light">
      <Icon size={20} />
    </div>
    <span className="text-text-secondary-light font-medium text-sm whitespace-nowrap">
      {text}
    </span>
  </div>
);

const HeroFloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* LEFT SIDE */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 flex-col gap-8 hidden lg:flex opacity-60 hover:opacity-100 transition-opacity duration-500">
        <GlassCard
          icon={FileStack}
          text="Instant Documents"
          className="-rotate-6 translate-x-4"
          animationDelay="0s"
        />
        <GlassCard
          icon={Printer}
          text="Mobile Printing"
          className="rotate-3 -translate-x-2 scale-110"
          animationDelay="1.5s"
        />
        <GlassCard
          icon={MapPin}
          text="Any Location"
          className="-rotate-3 translate-x-6"
          animationDelay="0.5s"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-8 lg:flex opacity-60 hover:opacity-100 transition-opacity duration-500 items-end">
        <GlassCard
          icon={Truck}
          text="Quick Delivery"
          className="rotate-6 -translate-x-4"
          animationDelay="1s"
        />
        <GlassCard
          icon={FileText}
          text="High Quality Prints"
          className="-rotate-3 translate-x-2 scale-110"
          animationDelay="2.5s"
        />
        <GlassCard
          icon={Paperclip}
          text="Formats Supported"
          className="rotate-3 -translate-x-6"
          animationDelay="0.2s"
        />
      </div>
    </div>
  );
};

export default HeroFloatingElements;
