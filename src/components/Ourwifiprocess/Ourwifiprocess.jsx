import React, { useEffect, useRef } from "react";

const PRIMARY_COLOR = "#02C9B7";
const SECONDARY_COLOR = "#062B7E";

const stepsData = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start by understanding your WiFi needs, assessing your space, and recommending the best setup for seamless connectivity.",
    icon: "../src/assets/images/consultation.png",
    color: PRIMARY_COLOR,
  },
  {
    number: "02",
    title: "Custom Installation",
    description:
      "Our certified technicians install high-performance WiFi routers and access points tailored to your environment, ensuring optimal coverage.",
    icon: "../src/assets/images/custom.png",
    color: PRIMARY_COLOR,
  },
  {
    number: "03",
    title: "Testing & Optimization",
    description:
      "We rigorously test the network for speed, security, and reliability, fine-tuning settings to eliminate dead zones and boost performance.",
    icon: "../src/assets/images/optmization.png",
    color: PRIMARY_COLOR,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Enjoy 24/7 monitoring and proactive support to keep your WiFi running smoothly, with quick resolutions and system updates for any issues that arise.",
    icon: "../src/assets/images/ongoing support.png",
    color: PRIMARY_COLOR,
  },
];

const StepItem = ({ step, isLast }) => {
  const itemRef = useRef();

  useEffect(() => {
    itemRef.current.classList.add("slide-in");
  }, []);

  return (
    <div
      className={`flex ${!isLast ? "pb-12 lg:pb-16" : ""} relative`}
      ref={itemRef}
    >
    
      {!isLast && (
        <div
          className="absolute top-0 left-6 lg:left-8 w-0.5 bg-gray-200 h-full transform translate-y-12 lg:translate-y-16"
          aria-hidden="true"
        />
      )}

     
      <div className="flex flex-col items-center mr-4 lg:mr-8 z-10">
        <div
          className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-white shadow-md`}
          style={{ backgroundColor: step.color }}
        >
          <img
            src={step.icon}
            alt={`${step.title} icon`}
            className="w-8 h-8 lg:w-10 lg:h-10 object-contain rounded-full"
          />
        </div>
      </div>

     
      <div className="flex-1 pt-2 lg:pt-0 max-w-full">
        <p
          className="text-sm lg:text-base font-semibold uppercase tracking-wider mb-1"
          style={{ color: step.color }}
        >
          Step {step.number}
        </p>
        <h3
          className="text-xl lg:text-2xl font-extrabold mb-2"
          style={{ color: SECONDARY_COLOR }}
        >
          {step.title}
        </h3>
        <p className="text-gray-600 text-base lg:text-lg">{step.description}</p>
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
    <div
      className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="text-center mb-10 lg:mb-16">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          style={{ color: SECONDARY_COLOR }}
        >
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
            <StepItem
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
