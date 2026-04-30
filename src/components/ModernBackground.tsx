"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function ModernBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  // Smooth springs for the mouse follower for a more fluid feel
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.5 });

  useEffect(() => {
    setIsMounted(true);
    // Center initially or track mouse
    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        Ambient slow-moving glowing orbs 
        These use pure CSS animations for near-zero performance cost
      */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/30 rounded-full blur-[140px] mix-blend-screen animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[140px] mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] bg-rose-500/20 rounded-full blur-[140px] mix-blend-screen animate-blob animation-delay-4000" />

      {/* Mouse follower orb */}
      {isMounted && (
        <motion.div
          className="absolute w-[500px] h-[500px] bg-pink-400/15 rounded-full blur-[120px] mix-blend-screen"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </div>
  );
}
