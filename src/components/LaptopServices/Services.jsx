import React from "react";
import ServicesItem from "./ServicesItem";

const Services = () => {
  const leftServices = [
    "On-site Assistance for repair & service",
    "Liquid & Physical Damage protection",
    "Peripheral Accessories Sales",
    "Standby Services",
    "Germ Protection",
  ];

  const middleServices = [
    "Off-Site Assistance for repair & service",
    "Software Installation and Upgradation",
    "Internal Parts Procurement",
    "Encash / Buyback Laptop",
    "Laptops on rent",
  ];

  const rightServices = [
    "Hardware Installation and Upgradation",
    "Genuine OEM Spare Procurement",
    "Extended Warranty Packs",
    "Remote Assistance",
    "Annual Maintenance Contract ( AMC )",
  ];

  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold text-center mb-10 text-[#062B7E]">Services we offer:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ul className="space-y-3">
          {leftServices.map((service, i) => (
            <ServicesItem key={i} text={service} />
          ))}
        </ul>
        <ul className="space-y-3">
          {middleServices.map((service, i) => (
            <ServicesItem key={i} text={service} />
          ))}
        </ul>
        <ul className="space-y-3">
          {rightServices.map((service, i) => (
            <ServicesItem key={i} text={service} />
          ))}
        </ul>
      </div>

      <p className="mt-10 text-center text-gray-600 max-w-3xl mx-auto">
        To deliver hassle-free laptop services, we provide on-site and off-site services. 
        Having authorized service centres in Delhi, NCR, and all over India, we give you 
        a platform to consult our experts anytime, anywhere you want. Get Device Repair 
        & Hassle-free service at your doorstep, enjoy our home services by experts. 
        Our team of techies is equipped to handle the most complex computer problems. 
        Take our services and be relaxed!
      </p>
    </div>
  );
};

export default Services;
