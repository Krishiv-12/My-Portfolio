"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("idle");

  emailjs
    .sendForm(
      "service_2w7b7bk",
      "template_s1jdpfg",
      form.current!,
      "cTghXkJoSMY0ualGs"
    )
    .then(() => {
      setStatus("success");
      form.current?.reset();
    })
    .catch(() => {
      setStatus("error");
    });
};


  return (
    <section id="contact" className="py-20 bg-black text-white px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Want to collaborate or have an idea to discuss? Fill out the form
          below or connect with me directly through email or social links!
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-12 justify-center items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* --- Form --- */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 w-full space-y-5  p-6 rounded-xl shadow-lg"
          >
            <input
              required
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              required
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-pink-100 text-pink-500 font-semibold px-6 py-3 rounded-l-full rounded-tr-2xl rounded-br-full hover:bg-pink-200 transition w-full"
            >
              Send Message
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2">Something went wrong. Try again.</p>
            )}
          </motion.form>

          {/* --- Contact Info --- */}
          <div className="flex-1 w-full space-y-5 text-white">
            <div className="p-5 rounded-xl shadow-lg space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <a href="mailto:Krishivrawat712@gmail.com" className="hover:text-pink-400 transition">
                  Krishivrawat712@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <a href="tel:+918982482283" className="hover:text-pink-400 transition">
                  +91 89824 82283
                </a>
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span className="hover:text-pink-400 transition cursor-pointer">Bhopal, Madhya Pradesh</span>
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <Linkedin className="w-5 h-5" />
                <a
                  href="https://www.linkedin.com/in/krishanpal-rawat-a7bab4278"
                  target="_blank"
                  className="hover:text-pink-400 transition"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <Github className="w-5 h-5" />
                <a
                  href="https://github.com/Krishiv-12"
                  target="_blank"
                  className="hover:text-pink-400 transition"
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
