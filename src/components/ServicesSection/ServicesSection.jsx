import React from "react";
import { FaHeadset, FaShieldAlt, FaServer, FaNetworkWired, FaMobileAlt } from "react-icons/fa";

const services = [
  { title: "Remote IT Support", icon: <FaHeadset /> },
  { title: "Managed IT Services", icon: <FaServer /> },
  { title: "Cybersecurity & Monitoring", icon: <FaShieldAlt /> },
  { title: "Data Backup & Recovery", icon: <FaNetworkWired /> },
  { title: "IT Consulting & Strategy", icon: <FaMobileAlt /> },
];

const ServicesSection = () => (
  <section className="relative py-24 px-6 text-center max-w-6xl mx-auto overflow-hidden">
    {/* Tech-style subtle background */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#062B7E]/10 to-[#02C9B7]/10 -z-10 rounded-3xl"></div>
    <div className="absolute top-0 left-0 w-32 h-32 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2"></div>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
      Our Services
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="relative group bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105"
        >
          <div className="text-5xl text-[#02C9B7] mb-4 transform group-hover:rotate-12 transition-transform duration-500">
            {service.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#062B7E] group-hover:text-[#02C9B7] transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-[#062B7E]/90 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ligula eu ligula.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
