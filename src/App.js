import "./App.css";

// pages
import BarNav from "./app/components/navigation/BarNav";
import Home from "./app/pages/home/Home";
import About from "./app/pages/about/About";
import Skills from "./app/pages/skills/Skills";
import Contact from "./app/pages/contact/Contact";
import Projects from "./app/pages/projects/Projects";

function App() {
  return (
    <>
      <BarNav />
      <div className="scroll-smooth global-bg">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
