import React from "react";
// gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900
import logo from "../assets/white logo.png"



const Navbar = () => {

 
  return (
    <nav className="bg- w-full py-4 px-6 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          
        <img src={logo} alt="Logo" className="w-15 h-15" /></div>

        {/* Center: Navigation Links (Hidden on small screens) */}
        <div className="hidden lg:flex space-x-6 text-white border bg-neutral-800 border-black px-4 py-2 rounded-full">
          <a href="#" className="hover:text-red-600">
            Features
          </a>
          <a href="#" className="hover:text-red-600">
            Services
          </a>
          <a href="#" className="hover:text-red-600">
            About
          </a>
          <a href="#" className="hover:text-red-600">
            FAQ
          </a>
        </div>

        {/* Right: Login Button (Fixed for small screens) */}
        <button   className="bg-red-500 text-black px-4 py-2 rounded-md text-sm md:text-base pointer-cursor hover:bg-red-600 transition duration-300 hidden lg:block">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
