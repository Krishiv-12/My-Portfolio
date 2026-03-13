"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "A full-stack multivendor marketplace where sellers manage products, track orders, and analyze sales through dashboards. Features include JWT authentication, Razorpay payments, Cloudinary image uploads, and analytics.",
    tech: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],
    github: "https://github.com/Krishiv-12/Multivendor.git",
    demo: "https://multivendor-ti71.onrender.com/",
    image: "/multivendor.png",
  },
  {
    title: "HealthMate AI - Healthcare Assistant",
    description:
      "AI-powered healthcare platform enabling patients to consult doctors, upload reports, and analyze symptoms using AI. Includes role-based dashboards and secure JWT authentication.",
    tech: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    github: "https://github.com/Krishiv-12/Healthmate-AI.git",
    demo: "https://healthmate-frontend-kyq4.onrender.com",
    image: "/healthmate.png",
  },
  {
    title: "AI Productivity Dashboard",
    description:
      "Productivity platform with Pomodoro timer, drag-and-drop planner, and AI assistant. Includes JWT-secured login, WebSocket real-time updates, and Recharts analytics.",
    tech: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Recharts",
    ],
    github: "https://github.com/Krishiv-12/NeuroDashboard.git",
    demo: "https://neurodash-frontend.onrender.com/",
    image: "/dashboard.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-20 sm:py-24 lg:py-28 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-16 lg:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>

        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const githubRef = useRef<HTMLAnchorElement>(null);
  const liveRef = useRef<HTMLAnchorElement>(null);

  useMagnetic(githubRef);
  useMagnetic(liveRef);

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* PROJECT IMAGE */}
      <div className="relative overflow-hidden rounded-xl group">
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <Image 
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-[240px] sm:h-[300px] lg:h-[360px] object-cover rounded-xl"
          />
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl" />
      </div>

      {/* PROJECT CONTENT */}
      <div>
        <span className="text-white/30 text-sm">0{index + 1}</span>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mt-3 mb-4">
          {project.title}
        </h3>

        <p style={{ fontFamily: "var(--font-machina)" }} className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>

        {/* TECH BADGES */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6">
          <Link
            ref={githubRef}
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-pink-400 transition"
          >
            <FaGithub />
            View Code
          </Link>

          <Link
            ref={liveRef}
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-pink-400 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}