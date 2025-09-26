import React from "react";

const features = [
  { icon: "../src/assets/images/clock.png", title: "clock Wi-Fi Assistance", desc: "Get instant Wi-Fi support anytime, anywhere, ensuring your network is always up and running." },
  { icon: "../src/assets/images/trusted.png", title: "Trusted Technicians", desc: "Our certified network experts quickly resolve Wi-Fi issues for homes and offices." },
  { icon: "../src/assets/images/multidevice.png", title: "Multi-Device Connectivity", desc: "Seamless Wi-Fi for laptops, desktops, tablets, smartphones, and smart home devices." },
  { icon: "../src/assets/images/quickrespons.png", title: "Quick Network Troubleshooting", desc: "No long waits—our team quickly diagnoses and fixes Wi-Fi problems to get you online faster." },
];

const WhyChooseuswifi = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-extrabold tracking-wide mb-4 text-gray-900">WHY CHOOSE US</h2>
        <p className="text-gray-600 text-lg mb-8">Geek Care For WI-FI Help?</p>
        <div className="relative w-full h-64 lg:h-96 rounded-3xl overflow-hidden shimmer-effect border border-gray-300 shadow-2xl">
          <img src="../src/assets/images/Wifi2.png" alt="Why Choose Us Image" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex flex-col space-y-2 flex-grow">
              <div className="w-full h-px bg-gray-300"></div>
              <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseuswifi;
