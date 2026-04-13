"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaBootstrap } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiJavascript,
  SiPostman,
  SiJsonwebtokens,
  SiCloudinary,
  SiOpenai,
  SiSpringboot,
} from "react-icons/si";
import { SiLangchain } from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    tag: "UI Layer",
    color: "#f472b6",
    skills: [
      { icon: <FaReact size={20} />, label: "React.js" },
      { icon: <SiNextdotjs size={20} />, label: "Next.js" },
      { icon: <SiTailwindcss size={20} />, label: "Tailwind CSS" },
      { icon: <SiRedux size={20} />, label: "Redux" },
      { icon: <SiJavascript size={20} />, label: "JavaScript" },
      { icon: <SiTypescript size={20} />, label: "TypeScript" },
      { icon: <FaBootstrap size={20} />, label: "Bootstrap" },
      { icon: <SiFramer size={20} />, label: "Framer Motion" },
      { icon: <span className="text-sm font-bold">∿</span>, label: "GSAP" },
    ],
  },
  {
    label: "Backend",
    tag: "Server Layer",
    color: "#34d399",
    skills: [
      { icon: <FaNodeJs size={20} />, label: "Node.js" },
      { icon: <SiExpress size={20} />, label: "Express.js" },
      { icon: <FaJava size={20} />, label: "Java" },
      { icon: <SiSpringboot size={20} />, label: "Spring Boot" },
      { icon: <SiJsonwebtokens size={20} />, label: "JWT Auth" },
    ],
  },
  {
    label: "Database",
    tag: "Data Layer",
    color: "#60a5fa",
    skills: [
      { icon: <SiMongodb size={20} />, label: "MongoDB" },
      { icon: <span className="text-sm font-bold font-mono">SQL</span>, label: "SQL" },
    ],
  },
  {
    label: "AI & APIs",
    tag: "Intelligence",
    color: "#fb923c",
    skills: [
      { icon: <SiOpenai size={20} />, label: "OpenAI API" },
      { icon: <SiLangchain size={20} />, label: "LangChain.js" },
      { icon: <span className="text-xs font-bold font-mono">PE</span>, label: "Prompt Eng." },
    ],
  },
  {
    label: "Tools & Platforms",
    tag: "DevOps / Workflow",
    color: "#a78bfa",
    skills: [
      { icon: <FaGitAlt size={20} />, label: "Git / GitHub" },
      { icon: <SiPostman size={20} />, label: "Postman" },
      { icon: <SiCloudinary size={20} />, label: "Cloudinary" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            02 — Skills
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What I work with
          </motion.h2>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((cat, ci) => (
            <SkillCategory key={ci} category={cat} index={ci} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: category.color }}
        />
        <span
          className="text-xs tracking-[0.2em] uppercase font-medium"
          style={{ color: category.color }}
        >
          {category.label}
        </span>
        <span className="text-white/20 text-[10px] font-mono">— {category.tag}</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill, si) => (
          <motion.div
            key={si}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full
                       border border-white/10 bg-white/[0.04]
                       hover:bg-white/[0.08] hover:border-white/25
                       transition-all duration-200 cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.05 + si * 0.045 }}
            whileHover={{ y: -2 }}
            style={{ "--accent": category.color } as React.CSSProperties}
          >
            <span className="text-white/40 group-hover:text-[var(--accent)] transition-colors duration-200 flex items-center">
              {skill.icon}
            </span>
            <span className="text-sm text-white/65 group-hover:text-white transition-colors duration-200">
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}