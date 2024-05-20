import "./App.css";

// Package
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./app/pages/home/Home";
import About from "./app/pages/about/About";
import Contact from "./app/pages/contact/Contact";
import Projects from "./app/pages/projects/Projects";
import MenuNav from "./app/components/common/navigation/SideBar";

function App() {
  return (
    <>
      <MenuNav />
      <div className="main-container ">
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
