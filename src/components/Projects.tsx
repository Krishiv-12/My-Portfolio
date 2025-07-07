"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Productivity Dashboard",
    description:
      "A full-stack productivity platform with a Pomodoro timer, drag-and-drop daily planner, and OpenAI assistant. Used by 100+ users daily. Features include JWT-secured login, real-time updates via WebSockets, and trend analytics with Recharts.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT",
      "Recharts",
    ],
    github: "https://github.com/Krishiv-12/NeuroDashboard.git",
    demo: "https://neurodash.vercel.app", // update with real deployed link
  },
  {
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "A production-ready platform with 3 user roles: Admin, Vendor, and Customer. Features OTP login, Razorpay integration, vendor management, real-time analytics with Chart.js, and JWT authentication.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Chart.js",
    ],
    github: "https://github.com/Krishiv-12/Multivendor.git",
    demo: "https://multivendor-ti71.onrender.com/",
  },
  {
    title: "HealthMate AI - Intelligent Healthcare Assistant",
    description:
      "HealthMate AI is a full-stack AI-powered healthcare platform built with MERN stack that enables patients to consult doctors, book appointments, upload reports, and get AI-driven symptom analysis. It features secure JWT authentication, role-based dashboards for Admin, Doctor, and Patient.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OpenAI API",
      "Axios",
    ],
    github: "https://github.com/Krishiv-12/Healthmate-AI.git",
    demo: "https://healthmate-ai.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-white transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-400 text-black px-2 py-1 rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-pink-400 transition"
                >
                  <FaGithub /> Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-pink-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
