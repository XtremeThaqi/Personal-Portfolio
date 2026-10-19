"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { contactEmail } from "../lib/contact";

const initialValues = { name: "", email: "", message: "", website: "" };

export default function ContactForm() {
  const form = useRef(null);
  const busy = useRef(false);
  const lastSent = useRef(0);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const reduceMotion = useReducedMotion();

  const change = ({ target: { name, value } }) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status !== "sending") setStatus("idle");
  };

  const submit = async (event) => {
    event.preventDefault();
    if (busy.current) return;
    if (values.website) { setStatus("error"); return; }

    const nextErrors = {};
    if (values.name.trim().length < 2) nextErrors.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) nextErrors.message = "Please write at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      form.current?.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    if (Date.now() - lastSent.current < 10000) { setStatus("cooldown"); return; }

    busy.current = true;
    setStatus("sending");
    try {
      // Load the existing SDK only when needed; no browser-only initialization during SSR.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm("service_x7ad9n2", "template_dtq8b0u", form.current, {
        publicKey: "D8iqse_Hvt9TS8Tcs",
        limitRate: { id: "portfolio-contact", throttle: 10000 },
      });
      lastSent.current = Date.now();
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      busy.current = false;
    }
  };

  const inputClass = (name) => `w-full px-5 py-4 bg-zinc-900 border ${errors[name] ? "border-red-500" : "border-zinc-800"} rounded-xl text-white placeholder-zinc-500 focus:border-zinc-600 transition-colors`;

  return (
    <form ref={form} action={`mailto:${contactEmail}`} method="post" encType="text/plain" onSubmit={submit} noValidate aria-busy={status === "sending"} className="space-y-8">
      <noscript><p className="text-zinc-300">This form needs JavaScript. Please use the email link above to contact me.</p></noscript>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" type="text" value={values.website} onChange={change} autoComplete="off" tabIndex={-1} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={80} required readOnly={status === "sending"} value={values.name} onChange={change} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} className={inputClass("name")} placeholder="Your name" />
          {errors.name && <p id="contact-name-error" className="text-sm text-red-400 mt-2">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required readOnly={status === "sending"} value={values.email} onChange={change} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} className={inputClass("email")} placeholder="you@example.com" />
          {errors.email && <p id="contact-email-error" className="text-sm text-red-400 mt-2">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-400 mb-2">Your Message</label>
        <textarea id="contact-message" name="message" rows={6} minLength={10} maxLength={5000} required readOnly={status === "sending"} value={values.message} onChange={change} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} className={`${inputClass("message")} resize-y`} placeholder="Tell me about your project or opportunity..." />
        {errors.message && <p id="contact-message-error" className="text-sm text-red-400 mt-2">{errors.message}</p>}
      </div>
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        className="w-full py-4 px-8 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 bg-[#141414] border border-[#1f1f1f] text-white hover:border-[#2c2c2c] hover:bg-zinc-800/40 transition-colors disabled:opacity-60 disabled:cursor-wait"
      >
        <FiSend aria-hidden="true" className="text-xl" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>
      <div aria-live="polite" aria-atomic="true" className="min-h-6 text-sm leading-relaxed">
        {status === "sending" && <p className="text-zinc-300">Sending your message…</p>}
        {status === "success" && <p className="text-green-400">Message sent. Thank you for getting in touch.</p>}
        {status === "cooldown" && <p className="text-zinc-300">Please wait a few seconds before sending another message.</p>}
        {status === "error" && <p role="alert" className="text-red-400">Your message could not be sent. Please try again or <a className="underline underline-offset-4" href={`mailto:${contactEmail}`}>email me directly</a>.</p>}
      </div>
    </form>
  );
}
