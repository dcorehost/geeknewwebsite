import React, { useState } from "react";
import { Star, Zap, HardHat } from "lucide-react";

const PrinterServices = () => {
  const initialRating = 4.9;
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (index) => {
    if (index >= 1 && index <= 5) {
      setRating(index);
      setHoverRating(0);
      console.log(`Rating submitted: User gave ${index} stars.`);
    }
  };

  const displayRating = hoverRating || Math.round(rating);
  const stars = [1, 2, 3, 4, 5];

  const FeatureChip = ({ icon: Icon, text }) => (
    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-xl border border-gray-200">
      <Icon className="w-5 h-5 text-[#02C9B7]" />
      <span className="text-sm font-medium text-gray-800">{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen text-gray-900 font-sans flex items-center justify-center py-10">
      
      <div className="container mx-auto px-4 md:px-8">
        <div className=" p-6 md:p-12 shadow-gray-200/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div
              className="lg:w-1/2 space-y-6 text-center lg:text-left"
            >
              
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-full bg-[#02C9B7]/10 text-[#02C9B7] tracking-wider">
                <HardHat className="w-4 h-4 mr-2" />
                Expert Tech Support
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Seamless <span className="text-[#02C9B7]">Printer Setup</span> & Reliable Maintenance
              </h1>
              
              <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
                From wireless setup and driver installation to rapid troubleshooting for paper jams and ink issues—our certified professionals ensure your printing is always smooth and stress-free.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <FeatureChip icon={Star} text="4.9/5 Star Rating" />
                <FeatureChip icon={Zap} text="24/7 Remote Fix" />
                <FeatureChip icon={Zap} text="All Major Brands" />
              </div>

              <div className="pt-4 space-y-3 border-t border-gray-200">
                <div className="flex items-baseline justify-center lg:justify-start space-x-3">
                  <span className="text-4xl font-extrabold text-[#02C9B7]">
                    $49.99
                  </span>
                  <span className="text-lg font-medium text-gray-400 line-through">
                    $59.99
                  </span>
                  <span className="text-red-600 font-bold text-sm bg-red-100 px-2 py-0.5 rounded-lg">
                    SAVE 20%
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">Top Rated Service:</span> HP Envy, Canon Pixma, Epson Series & more. Service ID: PRN-SUPPORT-001.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                <div className="flex items-center">
                  <div
                    className="flex text-3xl cursor-pointer"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {stars.map((starValue, index) => (
                      <Star
                        key={index}
                        className={
                          (index + 1 <= displayRating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300") + 
                          " w-6 h-6 transition-all duration-200 hover:scale-110"
                        }
                        onMouseEnter={() => setHoverRating(index + 1)}
                        onClick={() => handleStarClick(index + 1)}
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                  <span className="text-lg ml-3 font-bold">
                    {rating.toFixed(1)}/5.0
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    (2,845 reviews)
                  </span>
                </div>

               <button
  className="group relative inline-flex items-center justify-center font-bold text-base tracking-wide rounded-xl text-white bg-[#02C9B7] shadow-md shadow-[#02C9B7]/40 px-6 py-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 hover:bg-[#029e91] hover:shadow-lg w-full sm:w-[220px] whitespace-nowrap"
  onClick={() => console.log('Navigating to booking page...')}
>
  <span className="z-20 flex items-center">
    Book Appointment
    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
  </span>
</button>

              </div>

            </div>

            <div
              className="lg:w-1/2 w-full flex justify-center"
            >
              <div className="w-full max-w-lg aspect-square rounded-3xl overflow-hidden  shadow-[#02C9B7]/40 transform hover:scale-[1.02] transition-transform duration-500 ease-in-out">
                <img
                  src="../src/assets/images/printer.png"
                  alt="Professional Printer Service Illustration"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x800/FFFFFF/gray-900?text=Image+Unavailable";
                  }}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = (props) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


export default PrinterServices;
