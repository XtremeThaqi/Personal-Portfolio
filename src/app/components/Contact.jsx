import ContactForm from "./ContactForm";
import { contactEmail } from "../lib/contact";

export default function Contact() {
  return (
    <section tabIndex={-1} id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold">Let&apos;s talk</h2>
          <p className="mt-4 text-zinc-400">Have a project or an opportunity in mind?</p>
          <a href={`mailto:${contactEmail}`} className="mt-2 inline-flex min-h-11 items-center text-red-400 hover:text-red-300 underline underline-offset-4 break-all">{contactEmail}</a>
        </div>
        <div className="bg-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-5 sm:p-10 shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
