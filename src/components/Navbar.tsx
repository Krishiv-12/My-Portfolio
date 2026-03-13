"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-gray-200">
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

          {/* Resume Button */}
          <a
            href="/KrishanpalRawat-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-2 rounded-full border-t-2 border-white 
             px-4 py-1.5 text-sm font-medium text-white bg-pink-400 
             hover:bg-pink-200 hover:text-pink-500 
             hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
             hover:translate-y-[-2px]
             transition-all duration-300"
          >
            Resume <Download size={16} />
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur flex flex-col items-center justify-center space-y-4 h-screen font-bold text-white uppercase border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-pink-500 text-2xl transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}

          {/* Mobile Resume Link */}
          <a
            href="/KrishanpalRawat-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-3 text-2xl text-pink-400 hover:text-pink-300 transition"
            onClick={() => setOpen(false)}
          >
            Download Resume <Download size={28} />
          </a>
        </div>
      )}
    </header>
  );
}
