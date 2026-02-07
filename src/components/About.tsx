"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
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
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current!.querySelectorAll("span.word"),
        { color: "#555" },
        {
          color: "#fff",
          stagger: 0.08,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-1">
        {word}
      </span>
    ));

  return (
    <section id="about" className="py-20 bg-black text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* 🔥 GSAP + Framer Motion paragraph */}
        <motion.p
          ref={textRef}
          className="text-lg mb-12 max-w-3xl mx-auto font-inter leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {splitText(
            "Hi, I'm Krishanpal Rawat — a passionate Full-Stack Developer specializing in the MERN stack based in Bhopal, M.P., currently pursuing MCA from LNCT University."
          )}
          <br />
          <br />
          {splitText(
            "With hands-on experience at Sheryians Coding School as both a Frontend and Backend Developer, I love turning ideas into scalable, user-friendly web applications."
          )}
          <br />
          <br />
          <span className="text-pink-400 block mt-4">
            {splitText(
              "If you're looking for someone who's dedicated, curious, and ready to make a difference — let's connect!"
            )}
          </span>
        </motion.p>

        {/* Tech stack stays unchanged */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            { icon: <FaReact size={40} />, label: "React.js" },
            { icon: <SiNextdotjs size={40} />, label: "Next.js" },
            { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
            { icon: <FaNodeJs size={40} />, label: "Node.js" },
            { icon: <SiExpress size={40} />, label: "Express.js" },
            { icon: <SiMongodb size={40} />, label: "MongoDB" },
            { icon: <SiRedux size={40} />, label: "Redux" },
            { icon: <SiFramer size={40} />, label: "Framer Motion" },
            { icon: <SiJavascript size={40} />, label: "JavaScript" },
            { icon: <SiTypescript size={40} />, label: "TypeScript" },
            { icon: <SiFigma size={40} />, label: "Figma" },
            { icon: <FaGitAlt size={40} />, label: "Git" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:shadow-[0_0_15px_#f8f8f8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
              <p className="text-sm font-medium">{tech.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
