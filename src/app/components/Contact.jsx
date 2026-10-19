"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("D8iqse_Hvt9TS8Tcs"); // ← your public key here
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2 || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Please enter a valid name (min 2 letters)";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm() || !form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_x7ad9n2",
        "template_dtq8b0u",
        form.current
        // No fourth argument needed because we called emailjs.init() above
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 6 seconds
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error) {
      console.error("EmailJS error:", error);
      // For debugging — open browser console (F12) and check this
      console.log("Error details:", error?.text || error?.message);
      // You can show a user-friendly error if you want:
      // alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center items-center gap-3 max-w-fit mx-auto mb-10 px-6 py-3 bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 rounded-xl text-base text-zinc-300 font-medium shadow-md"
        >
          <span className="text-2xl">✉️</span>
          Like what you see? Let's chat about your project!
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-10 shadow-2xl"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-zinc-900 border ${errors.name ? "border-red-500" : "border-zinc-800"
                    } rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm text-red-400 mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-zinc-900 border ${errors.email ? "border-red-500" : "border-zinc-800"
                    } rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-all`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-2">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-5 py-4 bg-zinc-900 border ${errors.message ? "border-red-500" : "border-zinc-800"
                  } rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-all resize-none`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-2">{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-8 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 transition-all ${isSubmitting
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "bg-[#141414] border border-[#1f1f1f] text-white hover:border-[#2c2c2c] hover:bg-zinc-800/40"
                }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="text-xl" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Success modal */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg
                  className="h-10 w-10 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
              <p className="text-zinc-400 mb-8">
                Thank you for reaching out. I'll get back to you soon.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-2xl transition-all"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}