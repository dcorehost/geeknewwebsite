import React from "react";

const WarrantyCard = ({ title, subtitle, description }) => {
  return (
    <div className="p-6 text-center border rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">
        {title} <span className="text-red-600">{subtitle}</span>
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:underline">
        Know More
      </a>
    </div>
  );
};

export default WarrantyCard;
