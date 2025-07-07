"use client";

import { motion } from "framer-motion";
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

export default function About() {
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

        <motion.p
          className="text-lg text-white mb-12 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a passionate MERN Stack Developer based in Bhopal, M.P., currently
          pursuing MCA from LNCT University. With hands-on experience at
          Sheryians Coding School as both a Frontend and Backend Developer, I've
          built scalable full-stack apps using React, Node, MongoDB, and modern
          tools like Framer Motion and OpenAI. My goal is to craft
          high-performing apps with clean UI and smart backend logic.
        </motion.p>

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
      className="flex flex-col items-center gap-2 text-center p-4 rounded-lg transition duration-300 hover:shadow-[0_0_15px_#f8f8f8] hover:text-white"
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
