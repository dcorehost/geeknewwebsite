import React from 'react';

const Newsletter = ({ heading, placeholder }) => (
  <section className="relative py-24 px-4 text-center bg-white/10 backdrop-blur-2xl rounded-2xl mx-4 md:mx-20 shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
    
    {/* Decorative floating blobs */}
    <div className="absolute top-[-40px] left-[-30px] w-32 h-32 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1"></div>
    <div className="absolute bottom-[-50px] right-[-20px] w-40 h-40 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2"></div>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
      {heading || "Subscribe to our Newsletter"}
    </h2>
    <p className="text-[#062B7E] mb-8 max-w-xl mx-auto text-lg">
      Stay updated with the latest tech insights and updates from Geek Care.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
      <input 
        type="email" 
        placeholder={placeholder || "Enter your email"} 
        className="p-4 rounded-l-xl w-full sm:w-72 focus:outline-none border border-gray-300 hover:border-[#02C9B7] transition-all duration-500 shadow-inner bg-white/20 placeholder-[#062B7E]"
      />
      <button className="p-4 bg-gradient-to-r from-[#02C9B7] to-[#062B7E] text-white rounded-r-xl hover:scale-105 transition-transform duration-300 font-semibold shadow-lg hover:shadow-2xl cursor-pointer">
        Subscribe
      </button>
    </div>
  </section>
);

export default Newsletter;
