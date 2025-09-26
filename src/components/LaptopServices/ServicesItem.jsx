import React from "react";
import { FaShieldAlt } from "react-icons/fa"; // Example icon (shield security)

const ServicesItem = ({ text }) => {
  return (
    <li className="flex items-start space-x-2">
      <FaShieldAlt className="text-[#062B7E] mt-1" /> 
      <span>{text}</span>
    </li>
  );
};

export default ServicesItem;
