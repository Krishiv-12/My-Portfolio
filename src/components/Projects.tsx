"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  tag: string;
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
    tag: "E-Commerce",
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
    tag: "AI / Health",
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
    tag: "Productivity",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = projects.length;

  const goTo = (index: number) => setCurrent((index + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    dragStartX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const delta = dragStartX.current - endX;
    if (delta > 60) next();
    else if (delta < -60) prev();
    setDragging(false);
  };

  return (
    <section
      id="projects"
      className="bg-black py-20 sm:py-24 lg:py-28 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>

          <motion.span
            className="text-white/30 text-sm font-mono hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </motion.span>
        </div>

        {/* SLIDER */}
        <div
          className={`relative select-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={(e) => {
            if (dragging) onDragEnd(e);
          }}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          <SliderCard
            project={projects[current]}
            index={current}
          />
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between mt-8 sm:mt-10">
          {/* Dot indicators */}
          <div className="flex gap-2.5 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className="relative h-[3px] rounded-full transition-all duration-300 overflow-hidden"
                style={{ width: i === current ? 32 : 16 }}
              >
                <span className="absolute inset-0 rounded-full bg-white/20" />
                {i === current && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-pink-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <ArrowBtn direction="left" onClick={prev} />
            <ArrowBtn direction="right" onClick={next} />
          </div>
        </div>

      </div>
    </section>
  );
}

function SliderCard({
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
      key={index}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
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
            draggable={false}
          />
        </motion.div>

        {/* Tag badge */}
        <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white/70 backdrop-blur-sm">
          {project.tag}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl" />
      </div>

      {/* PROJECT CONTENT */}
      <div>
        <span className="text-white/30 text-sm">0{index + 1}</span>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mt-3 mb-4">
          {project.title}
        </h3>

        <p
          style={{ fontFamily: "var(--font-machina)" }}
          className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 max-w-xl"
        >
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
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
            View Code
          </Link>

          <Link
            ref={liveRef}
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-pink-400 transition"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ArrowBtn({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label={direction === "left" ? "Previous project" : "Next project"}
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-200"
    >
      {direction === "left" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.button>
  );
}
