// app/page.tsx – Inspired by Awwwards Hero Section (Modern Portfolio)

import { motion } from "framer-motion";
import Image from "next/image";

const floatingImages = [
  "/bg1.avif",
  "/bg2.avif",
  "/bg3.avif",
  "/bg4.avif",
  "/bg5.avif",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden md:overflow-visible relative pt-6">
      {/* Floating Image Cards */}
      {floatingImages.map((src, index) => (
        <motion.div
          key={index}
          className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-xl hidden md:block`}
          initial={{ opacity: 0, y: -30, x: -30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.6 }}
          style={{
            top: `${(index % 3) * 30 + 20}%`,
            left: `${index * 20 + 5}%`,
          }}
        >
          <Image
            src={src}
            alt={`project-${index}`}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>
      ))}
      

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-5xl md:text-9xl font-extrabold md:leading-20 max-w-4xl"
        >
          CREATING <br />
          <span className="text-pink-400 mx-2">MODERN</span>
          <br />
          EXPERIENCES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 capitalize mt-4 md:max-w-xl w-full md:text-xl px-4"
        >
           I turn ideas into interactive web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col md:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-20 py-4 md:px-6 md:py-3 bg-white text-black rounded-l-full rounded-tr-2xl rounded-br-full text-sm md:text-base font-semibold hover:bg-gray-200 transition"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-20 py-4 md:px-6 md:py-3 border border-white rounded-l-full rounded-tr-2xl rounded-br-full text-sm md:text-base font-semibold hover:bg-pink-200 hover:text-pink-500 transition"
          >
            Let’s Connect
          </a>
        </motion.div>
      </section>
    </main>
  );
}
