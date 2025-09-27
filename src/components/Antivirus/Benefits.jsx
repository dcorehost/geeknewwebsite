import React from "react";
import { ShieldCheck, Shield, DatabaseBackup, Zap } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
    title: "Next-Gen Threat Detection",
    description:
      "Detect and stop zero-day attacks, fileless malware, and ransomware using AI-driven static and behavioral analysis in real time.",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-400" />,
    title: "Seamless Integration",
    description:
      "Easily deploy alongside your existing security solutions without conflicts, enhancing your overall cyber defense strategy.",
  },
  {
    icon: <DatabaseBackup className="w-10 h-10 text-blue-400" />,
    title: "Resilient Data Recovery",
    description:
      "Recover encrypted or deleted files instantly with secure rollback and tamper-proof backup systems, even during ransomware attacks.",
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-400" />,
    title: "Lightweight Performance",
    description:
      "Our single lightweight agent uses less than 1% CPU, ensuring enterprise-grade protection without slowing down your devices.",
  },
];

const Benefits = () => {
  return (
    <section className="py-4 px-6 mb-15">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0d2347] mb-12">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-[#112b55] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
