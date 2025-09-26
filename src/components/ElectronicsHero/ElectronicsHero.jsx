import React from "react";

const ElectronicsHero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
    
        <div className="relative w-full md:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-700">
          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Woman with headphones"
              className="w-48 h-48 object-cover rounded-full border-4 border-teal-400 mb-4 mx-auto"
            />
            <div className="absolute top-10 right-10 bg-teal-500 text-white p-3 rounded-xl shadow-lg">
              <p>Hi, I'm Priya. Need help with electronics?</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <img
              src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Smartphone"
              className="w-24 h-24 object-cover rounded-lg border-2 border-teal-400"
            />
            <img
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww"
              alt="Laptop"
              className="w-24 h-24 object-cover rounded-lg border-2 border-teal-400"
            />
            <img
              src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Headphones"
              className="w-24 h-24 object-cover rounded-lg border-2 border-teal-400"
            />
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Smartwatch"
              className="w-24 h-24 object-cover rounded-lg border-2 border-teal-400"
            />
          </div>
        </div>

     
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-gray-900">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">Tech<span className="text-teal-400">Hero</span></h1>
            <h2 className="text-3xl font-bold text-white mb-6">Your electronics guide. With AI superpowers.</h2>
            <p className="text-gray-300 text-lg mb-8">
              TechHero provides advisors a single, AI-powered workspace with everything at their fingertips to focus on what matters most—helping you find the best electronics for your needs.
            </p>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 w-fit">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsHero;
