"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "5+", label: "Projects Shipped" },
  { value: "7.8", label: "CGPA" },
  { value: "MCA", label: "AI / ML" },
  { value: "MERN", label: "Stack" },
];

export default function About() {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Word reveal
  useLayoutEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current!.querySelectorAll("span.word"),
        { color: "#333" },
        {
          color: "#d4d4d4",
          stagger: 0.06,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 0.6,
          },
        },
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
      className="relative bg-black text-white overflow-hidden py-24 sm:py-24 px-5 sm:px-8"
    >
      {/* Ticker */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden border-t border-white/[0.05] py-3 z-10">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {Array(4)
            .fill([
              "React.js",
              "Next.js",
              "Node.js",
              "MongoDB",
              "TypeScript",
              "Tailwind CSS",
              "Express.js",
              "OpenAI API",
              "Redux",
              "Framer Motion",
              "JWT",
              "REST APIs",
              "Git",
              "Postman",
              "Cloudinary",
              "Razorpay",
              "Java",
              "SQL",
              "Figma",
              "Bootstrap",
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

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14 lg:mb-16">
          <motion.p
            className="text-white/30 text-sm font-mono mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            01 — About
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-14 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            Who I <span className="text-white/30">am</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-20">
          {/* Bio text */}
          <motion.p
            ref={textRef}
            style={{ fontFamily: "var(--font-machina)" }}
            className="text-base sm:text-lg leading-[1.5] text-[#333]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {splitText(
              "Hi, I'm Krishanpal Rawat — a MERN Stack Developer with experience building scalable, production-ready web applications.",
            )}
            <br />
            <br />
            {splitText(
              "I specialize in crafting responsive UIs and efficient backend systems. My work spans AI-powered healthcare platforms, multi-vendor marketplaces, and productivity dashboards.",
            )}
            <br />
            <br />
            {splitText(
              "Currently a Software Developer Intern (Java Full Stack) at KodNest, Bengaluru, deepening my backend fundamentals across OOP, MVC architecture, and REST APIs.",
            )}
            <br />
            <br />
            {splitText(
              "I've trained in both frontend and backend development at Sheryians Coding School, where I sharpened my fundamentals in component-based architecture, state management, and RESTful API design from the ground up.",
            )}
            <br />
            <br />
            {splitText(
              "Outside of work, I enjoy exploring new tools, experimenting with UI animations, and pushing the limits of what's possible with modern web technologies.",
            )}
            <br />
            <br />
            <span className="text-white/50 block">
              {splitText(
                "Always building. Always learning. Focused on shipping products that make a real impact.",
              )}
            </span>
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="border border-white/10 rounded-xl px-5 py-4 bg-white/[0.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-2xl sm:text-3xl font-semibold text-white">
                  {s.value}
                </p>
                <p className="text-xs text-white/40 mt-1 tracking-wide">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
