import React from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";

const brands = [
  { name: "Apple", icon: <FaApple className="text-5xl" /> },
  { name: "Google", icon: <FaGoogle className="text-5xl" /> },
  { name: "Microsoft", icon: <FaMicrosoft className="text-5xl" /> },
  { name: "Amazon", icon: <FaAmazon className="text-5xl" /> },
];

const TrustedBrands = () => {
  return (
    <div className="w-full min-h-[40vh] bg-black flex flex-col items-center justify-center py-10 px-6">
      <h2 className="text-3xl font-bold text-neutral-600 mb-8">
        Brand's Trust We Earned
      </h2>

      {/* Logos Container */}
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-4xl">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="text-gray-500 transition duration-300 transform hover:scale-110 hover:text-white filter grayscale hover:grayscale-0"
          >
            {brand.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
