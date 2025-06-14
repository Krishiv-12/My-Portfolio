"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <ScrollToTop />
    </>
  );
}
