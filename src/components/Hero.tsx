"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ModernBackground from "./ModernBackground";

const floatingImages = [
  "/bg1.avif",
  "/bg2.avif",
  "/bg3.avif",
  "/bg4.avif",
  "/bg5.avif",
];


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden md:overflow-visible pt-6">

      {/* 🌌 Premium Background Layer */}
  <div className="absolute inset-0 z-0">
    <ModernBackground />
    
    {/* gradient overlay for depth */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,105,180,0.08),transparent_60%)]" />
  </div>

  {/* 🔥 GRID */}
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  {/* 🖤 VIGNETTE */}
  <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_30%,black_100%)]" />


      {/* ── FLOATING IMAGES (original positions) ────────────────────────── */}
      {floatingImages.map((src, index) => (
        <motion.div
          key={index}
          className="absolute w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-xl hidden md:block"
          style={{
            top: `${(index % 3) * 30 + 20}%`,
            left: `${index * 20 + 5}%`,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: index * 0.3 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            },
          }}
        >
          {/* glass ring */}
          <div className="absolute inset-0 z-10 rounded-xl ring-1 ring-white/10" />
          {/* shine */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/[0.08] to-transparent" />
          <Image
            src={src}
            alt={`project-${index}`}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* ── HERO CONTENT ────────────────────────────────────────────────── */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">

        {/* Eyebrow pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase text-white/45 backdrop-blur-sm animate-fade-in-up delay-0">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          MERN Stack Developer
        </div>

        <h1 className="text-5xl sm:text-5xl md:text-9xl font-extrabold md:leading-20 max-w-4xl">
          <span className="block animate-text-slide delay-0">
            CREATING
          </span>
          <span className="block text-pink-400 mx-2 animate-text-slide delay-150">
            MODERN
          </span>
          <span className="block animate-text-slide delay-300">
            EXPERIENCES
          </span>
        </h1>

        <p
          style={{ fontFamily: "var(--font-rock)" }}
          className="text-gray-400 capitalize mt-4 md:max-w-xl w-full md:text-xl px-4 animate-fade-in-up delay-450"
        >
          I turn ideas into interactive web applications.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 animate-fade-in-up delay-600">
          <a
            href="#projects"
            className="px-20 py-4 md:px-6 md:py-3 bg-white/90 text-black
             rounded-l-full rounded-tr-2xl rounded-br-full text-sm md:text-base
             font-semibold
             hover:bg-pink-200 hover:text-pink-500
             transition-all duration-300
             hover:shadow-[0_0_20px_rgba(255,105,180,0.6)]
             hover:scale-105"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-20 py-4 md:px-6 md:py-3 border border-white border-t-2
             rounded-l-full rounded-tr-2xl rounded-br-full text-sm md:text-base
             font-semibold
             bg-pink-400
             hover:bg-pink-200 hover:text-pink-500
             transition-all duration-300
             hover:shadow-[0_0_20px_rgba(255,105,180,0.6)]
             hover:scale-105"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center gap-2 text-white/20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <span className="text-[9px] tracking-[0.32em] uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

    </main>
  );
}