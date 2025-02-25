import Navbar from "./components/Navbar";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";
import Hero from "./screens/Hero";
import Skills from "./screens/Skills";
import { HeroHighlight, Highlight } from "./components/HeroHighlight";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="bg-[#090E16] py-10 h-full">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="z-0"
        >
          <Navbar id="top" />
          <Hero />
        </motion.h1>
      </HeroHighlight>
      <hr className="h-px bg-[#7a4ae218] border-0" />
      <AboutMe />
      <hr className="h-px bg-[#7a4ae218] border-0" />
      <Skills />
      <hr className="h-px bg-[#7a4ae218] border-0" />
      <Contact />
    </div>
  );
}

export default App;
