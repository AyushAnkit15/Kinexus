import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[70vh] lg:h-[65vh] bg-gradient-to-b from-black via-[#3b3010] to-black overflow-hidden text-white px-4">
      {/* Content for smaller screens (Placed above hemisphere) */}
      <div className="absolute top-12 lg:hidden text-center flex flex-col items-center w-[85%]">
        <h1 className="text-3xl font-bold leading-tight">
          Design work, the efficient way
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Innovative design solutions for technology firms and emerging
          businesses.
        </p>
      </div>

      {/* Hemisphere Container */}
      <div className="relative w-[95vw] max-w-[1100px] h-[50vw] max-h-[450px] lg:h-[40vw] lg:max-h-[400px] flex items-center justify-center">
        {/* Hemisphere SVG */}
        <svg viewBox="0 0 1100 550" className="absolute w-full h-full">
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="yellow" />
              <stop offset="50%" stopColor="rgb(255, 255, 0)" />
              <stop offset="100%" stopColor="rgb(40, 40, 20)" />
            </radialGradient>
          </defs>

          {/* Filled Hemisphere (Only visible on large screens) */}
          <path
            d="M50,550 A500,500 0 0,1 1050,550 L50,550 Z"
            className="hidden lg:block"
            fill="black"
          />

          {/* Glowing Border */}
          <path
            d="M50,550 A500,500 0 0,1 1050,550"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        {/* Content Inside Hemisphere (Only for large screens) */}
        <div className="absolute hidden lg:flex flex-col items-center text-center w-[70%] px-4 mt-12">
          <h1 className="text-2xl lg:text-4xl  font-medium leading-tight">
            Design work,
          </h1>
          <h1 className="text-xl lg:text-4xl font-medium leading-tight">
            the efficient way
          </h1>
          <p className="mt-2 text-lg font-light text-gray-400">
            Innovative development and design solutions for technology
          </p>
          <p className="mt-2 text-lg font-light text-gray-400">
            firms and emerging businesses.
          </p>

          {/* Email Input + Button (Only for large screens) */}
          <div className="mt-4 flex items-center bg-gray-800 rounded-md p-1 w-[65%] max-w-[400px] overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full bg-transparent text-white outline-none text-sm sm:text-base"
            />
            <button className="px-4 py-1 mr-1.5 w-1/2 bg-lime-300 text-black rounded-sm hover:bg-green-300 transition duration-300 ease-in-out">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
