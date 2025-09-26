import React from "react";

const HeroSection = () => {
  return (
    <section className="hero bg-black text-white flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-4">Want to Repair your Laptop?</h1>
      <p className="text-xl mb-6">We are Just one Call Away</p>
      <a href="tel:18003090899" className="text-yellow-400 text-2xl font-bold">
        Call Us 1800-3090-899
      </a>
    </section>
  );
};

export default HeroSection;
