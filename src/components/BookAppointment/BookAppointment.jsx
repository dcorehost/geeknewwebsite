// src/components/BookAppointment.jsx
import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "Soumya sharma",
    phone: "7776543210",
    email: "soumya@example.com",
    country: "India",
    state: "Uttar Pradesh",
    pincode: "203207",
    block: "Dadri",
    services_id: "Printers",
    appointment_date: "2025-09-30"
  });

  const services = [
    "Printers",
    "Hardware Repair",
    "Software Support",
    "Network Setup",
    "Virus Removal",
    "Data Recovery",
    "OS Installation",
    "Laptop Repair"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Booked:', formData);
    alert('Appointment booked successfully! We will contact you soon.');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-[#062B7E]/20">
      <h2 className="text-2xl font-bold text-[#062B7E] mb-6 flex items-center">
        <img 
          src="https://img.icons8.com/fluency/48/calendar.png" 
          alt="Appointment" 
          className="w-8 h-8 mr-3"
          style={{ filter: 'invert(15%) sepia(70%) saturate(2000%) hue-rotate(220deg) brightness(50%) contrast(150%)' }}
        />
        Book Service Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#062B7E] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
            required
          />
        </div>

        {/* Address Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              Country *
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              State *
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              Pincode *
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              Block/Area *
            </label>
            <input
              type="text"
              name="block"
              value={formData.block}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#062B7E] mb-2">
              Service Required *
            </label>
            <select
              name="services_id"
              value={formData.services_id}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
              required
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#062B7E] mb-2">
            Preferred Appointment Date *
          </label>
          <input
            type="date"
            name="appointment_date"
            value={formData.appointment_date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
            required
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-[#062B7E] mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Describe your issue in detail..."
            className="w-full px-4 py-3 border border-[#062B7E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C9B7] focus:border-transparent"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#062B7E] to-[#02C9B7] text-white px-8 py-3 rounded-lg hover:from-[#051f6e] hover:to-[#02b8a8] transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <img 
              src="https://img.icons8.com/fluency/24/calendar.png" 
              alt="Book" 
              className="inline-block w-5 h-5 mr-2"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            Book Appointment
          </button>
        </div>
      </form>

      {/* Contact Info */}
     
    </div>
  );
};

export default BookAppointment;