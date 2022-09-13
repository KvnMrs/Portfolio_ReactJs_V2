import React from "react";

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
      <div className="main-container">
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default MyApp;
