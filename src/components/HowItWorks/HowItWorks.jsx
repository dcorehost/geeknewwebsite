import React from "react";
import { CheckCircle } from "lucide-react"; 

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Book Your Service Online",
      description:
        "Choose your preferred service, select a convenient date and time, and book online in just a few clicks. It's simple and fast!",
    },
    {
      id: 2,
      title: "Get Expert Support",
      description:
        "Our certified experts will assist you either remotely or on-site, ensuring that your issue is resolved quickly and efficiently.",
    },
    {
      id: 3,
      title: "Sit Back & Relax",
      description:
        "Once booked, you can relax while we take care of everything. Enjoy hassle-free service and peace of mind!",
    },
  ];

  return (
    <div className="bg-green-50 py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-center" style={{ color: "#062B7E" }}>
          How It Works
        </h2>
        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.id} className="mb-10 flex items-start relative">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div
                  className="absolute left-8 top-12 h-full border-l-2"
                  style={{ borderColor: "#062B7E" }}
                />
              )}
              {/* Step Number */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white z-10 mt-1 text-xl"
                style={{ backgroundColor: "#02C9B7" }}
              >
                {step.id}
              </div>
              {/* Card */}
              <div className="ml-6 p-6 bg-white rounded-xl shadow-lg flex-1 border border-green-200">
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="font-bold text-2xl" style={{ color: "#02C9B7" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 ml-8">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
