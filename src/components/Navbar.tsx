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
        <h1 className="text-xl font-semibold tracking-wide text-white">
          Krishiv.dev
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-pink-400">{link}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="/krishanpal-resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm font-medium text-white hover:bg-pink-200 hover:text-pink-500 transition"
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
        <div className="md:hidden bg-black/70 backdrop-blur flex flex-col items-center justify-center space-y-6 h-screen font-bold text-white uppercase border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-pink-500 text-4xl transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}

          {/* Mobile Resume Link */}
          <a
            href="/krishanpal-resume.pdf"
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
