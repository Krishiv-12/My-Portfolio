"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Krishiv-12",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krishanpal-rawat-a7bab4278",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:Krishivrawat712@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-1 border-white/20 px-5 sm:px-8 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* TOP ROW */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/[0.07]">

          {/* BRAND */}
          <div>
            <p className="text-white text-xl font-semibold tracking-tight mb-3">
              Krishiv<span className="text-white/25">.</span>
            </p>
            <p
              style={{ fontFamily: "var(--font-machina)" }}
              className="text-white/35 text-sm leading-relaxed max-w-xs"
            >
              MERN Stack Developer crafting full-stack web experiences with a
              focus on clean code and great UI.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* NAV LINKS */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-white/50 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Available for work
            </p>
            <p className="text-white text-2xl sm:text-3xl font-semibold leading-snug mb-6">
              Let's build something great.
            </p>
            <Link
              href="mailto:Krishivrawat712@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-white/70 text-sm hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-200"
            >
              Get in touch
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">
          <p className="text-white/20 text-xs font-mono">
            © {year} Krishiv. All rights reserved.
          </p>

          <p className="text-white/20 text-xs font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>


        </div>

      </div>
    </footer>
  );
}