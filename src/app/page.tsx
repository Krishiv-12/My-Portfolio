"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
