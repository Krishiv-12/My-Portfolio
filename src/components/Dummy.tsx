"use client";

import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';


export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<section className="min-h-screen w-full bg-gradient-to-tb from-white via-white to-black text-white px-10 pt-20">
  <div className="w-full flex flex-col items-center mt-10 md:mt-0 gap-6">

    <div className="flex gap-4 items-center">
      <div className="hidden md:block text-white text-sm md:text-base">
        I’m a full-stack web developer who loves turning ideas <br /> into real-world products.
      </div>
      <h1 className="text-5xl md:text-8xl text-white">WEB STACKS</h1>
    </div>

    <div className="flex gap-4 items-center">
      <h1 className="text-5xl md:text-9xl text-emerald-300">
        <Typewriter
          words={['BUILD', 'SCALE', 'DEPLOY']}
          loop={true}
          cursor
          cursorStyle="."
          typeSpeed={120}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </h1>
      <div className="hidden md:block text-white text-sm md:text-base">
        From pixel to performance — I craft products with code,<br /> logic, and a little bit of heart
      </div>
    </div>

    <div className="flex items-center">
      <h1 className="text-5xl md:text-9xl font-semibold text-white">UIX</h1>
      <span className="text-orange-500 text-3xl md:text-6xl">❤️</span>
      <h1 className="text-5xl md:text-9xl font-semibold text-white">Dx</h1>
    </div>


    <div className="flex flex-col md:flex-row md:gap-4 items-center text-white text-sm">
      <p>BHOPAL, IN <span className="font-semibold text-emerald-300">{time}</span></p>
      <p>DEVELOPER <span className="text-emerald-300 font-semibold">KRISHIV</span></p>
    </div>

    <div className="block md:hidden text-center text-white mt-6 space-y-2 text-sm">
      <p>I’m a full-stack web developer who loves turning ideas into real-world products.</p>
      <p>From pixel to performance — I craft products with code, logic, and a little bit of heart</p>
    </div>
  </div>
</section>

  );
}
