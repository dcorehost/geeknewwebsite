import React, { useEffect } from 'react';

const services = [
  { 
    title: "WI-FI SETUP", 
    imgUrl: "../src/assets/images/wifisetup.png", 
    desc: "We set up fast, secure, and reliable Wi-Fi networks in your home or office. This includes device configuration, initial speed tests, and optimizing router placement to ensure maximum performance and reliable connectivity right from the start, covering every corner of your space."
  },
  { 
    title: "NETWORK CONSULTATION", 
    imgUrl: "../src/assets/images/NETWORK CONSULTATION.png", 
    desc: "Receive expert advice for designing, upgrading, and securing your Wi-Fi networks. We analyze your current infrastructure, recommend state-of-the-art hardware, and plan future-proof scalability to meet current and growing connectivity demands for all your users and devices."
  },
  { 
    title: "WI-FI RANGE OPTIMIZATION", 
    imgUrl: "../src/assets/images/WI-FI RANGE.png", 
    desc: "Improve coverage and eliminate frustrating dead zones throughout your entire space, including basements and outdoors. We use high-performance mesh systems, signal boosters, and fine-tune channel settings to deliver a strong, consistent signal everywhere you need it."
  },
  { 
    title: "ADVANCED SECURITY", 
    imgUrl: "../src/assets/images/ADVANCED SECURITY.png", 
    desc: "Secure your network from unauthorized access, malware, phishing attempts, and all types of cyber threats. We implement enterprise-grade firewalls, strong encryption protocols (WPA3), and regular security audits to keep your data and devices safe 24/7."
  },
  { 
    title: "SMART HOME INTEGRATION", 
    imgUrl: "../src/assets/images/smart home.png", 
    desc: "Seamlessly connect and integrate all your smart devices, including thermostats, lighting systems, security cameras, speakers, and appliances. We create a unified and automated home network that is easy to control and incredibly efficient."
  },
  { 
    title: "24/7 REMOTE SUPPORT", 
    imgUrl: "../src/assets/images/support24hr.png", 
    desc: "Get instant help and expert troubleshooting for all your Wi-Fi issues without needing an inconvenient on-site visit. Our dedicated support team is available around the clock to ensure minimal downtime and rapid resolution of any connectivity problems you encounter."
  },
];

const customStyles = `
  .services-card-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .services-card-animate.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  .services-card-animate:nth-child(1) { transition-delay: 0.0s; }
  .services-card-animate:nth-child(2) { transition-delay: 0.1s; }
  .services-card-animate:nth-child(3) { transition-delay: 0.2s; }
  .services-card-animate:nth-child(4) { transition-delay: 0.3s; }
  .services-card-animate:nth-child(5) { transition-delay: 0.4s; }
  .services-card-animate:nth-child(6) { transition-delay: 0.5s; }
  
  .shadow-lg {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
  }
`;

const App = () => {
  
  useEffect(() => {
    const servicesSection = document.getElementById("services-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".services-card-animate");
          cards.forEach(card => card.classList.add("animate-in"));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

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
        
        <div className="text-center mb-12">
          <p className="text-4xl sm:text-5xl font-extrabold text-[#062B7E] leading-tight">
            Comprehensive Services We Offer
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From seamless setup and optimization to advanced security and smart home integration, we ensure you have the best, most reliable connectivity experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="services-card-animate bg-white py-14 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg cursor-pointer 
                         hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                
                <div className="flex items-center mb-4">
                    <img 
                      src={service.imgUrl} 
                      alt={`${service.title} icon`} 
                      className="w-20 h-20 mr-3 flex-shrink-0  rounded-full " 
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/24x24/cccccc/000000?text=?"}} 
                    />
                    
                    <h3 className="text-xl font-extrabold text-[#062B7E] leading-snug">
                    {service.title}
                    </h3>
                </div>
                
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
