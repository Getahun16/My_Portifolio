import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

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
        <div className="bg-[#111] p-8 rounded-xl shadow-lg">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
