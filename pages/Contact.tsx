import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#0f0f0f] to-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Contact Info */}
        <div>
          <p className="text-lg font-semibold text-yellow-400 uppercase tracking-wide">
            Get in Touch
          </p>
          <h1 className="text-4xl font-extrabold text-white leading-tight mt-2">
            Let’s Make Your <span className="text-yellow-400">Brand</span>{" "}
            Brilliant
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            I’d love to hear from you! Whether you have a project in mind or
            just want to chat, feel free to reach out.
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4 text-gray-300">
            <p className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              <span className="text-lg">ADDIS ABABA, ETHIOPIA</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400 text-xl" />
              <span className="text-lg">getahunnegash11@gmail.com</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaPhone className="text-yellow-400 text-xl" />
              <span className="text-lg font-bold tracking-wider underline">
                +251 921030278
              </span>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-yellow-400 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-yellow-400 transition-all"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-3 mt-4 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 mt-4 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-yellow-400 transition-all"
            rows={4}
          ></textarea>
          <button className="mt-6 w-full py-3 bg-yellow-500 text-white font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
            <span>Send Message</span>
            <FaPaperPlane className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
