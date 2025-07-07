"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Total duration ~2s

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        className="fixed inset-0 z-[9999] bg-gradient-to-r from-blue-500 to-white flex flex-col items-center justify-center text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider animate-pulse"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Krishiv.dev
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-semibold text-white/90 mb-4"
          key={progress}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          Loading... {progress}%
        </motion.p>

        <div className="w-60 h-2 bg-gray-600 rounded overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
