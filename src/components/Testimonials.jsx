import React from "react";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Coach Mike",
    feedback: "The social media support from Kinexus has been incredible. Our CrossFit gym has never looked more alive online—our classes are fuller, and our community is growing every week",
    company: "CrossFit Modiin",
    date: "March 20, 2025",
  },
  {
    name: "Sarah L",
    feedback: "We needed a clean, modern site for Bottomline, and Kinexus delivered. Fast turnaround, easy to work with, and the end result speaks for itself.",
    company: "Marketing Lead at Bottomline",
    date: "February 10, 2024",
  },
  {
    name: "Sophia Brown",
    feedback: "Outstanding work, great communication throughout.",
    company: "StartUp Inc.",
    date: "April 2, 2024",
  },
  {
    name: "James Wilson",
    feedback: "Impressed by their dedication and expertise!",
    company: "InnovateX",
    date: "March 15, 2024",
  },
  {
    name: "Emma Davis",
    feedback: "They truly understand the needs of a modern business.",
    company: "CreativeHub",
    date: "January 5, 2024",
  },
  {
    name: "Daniel Martinez",
    feedback: "A fantastic experience from start to finish.",
    company: "NextGen Solutions",
    date: "December 22, 2023",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full min-h-[70vh] bg-black flex flex-col items-center justify-center py-10 px-6">
      <h2 className="text-sm font-light text-red-500  bg-neutral-900 border  border-neutral-800  rounded-full px-4 py-2 mb-8">
        Testimonals
      </h2>
      <p className="text-3xl font-light text-white mb-12">
        What Our Clients Say about Us
      </p>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg- rounded-lg shadow-lg p-6 flex flex-col text-center transition duration-300 transform hover:scale-105 hover:shadow-red-500/50 
              ${index % 2 === 0 ? "mt-4" : "mb-4"} 
              ${index % 3 === 0 ? "lg:mt-10" : "lg:mb-10"} `}
          >
            <p className="text-gray-300 italic">"{testimonial.feedback}"</p>

            {/* User Info */}
            <div className="flex items-center justify-center space-x-2 mt-4">
              <FaUserCircle className="text-yellow-400 text-lg lg:block hidden" />
              <h3 className="text-lg font-semibold text-white">
                {testimonial.name}
              </h3>
            </div>

            <p className="text-gray-600 text-sm">{testimonial.company}</p>

            {/* Date */}
            <div className="flex items-center justify-center space-x-2 mt-2 text-gray-400">
              <FaCalendarAlt className="text-white text-sm lg:block hidden" />
              <p className="text-sm">{testimonial.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
