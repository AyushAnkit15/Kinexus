import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <span className="text-lime-400">&#8855;&#8855;</span>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-lime-400">Features</a>
        <a href="#" className="hover:text-lime-400">About</a>
        <a href="#" className="hover:text-lime-400">Services</a>
        <a href="#" className="hover:text-lime-400">FAQs</a>
      </div>
      {/* Login Button */}
      <button className="bg-lime-400 text-black px-4 py-2 rounded">Login</button>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white text-center py-20">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-[90%] max-w-4xl bg-black border border-lime-400 rounded-full h-[300px] md:h-[400px] flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl md:text-5xl font-bold">Design work, <br /> the efficient way</h1>
          <p className="text-gray-400 mt-4 max-w-lg">
            Innovative design solutions for technology firms and emerging businesses.
          </p>
          <div className="flex mt-6 bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              className="bg-transparent px-4 py-2 focus:outline-none text-white"
              placeholder="Enter your email"
            />
            <button className="bg-lime-400 text-black px-6 py-2">Submit Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;