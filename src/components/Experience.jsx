import React from "react";
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa"; // Example icons

const experiences = [
  {
    title: "Development",
    description: "Building scalable and high-performance applications.",
    icon: <FaCode />,
  },
  {
    title: "Design",
    description: "Creating visually appealing and user-friendly designs.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Marketing",
    description: "Driving engagement through strategic campaigns.",
    icon: <FaChartLine />,
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-full min-h-[60vh] bg-black flex flex-col items-center justify-center py-10 px-6">
      <h2 className=" text-sm font-light text-red-500 bg-neutral-900  border border-neutral-900 rounded-full px-4 py-2 mb-8">
        Our Expertise
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg- rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition duration-300 transform hover:scale-105 hover:shadow-red-500/50 "
          >
            {/* Icon (Only visible on large screens) */}
            <div className="text-lime-300 text-5xl mb-4 hidden lg:block">
              {exp.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
            <p className="text-gray-400 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
