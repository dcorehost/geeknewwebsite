import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const services = [
    "WiFi",
    "Laptop",
    "IOS/Android",
    "Antivirus",
    "Network",
    "PC/Mac",
    "Printer",
    "Tablets"
  ];

  return (
    <footer className="bg-[#062B7E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">


        <div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Geek<span className="text-[#02C9B7]">Care</span>
          </h1>
          <p className="text-sm leading-relaxed mb-4">
            At <span className="text-[#02C9B7]">GEEKCARE</span>, we’re a passionate team delivering top-quality cleaning with precision, care, and integrity. With years of experience, we provide reliable, detail-focused services that meet the highest standards of cleanliness.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#02C9B7]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#02C9B7]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#02C9B7]"><FaWhatsapp /></a>
            <a href="#" className="hover:text-[#02C9B7]"><FaYoutube /></a>
          </div>
        </div>


        <div>
          <h2 className=" text-lg font-semibold mb-4 text-[#02C9B7]">Company</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#02C9B7]">Home</a></li>
            <li><a href="/services" className="hover:text-[#02C9B7]">Our Services</a></li>
            <li><a href="/about" className="hover:text-[#02C9B7]">About</a></li>
            <li><a href="/contact" className="hover:text-[#02C9B7]">Contact</a></li>
          </ul>
        </div>


        <div>
          <h2 className="text-[#02C9B7] text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service}>
                <a
                  href={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#02C9B7]"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h2 className="text-[#02C9B7] text-lg font-semibold mb-4">We’re Open</h2>
          <p className="mb-4">Monday - Saturday 08.00 - 18.00</p>

          <h2 className="text-[#02C9B7] text-lg font-semibold mb-2">Office Location</h2>
          <p className="mb-4">100 S Main St, New York, NY</p>

          <h2 className="text-[#02C9B7] text-lg font-semibold mb-2">Send a Message</h2>
          <p>contact@geekcare.com</p>
        </div>
      </div>


      <div className="border-t border-gray-700 py-4 text-center text-sm flex flex-col md:flex-row items-center justify-between px-6">

        <p>© {new Date().getFullYear()}  Geek <span className="text-[#02C9B7]">Care</span> All rights reserved.</p>
        <div className="space-x-6">
          <a href="/terms" className="hover:text-[#02C9B7]">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-[#02C9B7]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
