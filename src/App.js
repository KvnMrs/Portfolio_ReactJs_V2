import "./App.css";

// pages
import SideBar from "./app/components/navigation/SideBar";
import Home from "./app/pages/home/Home";
import About from "./app/pages/about/About";
import Skills from "./app/pages/skills/Skills";
import Contact from "./app/pages/contact/Contact";
import Projects from "./app/pages/projects/Projects";

function App() {
  return (
    <>
      <SideBar />
      <div className="scroll-smooth global-bg">
        <Home />
        <div className="main-container">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
