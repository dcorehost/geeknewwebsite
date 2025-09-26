import React from "react";

const AboutGeek = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-t-8 border-teal-500">
    
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-gray-50">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-teal-500 overflow-hidden shadow-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"
                alt="Electronics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Electronics</h3>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          </div>
          <div className="text-gray-700 mb-8 space-y-4">
            <p className="text-lg">
              Our services include **Wi-Fi setup and troubleshooting, printer repair and maintenance, laptop and PC/Mac diagnostics, tablet and smartphone (iOS/Android) support, and complete network setup**.
            </p>
            <p className="text-lg">
              We ensure your devices run smoothly, so you can focus on what matters most.
            </p>
            <p className="text-lg">
              With a **client-first approach**, we assess your tech needs and provide customized solutions. Our team of experts is dedicated to ensuring your devices are secure, optimized, and always ready for use.
            </p>
          </div>
          <div className="flex items-center text-teal-600">
            <div className="w-4 h-4 bg-teal-500 rounded-full mr-3"></div>
            <p className="text-lg font-medium">Innovating tech support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGeek;
