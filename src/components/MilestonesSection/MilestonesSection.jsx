import React from "react";
import { FaRocket, FaUsers, FaCloud, FaAward, FaGlobe } from "react-icons/fa";

const milestones = [
  { year: "2015", event: "Company Founded by Tech Enthusiasts", icon: <FaRocket /> },
  { year: "2017", event: "Reached 500 Clients Worldwide", icon: <FaUsers /> },
  { year: "2019", event: "Expanded Services to Cybersecurity & Cloud", icon: <FaCloud /> },
  { year: "2022", event: "Awarded Best IT Support Provider", icon: <FaAward /> },
  { year: "2025", event: "Serving 2000+ Businesses Globally", icon: <FaGlobe /> },
];

const MilestonesSection = () => (
  <section className="relative py-24 px-6 text-center max-w-7xl mx-auto overflow-hidden">
    
    {/* Floating background circles */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2"></div>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
      Our Milestones & Achievements
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {milestones.map((milestone, idx) => (
        <div
          key={idx}
          className="relative group bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-[#02C9B7]/10 transition-all duration-500 cursor-pointer"
          style={{ animationDelay: `${idx * 0.2}s` }}
        >
          <div className="text-4xl md:text-5xl text-[#02C9B7] mb-4 mx-auto transform group-hover:rotate-12 transition-transform duration-500">
            {milestone.icon}
          </div>
          <h3 className="text-[#02C9B7] text-2xl font-bold mb-3 group-hover:text-[#062B7E] transition-colors duration-500">
            {milestone.year}
          </h3>
          <p className="text-[#062B7E] font-medium group-hover:text-[#02C9B7] transition-colors duration-500 text-lg leading-relaxed">
            {milestone.event}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default MilestonesSection;
