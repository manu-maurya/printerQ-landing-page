"use client";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import Link from "next/link";
import {
  Gift,
  Wallet,
  Clock,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Printer,
  Zap,
} from "lucide-react";

const FAQS = [
  {
    question: "Do I need a commercial printer to join?",
    answer:
      "Not at all! You can join with a standard home Laser or Inkjet printer. You just need to specify your printer type (B&W or Color) during registration so we can match you with the right jobs.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Earnings are tracked in real-time on your dashboard. We process payouts weekly directly to your registered UPI ID or Bank Account.",
  },
  {
    question: "Who provides the paper and ink?",
    answer:
      "You are responsible for your own paper and ink. However, our pricing model allows you to set rates that comfortably cover these costs while ensuring a healthy profit margin.",
  },
  {
    question: "Can I decline a print job?",
    answer:
      "Yes. When you are 'Online', you get job requests. You can accept or decline them based on your current capacity or paper stock.",
  },
  {
    question: "Is my location shared publicly?",
    answer:
      "We share your approximate location with users to calculate distance. Your exact address is only revealed to the specific user (or delivery partner) once you accept their order.",
  },
];
const Page = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <main className="min-h-screen bg-p-cream text-p-cream selection:bg-s selection:text-white flex flex-col">
      <section className="relative w-full h-screen flex flex-col justify-center bg-p-grey-dark rounded-br-4xl rounded-bl-4xl">
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
          <Link href="/">
            <h1 className="font-extrabold text-3xl tracking-tight text-p-cream drop-shadow-md hover:opacity-80 transition-opacity">
              printerQ
            </h1>
          </Link>
        </div>
        <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
          <button className=" px-8 py-3 bg-transparent hover:bg-p-cream/10 backdrop-blur-md border border-s rounded-full font-semibold text-lg text-p-cream hover:scale-105 transition-all cursor-pointer">
            Login
          </button>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 max-w-md mx-auto rounded-full bg-p-grey/30 backdrop-blur-md mb-4 text-left">
            <div className="p-2 bg-s/20 rounded-full text-s shrink-0">
              <Gift size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white leading-tight mb-1 text-xl">
                0% commission for 1st month!
              </h4>
              <p className="text-xs text-text-secondary-light font-normal">
                Only valid for new partners.
              </p>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
            Your Printer. <br />
            <span className="text-s">Your Business.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-s hover:bg-s/90 text-white font-bold rounded-full text-lg transition-all hover:scale-105 ">
              Register Your Printer
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-lg transition-all">
              How it Works
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-p-cream text-p-grey-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -translate-y-1/2 z-0"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold relative z-10 bg-p-cream px-8 inline-block">
              Why should you partner with printerQ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 text-s">
                <Wallet size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Passive Income</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                Turn your idle printer into a revenue stream. Accept print jobs from users nearby and get paid weekly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 text-s">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hyperlocal Reach</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                Reach customers within a 1-2km radius who need prints urgently. No marketing needed.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 text-s">
                <Clock size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Total Flexibility</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                You are in control. Go online or offline whenever you want. Work on your own terms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative overflow-hidden bg-p-grey-dark rounded-tr-4xl rounded-tl-4xl">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-s/5 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-s font-bold tracking-widest uppercase mb-4">
                Workflow
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-p-cream mb-12">
                From setup to payout <br /> in 3 steps.
              </h2>

              <div className="space-y-10">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-s flex items-center justify-center text-black font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-white/10 mt-4"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Register & Verify
                    </h4>
                    <p className="text-text-secondary-light">
                      Create an account, enter your printer details (Model,
                      B&W/Color), and verify your location.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="w-0.5 h-full bg-white/10 mt-4"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Accept Jobs</h4>
                    <p className="text-text-secondary-light">
                      Get notified when an order comes in. Review the file page
                      count and accept it.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Print & Handover</h4>
                    <p className="text-text-secondary-light">
                      Print the document. Hand it over to the delivery partner
                      or the user directly. Get paid.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual/Image Content */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-4xl p-8 px-6 backdrop-blur-sm">
                <div className="absolute -top-6 -right-6 bg-s text-black font-bold px-6 py-4 rounded-full shadow-xl flex items-center gap-2 animate-bounce">
                  <Zap size={20} fill="black" />
                  <span>Instant Alert!</span>
                </div>

                {/* Mock Notification UI */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm text-gray-400 uppercase tracking-wider font-bold mb-6">
                    New Order Request
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div>
                      <div className="h-4 w-32 bg-gray-600 rounded mb-2"></div>
                      <div className="h-3 w-20 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-4xl  p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Printer size={18} className="text-s" />
                      <span className="text-white">
                        5 Pages • Black & White
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Project_Report_Final.pdf
                    </div>
                  </div>
                  <button className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-colors">
                    Accept Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-p-grey">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-p-cream">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaqIndex === index ? "bg-white/5" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-p-cream pr-4">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-s shrink-0" />
                  ) : (
                    <ChevronDown className="text-text-secondary-light shrink-0" />
                  )}
                </button>

                {/* Answer Dropdown */}
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 text-text-secondary-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary-light">
              Still have questions?{" "}
              <Link
                href="#"
                className="text-s underline hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
