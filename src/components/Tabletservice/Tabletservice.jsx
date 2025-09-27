import React from "react";
import { FaMobileAlt, FaBatteryFull, FaChargingStation, FaTint, FaSyncAlt, FaBug } from "react-icons/fa";

export default function TabletServices() {
  const services = [
    {
      icon: <FaMobileAlt className="w-8 h-8 text-[#02c9b7]" />,
      title: "Screen Replacement",
      desc: "Cracked or broken tablet screen? We provide fast screen repairs using genuine parts.",
    },
    {
      icon: <FaBatteryFull className="w-8 h-8 text-[#02c9b7]" />,
      title: "Battery Replacement",
      desc: "Fix charging or battery drain issues with our reliable replacement service.",
    },
    {
      icon: <FaChargingStation className="w-8 h-8 text-[#02c9b7]" />,
      title: "Charging Port Repair",
      desc: "Resolve charging connectivity problems with precision port repairs.",
    },
    {
      icon: <FaTint className="w-8 h-8 text-[#02c9b7]" />,
      title: "Water Damage Repair",
      desc: "Accidental spills or drops? Our experts recover water-damaged tablets.",
    },
    {
      icon: <FaSyncAlt className="w-8 h-8 text-[#02c9b7]" />,
      title: "Software Troubleshooting",
      desc: "Resolve system crashes, updates, and OS issues for all tablet models.",
    },
    {
      icon: <FaBug className="w-8 h-8 text-[#02c9b7]" />,
      title: "Other Repairs",
      desc: "From camera issues to speaker malfunctions, we handle all kinds of tablet problems.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Types of Services Offered
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of professional tablet repair and support services for all major brands.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#062b7e]/10 rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
