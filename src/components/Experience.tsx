"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "internship" | "training";
  tag: string;
  bullets: string[];
  tech: string[];
};

const experiences: Role[] = [
  {
    title: "Software Developer Intern",
    company: "Kodnest Technologies Pvt. Ltd",
    location: "Bengaluru",
    period: "Sep 2025 – Present",
    type: "internship",
    tag: "Java Full Stack",
    bullets: [
      "Developed and tested RESTful APIs using Java and Spring Boot within a structured full-stack development program.",
      "Built backend modules using MVC architecture and OOP principles for scalable, maintainable code.",
      "Worked on database-driven features using SQL, implementing CRUD operations and server-side application logic.",
    ],
    tech: ["Java", "Spring Boot", "SQL", "MVC", "REST APIs"],
  },
  {
    title: "MERN Stack Developer Intern",
    company: "BeanGate IT Solutions Pvt. Ltd",
    location: "Bhopal",
    period: "Jan 2025 – Apr 2025",
    type: "internship",
    tag: "MERN Stack",
    bullets: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, building responsive UIs.",
      "Designed and integrated RESTful APIs with authentication, improving application performance and scalability.",
      "Strengthened skills in API integration, state management, and efficient backend development.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Frontend Development Training",
    company: "Sheryians Coding School",
    location: "Offline",
    period: "2023",
    type: "training",
    tag: "Frontend",
    bullets: [
      "Developed responsive and reusable UI components using HTML, CSS, JavaScript (ES6+), React.js, and Tailwind CSS.",
      "Applied component-based architecture, state management, and modern frontend best practices.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development Training",
    company: "Sheryians Coding School",
    location: "Offline",
    period: "2023",
    type: "training",
    tag: "Backend",
    bullets: [
      "Practical training in Node.js, Express.js, and RESTful API development following MVC principles.",
      "Worked with MongoDB, CRUD operations, and JWT-based authentication.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="bg-black py-10 sm:py-10 lg:py-10 px-5 sm:px-8 overflow-hidden border-t-1 border-white/20"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14 lg:mb-16">
          <motion.p
            className="text-white/30 text-sm font-mono mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            03 — Experience
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Where I've worked
          </motion.h2>
        </div>

        {/* LAYOUT */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-4 lg:gap-6">

          {/* LEFT — Tab list */}
          <motion.div
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`shrink-0 lg:w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 group ${
                  active === i
                    ? "bg-white/[0.07] border-white/20 text-white"
                    : "bg-transparent border-white/[0.06] text-white/40 hover:text-white/70 hover:border-white/12 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-mono text-white/25 mb-1">{exp.period}</p>
                    <p className="text-sm font-medium leading-snug">{exp.company}</p>
                  </div>
                  <span
                    className={`shrink-0 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                      exp.type === "internship"
                        ? "border-emerald-500/30 text-emerald-400/70"
                        : "border-white/15 text-white/30"
                    }`}
                  >
                    {exp.type === "internship" ? "Intern" : "Training"}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* RIGHT — Detail card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 sm:p-10"
          >
            {/* Card header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-8 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-white/30 font-mono">
                  {experiences[active].tag}
                </span>
                <h3 className="text-2xl sm:text-3xl text-white font-semibold mt-2 mb-1">
                  {experiences[active].title}
                </h3>
                <p className="text-white/40 text-sm">
                  {experiences[active].company} &nbsp;·&nbsp; {experiences[active].location}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 text-white/40">
                  {experiences[active].period}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-4 mb-8">
              {experiences[active].bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="flex items-start gap-3 text-white/55 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-machina)" }}
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-white/25 text-xs uppercase tracking-widest mb-3">Tech used</p>
              <div className="flex flex-wrap gap-2">
                {experiences[active].tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Education strip */}
        <motion.div
          className="mt-6 bg-[#0e0e0e] border border-white/10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 6L8 3L14 6L8 9L2 6Z"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 6V10M4.5 7.5V11C4.5 11 6 12.5 8 12.5C10 12.5 11.5 11 11.5 11V7.5"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-white/25 text-xs uppercase tracking-widest mb-0.5">Education</p>
              <p className="text-white text-sm font-medium">
                Master of Computer Applications — AI/ML
              </p>
              <p className="text-white/40 text-xs mt-0.5">
                LNCT University, Bhopal &nbsp;·&nbsp; 2023–2025
              </p>
            </div>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-white/25 text-xs uppercase tracking-widest mb-0.5">CGPA</p>
            <p className="text-white text-2xl font-semibold">7.8</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}