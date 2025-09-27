import React from "react";
import { FaUserCheck, FaLaptopHouse, FaDollarSign, FaBolt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Certified & Experienced Technicians",
      description:
        "Our team is certified and highly experienced to handle all technical issues efficiently.",
      color: "from-[#02C9B7] to-[#062B7E]",
    },
    {
      icon: <FaLaptopHouse />,
      title: "Doorstep / Remote Support Available",
      description:
        "Get support at your convenience, either at your doorstep or remotely.",
      color: "from-[#02C9B7] to-[#062B7E]",
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable & Transparent Pricing",
      description:
        "No hidden charges. We offer clear and competitive pricing for all services.",
      color: "from-[#02C9B7] to-[#062B7E]",
    },
    {
      icon: <FaBolt />,
      title: "Fast & Reliable Solutions",
      description:
        "We provide quick and dependable solutions to get you back on track.",
      color: "from-[#02C9B7] to-[#062B7E]",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg lg:text-xl mb-16 max-w-3xl">
          Expert solutions with certified technicians, doorstep support, transparent pricing, and fast, reliable service. We make your experience seamless and stress-free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-10 rounded-3xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl bg-gradient-to-br"
              style={{ backgroundImage: `linear-gradient(to bottom right, #02C9B7, #062B7E)` }}
            >
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-white text-[#062B7E] text-4xl shadow-lg"
              >
                {React.cloneElement(feature.icon, { className: "text-3xl" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
