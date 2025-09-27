import React from "react";
// Import your images
import geek1 from "../../assets/images/geek1.png";
import geek2 from "../../assets/images/geek2.png";
import geek9 from "../../assets/images/geek9.png";
import geek4 from "../../assets/images/geek4.png";
import geek5 from "../../assets/images/geek5.png";
import geek6 from "../../assets/images/geek6.png";
import geek7 from "../../assets/images/geek7.png";
import geek8 from "../../assets/images/geek8.png";

const services = [
  {
    title: "WiFi",
    description: "Setup, optimization, and troubleshooting for home or office WiFi networks.",
    image: geek1,
  },
  {
    title: "Printer",
    description: "Install, configure, and repair printers of all types and brands.",
    image: geek2,
  },
  {
    title: "Laptops",
    description: "Comprehensive support for all laptops, hardware & software issues.",
    image: geek9,
  },
  {
    title: "PC/Mac",
    description: "Support for desktops, MacBooks, and PC troubleshooting.",
    image: geek4,
  },
  {
    title: "Tablets",
    description: "Setup, support, and troubleshooting for tablets of all brands.",
    image: geek6,
  },
  {
    title: "iOS/Android",
    description: "Mobile device support for iPhones, iPads, and Android devices.",
    image: geek5,
  },
  {
    title: "Network Setup",
    description: "Configure routers, switches, and full network setups for home or office.",
    image: geek7,
  },
  {
    title: "Antivirus & Security",
    description: "Install, update, and troubleshoot antivirus software and ensure device security.",
    image: geek8,
  },
];

const GeekServices = () => {
  // Create a row with alternating image and text
  const createRowItems = (services) => {
    const row = [];
    services.forEach((service) => {
      row.push({ type: "image", ...service });
      row.push({ type: "text", ...service });
    });
    return row;
  };

  const firstRow = createRowItems(services);
  const row1 = firstRow.slice(0, 8);
  const row2 = firstRow.slice(8, 16);

  const renderRow = (row) => (
    <div className="flex w-full flex-wrap">
      {row.map((item, index) => (
        <div key={index} className="w-1/4 p-4 border border-gray-200 box-border aspect-square">
          {item.type === "text" ? (
            <div className="p-6 h-full flex flex-col justify-center text-center bg-gray-50">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Read More
              </a>
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-full mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      {renderRow(row1)}
      {renderRow(row2)}
    </div>
  );
};

export default GeekServices;
