"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateField = (name, value) => {
        switch (name) {
            case "name":
                return /^[a-zA-Z\s]*$/.test(value) && value.length >= 2;
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case "message":
                return value.length >= 10;
            default:
                return true;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: false }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all fields
        const newErrors = {
            name: !validateField("name", formData.name),
            email: !validateField("email", formData.email),
            message: !validateField("message", formData.message)
        };
        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error)) {
            try {
                await emailjs.sendForm('service_x7ad9n2', 'template_dtq8b0u', form.current, 'D8iqse_Hvt9TS8Tcs');

                setIsSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            } catch (error) {
                console.error("Failed to send message:", error);
            }
        }
        setIsSubmitting(false);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4" id="contact">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-400">
                        Have a project in mind or want to chat? Send me a message.
                    </p>
                </motion.div>

                <motion.form
                    ref={form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg"
                >
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                Your Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiUser className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={() => setErrors(prev => ({ ...prev, name: !validateField("name", formData.name) }))}
                                    className={`pl-10 w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all`}
                                    placeholder="John Doe"
                                />
                            </div>
                            {errors.name && <p className="mt-2 text-sm text-red-500">Please enter a valid name</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiMail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={() => setErrors(prev => ({ ...prev, email: !validateField("email", formData.email) }))}
                                    className={`pl-10 w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all`}
                                    placeholder="you@example.com"
                                />
                            </div>
                            {errors.email && <p className="mt-2 text-sm text-red-500">Please enter a valid email</p>}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                Your Message
                            </label>
                            <div className="relative">
                                <div className="absolute top-3 left-3">
                                    <FiMessageSquare className="h-5 w-5 text-gray-500" />
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={() => setErrors(prev => ({ ...prev, message: !validateField("message", formData.message) }))}
                                    className={`pl-10 w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all`}
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            {errors.message && <p className="mt-2 text-sm text-red-500">Message must be at least 10 characters</p>}
                        </div>

                        {/* Hidden fields for EmailJS template */}
                        <input type="hidden" name="from_name" value={formData.name} />
                        <input type="hidden" name="from_email" value={formData.email} />

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                            className={`w-full py-3 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-red-500/20 hover:shadow-lg'} transition-all`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FiSend />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.form>


                {isSuccess && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-md w-full text-center shadow-xl"
                        >
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-900/20 text-red-500 border border-red-900/50 mb-4">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400 mb-6">
                                Thank you for reaching out. I&apos;ll get back to you soon.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
