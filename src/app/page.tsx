"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
