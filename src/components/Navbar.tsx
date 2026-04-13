"use client";

import { useEffect, useState} from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Contact",        href: "#contact" },
];

/* ─── Slide-up text on hover ─────────────────────────────────────── */
function SlideLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden h-5 flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
      style={{ minWidth: "max-content" }}
    >
      {/* Original text — slides up on hover */}
      <motion.span
        className="block"
        animate={{ y: hovered ? "-110%" : "0%" }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      >
        {label}
      </motion.span>

      {/* Clone — starts from below, comes up instantly */}
      <motion.span
        className="absolute inset-0 flex items-center text-white"
        animate={{ y: hovered ? "0%" : "110%" }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      >
        {label}
      </motion.span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="#home">
          <h1
            style={{ fontFamily: "var(--font-machina)" }}
            className="text-base tracking-widest text-white cursor-pointer select-none hover:text-white/70 transition-colors duration-200"
          >
            KRISHIV<span className="text-white/25">.</span>STUDIO
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <SlideLink key={link.label} label={link.label} href={link.href} />
          ))}
        </nav>

        {/* Resume button + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/KrishanpalRawat-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full
                       border border-white/15 bg-white/[0.04] text-white/70 text-sm
                       hover:text-white hover:border-white/30 hover:bg-white/[0.08]
                       transition-all duration-200"
          >
            Resume <Download size={13} />
          </a>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle Menu"
            className="lg:hidden relative z-[1001] w-10 h-10 flex flex-col items-center justify-center gap-[5px]
                       rounded-full border border-white/10 bg-white/[0.04]
                       hover:bg-white/[0.08] transition-all duration-200"
          >
            <motion.span
              className="block h-px bg-white rounded-full origin-center"
              animate={open ? { rotate: 45, y: 6, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-px bg-white rounded-full"
              animate={open ? { opacity: 0, width: 0 } : { opacity: 1, width: 14 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px bg-white rounded-full origin-center"
              animate={open ? { rotate: -45, y: -6, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Full-screen Menu ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden fixed top-0 left-0 w-full h-screen
                       bg-black flex flex-col items-center justify-center
                       z-[999] overflow-hidden"
          >
            {/* Dot grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-72 h-72 rounded-full bg-white/[0.04] blur-[100px]" />

            {/* Links */}
            <nav className="relative flex flex-col w-full px-8 sm:px-14 max-w-lg mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, delay: 0.06 + i * 0.055 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between w-full
                               py-4 border-b border-white/[0.06]
                               text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[10px] text-white/20 font-mono tracking-widest w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{ fontFamily: "var(--font-machina)" }}
                        className="text-2xl sm:text-3xl font-semibold tracking-tight
                                   group-hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </span>
                    </div>
                    <motion.span
                      className="text-white/20 group-hover:text-white/60 transition-colors duration-200 text-sm"
                      whileHover={{ x: 3, y: -3 }}
                    >
                      ↗
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

              {/* Resume CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.06 + navLinks.length * 0.055 }}
                className="mt-8"
              >
                <a
                  href="/KrishanpalRawat-Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2.5
                             w-full py-3.5 rounded-full
                             border border-white/15 bg-white/[0.05]
                             text-white/80 text-sm font-medium
                             hover:bg-white/[0.10] hover:text-white hover:border-white/25
                             transition-all duration-300"
                >
                  Download Resume <Download size={14} />
                </a>
              </motion.div>
            </nav>

            {/* Bottom label */}
            <motion.p
              className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              KRISHIV.STUDIO
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}