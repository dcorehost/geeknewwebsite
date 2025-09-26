import React from "react";

const ctcData = [
  { label: "Years of Excellence", value: 10 },
  { label: "Employees Worldwide", value: 500 },
  { label: "Projects Delivered", value: 1200 },
  { label: "Satisfied Clients", value: 2000 },
];

const AboutCTC = () => {
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
        About Geek Care
      </h2>

      {/* Floating background circles */}
      <div className="absolute top-0 left-10 w-36 h-36 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1 z-0"></div>
      <div className="absolute bottom-0 right-16 w-48 h-48 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2 z-0"></div>

      <p className="text-[#062B7E] max-w-3xl mx-auto mb-16 text-lg md:text-xl leading-relaxed">
        At Geek Care, we are committed to delivering top-notch IT solutions, innovative technologies, and unparalleled customer service. 
        Our culture emphasizes growth, collaboration, and continuous improvement, ensuring our clients succeed with confidence.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 relative">
        {ctcData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <p className="text-4xl font-extrabold text-[#02C9B7] mb-4">{item.value}+</p>
            <p className="text-[#062B7E] font-medium text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCTC;
