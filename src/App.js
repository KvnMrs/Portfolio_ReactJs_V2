import "./App.css";
import { useEffect } from "react";

// Package
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./app/pages/home/Home";
import About from "./app/pages/about/About";
import Contact from "./app/pages/contact/Contact";
import Projects from "./app/pages/projects/Projects";
import NavMenu from "./app/components/common/navigation/NavMenu";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavMenu />
      <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
