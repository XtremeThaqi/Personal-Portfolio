"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
const EmailJS = React.lazy(() => import("@emailjs/browser"));

export default function Contact() {
  const form = useRef(null);
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
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const emailjs = (await EmailJS).default;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_x7ad9n2",
        "template_dtq8b0u",
        form.current,
        "D8iqse_Hvt9TS8Tcs"
      );
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-32 px-5 sm:px-8 overflow-hidden flex items-center"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center items-center gap-3 max-w-fit mx-auto mb-10 px-6 py-3 bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 rounded-full text-base text-zinc-300 font-medium shadow-md"
        >
          <span className="text-2xl">✉️</span>
          Like what you see? Let's chat about your project!
        </motion.div>

        {/* Main form container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50
            rounded-xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto
          "
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-7">
            {/* Name + Email in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xl pointer-events-none" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 outline-none bg-zinc-950/50 border ${errors.name ? "border-red-600" : "border-zinc-800"} text-white placeholder-zinc-500 rounded-xl focus:outline-none focus:border-rose-500 transition-all`}
                    placeholder="Erblin Thaqi"
                  />
                </div>
                {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xl pointer-events-none" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 outline-none bg-zinc-950/50 border ${errors.email ? "border-red-600" : "border-zinc-800"} text-white placeholder-zinc-500 rounded-xl focus:outline-none focus:border-rose-500 transition-all`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Message below */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
                Your Message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute top-5 left-4 text-zinc-500 text-xl pointer-events-none" />
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 outline-none bg-zinc-950/50 border ${errors.message ? "border-red-600" : "border-zinc-800"} text-white placeholder-zinc-500 rounded-xl focus:outline-none focus:border-rose-500 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>
              {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-8 mt-4 rounded-lg font-medium text-lg ${isSubmitting
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "border border-[#1f1f1f] text-white font-medium rounded-2xl text-lg transition-all duration-300 ease-in-out bg-[#141414] hover:border-[#2c2c2c] hover:bg-zinc-800/40 text-center"}
               transition-all flex items-center justify-center gap-3`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
              className="
                bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50
                rounded-3xl p-10 max-w-md w-full text-center shadow-2xl
              "
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
                    strokeWidth={2} d="M5 13l4 4L19 7"
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