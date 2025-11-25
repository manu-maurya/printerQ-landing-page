import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for consistency

const ComingSoonBadge = () => {
  return (
    // Outer dark pill container
    <a 
      href="#waitlist" // Optional: make the whole badge clickable to scroll down
      className="group relative inline-flex items-center gap-3 p-1 pr-4 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-transform hover:scale-105 cursor-pointer"
    >
        <span className="absolute -inset-2 bg-p rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -z-10"></span>
      {/* Inner purple 'New' badge */}
      <span className="flex items-center gap-1 px-3 py-1 bg-p rounded-full">
        <span className="text-white text-xs font-bold uppercase tracking-wider">New</span>
        <span className="text-sm">🎉</span>
      </span>

      {/* Text & Arrow */}
      <span className="text-p-cream font-medium text-sm flex items-center gap-1">
        Coming Soon <ArrowRight size={16} className="text-text-secondary" />
      </span>
    </a>
  );
};

export default ComingSoonBadge;