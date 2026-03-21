"use client";

import { motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  SiFigma,
  SiPostman,
  SiJsonwebtokens,
  SiCloudinary,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// ── Skill categories pulled from resume ──────────────────────────────────────
const skillCategories = [
  {
    label: "Frontend",
    color: "#f472b6", // pink-400
    skills: [
      { icon: <FaReact size={22} />, label: "React.js" },
      { icon: <SiNextdotjs size={22} />, label: "Next.js" },
      { icon: <SiTailwindcss size={22} />, label: "Tailwind CSS" },
      { icon: <SiRedux size={22} />, label: "Redux" },
      { icon: <SiJavascript size={22} />, label: "JavaScript" },
      { icon: <SiTypescript size={22} />, label: "TypeScript" },
      { icon: <FaBootstrap size={22} />, label: "Bootstrap" },
      { icon: <SiFramer size={22} />, label: "Framer Motion" },
    ],
  },
  {
    label: "Backend",
    color: "#34d399", // emerald-400
    skills: [
      { icon: <FaNodeJs size={22} />, label: "Node.js" },
      { icon: <SiExpress size={22} />, label: "Express.js" },
      { icon: <FaJava size={22} />, label: "Java" },
      { icon: <SiJsonwebtokens size={22} />, label: "JWT Auth" },
    ],
  },
  {
    label: "Database",
    color: "#60a5fa", // blue-400
    skills: [
      { icon: <SiMongodb size={22} />, label: "MongoDB" },
      { icon: <span className="text-base font-bold">SQL</span>, label: "SQL" },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#a78bfa", // violet-400
    skills: [
      { icon: <FaGitAlt size={22} />, label: "Git / GitHub" },
      { icon: <SiPostman size={22} />, label: "Postman" },
      { icon: <SiCloudinary size={22} />, label: "Cloudinary" },
      { icon: <SiFigma size={22} />, label: "Figma" },
    ],
  },
];

// ── Stat pills ────────────────────────────────────────────────────────────────
const stats = [
  { value: "5+", label: "Projects Shipped" },
  { value: "7.8", label: "CGPA" },
  { value: "MCA", label: "AI / ML" },
  { value: "MERN", label: "Stack" },
];

export default function About() {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // GSAP word-reveal (kept from original)
  useLayoutEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current!.querySelectorAll("span.word"),
        { color: "#444" },
        {
          color: "#e5e5e5",
          stagger: 0.06,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 0.6,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const splitText = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em]">
        {word}
      </span>
    ));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="absolute top-0 left-0 right-0 overflow-hidden border-t border-white/[0.05] py-3">
              <motion.div
                className="flex gap-10 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                {Array(4)
                  .fill([
                    "React.js", "Next.js", "Node.js", "MongoDB",
  "TypeScript", "Tailwind CSS", "Express.js", "OpenAI API",
  "Redux", "Framer Motion", "JWT", "REST APIs",
  "Git", "Postman", "Cloudinary", "Razorpay",
  "Java", "SQL", "Figma", "Bootstrap",
                  ])
                  .flat()
                  .map((tag, i) => (
                    <span
                      key={i}
                      className="shrink-0 text-[10px] tracking-[0.22em] uppercase text-white/[0.18]"
                    >
                      {tag}
                      <span className="text-pink-400/30 mx-3">·</span>
                    </span>
                  ))}
              </motion.div>
            </div>

      <div className="relative max-w-5xl mx-auto">

        {/* ── SECTION LABEL ── */}
        <motion.span
          className="inline-block text-xs tracking-[0.25em] uppercase text-white/30 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who I Am
        </motion.span>

        {/* ── HEADING ── */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-14 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          About <span className="text-pink-400">Me</span>
        </motion.h2>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 mb-20">

          {/* Bio text with GSAP word-reveal */}
          <motion.p
            ref={textRef}
            style={{ fontFamily: "var(--font-machina)" }}
            className="text-base sm:text-lg leading-[1.9] text-[#444]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {splitText(
              "Hi, I'm Krishanpal Rawat — a MERN Stack Developer with experience building scalable, production-ready web applications."
            )}
            <br /><br />
            {splitText(
              "I specialize in crafting responsive UIs and efficient backend systems. My work spans AI-powered healthcare platforms, multi-vendor marketplaces, and productivity dashboards."
            )}
            <br /><br />
            {splitText(
              "Currently a Software Developer Intern (Java Full Stack) at KodNest, Bengaluru, deepening my backend fundamentals across OOP, MVC architecture, and REST APIs."
            )}
            <br /><br />
            <span className="text-pink-400 block">
              {splitText(
                "Always building. Always learning. Focused on shipping products that make a real impact."
              )}
            </span>
          </motion.p>

          {/* Stat pills column */}
          <div className="flex flex-row lg:flex-col gap-4 flex-wrap lg:flex-nowrap justify-start lg:justify-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="flex-1 lg:flex-none border border-white/10 rounded-xl px-5 py-4
                           bg-white/[0.03] backdrop-blur-sm min-w-[120px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-2xl sm:text-3xl font-semibold text-white">{s.value}</p>
                <p className="text-xs text-white/40 mt-1 tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SKILLS DIVIDER ── */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-white/30">
            Technical Skills
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* ── SKILL CATEGORIES ── */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((cat, ci) => (
            <SkillCategory key={ci} category={cat} index={ci} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Skill category block ──────────────────────────────────────────────────────
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
      {/* Category label */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: category.color }}
        />
        <span
          className="text-xs tracking-[0.2em] uppercase font-medium"
          style={{ color: category.color }}
        >
          {category.label}
        </span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, si) => (
          <motion.div
            key={si}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full
                       border border-white/10 bg-white/[0.04]
                       hover:bg-white/[0.08] hover:border-white/20
                       transition-all duration-200 cursor-default"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: index * 0.06 + si * 0.05 }}
            whileHover={{ y: -2 }}
            style={
              {
                "--accent": category.color,
              } as React.CSSProperties
            }
          >
            <span
              className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-200"
            >
              {skill.icon}
            </span>
            <span className="text-sm text-white/75 group-hover:text-white transition-colors duration-200">
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
