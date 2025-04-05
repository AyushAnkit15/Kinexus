import React from "react";

import logo from "../assets/white logo.png"
//   <div className="text-2xl font-bold text-white">Logo</div>

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-white">
            
        <img src={logo} alt="Logo" className="w-15 h-15" /></div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-4 lg:mt-0">
          <a href="#" className="text-gray-300 hover:text-red-500 transition">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500 transition">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500 transition">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500 transition">
            FAQ
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} MYC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
