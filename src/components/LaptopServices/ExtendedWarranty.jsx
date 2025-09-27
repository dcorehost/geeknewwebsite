import React from "react";
import WarrantyCard from "./WarrantyCard";

const ExtendedWarranty = () => {
  const warrantyPlans = [
    {
      title: "Capsule",
      subtitle: "360",
      description:
        "If you are as clumsy as a laptop user can be or a rough and tough user, then this Capsule 360 pack is ideal for you.",
    },
    {
      title: "Booster",
      subtitle: "365",
      description:
        "If you are the one who likes to organize & plan things and gives preference to your system, then this pack is designed just for you.",
    },
    {
      title: "Booster",
      subtitle: "+",
      description:
        "Booster Plus Pack is for those who want to experience a carefree laptop health life and take a step forward.",
    },
    {
      title: "Booster",
      subtitle: "PRO",
      description:
        "If you want to taste the future and be a part of it, then go for our Booster Pro Pack.",
    },
  ];

  return (
    <div className="px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-2 text-[#062B7E]">Extended Warranty</h2>
      <p className="text-center text-gray-600 mb-10 text-[#062B7E]">
        Unglitch is elated to announce the launch of its 4 New Services for the True Laptop Users.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {warrantyPlans.map((plan, i) => (
          <WarrantyCard
            key={i}
            title={plan.title}
            subtitle={plan.subtitle}
            description={plan.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtendedWarranty;
