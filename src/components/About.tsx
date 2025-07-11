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
          Hi, I'm Krishanpal Rawat— a passionate Full-Stack Developer
          specializing in the MERN stack based in Bhopal, M.P., currently
          pursuing MCA from LNCT University. With hands-on experience at
          Sheryians Coding School as both a Frontend and Backend Developer, I
          love turning ideas into scalable, user-friendly web applications. Over
          the past few years, I've honed my skills by building real-world
          projects like multi-vendor e-commerce platforms, AI-powered
          productivity dashboards, and custom task management tools. My approach
          combines clean, maintainable code with an eye for responsive, modern
          UI/UX.
          <br />
          <span className="text-pink-400">
            If you're looking for someone who's dedicated, curious, and ready to
            make a difference <br /> — let's connect!
          </span>
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
