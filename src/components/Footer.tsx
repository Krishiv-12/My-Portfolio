"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

/* ── Data ─────────────────────────────────────────────────────────── */
const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

const socialLinks = [
  { icon: Github,   label: "GitHub",   href: "https://github.com/Krishiv-12" },
  { icon: Linkedin, label: "LinkedIn", href: "http://www.linkedin.com/in/krishanpal-rawat" },
  { icon: Mail,     label: "Email",    href: "mailto:Krishivrawat712@gmail.com" },
];

/* ── Variants ─────────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* Big name reveal: clip-path wipe from left */
const nameReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 },
  },
};

/* Stagger container for nav pills */
const pillContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const pillItem: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  show:   { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Component ────────────────────────────────────────────────────── */
export default function Footer() {
  const ref    = useRef<HTMLElement>(null);

  const inView = useInView(ref, { once: true, amount: 0.35 });
  const year   = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="relative bg-[#0e0e0e] border-t border-white/[0.06] overflow-hidden
                 px-5 sm:px-8 pt-14 pb-0"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── TOP CONTENT ROW ─────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-14
                        border-b border-white/[0.06]">

          {/* LEFT — Tagline + socials */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Slash-prefix label, matches the reference image style */}
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4 font-mono">
              /Building for the web
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-5">
              Full-stack ideas,<br />shipped clean.
            </h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              MERN Stack Developer focused on performant, beautiful interfaces
              and scalable backends. Open to full-time and freelance work.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-7">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04]
                             flex items-center justify-center text-white/40
                             hover:text-white hover:border-white/25 hover:bg-white/[0.08]
                             transition-all duration-200"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* MIDDLE — Quick links as pills (matching reference) */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5 font-mono">
              /Quick links
            </p>
            <motion.div
              variants={pillContainer}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-wrap gap-2"
            >
              {navLinks.map(({ label, href }) => (
                <motion.div key={label} variants={pillItem}>
                  <Link
                    href={href}
                    className="inline-block px-4 py-2 rounded-full border border-white/12
                               bg-white/[0.04] text-white/60 text-sm
                               hover:text-white hover:border-white/25 hover:bg-white/[0.08]
                               transition-all duration-200"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact CTA */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5 font-mono">
              /Contact
            </p>
            <Link
              href="mailto:Krishivrawat712@gmail.com"
              className="text-white/70 text-sm hover:text-white transition-colors duration-200
                         break-all"
            >
              Krishivrawat712@gmail.com
            </Link>

            <div className="mt-8">
              <p className="text-white text-xl sm:text-2xl font-semibold leading-snug mb-5">
                Let's build something<br />great together.
              </p>
              <Link
                href="mailto:Krishivrawat712@gmail.com"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                           border border-white/15 bg-white/[0.04] text-white/70 text-sm
                           hover:text-white hover:border-white/30 hover:bg-white/[0.08]
                           transition-all duration-200"
              >
                Get in touch
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200
                             group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* ── BOTTOM COPYRIGHT ROW ────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-between gap-3
                     py-5 relative z-10"
        >
          <p className="text-white/20 text-xs font-mono">
            © {year} Krishanpal Rawat. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </motion.div>
      </div>

      <div className="hidden md:block relative w-full overflow-hidden leading-none select-none pointer-events-none"
           style={{ height: "clamp(100px, 16vw, 200px)" }}>
        <motion.p
          variants={nameReveal}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="absolute bottom-0 left-1/2 -translate-x-1/2
                     whitespace-nowrap font-black uppercase tracking-tighter
                     text-white/[0.06]"
          style={{
            fontSize: "clamp(80px, 15vw, 200px)",
            lineHeight: 1,
            fontFamily: "var(--font-machina, inherit)",
          }}
        >
          KRISHANPAL
        </motion.p>
      </div>

    </footer>
  );
}