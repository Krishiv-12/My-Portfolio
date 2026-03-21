"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          style={{ fontFamily: "var(--font-machina)" }}
          className="text-xl tracking-wide text-white cursor-default"
        >
          KRISHIV.STUDIO
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group font-medium transition-all duration-300"
            >
              <span className="transition-all duration-300 group-hover:text-pink-400 group-hover:tracking-wide">
                {link}
              </span>
              <span
                className="absolute -bottom-1 left-1/2 h-[2px] w-0 bg-pink-400
                           transition-all duration-300 group-hover:w-full group-hover:left-0
                           shadow-[0_0_8px_rgba(244,114,182,0.8)]"
              />
            </Link>
          ))}

          <a
            href="/KrishanpalRawat-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-2 rounded-full border-t-2 border-white
                       px-4 py-1.5 text-sm font-medium text-white bg-pink-400
                       hover:bg-pink-200 hover:text-pink-500
                       hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
                       hover:translate-y-[-2px] transition-all duration-300"
          >
            Resume <Download size={16} />
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white z-1000 relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="w-10 h-10 flex items-center justify-center rounded-full
                       border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]
                       transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate: -90,  opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {open && (
         <motion.div
  key="mobile-menu"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className="md:hidden fixed top-0 left-0 w-full h-screen
             bg-black/95 backdrop-blur-xl
             flex flex-col items-center justify-center
             z-[999] overflow-y-auto"
>
            {/* Background dot grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-64 h-64 rounded-full bg-pink-500/[0.08] blur-[80px]" />

            {/* Nav links */}
            <nav className="relative flex flex-col items-center gap-2 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{   opacity: 0, y: 16 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.07 }}
                  className="w-full"
                >
                  <Link
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between w-full
                               py-4 border-b border-white/[0.07]
                               text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-white/20 font-mono tracking-widest">
                        0{i + 1}
                      </span>
                      <span
                        style={{ fontFamily: "var(--font-machina)" }}
                        className="text-2xl font-semibold tracking-tight
                                   group-hover:text-pink-400 transition-colors duration-200"
                      >
                        {link}
                      </span>
                    </div>
                    {/* Arrow indicator */}
                    <motion.span
                      className="text-white/20 group-hover:text-pink-400 transition-colors duration-200"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      ↗
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

              {/* Resume */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{   opacity: 0, y: 16 }}
                transition={{ duration: 0.3, delay: 0.05 + navLinks.length * 0.07 }}
                className="mt-8 w-full"
              >
                <a
                  href="/KrishanpalRawat-Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3
                             w-full py-3.5 rounded-full
                             bg-pink-400 text-white font-semibold text-sm
                             hover:bg-pink-300 hover:shadow-[0_0_24px_rgba(244,114,182,0.4)]
                             transition-all duration-300"
                >
                  Download Resume <Download size={18} />
                </a>
              </motion.div>
            </nav>

            {/* Bottom label */}
            <motion.p
              className="absolute bottom-8 text-[10px] tracking-[0.25em] uppercase text-white/15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              KRISHIV.STUDIO
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}