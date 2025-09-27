import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Phone, X } from "lucide-react";

const problems = [
  { issue: "WiFi not working", solution: "Book WiFi Support – Fix in 30 min" },
  { issue: "Network setup issue", solution: "Book Network Setup – Get online quickly" },
  { issue: "Printer not connecting", solution: "Book Printer Support – Quick fix by expert" },
  { issue: "Printer paper jam", solution: "Book Printer Repair – Clear paper jam quickly" },
  { issue: "Laptop running slow", solution: "Book Laptop Optimization – Speed boost in 45 min" },
  { issue: "Unable to install software", solution: "Book Software Installation Support – Fix in 30 min" },
  { issue: "PC not booting", solution: "Book PC Repair – Get it running in 1 hr" },
  { issue: "Mac not updating", solution: "Book Mac Support – Update & troubleshoot" },
  { issue: "Tablet not charging", solution: "Book Tablet Repair – Charging issue fix" },
  { issue: "Tablet screen broken", solution: "Book Screen Repair – Get it fixed quickly" },
  { issue: "iPhone battery draining fast", solution: "Book iPhone Battery Replacement – Quick service" },
  { issue: "Android app crashing", solution: "Book Android Support – App troubleshooting" },
  { issue: "Virus detected on PC", solution: "Book Antivirus Support – Remove malware safely" },
  { issue: "Need security setup", solution: "Book Security Setup – Protect your devices" },
];

const backgroundImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1950&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=1950&q=80",
  "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&w=1950&q=80",
  "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
];

export default function TechProblemFinder() {
  const [query, setQuery] = useState("");
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredProblems = problems.filter((p) =>
    p.issue.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (problem) => {
    setQuery(problem.issue);
    setSelectedSolution(problem);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setSelectedSolution(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-white overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${showContact ? 'backdrop-blur-sm' : ''}`}>
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: bgIndex === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-5 z-10 text-center drop-shadow-lg"
      >
        Quick Tech & Electronics Problem Finder
      </motion.h1>
      <p className="text-md md:text-lg mb-10 text-white/90 z-10 text-center max-w-2xl">
        Type your problem (WiFi, Laptop, iOS/Android, Printer, Antivirus, Network, PC/Mac, Tablets, etc.) and get instant help.
      </p>

      {/* Search Box */}
      <div className="relative w-full max-w-xl z-50 mb-10">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search your problem (e.g. Laptop slow, AC not cooling)"
          value={query}
          onChange={handleQueryChange}
          className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 border rounded-2xl shadow-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
        />
        {query && filteredProblems.length > 0 && (
          <ul className="absolute mt-2 w-full bg-white border rounded-xl shadow-xl max-h-40 overflow-y-auto z-50">
            {filteredProblems.map((p, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(p)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-gray-800"
              >
                {p.issue}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Solution */}
      {selectedSolution && !showContact && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 p-6 bg-white text-gray-800 shadow-2xl rounded-2xl max-w-lg w-full text-center border border-gray-100 z-10"
        >
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Suggested Solution
          </h2>
          <p className="text-gray-600 leading-relaxed">{selectedSolution.solution}</p>
          <button
            onClick={() => setShowContact(true)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </motion.div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowContact(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center z-50">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-3 text-blue-700">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Our experts are ready to assist you with any electronic issue. Call:
            </p>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
            >
              <Phone size={20} /> 000000000
            </a>
          </div>
        </motion.div>
      )}

      {/* No solution found */}
      {query && filteredProblems.length === 0 && !selectedSolution && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-yellow-200 font-medium z-10"
        >
          No solution found. Please try another problem.
        </motion.p>
      )}
    </div>
  );
}
