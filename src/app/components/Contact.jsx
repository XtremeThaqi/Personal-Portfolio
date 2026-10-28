"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const EMAIL = "erblinthaqi40@gmail.com";
const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const form = useRef(null);
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [website, setWebsite] = useState("");

  useEffect(() => {
    emailjs.init("D8iqse_Hvt9TS8Tcs");
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setFeedback(null);
  }

  function validateForm() {
    const nextErrors = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = "Your message needs at least 10 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting || !form.current) return;
    if (website) return;
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFeedback(null);
    try {
      await emailjs.sendForm(
        "service_x7ad9n2",
        "template_dtq8b0u",
        form.current
      );
      setFormData(INITIAL_FORM);
      setErrors({});
      setFeedback({ type: "success", text: "Message sent. Thanks for getting in touch!" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setFeedback({
        type: "error",
        text: "Your message couldn't be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass = (name) =>
    "w-full min-h-11 border-0 border-b bg-transparent px-0 py-3 text-base text-white " +
    "placeholder:text-zinc-600 outline-none transition-colors duration-200 " +
    "focus:border-red-500 focus-visible:border-red-500 " +
    (errors[name] ? "border-red-500" : "border-zinc-700 hover:border-zinc-500");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-black px-3 py-24 text-white sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          className="grid rounded-[28px] border border-zinc-800 bg-[#0a0a0a] p-3 sm:p-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5 lg:p-5"
        >
          <div className="flex flex-col items-start justify-center px-2 py-10 sm:px-8 lg:min-h-[520px] lg:py-12">

            <h2
              id="contact-heading"
              className="max-w-lg text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl"
            >
              Have a project in mind?
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-400">
              Whether it&apos;s a website, an application, or an idea worth exploring, let&apos;s talk.
            </p>

            <a
              href={"mailto:" + EMAIL}
              className="group mt-5 sm:mt-9 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm font-medium text-zinc-100 transition-colors duration-200 hover:border-red-500/70 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              <FiMail aria-hidden="true" className="text-red-500" />
              Get in touch with Gmail
              <FiArrowUpRight aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </a>
          </div>

          <div className="rounded-[22px] border border-zinc-900 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <h3 className="mb-8 text-2xl font-semibold tracking-tight text-white">
              Send a message
            </h3>

            <form ref={form} onSubmit={handleSubmit} noValidate className="space-y-7">
              <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field blank</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-300">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={fieldClass("name")}
                  />
                  {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-300">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={fieldClass("email")}
                  />
                  {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-300">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={fieldClass("message") + " resize-y"}
                />
                {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-red-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto motion-reduce:transform-none"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send message</span>
                    <FiSend aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                  </>
                )}
              </button>

              {feedback && (
                <p
                  role={feedback.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={feedback.type === "error" ? "text-sm text-red-400" : "text-sm text-green-400"}
                >
                  {feedback.text}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
