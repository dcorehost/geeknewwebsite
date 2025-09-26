import React from "react";

const PrivacyBanner = () => (
  <section className="relative bg-gradient-to-r from-[#062B7E] to-[#02C9B7] text-white py-28 px-6 text-center overflow-hidden rounded-b-3xl shadow-lg">
    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
      Privacy Policy
    </h1>
    <p className="max-w-2xl mx-auto text-lg opacity-90">
      We value your trust. Learn how we collect, use, and protect your data.
    </p>

    {/* Floating circles for effect */}
    <div className="absolute top-8 left-12 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
    <div className="absolute bottom-10 right-16 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
  </section>
);

export default PrivacyBanner;
