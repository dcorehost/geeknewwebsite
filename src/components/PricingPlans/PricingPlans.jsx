import React from "react";
import { motion } from "framer-motion";
import { Wifi, Laptop, Smartphone, Cpu } from "lucide-react";

export default function PricingPlans() {
  const services = [
    {
      icon: <Wifi size={42} className="text-[#02C9B7]" />,
      title: "WiFi Setup",
      price: "Starting at ₹499",
      desc: "Fast and secure home or office WiFi installation with professional setup.",
    },
    {
      icon: <Laptop size={42} className="text-[#02C9B7]" />,
      title: "Laptop Repair",
      price: "Starting at ₹799",
      desc: "Comprehensive repair services for laptops, including hardware and software issues.",
    },
    {
      icon: <Smartphone size={42} className="text-[#02C9B7]" />,
      title: "Smartphone Screen Replacement",
      price: "Starting at ₹999",
      desc: "High-quality screen replacements for all major smartphone brands.",
    },
    {
      icon: <Cpu size={42} className="text-[#02C9B7]" />,
      title: "Software Installation",
      price: "Starting at ₹299",
      desc: "Professional software installation and setup to ensure smooth performance.",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#062B7E] via-[#062B7E] to-[#062B7E] text-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#02C9B7]">Services & Pricing</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Check out our most popular services with transparent starting prices.
        </motion.p>

        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative flex-shrink-0 w-20 h-20 rounded-full bg-[#062B7E] flex items-center justify-center border-2 border-[#02C9B7] shadow-[0_0_20px_#02C9B780] hover:scale-110 transition-transform duration-300">
                {service.icon}
                <div className="absolute inset-0 rounded-full animate-pulse bg-[#02C9B720]"></div>
              </div>

              <div className="max-w-lg text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#02C9B7]">
                  {service.title}
                </h3>
                <p className="text-gray-300 mt-1">{service.desc}</p>
                <p className="mt-2 font-semibold text-white">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
