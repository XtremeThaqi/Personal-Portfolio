"use client";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

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
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
