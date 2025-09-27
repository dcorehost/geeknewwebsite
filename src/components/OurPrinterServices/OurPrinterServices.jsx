import React, { useEffect } from 'react';

const PrinterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" rx="1" />
  </svg>
);

const HardDriveIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="12" x2="2" y2="12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    <line x1="6" y1="16" x2="6.01" y2="16" />
    <line x1="10" y1="16" x2="10.01" y2="16" />
  </svg>
);

const WifiIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.14a6 6 0 0 1 6.94 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const AlertTriangleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const DropletIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
  </svg>
);

const HeadsetIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);


const services = [
  { 
    title: "PRINTER SETUP", 
    icon: PrinterIcon, 
    desc: "We provide complete installation and setup for all types of printers—inkjet, laser, and multifunction devices. Our service includes driver installation, connecting to Wi-Fi or wired networks, and ensuring your printer works seamlessly with desktops, laptops, and mobile devices."
  },
  { 
    title: "DRIVER & SOFTWARE INSTALLATION", 
    icon: HardDriveIcon, 
    desc: "We install and update the latest printer drivers and software for smooth functionality. Our experts make sure your printer is fully compatible with your operating system, ensuring hassle-free printing, scanning, and faxing."
  },
  { 
    title: "WIRELESS & NETWORK PRINTING", 
    icon: WifiIcon, 
    desc: "Easily print from anywhere in your home or office with wireless printing setup. We configure your printer for Wi-Fi, network sharing, and cloud printing (Google Cloud Print, AirPrint), making it accessible across all your devices."
  },
  { 
    title: "PAPER JAM & ERROR FIXING", 
    icon: AlertTriangleIcon, 
    desc: "Resolve common printer issues like paper jams, cartridge errors, or offline printer status. We diagnose and fix hardware or software issues to restore smooth, uninterrupted printing."
  },
  { 
    title: "INK & TONER MANAGEMENT", 
    icon: DropletIcon, 
    desc: "Save costs with proper ink and toner management. We guide you on cartridge refilling, replacements, and calibration to extend printer life and maintain high-quality printing without streaks or faded text."
  },
  { 
    title: "24/7 REMOTE SUPPORT", 
    icon: HeadsetIcon, 
    desc: "Get instant troubleshooting help for your printer—whether it’s connectivity issues, error messages, or print quality problems. Our dedicated support team is available round-the-clock for quick resolutions."
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

const OurPrinterServices = () => {
  
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
        try {
          observer.unobserve(servicesSection);
        } catch (e) {
        }
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      <style>{customStyles}</style>
      
      <div id="services-section" className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        
        <div className="text-center mb-12">
          <p className="text-4xl sm:text-5xl font-extrabold text-[#062B7E] leading-tight font-['Inter']">
            Printer Services We Offer
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From setup and installation to troubleshooting and ongoing support, we ensure your printer delivers the best performance at all times.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx} 
                className="services-card-animate bg-white py-14 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg cursor-pointer 
                          hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 mr-3 flex-shrink-0 rounded-full flex items-center justify-center p-4 bg-[#E6EFFE] border border-[#062B7E]/10">
                      <IconComponent className="w-10 h-10 text-[#062B7E]" />
                    </div>
                      
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPrinterServices;
