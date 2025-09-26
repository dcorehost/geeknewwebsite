import React from "react";

const AboutServices = () => {
  return (
    <section className="about px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-2xl font-bold text-center md:text-left mb-6 text-[#062B7E]">
            Laptop Repair Service – Unglitch Laptop Service Center
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            When it comes to fixing our beloved laptops, it’s absolutely crucial
            to make the right choice. And while many people may automatically
            think of heading to a{" "}
            <span className="text-blue-600">
              Dell, Lenovo, HP, Asus, Acer, MSI
            </span>{" "}
            laptop Service Center for their laptop repair & service, there’s a
            rising star in the industry that’s capturing attention and winning
            hearts: <strong>Unglitch</strong>. This exceptional laptop repair
            service has quickly become a force to be reckoned with, thanks to
            its unmatched expertise and unwavering commitment to putting
            customers first.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8860.jpg"
            alt="Laptop Repair Service"
            className="rounded-lg shadow-lg max-h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
