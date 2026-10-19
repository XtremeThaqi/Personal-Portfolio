"use client";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import { MotionConfig } from "framer-motion";

const Contact = dynamic(() => import("./components/Contact"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading contact...
    </div>
  ),
});

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content" tabIndex={-1}>
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
