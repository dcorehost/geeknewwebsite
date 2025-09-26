import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRobot } from "react-icons/fa";

export default function InvestPower() {
  return (
    <section className="bg-[#02C9B7]/10 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#062B7E] mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-[#062B7E]/80 mb-8">
            Innovative electronics and tech solutions designed to empower geeks, hobbyists, and aspiring developers.
          </p>

          {/* Point 1 */}
          <motion.div
            className="flex items-start mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaLaptopCode size={36} className="text-[#062B7E] mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#062B7E]">
                Code & Build
              </h3>
              <p className="text-gray-700">
                Hands-on tutorials and projects to create electronics, software, and embedded systems from scratch.
              </p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <FaRobot size={36} className="text-[#062B7E] mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#062B7E]">
                Robotics & AI
              </h3>
              <p className="text-gray-700">
                Explore robotics, AI projects, and automation to bring your electronic ideas to life.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/free-photo/man-repairing-circuit-board-laptop_1098-14844.jpg?t=st=1758881515~exp=1758885115~hmac=debf49e54b6301d4c59ec6a0c7c16c08bbd280d0df84ba724b0384ad24b99ad1&w=1480"
            alt="Tech geek working on electronics"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
