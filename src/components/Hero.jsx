import React from 'react'

const Hero = () => {
    return (
       <div className="relative flex items-center justify-center min-h-screen bg-black text-white px-4">
      {/* Hero Section Content */}
      <div className="absolute bottom-10 w-full max-w-lg p-6 bg-black border-[6px] 
                      border-transparent rounded-full text-center
                      before:absolute before:inset-0 before:rounded-full 
                      before:border-[6px] before:border-gradient-to-r 
                      before:from-yellow-400 before:via-yellow-500 before:to-yellow-700">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold">Find Your Next Adventure</h1>

        {/* Search Bar */}
        <div className="mt-4 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search here..."
            className="w-3/4 p-3 text-black rounded-l-full border-none outline-none"
          />
          <button className="p-3 px-6 bg-yellow-500 text-black font-bold rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </div>
    );
  };
  
  export default Hero;

