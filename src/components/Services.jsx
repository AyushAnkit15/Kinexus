import React from "react";
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Building fast, scalable, and responsive websites.",
    icon: <FaCode className="hidden lg:block text-lime-300 text-5xl mb-3" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting modern and intuitive user experiences.",
    icon: (
      <FaPaintBrush className="hidden lg:block text-lime-300 text-5xl mb-3" />
    ),
  },
  {
    title: "SEO Optimization",
    description: "Improving visibility and ranking on search engines.",
    icon: <FaSearch className="hidden lg:block text-lime-300 text-5xl mb-3" />,
  },
  {
    title: "App Development",
    description: "Creating seamless mobile applications.",
    icon: (
      <FaMobileAlt className="hidden lg:block text-lime-300 text-5xl mb-3" />
    ),
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-[60vh] bg-black flex flex-col items-center justify-center py-10 px-6">
      {/* Section Heading */}
      <h2 className="sm:text-sm lg:text-sm font-light text-red-500 mb-8 text-center border bg-neutral-900 border-neutral-900 rounded-full px-4 py-2">
        Our Services
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg- text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition duration-300 transform hover:scale-105 hover:shadow-red-500/50"
          >
            {/* Icon (Only visible on large screens and above) */}
            {service.icon}

            {/* Service Title & Description */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
