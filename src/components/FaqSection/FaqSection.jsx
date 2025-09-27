import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FaqSection = ({ title, faqs }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
     
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#062B7E]">
            {title}
          </h2>
          <div className="w-80 h-1 bg-[#02C9B7] mx-auto mt-3 rounded"></div>
        </div>
      )}

     
      <div className="flex flex-col items-center gap-10">
        

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
                  }}
                  className="w-full px-6 py-4 flex justify-between items-center text-left cursor-pointer hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="text-lg font-medium text-[#062B7E]">
                    {faq.q}
                  </span>
                  <FaChevronDown
                    className={`text-[#062B7E] transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                    
                <div
                  className={`px-6 pb-4 text-gray-600 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p>{faq.a}</p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
