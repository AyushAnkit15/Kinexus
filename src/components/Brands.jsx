import React from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";

const TrustedBrands = () => {
  return (
    <div className="w-full py-8 bg-black text-white flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-600">
        Trusted by Top Brands
      </h2>

      {/* Logos - Flex for equal spacing */}
      <div className="flex justify-center items-center gap-8 md:gap-12 w-full px-6 max-w-screen-lg">
        {/* Brand Logos - Visible Everywhere */}
        <FaApple className="text-3xl md:text-5xl" />
        <FaGoogle className="text-3xl md:text-5xl" />
        <FaMicrosoft className="text-3xl md:text-5xl" />
        <FaAmazon className="text-3xl md:text-5xl" />
      </div>
    </div>
  );
};

export default TrustedBrands;
