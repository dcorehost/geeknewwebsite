import React, { useState, useEffect } from "react";

const ShieldCheckIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
);

const SettingsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-2 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-2 2H2.56a2 2 0 0 0-2 2v.44a2 2 0 0 1 2 2h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 2 2h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 2 2h.44a2 2 0 0 0 2 2v-.44a2 2 0 0 1 2-2h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 2-2h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1-2-2h-.44a2 2 0 0 0-2-2v-.44a2 2 0 0 1-2-2H12.22z"/><circle cx="12" cy="12" r="3"/></svg>
);

const WrenchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.52 6.52a2.82 2.82 0 0 1-3.99-3.99l6.52-6.52a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></svg>
);

const WifiIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18v.01"/><path d="M2.5 10c.8-5 7.5-5 8.3 0"/><path d="M21.5 10c-.8-5-7.5-5-8.3 0"/><path d="M5.5 14c.5-3 3.5-3 4 0"/><path d="M18.5 14c-.5-3-3.5-3-4 0"/></svg>
);

const UsersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const ClockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const MapPinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.7c-4.4 0-8-3.6-8-8 0-4.4 8-12 8-12s8 7.6 8 12c0 4.4-3.6 8-8 8z"/><circle cx="12" cy="11" r="3"/></svg>
);

const CheckCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const WhyChoosePrinter = () => {
    const primaryTeal = '#02C9B7';
    const secondaryDarkBlue = '#062B7E';
    
   

    const features = [
        { 
            icon: ShieldCheckIcon, 
            title: "Certified Technicians", 
            desc: "Our experienced printer experts quickly resolve hardware and software issues for both home and office printers.",
            position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', 
            isHighlight: true 
        },
        { 
            icon: SettingsIcon, 
            title: "Hassle-Free Printer Setup", 
            desc: "We install and configure all types of printers—inkjet, laser, and wireless—ensuring smooth connectivity with your devices.",
            position: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', 
        },
        { 
            icon: WifiIcon, 
            title: "Wireless & Network Printing", 
            desc: "Easily print from laptops, mobiles, and tablets. We set up wireless, cloud, and shared printing across multiple devices.",
            position: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', 
        },
        { 
            icon: WrenchIcon, 
            title: "Quick Troubleshooting", 
            desc: "From paper jams to driver errors, our team provides fast and reliable printer repairs to minimize downtime.",
            position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', 
        },
    ];

    const stats = [
        { count: "100+", label: "Happy Clients", icon: UsersIcon },
        { count: "6+", label: "Years of Experience", icon: ClockIcon },
        { count: "25+", label: "Service Areas", icon: MapPinIcon },
        { count: "110+", label: "Successful Projects", icon: CheckCircleIcon },
    ];

    const slideContent = [
        {
            icon: CheckCircleIcon,
            title: "Reliable Service Quality",
            desc: "We provide professional installation, maintenance, and repair services for all major printer brands, ensuring minimal downtime for your business."
        },
        {
            icon: UsersIcon,
            title: "Expert Brand Compatibility",
            desc: "Our certified technicians are trained to handle all major printer brands, including HP, Epson, Canon, and Brother, guaranteeing comprehensive support."
        },
        {
            icon: ClockIcon,
            title: "Minimizing Downtime",
            desc: "Fast response times and efficient remote troubleshooting ensure your printing operations are back online quickly, keeping your business running smoothly."
        },
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const currentSlide = slideContent[slideIndex];

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slideContent.length);
        }, 5000);

        return () => clearTimeout(intervalId);
    }, [slideIndex, slideContent.length]);
    

    const CurrentIconComponent = currentSlide.icon;

    return (
        <div className="min-h-screen bg-white font-sans p-4 sm:p-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                @keyframes pulse-ring {
                    0% { transform: scale(0.3); opacity: 0.8; }
                    80%, 100% { transform: scale(1.5); opacity: 0; }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 text-gray-800">
                
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-2" style={{ color: secondaryDarkBlue }}>
                        Why Choose Us
                    </h2>
                    <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full mb-4"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-5xl mx-auto">
                      Our company is proud to be recommended by some of the biggest names in the technology industry as a reliable and efficient corporate printer service provider. We understand the critical role that high-quality printing solutions play in the fast-paced tech sector, and our tailored services ensure seamless operation and minimal downtim
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="flex justify-center items-center relative w-full h-[500px] lg:h-[600px] xl:h-[700px]">
                        
                     
                        <div className="relative w-full max-w-xl aspect-square rounded-full border border-gray-300 transform transition duration-1000">
                            
                          
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div 
                                    className="w-full h-full rounded-full flex items-center justify-center relative shadow-2xl overflow-hidden bg-white" 
                                 
                                >
                                    <div 
                                        key={slideIndex} 
                                        className="relative z-10 p-8 text-center max-w-xs transition duration-500 animate-fade-in" 
                                      
                                        style={{ color: secondaryDarkBlue, backgroundColor: 'white' }} 
                                       >
                                        <h4 className="text-xl font-extrabold mb-2 flex items-center justify-center">
                                          
                                            <CurrentIconComponent className="w-8 h-8 mr-2" style={{ color: secondaryDarkBlue }}/>
                                            {currentSlide.title}
                                        </h4>
                                        <p className="text-sm opacity-90">
                                            {currentSlide.desc}
                                        </p>
                                    </div>
                                  
                                </div>
                            </div>


                        
                            {features.map((feature, idx) => {
                                const IconComponent = feature.icon;
                                const isHighlight = feature.isHighlight;
                                
                                return (
                                    <div 
                                        key={idx} 
                                        className={`absolute ${feature.position} z-10`}
                                    >
                                        <div 
                                           
                                            className={`relative w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition duration-300 hover:shadow-2xl hover:scale-110 border-4 border-opacity-50`}
                                            style={{
                                                borderColor: isHighlight ? secondaryDarkBlue : primaryTeal,
                                                backgroundColor: 'white',
                                                boxShadow: isHighlight ? `0 10px 30px -5px rgba(6, 43, 126, 0.4)` : `0 5px 15px -3px rgba(2, 201, 183, 0.2)`
                                            }}
                                        >
                                            <div 
                                                className={`p-3 w-full h-full rounded-full flex items-center justify-center transition duration-300`} 
                                                style={{ 
                                                    backgroundColor: 'white',
                                                }}
                                            >
                                                <IconComponent 
                                                    className="w-10 h-10" 
                                                    style={{ 
                                                        color: isHighlight ? secondaryDarkBlue : primaryTeal, 
                                                    }} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

            
                    <div className="grid grid-cols-2 gap-x-10 gap-y-12 py-10">
                        {stats.map((stat, idx) => {
                            const IconComponent = stat.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="flex flex-col items-start transition duration-300 hover:scale-[1.05]"
                                >
                                    <div className="text-5xl font-extrabold mb-1 flex items-start" style={{ color: secondaryDarkBlue }}>
                                        <IconComponent className="w-10 h-10 mr-2 mt-1" style={{ color: primaryTeal }} />
                                        {stat.count}
                                        <span className="text-xl leading-none font-bold ml-1" style={{ color: primaryTeal }}>+</span>
                                    </div>
                                    <p className="text-sm font-semibold tracking-wider uppercase text-gray-500">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoosePrinter;
