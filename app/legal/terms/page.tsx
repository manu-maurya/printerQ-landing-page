"use client";
import Footer from "@/app/components/Footer";
import { AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-p-grey-dark text-p-cream selection:bg-p selection:text-white">
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
            Terms of Service
          </h1>
          <div className="mb-12 p-4 md:p-6 rounded-3xl bg-p/10 border border-p flex items-start gap-4 text-p">
            <AlertTriangle className="shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-1">Developer Notice</h4>
              <p className="opacity-80 text-sm leading-relaxed">
                This document is currently a draft for demonstration purposes.
                It is not legally binding. By using this demo site, you
                acknowledge that no real services are being provided.
              </p>
            </div>
          </div>
          <p className="text-text-secondary-light mb-12 border-l-4 border-p pl-4">
            Last updated: November 29, 2025
          </p>

          <div className="space-y-12 text-lg text-text-secondary-light leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing our website or using our mobile application{" "}
                <strong>printerQ</strong>, you agree to be bound by these Terms
                of Service and to use the platform in accordance with these
                Terms, our Privacy Policy, and any additional terms and
                conditions that may apply to specific sections of the platform
                or to products and services available through the platform.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                2. User Accounts
              </h2>
              <p>
                When you create an account with us, you must provide us
                information that is accurate, complete, and current at all
                times. Failure to do so constitutes a breach of the Terms, which
                may result in immediate termination of your account on our
                Service.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                3. Content Liability
              </h2>
              <p>
                You are responsible for the content of the documents you upload
                for printing. printerQ does not monitor the content of user
                documents but reserves the right to refuse service for documents
                containing illegal or offensive material.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                4. Printing & Delivery
              </h2>
              <p>
                printerQ acts as an intermediary between users and printer
                owners/delivery partners. While we strive for timely service, we
                are not liable for delays caused by traffic, hardware failure at
                the printer partner's location, or force majeure events. Refunds
                are processed on a case-by-case basis.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-p-cream mb-4">
                5. Termination
              </h2>
              <p>
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
