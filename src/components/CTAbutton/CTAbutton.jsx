import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-[#062b7e] to-[#02c9b7] py-24 lg:py-32 text-white overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Ready to Get Your Tablet Fixed?
        </h2>
        <p className="text-gray-200 text-lg sm:text-xl mb-8">
          Fast, reliable, and professional repair services for all tablet brands. Book your repair now and get back to what matters.
        </p>

        <a
          href="#book"
          className="inline-flex items-center gap-3 bg-white text-[#062b7e] font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300"
        >
          Book Your Repair
          <FaArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
