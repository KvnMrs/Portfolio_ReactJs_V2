import React from "react";

// Package
import { motion } from "framer-motion";

// Pages
import SideBar from "./components/navigation/SideBar";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Experiences from "./pages/experiences/Experiences";

const MyApp = () => {
  return (
    <>
      <SideBar />
      <motion.div
        className="main-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <About />
        {/* <Experiences />
        <Skills />
        <Projects />
        <Contact /> */}
      </motion.div>
    </>
  );
};

export default MyApp;
