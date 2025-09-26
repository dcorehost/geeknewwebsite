import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full bg-teal-900 rounded-3xl overflow-hidden shadow-xl">
 
        <div className="w-full md:w-1/2 p-8 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-teal-800 rounded-full transform -rotate-12"></div>
            <img
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Person with laptop"
              className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white shadow-lg"
            />
          </div>
        </div>

       
        <div className="w-full md:w-1/2 p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Assemble your powers</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Choose AI-powered apps from our Hero Store—a collection of native and third-party apps to supercharge the advisor journey.
            Your go-to toolkit packed with solutions that actually make a difference. Select the ones you want, or integrate your personal favorites.
          </p>
          <button className="bg-[#00c9b7] hover:bg-[#00b8a7] text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Discover Your Superpowers
          </button>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-100 flex items-end justify-start overflow-hidden">
          <svg className="h-20 w-48 text-teal-500" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C20 33.3 45 45 80 45C115 45 140 33.3 140 10C140 10 160 10 160 10C160 10 180 10 180 10C180 10 180 30 180 30C180 30 200 30 200 30"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"/>
            <path d="M0 10C0 33.3 25 45 60 45C95 45 120 33.3 120 10C120 10 140 10 140 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
