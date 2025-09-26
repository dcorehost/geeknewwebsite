import React from "react";

const AboutGeek = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-2/3 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Us
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <strong>Geek Tech Solutions</strong>, we specialize in providing
            hassle-free, reliable, and fast tech support for individuals and
            businesses. Whether you’re struggling with Wi-Fi connectivity,
            printer issues, or system performance, we’re here to help.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our services include{" "}
            <strong>
              Wi-Fi setup and troubleshooting, printer repair and maintenance,
              laptop and PC/Mac diagnostics, tablet and smartphone (iOS/Android)
              support, and complete network setup
            </strong>
            . We work with both home and office environments to ensure your tech
            runs smoothly.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With a <strong>client-first approach</strong>, we listen to your
            concerns and tailor solutions that suit your needs. From{" "}
            <span className="text-teal-600 font-semibold">data security</span>{" "}
            to{" "}
            <span className="text-teal-600 font-semibold">device optimization</span>
            , our experts ensure your technology works seamlessly, giving you
            the confidence to stay productive.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe technology should empower you — not frustrate you. That’s
            why we bring a combination of <strong>expertise, care, and
            innovation</strong> to every service call.
          </p>

          <p className="text-teal-600 font-medium mt-6">
            ● Innovating tech support
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/3 p-8 md:p-12 flex items-center justify-center bg-gray-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=1200&auto=format&fit=crop&q=60"
            alt="Electronics"
            className="w-full max-w-sm max-h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutGeek;


