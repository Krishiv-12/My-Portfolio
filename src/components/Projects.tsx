"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";


type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};


const projects: Project[] = [
  {
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "A full-stack multivendor marketplace where multiple sellers can manage products, track orders, and analyze sales through interactive dashboards. Built with React, Redux Toolkit, Node.js, Express, and MongoDB, featuring secure authentication, image uploads via Cloudinary, email notifications, and seamless payments using Razorpay.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Chart.js",
      "Role-based Auth",
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
      "OpenAI API",
      "JWT",
    ],
    github: "https://github.com/Krishiv-12/Healthmate-AI.git",
    demo: "https://healthmate-frontend-kyq4.onrender.com",
  },
  {
    title: "AI Productivity Dashboard",
    description:
      "A full-stack productivity platform with a Pomodoro timer, drag-and-drop daily planner, and OpenAI assistant. Used by 100+ users daily. Features include JWT-secured login, real-time updates via WebSockets, and trend analytics with Recharts.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Recharts",
    ],
    github: "https://github.com/Krishiv-12/NeuroDashboard.git",
    demo: "https://neurodash-frontend.onrender.com/",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="bg-black py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl text-white font-semibold mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>

        <div className="flex flex-col gap-24">
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
      className="group grid md:grid-cols-[1fr_auto] gap-8 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Left */}
      <div>
        <span className="text-white/30 text-sm mb-3 block">
          0{index + 1}
        </span>

        <h3 className="text-3xl text-white font-medium mt-4 mb-4">
          {project.title}
        </h3>

        <p className="text-white/60 max-w-xl leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-4 py-2 md:px-6 md:py-3 rounded-full border border-white text-pink-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex gap-6 mb-6">
        <Link
          ref={githubRef}
          href={project.github}
          target="_blank"
          className="relative px-4 py-3 rounded-full border border-white/20 text-white text-sm overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaGithub /> Code
          </span>
        </Link>

        <Link
          ref={liveRef}
          href={project.demo}
          target="_blank"
          className="relative px-4 py-3 rounded-full bg-white text-black text-sm overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaExternalLinkAlt /> Live
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
