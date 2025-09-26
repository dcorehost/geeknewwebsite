import React, { useEffect, useRef } from "react";

const stepsData = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start by understanding your WiFi needs, assessing your space, and recommending the best setup for seamless connectivity.",
    icon: "https://placehold.co/48x48/4f46e5/ffffff?text=C",
    color: "bg-indigo-500",
  },
  {
    number: "02",
    title: "Custom Installation",
    description:
      "Our certified technicians install high-performance WiFi routers and access points tailored to your environment, ensuring optimal coverage.",
    icon: "https://placehold.co/48x48/14b8a6/ffffff?text=I",
    color: "bg-teal-500",
  },
  {
    number: "03",
    title: "Testing & Optimization",
    description:
      "We rigorously test the network for speed, security, and reliability, fine-tuning settings to eliminate dead zones and boost performance.",
    icon: "https://placehold.co/48x48/f59e0b/ffffff?text=T",
    color: "bg-amber-500",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Enjoy 24/7 monitoring and proactive support to keep your WiFi running smoothly, with quick resolutions and system updates for any issues that arise.",
    icon: "https://placehold.co/48x48/ec4899/ffffff?text=S",
    color: "bg-pink-500",
  },
];

const StepCard = ({ step, isLast }) => {
  const cardRef = useRef();

  useEffect(() => {
    cardRef.current.classList.add("slide-in");
  }, []);

  return (
    <div
      className={`flex ${!isLast ? "pb-12 lg:pb-16" : ""} relative`}
      ref={cardRef}
    >
      {/* Connector Line */}
      {!isLast && (
        <div
          className="absolute top-0 left-6 lg:left-8 w-0.5 bg-gray-200 h-full transform translate-y-12 lg:translate-y-16"
          aria-hidden="true"
        />
      )}

      {/* Numbered Circle & Image Icon */}
      <div className="flex flex-col items-center mr-4 lg:mr-8 z-10">
        <div
          className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-white shadow-xl ${step.color}`}
        >
          <img
            src={step.icon}
            alt={`${step.title} icon`}
            className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-2 lg:pt-0 max-w-full">
        <div className="p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.01] border border-gray-100">
          <p
            className={`text-sm lg:text-base font-semibold uppercase tracking-wider mb-1 ${step.color.replace(
              "bg-",
              "text-"
            )}`}
          >
            Step {step.number}
          </p>
          <h3 className="text-xl lg:text-2xl font-extrabold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base lg:text-lg">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

const OurWifiProcess = () => {
  const sectionRef = useRef();

  useEffect(() => {
    sectionRef.current.classList.add("slide-in");
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Our Seamless 4-Step WiFi Setup Process
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-gray-600">
          From initial assessment to continuous monitoring, we ensure your home or
          office enjoys world-class connectivity without the headache.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          {stepsData.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              isLast={index === stepsData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWifiProcess;
