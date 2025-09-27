import React from "react";
import { FaTools, FaClock, FaUserShield, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaTools className="w-6 h-6 text-[#02c9b7]" />,
      title: "Expert Technicians",
      desc: "Certified professionals handle every repair with care and precision.",
    },
    {
      icon: <FaClock className="w-6 h-6 text-[#02c9b7]" />,
      title: "Quick Turnaround",
      desc: "Most repairs completed same-day to minimize downtime.",
    },
    {
      icon: <FaUserShield className="w-6 h-6 text-[#02c9b7]" />,
      title: "Genuine Parts",
      desc: "Only high-quality, original parts used for replacements.",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-[#02c9b7]" />,
      title: "Satisfaction Guarantee",
      desc: "We stand behind our work with a warranty on all repairs.",
    },
  ];

  return (
    <section className="bg-[#062b7e] text-white py-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Why Choose Us</h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Our expertise and commitment to quality make us the trusted choice for tablet repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center lg:justify-start">
            <img
              src="../src/assets/images/choose.jpg" 
              alt="Tablet service"
              className="rounded-2xl shadow-xl border border-white/10 w-full max-w-lg"
            />
          </div>

          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#02c9b7]/20 text-[#02c9b7] font-bold text-lg">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-gray-200 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
