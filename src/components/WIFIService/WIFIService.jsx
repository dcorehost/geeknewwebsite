import React, { useEffect, useRef, useState } from "react";

const WIFIService = () => {
  const heroTextRef = useRef();
  const heroImageRef = useRef();
  
 
  const initialRating = 4.9;
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    heroTextRef.current.classList.add("slide-in");
    heroImageRef.current.classList.add("slide-in");
  }, []);
  
 
  const handleStarClick = (index) => {
   
    setRating(index);
    setHoverRating(0); 
    console.log(`Rating submitted: User gave ${index} stars.`);
  };


  const displayRating = hoverRating || Math.round(rating);


  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
     
      <div className="relative overflow-hidden mb-16 rounded-3xl p-8 md:p-16">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2 hero-text" ref={heroTextRef}>
            <span className="text-lg font-semibold mb-2 block text-[#062B7E]">
              We Care To Serve Best As We Can
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-[#02C9B7]">
              Looking for more than just Wi-Fi setup?
            </h1>
            <p className="text-gray-600 font-medium max-w-sm mx-auto lg:mx-0">
              Boost your connectivity with our expert tech services. Whether you need a brand-new router setup, advanced network security, or lightning-fast signal optimization, our certified technicians are ready. Schedule a service call today.
            </p>

           
            <div className="mt-8 mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-1">
                Top Rated Wi-Fi Solution: Gigabit Wi-Fi 6 Mesh System (3-Pack)
              </h3>
              <p className="text-sm text-gray-700 font-medium mb-2">
                Model: <span className="font-bold">MESH-6-PRO-3PK</span> / SKU: <span className="font-bold">9005721</span>
              </p>
              <div className="flex items-center mb-2">
                <div 
                  className="flex text-xl cursor-pointer"
                  onMouseLeave={() => setHoverRating(0)} 
                >
                 
                  {stars.map((star, index) => (
                    <span
                      key={index}
                      className={
                        (index + 1 <= displayRating ? "text-yellow-500" : "text-gray-300") + 
                        " transition-colors duration-100"
                      }
                      onMouseEnter={() => setHoverRating(index + 1)}
                      onClick={() => handleStarClick(index + 1)}
                    >
                      ★ 
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm ml-2 font-semibold">{rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm ml-1">(4,125 reviews)</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-gray-900">$279.99</span>
                <span className="text-red-500 font-semibold">Save $50</span>
                <span className="text-gray-400 line-through">Comp. Value:$329.99</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                or <span className="font-semibold">6 payments starting at $46.67</span>
              </p>
            </div>
          
            
            <button
             
              className="group relative flex items-center font-semibold text-base tracking-wider rounded-lg border-2 border-transparent text-white bg-[#062B7E] overflow-hidden px-4 py-3 transition-all duration-300 transform active:scale-95 group-hover:bg-[#02C9B7] group-hover:shadow-xl group-hover:shadow-[#02C9B7]/40"
              onClick={() => window.location.href = "bookAppoitment.html"}
            >
              Book Your Appointment

              <div className="bg-white text-[#062B7E] w-8 h-8 rounded-full flex justify-center items-center ml-2 transition-all duration-300 group-hover:bg-[#062B7E] group-hover:text-white">
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" height="24" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-center lg:items-end space-y-8 lg:space-y-0 lg:w-1/2 hero-image" ref={heroImageRef}>
            <div className="w-full rounded-3xl overflow-hidden border border-gray-300 shadow-2xl">
              <img src="../src/assets/images/Wifi1.png" alt="Tech Repair" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIFIService;
