import React from "react";

const AntivirusIntro = () => {
  return (
    <section className="bg-gradient-to-r from-[#0a1a33] to-[#0f274d] text-white py-26 px-10 text-center shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide transition-transform duration-300 hover:scale-105">
          Enterprise-grade <span className="text-blue-500">Next-Gen Antivirus</span> Solution
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          <span className="text-white font-semibold">Next-Gen Antivirus (NGAV)</span> 
          is an advanced cybersecurity solution powered by{" "}
          <span className="text-blue-400 font-medium">deep learning</span> and{" "}
          <span className="text-blue-400 font-medium">AI-assisted real-time detection</span>.  
          It excels at <span className="text-white font-semibold">behavioral detection, incident forensics,</span> 
          and <span className="text-white font-semibold">exploit mitigation</span> to anticipate and prevent 
          both known and unknown threats.
        </p>
        <p className="text-gray-400 leading-relaxed mt-6">
          Unlike traditional antivirus, NGAV continuously monitors and{" "}
          <span className="text-blue-400 font-medium">proactively responds</span> 
          with multi-layered protection. It analyzes{" "}
          <span className="text-white font-semibold">attacks, procedures, and techniques</span> 
          to ensure <span className="text-blue-500 font-bold">robust enterprise security</span>.
        </p>
      </div>
    </section>
  );
};

export default AntivirusIntro;
