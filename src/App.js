import "./App.css";

// Package
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// Pages
import Home from "./app/pages/home/Home";
import MyApp from "./app/MyApp";

function App() {
  return (
    <>
      <motion.div
        className="scroll-control"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<MyApp />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
