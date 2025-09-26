import React, { useRef, useEffect } from "react";

const testimonials = [
  { 
    name: "Rohit S.", 
    text: "Policy selection was super clear. Claims support actually helped!", 
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=1"
  },
  { 
    name: "Ananya M.", 
    text: "They simplified mutual funds for my goals. Love the dashboards.", 
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=2"
  },
  { 
    name: "Vivek K.", 
    text: "Team is responsive and transparent. Highly recommend.", 
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=3"
  },
  { 
    name: "Priya R.", 
    text: "Excellent support and guidance. Really improved our workflow.", 
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=4"
  },
  { 
    name: "Karan T.", 
    text: "Professional and reliable IT solutions. Highly satisfied!", 
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=5"
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft - 1) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });

  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-[#062B7E] hover:text-[#02C9B7] transition-colors duration-500">
        What Our Clients Say
      </h2>

      <div className="absolute top-0 left-10 w-36 h-36 bg-[#02C9B7]/20 rounded-full animate-float-diagonal-1 z-0"></div>
      <div className="absolute bottom-0 right-16 w-48 h-48 bg-[#062B7E]/20 rounded-full animate-float-diagonal-2 z-0"></div>

      <div className="relative z-10">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#062B7E] text-white p-3 rounded-full shadow-lg hover:bg-[#02C9B7] transition-colors duration-300 z-20"
        >
          {"<"}
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-8 px-12 scrollbar-hide"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 min-w-[340px] min-h-[420px] flex flex-col items-center bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              {/* Avatar */}
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="w-20 h-20 rounded-full border-4 border-[#02C9B7] mb-6 shadow-md"
              />
              
              {/* Rating */}
              <div className="text-[#02C9B7] text-xl mb-4">{"★".repeat(t.rating)}</div>

              {/* Text */}
              <p className="text-[#062B7E] text-lg leading-relaxed mb-6 text-center flex-grow">{t.text}</p>

              {/* Name */}
              <p className="mt-auto text-[#062B7E] font-semibold text-center">— {t.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#062B7E] text-white p-3 rounded-full shadow-lg hover:bg-[#02C9B7] transition-colors duration-300 z-20"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
