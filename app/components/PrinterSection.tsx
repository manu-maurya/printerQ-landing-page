"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, CheckCircle, Loader2 } from "lucide-react";

const PrinterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Location Search State ---
  const [locationQuery, setLocationQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- 1. Handle Click Outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- 2. Fetch Cities from OpenStreetMap (India Only) ---
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (locationQuery.length > 2) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${locationQuery}&addressdetails=1&limit=5&featuretype=city&countrycodes=in`
          );
          const data = await response.json();
          setSuggestions(data);
          setShowDropdown(true);
        } catch (error) {
          console.error("Error fetching location:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [locationQuery]);

  // Handle selecting a city
  const selectCity = (cityData: any) => {
    const displayName = cityData.display_name;
    setLocationQuery(displayName);
    setShowDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="printer-join"
      // FIX IS HERE: Changed 'py-12 md:py-24' to 'pt-12 md:pt-24 pb-0'
      // This removes the bottom padding that was causing the dark gap
      className="relative pt-12 md:pt-24 pb-0 bg-p-grey-dark md:mt-32"
    >
      {/* Background Curve */}
      <div
        className="hidden md:flex absolute -top-21 md:-top-48 left-0 right-0 h-24 md:h-48 overflow-hidden pointer-events-none z-0"
        data-theme="dark"
      >
        <div
          className="w-full h-full bg-p-grey-dark rounded-t-[100%]"
          style={{ transform: "scaleX(1.5)" }}
        ></div>
      </div>

      {/* --- PART 1: PRINTER PARTNER CTA --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
        <div className="bg-linear-to-t from-p/40 to-transparent rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-p/20 border-4 border-p">
          <div className="flex-1 text-center md:text-left space-y-8 md:px-15">
            <h2 className="text-4xl md:text-5xl font-extrabold text-p-cream leading-tight">
              Printers, join the network.
            </h2>
            <p className="text-lg text-p-cream leading-relaxed max-w-lg">
              Turn your underutilized printer into a revenue stream. Sign up,
              get verified, and start accepting print jobs from users nearby.
            </p>
            <button className="inline-block px-8 py-4 bg-s text-p-cream font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              Become a Partner
            </button>
          </div>
          <div className="flex-1 md:flex justify-center md:justify-end relative hidden">
            <div className="w-[300px] h-[300px] border border-white/10 rounded-xl flex items-center justify-center text-white/20">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: WAITLIST FORM --- */}
      {/* This div now sits flush at the bottom of the section */}
      <div className="relative pb-6 md:py-12 bg-p-grey">
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-p-grey-dark to-transparent"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-extrabold text-p-cream mb-4">
              Get Early Access
            </h3>
            <p className="text-text-secondary-light text-lg">
              Check if printerQ is launching in your city soon.
            </p>
          </div>

          <div className="bg-p-grey-dark/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-p-cream ml-1"
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-p-grey-dark border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-p focus:ring-1 focus:ring-p transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-p-cream ml-1"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      className="w-full bg-p-grey-dark border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-p focus:ring-1 focus:ring-p transition-all"
                    />
                  </div>
                </div>

                {/* --- LIVE LOCATION SEARCH --- */}
                <div className="space-y-2 relative" ref={dropdownRef}>
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-p-cream ml-1"
                  >
                    Your City / Location
                  </label>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                      {isLoading ? (
                        <Loader2 size={20} className="animate-spin text-p" />
                      ) : (
                        <MapPin size={20} />
                      )}
                    </div>
                    <input
                      required
                      type="text"
                      id="location"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                      onFocus={() =>
                        suggestions.length > 0 && setShowDropdown(true)
                      }
                      placeholder="Search for your city(e.g, Bengaluru)"
                      className="w-full bg-p-grey-dark border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-p focus:ring-1 focus:ring-p transition-all"
                      autoComplete="off"
                    />
                  </div>

                  {/* DROPDOWN */}
                  {showDropdown && suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-2 bg-[#1C1B21] border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar">
                      <ul className="py-2">
                        {suggestions.map((item: any, index: number) => (
                          <li
                            key={index}
                            onClick={() => selectCity(item)}
                            className="px-4 py-3 hover:bg-white/10 cursor-pointer text-text-secondary-light hover:text-white transition-colors flex items-center gap-3 border-b border-white/5 last:border-0"
                          >
                            <MapPin
                              size={16}
                              className="opacity-50 shrink-0 mt-1 self-start"
                            />
                            <span className="text-sm">{item.display_name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {showDropdown &&
                    !isLoading &&
                    locationQuery.length > 2 &&
                    suggestions.length === 0 && (
                      <div className="absolute z-50 w-full mt-2 bg-[#1C1B21] border border-white/10 rounded-xl shadow-2xl p-4 text-center text-text-secondary-light">
                        <p className="text-sm">No cities found on the map.</p>
                      </div>
                    )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-p to-p-dark hover:brightness-110 text-white font-bold text-xl py-4 rounded-xl shadow-lg shadow-p/20 transition-all transform active:scale-95 md:mt-4"
                >
                  Join the Waitlist
                </button>
              </form>
            ) : (
              // Success State
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h4 className="text-3xl font-bold text-p-cream mb-4">
                  You're on the list!
                </h4>
                <p className="text-text-secondary-light text-lg px-8">
                  We'll notify you when <strong>printerQ</strong> launches near:{" "}
                  <br />
                  <span className="text-p font-semibold block mt-2 text-xl truncate">
                    {locationQuery}
                  </span>
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setLocationQuery("");
                    setSuggestions([]);
                  }}
                  className="mt-8 text-p underline hover:text-p-cream transition-colors"
                >
                  Register another email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinterSection;
