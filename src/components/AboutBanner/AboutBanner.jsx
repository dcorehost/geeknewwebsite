import React from 'react';
import { FaCloud, FaLaptopCode, FaNetworkWired, FaShieldAlt, FaMobileAlt, FaServer } from 'react-icons/fa';

const AboutBanner = () => (
  <section className="relative bg-gradient-to-r from-[#062B7E] to-[#02C9B7] text-white py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
    
    {/* Floating Tech Icons */}
    <FaCloud className="absolute top-12 left-12 text-5xl text-white/30 animate-bounce-slow" />
    <FaLaptopCode className="absolute top-1/4 right-20 text-5xl text-white/30 animate-pulse" />
    <FaNetworkWired className="absolute bottom-20 left-1/4 text-6xl text-white/20 animate-spin-slow" />
    <FaShieldAlt className="absolute bottom-16 right-10 text-5xl text-white/30 animate-bounce-slow" />
    <FaMobileAlt className="absolute top-1/3 left-1/3 text-4xl text-white/30 animate-ping-slow" />
    <FaServer className="absolute bottom-1/4 right-1/3 text-6xl text-white/20 animate-pulse" />

    {/* Glassmorphic Content */}
    <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-12 max-w-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 hover:text-[#02C9B7] transition-colors duration-500">
        About Geek Care
      </h1>
      <p className="text-lg md:text-xl leading-relaxed mb-8 hover:opacity-90 transition-opacity duration-500">
        Delivering innovative IT solutions to help businesses operate efficiently, securely, and productively. 
        With a strong focus on innovation, Geek Care is your trusted partner for future-ready technology.
      </p>
      <button className="px-8 py-4 bg-[#02C9B7] text-white font-semibold rounded-lg shadow-lg hover:bg-[#029a97] hover:scale-105 transition-all duration-500">
        Contact Us
      </button>
    </div>
  </section>
);

export default AboutBanner;
