import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "iPad User",
      feedback: "Excellent tablet repair service! My iPad screen was replaced the same day. Highly recommend.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Lareal Dayen",
      role: "Samsung Galaxy Tab User",
      feedback: "Fast, reliable, and professional. The technicians were very skilled and friendly.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikram Patel",
      role: "Lenovo Tab User",
      feedback: "They replaced my battery and fixed charging issues quickly. Great customer support!",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by hundreds of tablet users for fast and professional repair services.
          </p>
        </div>

        <div className="space-y-16">
          {testimonials.map((t, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center lg:items-start ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}>
              
              <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-[#02c9b7]">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover"/>
              </div>

              <div className="relative bg-[#062b7e]/10 rounded-2xl p-8 flex-1">
                <FaQuoteLeft className="absolute -top-5 -left-5 text-[#02c9b7]/40 text-4xl"/>
                <p className="text-gray-800 lg:text-lg font-medium">{t.feedback}</p>
                <div className="mt-6">
                  <h3 className="text-[#062b7e] font-semibold text-lg">{t.name}</h3>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
