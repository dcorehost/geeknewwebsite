import React from 'react';

const CompanyStory = () => (
  <section className="relative py-24 px-6 text-center max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg mb-20 hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
    
    {/* SVG tech background */}
    <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 600 600" fill="none">
      <circle cx="100" cy="100" r="80" stroke="#02C9B7" strokeOpacity="0.2" strokeWidth="2" />
      <circle cx="500" cy="150" r="60" stroke="#062B7E" strokeOpacity="0.2" strokeWidth="2" />
      <circle cx="300" cy="450" r="100" stroke="#02C9B7" strokeOpacity="0.15" strokeWidth="2" />
      <line x1="50" y1="550" x2="550" y2="50" stroke="#062B7E" strokeOpacity="0.05" strokeWidth="1" />
      <line x1="0" y1="300" x2="600" y2="300" stroke="#02C9B7" strokeOpacity="0.05" strokeWidth="1" />
    </svg>

    {/* Decorative floating circles */}
    <div className="absolute top-[-40px] left-[-30px] w-28 h-28 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1"></div>
    <div className="absolute bottom-[-50px] right-[-20px] w-36 h-36 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2"></div>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
      Our Story
    </h2>
    
    <p className="text-[#062B7E] text-lg md:text-xl leading-relaxed mb-6 hover:-translate-y-1 transition-transform duration-500">
      Founded by a group of tech enthusiasts, Geek Care has grown into a trusted IT partner for small and medium businesses.
    </p>
    
    <p className="text-[#062B7E] text-lg md:text-xl leading-relaxed hover:-translate-y-1 transition-transform duration-500">
      Our mission is to provide seamless IT support, robust cybersecurity, and innovative tech solutions that keep your business ahead of the curve.
    </p>
    
    {/* Optional CTA button */}
    <button className="mt-10 px-8 py-4 bg-[#02C9B7] text-white font-semibold rounded-lg shadow-lg hover:bg-[#029a97] hover:scale-105 transition-all duration-500">
      Learn More
    </button>
  </section>
);

export default CompanyStory;
