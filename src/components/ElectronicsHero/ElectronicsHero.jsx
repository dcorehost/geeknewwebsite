import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import geek1 from "../../assets/images/geek1.png";
import geek2 from "../../assets/images/geek2.png";
import geek9 from "../../assets/images/geek9.png";
import geek4 from "../../assets/images/geek4.png";
import geek5 from "../../assets/images/geek5.png";
import geek6 from "../../assets/images/geek6.png";
import geek7 from "../../assets/images/geek7.png";
import geek8 from "../../assets/images/geek8.png";

const ElectronicsHero = () => {
  const navigate = useNavigate();

  const slides = [
    { src: geek1, title: "Wi-Fi" },
    { src: geek2, title: "Printers" },
    { src: geek9, title: "Laptops" },
    { src: geek4, title: "PC/Mac" },
    { src: geek5, title: "Tablets" },
    { src: geek6, title: "iOS/Android" },
    { src: geek7, title: "Network Setup" },
    { src: geek8, title: "Antivirus & Security" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      
      <AnimatePresence>
        <motion.img
          key={current}
          src={slides[current].src}
          alt={slides[current].title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      
      <motion.div
        className="absolute top-10 left-10 w-36 h-36 bg-[#00c9b7] rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-44 h-44 bg-[#042879] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      
      <div className="relative h-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#00bba7] mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {slides[current].title}
        </motion.h1>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#00c9b7] to-[#042879] rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        <motion.p
          className="text-lg md:text-2xl text-[#f9fafb] font-medium max-w-2xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Your Trusted Partner for Complete Electronics Support and Solutions
        </motion.p>

        <motion.button
          onClick={() => navigate("/contact-us")}
          className="inline-block bg-[#042879] text-white px-8 py-3 rounded-xl text-lg font-bold shadow-lg hover:bg-[#00c9b7] hover:text-[#042879] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Get Tech Support 
        </motion.button>
      </div>
    </section>
  );
};

export default ElectronicsHero;
