import React from "react";

const WIFIService = () => {
  const service = {
    title: "WI-FI Setup & Troubleshooting",
    description:
      "We set up fast, secure, and reliable Wi-Fi networks for homes and offices. From installation to fixing weak signals and optimizing coverage, we’ve got you covered.",
    imageUrl: "/images/wifisetup.png",
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full object-cover h-48"
        src={service.imageUrl}
        alt={service.title}
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{service.title}</h2>
        <p className="text-gray-700 text-base mb-4">{service.description}</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Book Service
        </button>
      </div>
    </div>
  );
};

export default WIFIService;
