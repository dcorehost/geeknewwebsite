import React from "react";
import { ShieldCheck, AlertTriangle, Lock } from "lucide-react"; 

const WhySecuritySuite = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Always-On Protection",
      desc: "Stay safe even offline with uninterrupted monitoring and zero-day defense mechanisms.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-500" />,
      title: "Smart Threat Alerts",
      desc: "Get instant alerts on malware and suspicious activities, minimizing false positives.",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: "Complete Endpoint Security",
      desc: "End-to-end defense across your network with proactive countermeasures.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0a2540] to-[#112d4e] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Endpoint Central?</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Empower your business with AI-driven security that adapts to modern
            cyber threats while ensuring zero downtime.
          </p>

          <div className="grid gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-[#0f3460] rounded-xl shadow-lg hover:bg-[#1a4a7a] transition"
              >
                {f.icon}
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="text-gray-300 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Shield Protection"
            className="max-w-md w-full hover:scale-110 transition-transform duration-300 filter invert"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySecuritySuite;
