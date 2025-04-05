import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full min-h-[60vh] bg-[radial-gradient(circle,rgba(173,255,47,0.15)_0%,rgba(0,0,0,1)_80%)] flex items-center justify-center px-6 py-12">
      <div className=" text-white rounded-lg shadow-lg p-6 md:p-10 w-full max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-light text-center ">
          Transform the way you think
        </h2>

        <h2 className="text-2xl md:text-3xl font-light text-center mb-6">
          about your brand
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Name & Email Fields (Side-by-Side on Large Screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-900 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-900 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400 transition duration-300"
            />
          </div>

          {/* Message Field */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-neutral-900 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400 transition duration-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-500 transition duration-300"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
