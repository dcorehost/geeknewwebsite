import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a laptop repair usually take?",
    answer:
      "Most repairs are completed within 24–48 hours. However, it may take longer if parts need to be ordered.",
  },
  {
    question: "Do you provide on-site repair service?",
    answer:
      "Yes ✅, we offer on-site repair for common issues like software installation, virus removal, and basic hardware fixes.",
  },
  {
    question: "Is there any warranty on repairs?",
    answer:
      "Yes, we provide up to 90 days warranty on most repair services. Terms may vary depending on the type of repair.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "Appointments are not mandatory, but we recommend booking in advance to get faster service.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq px-6 md:px-20 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
