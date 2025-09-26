import React from "react";

const App = () => {
    const primaryTeal = '#02C9B7';
    const secondaryDarkBlue = '#062B7E';

    const mainImageUrl = `../src/assets/images/wifi22.png`;

    const features = [
        { 
            iconSrc: `../src/assets/images/clock.png`, 
            title: "clock Wi-Fi Assistance", 
            desc: "Get instant Wi-Fi support anytime, ensuring your network is always up and running reliably." 
        },
        { 
            iconSrc: `../src/assets/images/trusted.png`, 
            title: "Trusted Technicians", 
            desc: "Our certified network experts quickly resolve Wi-Fi issues for homes and offices with verified skill." 
        },
        { 
            iconSrc: `../src/assets/images/multidevice.png`, 
            title: "Multi-Device Connectivity", 
            desc: "Seamless Wi-Fi for laptops, desktops, tablets, smartphones, and all your smart home devices." 
        },
        { 
            iconSrc: `../src/assets/images/quickrespons.png`, 
            title: "Quick Network Troubleshooting", 
            desc: "No long waits—our team quickly diagnoses and fixes Wi-Fi problems to get you online faster." 
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div className="text-center lg:text-left">
                    <h2 className={`text-sm font-semibold uppercase tracking-widest mb-2`} style={{ color: primaryTeal }}>
                        EXCELLENCE IN CONNECTIVITY
                    </h2>
                    <h3 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight`} style={{ color: secondaryDarkBlue }}>
                        WHY CHOOSE US <br className="hidden sm:inline"/>FOR WI-FI HELP?
                    </h3>
                    
                    <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl transition duration-300 ease-in-out mt-8 lg:mt-0" 
                        style={{ boxShadow: `0 20px 25px -5px rgba(2, 201, 183, 0.2), 0 10px 10px -5px rgba(2, 201, 183, 0.08)` }}
                    >
                        <img 
                            src={mainImageUrl} 
                            alt="Why Choose Us Image: Modern WiFi Setup" 
                            className="w-full h-full object-cover transform hover:scale-[1.03] transition duration-500" 
                        />
                        <div className="absolute inset-0 bg-gray-900 opacity-5"></div>
                    </div>
                </div>

               
                <div className="mt-8 lg:mt-0 divide-y divide-gray-300">
                    {features.map((feature, idx) => (
                        <div key={idx} 
                        
                            className="flex items-start space-x-6 py-6 first:pt-0 last:pb-0"
                        >
                            
                            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-md bg-white border border-blue-200">
                                <img 
                                    src={feature.iconSrc} 
                                    alt={feature.title + " Icon"} 
                                    className="w-13 h-13 object-contain rounded-full" 
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1 flex-grow">
                                <h4 className={`text-xl font-bold transition duration-300`} 
                                    style={{ color: secondaryDarkBlue }}
                                >
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 text-base">
                                    {feature.desc}
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
