import "./App.css";

<<<<<<< HEAD
// Modules
import { Routes, Route } from "react-router-dom";

// pages
=======
// Package
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// Pages
>>>>>>> develop
import Home from "./app/pages/home/Home";
import MyApp from "./app/MyApp";

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="scroll-control">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<MyApp />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
=======
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
>>>>>>> develop
    </>
  );
}

export default App;
