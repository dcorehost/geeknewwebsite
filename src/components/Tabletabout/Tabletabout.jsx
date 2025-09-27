import React from "react";
import tabletImg from "../../assets/images/repairtab.jpg"; 

export default function Tabletabout({
  title = "About Our Tablet Service",
  subtitle = "Fast, reliable repairs for iPad, Samsung Galaxy Tab, Lenovo and more.",
}) {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative flex justify-center lg:justify-start">
          <img
            src={tabletImg}
            alt="Tablet Service"
            className="rounded-xl shadow-xl border border-gray-200"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">
            {subtitle} We specialize in screen replacements, battery issues,
            software fixes and more. Our certified experts ensure quick
            turnaround with genuine parts and warranty.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Certified Technicians
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Genuine Parts with Warranty
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Same-Day Repairs Available
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
