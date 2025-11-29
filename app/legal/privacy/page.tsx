"use client";

import Footer from "@/app/components/Footer";
import { AlertTriangle } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-p-grey-dark text-p-cream selection:bg-p selection:text-white">
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-4 md:p-6 rounded-3xl bg-p/10 border border-p flex items-start gap-4 text-p">
            <AlertTriangle className="shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-1">Developer Notice</h4>
              <p className="opacity-80 text-sm leading-relaxed">
                This document is currently a draft for demonstration purposes.
                It is not legally binding and does not relect the final data
                handling practices of <strong>printerQ</strong>.
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
            Privacy Policy
          </h1>
          <p className="text-text-secondary-light mb-12 border-l-4 border-p pl-4">
            Last updated: November 29, 2025
          </p>

          <div className="space-y-12 text-lg text-text-secondary-light leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>printerQ</strong> ("we," "our," or "us"). We
                respect your privacy and are committed to protecting your
                personal data. This privacy policy will inform you as to how we
                look after your personal data when you visit our website or use
                our mobile applications.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                2. The Data We Collect
              </h2>
              <p className="mb-4">
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity Data:</strong> includes first name, last
                  name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data:</strong> includes billing address,
                  delivery address, email address and telephone numbers.
                </li>
                <li>
                  <strong>Transaction Data:</strong> includes details about
                  payments to and from you and other details of products you
                  have purchased from us.
                </li>
                <li>
                  <strong>Location Data:</strong> includes your real-time
                  location to facilitate hyperlocal printing and delivery
                  services.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                3. How We Use Your Data
              </h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To register you as a new customer or partner.</li>
                <li>
                  To process and deliver your order including: Manage payments,
                  fees and charges.
                </li>
                <li>To manage our relationship with you.</li>
                <li>
                  To make suggestions and recommendations to you about goods or
                  services that may be of interest to you.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                4. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
