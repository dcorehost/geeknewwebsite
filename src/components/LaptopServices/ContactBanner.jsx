import React from "react";

const ContactBanner = () => {
  return (
    <div className="bg-yellow-400 text-black py-10 text-center">
      <h2 className="text-2xl font-bold">Need Quick Laptop Repair?</h2>
      <p className="mt-2">Call us now and get instant support</p>
      <a href="tel:18003090899" className="mt-4 inline-block text-lg font-bold underline">
        📞 1800-3090-899
      </a>
    </div>
  );
};

export default ContactBanner;
