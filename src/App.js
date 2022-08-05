import "./App.css";

// Components
import BarNav from "./components/navigation/BarNav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

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
