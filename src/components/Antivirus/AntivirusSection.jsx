import React from "react";

const AntiVirusSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-black">Next-Gen </span>
            <span className="text-[#0d2347]">Antivirus </span>
            <span className="text-gray-600">Protection</span>
          </h2>
          <h3 className="text-lg font-medium text-gray-500 mb-4">
            Stay Ahead of Cyber Threats
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our enterprise-grade antivirus solution goes beyond traditional
            protection. Powered by{" "}
            <span className="text-[#0d2347] font-medium">AI-driven detection</span>{" "}
            and <span className="text-[#0d2347] font-medium">real-time monitoring</span>, 
            it safeguards your devices and networks against{" "}
            <span className="font-semibold">viruses, malware, ransomware, and zero-day attacks</span>. 
            With proactive threat intelligence and continuous updates, you can ensure 
            uninterrupted business operations with confidence.
          </p>
          <button className="bg-[#0d2347] text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">
            Get Protected
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/antivirus-concept-illustration_114360-16055.jpg"
            alt="Antivirus Protection"
            className="max-w-md md:max-w-lg drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AntiVirusSection;
