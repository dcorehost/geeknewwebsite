import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div className="bg-[#02c9b7] text-black py-12 text-center px-4">
      <h2 className="text-3xl font-bold mb-3 text-[#062B7E]">
        Laptop Repair Service – Unglitch Laptop Service Center
      </h2>
      <p className="text-lg mb-6 text-[#062B7E]">Call us now and get instant support</p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Phone */}
        <a
          href="tel:18003090899"
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          <FaPhoneAlt /> 1800-3090-899
        </a>

        {/* Email */}
        <a
          href="mailto:support@unglitch.com"
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          <FaEnvelope /> support@unglitch.com
        </a>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold">
          <FaMapMarkerAlt /> New Delhi, India
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
