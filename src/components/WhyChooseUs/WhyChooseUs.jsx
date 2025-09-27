import React from "react";
import { FaUserCheck, FaLaptopHouse, FaDollarSign, FaBolt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Certified & Experienced Technicians",
      description: "Our team is certified and highly experienced to handle all technical issues efficiently.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaLaptopHouse />,
      title: "Doorstep / Remote Support Available",
      description: "Get support at your convenience, either at your doorstep or remotely.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable & Transparent Pricing",
      description: "No hidden charges. We offer clear and competitive pricing for all services.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaBolt />,
      title: "Fast & Reliable Solutions",
      description: "We provide quick and dependable solutions to get you back on track.",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto ${feature.color}`}
              >
                {React.cloneElement(feature.icon, { className: "text-2xl" })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
