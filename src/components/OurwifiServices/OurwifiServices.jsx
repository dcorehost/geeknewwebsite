import React, { useEffect } from 'react';

// Service data now contains only the title and a single description (desc)
const services = [
  { 
    title: "WI-FI SETUP", 
    desc: "We set up fast, secure, and reliable Wi-Fi networks in your home or office, ensuring maximum performance right from the start."
  },
  { 
    title: "NETWORK CONSULTATION", 
    desc: "Expert advice for designing, upgrading, and securing your Wi-Fi networks to meet current and future connectivity demands."
  },
  { 
    title: "WI-FI RANGE OPTIMIZATION", 
    desc: "Improve coverage and eliminate dead zones throughout your entire space using high-performance repeaters and mesh systems."
  },
  { 
    title: "ADVANCED SECURITY", 
    desc: "Secure your network from unauthorized access, malware, and cyber threats with enterprise-grade firewalls and encryption protocols."
  },
  { 
    title: "SMART HOME INTEGRATION", 
    desc: "Seamlessly connect all your smart devices, including thermostats, lighting, and security cameras, for automated control."
  },
  { 
    title: "24/7 REMOTE SUPPORT", 
    desc: "Get instant help and troubleshooting for all your Wi-Fi issues without needing an on-site visit, ensuring minimal downtime."
  },
];

// Custom CSS for the entry animation (slide-up fade-in)
const customStyles = `
  /* Custom animation for services cards */
  .services-card-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .services-card-animate.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  /* Adding a slight stagger for better visual effect */
  .services-card-animate:nth-child(1) { transition-delay: 0.0s; }
  .services-card-animate:nth-child(2) { transition-delay: 0.1s; }
  .services-card-animate:nth-child(3) { transition-delay: 0.2s; }
  .services-card-animate:nth-child(4) { transition-delay: 0.3s; }
  .services-card-animate:nth-child(5) { transition-delay: 0.4s; }
  .services-card-animate:nth-child(6) { transition-delay: 0.5s; }
`;

const App = () => {
  
  // Intersection Observer hook to trigger the entry animation when the section scrolls into view
  useEffect(() => {
    const servicesSection = document.getElementById("services-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate-in' class to all cards inside the intersecting section
          const cards = entry.target.querySelectorAll(".services-card-animate");
          cards.forEach(card => card.classList.add("animate-in"));
          // Stop observing once the animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    if (servicesSection) {
      observer.observe(servicesSection);
    }
    
    return () => {
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{customStyles}</style>
      
      <div id="services-section" className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Comprehensive Services We Offer
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From seamless setup and optimization to advanced security and smart home integration, we ensure you have the best, most reliable connectivity experience.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              // Increased vertical padding (py-8) to make the card taller.
              className="services-card-animate bg-white py-8 px-6 rounded-xl transition-all duration-300 ease-in-out border-2 border-gray-100 shadow-lg cursor-pointer 
                         hover:shadow-xl hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-50"
            >
              {/* Card Content */}
              <div className="flex flex-col h-full">
                
                {/* Title */}
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                {/* Description: Always shows the single description */}
                <p 
                  className="text-gray-600 text-base mt-2 flex-grow"
                >
                  {service.desc}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
