"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ── Scroll detection ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when menu open ──────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ── Close on outside click ───────────────────────────────────── */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    /* ── Outer wrapper: always top-center ─────────────────────── */
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-6xl px-5 sm:px-8 pt-4">
        <div ref={menuRef} className="relative">

          {/* ── Pill bar ──────────────────────────────────────── */}
          <motion.div
            animate={
              scrolled
                ? { maxWidth: 480, borderRadius: 40 }
                : { maxWidth: 1152, borderRadius: 14 }
            }
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto overflow-hidden
                       backdrop-blur-xl bg-white/75 dark:bg-neutral-900/70
                       border border-black/[0.08] dark:border-white/[0.08]
                       shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
            style={{ willChange: "max-width, border-radius" }}
          >
            <div className="flex items-center justify-between px-5 py-3">

              {/* Logo */}
              <Link
                href="#home"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-widest text-black/80 dark:text-white/80
                           hover:text-black dark:hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-machina, inherit)", letterSpacing: "0.12em" }}
              >
                KRISHIV<span className="text-black/25 dark:text-white/25">.</span>STUDIO
              </Link>

              {/* Desktop links — hidden when scrolled (pill is narrow) */}
              <AnimatePresence>
                {!scrolled && (
                  <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hidden lg:flex items-center gap-6"
                  >
                    {navLinks.map((link) => (
                      <DesktopLink key={link.label} {...link} />
                    ))}
                  </motion.nav>
                )}
              </AnimatePresence>

              {/* Right side: Resume + hamburger */}
              <div className="flex items-center gap-3">
                <AnimatePresence>
                  {!scrolled && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      href="/KrishanpalRawat-Resume.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                                 text-xs font-medium text-black/60 dark:text-white/60
                                 border border-black/10 dark:border-white/10
                                 hover:border-black/20 dark:hover:border-white/20
                                 hover:text-black dark:hover:text-white
                                 transition-all duration-200"
                    >
                      Resume <Download size={11} />
                    </motion.a>
                  )}
                </AnimatePresence>

                {/* Hamburger / close */}
                <button
                  onClick={() => setOpen((p) => !p)}
                  aria-label="Toggle Menu"
                  className="w-9 h-9 flex items-center justify-center rounded-full
                             border border-black/[0.08] dark:border-white/[0.08]
                             hover:bg-black/[0.04] dark:hover:bg-white/[0.06]
                             transition-all duration-200 text-black/70 dark:text-white/70"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                      <motion.span
                        key="x"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <X size={15} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="lines"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="flex flex-col gap-[5px] items-end"
                      >
                        <span className="block w-[18px] h-px bg-current rounded-full" />
                        <span className="block w-[13px] h-px bg-current rounded-full" />
                        <span className="block w-[18px] h-px bg-current rounded-full" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Dropdown menu panel ────────────────────────────── */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-full max-w-[460px]
                           backdrop-blur-xl bg-white/80 dark:bg-neutral-900/75
                           border border-black/[0.08] dark:border-white/[0.08]
                           rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]
                           overflow-hidden"
              >
                {/* "Menu" label */}
                <div className="px-6 pt-5 pb-1">
                  <span className="text-[11px] tracking-widest uppercase text-black/30 dark:text-white/30 font-medium">
                    Menu
                  </span>
                </div>

                {/* Nav links */}
                <nav className="px-4 pb-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between
                                   px-2 py-1.5 rounded-lg
                                   text-[28px] sm:text-[32px] font-semibold leading-tight
                                   text-black/80 dark:text-white/80
                                   hover:text-black dark:hover:text-white
                                   hover:bg-black/[0.03] dark:hover:bg-white/[0.04]
                                   transition-all duration-150"
                        style={{ fontFamily: "var(--font-machina, inherit)" }}
                      >
                        {link.label}
                        <span className="text-black/20 dark:text-white/20 text-base
                                         group-hover:text-black/50 dark:group-hover:text-white/50
                                         transition-colors duration-150 -translate-y-0.5
                                         group-hover:-translate-y-1 group-hover:translate-x-0.5
                                         inline-block transition-transform">
                          ↗
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider + footer info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28, duration: 0.2 }}
                  className="mx-4 border-t border-black/[0.07] dark:border-white/[0.07]" />

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                  className="px-6 py-4 grid grid-cols-2 gap-4"
                >
                  {/* Left: Visit */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-1.5 font-medium">
                      Portfolio
                    </p>
                    <p className="text-[13px] text-black/60 dark:text-white/60 leading-snug">
                      Available for freelance<br />& full-time roles
                    </p>
                  </div>

                  {/* Right: Work with us */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-1.5 font-medium">
                      Work With Me
                    </p>
                    <a
                      href="mailto:krishivrawat712@gmail.com"
                      className="block text-[13px] text-black/60 dark:text-white/60
                                 hover:text-black dark:hover:text-white transition-colors"
                    >
                      krishivrawat712@gmail.com
                    </a>
                    <a
                      href="/KrishanpalRawat-Resume.pdf"
                      download
                      className="block mt-0.5 text-[13px] text-black/60 dark:text-white/60
                                 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                </motion.div>
              </motion.div>    
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}

/* ── Desktop slide-up link ─────────────────────────────────────── */
function DesktopLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden h-5 flex items-center
                 text-sm font-medium text-black/55 dark:text-white/55
                 hover:text-black dark:hover:text-white transition-colors duration-200"
      style={{ minWidth: "max-content" }}
    >
      <motion.span
        className="block"
        animate={{ y: hovered ? "-110%" : "0%" }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center"
        animate={{ y: hovered ? "0%" : "110%" }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {label}
      </motion.span>
    </Link>
  );
}