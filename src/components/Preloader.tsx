"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Brand */}
        <motion.h1
          className="text-5xl md:text-6xl font-semibold tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Krishiv
          <span className="text-pink-400">.</span>Studio
        </motion.h1>

        {/* Sub text */}
        <motion.p
          className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Code. Create. Evolve.
        </motion.p>

        {/* Progress Line */}
        <div className="relative mt-10 h-[2px] w-64 overflow-hidden bg-white/10">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>

        {/* Optional subtle counter (modern style) */}
        <motion.span
          className="mt-6 text-xs text-white/40 tabular-nums"
          animate={{ opacity: progress > 10 ? 1 : 0 }}
        >
          {progress}%
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
}
