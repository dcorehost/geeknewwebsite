import React from "react";

const PrivacySection = ({ title, content }) => (
  <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-500">
    <h2 className="text-2xl font-bold mb-4 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
      {title}
    </h2>
    <p className="text-gray-700 leading-relaxed">{content}</p>
  </div>
);

export default PrivacySection;
