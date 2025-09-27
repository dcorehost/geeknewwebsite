import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = ({ backgroundImage, title, description, buttonText }) => {
  const navigate = useNavigate();

  return (
    <header
      className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-transparent"></div>

      
      <motion.div
        className="relative z-10 max-w-3md px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {description}
        </motion.p>

        <motion.button
          onClick={() => navigate("/book-appointment")}
          className="px-8 py-4 bg-[#062B7E] hover:bg-[#02C9B7] text-white text-lg font-semibold rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;
