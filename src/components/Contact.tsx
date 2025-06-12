"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";

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
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-tr from-white via-blue-500 to-white text-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-white mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Want to collaborate or have an idea to discuss? Fill the form or
          connect with me directly below!
        </motion.p>

<motion.div
  className="flex flex-col md:flex-row gap-10 justify-center items-start mt-10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 w-full space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <input
            required
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            required
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <textarea
            required
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-blue-500 transition"
          >
            Send Message
          </button>

        {status === "success" && (
          <p className="text-green-400 mt-4">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4">Something went wrong. Try again.</p>
        )}
        </motion.form>

        <div className="flex-1 w-full space-y-3 text-left text-black">
          <p>
            📧 Email:{" "}
            <a
              className="text-white"
              href="mailto:Krishivrawat712@gmail.com"
            >
              Krishivrawat712@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+918982482283" className="text-white">
              +91 89824 82283
            </a>
          </p>
          <p>📍 Location: <span className="text-white">Bhopal, Madhya Pradesh</span> </p>
          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/krishanpal-rawat-a7bab4278"
              target="_blank"
              className="text-white"
            >
              LinkedIn
            </a>
          </p>
          <p>
            🐙{" "}
            <a
              href="https://github.com/Krishiv-12"
              target="_blank"
              className="text-white"
            >
              GitHub
            </a>
          </p>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
