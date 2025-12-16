import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    { type: "success"; text: string } | { type: "error"; text: string } | null
  >(null);
  const [submitting, setSubmitting] = useState(false);

  const validEmail = (val: string) => /\S+@\S+\.\S+/.test(val);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please fill required fields." });
      return;
    }
    if (!validEmail(email)) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }

    try {
      setSubmitting(true);
      // Example submission to a simple API route; replace as needed
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus({ type: "success", text: "Message sent successfully." });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus({ type: "error", text: "Failed to send. Try again." });
      }
    } catch (err) {
      setStatus({ type: "error", text: "Network error. Please retry." });
    } finally {
      setSubmitting(false);
    }
  };

  // Auto-dismiss status after 1.5 seconds
  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 1500);
    return () => clearTimeout(t);
  }, [status]);

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
          {status && (
            <div
              className={`${
                status.type === "success"
                  ? "bg-green-600/20 text-green-300"
                  : "bg-red-600/20 text-red-300"
              } px-4 py-3 rounded-lg mb-4`}
              role="alert"
              aria-live="polite"
            >
              {status.text}
            </div>
          )}
          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
