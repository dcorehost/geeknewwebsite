import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  const slides = [
    {
      title: "Want to Repair your Laptop?",
      subtitle: "We are Just one Call Away",
      phone: "1800-3090-899",
    },
    {
      title: "Fast & Reliable Laptop Service",
      subtitle: "Expert technicians available",
      phone: "1800-3090-899",
    },
    {
      title: "Affordable Laptop Repair",
      subtitle: "Quality service at best prices",
      phone: "1800-3090-899",
    },
  ];

  return (
    <section className="bg-[#02c9b7] text-white flex items-center justify-center py-20">
      <div className="w-full max-w-4xl px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-center">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.a
                href={`tel:${slide.phone}`}
                className="text-yellow-400 text-2xl font-bold inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Call Us {slide.phone}
              </motion.a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
