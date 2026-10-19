import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MotionProvider from "./components/MotionProvider";

export default function Page() {
  return (
    <MotionProvider>
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
    </MotionProvider>
  );
}
