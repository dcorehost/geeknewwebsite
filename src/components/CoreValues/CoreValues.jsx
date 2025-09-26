import React from "react";
import { FaLightbulb, FaHandshake, FaUsers, FaStar, FaRocket } from "react-icons/fa";

const values = [
  { title: "Innovation", icon: <FaLightbulb /> },
  { title: "Integrity", icon: <FaHandshake /> },
  { title: "Customer First", icon: <FaUsers /> },
  { title: "Collaboration", icon: <FaRocket /> },
  { title: "Excellence", icon: <FaStar /> },
];

const CoreValues = () => (
  <section className="relative py-24 px-6 text-center max-w-7xl mx-auto overflow-hidden">
    {/* Background floating circles */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2"></div>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
      Our Core Values
    </h2>

    <div className="flex flex-wrap justify-center gap-10">
      {values.map((val, idx) => (
        <div
          key={idx}
          className="relative group bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-60 cursor-pointer"
        >
          <div className="text-5xl text-[#02C9B7] mb-4 transform group-hover:rotate-12 transition-transform duration-500">
            {val.icon}
          </div>
          <p className="text-[#062B7E] text-lg font-semibold hover:text-[#02C9B7] transition-colors duration-500">
            {val.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default CoreValues;
