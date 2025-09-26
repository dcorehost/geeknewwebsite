import React from "react";
import { FaWifi, FaPrint, FaLaptop, FaDesktop, FaTabletAlt, FaMobileAlt, FaNetworkWired } from "react-icons/fa";

const OurServicesGeek = () => {
  const services = [
    { icon: <FaWifi />, title: "Wi-Fi", description: "Seamless connectivity setup & troubleshooting." },
    { icon: <FaPrint />, title: "Printers", description: "Repair, maintenance, and installation." },
    { icon: <FaLaptop />, title: "Laptops", description: "Diagnostics, repair, and optimization." },
    { icon: <FaDesktop />, title: "PC/Mac", description: "Comprehensive repair and maintenance." },
    { icon: <FaTabletAlt />, title: "Tablets", description: "Support for all tablet types." },
    { icon: <FaMobileAlt />, title: "iOS/Android", description: "Troubleshooting & optimization." },
    { icon: <FaNetworkWired />, title: "Network Setup", description: "Secure network setup for home & office." }
  ];

  return (
    <div
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/man-repairing-circuit-board-laptop_1098-14844.jpg?t=st=1758881515~exp=1758885115~hmac=debf49e54b6301d4c59ec6a0c7c16c08bbd280d0df84ba724b0384ad24b99ad1&w=1480')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#02C9B7]/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#062B7E]/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-#042879 mb-4 drop-shadow-lg">
          Complete Tech Support on All Devices
        </h2>
        <p className="text-lg md:text-xl text-white/90">
          You and Your Business Can Count On
        </p>
      </div>

      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-gradient-to-r from-[#02C9B7] to-[#062B7E]"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-4 rounded-full bg-gradient-to-tr from-[#02C9B7] to-[#062B7E] text-white text-3xl shadow-lg hover:scale-110 transform transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesGeek;
