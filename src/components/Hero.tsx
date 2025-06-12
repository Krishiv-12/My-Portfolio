"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-500 to-white px-4 text-white"
    >
      <div className="text-center max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey 👋 I'm Krishanpal, <br /> a MERN Stack Developer 🚀
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I build scalable, full-stack web apps with beautiful UIs and powerful backends.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="#projects"
            className="px-6 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-blue-500 transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full border border-white font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
