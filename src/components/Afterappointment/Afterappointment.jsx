import React from "react";

export default function AppointmentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Form submitted!");
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Book Your Tablet Service</h2>
          <p className="text-gray-600 text-lg">
            Please fill in your details below and we will schedule your appointment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
            <input type="text" name="country" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#02c9b7] outline-none"/>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
            <input type="text" name="state" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#02c9b7] outline-none"/>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Pincode <span className="text-red-500">*</span></label>
            <input type="text" name="pincode" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#02c9b7] outline-none"/>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Block <span className="text-red-500">*</span></label>
            <input type="text" name="block" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#02c9b7] outline-none"/>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Service ID <span className="text-red-500">*</span></label>
            <input type="text" name="service_id" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#02c9b7] outline-none"/>
          </div>

          <button type="submit" className="w-full bg-[#02c9b7] text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
